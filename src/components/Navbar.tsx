import Image from "next/image";
import Link from "next/link";

const links = [
  { href: "/#features", label: "Features" },
  { href: "/#how", label: "How it works" },
  { href: "/#plants", label: "Plants" },
  { href: "/#download", label: "Download" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5">
        <Link href="/" className="flex items-center gap-2" aria-label="BioLeaf home">
          <Image src="/brand/logo.png" alt="" width={32} height={32} className="h-8 w-8" />
          <Image src="/brand/title.png" alt="BioLeaf" width={96} height={34} className="h-7 w-auto" />
        </Link>
        <nav className="hidden items-center gap-7 text-sm font-medium text-muted md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="transition hover:text-brand-800">
              {l.label}
            </Link>
          ))}
        </nav>
        <Link
          href="/#download"
          className="rounded-full bg-brand-800 px-5 py-2 text-sm font-semibold text-white transition hover:bg-brand-700"
        >
          Download
        </Link>
      </div>
    </header>
  );
}
