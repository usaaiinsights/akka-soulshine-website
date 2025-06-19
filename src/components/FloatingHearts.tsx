
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  const hearts = Array.from({ length: 8 }, (_, i) => i);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {hearts.map((heart) => (
        <div
          key={heart}
          className="absolute animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${8 + Math.random() * 4}s`,
          }}
        >
          <Heart 
            className="w-4 h-4 text-pink-300/40" 
            style={{
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        </div>
      ))}
    </div>
  );
};

export default FloatingHearts;
