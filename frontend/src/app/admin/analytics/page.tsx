'use client';

import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    TrendingUp,
    TrendingDown,
    Users,
    Briefcase,
    Eye,
    Download,
    Calendar
} from 'lucide-react';

const analyticsData = {
    overview: [
        { label: 'Total Page Views', value: '24,567', change: '+12.5%', trend: 'up', icon: Eye },
        { label: 'Job Applications', value: '1,234', change: '+8.3%', trend: 'up', icon: Users },
        { label: 'Active Postings', value: '42', change: '-2.1%', trend: 'down', icon: Briefcase },
        { label: 'Conversion Rate', value: '5.2%', change: '+1.8%', trend: 'up', icon: TrendingUp },
    ],
    topPerformingJobs: [
        { title: 'Senior Software Engineer', applications: 156, views: 2340, conversionRate: 6.7 },
        { title: 'Product Manager', applications: 98, views: 1876, conversionRate: 5.2 },
        { title: 'UX Designer', applications: 87, views: 1654, conversionRate: 5.3 },
        { title: 'Marketing Lead', applications: 76, views: 1432, conversionRate: 5.3 },
        { title: 'Data Analyst', applications: 65, views: 1245, conversionRate: 5.2 },
    ],
    departmentStats: [
        { department: 'Engineering', openings: 12, applications: 456, avgTime: '14 days' },
        { department: 'Product', openings: 5, applications: 187, avgTime: '18 days' },
        { department: 'Design', openings: 4, applications: 134, avgTime: '12 days' },
        { department: 'Marketing', openings: 6, applications: 198, avgTime: '16 days' },
        { department: 'Sales', openings: 8, applications: 234, avgTime: '10 days' },
    ],
};

export default function AdminAnalyticsPage() {
    return (
        <AdminLayout title="Analytics & Insights" subtitle="Performance Metrics">
            {/* Overview Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                {analyticsData.overview.map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="p-6">
                            <div className="flex items-start justify-between mb-4">
                                <div className={`p-3 rounded-xl ${stat.trend === 'up' ? 'bg-green-50 text-[#1F7A5A]' : 'bg-red-50 text-red-600'}`}>
                                    <stat.icon size={24} />
                                </div>
                                <div className={`flex items-center gap-1 text-sm font-bold ${stat.trend === 'up' ? 'text-[#1F7A5A]' : 'text-red-600'}`}>
                                    {stat.trend === 'up' ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                                    {stat.change}
                                </div>
                            </div>
                            <h3 className="text-sm text-gray-500 font-medium mb-1">{stat.label}</h3>
                            <p className="text-3xl font-bold text-[#111111]">{stat.value}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
                {/* Top Performing Jobs */}
                <Card className="overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-[#111111]">Top Performing Jobs</h3>
                                <p className="text-sm text-gray-500">Based on application rate</p>
                            </div>
                            <Button variant="outline" className="h-9 text-xs">
                                <Download size={14} className="mr-2" />
                                Export
                            </Button>
                        </div>
                    </div>
                    <div className="p-6">
                        <div className="space-y-4">
                            {analyticsData.topPerformingJobs.map((job, i) => (
                                <motion.div
                                    key={job.title}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                                >
                                    <div className="flex-1">
                                        <h4 className="font-bold text-[#111111] mb-1">{job.title}</h4>
                                        <div className="flex items-center gap-4 text-xs text-gray-500">
                                            <span>{job.applications} applications</span>
                                            <span>•</span>
                                            <span>{job.views} views</span>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-lg font-bold text-[#1F7A5A]">{job.conversionRate}%</div>
                                        <div className="text-xs text-gray-500">conversion</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </Card>

                {/* Department Statistics */}
                <Card className="overflow-hidden">
                    <div className="p-6 border-b border-gray-100">
                        <div className="flex items-center justify-between">
                            <div>
                                <h3 className="text-lg font-bold text-[#111111]">Department Overview</h3>
                                <p className="text-sm text-gray-500">Hiring activity by department</p>
                            </div>
                            <Button variant="outline" className="h-9 text-xs">
                                <Calendar size={14} className="mr-2" />
                                This Month
                            </Button>
                        </div>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-gray-50 border-b border-gray-100">
                                    <th className="px-6 py-3 text-left text-xs font-bold text-gray-400 uppercase">Department</th>
                                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-400 uppercase">Openings</th>
                                    <th className="px-6 py-3 text-center text-xs font-bold text-gray-400 uppercase">Applications</th>
                                    <th className="px-6 py-3 text-right text-xs font-bold text-gray-400 uppercase">Avg. Time</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-gray-100">
                                {analyticsData.departmentStats.map((dept, i) => (
                                    <motion.tr
                                        key={dept.department}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="hover:bg-gray-50"
                                    >
                                        <td className="px-6 py-4">
                                            <span className="font-bold text-[#111111]">{dept.department}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm font-medium text-gray-600">{dept.openings}</span>
                                        </td>
                                        <td className="px-6 py-4 text-center">
                                            <span className="text-sm font-bold text-[#1F7A5A]">{dept.applications}</span>
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <span className="text-sm text-gray-600">{dept.avgTime}</span>
                                        </td>
                                    </motion.tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </Card>
            </div>

            {/* Chart Placeholder */}
            <Card className="p-8">
                <h3 className="text-lg font-bold text-[#111111] mb-2">Application Trends</h3>
                <p className="text-sm text-gray-500 mb-6">Monthly application volume over the past 6 months</p>
                <div className="h-64 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl flex items-center justify-center border-2 border-dashed border-gray-200">
                    <div className="text-center">
                        <TrendingUp size={48} className="text-gray-300 mx-auto mb-4" />
                        <p className="text-gray-400 font-medium">Chart visualization placeholder</p>
                        <p className="text-xs text-gray-400 mt-2">Integrate with charting library for live data</p>
                    </div>
                </div>
            </Card>
        </AdminLayout>
    );
}
