// src/data/products.ts

export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'gadgets' | 'clothes';
  image: string;
  description?: string;
}

export const clothes: Product[] = [
  {
    id: 'c1',
    name: "Nike Air Jordan Retro 1 X Avengers",
    image: "/source/shoes/Nike Air Jordan Retro 1 X Avengers.jpg",
    price: 2000,
    category: 'clothes',
    description: "Avengers themed Air Jordan Retro 1 sneakers"
  },
  {
    id: 'c2',
    name: "Nike Air Jordan 1 Retro High OG",
    image: "/source/shoes/Nike Air Jordan 1 Retro High blue (Custom).jpg",
    price: 1599,
    category: 'clothes'
  },
  {
    id: 'c3',
    name: "Nike jordan 1 short",
    image: "/source/shoes/Nikejordanb.jpg",
    price: 999,
    category: 'clothes'
  },
  {
    id: 'c4',
    name: "Nike jordan 2 short",
    image: "/source/shoes/Nikejordanbl.jpg",
    price: 999,
    category: 'clothes'
  },
  {
    id: 'c5',
    name: "Puma unisex sneakers",
    image: "/source/shoes/Pumaunisexb.jpg",
    price: 999,
    category: 'clothes'
  },
  {
    id: 'c6',
    name: "Puma unisex sneakers",
    image: "/source/shoes/Pumaunisexw.jpg",
    price: 999,
    category: 'clothes'
  },
  {
    id: 'c7',
    name: "Adidas samba",
    image: "/source/shoes/ADIDASSAMBA.jpg",
    price: 2499,
    category: 'clothes'
  },
  {
    id: 'c8',
    name: "Nike Sb dunk Tree hugger",
    image: "/source/shoes/NikeTree.jpg",
    price: 2999,
    category: 'clothes'
  },
  {
    id: 'c9',
    name: "Nike blue s1",
    image: "/source/shoes/Nikeblues1.jpg",
    price: 499,
    category: 'clothes'
  },
  {
    id: 'c10',
    name: "PUMA RX-S",
    image: "/source/shoes/PUMARX-S.jpg",
    price: 599,
    category: 'clothes'
  },
  {
    id: 'c11',
    name: "IMPORTED 𝗥𝗘𝗧𝗥𝗢1",
    image: "/source/shoes/imported1.jpg",
    price: 1999,
    category: 'clothes'
  },
  {
    id: 'c12',
    name: "IMPORTED 𝗥𝗘𝗧𝗥𝗢2",
    image: "/source/shoes/imported2.jpg",
    price: 1999,
    category: 'clothes'
  },
  {
    id: 'c13',
    name: "IMPORTED 𝗥𝗘𝗧𝗥𝗢3",
    image: "/source/shoes/imported3.jpg",
    price: 1999,
    category: 'clothes'
  },
  {
    id: 'c14',
    name: "SKETCHERS ENHANCE",
    image: "/source/shoes/SKETCHERS ENHANCE.jpg",
    price: 999,
    category: 'clothes'
  }
];

// If you have gadgets products, add them here following the same pattern
export const gadgets: Product[] = [
  // Example gadget:
  // {
  //   id: 'g1',
  //   name: 'Smartphone',
  //   price: 599.99,
  //   category: 'gadgets',
  //   image: '/images/smartphone.jpg',
  //   description: 'Latest model smartphone'
  // },
];

export const allProducts = [...clothes, ...gadgets];