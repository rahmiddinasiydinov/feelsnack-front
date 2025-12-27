import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Calm Sounds - FeelSnack',
    description: 'Immerse yourself in soothing soundscapes and peaceful melodies.',
};

export default function SoundsPage() {
    return (
        <ComingSoon
            title="Calm Sounds"
            description="Peaceful melodies are being composed just for you. Soon you'll have access to a curated library of soothing soundscapes, nature sounds, and calming music to help you relax and unwind."
            gradientFrom="from-primary"
            gradientTo="to-accent"
            icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 01-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
                </svg>
            }
        />
    );
}
