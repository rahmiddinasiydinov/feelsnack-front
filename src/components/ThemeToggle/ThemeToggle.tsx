'use client';

import { useTheme } from '@/context/ThemeContext';

export default function ThemeToggle() {
    const { theme, actualTheme, setTheme } = useTheme();

    const cycleTheme = () => {
        const themes: ('light' | 'dark' | 'system')[] = ['light', 'dark', 'system'];
        const currentIndex = themes.indexOf(theme);
        const nextIndex = (currentIndex + 1) % themes.length;
        setTheme(themes[nextIndex]);
    };

    return (
        <button
            onClick={cycleTheme}
            className="relative p-2 rounded-xl bg-surface hover:bg-surface-hover border border-border transition-all duration-300 hover:scale-105 hover:shadow-md group"
            aria-label={`Current theme: ${theme}. Click to change.`}
            title={`Theme: ${theme}`}
        >
            <div className="w-5 h-5 relative">
                {/* Sun icon */}
                <svg
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${actualTheme === 'light' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 rotate-90 scale-50'
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                    />
                </svg>

                {/* Moon icon */}
                <svg
                    className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${actualTheme === 'dark' ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-50'
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                    />
                </svg>
            </div>

            {/* Theme indicator dot */}
            {theme === 'system' && (
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-primary rounded-full border-2 border-surface animate-pulse" />
            )}
        </button>
    );
}
