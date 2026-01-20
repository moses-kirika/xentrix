"use client";

import { motion, Variants } from "framer-motion";
import { CheckCircle2, Target, Heart, Shield, Globe, Users } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function About() {
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
            <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative border-b border-gray-50">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-[#1F7A5A] text-[12px] font-bold mb-6 uppercase tracking-wider leading-none"
                        >
                            Our Story
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-[48px] lg:text-[56px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6"
                        >
                            Empowering Businesses <br /> Through Innovation
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="text-[18px] text-[#555555] leading-relaxed"
                        >
                            Xentrix was founded with a single mission: to provide small and medium-sized businesses with the tools they need to compete in a digital-first world.
                        </motion.p>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-[21/9] bg-slate-50 border border-slate-100"
                    >
                        <img src="/about-team.png" alt="Our Team" className="w-full h-full object-cover" />
                    </motion.div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-[32px] lg:text-[36px] font-bold mb-6 text-[#111111] leading-tight">Driven by Purpose</h2>
                            <p className="text-[16px] text-[#555555] mb-8 leading-relaxed">
                                We believe that technology should be accessible, intuitive, and impactful. Our journey started in a small home office, and today, we serve thousands of businesses worldwide. Our commitment to excellence remains unchanged.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { title: "Our Mission", desc: "To automate complexity and free businesses to grow.", icon: Target },
                                    { title: "Our Vision", desc: "To be the operating system for the next generation of growth.", icon: Globe }
                                ].map((val, i) => (
                                    <div key={val.title} className="flex gap-4">
                                        <div className="flex-shrink-0 h-12 w-12 bg-green-50 rounded-xl flex items-center justify-center text-[#1F7A5A]">
                                            <val.icon size={24} />
                                        </div>
                                        <div>
                                            <h3 className="text-[18px] font-bold text-[#111111] mb-1">{val.title}</h3>
                                            <p className="text-[15px] text-[#555555]">{val.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-[#F5F6F7] p-10 lg:p-16 rounded-[24px]">
                            <h3 className="text-[24px] font-bold mb-8 text-[#111111]">Our Numbers Speak</h3>
                            <div className="grid grid-cols-2 gap-10">
                                <div>
                                    <div className="text-[36px] font-bold text-[#1F7A5A]">10+</div>
                                    <div className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">Years Experience</div>
                                </div>
                                <div>
                                    <div className="text-[36px] font-bold text-[#1F7A5A]">500+</div>
                                    <div className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">Enterprise Clients</div>
                                </div>
                                <div>
                                    <div className="text-[36px] font-bold text-[#1F7A5A]">99%</div>
                                    <div className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">Customer Retention</div>
                                </div>
                                <div>
                                    <div className="text-[36px] font-bold text-[#1F7A5A]">24/7</div>
                                    <div className="text-[13px] text-gray-500 font-medium uppercase tracking-wider">Support Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-[#F5F6F7]">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-[36px] font-bold mb-4 text-[#111111]">Our Values</h2>
                        <p className="text-[16px] text-[#555555]">These principles guide everything we do, from engineering to customer heart.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            { title: "Integrity First", desc: "We act with honesty and transparency in every interaction.", icon: Shield },
                            { title: "Customer Centric", desc: "Your success is the ultimate measure of our performance.", icon: Heart },
                            { title: "Continuous Innovation", desc: "We are never satisfied with the status quo.", icon: Zap }
                        ].map((value, i) => (
                            <div key={i} className="bg-white p-8 rounded-[16px] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="h-10 w-10 bg-[#1F7A5A] text-white rounded-lg flex items-center justify-center mb-6">
                                    <value.icon size={20} />
                                </div>
                                <h3 className="text-[18px] font-bold mb-3 text-[#111111]">{value.title}</h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed">
                                    {value.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-white text-center">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="bg-[#1F7A5A] rounded-[24px] p-12 lg:p-20 text-white relative overflow-hidden">
                        <div className="relative z-10 max-w-2xl mx-auto">
                            <h2 className="text-[36px] lg:text-[44px] font-bold mb-6">Ready to take your business to the next level?</h2>
                            <p className="text-white/80 text-[18px] mb-10 leading-relaxed">Join over 10,000+ businesses using Xentrix to automate their growth and transform their customer relationships.</p>
                            <div className="flex flex-wrap justify-center gap-4">
                                <Link href="/signup">
                                    <button className="bg-white text-[#1F7A5A] px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors">Start Your Free Trial</button>
                                </Link>
                                <Link href="/company">
                                    <button className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-lg font-bold hover:bg-white/10 transition-colors">Schedule a Demo</button>
                                </Link>
                            </div>
                        </div>
                        {/* Abstract background blobs */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl animate-pulse" />
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
                    </div>
                </div>
            </section>

        </div>
    );
}

function Zap({ size, className }: { size?: number, className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 14.5a3 3 0 0 1 6 0l-3 4-3-4z" /><path d="M20 9.5a3 3 0 0 0-6 0l3 4 3-4z" /><path d="M12 2v2" /><path d="M12 20v2" /><path d="m4.9 4.9 1.4 1.4" /><path d="m17.7 17.7 1.4 1.4" /><path d="M2 12h2" /><path d="M20 12h2" /><path d="m4.9 19.1 1.4-1.4" /><path d="m17.7 6.3 1.4-1.4" /></svg>
}
