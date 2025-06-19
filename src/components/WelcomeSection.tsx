
import { Heart } from 'lucide-react';

const WelcomeSection = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center relative">
      <div className="max-w-4xl animate-fade-in">
        <div className="mb-8">
          <Heart className="w-12 h-12 text-pink-400 mx-auto mb-6 animate-pulse" />
        </div>
        
        <h1 className="text-4xl md:text-6xl font-light text-gray-800 mb-8 leading-tight">
          You are my sunshine on silent days,
          <span className="block text-purple-600 font-medium mt-2">
            Darshini Akka 🌸
          </span>
        </h1>
        
        <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
          <p className="text-xl md:text-2xl text-gray-700 font-light italic">
            "Not born as siblings, but bonded by fate."
          </p>
        </div>
        
        <div className="mt-12">
          <div className="inline-block animate-bounce">
            <Heart className="w-6 h-6 text-pink-500" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeSection;
