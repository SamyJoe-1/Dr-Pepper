import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { ShoppingBag, Star, Gift } from "lucide-react";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { getWelcomeMessage } from "@/src/lib/gemini";
import { cn } from "@/src/lib/utils";

export function PepperPerksTeaser() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [welcomeMsg, setWelcomeMsg] = useState("");
  const [formData, setFormData] = useState({ name: "", email: "", zip: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const msg = await getWelcomeMessage(formData.name, formData.zip);
    setWelcomeMsg(msg || "");
    setIsSubmitting(false);
  };

  const steps = [
    { icon: <ShoppingBag size={24} />, text: "Buy Dr Pepper." },
    { icon: <Star size={24} />, text: "Scan the code. Earn Pepper Points." },
    { icon: <Gift size={24} />, text: "Redeem for merch, drops, and exclusive experiences." },
  ];

  return (
    <section className="bg-[#F5F0E8] py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          <motion.div initial={{ x: -40, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ once: true }}>
            <span className="mb-4 inline-block rounded-full bg-[#6B1A1A] px-4 py-1 text-xs font-bold text-white uppercase tracking-widest">VIP CLUB</span>
            <h2 className="font-anton text-6xl text-[#6B1A1A] uppercase leading-none sm:text-7xl">EARN WHILE<br />YOU DRINK</h2>
            <p className="mt-8 text-xl text-gray-600">Join the inner circle. Get rewarded for your loyalty to the 23 flavors.</p>
            <div className="mt-12 flex flex-col gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6B1A1A] text-white">{step.icon}</div>
                  <span className="text-lg font-bold text-[#6B1A1A]">{step.text}</span>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button size="lg" onClick={() => setIsModalOpen(true)}>Join Pepper Perks</Button>
            </div>
          </motion.div>
          <div className="relative flex h-[500px] items-center justify-center">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
                className={cn(
                  "absolute rounded-2xl bg-gradient-to-b from-[#6B1A1A] to-black shadow-2xl",
                  i === 1 ? "z-20 h-80 w-40" : i === 2 ? "z-10 h-64 w-32 -translate-x-32 translate-y-10 opacity-60" : "z-0 h-56 w-28 translate-x-32 -translate-y-10 opacity-40"
                )}
              />
            ))}
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setWelcomeMsg(""); }} title="JOIN THE CLUB">
        {welcomeMsg ? (
          <div className="text-center">
            <div className="mb-6 flex justify-center"><div className="rounded-full bg-green-100 p-4 text-green-600"><Star size={48} /></div></div>
            <p className="text-xl font-bold text-[#6B1A1A]">{welcomeMsg}</p>
            <Button className="mt-8 w-full" onClick={() => setIsModalOpen(false)}>Awesome</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input required placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} className="rounded-lg border-2 border-gray-200 p-3 outline-none focus:border-[#6B1A1A]" />
            <input required type="email" placeholder="Email Address" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className="rounded-lg border-2 border-gray-200 p-3 outline-none focus:border-[#6B1A1A]" />
            <div className="grid grid-cols-2 gap-4">
              <input required type="date" className="rounded-lg border-2 border-gray-200 p-3 outline-none focus:border-[#6B1A1A]" />
              <input required placeholder="Zip Code" value={formData.zip} onChange={(e) => setFormData({ ...formData, zip: e.target.value })} className="rounded-lg border-2 border-gray-200 p-3 outline-none focus:border-[#6B1A1A]" />
            </div>
            <Button type="submit" className="mt-4" disabled={isSubmitting}>{isSubmitting ? "Signing up..." : "Sign Up Now"}</Button>
          </form>
        )}
      </Modal>
    </section>
  );
}
