'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
    Plus,
    Filter,
    Download,
    MoreHorizontal,
    Eye,
    Edit,
    Trash2,
    Users,
    TrendingUp
} from 'lucide-react';

const jobListings = [
    { id: 1, title: 'Senior Software Engineer', department: 'Engineering', location: 'Nairobi', type: 'Full-time', status: 'Active', applicants: 42, views: 1240, postedAt: '2024-01-15' },
    { id: 2, title: 'Product Manager', department: 'Product', location: 'Mombasa', type: 'Full-time', status: 'Active', applicants: 18, views: 856, postedAt: '2024-01-12' },
    { id: 3, title: 'UX Designer', department: 'Design', location: 'Nairobi', type: 'Contract', status: 'Paused', applicants: 26, views: 642, postedAt: '2024-01-08' },
    { id: 4, title: 'Marketing Lead', department: 'Marketing', location: 'Remote', type: 'Full-time', status: 'Active', applicants: 31, views: 1105, postedAt: '2024-01-17' },
    { id: 5, title: 'Customer Success Manager', department: 'Operations', location: 'Eldoret', type: 'Full-time', status: 'Closed', applicants: 54, views: 2341, postedAt: '2023-12-28' },
    { id: 6, title: 'DevOps Engineer', department: 'Engineering', location: 'Nairobi', type: 'Full-time', status: 'Active', applicants: 15, views: 523, postedAt: '2024-01-19' },
    { id: 7, title: 'Sales Executive', department: 'Sales', location: 'Nairobi', type: 'Full-time', status: 'Active', applicants: 38, views: 1876, postedAt: '2024-01-10' },
    { id: 8, title: 'Data Analyst', department: 'Analytics', location: 'Remote', type: 'Part-time', status: 'Active', applicants: 22, views: 734, postedAt: '2024-01-14' },
];

export default function AdminCareersPage() {
    const [selectedFilter, setSelectedFilter] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredJobs = jobListings.filter(job => {
        const matchesFilter = selectedFilter === 'All' || job.status === selectedFilter;
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    return (
        <AdminLayout title="Job Management" subtitle="Careers Portal">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Total Postings', value: jobListings.length, icon: Users, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Active Jobs', value: jobListings.filter(j => j.status === 'Active').length, icon: TrendingUp, color: 'text-[#1F7A5A]', bg: 'bg-green-50' },
                    { label: 'Total Applicants', value: jobListings.reduce((sum, j) => sum + j.applicants, 0), icon: Users, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { label: 'Avg. Applicants', value: Math.round(jobListings.reduce((sum, j) => sum + j.applicants, 0) / jobListings.length), icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-50' },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="p-6">
                            <div className={`p-3 rounded-xl ${stat.bg} ${stat.color} w-fit mb-4`}>
                                <stat.icon size={24} />
                            </div>
                            <h3 className="text-sm text-gray-500 font-medium mb-1">{stat.label}</h3>
                            <p className="text-3xl font-bold text-[#111111]">{stat.value}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            {/* Job Listings Table */}
            <Card className="overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-[#111111] mb-1">All Job Postings</h3>
                            <p className="text-sm text-gray-500">Manage and track all career opportunities</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <Button variant="outline" className="h-10 flex items-center gap-2">
                                <Download size={16} />
                                Export
                            </Button>
                            <Button variant="primary" className="h-10 flex items-center gap-2">
                                <Plus size={16} />
                                Post New Job
                            </Button>
                        </div>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap items-center gap-4 mt-6">
                        <div className="flex bg-[#F5F6F7] p-1 rounded-lg">
                            {['All', 'Active', 'Paused', 'Closed'].map(filter => (
                                <button
                                    key={filter}
                                    onClick={() => setSelectedFilter(filter)}
                                    className={`px-4 py-2 text-sm font-bold rounded-md transition-all ${selectedFilter === filter
                                            ? 'bg-white text-[#1F7A5A] shadow-sm'
                                            : 'text-gray-500 hover:text-[#1F7A5A]'
                                        }`}
                                >
                                    {filter}
                                </button>
                            ))}
                        </div>
                        <input
                            type="text"
                            placeholder="Search jobs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="h-10 px-4 border border-gray-200 rounded-lg text-sm focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none"
                        />
                    </div>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead>
                            <tr className="bg-[#F8FAFC] border-b border-gray-100">
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Job Title</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Department</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Location</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Type</th>
                                <th className="px-6 py-4 text-left text-xs font-bold text-gray-400 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Applicants</th>
                                <th className="px-6 py-4 text-center text-xs font-bold text-gray-400 uppercase tracking-wider">Views</th>
                                <th className="px-6 py-4 text-right text-xs font-bold text-gray-400 uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredJobs.map((job, i) => (
                                <motion.tr
                                    key={job.id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: i * 0.05 }}
                                    className="hover:bg-gray-50/50 transition-colors"
                                >
                                    <td className="px-6 py-4">
                                        <div className="font-bold text-[#111111]">{job.title}</div>
                                        <div className="text-xs text-gray-400">Posted {new Date(job.postedAt).toLocaleDateString()}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-600 font-medium">{job.department}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-sm text-gray-600">{job.location}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">{job.type}</span>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center gap-2">
                                            <div className={`h-2 w-2 rounded-full ${job.status === 'Active' ? 'bg-[#1F7A5A]' :
                                                    job.status === 'Paused' ? 'bg-orange-500' : 'bg-gray-400'
                                                }`} />
                                            <span className={`text-sm font-bold ${job.status === 'Active' ? 'text-[#1F7A5A]' :
                                                    job.status === 'Paused' ? 'text-orange-600' : 'text-gray-500'
                                                }`}>{job.status}</span>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-lg font-bold text-[#111111]">{job.applicants}</div>
                                    </td>
                                    <td className="px-6 py-4 text-center">
                                        <div className="text-sm text-gray-500">{job.views.toLocaleString()}</div>
                                    </td>
                                    <td className="px-6 py-4">
                                        <div className="flex items-center justify-end gap-2">
                                            <button className="p-2 text-gray-400 hover:text-[#1F7A5A] hover:bg-green-50 rounded-lg transition-all">
                                                <Eye size={16} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                                                <Edit size={16} />
                                            </button>
                                            <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                                                <Trash2 size={16} />
                                            </button>
                                        </div>
                                    </td>
                                </motion.tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                <div className="p-4 border-t border-gray-100 flex items-center justify-between text-sm">
                    <p className="text-gray-400 font-medium">Showing {filteredJobs.length} of {jobListings.length} jobs</p>
                    <div className="flex gap-2">
                        <Button variant="outline" className="h-9 px-4 text-xs font-bold" disabled>Previous</Button>
                        <Button variant="outline" className="h-9 px-4 text-xs font-bold">Next</Button>
                    </div>
                </div>
            </Card>
        </AdminLayout>
    );
}
