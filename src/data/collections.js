// Single source of truth for the catalogue. Image paths are keys in src/data/images.json.
// `cover` is the hero image; `looks` are the gallery images (the cover is shown first on the detail page).
const collections = [
  {
    slug: "ross",
    title: "Ross",
    tag: "Amy SS24",
    description:
      "A sun-warmed palette of burnt orange and rich browns, cut to move with you from day to evening.",
    cover: "/images/ross/ross1.webp",
    palette: ["#ef6c40", "#a27754", "#503025"],
    looks: ["/images/ross/ross2.webp", "/images/ross/ross3.webp", "/images/ross/ross4.webp"],
  },
  {
    slug: "marie",
    title: "Marie",
    tag: "Amy SS24",
    description:
      "Soft peach and blush tones with a deep rust accent: romantic, feminine and effortlessly wearable.",
    cover: "/images/marie/marie1.webp",
    palette: ["#e59773", "#fcbad6", "#773827"],
    looks: ["/images/marie/marie2.webp", "/images/marie/marie3.webp"],
  },
  {
    slug: "diane",
    title: "Diane",
    tag: "Amy SS24",
    description:
      "Lilac and orchid set against earthy copper for a look that is playful yet polished.",
    cover: "/images/diane/diane1.webp",
    palette: ["#9d522a", "#b46ec7", "#eac8eb"],
    looks: ["/images/diane/diane2.webp", "/images/diane/diane3.webp", "/images/diane/diane4.webp"],
  },
  {
    slug: "elora",
    title: "Elora",
    tag: "Amy SS24",
    description:
      "Caramel neutrals with a bold pop of pink, finished in black for confident, statement dressing.",
    cover: "/images/elora/elora1.webp",
    palette: ["#c09465", "#f7488d", "#000000"],
    looks: ["/images/elora/elora2.webp", "/images/elora/elora3.webp"],
  },
  {
    slug: "adele",
    title: "Adele",
    tag: "Amy SS24",
    description:
      "Teal, sand and terracotta: a calm, grounded palette for pieces that feel as good as they look.",
    cover: "/images/adelle/adelle1.webp",
    palette: ["#4e7d85", "#cea088", "#a55427"],
    looks: ["/images/adelle/adelle2.webp", "/images/adelle/adelle3.webp"],
  },
  {
    slug: "claire",
    title: "Claire",
    tag: "Amy SS24",
    description:
      "Ivory, amber and cocoa in clean silhouettes: understated elegance for every occasion.",
    cover: "/images/claire/claire1.webp",
    palette: ["#f4efec", "#d38c4c", "#734234"],
    looks: ["/images/claire/claire2.webp", "/images/claire/claire3.webp", "/images/claire/claire4.webp"],
  },
  {
    slug: "ready-to-wear",
    title: "Ready To Wear",
    description:
      "Versatile everyday pieces, from tailored jumpsuits to easy dresses, made to be worn straight off the rail.",
    cover: "/images/readyToWear5.JPG",
    looks: [
      "/images/ReadyToWear1.JPG",
      "/images/readyToWear3.JPG",
      "/images/catalogFolder/readyToWear2.JPG",
      "/images/readyToWear11.JPG",
      "/images/white-jumpsuit.JPG",
      "/images/readyToWear9.JPG",
      "/images/readyToWear14.JPG",
      "/images/readyToWear6.JPG",
      "/images/readyToWearBlue.JPG",
    ],
  },
  {
    slug: "special-occasions",
    title: "Special Occasions",
    description:
      "Show-stopping gowns and occasion wear for weddings, birthdays and every celebration worth dressing up for.",
    cover: "/images/catalogFolder/specialOccassion.JPG",
    looks: [
      "/images/spacialOccassion2.JPG",
      "/images/catalog1.JPG",
      "/images/specialOccassion7.JPG",
      "/images/specialOccassion8.JPG",
      "/images/specialOccassion10.png",
      "/images/specialOccassion12.JPG",
      "/images/spacialOccassion3.JPG",
      "/images/special-occassion.jpg",
      "/images/specialOccassion5.JPG",
    ],
  },
  {
    slug: "bespoke",
    title: "Bespoke Outfits",
    description:
      "One-of-one pieces designed around you: your measurements, your fabric, your moment.",
    cover: "/images/catalogFolder/photoshoot.JPG",
    looks: [
      "/images/photoshoot2.JPG",
      "/images/photoshoot3.JPG",
      "/images/photoshoot4.JPG",
      "/images/photoshoot7.jpg",
      "/images/specialOccassion13.JPG",
      "/images/photoshootCat.JPG",
      "/images/photoshoot12.JPG",
      "/images/photoshoot13.JPG",
      "/images/photoshoot11.JPG",
    ],
  },
  {
    slug: "kids",
    title: "Kids' Collection",
    description:
      "A style for every age, starting with the little ones. Playful, comfortable pieces for birthdays, shoots and Sunday best.",
    cover: "/images/catalogFolder/catalog4.JPG",
    looks: [
      "/images/kidsCollection4.jpg",
      "/images/kidsCollection2.JPG",
      "/images/kidsCollection6.jpg",
      "/images/kidsCollection.JPG",
      "/images/kidsCollection5.jpg",
      "/images/kidsCollection8.jpg",
    ],
  },
];

export const getCollection = (slug) => collections.find((c) => c.slug === slug);

// Cover first, then the looks, without repeats (some galleries reuse the cover).
export const allLooks = (collection) => [
  ...new Set([collection.cover, ...collection.looks]),
];

export default collections;
