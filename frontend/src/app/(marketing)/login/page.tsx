"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import {
    Mail,
    Lock,
    ArrowRight,
    LayoutGrid,
    ChevronLeft
} from "lucide-react";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function LoginPage() {
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) return <div className="min-h-screen bg-white" />;

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            setTimeout(() => router.push('/'), 1000);
        }, 1500);
    };

    return (
        <div className="flex min-h-screen font-sans">
            {/* Left: Login Form */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-24 py-12 bg-white">
                <div className="max-w-md w-full mx-auto">
                    <Link href="/" className="inline-flex items-center gap-2 mb-12">
                        <div className="bg-[#1F7A5A] text-white p-1 rounded-md">
                            <LayoutGrid size={20} />
                        </div>
                        <span className="text-xl font-bold text-[#111111] tracking-tight">Xentrix</span>
                    </Link>

                    <div className="mb-10">
                        <h1 className="text-[32px] font-bold text-[#111111] mb-3">Welcome back</h1>
                        <p className="text-gray-500">Sign in to your Xentrix workspace to continue.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="space-y-2">
                            <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                <Mail size={14} className="text-[#1F7A5A]" />
                                Email Address
                            </label>
                            <input
                                required
                                type="email"
                                placeholder="name@company.com"
                                className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                            />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between items-center">
                                <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                    <Lock size={14} className="text-[#1F7A5A]" />
                                    Password
                                </label>
                                <button type="button" className="text-[12px] font-bold text-[#1F7A5A] hover:underline">Forgot password?</button>
                            </div>
                            <input
                                required
                                type="password"
                                placeholder="••••••••"
                                className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                            />
                        </div>

                        <div className="flex items-center gap-3 py-2">
                            <input type="checkbox" id="remember" className="h-4 w-4 rounded border-gray-300 text-[#1F7A5A] focus:ring-[#1F7A5A]" />
                            <label htmlFor="remember" className="text-sm text-gray-500 font-medium cursor-pointer">Remember this device</label>
                        </div>

                        <Button
                            isLoading={isSubmitting}
                            type="submit"
                            className="w-full h-14 text-lg font-bold"
                        >
                            {isSuccess ? 'Redirecting...' : 'Sign In'}
                        </Button>
                    </form>

                    <p className="mt-8 text-center text-sm text-gray-400">
                        Don't have an account? {' '}
                        <Link href="/signup" className="text-[#1F7A5A] font-bold hover:underline">Get started for free</Link>
                    </p>
                </div>
            </div>

            {/* Right: Marketing/Visual (Hidden on small screens) */}
            <div className="hidden lg:flex lg:w-1/2 bg-[#F5F6F7] relative overflow-hidden items-center justify-center p-20">
                <div className="absolute inset-0 bg-gradient-to-br from-[#1F7A5A]/5 to-transparent z-0" />
                <div className="relative z-10 max-w-lg text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                        className="bg-white p-12 rounded-[32px] shadow-2xl border border-gray-100 mb-12"
                    >
                        <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                            <ArrowRight size={32} className="text-[#1F7A5A]" />
                        </div>
                        <h2 className="text-2xl font-bold text-[#111111] mb-4">Master your workflow</h2>
                        <p className="text-gray-500 leading-relaxed">Join over 10,000 teams using Xentrix to automate their business operations and drive meaningful growth.</p>
                    </motion.div>

                    <div className="flex justify-center gap-12 opacity-50 grayscale scale-75">
                        {['Google', 'Slack', 'Dropbox'].map(logo => (
                            <span key={logo} className="text-xl font-black uppercase tracking-tighter text-gray-400">{logo}</span>
                        ))}
                    </div>
                </div>

                {/* Abstract Blobs */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#1F7A5A]/5 rounded-full -mr-48 -mt-48 blur-3xl" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1F7A5A]/5 rounded-full -ml-48 -mb-48 blur-3xl" />
            </div>
        </div>
    );
}
