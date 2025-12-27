'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

interface ComingSoonProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    gradientFrom: string;
    gradientTo: string;
}

export default function ComingSoon({
    title,
    description,
    icon,
    gradientFrom = 'from-primary',
    gradientTo = 'to-accent',
}: ComingSoonProps) {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />

            {/* Floating decorative orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.75s' }} />

            {/* Subtle grid pattern overlay */}
            <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: 'radial-gradient(circle at 1px 1px, currentColor 1px, transparent 0)',
                backgroundSize: '40px 40px'
            }} />

            {/* Content */}
            <div className={`relative flex flex-col items-center justify-center min-h-screen px-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Main card */}
                <div className="relative max-w-lg w-full">
                    {/* Glow effect behind card */}
                    <div className={`absolute -inset-4 bg-gradient-to-r ${gradientFrom} ${gradientTo} rounded-3xl blur-2xl opacity-20 animate-pulse`} style={{ animationDuration: '3s' }} />

                    <div className="relative bg-surface/90 backdrop-blur-xl rounded-3xl border border-border p-8 md:p-12 shadow-2xl">
                        {/* Icon container with animated rings */}
                        <div className="relative flex justify-center mb-8">
                            {/* Outer ring */}
                            <div className={`absolute w-32 h-32 rounded-full border-2 border-dashed border-primary/20 animate-spin`} style={{ animationDuration: '20s' }} />
                            {/* Middle ring */}
                            <div className={`absolute w-28 h-28 rounded-full border border-primary/30`} />
                            {/* Inner glow */}
                            <div className={`absolute w-24 h-24 rounded-full bg-gradient-to-br ${gradientFrom} ${gradientTo} opacity-20 blur-xl`} />

                            {/* Icon */}
                            <div className={`relative w-24 h-24 rounded-2xl bg-gradient-to-br ${gradientFrom} ${gradientTo} flex items-center justify-center shadow-lg transform hover:scale-110 transition-transform duration-300`}>
                                <div className="text-white w-12 h-12">
                                    {icon}
                                </div>
                            </div>
                        </div>

                        {/* Coming Soon badge */}
                        <div className="flex justify-center mb-6">
                            <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white text-sm font-medium shadow-md`}>
                                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
                                Coming Soon
                            </span>
                        </div>

                        {/* Title */}
                        <h1 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
                            {title}
                        </h1>

                        {/* Description */}
                        <p className="text-center text-foreground-muted text-lg leading-relaxed mb-8">
                            {description}
                        </p>

                        {/* Progress indicator */}
                        <div className="mb-8">
                            <div className="flex justify-between text-sm text-foreground-muted mb-2">
                                <span>Development Progress</span>
                                <span>Building with love 💕</span>
                            </div>
                            <div className="h-2 rounded-full bg-border overflow-hidden">
                                <div
                                    className={`h-full rounded-full bg-gradient-to-r ${gradientFrom} ${gradientTo} animate-pulse`}
                                    style={{ width: '35%', animationDuration: '2s' }}
                                />
                            </div>
                        </div>

                        {/* Action buttons */}
                        <div className="flex flex-col sm:flex-row gap-3">
                            <Link
                                href="/"
                                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-surface-hover border border-border text-foreground font-medium hover:bg-surface hover:border-primary hover:text-primary transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Go Home
                            </Link>
                            <button
                                className={`flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r ${gradientFrom} ${gradientTo} text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300`}
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" />
                                </svg>
                                Notify Me
                            </button>
                        </div>
                    </div>
                </div>

                {/* Feature hints */}
                <div className={`mt-12 max-w-2xl w-full grid grid-cols-1 md:grid-cols-3 gap-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="flex items-center gap-3 p-4 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Premium Features</p>
                            <p className="text-xs text-foreground-muted">Designed for you</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50">
                        <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Made with Love</p>
                            <p className="text-xs text-foreground-muted">Every detail matters</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3 p-4 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50">
                        <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                            <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                        </div>
                        <div>
                            <p className="text-sm font-medium text-foreground">Launching Soon</p>
                            <p className="text-xs text-foreground-muted">Stay tuned!</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
