import ComingSoon from '@/components/ComingSoon';

export const metadata = {
    title: 'Chat - FeelSnack',
    description: 'Talk to an AI that truly listens and responds with warmth and understanding.',
};

export default function ChatPage() {
    return (
        <ComingSoon
            title="Compassionate AI Chat"
            description="We're crafting the most caring AI companion just for you. Soon you'll be able to talk to someone who truly listens, understands, and responds with genuine warmth and empathy."
            gradientFrom="from-primary"
            gradientTo="to-primary-hover"
            icon={
                <svg className="w-full h-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
                </svg>
            }
        />
    );
}
