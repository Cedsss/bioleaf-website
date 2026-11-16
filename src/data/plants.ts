export type Plant = {
  filipino: string;
  english?: string;
  scientific: string;
  doh: boolean;
  /** In the DOH list but not yet recognised by the app (waiting for training photos). */
  comingSoon?: boolean;
};

/** The 10 DOH-approved herbal medicines (PITAHC) that BioLeaf recognizes. */
export const plants: Plant[] = [
  { filipino: "Lagundi", scientific: "Vitex negundo", doh: true },
  { filipino: "Sambong", scientific: "Blumea balsamifera", doh: true },
  { filipino: "Niyog-niyogan", scientific: "Quisqualis indica", doh: true },
  { filipino: "Bayabas", english: "Guava", scientific: "Psidium guajava", doh: true },
  { filipino: "Akapulko", scientific: "Senna alata", doh: true },
  { filipino: "Ampalaya", english: "Bitter melon", scientific: "Momordica charantia", doh: true },
  { filipino: "Yerba Buena", english: "Mint", scientific: "Mentha cordifolia", doh: true },
  { filipino: "Bawang", english: "Garlic", scientific: "Allium sativum", doh: true },
  { filipino: "Ulasimang Bato", english: "Pansit-pansitan", scientific: "Peperomia pellucida", doh: true },
  { filipino: "Tsaang-gubat", scientific: "Carmona retusa", doh: true },
];
