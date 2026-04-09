"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, Zap, X } from 'lucide-react';
import { cn } from "@/lib/utils";
import { WebGLShader } from "@/components/ui/web-gl-shader";

const AuroraPricing = () => {
    const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('monthly');

    const plans = [
        {
            name: 'Starter',
            price: { monthly: 1497, yearly: 1197 }, // 1197 is the monthly rate when billed annually
            listPrice: 2000,
            description: 'per month · billed monthly',
            features: [
                { text: '14-day pilot → $497 setup', included: true },
                { text: 'Up to 75 shipments monitored', included: true },
                { text: '72-hour disruption forecast', included: true },
                { text: 'Carrier blackout detection + backup trigger', included: true },
                { text: 'Contract penalty exposure tracker', included: true },
                { text: 'Shipment document error scanner', included: true },
                { text: 'Freight invoice overcharge detector', included: true },
                { text: 'Crisis communication system (email + WhatsApp)', included: true },
                { text: 'No auto-pilot re-routing', included: false },
                { text: 'No supplier distress warning', included: false },
                { text: 'No tariff impact alerts', included: false },
                { text: 'No CFO ROI report', included: false },
            ],
            cta: 'Get started ↗',
            isFeatured: false,
        },
        {
            name: 'Growth',
            price: { monthly: 3997, yearly: 3197 },
            description: 'per month · billed monthly',
            badge: '⭐ Most operators choose this',
            features: [
                { text: 'Everything in Starter', included: true },
                { text: '14-day pilot → $497 setup', included: true },
                { text: 'Up to 300 shipments monitored', included: true },
                { text: 'Full auto-pilot re-routing — no human needed', included: true },
                { text: 'Supplier financial distress early warning', included: true },
                { text: 'Tariff and duty change impact alert', included: true },
                { text: 'Inbound stock arrival failure predictor', included: true },
                { text: 'Carrier performance scoring engine', included: true },
                { text: 'Proactive delay notification to receivers', included: true },
                { text: 'Monthly CFO-ready ROI report', included: true },
                { text: 'No ERP integration', included: false },
                { text: 'No cascade simulation', included: false },
                { text: 'No white-label mode', included: false },
            ],
            cta: 'Start Growth plan ↗',
            isFeatured: true,
        },
        {
            name: 'Enterprise',
            price: { monthly: 9997, yearly: 7997 },
            description: 'per month · custom contract',
            subDescription: '14-day pilot available',
            features: [
                { text: 'Everything in Growth', included: true },
                { text: 'Unlimited shipments monitored', included: true },
                { text: 'Full supply chain cascade simulation', included: true },
                { text: 'Regulatory compliance pre-scanner', included: true },
                { text: 'Bi-directional ERP and TMS integration', included: true },
                { text: 'Carrier contract negotiation intelligence', included: true },
                { text: 'White-label mode for 3PLs and forwarders', included: true },
                { text: 'Critical cargo priority mode (pharma / cold chain)', included: true },
                { text: 'Board-level quarterly scorecard', included: true },
                { text: 'Dedicated success manager + SLA', included: true },
            ],
            cta: 'Book a pilot call ↗',
            isFeatured: false,
        },
    ];

    const calculateSavings = (monthly: number, yearlyRate: number) => {
        const annualMonthlyTotal = monthly * 12;
        const annualYearlyTotal = yearlyRate * 12;
        return annualMonthlyTotal - annualYearlyTotal;
    };

    const fadeUpVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.15 + 0.3,
                duration: 0.6,
                ease: "easeInOut" as const,
            },
        }),
    };

    return (
        <section id="pricing" className="relative w-full py-32 bg-black flex flex-col items-center justify-center p-8 overflow-hidden border-y border-white/5">
            {/* HER0 BACKGROUND INTEGRATION - LOCALIZED */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <WebGLShader className="absolute inset-0 w-full h-full block -z-10" />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto mb-16">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-accent/20 border border-accent/30 mb-6 backdrop-blur-md"
                >
                    <Zap className="h-4 w-4 text-accent" />
                    <span className="text-sm font-black text-white uppercase tracking-[0.2em]">
                        The Revenue Multiplier
                    </span>
                </motion.div>
                <motion.h2 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-white"
                >
                    Predictable Logistics Cost
                </motion.h2>

                {/* PROMOTION TOGGLE */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="flex items-center justify-center space-x-6 mb-8 bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-xl"
                >
                    <span className={cn("text-lg font-bold transition-all", billingCycle === 'monthly' ? 'text-white' : 'text-gray-500')}>Monthly</span>
                    <div 
                        className="w-20 h-10 flex items-center bg-gray-900 rounded-full p-1.5 cursor-pointer border border-white/20 shadow-inner"
                        onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                    >
                        <motion.div 
                            className="w-7 h-7 bg-accent rounded-full shadow-[0_0_20px_rgba(37,99,235,0.6)]"
                            layout
                            transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                            style={{ marginLeft: billingCycle === 'yearly' ? 'auto' : '0' }}
                        />
                    </div>
                    <div className="flex flex-col items-start translate-y-[-2px]">
                        <span className={cn("text-lg font-bold transition-all", billingCycle === 'yearly' ? 'text-white' : 'text-gray-500')}>Yearly</span>
                        <AnimatePresence>
                            {billingCycle === 'yearly' && (
                                <motion.span 
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -10 }}
                                    className="text-[10px] text-green-400 font-black uppercase tracking-widest whitespace-nowrap"
                                >
                                    Force 20% Revenue Edge
                                </motion.span>
                            )}
                        </AnimatePresence>
                    </div>
                </motion.div>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl w-full relative z-10">
                {plans.map((plan, index) => (
                    <motion.div
                        key={plan.name}
                        custom={index}
                        variants={fadeUpVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        whileHover={{ y: -10, scale: 1.01 }}
                        className={cn(
                            "relative p-8 rounded-[40px] border border-white/10 overflow-hidden group flex flex-col transition-all duration-500",
                            plan.isFeatured ? 'bg-black/40 shadow-2xl shadow-accent/20 border-accent/40 ring-1 ring-accent/20' : 'bg-black/20 backdrop-blur-3xl'
                        )}
                    >
                         {plan.badge && (
                            <div className="absolute top-0 left-0 right-0 text-[10px] font-black text-black bg-accent py-2 text-center uppercase tracking-[0.3em] shadow-lg">
                                {plan.badge}
                            </div>
                        )}
                        
                        <div className="relative z-10 flex flex-col h-full pt-6">
                            <h3 className="text-3xl font-black text-white mb-2 tracking-tighter">{plan.name}</h3>
                            
                            <div className="flex flex-col mt-4">
                                <div className="flex items-baseline gap-2">
                                    <span className="text-6xl font-black text-white tracking-tighter">
                                        <AnimatePresence mode="wait">
                                            <motion.span
                                                key={billingCycle}
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: -10 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                ${plan.price[billingCycle].toLocaleString()}
                                            </motion.span>
                                        </AnimatePresence>
                                    </span>
                                    <span className="text-gray-400 font-bold uppercase text-xs tracking-widest">
                                        /mo
                                    </span>
                                </div>
                                
                                {/* REVENUE FORCE: SAVINGS DISPLAY */}
                                <div className="h-8 mt-2">
                                    <AnimatePresence>
                                        {billingCycle === 'yearly' && (
                                            <motion.div 
                                                initial={{ opacity: 0, scale: 0.9 }}
                                                animate={{ opacity: 1, scale: 1 }}
                                                exit={{ opacity: 0, scale: 0.9 }}
                                                className="bg-green-500/10 border border-green-500/20 px-3 py-1 rounded-full w-fit"
                                            >
                                                <span className="text-[10px] font-black text-green-400 uppercase tracking-widest">
                                                    You save ${calculateSavings(plan.price.monthly, plan.price.yearly).toLocaleString()} this year
                                                </span>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="h-px bg-white/10 my-8" />

                            <ul className="space-y-4 mb-12 flex-1">
                                {plan.features.map((feature, idx) => (
                                    <li key={idx} className={cn(
                                        "flex items-start text-sm font-medium transition-opacity",
                                        feature.included ? "text-gray-200" : "text-gray-600 italic opacity-50"
                                    )}>
                                        {feature.included ? (
                                            <CheckCircle className="h-4 w-4 text-accent mr-3 shrink-0" />
                                        ) : (
                                            <X className="h-4 w-4 text-gray-700 mr-3 shrink-0" />
                                        )}
                                        {feature.text}
                                    </li>
                                ))}
                            </ul>

                            <a href="#waitlist" className={cn(
                                "w-full py-6 text-xs font-black rounded-3xl transition-all shadow-xl uppercase tracking-[0.2em] flex items-center justify-center gap-2 active:scale-95 group/btn",
                                plan.isFeatured 
                                    ? "bg-accent text-white hover:bg-white hover:text-black shadow-accent/20" 
                                    : "bg-white/5 text-gray-200 hover:bg-white/10 border border-white/10"
                            )}>
                                <span>{plan.cta}</span>
                            </a>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default AuroraPricing;
