import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Journal - FeelSnack',
    description: 'Capture your thoughts and cultivate gratitude with guided journaling.',
};

export default function JournalPage() {
    return (
        <ComingSoon
            title="Gratitude Journal"
            description="A beautiful space for your thoughts is on its way. Express your feelings, track your emotional journey, and discover gratitude through guided prompts designed to nurture your mental wellness."
            gradientFrom="from-accent"
            gradientTo="to-accent-hover"
            icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                </svg>
            }
        />
    );
}
