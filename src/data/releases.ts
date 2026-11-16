export type Release = {
  version: string;
  date: string; // YYYY-MM-DD
  title: string;
  notes: string[];
  /** Tagalog version of `notes`, shown in the app's update notice when the app is in Tagalog. */
  notesTl?: string[];
  /** Path under /public, e.g. "/downloads/BioLeaf-v1.4.0.apk". Leave undefined if the file is not available. */
  file?: string;
  sizeMB?: number;
};

/**
 * Newest first. To publish a new version:
 *   1. Put the APK in public/downloads/ (or point `file` at a full https:// URL,
 *      e.g. a GitHub Release asset - recommended for production, see README).
 *   2. Add an entry at the TOP of this list.
 * The first entry is shown as the "Latest" download button.
 */
/** Installed apps older than this are told they MUST update before continuing. */
export const MIN_SUPPORTED_VERSION = "1.0.0";

export const releases: Release[] = [
  {
    version: "1.6.8",
    date: "2026-11-17",
    title: "New plant photos",
    notes: [
      "New photos for all 10 DOH-approved plants, showing each whole plant as it grows",
      "Shown on each plant page and next to plant names in Home, Search, Favorites and History",
      "Installs over 1.6.6 and 1.6.7 as a normal update - no need to uninstall",
    ],
    notesTl: [
      "Mga bagong larawan para sa lahat ng 10 halamang aprubado ng DOH, na ipinapakita ang buong halaman habang tumutubo",
      "Makikita sa pahina ng bawat halaman at sa tabi ng pangalan ng halaman sa Home, Search, Favorites at History",
      "Mai-install sa ibabaw ng 1.6.6 at 1.6.7 bilang karaniwang update - hindi na kailangang i-uninstall",
    ],
    file: "https://github.com/Cedsss/bioleaf-releases/releases/download/v1.6.8/BioLeaf-v1.6.8.apk",
    sizeMB: 210,
  },
  {
    version: "1.6.7",
    date: "2026-11-16",
    title: "Cleaner camera screen",
    notes: [
      "The camera screen is now a plain viewfinder: the frame and the tips on top of the camera are removed",
      "You can still crop your photo to the leaf before it is analyzed",
      "Installs over 1.6.6 as a normal update - no need to uninstall",
    ],
    notesTl: [
      "Simple na ang screen ng camera: inalis na ang frame at ang mga tip na nakapatong sa camera",
      "Maaari mo pa ring i-crop ang larawan sa dahon bago ito suriin",
      "Mai-install sa ibabaw ng 1.6.6 bilang karaniwang update - hindi na kailangang i-uninstall",
    ],
    file: "https://github.com/Cedsss/bioleaf-releases/releases/download/v1.6.7/BioLeaf-v1.6.7.apk",
    sizeMB: 210,
  },
  {
    version: "1.6.6",
    date: "2026-11-16",
    title: "Moved to the new BioLeaf website",
    notes: [
      "The app now checks this website for new versions and plant-list updates",
      "Please uninstall your old BioLeaf before installing this version. Your favorites and scan history will start fresh",
      "Same plant-recognition model and features as 1.6.5",
    ],
    notesTl: [
      "Sinusuri na ng app ang website na ito para sa bagong bersyon at update ng listahan ng halaman",
      "Paki-uninstall muna ang lumang BioLeaf bago i-install ang bersyong ito. Magsisimula muli ang iyong mga paborito at kasaysayan ng pag-scan",
      "Parehong modelo sa pagkilala ng halaman at mga feature tulad ng 1.6.5",
    ],
    file: "https://github.com/Cedsss/bioleaf-releases/releases/download/v1.6.6/BioLeaf-v1.6.6.apk",
    sizeMB: 210,
  },
];
