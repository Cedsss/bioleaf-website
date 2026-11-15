import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { DownloadButton, VersionList } from "@/components/VersionList";
import { releases } from "@/data/releases";

export const metadata: Metadata = {
  title: "Downloads - BioLeaf",
  description: "Download the latest BioLeaf APK for Android, or browse previous versions.",
};

export default function DownloadsPage() {
  return (
    <>
      <Navbar />
      <main className="mx-auto max-w-4xl px-5 py-16">
        <Link href="/" className="text-sm font-semibold text-brand-700 hover:underline">
          &larr; Back to home
        </Link>
        <h1 className="mt-4 text-4xl font-extrabold text-brand-900">Download BioLeaf</h1>
        <p className="mt-3 text-muted">
          Free for Android 7.0 or newer. After downloading, open the APK and allow &ldquo;Install unknown apps&rdquo; if
          Android asks.
        </p>
        <div className="mt-6">
          <DownloadButton release={releases[0]} large />
        </div>
        <h2 className="mt-14 text-2xl font-bold text-brand-900">All versions</h2>
        <div className="mt-5">
          <VersionList />
        </div>
      </main>
    </>
  );
}
