
import { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';

const AffirmationsSection = () => {
  const [currentAffirmation, setCurrentAffirmation] = useState(0);
  const [showAffirmation, setShowAffirmation] = useState(false);

  const affirmations = [
    "You're stronger than you think",
    "Your smile heals people, never forget that",
    "Loved. Protected. Seen. That's you.",
    "You bring magic to ordinary days",
    "Your heart is a treasure to this world",
    "You are exactly where you need to be",
    "Your kindness creates ripples of joy",
    "You are worthy of all beautiful things",
    "Your presence is a gift to everyone around you",
    "You carry starlight in your soul",
    "You are braver than you believe",
    "Your story matters and so do you",
    "The world is brighter because you're in it",
    "Your dreams are valid and achievable",
    "You have the power to overcome anything",
    "Your laughter is music to the universe",
    "You are a masterpiece in progress",
    "Your compassion changes lives",
    "You deserve all the happiness in the world",
    "Your strength inspires others without you knowing",
    "You are a rare and beautiful soul",
    "Your love makes everything better",
    "You have unlimited potential within you",
    "Your journey is unique and meaningful",
    "You are enough, just as you are",
    "Your light shines even in dark moments",
    "You are a blessing to those who know you",
    "Your wisdom grows with every experience",
    "You have the courage to face anything",
    "Your gentleness is a superpower",
    "You are destined for beautiful things",
    "Your faith moves mountains",
    "You spread joy wherever you go",
    "Your soul radiates pure love",
    "You are a miracle walking this earth",
    "Your purpose will unfold perfectly",
    "You are cherished beyond measure",
    "Your peace is contagious to others",
    "You have the strength of a thousand warriors",
    "Your grace touches every life you meet"
  ];

  const handleTapForSmile = () => {
    setShowAffirmation(true);
    setCurrentAffirmation((prev) => (prev + 1) % affirmations.length);
    
    setTimeout(() => {
      setShowAffirmation(false);
    }, 4000);
  };

  return (
    <div className="py-20 px-6 bg-gradient-to-r from-pink-50/30 to-purple-50/30">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <Sparkles className="w-10 h-10 text-pink-500 mx-auto mb-4" />
          <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-4">
            Tap for a Smile
          </h2>
          <p className="text-gray-600 font-light">
            Whenever you need a gentle reminder of how wonderful you are
          </p>
        </div>
        
        <div className="mb-12">
          <button
            onClick={handleTapForSmile}
            className="group bg-gradient-to-r from-pink-200 to-purple-200 hover:from-pink-300 hover:to-purple-300 text-gray-800 px-12 py-6 rounded-full text-xl font-medium transition-all duration-300 hover:scale-110 hover:shadow-xl border-2 border-white/50"
          >
            <div className="flex items-center gap-3">
              <Heart className="w-6 h-6 group-hover:animate-pulse" />
              Tap me for love
              <Heart className="w-6 h-6 group-hover:animate-pulse" />
            </div>
          </button>
        </div>
        
        {showAffirmation && (
          <div className="animate-fade-in">
            <div className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/40">
              <Heart className="w-8 h-8 text-pink-500 mx-auto mb-4 animate-pulse" />
              <p className="text-2xl md:text-3xl text-gray-800 font-light leading-relaxed">
                "{affirmations[currentAffirmation]}"
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AffirmationsSection;
