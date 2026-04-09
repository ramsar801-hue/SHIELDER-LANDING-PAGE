"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
  {
    quote: "A carrier went dark on a Thursday night. ShieldRoute had us rerouted and the customer notified before I even saw the alert. That shipment had a $6,800 penalty clause. We paid nothing.",
    author: "James M.",
    role: "Head of Logistics",
    company: "Mid-size Manufacturer",
    country: "Germany",
    initials: "JM"
  },
  {
    quote: "We almost lost our biggest supplier without warning. ShieldRoute flagged distress signals 18 days before they stopped responding to us. We had a backup supplier locked in within 48 hours.",
    author: "Sarah L.",
    role: "VP Operations",
    company: "Food Distributor",
    country: "UK",
    initials: "SL"
  },
  {
    quote: "The tariff alert alone paid for 6 months. We had $340,000 in open POs when the duty rate changed. ShieldRoute told us the same day. We renegotiated 4 of them.",
    author: "Ahmed K.",
    role: "COO",
    company: "Pharmaceutical Importer",
    country: "UAE",
    initials: "AK"
  }
];

const stats = [
  { label: "$2.4M in penalties prevented across pilots", value: 2400000, prefix: "$", suffix: "M" },
  { label: "94% avg on-time delivery rate", value: 94, suffix: "%" },
  { label: "3.2 days to first prevented disruption", value: 3.2, suffix: "d" }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            From operations teams in our pilot.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 bg-white/5 border border-white/5 rounded-3xl relative"
            >
              <Quote className="absolute top-8 right-8 text-accent/20" size={40} />
              <p className="text-white/80 leading-relaxed mb-8 relative z-10">&quot;{t.quote}&quot;</p>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-white font-bold text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="font-bold text-white transition-colors">{t.author}</div>
                  <div className="text-xs text-muted">{t.role}, {t.company}</div>
                  <div className="text-[10px] text-accent font-bold uppercase tracking-widest mt-0.5">{t.country}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-white/5 rounded-[40px] p-12 border border-white/5 shadow-2xl">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-4">
              <StatNumber value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="text-muted font-medium max-w-[200px] mx-auto leading-tight">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatNumber({ value, prefix = "", suffix = "" }: { value: number | string; prefix?: string; suffix?: string }) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    // Basic counter on mount (or useIntersectionObserver)
    const duration = 2000;
    const start = 0;
    const end = typeof value === 'string' ? parseFloat(value) : value;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      setDisplayValue(progress * (end - start) + start);
      if (progress < 1) requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, [value]);

  const formatted = Number(value) >= 1000000 
    ? (displayValue / 1000000).toFixed(1) 
    : displayValue % 1 === 0 ? displayValue.toFixed(0) : displayValue.toFixed(1);

  return (
    <div className="text-4xl md:text-5xl font-black text-white">
      {prefix}{formatted}{suffix}
    </div>
  );
}
