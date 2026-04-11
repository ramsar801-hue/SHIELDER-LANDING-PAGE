"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Check, Zap } from "lucide-react";

export default function Pricing() {
  const [billing, setBilling] = useState<"monthly" | "annually">("annually");

  const plans = [
    {
      name: "Starter",
      monthlyPrice: 1497,
      annualPrice: 1197,
      desc: "For growing importers and distributors",
      features: [
        "Up to 50 active shipments",
        "Carrier blackout detection",
        "Contract penalty monitoring",
        "Global port disruption alerts",
        "Basic risk analytics",
        "Email support (24h)"
      ],
      cta: "Join waitlist",
      popular: false
    },
    {
      name: "Growth",
      monthlyPrice: 3997,
      annualPrice: 3197,
      desc: "Most chosen by logistics teams",
      features: [
        "Unlimited active shipments",
        "Command Center Proposals",
        "Supplier distress warnings",
        "Tariff & Duty impact alerts",
        "Real-time HS code scanner",
        "Quarterly CFO value report",
        "Dedicated Success Manager",
        "Priority Onboarding"
      ],
      cta: "Claim founding rate",
      popular: true
    },
    {
      name: "Enterprise",
      monthlyPrice: 9997,
      annualPrice: 7997,
      desc: "For 3PLs and large manufacturers",
      features: [
        "Multiple regional entities",
        "Custom API integrations",
        "Whitelabel monitoring",
        "On-premise deployment option",
        "24/7 Phone & Slack support",
        "Uptime guarantee"
      ],
      cta: "Book a pilot call",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            Less than one incident. <span className="text-accent underline underline-offset-8">Forever.</span>
          </h2>
          <p className="text-muted text-lg">
            Most clients prevent their first disruption within 3 days of going live.
          </p>

          {/* Billing Toggle */}
          <div className="mt-10 flex items-center justify-center space-x-4">
            <span className={`text-sm font-bold ${billing === 'monthly' ? 'text-white' : 'text-muted'}`}>Monthly</span>
            <button
              onClick={() => setBilling(billing === 'monthly' ? 'annually' : 'monthly')}
              className="w-14 h-7 bg-white/10 rounded-full relative flex items-center p-1 transition-colors hover:bg-white/20"
            >
              <motion.div
                animate={{ x: billing === 'monthly' ? 0 : 28 }}
                className="w-5 h-5 bg-accent rounded-full shadow-lg"
              />
            </button>
            <div className="flex items-center space-x-2">
              <span className={`text-sm font-bold ${billing === 'annually' ? 'text-white' : 'text-muted'}`}>Annually</span>
              <span className="bg-green-500/10 text-green-500 text-[10px] font-black px-2 py-0.5 rounded-full border border-green-500/20 uppercase">
                Save 20%
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto overflow-x-auto pb-8 md:pb-0 snap-x">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`snap-center min-w-[300px] flex flex-col p-8 rounded-[32px] border transition-all ${
                plan.popular 
                  ? "bg-white/5 border-accent glow-blue relative scale-105 z-10" 
                  : "bg-background border-white/5"
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-accent text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest flex items-center space-x-2">
                  <Zap size={12} />
                  <span>Founding Favorite</span>
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                <p className="text-xs text-muted font-medium mb-6">{plan.desc}</p>
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl font-black">${billing === 'monthly' ? plan.monthlyPrice.toLocaleString() : plan.annualPrice.toLocaleString()}</span>
                  <span className="text-muted text-sm font-medium">/mo</span>
                </div>
                {billing === 'annually' && (
                  <div className="text-[10px] text-muted font-bold mt-1 line-through opacity-50">
                    Was ${plan.monthlyPrice.toLocaleString()}/mo
                  </div>
                )}
              </div>

              <div className="flex-1 space-y-4 mb-10">
                {plan.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start space-x-3">
                    <div className="mt-1 bg-accent/20 rounded-full p-0.5">
                      <Check className="text-accent" size={12} strokeWidth={3} />
                    </div>
                    <span className="text-sm text-white/80">{feature}</span>
                  </div>
                ))}
              </div>

              <motion.a
                href="#waitlist"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                animate={plan.popular ? { scale: [1, 1.03, 1] } : {}}
                transition={{ repeat: Infinity, duration: 8 }}
                className={`py-4 rounded-2xl text-center font-bold text-sm transition-all ${
                  plan.popular 
                    ? "bg-accent text-white shadow-xl shadow-accent/20" 
                    : "bg-white/5 text-white border border-white/10 hover:bg-white/10"
                }`}
              >
                {plan.cta}
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* Urgency Strip */}
        <div className="mt-20 max-w-4xl mx-auto rounded-3xl bg-danger p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl shadow-danger/20">
          <div className="text-center md:text-left">
            <h4 className="text-lg md:text-xl font-black text-white mb-2 underline decoration-white/30 decoration-4">
              Founding rate ends when the waitlist closes.
            </h4>
            <p className="text-white/80 text-sm font-medium">After launch, prices increase by 40% across all plans.</p>
          </div>
          <div className="bg-black/20 text-white px-6 py-4 rounded-2xl border border-white/20 text-center min-w-[200px]">
            <div className="text-2xl font-black font-mono">11</div>
            <div className="text-[10px] font-black uppercase tracking-widest mt-1">Founding spots remaining</div>
          </div>
        </div>
      </div>
    </section>
  );
}
