import Image from "next/image";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PhoneMockup } from "@/components/PhoneMockup";
import { DownloadButton, VersionList } from "@/components/VersionList";
import { plants } from "@/data/plants";
import { releases } from "@/data/releases";

const features = [
  {
    title: "Works fully offline",
    text: "The AI runs on your phone. No internet, no account - identify a leaf in the field, in the garden or at home.",
    icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 4v6l4 2",
  },
  {
    title: "English and Tagalog",
    text: "Switch the whole app - menus, descriptions, uses and preparation - between English and Tagalog in one tap.",
    icon: "M4 5h9M8.5 3v2m0 0c0 4-2 7-5 8m1-3c1.5 1.5 3.5 2.500 6 3M13 21l4-10 4 10m-6.500-3h5",
  },
  {
    title: "Honest about uncertainty",
    text: "If the AI is not confident enough, BioLeaf says \"cannot be identified\" instead of guessing a wrong plant.",
    icon: "M12 9v4m0 4h.01M10.3 3.9 2.4 17.5A2 2 0 0 0 4.100 20.500h15.800a2 2 0 0 0 1.700-3L13.700 3.900a2 2 0 0 0-3.400 0Z",
  },
  {
    title: "Uses, benefits and preparation",
    text: "Each plant page lists medicinal uses, health benefits, how to prepare it, and safety warnings sourced from DOH and DA references.",
    icon: "M9 12h6m-6 4h6M8 4h8l3 3v13H5V4h3Z",
  },
  {
    title: "Leaf size, shape and veins",
    text: "Compare your leaf with typical size, shape, color, margin and vein pattern to double-check a result.",
    icon: "M4 20c0-9 6-15 16-16 0 10-6 16-16 16Zm0 0 9-9",
  },
  {
    title: "Crop, save and revisit",
    text: "Crop your photo to the leaf, save favorites and review your scan history any time.",
    icon: "M6 2v14a2 2 0 0 0 2 2h14M2 6h14a2 2 0 0 1 2 2v14",
  },
];

const steps = [
  { n: "1", title: "Take a photo", text: "Point your camera at one leaf, or choose a photo from your gallery. Crop it to the leaf." },
  { n: "2", title: "AI identifies it", text: "BioLeaf's on-device model compares your leaf against the plants it knows - in seconds, offline." },
  { n: "3", title: "Learn about it", text: "Read the plant's names, uses, benefits, preparation and safety reminders in English or Tagalog." },
];

