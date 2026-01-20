"use client";

import { motion, Variants } from "framer-motion";
import {
    Briefcase,
    MapPin,
    Clock,
    ArrowRight,
    CheckCircle2,
    Coffee,
    Zap,
    Heart,
    Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";

const jobs = [
    { id: 1, title: 'Senior Software Engineer', department: 'Engineering', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Product Marketing Manager', department: 'Marketing', location: 'New York', type: 'Full-time' },
    { id: 3, title: 'Lead UX Designer', department: 'Design', location: 'London', type: 'Full-time' },
    { id: 4, title: 'Customer Success lead', department: 'Sales', location: 'Singapore', type: 'Full-time' },
];

export default function CareersPage() {
    const [isMounted, setIsMounted] = useState(false);
    const [activeFilter, setActiveFilter] = useState("All");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const filteredJobs = activeFilter === "All"
        ? jobs
        : jobs.filter(job => job.department === activeFilter);

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
                                Careers at Xentrix
                            </motion.div>
                            <motion.h1
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.1 }}
                                className="text-[48px] lg:text-[56px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6"
                            >
                                Do the best work <br /> of your life
                            </motion.h1>
                            <motion.p
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 }}
                                className="text-[18px] text-[#555555] leading-relaxed mb-8"
                            >
                                We're building the future of enterprise automation. Join a team or diverse, talented individuals on a mission to empower businesses worldwide.
                            </motion.p>
                            <Button onClick={() => document.getElementById('jobs')?.scrollIntoView({ behavior: 'smooth' })} className="h-14 px-10 text-lg font-bold">View Openings</Button>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            className="relative rounded-[24px] overflow-hidden shadow-2xl aspect-square bg-white border border-slate-100"
                        >
                            <img src="/about-team.png" alt="Xentrix Team" className="w-full h-full object-cover" />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#1F7A5A]/80 to-transparent p-10">
                                <div className="text-white">
                                    <div className="text-[24px] font-bold mb-1">Impact. Innovation. Growth.</div>
                                    <div className="text-white/80">Every day at Xentrix.</div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h2 className="text-[36px] font-bold mb-4 text-[#111111]">Why Xentrix?</h2>
                        <p className="text-[16px] text-[#555555]">We believe in taking care of our people so they can take care of our customers.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            { title: "Remote-First", icon: Globe, desc: "Work from anywhere in the world or join one of our global hubs." },
                            { title: "High Impact", icon: Zap, desc: "Own your projects from day one and see your work in production." },
                            { title: "Growth Budget", icon: Heart, desc: "Personal budget for books, courses, and conferences every year." },
                            { title: "Team Retreats", icon: Coffee, desc: "Twice a year we fly the whole team to a surprise location." }
                        ].map((ben, i) => (
                            <div key={i} className="p-8 rounded-2xl bg-[#F5F6F7] border border-gray-100 shadow-sm hover:shadow-md transition-all">
                                <div className="h-10 w-10 bg-[#1F7A5A] text-white rounded-lg flex items-center justify-center mb-6">
                                    <ben.icon size={20} />
                                </div>
                                <h3 className="text-[18px] font-bold mb-3 text-[#111111]">{ben.title}</h3>
                                <p className="text-[14px] text-gray-500 leading-relaxed">{ben.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Job Listings */}
            <section id="jobs" className="py-24 bg-[#F5F6F7]">
                <div className="container mx-auto px-4 max-w-[1240px]">
                    <div className="max-w-4xl mx-auto">
                        <div className="flex flex-wrap items-end justify-between gap-6 mb-12 border-b border-gray-200 pb-8">
                            <div>
                                <h2 className="text-[36px] font-bold text-[#111111] mb-2">Open Positions</h2>
                                <p className="text-[#555555]">Explore our current opportunities across all departments.</p>
                            </div>
                            <div className="flex gap-4">
                                {['All', 'Engineering', 'Marketing', 'Design', 'Sales'].map((dept) => (
                                    <span
                                        key={dept}
                                        onClick={() => setActiveFilter(dept)}
                                        className={`text-sm font-bold px-4 py-2 rounded-full border cursor-pointer transition-all ${activeFilter === dept
                                            ? 'text-[#1F7A5A] bg-[#1F7A5A]/5 border-[#1F7A5A]/20'
                                            : 'text-gray-400 border-transparent hover:text-[#111111]'
                                            }`}
                                    >
                                        {dept === 'All' ? 'All Jobs' : dept}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-4">
                            {filteredJobs.length > 0 ? (
                                filteredJobs.map((job) => (
                                    <motion.div
                                        key={job.id}
                                        layout
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        whileHover={{ scale: 1.01, x: 5 }}
                                        className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-wrap items-center justify-between gap-8 group transition-all"
                                    >
                                        <div className="space-y-1 text-left">
                                            <div className="text-[12px] font-bold text-[#1F7A5A] uppercase tracking-wider">{job.department}</div>
                                            <h3 className="text-[20px] font-bold text-[#111111] group-hover:text-[#1F7A5A] transition-colors">{job.title}</h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-400">
                                                <div className="flex items-center gap-1.5 font-medium">
                                                    <MapPin size={14} />
                                                    {job.location}
                                                </div>
                                                <div className="flex items-center gap-1.5 font-medium">
                                                    <Clock size={14} />
                                                    {job.type}
                                                </div>
                                            </div>
                                        </div>
                                        <Link href={`/careers/${job.id}`}>
                                            <Button
                                                variant="outline"
                                                className="group-hover:bg-[#1F7A5A] group-hover:text-white group-hover:border-[#1F7A5A] transition-all min-w-[140px]"
                                            >
                                                View Details
                                            </Button>
                                        </Link>
                                    </motion.div>
                                ))
                            ) : (
                                <div className="text-center py-20 bg-white rounded-2xl border border-dashed border-gray-200">
                                    <Briefcase className="mx-auto text-gray-300 mb-4" size={48} />
                                    <h3 className="text-xl font-bold text-[#111111] mb-2">No positions found</h3>
                                    <p className="text-gray-500">Try selecting a different department or check back later.</p>
                                </div>
                            )}
                        </div>

                        <div className="mt-16 text-center">
                            <p className="text-gray-500 mb-6">Don't see a role that fits? Send us your CV anyway!</p>
                            <Button variant="ghost" className="text-[#1F7A5A] font-bold hover:bg-green-50">General Application <ArrowRight size={18} className="ml-2" /></Button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
