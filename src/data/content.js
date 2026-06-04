export const PIECES = [
  { id: "p1", title: "Мотоциклтой хөрөг", cat: "landscape", span: "tall", size: "A3", finish: "High-Gloss", edition: "Open" },
  { id: "p2", title: "Хүрхээ", cat: "abstract", span: "wide", size: "A3", finish: "Satin Matte", edition: "Ltd / 50" },
  { id: "p3", title: "ZeroTwo", cat: "landscape", span: "std", size: "A3", finish: "High-Gloss", edition: "Open" },
  { id: "p4", title: "Хуримын зураг", cat: "portrait", span: "tall", size: "A2", finish: "Brushed", edition: "Ltd / 25" },
  { id: "p5", title: "Сагсан бөмбөг", cat: "abstract", span: "std", size: "A3", finish: "High-Gloss", edition: "Open" },
  { id: "p6", title: "Анимэ дүр", cat: "landscape", span: "wide", size: "A4", finish: "Satin Matte", edition: "Ltd / 50" },
  { id: "p7", title: "Киноны постер", cat: "abstract", span: "std", size: "A3", finish: "High-Gloss", edition: "Open" },
  // { id: "p8", title: "Glass Veil", cat: "portrait", span: "tall", size: "A3", finish: "Brushed", edition: "Ltd / 25" },
];

export const CATS = [
  { k: "all", label: "Бүх зураг" },
  { k: "landscape", label: "Хөндлөн" },
  { k: "abstract", label: "Босоо" },
  { k: "portrait", label: "Хөрөг" },
];

export const SPAN_STYLE = {
  tall: { gridColumn: "span 3", gridRow: "span 34" },
  wide: { gridColumn: "span 6", gridRow: "span 22" },
  std: { gridColumn: "span 3", gridRow: "span 26" },
};

export const STEPS = [
  { n: "01", t: "Upload", d: "Send a high-res file or your negative. We profile color and flag anything that won’t hold at scale." },
  { n: "02", t: "Proof", d: "We calibrate to your screen and ship a small test plate so you approve the real surface, not a guess." },
  { n: "03", t: "Sublimate", d: "Heat and pressure fuse the dye into the coated aluminum at 400°F — a permanent gas-to-solid bond." },
  { n: "04", t: "Finish", d: "Edge-polished, float-mounted, signed and crated. On your wall inside 72 hours of approval." },
];

export const TIERS = [
  {
    tier: "А5", desc: "А5 цаасны хэмжээтэй. Ширээн дээрээ тавих, хүнд бэлэглэхэд тохиромжтой.",
    cur: "₮", val: "39,000", per: "", from: "23см x 15см",
    feats: ["23см х 15см хэмжээ", "Мөлгөр булан", "Ширээний тавиур"],
    cta: "Захиалах", feat: false,
  },
  {
    tier: "А4", desc: "А4 цаасны хэмжээтэй. Ширээн дээрээ тавих, хананд өлгөхөд тохиромжтой.",
    cur: "₮", val: "59,000", per: "", from: "30см х 21см",
    feats: ["30см х 21см хэмжээ", "Мөлгөр булан", "Ширээний тавиур", "Соронз сонголтоор"],
    cta: "Захиалах", feat: false,
  },
  {
    tier: "А3", desc: "А3 цаасны хэмжээтэй. Хэт том биш бөгөөд хэт жижиг биш. Хананд өлгөхөд тохиромжтой.",
    cur: "₮", val: "79,000", per: "", from: "42см х 30см",
    feats: ["42см х 30см хэмжээ", "Мөлгөр булан", "Хананд тогтоох соронз"],
    cta: "Захиалах", feat: true,
  },
  {
    tier: "А2", desc: "Хамгийн том хэмжээ. Хананд өлгөхөд хамгийн тохиромжтой.",
    cur: "₮", val: "149,000", per: "", from: "60см х 40см",
    feats: ["60см х 40см хэмжээ", "Мөлгөр булан", "Хананд тогтоох соронз"],
    cta: "Захиалах", feat: false,
  },
];
