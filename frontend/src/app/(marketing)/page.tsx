"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowRight, Star, Settings, Zap, BarChart3, Lock, CheckCircle2, PlayCircle, Layers, UsersIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  if (!isMounted) {
    return <div className="min-h-screen bg-white" />; // Plain fallback for SSR
  }

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-[#111111]">
      {/* Hero Section */}
      <section className="pt-20 pb-16 lg:pt-32 lg:pb-24 overflow-hidden relative">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Left Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex-1"
            >
              <motion.div variants={itemVariants} className="inline-flex items-center px-3 py-1 rounded-full bg-green-50 text-[#1F7A5A] text-[12px] font-bold mb-8 uppercase tracking-wider leading-none">
                Seamless Integration
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-[48px] lg:text-[56px] font-bold tracking-tight text-[#111111] leading-[1.1] mb-6">
                Boost Efficiency, <br />
                Automate Workflows, <br />
                and Drive Growth
              </motion.h1>

              <motion.p variants={itemVariants} className="text-[18px] text-[#555555] mb-10 leading-relaxed max-w-[480px]">
                Xentrix CRM empowers businesses with cutting-edge technology to streamline operations, enhance customer relationships, and maximize revenue.
              </motion.p>

              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 mb-10">
                <Link href="/signup">
                  <Button variant="primary" className="h-12 px-[18px] py-[10px] text-base">
                    Get Started
                  </Button>
                </Link>
                <Link href="/feature">
                  <Button variant="outline" className="h-12 px-[18px] py-[10px] text-base font-medium border-gray-200 text-[#444] hover:bg-gray-50">
                    Learn More
                  </Button>
                </Link>
              </motion.div>

              <motion.div variants={itemVariants} className="flex items-center gap-4 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-slate-200" />
                  ))}
                </div>
                <div className="flex flex-col">
                  <div className="flex text-[#FACC15] text-sm gap-0.5">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} fill="currentColor" size={14} className="stroke-none" />)}
                  </div>
                  <span className="text-sm font-medium text-[#111111]">4.8 <span className="text-gray-500 font-normal">from 500+</span></span>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Image */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-[16px] overflow-hidden shadow-2xl bg-slate-50 border border-slate-100">
                <img src="/hero-woman.png" alt="Professional working" className="w-full h-auto object-cover aspect-[1.1]" />
              </div>

              {/* Floating Stats Card 1 */}
              <div className="absolute top-12 -left-8 bg-white p-5 rounded-[12px] shadow-xl border border-slate-50 flex items-center gap-4 z-10 w-64 animate-float" style={{ animationDelay: '0.2s' }}>
                <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#1F7A5A]">
                  <BarChart3 size={20} />
                </div>
                <div>
                  <div className="text-[12px] text-gray-500 font-medium leading-none mb-1">Total Revenue</div>
                  <div className="text-[20px] font-bold text-[#111111]">$35,750.00</div>
                  <div className="text-[10px] text-green-600 font-bold bg-green-50 px-1 rounded inline-block mt-1">↑ 15%</div>
                </div>
              </div>

              {/* Floating Stats Card 2 */}
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-[12px] shadow-xl border border-slate-50 flex items-center gap-4 z-10 w-64 animate-float" style={{ animationDelay: '1s' }}>
                <div className="h-10 w-10 bg-green-50 rounded-lg flex items-center justify-center text-[#1F7A5A]">
                  <UsersIcon size={20} />
                </div>
                <div>
                  <div className="text-[12px] text-gray-500 font-medium leading-none mb-1">Total Customers</div>
                  <div className="text-[20px] font-bold text-[#111111]">4,669</div>
                  <div className="text-[10px] text-green-600 font-bold bg-green-50 px-1 rounded inline-block mt-1">↑ 28%</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-12 bg-[#F5F6F7]">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-8 opacity-60 grayscale">
            <span className="text-[15px] font-medium text-gray-400">Our Supported Partner</span>
            {['amazon', 'slack', 'dropbox', 'shopify', 'google'].map((logo) => (
              <span key={logo} className="text-xl font-bold text-gray-400 select-none uppercase tracking-tighter">{logo}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-[36px] lg:text-[40px] font-bold mb-4 text-[#111111] leading-tight">Smart Automation, Limitless Possibilities</h2>
            <p className="text-[16px] text-[#555555]">With Xentrix, you get a powerful automation platform designed to optimize your workflow and scale your business effortlessly.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "AI-Powered Insights", icon: Layers, desc: "Make data-driven decisions with real-time analytics." },
              { title: "Workflow Automation", icon: Zap, desc: "Streamline repetitive tasks and boost efficiency." },
              { title: "Omni-Channel Marketing", icon: BarChart3, desc: "Engage your audience across multiple platforms seamlessly." },
              { title: "Secure Cloud Integration", icon: Lock, desc: "Sync and access your data anytime, anywhere." }
            ].map((feature, i) => (
              <Card key={i} className="p-8 bg-white border border-gray-100 shadow-sm rounded-[12px] hover:shadow-lg transition-all">
                <div className="h-10 w-10 bg-[#1F7A5A] text-white rounded-lg flex items-center justify-center mb-6">
                  <feature.icon size={20} />
                </div>
                <h3 className="text-[18px] font-bold mb-3 text-[#111111]">{feature.title}</h3>
                <p className="text-[14px] text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div className="rounded-[16px] overflow-hidden shadow-2xl border border-slate-50">
                <img src="/feature-dashboard.png" alt="Analytics Dashboard" className="w-full h-auto object-cover" />
              </div>
            </div>
            <div>
              <h2 className="text-[32px] lg:text-[36px] font-bold mb-6 text-[#111111] leading-tight">Customer-Driven Solutions with Xentrix</h2>
              <p className="text-[16px] text-[#555555] mb-8 leading-relaxed">
                At Xentrix, we focus on delivering tailored solutions that meet your customers' needs. With advanced technology and AI-powered CRM systems, we help businesses build stronger customer relationships.
              </p>

              <div className="space-y-4 mb-10">
                {['Personalized Engagement', 'Seamless Integration', 'Smart Data Analytics', '24/7 Customer Support'].map((feat) => (
                  <div key={feat} className="flex items-center gap-3">
                    <div className="flex-shrink-0 bg-green-50 rounded-full p-1 text-[#1F7A5A]">
                      <CheckCircle2 size={16} />
                    </div>
                    <span className="text-[#111111] font-medium text-[15px]">{feat}</span>
                  </div>
                ))}
              </div>

              <div className="flex gap-12 border-t border-gray-100 pt-8">
                <div>
                  <div className="text-[28px] lg:text-[32px] font-bold text-[#111111]">200+</div>
                  <div className="text-[12px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Business Partners</div>
                </div>
                <div>
                  <div className="text-[28px] lg:text-[32px] font-bold text-[#111111]">30K+</div>
                  <div className="text-[12px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Satisfied Customers</div>
                </div>
                <div>
                  <div className="text-[28px] lg:text-[32px] font-bold text-[#111111]">10+</div>
                  <div className="text-[12px] text-gray-500 mt-1 uppercase tracking-wider font-semibold">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-4 max-w-[1240px]">
          <h2 className="text-[36px] font-bold mb-4 text-[#111111]">Seamless Integrations</h2>
          <p className="text-[#555555] mb-16 max-w-2xl mx-auto text-[16px]">Connect with your favorite tools and automate your business workflows across all your apps.</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {['Google Drive', 'Slack', 'Zendesk', 'HubSpot'].map((tool) => (
              <Link key={tool} href="/feature" className="py-10 px-6 rounded-[16px] bg-[#F5F6F7] flex flex-col items-center justify-center gap-5 hover:shadow-xl transition-all cursor-pointer group">
                <div className="w-16 h-16 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-400 font-bold text-lg group-hover:scale-110 transition-transform">{tool[0]}</div>
                <span className="font-bold text-[#111111] text-[16px]">{tool}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
