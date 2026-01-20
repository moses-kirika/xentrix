"use client";

import { motion } from "framer-motion";
import { useSearchParams, useRouter } from "next/navigation";
import {
    ShieldCheck,
    CreditCard,
    User,
    Mail,
    Lock,
    CheckCircle2,
    Globe,
    Zap,
    ChevronLeft
} from "lucide-react";
import { useState, useEffect, Suspense } from "react";
import { Button } from "@/components/ui/Button";

function SignUpContent() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const planParam = searchParams.get("plan");
    const plan = planParam || "trial";

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
        }, 2000);
    };

    if (isSuccess) {
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
                    <h1 className="text-[32px] font-bold text-[#111111] mb-4">Welcome to Xentrix!</h1>
                    <p className="text-[#555555] mb-10 leading-relaxed">
                        {planParam
                            ? `Your ${planParam === 'starter' ? 'Starter' : 'Professional'} workspace has been created. Check your inbox for the invitation link to get started.`
                            : "Your Xentrix account has been created successfully. You can now explore the platform and choose a plan that fits your needs."
                        }
                    </p>
                    <Button onClick={() => router.push('/')} className="px-10 h-14">Go to Dashboard</Button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
            <section className="py-8 border-b border-gray-50 bg-[#F5F6F7]/50">
                <div className="container mx-auto px-4 max-w-[1000px]">
                    <button
                        onClick={() => router.back()}
                        className="flex items-center gap-2 text-gray-500 hover:text-[#1F7A5A] transition-colors font-medium text-sm mb-4"
                    >
                        <ChevronLeft size={16} />
                        Back
                    </button>
                    <h1 className="text-[28px] lg:text-[32px] font-bold text-[#111111]">
                        {planParam ? 'Set up your workspace' : 'Create your Xentrix account'}
                    </h1>
                    {planParam && (
                        <p className="text-gray-500 font-medium">You've selected the <span className="text-[#1F7A5A] font-bold capitalize">{planParam}</span> plan.</p>
                    )}
                </div>
            </section>

            <section className="py-16 flex-grow">
                <div className="container mx-auto px-4 max-w-[1000px]">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Left: Benefits */}
                        <div className="space-y-12">
                            <div>
                                <h2 className="text-[24px] font-bold mb-8">What happens next?</h2>
                                <div className="space-y-8">
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 bg-green-50 rounded-xl flex items-center justify-center text-[#1F7A5A] flex-shrink-0">
                                            <ShieldCheck size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#111111] mb-1">Secure Setup</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">We use 256-bit encryption to protect your data and privacy during onboarding.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 bg-green-50 rounded-xl flex items-center justify-center text-[#1F7A5A] flex-shrink-0">
                                            <Zap size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#111111] mb-1">Instant Activation</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">Your workflow automation engine will be ready the moment you finish sign up.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="h-10 w-10 bg-green-50 rounded-xl flex items-center justify-center text-[#1F7A5A] flex-shrink-0">
                                            <Globe size={20} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#111111] mb-1">Global Scale</h4>
                                            <p className="text-sm text-gray-500 leading-relaxed">Connect teams across the globe with our unified cloud infrastructure.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 bg-[#F5F6F7] rounded-2xl border border-gray-100">
                                <h4 className="font-bold mb-4">Account Summary</h4>
                                <div className="space-y-3">
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500 capitalize">{planParam ? `${planParam} Plan` : 'Free Trial'}</span>
                                        <span className="font-bold text-[#111111]">
                                            {planParam ? (planParam === 'starter' ? '$49/mo' : '$99/mo') : '$0.00'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between text-sm">
                                        <span className="text-gray-500">Service Fee</span>
                                        <span className="font-bold text-[#111111]">$0.00</span>
                                    </div>
                                    <div className="pt-3 border-t border-gray-200 flex justify-between font-bold text-lg">
                                        <span>{planParam ? 'Total Due' : 'Initial Charge'}</span>
                                        <span className="text-[#1F7A5A]">
                                            {planParam ? (planParam === 'starter' ? '$49.00' : '$99.00') : '$0.00'}
                                        </span>
                                    </div>
                                    {!planParam && (
                                        <p className="text-[11px] text-gray-400 italic pt-2">You can upgrade to a paid plan anytime from your dashboard settings.</p>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Right: Form */}
                        <div className="bg-white p-8 lg:p-10 rounded-[32px] border border-gray-100 shadow-xl">
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <User size={14} className="text-[#1F7A5A]" />
                                        Company Name
                                    </label>
                                    <input
                                        required
                                        type="text"
                                        placeholder="Acme Corp"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
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
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <Lock size={14} className="text-[#1F7A5A]" />
                                        Password
                                    </label>
                                    <input
                                        required
                                        type="password"
                                        placeholder="••••••••"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>

                                <div className="pt-6 space-y-4">
                                    <div className="flex items-center gap-2 text-[#444444] mb-2 font-bold text-sm">
                                        <CreditCard size={14} className="text-[#1F7A5A]" />
                                        Payment Method
                                    </div>
                                    <div className="p-4 rounded-xl border border-gray-200 bg-[#F5F6F7]/50 flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-6 bg-gray-200 rounded flex items-center justify-center text-[8px] font-black uppercase">Card</div>
                                            <span className="text-sm text-gray-500 font-medium">•••• •••• •••• 4242</span>
                                        </div>
                                        <button type="button" className="text-[12px] font-bold text-[#1F7A5A]">Edit</button>
                                    </div>
                                </div>

                                <Button
                                    isLoading={isSubmitting}
                                    type="submit"
                                    className="w-full h-14 text-lg font-bold mt-4"
                                >
                                    Complete Sign Up
                                </Button>

                                <p className="text-[11px] text-center text-gray-400 leading-relaxed px-4">
                                    By clicking "Complete Sign Up", you agree to Xentrix's Terms of Service and authorize the monthly charge to your card.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default function SignUpPage() {
    return (
        <Suspense fallback={<div className="min-h-screen bg-white" />}>
            <SignUpContent />
        </Suspense>
    );
}
