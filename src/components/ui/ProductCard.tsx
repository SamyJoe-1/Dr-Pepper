import { motion } from "motion/react";
import { Heart, Plus } from "lucide-react";
import { useState } from "react";
import { Product } from "@/src/lib/products";
import { Button } from "./Button";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="group relative flex flex-col rounded-2xl bg-white p-6 shadow-sm transition-all hover:shadow-xl hover:shadow-[#6B1A1A]/10"
    >
      <button
        onClick={() => setIsLiked(!isLiked)}
        className="absolute right-4 top-4 z-10 rounded-full p-2 transition-colors hover:bg-gray-100"
      >
        <Heart
          size={20}
          className={isLiked ? "fill-[#C0392B] text-[#C0392B]" : "text-gray-300"}
        />
      </button>

      <div className="relative mb-6 flex aspect-square items-center justify-center overflow-hidden rounded-xl bg-gray-50">
        <div
          className="h-48 w-24 rounded-lg shadow-2xl transition-transform duration-500 group-hover:scale-110"
          style={{
            background: `linear-gradient(135deg, ${product.color}, #000)`,
          }}
        >
          <div className="flex h-full items-center justify-center p-4 text-center">
            <span className="font-anton text-xs text-white/50 uppercase">
              {product.name}
            </span>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <div className="mb-1 flex items-center justify-between">
          <h3 className="font-anton text-xl text-[#6B1A1A] uppercase">{product.name}</h3>
          <span className="rounded-full bg-gray-100 px-2 py-1 text-[10px] font-bold text-gray-500">
            {product.calories} CAL
          </span>
        </div>
        <p className="mb-4 text-sm text-gray-500">{product.description}</p>
      </div>

      <div className="mt-auto overflow-hidden">
        <motion.div
          initial={{ y: 50 }}
          whileHover={{ y: 0 }}
          className="transition-transform duration-300 group-hover:translate-y-0"
        >
          <Button className="w-full" size="sm">
            <Plus size={16} className="mr-2" /> Add to Cart
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
}
