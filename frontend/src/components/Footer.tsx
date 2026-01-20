"use client";

import Link from "next/link";
import { useState } from "react";
import { LayoutGrid, Mail, Twitter, Linkedin, Github, CheckCircle2 } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-white border-t border-gray-100 pt-20 pb-12">
            <div className="container mx-auto px-4 max-w-[1280px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Brand Info */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2">
                            <div className="bg-[#1F7A5A] text-white p-1 rounded-md">
                                <LayoutGrid size={20} />
                            </div>
                            <span className="text-xl font-bold text-[#111111] tracking-tight">Xentrix</span>
                        </Link>
                        <p className="text-sm text-gray-500 leading-relaxed max-w-[240px]">
                            Empowering the next generation of businesses with intelligent automation and real-time insights.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-gray-400 hover:text-[#1F7A5A] transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#1F7A5A] transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-[#1F7A5A] transition-colors"><Github size={20} /></a>
                        </div>
                    </div>

                    {/* Product Links */}
                    <div>
                        <h4 className="font-bold text-[#111111] mb-6 uppercase text-[12px] tracking-widest">Product</h4>
                        <ul className="space-y-4">
                            {['Feature', 'Pricing'].map(item => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-sm text-gray-500 hover:text-[#1F7A5A] transition-colors">{item}</Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/feature" className="text-sm text-gray-500 hover:text-[#1F7A5A] transition-colors">Integrations</Link>
                            </li>
                            <li>
                                <Link href="/feature" className="text-sm text-gray-500 hover:text-[#1F7A5A] transition-colors">Updates</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Company Links */}
                    <div>
                        <h4 className="font-bold text-[#111111] mb-6 uppercase text-[12px] tracking-widest">Company</h4>
                        <ul className="space-y-4">
                            {['About', 'Careers', 'Company'].map(item => (
                                <li key={item}>
                                    <Link href={`/${item.toLowerCase()}`} className="text-sm text-gray-500 hover:text-[#1F7A5A] transition-colors">{item}</Link>
                                </li>
                            ))}
                            <li>
                                <Link href="/about" className="text-sm text-gray-500 hover:text-[#1F7A5A] transition-colors">Stories</Link>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-bold text-[#111111] mb-6 uppercase text-[12px] tracking-widest">Stay Updated</h4>
                        <p className="text-sm text-gray-500 mb-6">Join 5,000+ subscribers for the latest CRM innovations.</p>
                        <NewsletterForm />
                    </div>

                </div>

                {/* Bottom Strip */}
                <div className="pt-8 border-t border-gray-50 flex flex-wrap justify-between items-center gap-6">
                    <p className="text-xs text-gray-400">© 2025 Xentrix Inc. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/company" className="text-xs text-gray-400 hover:text-gray-600">Privacy Policy</Link>
                        <Link href="/company" className="text-xs text-gray-400 hover:text-gray-600">Terms of Service</Link>
                        <Link href="/company" className="text-xs text-gray-400 hover:text-gray-600">Cookie Settings</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
function NewsletterForm() {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('submitting');
        setTimeout(() => setStatus('success'), 1200);
    };

    if (status === 'success') {
        return (
            <div className="flex items-center gap-2 text-[#1F7A5A] bg-green-50 p-3 rounded-lg border border-green-100">
                <CheckCircle2 size={16} />
                <span className="text-xs font-bold">Successfully subscribed!</span>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-3">
            <input
                required
                type="email"
                placeholder="Email address"
                className="w-full h-11 bg-gray-50 rounded-lg px-4 border border-gray-100 focus:ring-2 focus:ring-[#1F7A5A] transition-all text-sm outline-none"
            />
            <button
                disabled={status === 'submitting'}
                type="submit"
                className="w-full h-11 bg-[#1F7A5A] text-white rounded-lg font-bold text-sm hover:bg-[#18664b] transition-colors disabled:opacity-50"
            >
                {status === 'submitting' ? 'Subscribing...' : 'Subscribe'}
            </button>
        </form>
    );
}
