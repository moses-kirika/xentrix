"use client";

import { motion, Variants } from "framer-motion";
import { Check, HelpCircle, ArrowRight, Zap, Shield, Globe, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";

export default function PricingPage() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [billingCycle, setBillingCycle] = useState<"monthly" | "yearly">("yearly");

    const [processingPlan, setProcessingPlan] = useState<string | null>(null);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSelect = (planId: string) => {
        setProcessingPlan(planId);
        setTimeout(() => {
            if (planId === 'enterprise') {
                router.push('/company');
            } else {
                router.push(`/signup?plan=${planId}`);
            }
        }, 800);
    };

    if (!isMounted) {
        return <div className="min-h-screen bg-white" />;
    }

    const plans = [
        {
            id: "starter",
            name: "Starter",
            price: billingCycle === "yearly" ? "49" : "59",
            desc: "Perfect for small teams getting started with automation.",
            features: ["Up to 5 Users", "Basic Dashboards", "1,000 Automations/mo", "Email Support"],
            button: "Start for Free",
            variant: "outline" as const
        },
        {
            id: "pro",
            name: "Professional",
            price: billingCycle === "yearly" ? "99" : "119",
            desc: "Advanced features for growing businesses.",
            features: ["Up to 20 Users", "Advanced Analytics", "10,000 Automations/mo", "Priority Support", "Custom Integrations"],
            button: "Get Started",
            variant: "primary" as const,
            popular: true
        },
        {
            id: "enterprise",
            name: "Enterprise",
            price: "Custom",
            desc: "Large scale operations needing premium control.",
            features: ["Unlimited Users", "Predictive AI Insights", "Unlimited Automations", "Dedicated Account Manager", "SLA Guarantee", "On-premise Options"],
            button: "Contact Sales",
            variant: "outline" as const
        }
    ];

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
            {/* Hero Section */}
            <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative border-b border-gray-50">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-[#1F7A5A] text-[12px] font-bold mb-6 uppercase tracking-wider leading-none"
                        >
                            Plans & Pricing
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[48px] lg:text-[56px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6"
                        >
                            A plan for every stage <br /> of your growth
                        </motion.h1>

                        {/* Billing Toggle */}
                        <div className="flex items-center justify-center gap-4 mt-8">
                            <span className={`text-sm font-medium ${billingCycle === 'monthly' ? 'text-[#111111]' : 'text-gray-400'}`}>Monthly</span>
                            <button
                                onClick={() => setBillingCycle(billingCycle === 'monthly' ? 'yearly' : 'monthly')}
                                className="w-12 h-6 bg-gray-200 rounded-full relative p-1 transition-colors hover:bg-gray-300"
                            >
                                <div className={`w-4 h-4 bg-white rounded-full shadow-sm transition-transform ${billingCycle === 'yearly' ? 'translate-x-6' : 'translate-x-0'}`} />
                            </button>
                            <div className="flex items-center gap-2">
                                <span className={`text-sm font-medium ${billingCycle === 'yearly' ? 'text-[#111111]' : 'text-gray-400'}`}>Yearly</span>
                                <span className="bg-green-100 text-[#1F7A5A] text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Save 20%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="py-24 bg-[#F5F6F7]">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {plans.map((plan, i) => (
                            <motion.div
                                key={plan.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className={`bg-white rounded-[24px] p-10 border shadow-sm relative flex flex-col min-h-[520px] overflow-hidden ${plan.popular ? 'border-[#1F7A5A] shadow-xl scale-105 z-10' : 'border-gray-100'}`}
                            >
                                {plan.popular && (
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#1F7A5A] text-white text-[12px] font-bold px-4 py-1 rounded-full uppercase tracking-widest shadow-lg whitespace-nowrap">
                                        Most Popular
                                    </div>
                                )}

                                <div className="mb-8">
                                    <h3 className="text-[20px] font-bold text-[#111111] mb-2">{plan.name}</h3>
                                    <p className="text-gray-500 text-[14px] leading-relaxed">{plan.desc}</p>
                                </div>

                                <div className="mb-8 flex items-baseline gap-1">
                                    <span className="text-[48px] font-bold text-[#111111]">{plan.price !== 'Custom' ? `$${plan.price}` : plan.price}</span>
                                    {plan.price !== 'Custom' && <span className="text-gray-400 font-medium">/mo</span>}
                                </div>

                                <div className="space-y-4 mb-10 flex-grow">
                                    {plan.features.map((feat) => (
                                        <div key={feat} className="flex items-start gap-3">
                                            <Check size={18} className="text-[#1F7A5A] mt-0.5" />
                                            <span className="text-[15px] text-[#444444] font-medium">{feat}</span>
                                        </div>
                                    ))}
                                </div>

                                <Button
                                    variant={plan.variant}
                                    className="w-full h-14 text-lg font-bold"
                                    isLoading={processingPlan === plan.id}
                                    onClick={() => handleSelect(plan.id)}
                                >
                                    {plan.button}
                                </Button>
                            </motion.div>
                        ))}
                    </div>

                    {/* Trusted By strip */}
                    <div className="mt-24 text-center">
                        <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-10">Trusted by modern sales teams worldwide</p>
                        <div className="flex flex-wrap justify-center gap-12 opacity-30 grayscale items-center">
                            {['Google', 'Microsoft', 'Salesforce', 'HubSpot', 'Oracle'].map(logo => (
                                <span key={logo} className="text-xl font-black">{logo}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ & Support Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-[36px] font-bold mb-6 text-[#111111]">Common Questions</h2>
                            <p className="text-[16px] text-[#555555] mb-12">Looking for more information? Here are some of our most frequently asked questions about Xentrix plans and onboarding.</p>

                            <div className="space-y-8">
                                {[
                                    { q: "Can I change my plan later?", a: "Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle." },
                                    { q: "Is there a free trial?", a: "We offer a 14-day full-featured free trial for our Professional plan. No credit card required." },
                                    { q: "What kind of support is included?", a: "Starter includes email support. Professional has priority chat, and Enterprise includes a dedicated account manager." }
                                ].map((faq, i) => (
                                    <div key={i}>
                                        <h4 className="text-[18px] font-bold text-[#111111] mb-2 flex items-center gap-2">
                                            <HelpCircle size={18} className="text-[#1F7A5A]" />
                                            {faq.q}
                                        </h4>
                                        <p className="text-[15px] text-gray-500 leading-relaxed">{faq.a}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative">
                            <div className="rounded-[24px] overflow-hidden shadow-2xl relative">
                                <img src="/pricing-success.png" alt="Success environment" className="w-full h-full object-cover aspect-[4/3]" />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1F7A5A]/30 to-transparent" />
                                <div className="absolute bottom-10 left-10 right-10 p-8 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl">
                                    <p className="text-[18px] font-medium text-[#111111] italic mb-4">"Xentrix transformed how we handle our sales pipeline. The automation features alone saved us 20 hours a week."</p>
                                    <div className="flex items-center gap-3">
                                        <div className="w-10 h-10 rounded-full bg-[#1F7A5A]" />
                                        <div>
                                            <div className="font-bold text-[#111111]">Sarah Jenkins</div>
                                            <div className="text-[12px] text-gray-500 font-medium">VP of Sales, GrowthTech</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
