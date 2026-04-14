"use client";

import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

export default function Problem() {
  const [lossCount, setLossCount] = useState(2432000);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setLossCount((prev) => prev + 410);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const cards = [
    {
      title: "📊 Spreadsheet Jockey",
      body: "Mornings wasted in Excel hell.",
      solvedBy: "Morning Brief Bot",
    },
    {
      title: "🧾 Return Fraud Survivor",
      body: "Empty boxes. Worn dresses. Refund rage.",
      solvedBy: "Refund Leakage Lock",
    },
    {
      title: "📦 Stockout Insomniac",
      body: "3 AM. \"Is the warehouse out of stock?\"",
      solvedBy: "Predictive Rebalancing",
    },
  ];

  return (
    <section id="problem" className="py-24 bg-black relative">
      <div className="container mx-auto px-6">
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
        >
            <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter text-white">
                Supply chains are fragile. <br />
                <span className="text-danger italic underline decoration-white/10">AegisRoute is your buffer.</span>
            </h2>
            <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium">
                Logistics managers lose 15% of their day to crises they didn't see coming. We fix that.
            </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white/5 border border-white/5 p-8 rounded-[32px] hover:bg-white/10 transition-all group relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 w-1 h-full bg-danger opacity-20 group-hover:opacity-100 transition-opacity" />
              <h3 className="text-xl font-black mb-4 text-white tracking-tight">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm font-medium">{card.body}</p>
              
              <div className="pt-4 border-t border-white/5">
                <span className="text-[11px] font-black uppercase tracking-[0.1em] text-accent">
                  Solved by: {card.solvedBy}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-10 bg-danger/5 border border-danger/20 rounded-[40px] text-center max-w-4xl mx-auto backdrop-blur-sm"
        >
          <div className="text-gray-400 uppercase tracking-[0.3em] font-black text-[10px] mb-4">
            Estimated global logistics losses in the last 24 hours
          </div>
          <div className="text-6xl md:text-8xl font-black text-danger tracking-tighter tabular-nums">
            ${lossCount.toLocaleString()}
          </div>
          <div className="mt-6 text-gray-500 font-bold uppercase tracking-widest text-xs">
            From preventable execution failures
          </div>
        </motion.div>
      </div>
    </section>
  );
}
