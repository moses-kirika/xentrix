'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
    UserPlus,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Shield,
    Ban,
    CheckCircle2,
    Clock,
    Search,
    MoreHorizontal,
    Edit,
    Trash2,
    Key
} from 'lucide-react';

const users = [
    {
        id: 1,
        name: 'Peter Mwangi',
        email: 'peter.mwangi@example.com',
        phone: '+254 700 111 222',
        location: 'Nairobi, Kenya',
        role: 'User',
        status: 'Active',
        plan: 'Pro',
        registeredDate: '2024-01-10',
        lastActive: '2 hours ago',
        avatar: 'PM'
    },
    {
        id: 2,
        name: 'Jane Wambui',
        email: 'jane.wambui@example.com',
        phone: '+254 711 222 333',
        location: 'Mombasa, Kenya',
        role: 'User',
        status: 'Active',
        plan: 'Starter',
        registeredDate: '2024-01-08',
        lastActive: '1 day ago',
        avatar: 'JW'
    },
    {
        id: 3,
        name: 'Michael Otieno',
        email: 'michael.otieno@example.com',
        phone: '+254 722 333 444',
        location: 'Kisumu, Kenya',
        role: 'User',
        status: 'Suspended',
        plan: 'Enterprise',
        registeredDate: '2023-12-15',
        lastActive: '1 week ago',
        avatar: 'MO'
    },
    {
        id: 4,
        name: 'Lucy Akinyi',
        email: 'lucy.akinyi@example.com',
        phone: '+254 733 444 555',
        location: 'Nakuru, Kenya',
        role: 'User',
        status: 'Active',
        plan: 'Pro',
        registeredDate: '2024-01-05',
        lastActive: '3 hours ago',
        avatar: 'LA'
    },
    {
        id: 5,
        name: 'Daniel Kipchoge',
        email: 'daniel.kipchoge@example.com',
        phone: '+254 744 555 666',
        location: 'Eldoret, Kenya',
        role: 'Admin',
        status: 'Active',
        plan: 'Enterprise',
        registeredDate: '2023-11-20',
        lastActive: '30 mins ago',
        avatar: 'DK'
    },
    {
        id: 6,
        name: 'Ruth Njeri',
        email: 'ruth.njeri@example.com',
        phone: '+254 755 666 777',
        location: 'Thika, Kenya',
        role: 'User',
        status: 'Inactive',
        plan: 'Starter',
        registeredDate: '2023-10-12',
        lastActive: '2 months ago',
        avatar: 'RN'
    },
];

