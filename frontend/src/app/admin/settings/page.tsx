'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    User,
    Mail,
    Phone,
    MapPin,
    Lock,
    Bell,
    Shield,
    Globe,
    Save,
    Camera
} from 'lucide-react';

export default function AdminSettingsPage() {
    const [activeTab, setActiveTab] = useState('profile');
    const [isSaving, setIsSaving] = useState(false);

    const handleSave = () => {
        setIsSaving(true);
        setTimeout(() => setIsSaving(false), 1500);
    };

    const tabs = [
        { id: 'profile', label: 'Profile', icon: User },
        { id: 'security', label: 'Security', icon: Shield },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'preferences', label: 'Preferences', icon: Globe },
    ];

    return (
        <AdminLayout title="Settings" subtitle="Account Configuration">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Sidebar Tabs */}
                <Card className="lg:col-span-1 p-4 h-fit">
                    <nav className="space-y-2">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${activeTab === tab.id
                                        ? 'bg-green-50 text-[#1F7A5A]'
                                        : 'text-gray-500 hover:bg-gray-50 hover:text-[#1F7A5A]'
                                    }`}
                            >
                                <tab.icon size={20} />
                                {tab.label}
                            </button>
                        ))}
                    </nav>
                </Card>

                {/* Content Area */}
                <div className="lg:col-span-3">
                    {activeTab === 'profile' && (
                        <Card className="p-8">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#111111] mb-2">Profile Settings</h3>
                                    <p className="text-gray-500">Manage your personal information</p>
                                </div>
                                <Button variant="primary" onClick={handleSave} isLoading={isSaving}>
                                    <Save size={16} className="mr-2" />
                                    Save Changes
                                </Button>
                            </div>

                            {/* Profile Picture */}
                            <div className="mb-8 pb-8 border-b border-gray-100">
                                <label className="text-sm font-bold text-[#444444] mb-4 block">Profile Picture</label>
                                <div className="flex items-center gap-6">
                                    <div className="h-24 w-24 bg-[#1F7A5A] text-white rounded-2xl flex items-center justify-center font-bold text-3xl">
                                        AM
                                    </div>
                                    <div>
                                        <Button variant="outline" className="mb-2">
                                            <Camera size={16} className="mr-2" />
                                            Upload Photo
                                        </Button>
                                        <p className="text-xs text-gray-500">JPG, PNG or GIF. Max size 2MB.</p>
                                    </div>
                                </div>
                            </div>

                            {/* Form Fields */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <User size={14} className="text-[#1F7A5A]" />
                                        Full Name
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Alex Munene"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <Mail size={14} className="text-[#1F7A5A]" />
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        defaultValue="alex.munene@xentrix.com"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <Phone size={14} className="text-[#1F7A5A]" />
                                        Phone Number
                                    </label>
                                    <input
                                        type="tel"
                                        defaultValue="+254 712 345 678"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <MapPin size={14} className="text-[#1F7A5A]" />
                                        Location
                                    </label>
                                    <input
                                        type="text"
                                        defaultValue="Nairobi, Kenya"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                            </div>
                        </Card>
                    )}

                    {activeTab === 'security' && (
                        <Card className="p-8">
                            <div className="flex items-start justify-between mb-8">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#111111] mb-2">Security Settings</h3>
                                    <p className="text-gray-500">Manage your password and security preferences</p>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <Lock size={14} className="text-[#1F7A5A]" />
                                        Current Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter current password"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <Lock size={14} className="text-[#1F7A5A]" />
                                        New Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Enter new password"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444] flex items-center gap-2">
                                        <Lock size={14} className="text-[#1F7A5A]" />
                                        Confirm New Password
                                    </label>
                                    <input
                                        type="password"
                                        placeholder="Confirm new password"
                                        className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all"
                                    />
                                </div>
                                <Button variant="primary" onClick={handleSave} isLoading={isSaving}>
                                    Update Password
                                </Button>
                            </div>

                            <div className="mt-8 pt-8 border-t border-gray-100">
                                <h4 className="font-bold text-[#111111] mb-4">Two-Factor Authentication</h4>
                                <div className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                    <div>
                                        <p className="font-medium text-[#111111]">Enable 2FA</p>
                                        <p className="text-sm text-gray-500">Add an extra layer of security</p>
                                    </div>
                                    <Button variant="outline">Enable</Button>
                                </div>
                            </div>
                        </Card>
                    )}

                    {activeTab === 'notifications' && (
                        <Card className="p-8">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-[#111111] mb-2">Notification Preferences</h3>
                                <p className="text-gray-500">Choose what notifications you want to receive</p>
                            </div>

                            <div className="space-y-4">
                                {[
                                    { title: 'New Applications', description: 'Get notified when someone applies for a job' },
                                    { title: 'Job Status Changes', description: 'Updates when job postings are approved or rejected' },
                                    { title: 'Team Updates', description: 'Notifications about team member activities' },
                                    { title: 'System Alerts', description: 'Important system updates and maintenance' },
                                    { title: 'Weekly Reports', description: 'Receive weekly analytics summaries' },
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-xl">
                                        <div>
                                            <p className="font-medium text-[#111111]">{item.title}</p>
                                            <p className="text-sm text-gray-500">{item.description}</p>
                                        </div>
                                        <label className="relative inline-flex items-center cursor-pointer">
                                            <input type="checkbox" defaultChecked className="sr-only peer" />
                                            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-[#1F7A5A] rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#1F7A5A]"></div>
                                        </label>
                                    </div>
                                ))}
                            </div>
                        </Card>
                    )}

                    {activeTab === 'preferences' && (
                        <Card className="p-8">
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold text-[#111111] mb-2">System Preferences</h3>
                                <p className="text-gray-500">Customize your admin dashboard experience</p>
                            </div>

                            <div className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444]">Language</label>
                                    <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all">
                                        <option>English</option>
                                        <option>Swahili</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444]">Timezone</label>
                                    <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all">
                                        <option>East Africa Time (EAT) - UTC+3</option>
                                        <option>Coordinated Universal Time (UTC)</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-bold text-[#444444]">Date Format</label>
                                    <select className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none transition-all">
                                        <option>DD/MM/YYYY</option>
                                        <option>MM/DD/YYYY</option>
                                        <option>YYYY-MM-DD</option>
                                    </select>
                                </div>
                                <Button variant="primary" onClick={handleSave} isLoading={isSaving}>
                                    <Save size={16} className="mr-2" />
                                    Save Preferences
                                </Button>
                            </div>
                        </Card>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
