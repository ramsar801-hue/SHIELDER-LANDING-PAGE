"use client";

import { motion } from "framer-motion";
import { Zap, ShieldCheck, Factory, TrendingUp, Search, RefreshCcw, Globe, Receipt, UserCheck } from "lucide-react";

const features = [
  {
    title: "Carrier blackout detection",
    desc: "Know in 15 minutes. Not 8 hours. ShieldRoute identifies when carrier GPS or EDI signals drop longer than expected.",
    icon: <Zap className="text-accent" size={24} />,
  },
  {
    title: "Contract penalty shield",
    desc: "See your $4,200 penalty risk before Thursday's deadline. AI maps live delays against your specific contract terms.",
    icon: <ShieldCheck className="text-accent" size={24} />,
  },
  {
    title: "Supplier distress warning",
    desc: "3 weeks notice before your supplier fails. We track financial health, regional labor news, and port-side output signals.",
    icon: <Factory className="text-accent" size={24} />,
  },
  {
    title: "Tariff impact alert",
    desc: "Know the same day a duty change destroys your margin. Real-time monitoring of global trade policy and HS codes.",
    icon: <TrendingUp className="text-accent" size={24} />,
  },
  {
    title: "Document error scanner",
    desc: "Catch the HS code mistake before customs does. Automated verification of BOLs, invoices, and packing lists.",
    icon: <Search className="text-accent" size={24} />,
  },
  {
    title: "Auto-pilot re-routing",
    desc: "Re-booked, rerouted, and customer notified while you were in a meeting. Fully autonomous handling of minor disruptions.",
    icon: <RefreshCcw className="text-accent" size={24} />,
  },
  {
    title: "Global Disruption Cloak",
    desc: "Monitors weather, geopolitics, and road blockages in real time. ShieldRoute overlays routes against live satellite data. Re-route proposed. Alternative locked in. Disaster avoided.",
    icon: <Globe className="text-accent" size={24} />,
  },
  {
    title: "Freight Invoice Vigilante",
    desc: "Audits every line of freight bills against contracted rates. Flags detention charges and fuel surcharges before AP pays. Average client recovers $4,700/month in overcharges.",
    icon: <Receipt className="text-accent" size={24} />,
  },
  {
    title: "Backup Supplier Auto-Source",
    desc: "The moment a primary supplier is flagged as unstable, ShieldRoute pings your pre-vetted backup list. Receive ranked quotes and availability within 15 minutes.",
    icon: <UserCheck className="text-accent" size={24} />,
  },
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
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent group-hover:text-white transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
              <p className="text-muted leading-relaxed text-sm lg:text-base">{feature.desc}</p>
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
