'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import {
    Bell,
    CheckCircle2,
    AlertCircle,
    Info,
    Users,
    Briefcase,
    Settings as SettingsIcon,
    X
} from 'lucide-react';

const notifications = [
    { id: 1, type: 'success', icon: CheckCircle2, title: 'New Application Received', message: 'Sarah Kamau applied for Senior Software Engineer position', time: '2 mins ago', read: false },
    { id: 2, type: 'info', icon: Info, title: 'Job Posting Approved', message: 'Your Marketing Lead position is now live', time: '1 hour ago', read: false },
    { id: 3, type: 'warning', icon: AlertCircle, title: 'Low Application Rate', message: 'UX Designer posting has only 3 applications this week', time: '3 hours ago', read: false },
    { id: 4, type: 'info', icon: Users, title: 'Team Member Added', message: 'John Ochieng joined the Engineering team', time: '5 hours ago', read: true },
    { id: 5, type: 'success', icon: Briefcase, title: 'Position Filled', message: 'Customer Success Manager position has been filled', time: '1 day ago', read: true },
    { id: 6, type: 'info', icon: SettingsIcon, title: 'System Update', message: 'Admin dashboard updated to version 2.1', time: '2 days ago', read: true },
    { id: 7, type: 'success', icon: CheckCircle2, title: 'Interview Scheduled', message: 'Interview scheduled with David Kipchoge for Product Manager role', time: '2 days ago', read: true },
    { id: 8, type: 'info', icon: Bell, title: 'Reminder', message: 'Weekly team meeting tomorrow at 10:00 AM', time: '3 days ago', read: true },
];

export default function AdminNotificationsPage() {
    const [filter, setFilter] = useState('all');
    const [notificationList, setNotificationList] = useState(notifications);

    const filteredNotifications = notificationList.filter(notif => {
        if (filter === 'unread') return !notif.read;
        if (filter === 'read') return notif.read;
        return true;
    });

    const markAsRead = (id: number) => {
        setNotificationList(prev =>
            prev.map(notif => notif.id === id ? { ...notif, read: true } : notif)
        );
    };

    const markAllAsRead = () => {
        setNotificationList(prev => prev.map(notif => ({ ...notif, read: true })));
    };

    const deleteNotification = (id: number) => {
        setNotificationList(prev => prev.filter(notif => notif.id !== id));
    };

    const unreadCount = notificationList.filter(n => !n.read).length;

    const getNotificationColor = (type: string) => {
        switch (type) {
            case 'success': return { bg: 'bg-green-50', text: 'text-[#1F7A5A]', border: 'border-green-100' };
            case 'warning': return { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-100' };
            case 'info': return { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-100' };
            default: return { bg: 'bg-gray-50', text: 'text-gray-600', border: 'border-gray-100' };
        }
    };

    return (
        <AdminLayout title="Notifications" subtitle="Activity Center">
            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm text-gray-500 font-medium mb-1">Total Notifications</h3>
                            <p className="text-3xl font-bold text-[#111111]">{notificationList.length}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-blue-50 text-blue-600">
                            <Bell size={24} />
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm text-gray-500 font-medium mb-1">Unread</h3>
                            <p className="text-3xl font-bold text-[#111111]">{unreadCount}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-orange-50 text-orange-600">
                            <AlertCircle size={24} />
                        </div>
                    </div>
                </Card>
                <Card className="p-6">
                    <div className="flex items-center justify-between">
                        <div>
                            <h3 className="text-sm text-gray-500 font-medium mb-1">Read</h3>
                            <p className="text-3xl font-bold text-[#111111]">{notificationList.length - unreadCount}</p>
                        </div>
                        <div className="p-3 rounded-xl bg-green-50 text-[#1F7A5A]">
                            <CheckCircle2 size={24} />
                        </div>
                    </div>
                </Card>
            </div>

            {/* Notifications List */}
            <Card className="overflow-hidden">
                <div className="p-6 border-b border-gray-100">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <h3 className="text-xl font-bold text-[#111111] mb-1">Activity Feed</h3>
                            <p className="text-sm text-gray-500">Stay updated with system notifications</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="flex bg-[#F5F6F7] p-1 rounded-lg">
                                {['all', 'unread', 'read'].map(f => (
                                    <button
                                        key={f}
                                        onClick={() => setFilter(f)}
                                        className={`px-4 py-2 text-sm font-bold rounded-md transition-all capitalize ${filter === f
                                                ? 'bg-white text-[#1F7A5A] shadow-sm'
                                                : 'text-gray-500 hover:text-[#1F7A5A]'
                                            }`}
                                    >
                                        {f}
                                    </button>
                                ))}
                            </div>
                            <Button
                                variant="outline"
                                className="h-10 text-sm"
                                onClick={markAllAsRead}
                                disabled={unreadCount === 0}
                            >
                                Mark All Read
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="divide-y divide-gray-100">
                    {filteredNotifications.length === 0 ? (
                        <div className="p-12 text-center">
                            <Bell size={48} className="text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-400 font-medium">No notifications to display</p>
                        </div>
                    ) : (
                        filteredNotifications.map((notif, i) => {
                            const colors = getNotificationColor(notif.type);
                            return (
                                <motion.div
                                    key={notif.id}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.05 }}
                                    className={`p-6 hover:bg-gray-50 transition-colors ${!notif.read ? 'bg-blue-50/30' : ''}`}
                                >
                                    <div className="flex items-start gap-4">
                                        <div className={`p-3 rounded-xl ${colors.bg} ${colors.text} flex-shrink-0`}>
                                            <notif.icon size={20} />
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <div className="flex items-start justify-between gap-4 mb-1">
                                                <h4 className="font-bold text-[#111111]">{notif.title}</h4>
                                                <div className="flex items-center gap-2 flex-shrink-0">
                                                    {!notif.read && (
                                                        <button
                                                            onClick={() => markAsRead(notif.id)}
                                                            className="text-xs font-bold text-[#1F7A5A] hover:underline"
                                                        >
                                                            Mark Read
                                                        </button>
                                                    )}
                                                    <button
                                                        onClick={() => deleteNotification(notif.id)}
                                                        className="p-1 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded transition-all"
                                                    >
                                                        <X size={16} />
                                                    </button>
                                                </div>
                                            </div>
                                            <p className="text-sm text-gray-600 mb-2">{notif.message}</p>
                                            <div className="flex items-center gap-3">
                                                <span className="text-xs text-gray-400">{notif.time}</span>
                                                {!notif.read && (
                                                    <span className="h-2 w-2 bg-[#1F7A5A] rounded-full"></span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })
                    )}
                </div>
            </Card>
        </AdminLayout>
    );
}
