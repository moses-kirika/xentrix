'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
    Plus,
    MoreHorizontal,
    CheckCircle2,
    Clock,
    Briefcase,
    BarChart3
} from 'lucide-react';

// Mock Data
const stats = [
    { label: 'Total Jobs', value: '12', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-50' },
    { label: 'Active Listings', value: '8', icon: CheckCircle2, color: 'text-[#1F7A5A]', bg: 'bg-green-50' },
    { label: 'Pending Apps', value: '124', icon: Clock, color: 'text-orange-600', bg: 'bg-orange-50' },
    { label: 'Avg. Response', value: '2d', icon: BarChart3, color: 'text-purple-600', bg: 'bg-purple-50' },
];

const initialJobs = [
    { id: 1, title: 'Senior Software Engineer', department: 'Engineering', status: 'Active', applicants: 42, postedAt: '2 days ago' },
    { id: 2, title: 'Product Manager', department: 'Product', status: 'Active', applicants: 18, postedAt: '5 days ago' },
    { id: 3, title: 'UX Designer', department: 'Design', status: 'Paused', applicants: 26, postedAt: '1 week ago' },
    { id: 4, title: 'Marketing Lead', department: 'Marketing', status: 'Active', applicants: 31, postedAt: '3 days ago' },
    { id: 5, title: 'Customer Success', department: 'Operations', status: 'Closed', applicants: 54, postedAt: '2 weeks ago' },
];

export default function AdminDashboard() {
    const [jobs, setJobs] = useState(initialJobs);
    const [activeTab, setActiveTab] = useState('All Jobs');

    return (
        <AdminLayout title="Dashboard" subtitle="Nairobi, Kenya HQ">
            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className={`p-3 rounded-xl ${stat.bg} ${stat.color}`}>
                                    <stat.icon size={24} />
                                </div>
                                <span className="text-[12px] font-bold text-green-600 bg-green-50 px-2 py-0.5 rounded-full">+12%</span>
                            </div>
                            <h3 className="text-[14px] text-gray-500 font-medium mb-1">{stat.label}</h3>
                            <p className="text-[28px] font-bold text-[#111111]">{stat.value}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Job Management Table */}
            <Card className="overflow-hidden">
                <div className="p-8 border-b border-gray-100 flex flex-wrap items-center justify-between gap-6">
                    <div className="flex items-center gap-2">
                        <h3 className="text-xl font-bold text-[#111111]">Recent Postings</h3>
                        <span className="bg-[#1F7A5A]/10 text-[#1F7A5A] text-xs font-bold px-2 py-0.5 rounded-full">{jobs.length}</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="flex bg-[#F5F6F7] p-1 rounded-lg mr-4">
                            {['All Jobs', 'Active', 'Archive'].map(tab => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-1.5 text-sm font-bold rounded-md transition-all ${activeTab === tab
                                            ? 'bg-white text-[#1F7A5A] shadow-sm'
                                            : 'text-gray-500 hover:text-[#1F7A5A]'
                                        }`}
                                >
                                    {tab}
                                </button>
                            ))}
                        </div>
                        <Button variant="primary" className="h-11 flex items-center gap-2">
                            <Plus size={18} />
                            Post Job
                        </Button>
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead>
                            <tr className="bg-[#F8FAFC] border-b border-gray-100">
                                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Job Details</th>
                                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Department</th>
                                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-center">Applicants</th>
                                <th className="px-8 py-4 text-xs font-bold text-gray-400 uppercase tracking-wider text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {jobs.map((job, i) => (
                                <motion.tr
                                    key={job.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 0.2 + i * 0.05 }}
                                    className="hover:bg-gray-50/50 transition-colors group"
                                >
                                    <td className="px-8 py-6">
                                        <div className="font-bold text-[#111111] leading-tight mb-1">{job.title}</div>
                                        <div className="text-xs text-gray-400 font-medium">Posted {job.postedAt}</div>
                                    </td>
                                    <td className="px-8 py-6">
                                        <span className="text-sm text-gray-500 font-medium bg-[#F5F6F7] px-3 py-1 rounded-lg">{job.department}</span>
                                    </td>
                                    <td className="px-8 py-6">
                                        <div className="flex items-center gap-2">
                                            <div className={`h-2 w-2 rounded-full ${job.status === 'Active' ? 'bg-[#1F7A5A]' :
                                                    job.status === 'Paused' ? 'bg-orange-500' : 'bg-gray-400'
                                                }`} />
                                            <span className={`text-sm font-bold ${job.status === 'Active' ? 'text-[#1F7A5A]' :
                                                    job.status === 'Paused' ? 'text-orange-600' : 'text-gray-500'
                                                }`}>{job.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-8 py-6 text-center">
                                        <div className="text-lg font-bold text-[#111111]">{job.applicants}</div>
                                        <div className="text-[10px] text-[#1F7A5A] font-bold uppercase tracking-tight">New apps</div>
                                    </td>
                                    <td className="px-8 py-6 text-right">
                                        <button className="p-2 text-gray-400 hover:text-[#1F7A5A] hover:bg-green-50 rounded-lg transition-all">
                                            <MoreHorizontal size={20} />
                                        </button>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-6 border-t border-gray-100 flex items-center justify-between text-sm">
                    <p className="text-gray-400 font-medium">Showing 5 of 12 job postings</p>
                    <div className="flex gap-2">
                        <Button variant="outline" className="h-9 px-4 text-xs font-bold" disabled>Previous</Button>
                        <Button variant="outline" className="h-9 px-4 text-xs font-bold">Next Page</Button>
                    </div>
                </div>
            </Card>
        </AdminLayout>
    );
}
