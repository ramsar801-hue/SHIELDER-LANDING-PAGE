"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, Linkedin, Copy, AlertCircle } from "lucide-react";
import confetti from "canvas-confetti";
import { supabase } from "@/lib/supabaseClient";

type FormData = {
  fullName: string;
  email: string;
  companyName: string;
  role: string;
  volume: string;
};

export default function WaitlistForm() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitError(null);
    
    try {
      const { error } = await supabase.from('waitlist').insert([data]);
      
      if (error) throw error;
      
      setIsSubmitted(true);
      
      // Trigger Confetti
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#2563EB', '#FFFFFF', '#DC2626']
      });
    } catch (err: any) {
      console.error("Supabase Error:", err);
      setSubmitError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText("https://shieldroute.com/join?ref=founding-44");
    // Could add a "Copied!" toast here
  };

  return (
    <section id="waitlist" className="py-32 bg-background relative overflow-hidden border-t border-white/5">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0 opacity-10" 
           style={{ backgroundImage: 'linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)', backgroundSize: '80px 80px' }} />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {!isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 tracking-tighter">
                Your next disruption is already forming. <br className="hidden md:block" />
                <span className="text-accent underline decoration-white/20">AegisRoute stops the bleed.</span>
              </h2>
              <p className="text-muted text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed">
                Only 50 founding companies get priority onboarding and the 14-day pilot with the $497 setup fee completely waived. 39 spots are gone. <span className="text-danger font-bold">11 remain.</span> This is not a soft deadline. After 50, the pilot program is full. Founding pricing is no longer available.
              </p>

              <form onSubmit={handleSubmit(onSubmit)} className="bg-white/5 p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl space-y-6 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted">Full Name</label>
                    <input 
                      {...register("fullName", { required: true })}
                      placeholder="Alex Taylor"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted">Work Email</label>
                    <input 
                      {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
                      placeholder="alex@company.com"
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted">Company Name</label>
                    <input 
                      {...register("companyName", { required: true })}
                      placeholder="ShipGlobal Inc."
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder:text-muted/50 focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-black uppercase tracking-widest text-muted">Role</label>
                    <select 
                      {...register("role", { required: true })}
                      className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none appearance-none"
                    >
                      <option value="">Select Role</option>
                      <option value="COO">COO</option>
                      <option value="VP Operations">VP Operations</option>
                      <option value="Logistics Director">Logistics Director</option>
                      <option value="Supply Chain Manager">Supply Chain Manager</option>
                      <option value="Founder">Founder</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-black uppercase tracking-widest text-muted">Monthly Shipment Volume</label>
                  <select 
                    {...register("volume", { required: true })}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:border-accent focus:ring-1 focus:ring-accent transition-all outline-none appearance-none"
                  >
                    <option value="">Select Volume</option>
                    <option value="Under 50">Under 50</option>
                    <option value="50-200">50-200</option>
                    <option value="200-500">200-500</option>
                    <option value="500+">500+</option>
                  </select>
                </div>

                {submitError && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    className="flex items-center space-x-2 text-danger bg-danger/10 p-4 rounded-xl border border-danger/20"
                  >
                    <AlertCircle size={20} />
                    <p className="text-sm font-bold">{submitError}</p>
                  </motion.div>
                )}

                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  disabled={isSubmitting}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-black py-5 rounded-2xl text-xl shadow-xl shadow-accent/20 transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                      className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    <>
                      <span>Claim My Founding Seat</span>
                      <ArrowRight size={24} />
                    </>
                  )}
                </motion.button>

                <div className="pt-6 border-t border-white/5 flex flex-wrap justify-center gap-x-8 gap-y-4 text-[10px] font-black uppercase tracking-widest text-muted">
                  <span>No credit card required</span>
                  <span>Unsubscribe anytime</span>
                  <span>Your data is never shared</span>
                  <span className="flex items-center space-x-1">
                    <CheckCircle2 size={12} className="text-green-500" />
                    <span>SOC2 in progress</span>
                  </span>
                </div>
              </form>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center glass p-16 rounded-[40px] border-accent/30 shadow-2xl"
            >
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-8 border border-green-500/30">
                <CheckCircle2 className="text-green-500" size={48} />
              </div>
              <h2 className="text-4xl font-black mb-4">You&apos;re on the list! 🎉</h2>
              <p className="text-muted text-lg mb-12">
                We&apos;ll contact you 48 hours before launch with your onboarding link. <br />
                Share with a colleague to move up the queue.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                <button 
                  onClick={() => window.open('https://linkedin.com', '_blank')}
                  className="w-full md:w-auto flex items-center justify-center space-x-3 bg-[#0A66C2] px-8 py-4 rounded-xl font-bold shadow-xl shadow-black/10 transition-transform hover:-translate-y-1"
                >
                  <Linkedin size={20} />
                  <span>Share on LinkedIn</span>
                </button>
                <button 
                  onClick={handleCopy}
                  className="w-full md:w-auto flex items-center justify-center space-x-3 bg-white/5 border border-white/20 px-8 py-4 rounded-xl font-bold transition-all hover:bg-white/10"
                >
                  <Copy size={20} />
                  <span>Copy referral link</span>
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