export default function Home() {
  const latest = releases[0];
  const doh = plants.filter((p) => p.doh);
  const others = plants.filter((p) => !p.doh);

  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-brand-100 to-background">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-2 md:py-24">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-white px-3 py-1 text-xs font-semibold text-brand-700">
                <span className="h-2 w-2 rounded-full bg-brand-500" /> Free &middot; Android &middot; Works offline
              </span>
              <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-brand-900 sm:text-5xl">
                Identify Philippine medicinal plants with your camera.
              </h1>
              <p className="mt-5 max-w-xl text-lg text-muted">
                BioLeaf recognizes herbal plant leaves from a photo and tells you what the plant is, what it is used
                for, and how to prepare it - safely, offline, in English and Tagalog.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <DownloadButton release={latest} large />
                <Link href="/downloads" className="text-sm font-semibold text-brand-700 underline-offset-4 hover:underline">
                  Previous versions
                </Link>
              </div>
              <p className="mt-4 text-sm text-muted">
                Version {latest.version} &middot; Android 7.0 or newer &middot; Install the APK file after downloading.
              </p>
            </div>
            <PhoneMockup />
          </div>
        </section>

        {/* Stats */}
        <section className="border-y border-line bg-white">
          <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 text-center md:grid-cols-4">
            {[
              ["10 of 10", "DOH-approved herbs recognized"],
              ["2", "languages: English and Tagalog"],
              ["0", "internet needed to identify"],
              ["97%", "accuracy on validation photos"],
            ].map(([big, small]) => (
              <div key={small}>
                <p className="text-3xl font-extrabold text-brand-700">{big}</p>
                <p className="mt-1 text-sm text-muted">{small}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Features */}
        <section id="features" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <h2 className="text-3xl font-extrabold text-brand-900">Built for everyday herbal use</h2>
          <p className="mt-3 max-w-2xl text-muted">
            Made for students, families, health workers and anyone who wants to know the herbs growing around them.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="rounded-2xl border border-line bg-white p-6 shadow-sm">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-100 text-brand-700">
                  <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                    <path d={f.icon} />
                  </svg>
                </div>
                <h3 className="mt-4 text-lg font-bold text-brand-900">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.text}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How it works */}
        <section id="how" className="scroll-mt-20 bg-brand-900 py-20 text-white">
          <div className="mx-auto max-w-6xl px-5">
            <h2 className="text-3xl font-extrabold">How it works</h2>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {steps.map((s) => (
                <div key={s.n} className="rounded-2xl bg-white/5 p-6 ring-1 ring-white/10">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-300 text-lg font-extrabold text-brand-900">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/75">{s.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-white/70">
              <Image src="/brand/onboarding2.png" alt="" width={48} height={48} className="h-12 w-12 opacity-90" />
              <p className="max-w-xl">
                Tip for best results: one leaf, filling most of the frame, about 15-20 cm from the camera, on a plain
                background with good light.
              </p>
            </div>
          </div>
        </section>

        {/* Plants */}
        <section id="plants" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-20">
          <h2 className="text-3xl font-extrabold text-brand-900">Plants BioLeaf knows</h2>
          <p className="mt-3 max-w-2xl text-muted">
            BioLeaf focuses on the 10 herbal medicines approved by the Philippine Department of Health, and also
            recognizes other common household plants.
          </p>

          <h3 className="mt-10 text-sm font-bold uppercase tracking-wide text-brand-700">DOH-approved herbal medicines</h3>
          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            {doh.map((p) => (
              <div key={p.scientific} className="rounded-xl border border-brand-500/30 bg-white p-4">
                <p className="font-bold text-brand-900">{p.filipino}</p>
                <p className="text-xs italic text-muted">{p.scientific}</p>
                {p.english && <p className="mt-1 text-xs text-muted">{p.english}</p>}
                {p.comingSoon && (
                  <span className="mt-2 inline-block rounded-full bg-cream px-2 py-0.5 text-[10px] font-bold text-brand-700">
                    COMING SOON
                  </span>
                )}
              </div>
            ))}
          </div>

          <h3 className="mt-10 text-sm font-bold uppercase tracking-wide text-muted">Also recognized</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {others.map((p) => (
              <span key={p.scientific} className="rounded-full border border-line bg-white px-3 py-1.5 text-sm text-brand-800">
                {p.filipino} <span className="text-xs italic text-muted">{p.scientific}</span>
              </span>
            ))}
          </div>
        </section>

        {/* Download */}
        <section id="download" className="scroll-mt-20 bg-cream py-20">
          <div className="mx-auto max-w-4xl px-5">
            <h2 className="text-3xl font-extrabold text-brand-900">Download BioLeaf</h2>
            <p className="mt-3 text-muted">
              Free for Android. Download the APK, open it, and allow &ldquo;Install unknown apps&rdquo; for your browser
              or file manager if Android asks.
            </p>
            <div className="mt-6">
              <DownloadButton release={latest} large />
            </div>
            <h3 className="mt-14 text-xl font-bold text-brand-900">All versions</h3>
            <div className="mt-5">
              <VersionList />
            </div>
          </div>
        </section>

        {/* Disclaimer */}
        <section className="mx-auto max-w-4xl px-5 py-14">
          <div className="rounded-2xl border border-amber-300/60 bg-amber-50 p-6">
            <h2 className="text-lg font-bold text-amber-900">Important notice</h2>
            <p className="mt-2 text-sm leading-relaxed text-amber-900/90">
              BioLeaf is for educational purposes only. Plant identification by AI can be wrong, and the information
              provided is not a substitute for professional medical advice, diagnosis or treatment. Always consult a
              licensed healthcare professional before using any medicinal plant, especially if you are pregnant,
              breastfeeding, taking medication, or treating a child.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-white">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-5 py-8 text-sm text-muted sm:flex-row">
          <div className="flex items-center gap-2">
            <Image src="/brand/logo.png" alt="" width={24} height={24} className="h-6 w-6" />
            <span className="font-semibold text-brand-800">BioLeaf</span>
          </div>
          <p>Philippine medicinal plant identifier &middot; Information sourced from DOH-PITAHC and DA references.</p>
        </div>
      </footer>
    </>
  );
}
