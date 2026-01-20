'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import AdminLayout from '@/components/AdminLayout';
import { Button } from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';
import {
    Download,
    Mail,
    Phone,
    MapPin,
    Calendar,
    Briefcase,
    FileText,
    Image as ImageIcon,
    Eye,
    CheckCircle2,
    XCircle,
    Clock,
    Filter,
    Search
} from 'lucide-react';

const applicants = [
    {
        id: 1,
        name: 'Sarah Wanjiku',
        email: 'sarah.wanjiku@email.com',
        phone: '+254 722 123 456',
        location: 'Nairobi, Kenya',
        position: 'Senior Software Engineer',
        appliedDate: '2024-01-18',
        status: 'Under Review',
        experience: '5 years',
        education: 'BSc Computer Science - University of Nairobi',
        documents: {
            cv: 'sarah_wanjiku_cv.pdf',
            coverLetter: 'sarah_wanjiku_cover_letter.pdf',
            portfolio: 'sarah_wanjiku_portfolio.pdf'
        },
        avatar: 'SW'
    },
    {
        id: 2,
        name: 'John Kamau',
        email: 'john.kamau@email.com',
        phone: '+254 733 234 567',
        location: 'Mombasa, Kenya',
        position: 'Product Manager',
        appliedDate: '2024-01-17',
        status: 'Interview Scheduled',
        experience: '7 years',
        education: 'MBA - Strathmore University',
        documents: {
            cv: 'john_kamau_cv.pdf',
            coverLetter: 'john_kamau_cover_letter.pdf',
            portfolio: null
        },
        avatar: 'JK'
    },
    {
        id: 3,
        name: 'Grace Achieng',
        email: 'grace.achieng@email.com',
        phone: '+254 744 345 678',
        location: 'Kisumu, Kenya',
        position: 'UX Designer',
        appliedDate: '2024-01-16',
        status: 'Accepted',
        experience: '4 years',
        education: 'BA Design - Kenyatta University',
        documents: {
            cv: 'grace_achieng_cv.pdf',
            coverLetter: 'grace_achieng_cover_letter.pdf',
            portfolio: 'grace_achieng_portfolio.pdf'
        },
        avatar: 'GA'
    },
    {
        id: 4,
        name: 'David Omondi',
        email: 'david.omondi@email.com',
        phone: '+254 755 456 789',
        location: 'Eldoret, Kenya',
        position: 'Marketing Lead',
        appliedDate: '2024-01-15',
        status: 'Rejected',
        experience: '3 years',
        education: 'BSc Marketing - USIU',
        documents: {
            cv: 'david_omondi_cv.pdf',
            coverLetter: 'david_omondi_cover_letter.pdf',
            portfolio: null
        },
        avatar: 'DO'
    },
    {
        id: 5,
        name: 'Mary Njeri',
        email: 'mary.njeri@email.com',
        phone: '+254 766 567 890',
        location: 'Nakuru, Kenya',
        position: 'Data Analyst',
        appliedDate: '2024-01-14',
        status: 'Under Review',
        experience: '2 years',
        education: 'BSc Statistics - Jomo Kenyatta University',
        documents: {
            cv: 'mary_njeri_cv.pdf',
            coverLetter: 'mary_njeri_cover_letter.pdf',
            portfolio: 'mary_njeri_portfolio.pdf'
        },
        avatar: 'MN'
    },
];

