import { motion } from "motion/react";
import { Music, Trophy, Users } from "lucide-react";
import { Button } from "../ui/Button";

export function CultureTeaser() {
  const stats = [
    { icon: <Music size={40} />, label: "15+ Music Festivals", color: "#C0392B" },
    { icon: <Trophy size={40} />, label: "100+ College Football Games", color: "#6B1A1A" },
    { icon: <Users size={40} />, label: "2M+ Pepper Perks Members", color: "#8B0000" },
  ];

  return (
    <section className="relative overflow-hidden py-32">
      {/* Background Texture */}
      <div className="absolute inset-0 z-0 bg-[#0d0d0d]">
        <div className="absolute inset-0 opacity-20 grayscale" style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/carbon-fibre.png")' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/50 to-black" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 text-center text-[#F5F0E8]">
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="font-anton text-6xl uppercase sm:text-8xl"
        >
          THIS IS DR PEPPER COUNTRY
        </motion.h2>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-xl text-[#F5F0E8]/70"
        >
          Concerts. Stadiums. Tailgates. Wherever the good stuff happens.
        </motion.p>

        <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center rounded-2xl bg-white/5 p-10 backdrop-blur-sm border border-white/10"
            >
              <div className="mb-6 text-[#C0392B]">{stat.icon}</div>
              <span className="font-anton text-2xl uppercase tracking-tight">{stat.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-16">
          <Button variant="outline" size="lg" disabled showLock>
            Explore the Culture
          </Button>
        </div>
      </div>
    </section>
  );
}
