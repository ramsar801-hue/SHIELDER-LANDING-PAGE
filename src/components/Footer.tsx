"use client";

import { Shield, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-950 pt-24 pb-32 border-t border-white/5 relative z-10 overflow-hidden">
      {/* Aurora blur effect in footer */}
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent/20 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
          <div className="flex flex-col">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-accent/20 p-2 rounded-lg border border-accent/20">
                <Shield className="text-accent" size={20} />
              </div>
              <span className="text-2xl font-black tracking-tighter text-white leading-none">
                AEGIS<span className="text-accent">ROUTE</span>
              </span>
            </div>
            <span className="text-sm text-gray-400 font-medium">
              Enterprise-grade supply chain intelligence for the next generation.
            </span>
            <a
              href="mailto:auraintelligence007@gmail.com"
              className="mt-3 flex items-center gap-2 text-sm text-gray-400 hover:text-accent transition-colors group"
            >
              <Mail size={14} className="text-accent/60 group-hover:text-accent transition-colors" />
              <span className="font-medium">auraintelligence007@gmail.com</span>
            </a>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-4">
            <a href="#" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Privacy</a>
            <a href="#" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Terms</a>
            <a href="mailto:auraintelligence007@gmail.com" className="text-xs font-black uppercase tracking-widest text-gray-400 hover:text-white transition-colors">Contact</a>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between text-[10px] font-black uppercase tracking-[0.3em] text-gray-600 gap-4">
          <span>&copy; 2026 AEGISROUTE.</span>
          <div className="flex items-center gap-4">
            <span className="text-accent/50">ENGINE_v4.2.0</span>
            <span>SOC2_READY</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
