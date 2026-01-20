"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
    ChevronLeft,
    MapPin,
    Clock,
    Briefcase,
    CheckCircle2,
    ArrowRight,
    ShieldCheck,
    Zap,
    Globe
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

const jobsData = [
    {
        id: 1,
        title: 'Senior Software Engineer',
        department: 'Engineering',
        location: 'Remote',
        type: 'Full-time',
        description: 'We are looking for a Senior Software Engineer to lead the development of our core automation engine. You will be responsible for designing scalable architectures and mentoring junior developers.',
        responsibilities: [
            "Lead the design and implementation of highly scalable microservices.",
            "Collaborate with product managers and designers to define technical requirements.",
            "Optimize application performance and reliability.",
            "Mentor and guide junior and mid-level engineers through code reviews and pair programming."
        ],
        requirements: [
            "5+ years of experience with React, Node.js, and TypeScript.",
            "Strong understanding of distributed systems and cloud architecture (AWS/GCP).",
            "Experience with PostgreSQL and Redis.",
            "Excellent problem-solving and communication skills."
        ]
    },
    {
        id: 2,
        title: 'Product Marketing Manager',
        department: 'Marketing',
        location: 'New York',
        type: 'Full-time',
        description: 'As a Product Marketing Manager, you will be the bridge between our product and the market. You will drive go-to-market strategies and create compelling narratives that resonate with enterprise clients.',
        responsibilities: [
            "Develop and execute end-to-end go-to-market plans for new features.",
            "Create high-impact sales enablement materials and customer-facing content.",
            "Conduct market research and competitor analysis to inform product positioning.",
            "Partner with the sales team to drive adoption and revenue growth."
        ],
        requirements: [
            "3+ years of experience in B2B SaaS product marketing.",
            "Exceptional storytelling and copywriting skills.",
            "Proven track record of launching successful products in the enterprise space.",
            "Data-driven mindset with experience in marketing analytics."
        ]
    },
    {
        id: 3,
        title: 'Lead UX Designer',
        department: 'Design',
        location: 'London',
        type: 'Full-time',
        description: 'We are seeking a Lead UX Designer to craft intuitive and beautiful experiences for our enterprise users. You will shape the visual language of Xentrix and lead design sprints.',
        responsibilities: [
            "Own the end-to-end design process from discovery to high-fidelity handoff.",
            "Design complex enterprise workflows that are simple and delightful to use.",
            "Conduct user research and usability testing to validate design decisions.",
            "Evolve and maintain our design system components."
        ],
        requirements: [
            "6+ years of experience in product design, specifically in SaaS or enterprise tools.",
            "Expertise in Figma and prototyping tools.",
            "Strong portfolio demonstrating user-centered design and systematic thinking.",
            "Experience leading design workshops and mentoring other designers."
        ]
    },
    {
        id: 4,
        title: 'Customer Success lead',
        department: 'Sales',
        location: 'Singapore',
        type: 'Full-time',
        description: 'As the Customer Success Lead, you will ensure our clients achieve their business goals through the Xentrix platform. You will build long-term relationships and drive strategic value.',
        responsibilities: [
            "Manage a portfolio of high-value enterprise accounts.",
            "Onboard new clients and lead strategic account reviews.",
            "Identify expansion opportunities and drive net revenue retention.",
            "Act as the voice of the customer within the product organization."
        ],
        requirements: [
            "4+ years of experience in Customer Success or Account Management for SaaS.",
            "Strong relationship-building skills with C-level executives.",
            "Proven ability to manage complex implementations and churn reduction.",
            "Strategic thinker with a proactive approach to troubleshooting."
        ]
    },
];

