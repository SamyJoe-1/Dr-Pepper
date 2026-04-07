export interface Product {
  id: number;
  name: string;
  description: string;
  calories: number;
  color: string;
  image?: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Dr Pepper Original",
    description: "The classic. 23 flavors.",
    calories: 150,
    color: "#6B1A1A",
  },
  {
    id: 2,
    name: "Dr Pepper Zero Sugar",
    description: "Zero compromise.",
    calories: 0,
    color: "#1a1a1a",
  },
  {
    id: 3,
    name: "Dr Pepper Cherry",
    description: "Sweet meets bold.",
    calories: 160,
    color: "#8B0000",
  },
  {
    id: 4,
    name: "Dr Pepper Dark Berry",
    description: "Limited. Wild. Yours.",
    calories: 160,
    color: "#1a0b2e",
  },
  {
    id: 5,
    name: "Dr Pepper Strawberries & Cream",
    description: "Dessert in a can.",
    calories: 150,
    color: "#ff4d6d",
  },
  {
    id: 6,
    name: "Dr Pepper Creamy Coconut",
    description: "NEW DROP 🔥",
    calories: 150,
    color: "#f5f5f5",
  },
  {
    id: 7,
    name: "Dr Pepper & Cream Soda",
    description: "Smooth operator.",
    calories: 170,
    color: "#d4a373",
  },
  {
    id: 8,
    name: "Dr Pepper Caffeine Free",
    description: "All flavor. No buzz.",
    calories: 150,
    color: "#6B1A1A",
  },
];
