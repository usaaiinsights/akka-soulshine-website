
import { useState } from 'react';
import { Heart, Gift, Star } from 'lucide-react';

const HiddenSurprise = () => {
  const [isRevealed, setIsRevealed] = useState(false);

  return (
    <div className="py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        {!isRevealed ? (
          <div className="space-y-8">
            <p className="text-gray-600 font-light text-lg">
              There's something special waiting for you...
            </p>
            
            <button
              onClick={() => setIsRevealed(true)}
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full animate-pulse opacity-30"></div>
              <Heart className="relative w-16 h-16 text-pink-500 hover:text-pink-600 transition-all duration-300 hover:scale-125 group-hover:animate-bounce" />
            </button>
            
            <p className="text-sm text-gray-500 font-light">
              Click the heart to reveal your surprise
            </p>
          </div>
        ) : (
          <div className="animate-fade-in space-y-8">
            <div className="flex justify-center space-x-2 mb-6">
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
              <Gift className="w-8 h-8 text-purple-500" />
              <Star className="w-6 h-6 text-yellow-400 animate-pulse" />
            </div>
            
            <div className="bg-gradient-to-br from-pink-100/80 to-purple-100/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/40">
              <h3 className="text-2xl md:text-3xl font-light text-gray-800 mb-6">
                A Special Message Just for You
              </h3>
              
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  This world is lucky to have a soul like you in it. You shine in ways you don't even realize, 
                  touching lives with your gentle heart and beautiful spirit.
                </p>
                
                <p>
                  Every time you doubt yourself, remember this moment. Remember that someone believes in you 
                  so deeply that they built you a little corner of the internet filled with love.
                </p>
                
                <p className="text-purple-600 font-medium">
                  You are a masterpiece, Darshini Akka. Never forget that. ✨
                </p>
              </div>
              
              <div className="mt-8 flex justify-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-4 h-4 text-pink-400 animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HiddenSurprise;
