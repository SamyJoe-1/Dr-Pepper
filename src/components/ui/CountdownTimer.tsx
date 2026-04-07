import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface CountdownTimerProps {
  targetDate: Date;
}

export function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [isSoldOut, setIsSoldOut] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance < 0) {
        clearInterval(timer);
        setIsSoldOut(true);
        return;
      }

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (isSoldOut) {
    return (
      <div className="font-anton text-5xl text-[#C0392B] uppercase tracking-widest">
        SOLD OUT
      </div>
    );
  }

  const units = [
    { label: "DD", value: timeLeft.days },
    { label: "HH", value: timeLeft.hours },
    { label: "MM", value: timeLeft.minutes },
    { label: "SS", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4">
      {units.map((unit, index) => (
        <div key={unit.label} className="flex flex-col items-center">
          <motion.div
            key={unit.value}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="flex h-16 w-16 items-center justify-center rounded-lg bg-white/10 font-anton text-3xl text-white backdrop-blur-md"
          >
            {unit.value.toString().padStart(2, "0")}
          </motion.div>
          <span className="mt-2 text-[10px] font-bold text-white/50 uppercase tracking-widest">
            {unit.label}
          </span>
          {index < units.length - 1 && (
            <div className="absolute -right-2 top-4 text-2xl text-white/20">:</div>
          )}
        </div>
      ))}
    </div>
  );
}
