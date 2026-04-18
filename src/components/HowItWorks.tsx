"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Eye, BarChart3, Lightbulb, Zap, Shield, Search, TrendingDown, Bell } from "lucide-react";

const steps = [
  {
    id: 1,
    title: "WATCH",
    desc: "AegisRoute connects to your carriers, weather feeds, port data, and supplier signals. Every 60 seconds. Non-stop.",
    icon: <Eye size={24} />,
    color: "from-blue-500/20 to-transparent",
    mockup: (
      <div className="p-6 space-y-4">
        <div className="flex justify-between items-center bg-white/5 p-3 rounded-lg border border-white/10">
          <div className="flex items-center space-x-3 text-sm">
            <Search size={14} className="text-accent" />
            <span>Scanning AIS Global Data...</span>
          </div>
          <span className="text-[10px] text-green-500 font-mono tracking-wider">LIVE</span>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 p-3 rounded-lg border border-white/5">
            <div className="text-[10px] text-muted mb-1">DATA FEEDS</div>
            <div className="text-sm font-bold">1,842 active</div>
          </div>
          <div className="bg-white/5 p-3 rounded-lg border border-white/5">
            <div className="text-[10px] text-muted mb-1">LATENCY</div>
            <div className="text-sm font-bold">12ms</div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 2,
    title: "SCORE",
    desc: "Every shipment gets a live risk score 0–100 across 8 factors. Penalty exposure shown in dollars. Most dangerous shipment shown first.",
    icon: <BarChart3 size={24} />,
    color: "from-red-500/20 to-transparent",
    mockup: (
      <div className="p-6 space-y-4">
        <div className="text-sm font-bold mb-2">High Risk Assets Identified</div>
        <div className="space-y-3">
          {[
            { id: "S-942", risk: "88", loss: "$12.4k" },
            { id: "S-112", risk: "74", loss: "$8.1k" },
          ].map((item, i) => (
            <div key={i} className="flex items-center justify-between bg-white/5 p-3 rounded-lg border border-danger/20">
              <div className="flex items-center space-x-3">
                <span className="text-xs font-mono font-bold text-danger">{item.risk}</span>
                <span className="text-xs">{item.id}</span>
              </div>
              <span className="text-xs font-bold text-danger">{item.loss} exposure</span>
            </div>
          ))}
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: "DECIDE",
    desc: "When risk exceeds your threshold, AI generates a precise Command Proposal: which carrier, what it costs, what it saves, why. You maintain full control.",
    icon: <Lightbulb size={24} />,
    color: "from-amber-500/20 to-transparent",
    mockup: (
      <div className="p-6 space-y-4">
        <div className="text-sm font-bold text-accent">AI Reroute Proposal</div>
        <div className="bg-white/5 p-4 rounded-xl border border-accent/30">
          <div className="text-[10px] text-muted mb-2">PROPOSED CARRIER</div>
          <div className="text-sm font-bold mb-3">Maersk Express → DHL Air Cargo</div>
          <div className="flex justify-between items-center text-[10px]">
            <span className="text-green-500">Saves 4.2 days</span>
            <span className="text-accent underline font-bold cursor-pointer">Preview Route →</span>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: "ACT",
    desc: "One click to copy pre-written dispatch instructions to your TMS or email. We provide the intelligence. You execute.",
    icon: <Zap size={24} />,
    color: "from-emerald-500/20 to-transparent",
    mockup: (
      <div className="p-6 flex flex-col items-center justify-center h-full text-center space-y-4">
        <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 0.5 }}
          >
            <Shield className="text-green-500" size={32} />
          </motion.div>
        </div>
        <div>
          <div className="text-sm font-bold">Action Completed</div>
        </div>
      </div>
    )
  }
];

export default function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveStep((current) => (current + 1) % steps.length);
          return 0;
        }
        return prev + 1;
      });
    }, 40); // Total 4 seconds per step

    return () => clearInterval(interval);
  }, [activeStep]);

  return (
    <section id="how-it-works" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight text-white">
            AegisRoute works while you sleep.
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Stepper Controls */}
          <div className="w-full lg:w-1/2 space-y-4">
            {steps.map((step, i) => (
              <button
                key={step.id}
                onClick={() => { setActiveStep(i); setProgress(0); }}
                className={`w-full text-left p-4 md:p-6 rounded-2xl transition-all relative overflow-hidden group border ${
                  activeStep === i 
                  ? "bg-white/5 border-white/10" 
                  : "bg-transparent border-transparent hover:bg-white/5"
                }`}
              >
                {/* Progress Bar Background */}
                {activeStep === i && (
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent">
                    <motion.div 
                      className="w-full bg-white/20 origin-top"
                      style={{ height: `${progress}%` }}
                    />
                  </div>
                )}

                <div className="flex items-start space-x-4 md:space-x-6">
                  <div className={`p-3 rounded-xl flex-shrink-0 ${activeStep === i ? "bg-accent text-white" : "bg-white/5 text-muted group-hover:text-white transition-colors"}`}>
                    {step.icon}
                  </div>
                  <div>
                    <h3 className={`text-lg font-bold mb-2 ${activeStep === i ? "text-white" : "text-muted"}`}>
                      {step.title}
                    </h3>
                    <p className={`text-sm leading-relaxed ${activeStep === i ? "text-muted" : "text-muted/60"}`}>
                      {step.desc}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {/* Stepper Mockup */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/3] glass rounded-3xl overflow-hidden border-white/5 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br opacity-20 pointer-events-none" 
                   style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-from), transparent)` }}
              />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 1.05, y: -20 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full flex flex-col"
                >
                  <div className="p-4 border-b border-white/5 bg-white/5 flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-2 h-2 rounded-full bg-red-500/50" />
                      <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                      <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
                    </div>
                    <div className="text-[10px] text-muted font-mono">STEP_0{activeStep + 1}_LOGS.SYS</div>
                  </div>
                  <div className="flex-1 relative">
                    {steps[activeStep].mockup}
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
