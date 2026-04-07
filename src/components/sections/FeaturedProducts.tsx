import { motion } from "motion/react";
import { products } from "@/src/lib/products";
import { ProductCard } from "../ui/ProductCard";
import { Button } from "../ui/Button";

export function FeaturedProducts() {
  return (
    <section className="bg-[#F5F0E8] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            className="font-anton text-5xl text-[#6B1A1A] uppercase sm:text-6xl"
          >
            THE LINEUP
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="mt-4 text-lg text-gray-500"
          >
            Pick your weapon.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <Button variant="primary" disabled showLock>
            See All Flavors
          </Button>
        </div>
      </div>
    </section>
  );
}
