export type Plant = {
  filipino: string;
  english?: string;
  scientific: string;
  doh: boolean;
  /** In the DOH list but not yet recognised by the app (waiting for training photos). */
  comingSoon?: boolean;
};

/** The 10 DOH-approved herbal medicines (PITAHC) come first - they are the focus of BioLeaf. */
export const plants: Plant[] = [
  { filipino: "Lagundi", scientific: "Vitex negundo", doh: true },
  { filipino: "Sambong", scientific: "Blumea balsamifera", doh: true },
  { filipino: "Niyog-niyogan", scientific: "Quisqualis indica", doh: true },
  { filipino: "Bayabas", english: "Guava", scientific: "Psidium guajava", doh: true },
  { filipino: "Akapulko", scientific: "Senna alata", doh: true },
  { filipino: "Ampalaya", english: "Bitter melon", scientific: "Momordica charantia", doh: true },
  { filipino: "Yerba Buena", english: "Mint", scientific: "Mentha cordifolia", doh: true },
  { filipino: "Bawang", english: "Garlic", scientific: "Allium sativum", doh: true },
  { filipino: "Ulasimang Bato", english: "Pansit-pansitan", scientific: "Peperomia pellucida", doh: true, comingSoon: true },
  { filipino: "Tsaang-gubat", scientific: "Carmona retusa", doh: true, comingSoon: true },
  { filipino: "Guyabano", english: "Soursop", scientific: "Annona muricata", doh: false },
  { filipino: "Siling Labuyo", english: "Chili", scientific: "Capsicum frutescens", doh: false },
  { filipino: "Takip-kuhol", english: "Gotu kola", scientific: "Centella asiatica", doh: false },
  { filipino: "Kalamansi", scientific: "Citrus microcarpa", doh: false },
  { filipino: "Coleus", scientific: "Coleus scutellarioides", doh: false },
  { filipino: "Saluyot", scientific: "Corchorus olitorius", doh: false },
  { filipino: "Luyang Dilaw", english: "Turmeric", scientific: "Curcuma longa", doh: false },
  { filipino: "Kamote", english: "Sweet potato", scientific: "Ipomoea batatas", doh: false },
  { filipino: "Malunggay", scientific: "Moringa oleifera", doh: false },
  { filipino: "Oregano", scientific: "Coleus amboinicus", doh: false },
  { filipino: "Pandan", scientific: "Pandanus amaryllifolius", doh: false },
  { filipino: "Sampa-sampalukan", scientific: "Phyllanthus niruri", doh: false },
  { filipino: "Sampalok", english: "Tamarind", scientific: "Tamarindus indica", doh: false },
];
