import catalog from "@/data/catalog.json";

// The BioLeaf app downloads this to learn about newly added (DOH-approved) plants.
// Regenerate it from the Excel sheet with:  python scripts/xlsx_to_catalog.py
export const dynamic = "force-dynamic";

export function GET() {
  return Response.json(catalog, {
    headers: { "Cache-Control": "no-store", "Access-Control-Allow-Origin": "*" },
  });
}
