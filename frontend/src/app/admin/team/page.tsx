'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
    Plus,
    Mail,
    Phone,
    MoreHorizontal,
    Shield,
    UserCheck,
    Clock
} from 'lucide-react';

const teamMembers = [
    { id: 1, name: 'Alex Munene', role: 'System Administrator', email: 'alex.munene@xentrix.com', phone: '+254 712 345 678', department: 'IT', status: 'Active', avatar: 'AM', lastActive: '2 mins ago' },
    { id: 2, name: 'Sarah Kamau', role: 'HR Manager', email: 'sarah.kamau@xentrix.com', phone: '+254 723 456 789', department: 'Human Resources', status: 'Active', avatar: 'SK', lastActive: '15 mins ago' },
    { id: 3, name: 'John Ochieng', role: 'Engineering Lead', email: 'john.ochieng@xentrix.com', phone: '+254 734 567 890', department: 'Engineering', status: 'Active', avatar: 'JO', lastActive: '1 hour ago' },
    { id: 4, name: 'Grace Wanjiku', role: 'Product Manager', email: 'grace.wanjiku@xentrix.com', phone: '+254 745 678 901', department: 'Product', status: 'Active', avatar: 'GW', lastActive: '3 hours ago' },
    { id: 5, name: 'David Kipchoge', role: 'Sales Director', email: 'david.kipchoge@xentrix.com', phone: '+254 756 789 012', department: 'Sales', status: 'Away', avatar: 'DK', lastActive: '1 day ago' },
    { id: 6, name: 'Mary Akinyi', role: 'Marketing Specialist', email: 'mary.akinyi@xentrix.com', phone: '+254 767 890 123', department: 'Marketing', status: 'Active', avatar: 'MA', lastActive: '30 mins ago' },
];

export default function AdminTeamPage() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredMembers = teamMembers.filter(member =>
        member.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.department.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <AdminLayout title="Team Management" subtitle="Employee Directory">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                {[
                    { label: 'Total Members', value: teamMembers.length, icon: UserCheck, color: 'text-[#1F7A5A]', bg: 'bg-green-50' },
                    { label: 'Active Now', value: teamMembers.filter(m => m.status === 'Active').length, icon: Clock, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Departments', value: new Set(teamMembers.map(m => m.department)).size, icon: Shield, color: 'text-purple-600', bg: 'bg-purple-50' },
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

            {/* Team Directory */}
            <Card className="overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-[#111111] mb-1">Team Directory</h3>
                            <p className="text-sm text-gray-500">Manage team members and permissions</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <input
                                type="text"
                                placeholder="Search team members..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="h-10 px-4 border border-gray-200 rounded-lg text-sm focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none"
                            />
                            <Button variant="primary" className="h-10 flex items-center gap-2">
                                <Plus size={16} />
                                Add Member
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
                    {filteredMembers.map((member, i) => (
                        <motion.div
                            key={member.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                        >
                            <Card className="p-6 hover:shadow-lg transition-shadow">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="h-12 w-12 bg-[#1F7A5A] text-white rounded-xl flex items-center justify-center font-bold text-lg">
                                            {member.avatar}
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-[#111111]">{member.name}</h4>
                                            <p className="text-xs text-gray-500">{member.role}</p>
                                        </div>
                                    </div>
                                    <button className="p-2 text-gray-400 hover:text-[#1F7A5A] hover:bg-green-50 rounded-lg transition-all">
                                        <MoreHorizontal size={16} />
                                    </button>
                                </div>

                                <div className="space-y-3 mb-4">
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Mail size={14} className="text-gray-400" />
                                        <span className="truncate">{member.email}</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Phone size={14} className="text-gray-400" />
                                        <span>{member.phone}</span>
                                    </div>
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                                    <span className="text-xs font-medium bg-gray-100 text-gray-600 px-2 py-1 rounded">{member.department}</span>
                                    <div className="flex items-center gap-2">
                                        <div className={`h-2 w-2 rounded-full ${member.status === 'Active' ? 'bg-[#1F7A5A]' : 'bg-gray-400'}`} />
                                        <span className="text-xs text-gray-500">{member.lastActive}</span>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </Card>
        </AdminLayout>
    );
}
