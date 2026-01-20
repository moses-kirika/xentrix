import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AnnouncementBar from "@/components/AnnouncementBar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export default function MarketingLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <AnnouncementBar />
            <Header />
            <main style={{ minHeight: 'calc(100vh - 36px - 72px - 100px)' }}>
                {children}
            </main>
            <Footer />
        </>
    );
}
