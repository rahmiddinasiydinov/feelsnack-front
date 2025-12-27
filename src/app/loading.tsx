'use client';

export default function Loading() {
    return (
        <div className="min-h-screen relative overflow-hidden flex items-center justify-center">
            {/* Animated background */}
            <div className="absolute inset-0 bg-gradient-to-b from-primary-light/30 via-background to-background" />

            {/* Floating decorative orbs */}
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-40 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '0.75s' }} />

            {/* Loading content */}
            <div className="relative flex flex-col items-center">
                {/* Animated heart loader */}
                <div className="relative mb-8">
                    {/* Outer pulsing ring */}
                    <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-primary/20 animate-ping" style={{ animationDuration: '1.5s' }} />

                    {/* Middle rotating ring */}
                    <div className="absolute inset-0 w-24 h-24 rounded-full border-4 border-transparent border-t-primary border-r-accent animate-spin" style={{ animationDuration: '1s' }} />

                    {/* Inner heart container */}
                    <div className="w-24 h-24 rounded-full bg-surface/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
                        <svg
                            className="w-10 h-10 text-primary animate-pulse"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            style={{ animationDuration: '1s' }}
                        >
                            <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                        </svg>
                    </div>
                </div>

                {/* Brand text */}
                <h2 className="text-2xl font-bold bg-gradient-to-r from-primary via-accent to-secondary bg-clip-text text-transparent mb-3">
                    FeelSnack
                </h2>

                {/* Loading text with animated dots */}
                <div className="flex items-center gap-1 text-foreground-muted">
                    <span>Preparing your cozy space</span>
                    <span className="flex gap-1">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                        <span className="w-1.5 h-1.5 bg-accent rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                </div>

                {/* Subtle affirmation */}
                <p className="mt-6 text-sm text-foreground-muted/60 italic">
                    &ldquo;Good things take a moment...&rdquo;
                </p>
            </div>
        </div>
    );
}