export default function AdminApplicantsPage() {
    const [selectedStatus, setSelectedStatus] = useState('All');
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedApplicant, setSelectedApplicant] = useState<typeof applicants[0] | null>(null);

    const filteredApplicants = applicants.filter(applicant => {
        const matchesStatus = selectedStatus === 'All' || applicant.status === selectedStatus;
        const matchesSearch = applicant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            applicant.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
            applicant.email.toLowerCase().includes(searchTerm.toLowerCase());
        return matchesStatus && matchesSearch;
    });

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Accepted': return { bg: 'bg-green-50', text: 'text-[#1F7A5A]', icon: CheckCircle2 };
            case 'Rejected': return { bg: 'bg-red-50', text: 'text-red-600', icon: XCircle };
            case 'Interview Scheduled': return { bg: 'bg-blue-50', text: 'text-blue-600', icon: Calendar };
            case 'Under Review': return { bg: 'bg-orange-50', text: 'text-orange-600', icon: Clock };
            default: return { bg: 'bg-gray-50', text: 'text-gray-600', icon: Clock };
        }
    };

    const handleDownload = (fileName: string) => {
        // Simulate download
        alert(`Downloading: ${fileName}`);
        // In production, this would trigger actual file download
        // window.open(`/api/download/${fileName}`, '_blank');
    };

    return (
        <AdminLayout title="Applicant Management" subtitle="Application Tracking">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                {[
                    { label: 'Total Applications', value: applicants.length, color: 'text-blue-600', bg: 'bg-blue-50' },
                    { label: 'Under Review', value: applicants.filter(a => a.status === 'Under Review').length, color: 'text-orange-600', bg: 'bg-orange-50' },
                    { label: 'Interviews', value: applicants.filter(a => a.status === 'Interview Scheduled').length, color: 'text-purple-600', bg: 'bg-purple-50' },
                    { label: 'Accepted', value: applicants.filter(a => a.status === 'Accepted').length, color: 'text-[#1F7A5A]', bg: 'bg-green-50' },
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
                {/* Applicants List */}
                <div className="lg:col-span-2">
                    <Card className="overflow-hidden">
                        <div className="p-6 border-b border-gray-100">
                            <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-[#111111] mb-1">All Applicants</h3>
                                    <p className="text-sm text-gray-500">Review and manage applications</p>
                                </div>
                            </div>

                            {/* Filters */}
                            <div className="flex flex-wrap items-center gap-4">
                                <div className="flex bg-[#F5F6F7] p-1 rounded-lg">
                                    {['All', 'Under Review', 'Interview Scheduled', 'Accepted', 'Rejected'].map(status => (
                                        <button
                                            key={status}
                                            onClick={() => setSelectedStatus(status)}
                                            className={`px-3 py-2 text-xs font-bold rounded-md transition-all whitespace-nowrap ${selectedStatus === status
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
                                        placeholder="Search applicants..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="w-full h-10 pl-10 pr-4 border border-gray-200 rounded-lg text-sm focus:border-[#1F7A5A] focus:ring-1 focus:ring-[#1F7A5A] outline-none"
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="divide-y divide-gray-100 max-h-[600px] overflow-y-auto">
                            {filteredApplicants.map((applicant, i) => {
                                const statusColors = getStatusColor(applicant.status);
                                return (
                                    <motion.div
                                        key={applicant.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.05 }}
                                        onClick={() => setSelectedApplicant(applicant)}
                                        className={`p-6 hover:bg-gray-50 cursor-pointer transition-colors ${selectedApplicant?.id === applicant.id ? 'bg-green-50/50' : ''
                                            }`}
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="h-12 w-12 bg-[#1F7A5A] text-white rounded-xl flex items-center justify-center font-bold flex-shrink-0">
                                                {applicant.avatar}
                                            </div>
                                            <div className="flex-1 min-w-0">
                                                <div className="flex items-start justify-between gap-4 mb-2">
                                                    <div>
                                                        <h4 className="font-bold text-[#111111]">{applicant.name}</h4>
                                                        <p className="text-sm text-gray-600">{applicant.position}</p>
                                                    </div>
                                                    <div className={`flex items-center gap-2 px-3 py-1 rounded-full ${statusColors.bg} ${statusColors.text} text-xs font-bold whitespace-nowrap`}>
                                                        <statusColors.icon size={14} />
                                                        {applicant.status}
                                                    </div>
                                                </div>
                                                <div className="flex items-center gap-4 text-xs text-gray-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar size={12} />
                                                        {new Date(applicant.appliedDate).toLocaleDateString()}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <MapPin size={12} />
                                                        {applicant.location}
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

                {/* Applicant Details */}
                <div className="lg:col-span-1">
                    {selectedApplicant ? (
                        <Card className="p-6 sticky top-24">
                            <div className="text-center mb-6">
                                <div className="h-20 w-20 bg-[#1F7A5A] text-white rounded-2xl flex items-center justify-center font-bold text-2xl mx-auto mb-4">
                                    {selectedApplicant.avatar}
                                </div>
                                <h3 className="text-xl font-bold text-[#111111] mb-1">{selectedApplicant.name}</h3>
                                <p className="text-sm text-gray-500 mb-3">{selectedApplicant.position}</p>
                                {(() => {
                                    const statusColors = getStatusColor(selectedApplicant.status);
                                    return (
                                        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${statusColors.bg} ${statusColors.text} text-sm font-bold`}>
                                            <statusColors.icon size={16} />
                                            {selectedApplicant.status}
                                        </div>
                                    );
                                })()}
                            </div>

                            <div className="space-y-4 mb-6">
                                <div className="flex items-center gap-3 text-sm">
                                    <Mail size={16} className="text-gray-400" />
                                    <span className="text-gray-600">{selectedApplicant.email}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Phone size={16} className="text-gray-400" />
                                    <span className="text-gray-600">{selectedApplicant.phone}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <MapPin size={16} className="text-gray-400" />
                                    <span className="text-gray-600">{selectedApplicant.location}</span>
                                </div>
                                <div className="flex items-center gap-3 text-sm">
                                    <Briefcase size={16} className="text-gray-400" />
                                    <span className="text-gray-600">{selectedApplicant.experience} experience</span>
                                </div>
                            </div>

                            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
                                <h4 className="text-sm font-bold text-[#111111] mb-2">Education</h4>
                                <p className="text-sm text-gray-600">{selectedApplicant.education}</p>
                            </div>

                            <div className="space-y-3 mb-6">
                                <h4 className="text-sm font-bold text-[#111111]">Documents</h4>
                                {selectedApplicant.documents.cv && (
                                    <button
                                        onClick={() => handleDownload(selectedApplicant.documents.cv!)}
                                        className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText size={20} className="text-[#1F7A5A]" />
                                            <div className="text-left">
                                                <p className="text-sm font-medium text-[#111111]">Resume / CV</p>
                                                <p className="text-xs text-gray-500">{selectedApplicant.documents.cv}</p>
                                            </div>
                                        </div>
                                        <Download size={16} className="text-gray-400 group-hover:text-[#1F7A5A]" />
                                    </button>
                                )}
                                {selectedApplicant.documents.coverLetter && (
                                    <button
                                        onClick={() => handleDownload(selectedApplicant.documents.coverLetter!)}
                                        className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <FileText size={20} className="text-blue-600" />
                                            <div className="text-left">
                                                <p className="text-sm font-medium text-[#111111]">Cover Letter</p>
                                                <p className="text-xs text-gray-500">{selectedApplicant.documents.coverLetter}</p>
                                            </div>
                                        </div>
                                        <Download size={16} className="text-gray-400 group-hover:text-blue-600" />
                                    </button>
                                )}
                                {selectedApplicant.documents.portfolio && (
                                    <button
                                        onClick={() => handleDownload(selectedApplicant.documents.portfolio!)}
                                        className="w-full flex items-center justify-between p-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors group"
                                    >
                                        <div className="flex items-center gap-3">
                                            <ImageIcon size={20} className="text-purple-600" />
                                            <div className="text-left">
                                                <p className="text-sm font-medium text-[#111111]">Portfolio</p>
                                                <p className="text-xs text-gray-500">{selectedApplicant.documents.portfolio}</p>
                                            </div>
                                        </div>
                                        <Download size={16} className="text-gray-400 group-hover:text-purple-600" />
                                    </button>
                                )}
                            </div>

                            <div className="space-y-2">
                                <Button variant="primary" className="w-full">
                                    <CheckCircle2 size={16} className="mr-2" />
                                    Accept Applicant
                                </Button>
                                <Button variant="outline" className="w-full">
                                    <XCircle size={16} className="mr-2" />
                                    Reject
                                </Button>
                            </div>
                        </Card>
                    ) : (
                        <Card className="p-12 text-center">
                            <Eye size={48} className="text-gray-300 mx-auto mb-4" />
                            <p className="text-gray-400 font-medium">Select an applicant to view details</p>
                        </Card>
                    )}
                </div>
            </div>
        </AdminLayout>
    );
}
