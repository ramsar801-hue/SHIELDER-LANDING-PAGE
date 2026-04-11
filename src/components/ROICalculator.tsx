"use client";

import { useState, useMemo } from "react";
import { motion, animate } from "framer-motion";
import { useEffect } from "react";

export default function ROICalculator() {
  const [shipments, setShipments] = useState(80);
  const [incidents, setIncidents] = useState(4);
  const [costPerIncident, setCostPerIncident] = useState(8000);

  const monthlyLoss = useMemo(() => incidents * costPerIncident, [incidents, costPerIncident]);
  const growthPlanCost = 3197;
  const monthlySavings = useMemo(() => Math.max(0, monthlyLoss - growthPlanCost), [monthlyLoss]);
  const breakEven = useMemo(() => Math.ceil(growthPlanCost / costPerIncident), [costPerIncident]);
  const roi = useMemo(() => (monthlyLoss / growthPlanCost).toFixed(1), [monthlyLoss]);

  return (
    <section id="roi-calculator" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 tracking-tight">
            See exactly what AegisRoute saves your business.
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Sliders Area */}
          <div className="space-y-12 bg-white/5 p-8 md:p-12 rounded-3xl border border-white/5 shadow-xl">
            <SliderField 
              label="Monthly active shipments"
              value={shipments}
              onChange={setShipments}
              min={10}
              max={500}
              suffix="shipments"
            />
            <SliderField 
              label="Disruption incidents per month"
              value={incidents}
              onChange={setIncidents}
              min={1}
              max={20}
              suffix="incidents"
            />
            <SliderField 
              label="Average cost per incident"
              value={costPerIncident}
              onChange={setCostPerIncident}
              min={500}
              max={50000}
              step={500}
              prefix="$"
            />
          </div>

          {/* Results Area */}
          <div className="relative">
            <div className="p-8 md:p-12 bg-accent rounded-3xl text-white shadow-2xl overflow-hidden relative group">
              {/* Pattern Overlay */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
              
              <div className="relative z-10 space-y-8">
                <div>
                  <div className="text-sm font-bold uppercase tracking-widest text-white/70 mb-2">Estimated monthly loss without AegisRoute</div>
                  <AnimatedValue value={monthlyLoss} prefix="$" className="text-4xl md:text-5xl font-black" />
                </div>

                <div className="pt-8 border-t border-white/20">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">AegisRoute Growth Plan</div>
                      <div className="text-xl font-bold">$3,197/mo</div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs font-bold uppercase tracking-widest text-white/70 mb-1">Annual ROI</div>
                      <div className="text-xl font-bold">{roi}×</div>
                    </div>
                  </div>

                  <div className="bg-white/10 p-6 rounded-2xl border border-white/20">
                    <div className="text-sm font-bold uppercase tracking-widest text-white/70 mb-2">Your estimated monthly savings</div>
                    <AnimatedValue value={monthlySavings} prefix="$" className="text-5xl md:text-6xl font-black text-white" />
                  </div>

                  <div className="mt-6 text-center text-sm font-medium">
                    You break even if we prevent just <span className="underline font-bold">{breakEven}</span> {breakEven === 1 ? 'incident' : 'incidents'}.
                  </div>
                </div>

                <motion.a
                  href="#waitlist"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="block w-full bg-white text-accent py-4 rounded-xl text-center font-bold text-lg shadow-xl shadow-black/10"
                >
                  Lock in your founding rate before this closes
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SliderField({ label, value, onChange, min, max, step = 1, prefix = "", suffix = "" }: { 
  label: string; 
  value: number; 
  onChange: (v: number) => void; 
  min: number; 
  max: number; 
  step?: number; 
  prefix?: string; 
  suffix?: string; 
}) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <label className="text-sm font-bold text-white uppercase tracking-wider">{label}</label>
        <span className="text-xl font-mono font-bold text-accent">
          {prefix}{value.toLocaleString()}{suffix && ` ${suffix}`}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(parseInt(e.target.value))}
        className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent"
      />
      <div className="flex justify-between text-[10px] text-muted font-bold uppercase">
        <span>{prefix}{min.toLocaleString()}</span>
        <span>{prefix}{max.toLocaleString()}</span>
      </div>
    </div>
  );
}

function AnimatedValue({ value, prefix = "", className = "" }: { value: number, prefix?: string, className?: string }) {
  const [displayValue, setDisplayValue] = useState(value);

  useEffect(() => {
    const controls = animate(displayValue, value, {
      duration: 0.5,
      ease: "easeOut",
      onUpdate: (latest) => setDisplayValue(Math.floor(latest)),
    });
    return () => controls.stop();
  }, [value]);

  return (
    <div className={className}>
      {prefix}{displayValue.toLocaleString()}
    </div>
  );
}
