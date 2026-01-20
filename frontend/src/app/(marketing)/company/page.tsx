"use client";

import { motion, Variants } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Globe, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function CompanyPage() {
    const [isMounted, setIsMounted] = useState(false);
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        setTimeout(() => setFormStatus("success"), 1500);
    };

    if (!isMounted) {
        return <div className="min-h-screen bg-white" />;
    }

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
            {/* Hero Section */}
            <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative border-b border-gray-50 bg-[#F5F6F7]">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-[#1F7A5A] text-[12px] font-bold mb-6 uppercase tracking-wider leading-none"
                            >
                                Contact & Community
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-[48px] lg:text-[56px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6"
                            >
                                Let's build the <br /> future together
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-[18px] text-[#555555] leading-relaxed mb-8"
                            >
                                Whether you have a question about features, pricing, or just want to say hello, our team is ready to help.
                            </motion.p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-[#111111] font-medium">
                                    <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#1F7A5A]">
                                        <Mail size={18} />
                                    </div>
                                    hello@xentrix.com
                                </div>
                                <div className="flex items-center gap-4 text-[#111111] font-medium">
                                    <div className="h-10 w-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-[#1F7A5A]">
                                        <MessageSquare size={18} />
                                    </div>
                                    Live Chat (Mon-Fri, 9am-6pm)
                                </div>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-[4/3] bg-white border border-slate-100"
                        >
                            <img src="/company-lobby.png" alt="Company Lobby" className="w-full h-full object-cover" />
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Main Content: Form & Offices */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">

                        {/* Contact Form */}
                        <div className="lg:col-span-2">
                            <h2 className="text-[32px] font-bold mb-8 text-[#111111]">Send us a Message</h2>

                            {formStatus === 'success' ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    className="bg-green-50 border border-green-100 p-12 rounded-2xl text-center"
                                >
                                    <div className="h-16 w-16 bg-[#1F7A5A] text-white rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle2 size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-[#111111] mb-2">Message Sent!</h3>
                                    <p className="text-[#555555]">Thank you for reaching out. We'll get back to you within 24 hours.</p>
                                    <Button onClick={() => setFormStatus('idle')} variant="outline" className="mt-8">Send another message</Button>
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#111111] uppercase tracking-wider">Full Name</label>
                                            <input required type="text" className="w-full h-14 bg-[#F5F6F7] rounded-lg px-4 border-none focus:ring-2 focus:ring-[#1F7A5A] transition-all" placeholder="John Doe" />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-bold text-[#111111] uppercase tracking-wider">Email Address</label>
                                            <input required type="email" className="w-full h-14 bg-[#F5F6F7] rounded-lg px-4 border-none focus:ring-2 focus:ring-[#1F7A5A] transition-all" placeholder="john@example.com" />
                                        </div>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#111111] uppercase tracking-wider">Subject</label>
                                        <select className="w-full h-14 bg-[#F5F6F7] rounded-lg px-4 border-none focus:ring-2 focus:ring-[#1F7A5A] transition-all appearance-none cursor-pointer">
                                            <option>General Inquiry</option>
                                            <option>Sales Question</option>
                                            <option>Technical Support</option>
                                            <option>Billing</option>
                                        </select>
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-sm font-bold text-[#111111] uppercase tracking-wider">Your Message</label>
                                        <textarea required rows={6} className="w-full bg-[#F5F6F7] rounded-lg p-4 border-none focus:ring-2 focus:ring-[#1F7A5A] transition-all resize-none" placeholder="How can we help you?" />
                                    </div>
                                    <Button isLoading={formStatus === 'submitting'} type="submit" className="h-14 px-10 text-lg font-bold">Send Message</Button>
                                </form>
                            )}
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-12">
                            <div>
                                <h3 className="text-[20px] font-bold mb-6 text-[#111111]">Global Offices</h3>
                                <div className="space-y-6">
                                    {[
                                        { city: "Nairobi", address: "Xentrix Plaza, Kileleshwa, 4th Floor" },
                                        { city: "Mombasa", address: "Nyali City Mall, Executive Suite 12" },
                                        { city: "Eldoret", address: "Rupa's Mall, Technology Wing" }
                                    ].map((office) => (
                                        <div key={office.city} className="flex gap-4">
                                            <div className="flex-shrink-0 text-[#1F7A5A]">
                                                <MapPin size={20} />
                                            </div>
                                            <div>
                                                <div className="font-bold text-[#111111]">{office.city}</div>
                                                <div className="text-sm text-gray-500">{office.address}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 bg-[#F5F6F7] rounded-2xl">
                                <h3 className="text-[18px] font-bold mb-4 text-[#111111]">Work with us</h3>
                                <p className="text-sm text-gray-500 mb-6">We're always looking for talented individuals to join our global team.</p>
                                <Button variant="outline" className="w-full">View Careers</Button>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
