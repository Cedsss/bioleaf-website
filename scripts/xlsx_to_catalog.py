"""
Turns the plant Excel sheet into the online plant list the BioLeaf app downloads
(served at /catalog.json). This is how newly DOH-approved plants are added:

  1. Add the new plant as a row in the Excel (same columns as the existing rows,
     including the Tagalog columns K-P).
  2. Run:   python scripts/xlsx_to_catalog.py
  3. Deploy the website. Phones pick the new plants up the next time they are online,
     and keep them for offline use.

By default it adds only DOH-approved plants that are NOT already built into the app.
Options:
  --xlsx PATH       Excel file (default: ../BioLeaf_Training/PLANT'S INFO (1).xlsx)
  --app-plants PATH app's src/data/plants.ts, used to skip plants the app already has
  --all             include non-DOH plants too
  --out PATH        output (default: src/data/catalog.json)

Note: this adds the plant's INFORMATION (names, uses, preparation, Tagalog text) to the app.
Recognising the plant from a camera photo still needs training photos and a model update.
"""

import argparse
import json
import re
import time
from pathlib import Path

import openpyxl

HERE = Path(__file__).resolve().parent.parent
DEFAULT_XLSX = HERE.parent / "BioLeaf_Training" / "PLANT'S INFO (1).xlsx"
DEFAULT_APP_PLANTS = HERE.parent / "BioLeaf" / "src" / "data" / "plants.ts"
DEFAULT_OUT = HERE / "src" / "data" / "catalog.json"


def slug(scientific: str) -> str:
    name = re.split(r"\(", scientific)[0]
    name = re.sub(r"[^A-Za-z\s]", " ", name)
    words = name.strip().split()[:2]
    return "_".join(w.lower() for w in words)


def clean(v) -> str:
    return re.sub(r"[ \t]+", " ", str(v)).strip() if v else ""


def split_list(text) -> list:
    if not text:
        return []
    text = str(text).strip()
    parts = re.split(r"[\n\r]+|(?<=[.;])\s{2,}", text)
    parts = [p.strip(" \t*-•") for p in parts]
    parts = [re.sub(r"\s+", " ", p) for p in parts if p]
    return parts or [text]


def read_rows(xlsx: Path):
    wb = openpyxl.load_workbook(xlsx, data_only=True)
    for ws in wb.worksheets:
        doh = ws.title.upper().startswith("DOH")
        header = False
        for row in ws.iter_rows(values_only=True):
            if row and row[0] and str(row[0]).startswith("PLANTS NAME"):
                header = True
                continue
            if not header or not row or not row[0] or not row[2]:
                continue
            row = list(row) + [None] * (16 - len(row))
            yield doh, row


def build_plant(doh: bool, row: list) -> dict:
    names = [re.sub(r"\(.*?\)", "", n).strip() for n in re.split(r",", clean(row[1]))]
    names = [n for n in names if n]
    scientific = clean(re.split(r"\(", clean(row[2]))[0]).strip(" *")
    plant = {
        "id": slug(clean(row[2])),
        "commonName": (names[0] if names else clean(row[0]).title()),
        "scientificName": scientific,
        "family": "",
        "categories": ["Herbal Medicine"],
        "localNames": names,
        "description": clean(row[3]),
        "habitat": "",
        "medicinalUses": split_list(row[4]),
        "preparation": split_list(row[5]),
        "healthBenefits": split_list(row[6]),
        "sideEffects": split_list(row[7]),
        "warnings": split_list(row[8]),
        "descriptionFil": clean(row[10]),
        "medicinalUsesFil": split_list(row[11]),
        "preparationFil": split_list(row[12]),
        "healthBenefitsFil": split_list(row[13]),
        "sideEffectsFil": split_list(row[14]),
        "warningsFil": split_list(row[15]),
        "interestingFacts": [],
        "leafCharacteristics": {},
        "image": "leaf",
        "color": "#3D9E63",
        "regions": ["Philippines"],
        "dohApproved": doh,
    }
    return plant


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--xlsx", type=Path, default=DEFAULT_XLSX)
    ap.add_argument("--app-plants", type=Path, default=DEFAULT_APP_PLANTS)
    ap.add_argument("--all", action="store_true")
    ap.add_argument("--out", type=Path, default=DEFAULT_OUT)
    args = ap.parse_args()

    in_app = set()
    if args.app_plants.exists():
        in_app = set(re.findall(r"^    id: '([a-z0-9_]+)'", args.app_plants.read_text(encoding="utf-8"), re.M))
    print(f"App already has {len(in_app)} plants built in.")

    plants, skipped = [], []
    for doh, row in read_rows(args.xlsx):
        p = build_plant(doh, row)
        if not p["id"] or p["id"] in in_app:
            skipped.append(p["id"] or "?")
            continue
        if not doh and not args.all:
            continue
        plants.append(p)

    catalog = {
        "version": int(time.time()),
        "updatedAt": time.strftime("%Y-%m-%d"),
        "plants": plants,
    }
    args.out.parent.mkdir(parents=True, exist_ok=True)
    args.out.write_text(json.dumps(catalog, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"Wrote {len(plants)} plant(s) to {args.out}:")
    for p in plants:
        fil = "with Tagalog" if p["descriptionFil"] else "NO Tagalog text"
        print(f"  - {p['commonName']} ({p['scientificName']}) [{p['id']}] {fil}")


if __name__ == "__main__":
    main()