export default function AdminUsersPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [selectedUser, setSelectedUser] = useState<typeof users[0] | null>(null);

    const filteredUsers = users.filter(user => {
        const matchesStatus = selectedStatus === 'All' || user.status === selectedStatus;
        const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.role.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Active': return { bg: 'bg-green-50', text: 'text-[#1F7A5A]', icon: CheckCircle2 };
            case 'Suspended': return { bg: 'bg-red-50', text: 'text-red-600', icon: Ban };
            case 'Inactive': return { bg: 'bg-gray-50', text: 'text-gray-600', icon: Clock };
            default: return { bg: 'bg-gray-50', text: 'text-gray-600', icon: Clock };
        }
    };

    const getPlanColor = (plan: string) => {
        switch (plan) {
            case 'Enterprise': return 'bg-purple-50 text-purple-600';
            case 'Pro': return 'bg-blue-50 text-blue-600';
            case 'Starter': return 'bg-gray-100 text-gray-600';
            default: return 'bg-gray-100 text-gray-600';
        }
    };

    return (
        <AdminLayout title="User Management" subtitle="Account Administration">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Total Users', value: users.length, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Active Users', value: users.filter(u => u.status === 'Active').length, color: 'text-[#1F7A5A]', bg: 'bg-green-50' },
                    { label: 'Suspended', value: users.filter(u => u.status === 'Suspended').length, color: 'text-red-600', bg: 'bg-red-50' },
                    { label: 'Admins', value: users.filter(u => u.role === 'Admin').length, color: 'text-purple-600', bg: 'bg-purple-50' },
                ].map((stat, i) => (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <Card className="p-6">
                            <h3 className="text-sm text-gray-500 font-medium mb-1">{stat.label}</h3>
                            <p className="text-3xl font-bold text-[#111111]">{stat.value}</p>
                        </Card>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Users List */}
                <div className="lg:col-span-2">
                    <Card className="overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#111111] mb-1">All Users</h3>
                                    <p className="text-sm text-gray-500">Manage user accounts and permissions</p>
                                </div>
                                <Button variant="primary" className="h-10 flex items-center gap-2">
                                    <UserPlus size={16} />
                                    Add User
                                </Button>
                            </div>

                            {/* Filters */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex bg-[#F5F6F7] p-1 rounded-lg">
                                    {['All', 'Active', 'Suspended', 'Inactive'].map(status => (
                                        <button
                                            key={status}
                                            onClick={() => setSelectedStatus(status)}
                                            className={`px-4 py-2 text-xs font-bold rounded-md transition-all ${selectedStatus === status
                                                    ? 'bg-white text-[#1F7A5A] shadow-sm'
                                                    : 'text-gray-500 hover:text-[#1F7A5A]'
                                                }`}
                                        >
                                            {status}
                                        </button>
                                    ))}
                                </div>
                                <div className="relative flex-1 min-w-[200px]">
                                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
                                    <input
                                        type="text"
                                        placeholder="Search users..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full h-10 pl-10 pr-4 border border-gray-200 rounded-lg text-sm focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                            {filteredUsers.map((user, i) => {
                                const statusColors = getStatusColor(user.status);
                                return (
                                    <motion.div
                                        key={user.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setSelectedUser(user)}
                                        className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${selectedUser?.id === user.id ? 'bg-green-50/50' : ''
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="h-12 w-12 bg-[#1F7A5A] text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                                                {user.avatar}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-4 mb-2">
                                                    <div>
                                                        <div className="flex items-center gap-2 mb-1">
                                                            <h4 className="font-bold text-[#111111]">{user.name}</h4>
                                                            {user.role === 'Admin' && (
                                                                <span className="flex items-center gap-1 px-2 py-0.5 bg-purple-50 text-purple-600 text-xs font-bold rounded">
                                                                    <Shield size={12} />
                                                                    Admin
                                                                </span>
                                                            )}
                                                        </div>
                                                        <p className="text-sm text-gray-600">{user.email}</p>
                                                    </div>
                                                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusColors.bg} ${statusColors.text} text-xs font-bold whitespace-nowrap`}>
                                                        <statusColors.icon size={14} />
                                                        {user.status}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <span className={`px-2 py-1 rounded font-medium ${getPlanColor(user.plan)}`}>
                                                        {user.plan}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock size={12} />
                                                        {user.lastActive}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </Card>
                </div>

                {/* User Details */}
                <div className="lg:col-span-1">
                    {selectedUser ? (
                        <Card className="p-6 sticky top-24">
                            <div className="text-center mb-6">
                                <div className="h-20 w-20 bg-[#1F7A5A] text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                                    {selectedUser.avatar}
                                </div>
                                <h3 className="text-xl font-bold text-[#111111] mb-1">{selectedUser.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{selectedUser.email}</p>
                                <div className="flex items-center justify-center gap-2 mb-2">
                                    {(() => {
                                        const statusColors = getStatusColor(selectedUser.status);
                                        return (
                                            <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${statusColors.bg} ${statusColors.text} text-sm font-bold`}>
                                                <statusColors.icon size={16} />
                                                {selectedUser.status}
                                            </div>
                                        );
                                    })()}
                                </div>
                                <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getPlanColor(selectedUser.plan)}`}>
                                    {selectedUser.plan} Plan
                                </span>
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone size={16} className="text-gray-400" />
                                    <span className="text-gray-600">{selectedUser.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin size={16} className="text-gray-400" />
                                    <span className="text-gray-600">{selectedUser.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Calendar size={16} className="text-gray-400" />
                                    <span className="text-gray-600">Joined {new Date(selectedUser.registeredDate).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Shield size={16} className="text-gray-400" />
                                    <span className="text-gray-600">Role: {selectedUser.role}</span>
                                </div>
                            </div>

                            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                                <h4 className="text-sm font-bold text-[#111111] mb-2">Account Activity</h4>
                                <p className="text-sm text-gray-600">Last active: {selectedUser.lastActive}</p>
                            </div>

                            <div className="space-y-2">
                                <Button variant="outline" className="w-full justify-start">
                                    <Edit size={16} className="mr-2" />
                                    Edit User
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <Key size={16} className="mr-2" />
                                    Reset Password
                                </Button>
                                {selectedUser.status === 'Active' ? (
                                    <Button variant="outline" className="w-full justify-start text-red-600 hover:bg-red-50">
                                        <Ban size={16} className="mr-2" />
                                        Suspend Account
                                    </Button>
                                ) : (
                                    <Button variant="outline" className="w-full justify-start text-[#1F7A5A] hover:bg-green-50">
                                        <CheckCircle2 size={16} className="mr-2" />
                                        Activate Account
                                    </Button>
                                )}
                                <Button variant="outline" className="w-full justify-start text-red-600 hover:bg-red-50">
                                    <Trash2 size={16} className="mr-2" />
                                    Delete User
                                </Button>
                            </div>
                        </Card>
                    ) : (
                        <Card className="p-12 text-center">
                            <UserPlus size={48} className="text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-400 font-medium">Select a user to view details</p>
                        </Card>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
