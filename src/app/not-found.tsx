'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export default function NotFound() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <div className="min-h-screen relative overflow-hidden">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-light/20 via-background to-accent-light/20" />

            {/* Floating decorative orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-secondary/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '0.75s' }} />

            {/* Stars/sparkles decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(6)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-2 h-2 bg-primary/30 rounded-full animate-pulse"
                        style={{
                            top: `${15 + i * 15}%`,
                            left: `${10 + i * 15}%`,
                            animationDelay: `${i * 0.3}s`,
                            animationDuration: '2s'
                        }}
                    />
                ))}
                {[...Array(6)].map((_, i) => (
                    <div
                        key={`right-${i}`}
                        className="absolute w-2 h-2 bg-accent/30 rounded-full animate-pulse"
                        style={{
                            top: `${20 + i * 12}%`,
                            right: `${10 + i * 12}%`,
                            animationDelay: `${i * 0.4}s`,
                            animationDuration: '2.5s'
                        }}
                    />
                ))}
            </div>

            {/* Content */}
            <div className={`relative flex flex-col items-center justify-center min-h-screen px-6 transition-all duration-700 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                {/* Main card */}
                <div className="relative max-w-lg w-full text-center">
                    {/* Glow effect */}
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-3xl blur-2xl opacity-10" />

                    <div className="relative bg-surface/90 backdrop-blur-xl rounded-3xl border border-border p-8 md:p-12 shadow-2xl">
                        {/* Sad/Lost illustration */}
                        <div className="relative flex justify-center mb-8">
                            {/* Background glow */}
                            <div className="absolute w-40 h-40 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 blur-2xl" />

                            {/* 404 with heart */}
                            <div className="relative">
                                <div className="text-8xl md:text-9xl font-bold bg-gradient-to-br from-primary via-accent to-secondary bg-clip-text text-transparent select-none">
                                    4
                                    <span className="inline-block animate-float" style={{ animationDuration: '2s' }}>
                                        <svg className="w-16 h-16 md:w-20 md:h-20 inline text-primary" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                                        </svg>
                                    </span>
                                    4
                                </div>
                            </div>
                        </div>

                        {/* Message */}
                        <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
                            Oops! Lost in the clouds
                        </h1>

                        <p className="text-foreground-muted text-lg mb-8 leading-relaxed">
                            The page you&apos;re looking for seems to have wandered off to find its own comfort zone.
                            Let&apos;s get you back to somewhere cozy.
                        </p>

                        {/* Helpful suggestions */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            <Link
                                href="/"
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-primary to-primary-hover text-white font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                </svg>
                                Go Home
                            </Link>
                            <button
                                onClick={() => window.history.back()}
                                className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-surface-hover border border-border text-foreground font-medium hover:border-primary hover:text-primary transition-all duration-300"
                            >
                                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 15L3 9m0 0l6-6M3 9h12a6 6 0 010 12h-3" />
                                </svg>
                                Go Back
                            </button>
                        </div>

                        {/* Comforting message */}
                        <div className="pt-6 border-t border-border">
                            <p className="text-sm text-foreground-muted italic">
                                &ldquo;Even when we get lost, there&apos;s always a path back home&rdquo; 💕
                            </p>
                        </div>
                    </div>
                </div>

                {/* Quick links */}
                <div className={`mt-10 flex flex-wrap justify-center gap-4 transition-all duration-700 delay-300 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <Link
                        href="/chat"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50 text-sm text-foreground-muted hover:text-primary hover:border-primary/50 transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                        </svg>
                        Chat
                    </Link>
                    <Link
                        href="/comfort"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50 text-sm text-foreground-muted hover:text-secondary hover:border-secondary/50 transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                        Comfort Zone
                    </Link>
                    <Link
                        href="/sounds"
                        className="flex items-center gap-2 px-4 py-2 rounded-xl bg-surface/50 backdrop-blur-sm border border-border/50 text-sm text-foreground-muted hover:text-accent hover:border-accent/50 transition-all duration-300"
                    >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                        </svg>
                        Calm Sounds
                    </Link>
                </div>
            </div>
        </div>
    );
}
