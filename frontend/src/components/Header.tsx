"use client";

import Link from 'next/link';
import { Button } from './ui/Button';
import { LayoutGrid, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Close menu when resizing to desktop
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsMenuOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'Home', href: '/' },
        { name: 'About', href: '/about' },
        { name: 'Feature', href: '/feature' },
        { name: 'Pricing', href: '/pricing' },
        { name: 'Company', href: '/company' },
        { name: 'Careers', href: '/careers' },
    ];

    return (
        <header className="h-[72px] border-b border-gray-100 bg-white sticky top-0 z-50">
            <div className="container flex items-center justify-between mx-auto px-4 h-full max-w-[1280px]">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 relative z-50">
                    <div className="bg-[#1F7A5A] text-white p-1 rounded-md">
                        <LayoutGrid size={20} />
                    </div>
                    <span className="text-xl font-bold text-[#111111] tracking-tight">Xentrix</span>
                </Link>

                {/* Centered Navigation (Desktop) */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {navLinks.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-[15px] font-medium text-[#444444] hover:text-[#1F7A5A] transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Actions */}
                <div className="flex items-center gap-4 relative z-50">
                    <Link href="/login" className="hidden sm:inline-flex">
                        <Button variant="ghost" className="text-[#111111] font-medium hover:bg-transparent px-4">
                            Log In
                        </Button>
                    </Link>
                    <Link href="/signup">
                        <Button variant="primary" className="font-medium">
                            Sign Up
                        </Button>
                    </Link>

                    {/* Mobile Menu Toggle */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 text-[#111111] hover:bg-gray-50 rounded-lg transition-colors"
                        aria-label="Toggle Menu"
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 top-[72px] bg-white z-40 md:hidden"
                    >
                        <nav className="flex flex-col p-6 space-y-6 bg-white h-full border-t border-gray-50 overflow-y-auto">
                            {navLinks.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-bold text-[#111111] hover:text-[#1F7A5A] transition-colors py-2 border-b border-gray-50"
                                >
                                    {item.name}
                                </Link>
                            ))}
                            <div className="pt-6 sm:hidden">
                                <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                    <Button variant="outline" className="w-full h-14 text-lg mb-4">
                                        Log In
                                    </Button>
                                </Link>
                                <p className="text-center text-sm text-gray-500">
                                    Trusted by 10,000+ teams worldwide.
                                </p>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
