"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bell } from "lucide-react";

const activities = [
  "A freight forwarder in Dubai just joined the waitlist",
  "A manufacturer in Stuttgart just claimed a founding spot",
  "A food distributor in Manchester is on the waitlist",
  "A pharma importer in London just joined waitlist",
  "A 3PL in Singapore just secured a founding rate",
  "A distributor in Mumbai is on the waitlist",
  "An importer in Chicago just claimed a founding spot",
  "A logistics director in Sydney joined the waitlist"
];

const times = ["2 min ago", "7 min ago", "11 min ago", "18 min ago", "24 min ago", "31 min ago"];

export default function FOMOBar() {
  const [index, setIndex] = useState(0);
  const [showToast, setShowToast] = useState(false);
  const [toastContent, setToastContent] = useState("");

  useEffect(() => {
    // Activity strip rotation
    const rotateInterval = setInterval(() => {
      setIndex((prev) => (prev + 1) % activities.length);
    }, 45000); // Rotate strip every 45s

    // Toast notification logic
    const toastTimer = setTimeout(() => {
      triggerToast();
    }, 10000); // First toast after 10s

    return () => {
      clearInterval(rotateInterval);
      clearTimeout(toastTimer);
    };
  }, []);

  const triggerToast = () => {
    const activity = activities[Math.floor(Math.random() * activities.length)];
    setToastContent(activity);
    setShowToast(true);
    
    // Hide toast after 5s
    setTimeout(() => {
      setShowToast(false);
      // Schedule next toast (every 3-4 mins)
      setTimeout(triggerToast, (180 + Math.random() * 60) * 1000);
    }, 5000);
  };

  return (
    <>
      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 z-40 bg-black/80 backdrop-blur-md border-t border-white/10 py-3 md:py-4 px-6 overflow-hidden">
        <div className="container mx-auto flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="flex items-center space-x-3 text-sm md:text-base text-white/90 font-medium"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span>{activities[index]}</span>
              <span className="text-muted text-xs md:text-sm font-mono">— {times[index % times.length]}</span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Toast Notification */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, x: 100, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100, scale: 0.9 }}
            className="fixed bottom-24 right-6 md:right-10 z-[100] max-w-sm glass p-5 rounded-2xl shadow-2xl border-accent/30 flex items-start space-x-4"
          >
            <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
              <Bell className="text-accent" size={20} />
            </div>
            <div>
              <div className="text-[10px] font-black uppercase tracking-widest text-accent mb-1">New Activity</div>
              <div className="text-sm font-bold text-white leading-tight">{toastContent}</div>
              <div className="text-[10px] text-muted font-medium mt-1">Just now</div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
