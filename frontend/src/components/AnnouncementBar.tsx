"use client";

import { useState } from 'react';
import { X } from 'lucide-react';

export default function AnnouncementBar() {
    const [isVisible, setIsVisible] = useState(true);

    if (!isVisible) return null;

    return (
        <div className="bg-[#114432] text-white text-[13px] h-[36px] flex items-center justify-center relative px-4 z-50">
            <div className="flex items-center gap-2">
                <span className="bg-white/20 px-2 py-0.5 rounded text-[11px] font-semibold uppercase tracking-wider">New</span>
                <span>Xentrix Update 2025: Discover new CRM innovations.</span>
            </div>
            <button
                onClick={() => setIsVisible(false)}
                className="absolute right-4 p-1 hover:bg-white/10 rounded-full transition-colors"
                aria-label="Close announcement"
            >
                <X size={14} />
            </button>
        </div>
    );
}
