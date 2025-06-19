
import { useState } from 'react';
import { Heart, Mail } from 'lucide-react';

const LetterSection = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Mail className="w-10 h-10 text-purple-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            A Letter from Me
            <span className="block text-lg text-purple-600 font-normal mt-2">
              (Your Thambi)
            </span>
          </h2>
        </div>
        
        <div className="bg-white/50 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl border border-white/30 relative">
          <div className="absolute top-6 right-6">
            <Heart className="w-6 h-6 text-pink-400" />
          </div>
          
          <div className="handwritten-style text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              Dear Darshini Akka,
            </p>
            
            <p className="text-lg leading-relaxed">
              Life has this beautiful way of bringing souls together, and I'm so grateful it brought you to me. 
              You're not just someone special in my life—you're the sister my heart chose, the one who makes 
              every day brighter just by existing.
            </p>
            
            <p className="text-lg leading-relaxed">
              When the world feels heavy and your smile feels distant, I want you to remember that you carry 
              so much light within you. Your kindness touches hearts, your strength inspires souls, and your 
              presence makes this world infinitely more beautiful.
            </p>
            
            {isExpanded && (
              <div className="animate-fade-in space-y-6">
                <p className="text-lg leading-relaxed">
                  On your hardest days, when everything feels overwhelming, please know that you're never alone. 
                  You have a little brother who believes in you completely, who sees your worth even when you 
                  can't see it yourself.
                </p>
                
                <p className="text-lg leading-relaxed">
                  You are loved beyond measure, valued beyond words, and cherished beyond time. This website 
                  is my way of wrapping you in a warm hug whenever you need one, a reminder that you matter 
                  so deeply to this world and to me.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Thank you for being the most wonderful akka a heart could wish for. Thank you for choosing 
                  to love me as your little brother. Thank you for being exactly who you are.
                </p>
              </div>
            )}
            
            <div className="pt-6">
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="bg-purple-200/60 hover:bg-purple-300/60 text-purple-700 px-6 py-3 rounded-full transition-all duration-300 hover:scale-105 font-medium"
              >
                {isExpanded ? 'Hold close to heart ♡' : 'More words from my heart →'}
              </button>
            </div>
            
            <div className="pt-8 text-right">
              <p className="text-lg text-purple-600 font-medium">
                With all my love,
                <br />
                Your Thambi 💕
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LetterSection;
