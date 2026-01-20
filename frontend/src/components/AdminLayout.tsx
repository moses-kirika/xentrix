'use client';

import { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useRequireAuth, logout } from '@/lib/auth';
import {
    LayoutGrid,
    Users,
    Briefcase,
    BarChart3,
    Bell,
    Settings,
    Search,
    LogOut
} from 'lucide-react';

interface AdminLayoutProps {
    children: ReactNode;
    title: string;
    subtitle?: string;
}

export default function AdminLayout({ children, title, subtitle = "Nairobi, Kenya HQ" }: AdminLayoutProps) {
    const pathname = usePathname();
    const { isChecking, authenticated } = useRequireAuth();

    // Show loading state while checking authentication
    if (isChecking) {
        return (
            <div className="flex min-h-screen bg-[#F8FAFC] items-center justify-center">
                <div className="text-center">
                    <div className="h-12 w-12 bg-[#1F7A5A] text-white rounded-xl flex items-center justify-center font-bold text-xl mx-auto mb-4 animate-pulse">
                        <LayoutGrid size={24} />
                    </div>
                    <p className="text-gray-500 font-medium">Verifying access...</p>
                </div>
            </div>
        );
    }

    // Don't render anything if not authenticated (will redirect)
    if (!authenticated) {
        return null;
    }

    const navItems = [
        { icon: LayoutGrid, label: 'Dashboard', href: '/admin' },
        { icon: Briefcase, label: 'Careers', href: '/admin/careers' },
        { icon: Users, label: 'Applicants', href: '/admin/applicants' },
        { icon: Users, label: 'Users', href: '/admin/users' },
        { icon: Users, label: 'Team', href: '/admin/team' },
        { icon: BarChart3, label: 'Analytics', href: '/admin/analytics' },
        { icon: Bell, label: 'Notifications', href: '/admin/notifications' },
        { icon: Settings, label: 'Settings', href: '/admin/settings' },
    ];

    return (
        <div className="flex min-h-screen bg-[#F8FAFC]">
            {/* Sidebar */}
            <aside className="w-64 bg-white border-r border-gray-200 hidden lg:flex flex-col sticky top-0 h-screen">
                <div className="p-6 border-b border-gray-100 mb-6">
                    <Link href="/" className="flex items-center gap-2">
                        <div className="bg-[#1F7A5A] text-white p-1 rounded-md">
                            <LayoutGrid size={20} />
                        </div>
                        <span className="text-xl font-bold text-[#111111] tracking-tight">Xentrix</span>
                    </Link>
                </div>

                <nav className="flex-grow px-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 font-medium ${isActive
                                    ? 'bg-green-50 text-[#1F7A5A]'
                                    : 'text-gray-500 hover:bg-gray-50 hover:text-[#1F7A5A]'
                                    }`}
                            >
                                <item.icon size={20} />
                                {item.label}
                            </Link>
                        );
                    })}
                </nav>

                <div className="p-4 border-t border-gray-100">
                    <div className="bg-gradient-to-br from-[#1F7A5A] to-[#18664b] p-4 rounded-2xl text-white">
                        <h4 className="font-bold text-sm mb-1">Upgrade to Enterprise</h4>
                        <p className="text-[11px] opacity-80 mb-3">Unlock unlimited job postings and AI analytics.</p>
                        <button className="w-full py-2 bg-white/20 hover:bg-white/30 rounded-lg text-xs font-bold transition-colors">Learn More</button>
                    </div>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-grow">
                {/* Header */}
                <header className="h-[80px] bg-white border-b border-gray-200 sticky top-0 z-30 px-8 flex items-center justify-between">
                    <div>
                        <h2 className="text-2xl font-bold text-[#111111]">{title}</h2>
                        <p className="text-xs text-gray-500 font-medium tracking-tight uppercase mt-1">{subtitle}</p>
                    </div>

                    <div className="flex items-center gap-6">
                        <div className="relative hidden md:block">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Search everything..."
                                className="h-11 w-64 bg-gray-50 border border-gray-100 rounded-xl pl-10 pr-4 text-sm focus:bg-white focus:border-[#1F7A5A] transition-all outline-none"
                            />
                        </div>
                        <div className="flex items-center gap-3 pl-6 border-l border-gray-100">
                            <div className="text-right hidden sm:block">
                                <div className="text-sm font-bold text-[#111111]">Alex Munene</div>
                                <div className="text-[11px] text-[#1F7A5A] font-bold">Admin</div>
                            </div>
                            <div className="h-10 w-10 bg-[#1F7A5A] text-white rounded-xl flex items-center justify-center font-bold">AM</div>
                            <button
                                onClick={() => {
                                    if (confirm('Are you sure you want to sign out?')) {
                                        logout();
                                    }
                                }}
                                className="h-10 w-10 bg-gray-100 hover:bg-red-50 text-gray-600 hover:text-red-600 rounded-xl flex items-center justify-center transition-all duration-200 group"
                                title="Sign Out"
                            >
                                <LogOut size={18} className="group-hover:scale-110 transition-transform" />
                            </button>
                        </div>
                    </div>
                </header>

                <div className="p-8">
                    {children}
                </div>
            </main>
        </div>
    );
}
