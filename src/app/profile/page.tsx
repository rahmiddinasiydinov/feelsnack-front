import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Profile - FeelSnack',
    description: 'Manage your FeelSnack profile and track your wellness journey.',
};

export default function ProfilePage() {
    return (
        <ComingSoon
            title="Your Profile"
            description="Your personal wellness dashboard is in development. Track your emotional journey, celebrate milestones, view your activity history, and personalize your healing companion experience."
            gradientFrom="from-secondary"
            gradientTo="to-accent"
            icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            }
        />
    );
}
