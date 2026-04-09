"use client";

import { motion } from "framer-motion";
import { WebGLShader } from "@/components/ui/web-gl-shader";
import { LiquidButton } from "@/components/ui/liquid-glass-button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-[100vh] md:min-h-[110vh] flex items-center justify-center overflow-hidden">
      <WebGLShader className="fixed top-0 left-0 w-full h-full block -z-10 pointer-events-none" />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto px-6 text-center">
        <div className="border border-white/10 p-2 rounded-3xl backdrop-blur-sm bg-black/20">
          <main className="relative border border-white/10 py-12 md:py-20 rounded-2xl overflow-hidden bg-black/40 shadow-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="mb-6 text-white text-center text-4xl md:text-7xl font-black tracking-tighter leading-[0.9]">
                Your next disruption <br className="md:hidden" /> is already in motion.
              </h1>
              <p className="text-white/60 px-6 text-center text-sm md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
                A typhoon is forming. A carrier just went dark. A supplier missed their last three shipments.
                <span className="block mt-4 text-white">AegisRoute sees it now. You see it now. Not in 8 hours when your phone rings.</span>
              </p>
              
              <div className="flex justify-center flex-col sm:flex-row items-center gap-6 mb-10"> 
                <a href="#roi-calculator">
                  <LiquidButton className="text-white border border-white/20 rounded-full" size={'xl'}>
                    REVEAL MY LIVE EXPOSURE
                  </LiquidButton> 
                </a>
              </div> 

              <div className="flex items-center justify-center gap-2 bg-white/5 w-fit mx-auto px-4 py-2 rounded-full border border-white/10">
                <p className="text-[10px] sm:text-xs uppercase font-black tracking-widest text-white/80">
                  🔥 47 companies are already on the waitlist to see their exposure first.
                </p>
              </div>
            </motion.div>
          </main>
        </div>
      </div>
    </section>
  );
}
