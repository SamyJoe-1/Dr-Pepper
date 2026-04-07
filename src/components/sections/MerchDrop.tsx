import { useState } from "react";
import React from "react";
import { motion } from "motion/react";
import { CountdownTimer } from "../ui/CountdownTimer";
import { Button } from "../ui/Button";
import { Modal } from "../ui/Modal";
import { getMerchConfirmation } from "@/src/lib/gemini";

export function MerchDrop() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmation, setConfirmation] = useState("");

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const msg = await getMerchConfirmation(email);
    setConfirmation(msg || "");
    setIsSubmitting(false);
  };

  return (
    <section className="bg-[#0d0d0d] py-32 text-[#F5F0E8]">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="mb-6 flex items-center gap-3">
              <span className="rounded-full bg-[#C0392B] px-3 py-1 text-[10px] font-bold uppercase tracking-widest">
                LIMITED DROP
              </span>
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#C0392B]" />
            </div>
            
            <h2 className="font-anton text-5xl uppercase leading-none sm:text-7xl">
              DR PEPPER VARSITY<br />JACKET — MAROON
            </h2>
            <p className="mt-4 font-anton text-3xl text-[#C0392B]">$129.00</p>
            
            <p className="mt-8 text-xl text-[#F5F0E8]/60">
              Full maroon wool blend. Chenille Dr Pepper patch on chest. Only 500 made. This is the ultimate piece for the ultimate fan.
            </p>

            <div className="mt-12">
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-[#F5F0E8]/40">
                Dropping in:
              </p>
              <CountdownTimer targetDate={targetDate} />
            </div>

            <div className="mt-12">
              <Button size="lg" onClick={() => setIsModalOpen(true)}>
                Notify Me
              </Button>
            </div>
          </motion.div>

          {/* Right Visual */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="relative aspect-square overflow-hidden rounded-3xl bg-gradient-to-br from-[#1a1a1a] to-black p-12"
          >
            <div className="flex h-full flex-col items-center justify-center border-2 border-white/5 rounded-2xl">
              <div className="mb-8 h-64 w-64 rounded-full bg-[#6B1A1A]/20 blur-3xl" />
              <span className="absolute font-anton text-4xl uppercase opacity-20">VARSITY JACKET</span>
              <div className="z-10 text-center">
                <p className="font-anton text-2xl uppercase text-[#6B1A1A]">Coming Soon</p>
                <p className="text-sm text-white/30 uppercase tracking-widest">Spring 2025 Collection</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setConfirmation(""); }} title="GET NOTIFIED">
        {confirmation ? (
          <div className="text-center">
            <p className="text-xl font-bold text-[#6B1A1A]">{confirmation}</p>
            <Button className="mt-8 w-full" onClick={() => setIsModalOpen(false)}>Got it</Button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <p className="text-sm text-gray-500">We'll send you a one-time alert the moment this item goes live.</p>
            <input
              required
              type="email"
              placeholder="EMAIL ADDRESS"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-lg border-2 border-gray-200 p-3 outline-none focus:border-[#6B1A1A]"
            />
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Saving..." : "Notify Me"}
            </Button>
          </form>
        )}
      </Modal>
    </section>
  );
}
