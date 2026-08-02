"use client";

import { useEffect, useState } from "react";

function getTimeLeft(target: string) {
  const diff = new Date(target).getTime() - Date.now();
  const clamped = Math.max(diff, 0);
  return {
    days: Math.floor(clamped / (1000 * 60 * 60 * 24)),
    hours: Math.floor((clamped / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((clamped / (1000 * 60)) % 60),
    seconds: Math.floor((clamped / 1000) % 60),
    done: diff <= 0,
  };
}

export default function Countdown({ target }: { target: string }) {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft>>(() =>
    getTimeLeft(target)
  );

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft(target)), 1000);
    return () => clearInterval(id);
  }, [target]);

  const units = [
    { label: "GÜN", value: timeLeft?.days },
    { label: "SAAT", value: timeLeft?.hours },
    { label: "DAKİKA", value: timeLeft?.minutes },
    { label: "SANİYE", value: timeLeft?.seconds },
  ];

  return (
    <div className="flex gap-3 sm:gap-5 justify-center">
      {units.map((unit) => (
        <div
          key={unit.label}
          className="card-frame rounded-xl px-3 py-3 sm:px-5 sm:py-4 min-w-[64px] sm:min-w-[84px] text-center"
        >
          <div className="font-heading text-2xl sm:text-4xl text-navy tabular-nums">
            {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
          </div>
          <div className="text-[10px] sm:text-xs tracking-widest text-teal mt-1">
            {unit.label}
          </div>
        </div>
      ))}
    </div>
  );
}
