"use client";

import { motion } from "framer-motion";
import { useParams, useRouter } from "next/navigation";
import {
    ChevronLeft,
    Upload,
    FileText,
    X,
    CheckCircle2,
    User,
    Mail,
    Phone,
    Link as LinkIcon
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";

export default function ApplyPage() {
    const params = useParams();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [files, setFiles] = useState<File[]>([]);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="min-h-screen bg-white" />;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (files.length === 0) {
            alert("Please upload at least one document (Resume/CV).");
            return;
        }
        setIsSubmitting(true);
        // Simulate API submission
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSubmitted(true);
        }, 2000);
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const newFiles = Array.from(e.target.files);
            setFiles(prev => [...prev, ...newFiles]);
        }
    };

    const removeFile = (index: number) => {
        setFiles(prev => prev.filter((_, i) => i !== index));
    };

    if (isSubmitted) {
        return (
            <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4">
                <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center max-w-md"
                >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                        <CheckCircle2 size={40} className="text-[#1F7A5A]" />
                    </div>
                    <h1 className="text-[32px] font-bold text-[#111111] mb-4">Application Received!</h1>
                    <p className="text-[#555555] mb-10 leading-relaxed">
                        Thank you for applying to Xentrix. We've received your details and documents. Our team will review your application and get back to you shortly.
                    </p>
                    <Button onClick={() => router.push('/careers')} className="px-10 h-14">Back to Careers</Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
            {/* Header */}
            <section className="py-8 border-b border-gray-50 bg-[#F5F6F7]/50">
                <div className="container mx-auto px-4 max-w-[800px]">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#1F7A5A] transition-colors font-medium text-sm mb-4"
                    >
                        <ChevronLeft size={16} />
                        Back to Job Description
                    </button>
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-[#111111]">Join Xentrix</h1>
                    <p className="text-gray-500 font-medium">Please fill out the form below to apply. Fields marked with <span className="text-red-500">*</span> are mandatory.</p>
                </div>
            </section>

            {/* Form */}
            <section className="py-16 flex-grow">
                <div className="container mx-auto px-4 max-w-[800px]">
                    <form onSubmit={handleSubmit} className="space-y-10">
                        {/* Personal Information */}
                        <div className="space-y-6">
                            <h2 className="text-[20px] font-bold border-b border-gray-100 pb-4">Personal Information</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <User size={14} className="text-[#1F7A5A]" />
                                        Full Name <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Jane Doe"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <Mail size={14} className="text-[#1F7A5A]" />
                                        Email Address <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        type="email"
                                        placeholder="jane@example.com"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <Phone size={14} className="text-[#1F7A5A]" />
                                        Phone Number <span className="text-red-500">*</span>
                                    </label>
                                    <input
                                        required
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <LinkIcon size={14} className="text-[#1F7A5A]" />
                                        LinkedIn / Portfolio URL
                                    </label>
                                    <input
                                        type="url"
                                        placeholder="https://linkedin.com/in/janedoe"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Resume Upload */}
                        <div className="space-y-6">
                            <h2 className="text-[20px] font-bold border-b border-gray-100 pb-4">Documents <span className="text-red-500">*</span></h2>
                            <div className="space-y-4">
                                <div className="relative">
                                    <div className="border-2 border-dashed border-gray-200 rounded-[24px] p-10 text-center hover:border-[#1F7A5A] hover:bg-green-50/30 transition-all group cursor-pointer">
                                        <input
                                            type="file"
                                            multiple
                                            onChange={handleFileChange}
                                            className="absolute inset-0 opacity-0 cursor-pointer"
                                            accept=".pdf,.doc,.docx"
                                        />
                                        <div className="w-12 h-12 bg-[#F5F6F7] rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-[#1F7A5A] group-hover:text-white transition-colors text-gray-400">
                                            <Upload size={20} />
                                        </div>
                                        <p className="text-[#111111] font-bold mb-1">Click to upload or drag and drop</p>
                                        <p className="text-sm text-gray-500">Add resume, cover letter, or portfolio (Max 5 files)</p>
                                    </div>
                                </div>

                                {/* File List */}
                                <div className="space-y-3">
                                    {files.map((f, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, y: 5 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="bg-green-50/50 rounded-2xl p-4 border border-[#1F7A5A]/10 flex items-center justify-between"
                                        >
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 bg-[#1F7A5A] text-white rounded-lg flex items-center justify-center">
                                                    <FileText size={18} />
                                                </div>
                                                <div>
                                                    <p className="text-sm font-bold text-[#111111] truncate max-w-[200px] md:max-w-md">{f.name}</p>
                                                    <p className="text-[11px] text-[#1F7A5A] font-medium">{(f.size / 1024 / 1024).toFixed(2)} MB</p>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(i)}
                                                className="p-2 hover:bg-white rounded-lg text-gray-400 hover:text-red-500 transition-all"
                                            >
                                                <X size={18} />
                                            </button>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Additional Info */}
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#444444]">Anything else we should know?</label>
                            <textarea
                                rows={4}
                                placeholder="Tell us about yourself or your motivation..."
                                className="w-full p-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all resize-none"
                            />
                        </div>

                        <div className="pt-8 border-t border-gray-100 flex flex-col items-center">
                            <Button
                                type="submit"
                                isLoading={isSubmitting}
                                className="h-14 px-16 text-lg w-full md:w-auto"
                            >
                                Submit Application
                            </Button>
                            <p className="text-[12px] text-gray-400 mt-4 max-w-sm text-center">By submitting, you agree to our Terms of Service and Privacy Policy regarding job applications.</p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    );
}
