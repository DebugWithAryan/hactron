import { useState, useEffect } from 'react';

const CountdownTimer = () => {
  // Force the target date to be April 26, 2025 at 1:25 PM
  const targetDate = new Date(2025, 3, 26, 13, 25, 0); // Month is 0-indexed (3 = April)
  
  // For debugging
  const [debugInfo, setDebugInfo] = useState({
    targetDateString: targetDate.toString(),
    currentDateString: new Date().toString()
  });
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const [isComplete, setIsComplete] = useState(false);
  const [showParty, setShowParty] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Check if we're already past the target date
    const now = new Date();
    
    // For this demo, let's force the countdown to show since today is actually the target date
    const isPastDeadline = false; // Override the check since we want to see the countdown
    
    if (isPastDeadline) {
      setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      setIsComplete(true);
      setShowParty(true);
      
      setTimeout(() => {
        setHidden(true);
      }, 5000);
      
      return;
    }
    
    const interval = setInterval(() => {
      const currentTime = new Date();
      setDebugInfo({
        targetDateString: targetDate.toString(),
        currentDateString: currentTime.toString()
      });
      
      // Calculate time difference
      const difference = targetDate.getTime() - currentTime.getTime();
      
      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsComplete(true);
        setShowParty(true);
        
        setTimeout(() => {
          setHidden(true);
        }, 5000);
        
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    }, 1000);
    
    return () => clearInterval(interval);
  }, [targetDate]);

  const timeUnits = [
    { label: 'Days', value: timeLeft.days },
    { label: 'Hours', value: timeLeft.hours },
    { label: 'Minutes', value: timeLeft.minutes },
    { label: 'Seconds', value: timeLeft.seconds }
  ];

  if (hidden) {
    return null;
  }

  return (
    <>
      {showParty && <PartyAnimation />}
      
      <div className="min-h-screen relative overflow-hidden">
        <section className="py-16 relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                {isComplete ? "Countdown Complete!" : "Countdown to Start"}
              </h2>
              <p className="text-blue-300 text-lg">
                Target: April 26, 2025 at 1:25 PM
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 md:gap-8">
              {timeUnits.map((unit) => (
                <div 
                  key={unit.label} 
                  className="w-28 md:w-32 h-32 md:h-36 bg-indigo-900 bg-opacity-70 backdrop-blur-md rounded-lg flex flex-col justify-center items-center border border-purple-600 shadow-lg"
                >
                  <div className="text-4xl md:text-5xl font-bold text-white">
                    {unit.value.toString().padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base text-gray-300 mt-2">
                    {unit.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

// Party Animation Component
const PartyAnimation = () => {
  useEffect(() => {
    // Add keyframes animation to document
    const styleEl = document.createElement('style');
    styleEl.innerHTML = `
      @keyframes fall {
        to {
          transform: translateY(100vh) rotate(360deg);
        }
      }
    `;
    document.head.appendChild(styleEl);
    
    return () => {
      document.head.removeChild(styleEl);
    };
  }, []);

  // Create confetti particles
  const [particles] = useState(() => {
    return Array(100).fill(0).map(() => ({
      x: Math.random() * 100,
      y: Math.random() * -50,
      size: Math.random() * 8 + 2,
      color: ['bg-red-500', 'bg-blue-500', 'bg-yellow-500', 'bg-green-500', 'bg-purple-500', 'bg-pink-500'][
        Math.floor(Math.random() * 6)
      ],
      speedX: Math.random() * 6 - 3,
      speedY: Math.random() * 4 + 2,
      rotation: Math.random() * 360
    }));
  });

  return (
    <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm flex items-center justify-center">
        <div className="text-5xl md:text-7xl font-bold text-white animate-bounce">
          Hackathon Started, Let's Code
        </div>
      </div>
      
      {particles.map((particle, index) => (
        <div
          key={index}
          className={`absolute ${particle.color} rounded-full`}
          style={{
            left: `${particle.x}vw`,
            top: `${particle.y}vh`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            transform: `rotate(${particle.rotation}deg)`,
            animation: `fall 5s linear forwards`,
            animationDelay: `${Math.random() * 2}s`
          }}
        />
      ))}
    </div>
  );
};

export default CountdownTimer;