export default function JobDetailPage() {
    const params = useParams();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const job = jobsData.find(j => j.id === Number(params.id));

    if (!isMounted) return <div className="min-h-screen bg-white" />;

    if (!job) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold mb-4">Job not found</h1>
                <Button onClick={() => router.push('/careers')}>Back to Careers</Button>
            </div>
        );
    }

    const handleApply = () => {
        router.push(`/careers/${job.id}/apply`);
    };

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
            {/* Header / Breadcrumb */}
            <section className="py-8 border-b border-gray-50 bg-[#F5F6F7]/50">
                <div className="container mx-auto px-4 max-w-[1000px]">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#1F7A5A] transition-colors font-medium text-sm mb-6"
                    >
                        <ChevronLeft size={16} />
                        Back to Open Positions
                    </button>

                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <div className="text-[12px] font-bold text-[#1F7A5A] uppercase tracking-wider mb-2">{job.department}</div>
                            <h1 className="text-[32px] lg:text-[40px] font-bold text-[#111111] leading-tight">{job.title}</h1>
                            <div className="flex items-center gap-6 mt-4 text-sm text-gray-500 font-medium">
                                <div className="flex items-center gap-2">
                                    <MapPin size={16} className="text-gray-400" />
                                    {job.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Clock size={16} className="text-gray-400" />
                                    {job.type}
                                </div>
                            </div>
                        </div>
                        <Button
                            onClick={handleApply}
                            className="h-14 px-10 text-lg"
                        >
                            Apply to this Role
                        </Button>
                    </div>
                </div>
            </section>

            {/* Content */}
            <section className="py-20 flex-grow">
                <div className="container mx-auto px-4 max-w-[1000px]">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
                        {/* Main Description */}
                        <div className="lg:col-span-2 space-y-12">
                            <div>
                                <h2 className="text-[24px] font-bold mb-6">Role Overview</h2>
                                <p className="text-[18px] text-[#555555] leading-relaxed">
                                    {job.description}
                                </p>
                            </div>

                            <div>
                                <h2 className="text-[24px] font-bold mb-6">Key Responsibilities</h2>
                                <ul className="space-y-4">
                                    {job.responsibilities.map((resp, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-[#1F7A5A] flex-shrink-0" />
                                            <span className="text-[16px] text-[#555555] leading-relaxed">{resp}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h2 className="text-[24px] font-bold mb-6">Qualifications</h2>
                                <ul className="space-y-4">
                                    {job.requirements.map((req, i) => (
                                        <li key={i} className="flex gap-4 items-start">
                                            <div className="mt-1 h-5 w-5 rounded-full bg-green-50 text-[#1F7A5A] flex items-center justify-center flex-shrink-0">
                                                <CheckCircle2 size={12} />
                                            </div>
                                            <span className="text-[16px] text-[#555555] leading-relaxed">{req}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Sidebar Info */}
                        <div className="space-y-8">
                            <div className="p-8 bg-[#F5F6F7] rounded-2xl border border-gray-100">
                                <h3 className="font-bold mb-6 text-[#111111]">Interview Process</h3>
                                <div className="space-y-6">
                                    {[
                                        { s: 1, t: "Recruiter Screen", d: "30 min" },
                                        { s: 2, t: "Technical Interview", d: "60 min" },
                                        { s: 3, t: "Final Round (Values)", d: "90 min" },
                                        { s: 4, t: "Decision \u0026 Offer", d: "2 days" }
                                    ].map(step => (
                                        <div key={step.s} className="flex gap-4">
                                            <div className="h-6 w-6 rounded-full bg-white border border-gray-200 text-[#1F7A5A] text-[12px] font-bold flex items-center justify-center flex-shrink-0">
                                                {step.s}
                                            </div>
                                            <div>
                                                <div className="text-sm font-bold text-[#111111]">{step.t}</div>
                                                <div className="text-[12px] text-gray-400">{step.d}</div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-8 border border-gray-100 rounded-2xl">
                                <h3 className="font-bold mb-4 text-[#111111]">Job Highlights</h3>
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <ShieldCheck size={18} className="text-[#1F7A5A]" />
                                        Full medical coverage
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <Zap size={18} className="text-[#1F7A5A]" />
                                        Flexible hours
                                    </div>
                                    <div className="flex items-center gap-3 text-sm text-gray-500">
                                        <Globe size={18} className="text-[#1F7A5A]" />
                                        Remote-friendly
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-[#F5F6F7]">
                <div className="container mx-auto px-4 max-w-[1000px] text-center">
                    <h2 className="text-[32px] font-bold mb-4 text-[#111111]">Ready to join the mission?</h2>
                    <p className="text-[#555555] mb-10 max-w-xl mx-auto">We're looking for passionate individuals who want to build the future of enterprise software.</p>
                    <div className="flex justify-center gap-4">
                        <Button
                            onClick={handleApply}
                            size="lg"
                            className="px-12"
                        >
                            Apply Now
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => router.push('/careers')}>View all jobs</Button>
                    </div>
                </div>
            </section>
        </div>
    );
}
