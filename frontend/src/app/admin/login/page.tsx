"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Mail,
    Lock,
    LayoutGrid,
    ShieldCheck,
    Zap,
    CheckCircle2
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function AdminLoginPage() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState("");

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="min-h-screen bg-slate-50" />;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError("");
        setIsSubmitting(true);

        // Mock admin authentication
        setTimeout(() => {
            setIsSubmitting(false);
            const formData = new FormData(e.target as HTMLFormElement);
            const email = formData.get("email");
            const password = formData.get("password");

            // Using environment variables for credentials
            const adminEmail = process.env.ADMIN_EMAIL || "admin@company.com";
            const adminPassword = process.env.ADMIN_PASSWORD || "admin123";

            if (email === adminEmail && password === adminPassword) {
                document.cookie = "auth=true; path=/";
                router.push("/admin");
            } else {
                setError("Invalid admin credentials. Access denied.");
            }
        }, 1500);
    };

    return (
        <div className="flex min-h-screen bg-white font-sans">
            {/* Left side: Admin visual/info */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#1F7A5A] relative overflow-hidden items-center justify-center p-20 text-white">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A5A] to-[#14533D] z-0" />

                {/* Abstract pattern */}
                <svg className="absolute inset-0 w-full h-full opacity-10 z-0" viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                        <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                            <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5" />
                        </pattern>
                    </defs>
                    <rect width="100" height="100" fill="url(#grid)" />
                </svg>

                <div className="relative z-10 max-w-lg">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div className="h-16 w-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center">
                            <ShieldCheck size={32} className="text-white" />
                        </div>
                        <div>
                            <h2 className="text-[40px] font-bold leading-[1.1] mb-6">Internal Admin <br />Command Center</h2>
                            <p className="text-white/80 text-lg leading-relaxed">Secure access point for Xentrix system administrators and department heads.</p>
                        </div>

                        <div className="grid grid-cols-1 gap-6 pt-8">
                            <div className="flex gap-4">
                                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <Zap size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-sm uppercase tracking-wider">System Control</h4>
                                    <p className="text-sm text-white/60">Manage job postings, applicant flows, and site infrastructure.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="h-10 w-10 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0">
                                    <CheckCircle2 size={20} />
                                </div>
                                <div>
                                    <h4 className="font-bold mb-1 text-sm uppercase tracking-wider">Security Verified</h4>
                                    <p className="text-sm text-white/60">256-bit encrypted session and mandatory audit logging.</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Decorative Blobs */}
                <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full -ml-32 -mt-32 blur-3xl animate-pulse" />
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mb-48 blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
            </div>

            {/* Right side: Login form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-12 bg-white relative">
                <div className="max-w-md w-full mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 mb-12">
                        <div className="bg-[#1F7A5A] text-white p-1 rounded-md">
                            <LayoutGrid size={20} />
                        </div>
                        <span className="text-xl font-bold text-[#111111] tracking-tight">Xentrix Admin</span>
                    </Link>

                    <div className="mb-10">
                        <h1 className="text-[32px] font-bold text-[#111111] mb-3">Admin Portal</h1>
                        <p className="text-gray-500">Sign in to manage your workspace infrastructure.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        {error && (
                            <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="p-4 bg-red-50 border border-red-100 text-red-600 rounded-xl text-sm font-medium flex items-center gap-3"
                            >
                                <XCircle size={18} />
                                {error}
                            </motion.div>
                        )}

                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                <Mail size={14} className="text-[#1F7A5A]" />
                                Admin Email
                            </label>
                            <input
                                required
                                name="email"
                                type="email"
                                placeholder="admin@company.com"
                                className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                            />
                        </div>

                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                    <Lock size={14} className="text-[#1F7A5A]" />
                                    Security Password
                                </label>
                            </div>
                            <input
                                required
                                name="password"
                                type="password"
                                placeholder="••••••••"
                                className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-[#1F7A5A] focus:ring-[#1F7A5A]" />
                            <label htmlFor="remember" className="text-sm text-gray-500 font-medium cursor-pointer">Stay signed in for 24 hours</label>
                        </div>

                        <Button
                            isLoading={isSubmitting}
                            type="submit"
                            className="w-full h-14 text-lg font-bold"
                        >
                            Log In to System
                        </Button>
                    </form>

                    <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
                        <span className="text-xs text-gray-400 font-medium">Nairobi HQ System v4.2</span>
                        <Link href="/login" className="text-xs font-bold text-[#1F7A5A] hover:underline">User Dashboard</Link>
                    </div>
                </div>

                <div className="absolute top-8 right-8 text-[11px] font-black text-gray-100 select-none">RESTRICTED AREA</div>
            </div>
        </div>
    );
}

function XCircle({ size, className }: { size?: number, className?: string }) {
    return <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="m15 9-6 6" /><path d="m9 9 6 6" /></svg>
}
