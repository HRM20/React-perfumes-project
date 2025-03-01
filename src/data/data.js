let perfumes = [
  {
    name: "Dark Fragrance",
    price: "370000$",
    author: "Vegan. Eau De Parfum 1.7oz/50ml",
    description: "he scent unfolds like a journey through the woodland—vibrant citrus notes of orange and bergamot cut through the dense air, reminiscent of sunlight piercing through the trees.",
    img: "data:image/jpeg;base64,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",
    id: "01",
  },
  {
    name: "VOID",
    price: "150$",
    author: "SIGNATURE COLLECTION",
    description: "In the silence of eternity, where shadows stretch infinitely, Void is born—a warm smoky fragrance that balances on the edge of existence and the unknown...",
    img: "https://www.sapphirestudiosdesign.com/wp-content/uploads/2025/01/Void-Fragrance-Sapphire-Studios-03.png",
    id: "02",
  },
  {
    name: "INFERNO",
    price: "250$",
    author: "Vegan. Eau De Parfum 1.7oz/50ml",
    description:
      "Take a journey through the dark woods and beyond the Gates of Hell...",
    img: "https://www.sapphirestudiosdesign.com/wp-content/uploads/2022/02/Inferno_fragrance_02.jpg",
    id: "03",
  },
  {
    name: "MUSE",
    price: "310$",
    author: "Vegan. Eau De Parfum 1.7oz/50ml",
    description: "Behind the gate lies a hidden garden ...The air greets you with the crisp apple and rhubarb, drawing you down winding paths",
    img: "https://www.sapphirestudiosdesign.com/wp-content/uploads/2025/01/Muse-Fragrance-Sapphire-Studios.jpg",
    id: "04",
  },
  {
    name: "MIDNIGHT REVERIE",
    price: "139$",
    author: "Vegan. Eau De Parfum 1.7oz/50ml",
    description: "Evoke the quiet magic of a garden at midnight...step into the embrace of twilight with Midnight Reverie, a fragrance steeped in moonlit wonder.",
    img: "https://www.sapphirestudiosdesign.com/wp-content/uploads/2025/01/midnight-reverie-fragrance-02.jpg",
    id: "05",
  },
];

export const getperfumes = () => {
  return perfumes;
};

export const getperfume = (number) => {
  return perfumes.find((perfume) => perfume.id == number);
};

export const deleteperfume = (number) => {
  perfumes = perfumes.filter((perfumes) => {
    return perfumes.id !== number;
  });
};
