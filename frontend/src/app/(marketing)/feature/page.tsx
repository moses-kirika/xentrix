"use client";

import { motion, Variants } from "framer-motion";
import {
    BarChart3,
    Zap,
    Lock,
    Layers,
    Settings,
    Users,
    Smartphone,
    Cpu,
    CheckCircle2,
    ArrowRight
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function FeaturePage() {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 10 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.4 }
        }
    };

    if (!isMounted) {
        return <div className="min-h-screen bg-white" />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
            {/* Hero Section */}
            <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative bg-[#F5F6F7]">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-[#1F7A5A] text-[12px] font-bold mb-6 uppercase tracking-wider leading-none"
                        >
                            Core Capabilities
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[48px] lg:text-[56px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6"
                        >
                            Everything you need to <br /> scale with confidence
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[18px] text-[#555555] leading-relaxed"
                        >
                            Explore the powerful features that make Xentrix the preferred choice for forward-thinking enterprises.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Detailed Features - Alternating Sections */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-[1240px]">

                    {/* Feature 1: Advanced Analytics */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="relative"
                        >
                            <div className="rounded-[24px] overflow-hidden shadow-2xl border border-slate-100 bg-slate-50 aspect-video">
                                <img src="/features-detail.png" alt="Advanced Analytics" className="w-full h-full object-cover" />
                            </div>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center text-[#1F7A5A] mb-6">
                                <BarChart3 size={24} />
                            </div>
                            <h2 className="text-[32px] lg:text-[36px] font-bold mb-6 text-[#111111] leading-tight">Advanced Analytics & Real-time Insights</h2>
                            <p className="text-[16px] text-[#555555] mb-8 leading-relaxed">
                                Take the guesswork out of your business decisions. Xentrix provides deep-dive analytics into every aspect of your operations, from sales velocity to customer churn.
                            </p>
                            <ul className="space-y-4 mb-10">
                                {['Customizable Dashboards', 'Predictive Modeling', 'Automated Reporting', 'Data Export in all formats'].map((item) => (
                                    <li key={item} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-[#1F7A5A]" />
                                        <span className="text-[#111111] font-medium">{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link href="/pricing">
                                <Button variant="primary">Explore Analytics</Button>
                            </Link>
                        </motion.div>
                    </div>

                    {/* Feature 2: Smart Workflow */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-2 lg:order-1"
                        >
                            <div className="h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center text-[#1F7A5A] mb-6">
                                <Cpu size={24} />
                            </div>
                            <h2 className="text-[32px] lg:text-[36px] font-bold mb-6 text-[#111111] leading-tight">Intelligent Workflow Engine</h2>
                            <p className="text-[16px] text-[#555555] mb-8 leading-relaxed">
                                Automate repetitive tasks with our drag-and-drop workflow builder. Connect your favorite tools and create seamless business processes that run themselves.
                            </p>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
                                <div className="p-5 rounded-xl bg-[#F5F6F7] border border-gray-100">
                                    <h4 className="font-bold text-[#111111] mb-2 uppercase text-[12px] tracking-wider">Trigger-based</h4>
                                    <p className="text-[13px] text-gray-500">Automate actions based on customer behavior.</p>
                                </div>
                                <div className="p-5 rounded-xl bg-[#F5F6F7] border border-gray-100">
                                    <h4 className="font-bold text-[#111111] mb-2 uppercase text-[12px] tracking-wider">AI Optimized</h4>
                                    <p className="text-[13px] text-gray-500">Let our AI suggest the best workflow paths.</p>
                                </div>
                            </div>
                            <Link href="/about">
                                <Button variant="outline">Learn about Workflows</Button>
                            </Link>
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-2"
                        >
                            <div className="rounded-[24px] overflow-hidden shadow-2xl border border-slate-100 bg-[#111111] aspect-video flex items-center justify-center p-12">
                                <div className="grid grid-cols-2 gap-4 w-full">
                                    {[1, 2, 3, 4].map((i) => (
                                        <div key={i} className="h-24 bg-white/5 rounded-xl border border-white/10 flex items-center justify-center">
                                            <div className="h-8 w-8 rounded-full bg-[#1F7A5A]/20 border border-[#1F7A5A]/30 flex items-center justify-center text-[#1F7A5A]">
                                                <Zap size={16} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Feature Grid Section */}
            <section className="py-24 bg-[#F5F6F7]">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-[36px] font-bold mb-4 text-[#111111]">Everything is connected</h2>
                        <p className="text-[16px] text-[#555555]">A complete suite of tools integrated to provide a 360-degree view of your business.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            { title: "Team Collaboration", icon: Users, desc: "Shared workspaces and real-time editing for your entire team." },
                            { title: "Mobile Ready", icon: Smartphone, desc: "Manage your business on the go with our top-rated mobile app." },
                            { title: "Data Security", icon: Lock, desc: "Enterprise-grade encryption and compliance at every level." },
                            { title: "Smart Integration", icon: Layers, desc: "One-click connects for Slack, Google, and 2000+ other apps." },
                            { title: "Infinite Scalability", icon: Zap, desc: "Our infrastructure grows as you grow, no manual tuning needed." },
                            { title: "Personal Setup", icon: Settings, desc: "Get a personalized setup with our dedicated implementation team." }
                        ].map((f, i) => (
                            <div key={i} className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm hover:shadow-lg transition-all">
                                <div className="h-10 w-10 bg-[#1F7A5A] text-white rounded-lg flex items-center justify-center mb-6">
                                    <f.icon size={20} />
                                </div>
                                <h3 className="text-[18px] font-bold mb-3 text-[#111111]">{f.title}</h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed">
                                    {f.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-[800px]">
                    <h2 className="text-[36px] lg:text-[44px] font-bold mb-6 text-[#111111]">Experience the power of Xentrix today</h2>
                    <p className="text-[#555555] text-[18px] mb-10 leading-relaxed">Don't settle for scattered tools. Join the thousands of companies that unified their business on Xentrix.</p>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/signup">
                            <Button variant="primary" className="h-14 px-10 text-lg">Start Free Trial</Button>
                        </Link>
                        <Link href="/company">
                            <Button variant="outline" className="h-14 px-10 text-lg">Talk to Sales</Button>
                        </Link>
                    </div>
                </div>
            </section>

        </div>
    );
}
