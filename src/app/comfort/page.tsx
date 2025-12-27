import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Comfort Zone - FeelSnack',
    description: 'A safe space filled with calming activities to soothe your mind and soul.',
};

export default function ComfortPage() {
    return (
        <ComingSoon
            title="Comfort Zone"
            description="Your personal sanctuary is being prepared. A cozy space filled with calming activities, gentle exercises, and soothing experiences to embrace your emotions and find inner peace."
            gradientFrom="from-secondary"
            gradientTo="to-secondary-hover"
            icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
            }
        />
    );
}
