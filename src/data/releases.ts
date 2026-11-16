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
  {
    version: "1.6.5",
    date: "2026-11-15",
    title: "Now refuses plants outside the 10",
    notes: [
      "New plant-recognition model that also learns what to refuse: leaves of plants that are not one of the 10 DOH-approved plants, and photos with no leaf, now show \"cannot be identified\" instead of being named as a DOH plant",
      "About 98% accuracy on its validation photos; in that test under 1% of non-DOH photos were wrongly named as a DOH plant. A plant it has never seen can still occasionally be mistaken, so always confirm with an expert",
      "Includes the blank-photo check, plant photos and fixes from 1.6.2 to 1.6.4",
    ],
    notesTl: [
      "Bagong modelo sa pagkilala ng halaman na natuto na ring tumanggi: ang dahon ng halamang hindi kabilang sa 10 aprubado ng DOH, at ang mga larawang walang dahon, ay magpapakita na ng \"hindi matukoy\" sa halip na tawaging halamang DOH",
      "Humigit-kumulang 98% ang husay sa mga larawan nito sa validation; sa pagsubok na iyon, wala pang 1% ng mga larawang hindi DOH ang maling natawag na halamang DOH. Maaari pa ring magkamali sa halamang hindi pa nito nakikita, kaya laging kumpirmahin sa eksperto",
      "Kasama ang pagsusuri sa blangkong larawan, mga larawan ng halaman at mga pag-aayos mula 1.6.2 hanggang 1.6.4",
    ],
    sizeMB: 210,
  },
  {
    version: "1.6.4",
    date: "2026-11-10",
    title: "Blank-photo fix and plant photos",
    notes: [
      "Fixed a bug where a black or blank photo could be identified as a plant - the app now says it can't identify the leaf",
      "Every plant now shows its own photo in Favorites, Recently Viewed, Search and the plant page",
      "Includes the new, larger-trained model from 1.6.3",
    ],
    notesTl: [
      "Naayos ang bug kung saan maaaring makilala bilang halaman ang itim o blangkong larawan - sasabihin na ng app na hindi nito matukoy ang dahon",
      "May sariling larawan na ang bawat halaman sa Favorites, Recently Viewed, Search at sa pahina ng halaman",
      "Kasama ang bagong modelong mas malaki ang pinagsanayan mula sa 1.6.3",
    ],
    sizeMB: 210,
  },
  {
    version: "1.6.3",
    date: "2026-11-06",
    title: "Retrained on a much larger photo set",
    notes: [
      "New plant-recognition model trained on a much larger set of photos of the 10 DOH-approved medicinal plants (about 98% accuracy on its validation photos)",
      "Same 10 plants: Bayabas, Lagundi, Ulasimang bato, Ampalaya, Tsaang-gubat, Akapulko, Yerba buena, Bawang, Sambong and Niyog-niyogan",
      "Includes the disclaimer button fix from 1.6.2",
    ],
    notesTl: [
      "Bagong modelo sa pagkilala ng halaman na sinanay sa mas malaking set ng mga larawan ng 10 halamang-gamot na aprubado ng DOH (humigit-kumulang 98% ang husay sa mga larawan nito sa validation)",
      "Parehong 10 halaman: Bayabas, Lagundi, Ulasimang bato, Ampalaya, Tsaang-gubat, Akapulko, Yerba buena, Bawang, Sambong at Niyog-niyogan",
      "Kasama ang pag-aayos sa disclaimer button mula sa 1.6.2",
    ],
    sizeMB: 210,
  },
  {
    version: "1.6.2",
    date: "2026-11-01",
    title: "Fix: disclaimer button",
    notes: [
      "Fixed the \"I Understand and Agree\" button on the first-launch disclaimer, which could not be tapped on some Android phones",
      "Fixed the same problem with the buttons in the update notice",
      "Everything from 1.6.0 and 1.6.1 is included",
    ],
    notesTl: [
      "Naayos ang button na \"Naiintindihan at Sumasang-ayon Ako\" sa paunang paalala na hindi mapindot sa ilang Android phone",
      "Naayos din ang parehong problema sa mga button ng abiso sa update",
      "Kasama ang lahat mula sa 1.6.0 at 1.6.1",
    ],
    sizeMB: 210,
  },
  {
    version: "1.6.1",
    date: "2026-10-30",
    title: "Update notices switched on",
    notes: [
      "The app now checks this website for new versions and plant-list updates, and keeps working offline",
      "Includes everything from 1.6.0: the model for the 10 DOH-approved plants, multi-leaf scanning, Tsaang-gubat and Ulasimang bato",
    ],
    notesTl: [
      "Sinusuri na ng app ang website na ito para sa bagong bersyon at update ng listahan ng halaman, at gumagana pa rin offline",
      "Kasama ang lahat mula sa 1.6.0: ang modelo para sa 10 halamang aprubado ng DOH, pag-scan ng maraming dahon, Tsaang-gubat at Ulasimang bato",
    ],
    sizeMB: 210,
  },
  {
    version: "1.6.0",
    date: "2026-10-30",
    title: "New model: the 10 DOH-approved plants",
    notes: [
      "Retrained to identify exactly the 10 DOH-approved medicinal plants - 98.3% accuracy on a locked set of 236 photos the model never saw",
      "Added Tsaang-gubat and Ulasimang bato; the app now covers only the DOH list",
      "Scans two or more leaves at once and lists every plant it finds",
      "Plant list can be updated online and still works offline",
    ],
    notesTl: [
      "Muling sinanay para makilala ang eksaktong 10 halamang-gamot na aprubado ng DOH - 98.3% ang husay sa 236 na larawang hindi pa nakita ng modelo",
      "Idinagdag ang Tsaang-gubat at Ulasimang bato; DOH list na lang ang saklaw ng app",
      "Kaya nang i-scan ang dalawa o higit pang dahon at ilista ang lahat ng halamang nakita",
      "Maaaring i-update online ang listahan ng halaman at gumagana pa rin offline",
    ],
    sizeMB: 210,
  },
  {
    version: "1.5.0",
    date: "2026-10-28",
    title: "Disclaimer and update notices",
    notes: [
      "Safety disclaimer shown on first launch, on results and in Settings (English and Tagalog)",
      "The app now tells you when a newer version is available - and keeps working fully offline",
      "Check for updates from Settings",
    ],
    notesTl: [
      "Paalala sa kaligtasan sa unang pagbukas, sa mga resulta at sa Settings (English at Tagalog)",
      "Ipapaalam na ng app kapag may bagong bersyon - at patuloy itong gumagana nang offline",
      "Tingnan ang update mula sa Settings",
    ],
    sizeMB: 220,
  },
  {
    version: "1.4.0",
    date: "2026-10-11",
    title: "More accurate model, 21 plants",
    notes: [
      "Retrained on every photo source - 97.7% accuracy on photos the model never saw",
      "Added Bayabas (guava), Ampalaya, Lagundi and Sampalok to the plants it can identify",
      "Crop tool, loading indicator and scan tips on the camera",
      "Leaf size, shape, color and vein details on every plant page",
      "Full Tagalog translation of the whole app",
      "Shows \"cannot be identified\" when the AI is under 80% sure",
    ],
    sizeMB: 220,
  },
  {
    version: "1.3.0",
    date: "2026-10-11",
    title: "Crop, Tagalog and leaf traits",
    notes: [
      "Crop tool, loading indicator, scan tips",
      "Whole app translated to Tagalog",
      "Leaf traits and size shown for every plant",
    ],
  },
  {
    version: "1.2.0",
    date: "2026-10-08",
    title: "20-plant model",
    notes: ["Retrained model with 20 plants (89.9% accuracy)", "Fixed data update for existing installs"],
  },
  {
    version: "1.1.0",
    date: "2026-10-07",
    title: "Confidence check",
    notes: ["New \"cannot be identified\" screen for low-confidence scans", "Retrained 20-plant model"],
  },
  {
    version: "1.0.0",
    date: "2026-09-28",
    title: "First release",
    notes: [
      "Offline leaf identification for 17 Philippine medicinal plants",
      "English and Tagalog plant information",
      "Favorites and scan history",
    ],
  },
];
