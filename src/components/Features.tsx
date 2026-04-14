"use client";

import { motion } from "framer-motion";

const features = [
  {
    title: "📋 Morning Brief Bot",
    triggerText: "\"Yesterday: $5.2K sales. 32 orders. 1 low stock alert.\"",
    bullets: [
      "WhatsApp at 8 AM. No login.",
      "Wardrobing. Weight traps. Serial match.",
      "Zero paperwork. OAuth only."
    ]
  },
  {
    title: "🧾 Refund Leakage Lock",
    triggerText: "\"$2.1K fake returns blocked this month.\"",
    bullets: [
      "Wardrobing. Weight traps. Serial match.",
      "Zero paperwork. Policy enforcement.",
      "API read-only."
    ]
  },
  {
    title: "📈 Predictive Rebalancing",
    triggerText: "\"$2.5K stockout loss prevented.\"",
    bullets: [
      "Auto-transfer stock. Keep Buy Box.",
      "Zero paperwork. API read-only.",
      "Works across US, UK, CA, AU."
    ]
  }
];

export default function Features() {
  return (
    <section id="features" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            Everything your logistics team wishes existed.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
              className="p-8 bg-white/5 border border-white/5 rounded-3xl group hover:bg-white/10 transition-colors"
            >
              {/* Remove icon div since emoji is in title */}
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-xl md:text-2xl font-bold mb-6 text-accent leading-tight">{feature.triggerText}</p>
              <ul className="space-y-3">
                {feature.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-accent mr-2 mt-1">✓</span>
                    <span className="text-muted leading-relaxed text-sm lg:text-base">{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Full-width Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 glass rounded-3xl border-accent/20 text-center"
        >
          <p className="text-lg md:text-xl font-medium text-white/90">
            Works for manufacturers, freight forwarders, importers, distributors, 3PLs, and any business that moves physical goods.
            <span className="block mt-2 text-accent/80 font-bold uppercase tracking-widest text-xs">
              No platform lock-in. No industry restriction.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
