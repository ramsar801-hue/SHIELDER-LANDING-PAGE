import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import ROICalculator from "@/components/ROICalculator";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/ui/aurora-pricing";
import FOMOBar from "@/components/FOMOBar";
import WaitlistForm from "@/components/WaitlistForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-black selection:bg-accent selection:text-white relative">
      <Navbar />
      
      {/* Hero Section - Layer 1 */}
      <div className="relative z-20">
        <Hero />
      </div>
      
      {/* Content Block - Layer 2 (Solid Backgrounds) */}
      <div className="relative z-30 bg-black shadow-[0_-50px_100px_rgba(0,0,0,1)]">
        <div id="problem" className="relative border-t border-white/5">
          <Problem />
        </div>
        
        <div id="how-it-works" className="relative border-t border-white/5">
          <HowItWorks />
        </div>
        
        <div id="features" className="relative border-t border-white/5">
          <Features />
        </div>
        
        <div id="roi" className="relative border-t border-white/5">
          <ROICalculator />
        </div>
        
        <div id="testimonials" className="relative border-t border-white/5">
          <Testimonials />
        </div>
      </div>
      
      {/* Pricing - Layer 3 (Has its own internal shader) */}
      <div className="relative z-40 bg-black">
        <Pricing />
      </div>
      
      {/* Conversion Block - Layer 4 */}
      <div className="relative z-50 bg-black border-t border-white/5">
        <WaitlistForm />
        <Footer />
      </div>
      
      {/* Sticky UI */}
      <FOMOBar />
    </main>
  );
}
