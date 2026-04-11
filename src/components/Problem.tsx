"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Factory, FileText, Ship, Receipt, Anchor } from "lucide-react";
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
      icon: <AlertTriangle className="text-danger" size={28} />,
      title: "Silent carrier blackout",
      body: "Your carrier went silent 6 hours ago. You found out when your customer called. Penalty for late delivery: $3,200. Total damage: $11,600. For one shipment.",
      exposure: "EXPOSURE: $11,600 DAMAGE",
    },
    {
      icon: <Factory className="text-danger" size={28} />,
      title: "Supplier distress event",
      body: "Your supplier is failing. Production halt: 19 days. Lost revenue: $180,000. Finance finds out at month end when the margins are already destroyed.",
      exposure: "EXPOSURE: $180,000 REVENUE",
    },
    {
      icon: <FileText className="text-danger" size={28} />,
      title: "Tariff change shock",
      body: "The tariff changed last Tuesday. The PO you signed now costs 23% more to land. Your margin is gone. Total landed cost failure.",
      exposure: "EXPOSURE: 23% MARGIN LOSS",
    },
    {
      icon: <Ship className="text-danger" size={28} />,
      title: "Rolled shipment crisis",
      body: "⚠️ YOUR CRITICAL SHIPMENT JUST GOT 'ROLLED' TO NEXT WEEK'S VESSEL. The carrier didn't tell you. 7 days of idle production. Labor costs still running.",
      exposure: "EXPOSURE: $42k LABOR + $28k REVENUE",
    },
    {
      icon: <Receipt className="text-danger" size={28} />,
      title: "Surprise freight invoices",
      body: "⚠️ YOUR FREIGHT INVOICE ARRIVED WITH $4,700 IN SURPRISE CHARGES. Detention fees. Chassis splits. Fuel adjustments nobody approved. AP team just pays it.",
      exposure: "MONTHLY LEAK: $9,400 — $14,100",
    },
    {
      icon: <Anchor className="text-danger" size={28} />,
      title: "Port labor slowdown",
      body: "⚠️ A PORT LABOR SLOWDOWN STARTED 4 HOURS AGO. YOUR VESSEL IS 90 MINS OUT. Each day costs $1,200 in demurrage. Your penalty clause activates on Day 3.",
      exposure: "EXPOSURE: $8,600 + UNKNOWN",
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
                <span className="text-danger italic underline decoration-white/10">ShieldRoute is your buffer.</span>
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
              <div className="mb-6 bg-danger/10 w-fit p-3 rounded-2xl">{card.icon}</div>
              <h3 className="text-xl font-black mb-4 text-white uppercase tracking-tight">{card.title}</h3>
              <p className="text-gray-400 leading-relaxed mb-6 text-sm font-medium">{card.body}</p>
              
              <div className="pt-4 border-t border-white/5">
                <span className="text-[10px] font-black uppercase tracking-[0.2em] text-danger">
                  {card.exposure}
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
            From preventable logistical delivery failures
          </div>
        </motion.div>
      </div>
    </section>
  );
}
