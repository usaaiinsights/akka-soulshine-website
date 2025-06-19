
import WelcomeSection from '@/components/WelcomeSection';
import LetterSection from '@/components/LetterSection';
import AffirmationsSection from '@/components/AffirmationsSection';
import HiddenSurprise from '@/components/HiddenSurprise';
import FloatingHearts from '@/components/FloatingHearts';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-peach-100 relative overflow-hidden">
      <FloatingHearts />
      <div className="relative z-10">
        <WelcomeSection />
        <LetterSection />
        <AffirmationsSection />
        <HiddenSurprise />
        
        {/* Final Section */}
        <div className="text-center py-16 px-6">
          <p className="text-lg text-gray-700 mb-4 font-light italic">
            "Real bonds don't need blood. They just need love."
          </p>
          <p className="text-purple-600 font-medium">
            From your little brother with all his heart 💖
          </p>
          <p className="text-sm text-gray-500 mt-2">
            With endless love and warm hugs
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
