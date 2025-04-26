import { useState, useEffect } from 'react';
import { Wifi, Heart, GraduationCap, Shield, Leaf, Lightbulb, ArrowRight, Clock, X } from 'lucide-react';

interface Track {
  icon: JSX.Element;
  title: string;
  description: string;
  color: string;
  problems: string[];
}

const Tracks = () => {
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [timeLeft, setTimeLeft] = useState<{
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
  }>({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [countdownEnded, setCountdownEnded] = useState(false);
  const [showProblems, setShowProblems] = useState(false);
  const [selectedTrack, setSelectedTrack] = useState<number | null>(null);

  const toggleFlip = (index: number) => {
    if (flippedCards.includes(index)) {
      setFlippedCards(flippedCards.filter(i => i !== index));
    } else {
      setFlippedCards([...flippedCards, index]);
    }
  };

  // Calculate time until problem statements reveal
  useEffect(() => {
    const targetDate = new Date('April 26, 2025 13:20:00').getTime();
    
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      } else {
        setCountdownEnded(true);
      }
    };
    
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const handleShowProblems = () => {
    setShowProblems(true);
  };

  const handleCloseProblems = () => {
    setShowProblems(false);
    setSelectedTrack(null);
  };

  const showTrackProblems = (index: number) => {
    setSelectedTrack(index);
  };

  const tracks: Track[] = [
    {
      icon: <Wifi className="h-6 w-6" />,
      title: "IoT",
      description: "Build innovative Internet of Things applications that connect devices and systems. Create smart solutions for homes, cities, or industrial applications.",
      color: "#FF5E78",
      problems: [
        "Problem Statement I1: Develop a solution regarding this issue: Manual streetlight management leads to energy waste. Create an IoT system to automate brightness based on motion/ambient light.",
        "Problem Statement I2: Develop a solution regarding this issue: Noisy industrial zones lack real-time noise pollution tracking. Build a low-cost IoT device to map noise levels and alert authorities.",
        "Problem Statement I3: Develop a solution regarding this issue: Public trash bins often overflow. Design a smart bin network that alerts waste collectors when bins are 80% full."
      ]
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Healthcare",
      description: "Develop medical and healthcare-related solutions that improve patient care, streamline clinical workflows, or address public health challenges.",
      color: "#6E3CBC",
      problems: [
        "Problem Statement H1: Develop a solution regarding this issue: Patients forget medication schedules. Create a voice/chat-based reminder system with escalation alerts to family members.",
        "Problem Statement H2: Develop a solution regarding this issue: No centralized platform for blood donors. Develop an app matching donors with nearby hospitals/patients during emergencies.",
        "Problem Statement H3: Develop a solution regarding this issue: One-size-fits-all diets and fitness plans are ineffective for most people. Solution Idea: Build a system that uses user data (age, weight, allergies, diseases, goals) to recommend customized plans."
      ]
    },
    {
      icon: <GraduationCap className="h-6 w-6" />,
      title: "Education",
      description: "Create educational tools and learning platforms that enhance accessibility to knowledge, improve learning outcomes, or revolutionize teaching methods.",
      color: "#3ABEFF",
      problems: [
        "Problem Statement E1: Develop a solution regarding this issue: Teachers spend excessive time manually creating quizzes tailored to specific topics, difficulty levels, and learning objectives. Develop an AI-powered quiz generator that lets educators input a topic (e.g., \"Photosynthesis\"), select the number of questions, choose a difficulty level (easy/medium/hard), and instantly generate relevant questions with answer keys.",
        "Problem Statement E2: Develop a solution regarding this issue: Language barriers hinder learning. Create a tool that converts textbooks into bite-sized audio lessons in regional languages.",
        "Problem Statement E3: Develop a solution regarding this issue: Develop a digital permission management system to eliminate colleges' paper-based approval processes by automating lecture hall bookings, event requests, and multi-department sign-offs through a centralized online platform with real-time tracking."
      ]
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Women's Safety",
      description: "Design safety solutions and applications specifically for women, addressing personal security concerns, emergency response, or community support networks.",
      color: "#26C485",
      problems: [
        "Problem Statement W1: In rural areas, women often struggle to access emergency help due to poor network coverage and isolation. This makes it difficult for them to alert family members or authorities during emergencies. A reliable solution is needed that enables women to send discreet distress signals via basic SMS, even without internet access, ensuring they can receive timely help in critical situations.",
        "Problem Statement W2: Develop a solution regarding this issue: Safe public toilets are hard to find. Build a crowdsourced map showing cleanliness, lighting, and availability of facilities.",
        "Problem Statement W3: Develop a solution regarding this issue: Cumbersome harassment reporting and fear of retaliation by creating an anonymous platform for users to securely report incidents, tag locations, and generate real-time heatmaps to inform policy interventions"
      ]
    },
    {
      icon: <Leaf className="h-6 w-6" />,
      title: "Agriculture",
      description: "Build farming and agribusiness technology innovations that improve crop yields, optimize resource usage, or create sustainable agricultural practices.",
      color: "#F2B705",
      problems: [
        "Problem Statement A1: Many farmers face crop loss because they don't know the right time to harvest. Without proper tools, they rely on guesswork, which leads to delays and waste. There is a need for a smart system that uses weather data and phone photos to predict crop ripeness and guide timely harvesting.",
        "Problem Statement A2: Many farmers struggle to know which pests are damaging their crops, so they use strong chemicals that can be harmful. Without proper guidance, this leads to poor crop health and low yield. A solution is needed to help farmers quickly identify pests and use natural, safe methods to control them.",
        "Problem Statement A3: Small farmers usually get only a small part of the final price of their crops because too many middlemen take a share. The supply chain is unclear, so farmers don't know how prices are set, and buyers don't know where their food comes from. People buying food can't easily check if it's fresh, good quality, or grown in a fair way. As a result, farmers in villages don't earn enough and can't sell their produce directly to the market."
      ]
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Open Innovation",
      description: "Showcase your creativity with projects that don't fit traditional categories. Surprise us with novel solutions to unique problems or entirely new concepts.",
      color: "#E85D75",
      problems: [
        "The Open Innovation section allows participants to create projects that solve real-life problems they care about. It gives students the chance to show their creativity and problem-solving skills with their own ideas. If someone has worked on a similar project before, they can still participate by improving or adding new features. Projects will be judged based on how well they work, how creative they are, and the impact they can make. The goal is to give everyone a fair chance to share their ideas and make a difference."
      ]
    }
  ];

  return (
    <section id="tracks" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Competition <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Themes</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Choose your innovation path. Our hackathon features six exciting themes, 
            each exploring different domains of technology and problem-solving.
            <span className="block mt-2 text-sm italic">Click on any card to see details</span>
          </p>
          
          {/* Problem Statement Timer or Button */}
          <div className="mt-8 bg-[#0B0F3B]/60 border border-[#6E3CBC]/30 rounded-lg p-6 max-w-2xl mx-auto">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Clock className="h-5 w-5 text-[#FF5E78]" />
              <h3 className="text-xl font-bold">
                {countdownEnded ? "Problem Statements Now Available!" : "Problem Statements Reveal Countdown"}
              </h3>
            </div>
            
            {countdownEnded ? (
              <div className="flex flex-col items-center">
                <p className="text-gray-300 mb-4">
                  Specific problem statements for each theme are now available.
                </p>
                <button 
                  onClick={handleShowProblems}
                  className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] hover:from-[#FF7B90] hover:to-[#8153D0] text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  View Problem Statements
                </button>
              </div>
            ) : (
              <>
                <p className="text-gray-300 mb-4">
                  Only themes are revealed yet. Specific problem statements will go live at 6:00 PM on April 26, 2025.
                </p>
                <div className="grid grid-cols-4 gap-2 max-w-md mx-auto">
                  <div className="bg-[#0B0F3B] border border-[#6E3CBC]/50 rounded p-2">
                    <div className="text-2xl font-bold text-[#FF5E78]">{timeLeft.days}</div>
                    <div className="text-xs text-gray-400">Days</div>
                  </div>
                  <div className="bg-[#0B0F3B] border border-[#6E3CBC]/50 rounded p-2">
                    <div className="text-2xl font-bold text-[#FF5E78]">{timeLeft.hours}</div>
                    <div className="text-xs text-gray-400">Hours</div>
                  </div>
                  <div className="bg-[#0B0F3B] border border-[#6E3CBC]/50 rounded p-2">
                    <div className="text-2xl font-bold text-[#FF5E78]">{timeLeft.minutes}</div>
                    <div className="text-xs text-gray-400">Minutes</div>
                  </div>
                  <div className="bg-[#0B0F3B] border border-[#6E3CBC]/50 rounded p-2">
                    <div className="text-2xl font-bold text-[#FF5E78]">{timeLeft.seconds}</div>
                    <div className="text-xs text-gray-400">Seconds</div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {tracks.map((track, index) => (
            <div key={index} className="h-64" style={{ perspective: "1000px" }}>
              <div 
                className="relative w-full h-full cursor-pointer transition-all duration-700"
                style={{ 
                  transformStyle: "preserve-3d",
                  transform: flippedCards.includes(index) ? "rotateY(180deg)" : "rotateY(0deg)"
                }}
                onClick={() => toggleFlip(index)}
              >
                {/* Front of card */}
                <div 
                  className="absolute w-full h-full p-6 rounded-lg border bg-[#0B0F3B]/40 border-[#6E3CBC]/30 flex flex-col items-center justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <div 
                    className="p-3 rounded-full inline-flex mb-4"
                    style={{ backgroundColor: "#0B0F3B", color: track.color }}
                  >
                    {track.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-center mb-2">{track.title}</h3>
                  <p className="text-sm text-gray-400 text-center">Click to see details</p>
                </div>
                
                {/* Back of card */}
                <div 
                  className="absolute w-full h-full p-6 rounded-lg flex flex-col"
                  style={{ 
                    backfaceVisibility: "hidden",
                    transform: "rotateY(180deg)",
                    backgroundColor: "#0B0F3B", 
                    borderColor: track.color,
                    borderWidth: "2px"
                  }}
                >
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: track.color }}
                  >{track.title}</h3>
                  <p className="text-gray-300 flex-grow">{track.description}</p>
                  <div className="mt-4 flex justify-end items-center">
                    <div 
                      className="p-2 rounded-full cursor-pointer"
                      style={{ backgroundColor: track.color }}
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleFlip(index);
                      }}
                    >
                      <ArrowRight className="h-4 w-4 text-white" style={{ transform: "rotate(180deg)" }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Problem Statements Modal */}
      {showProblems && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="bg-[#0B0F3B] border border-[#6E3CBC]/50 rounded-lg max-w-4xl w-full max-h-[90vh] flex flex-col">
            <div className="p-4 border-b border-[#6E3CBC]/30 flex justify-between items-center sticky top-0 bg-[#0B0F3B] z-10">
              <h2 className="text-2xl font-bold">Problem Statements</h2>
              <button 
                onClick={handleCloseProblems}
                className="p-2 rounded-full hover:bg-[#6E3CBC]/20"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
            
            <div className="flex flex-col md:flex-row h-full overflow-hidden">
              {/* Track Selector */}
              <div className="md:w-1/3 border-r border-[#6E3CBC]/30 p-4 overflow-y-auto">
                <h3 className="text-lg font-semibold mb-4">Themes</h3>
                <div className="space-y-2">
                  {tracks.map((track, index) => (
                    <div 
                      key={index}
                      className={`p-3 rounded-lg cursor-pointer transition-all duration-200 flex items-center gap-3 ${selectedTrack === index ? 'bg-[#6E3CBC]/30 border border-[#6E3CBC]/50' : 'hover:bg-[#6E3CBC]/10'}`}
                      onClick={() => showTrackProblems(index)}
                    >
                      <div 
                        className="p-2 rounded-full"
                        style={{ backgroundColor: track.color + "20", color: track.color }}
                      >
                        {track.icon}
                      </div>
                      <span className="font-medium">{track.title}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Problem Display */}
              <div className="md:w-2/3 p-6 overflow-y-auto">
                {selectedTrack !== null ? (
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div 
                        className="p-3 rounded-full"
                        style={{ backgroundColor: tracks[selectedTrack].color + "20", color: tracks[selectedTrack].color }}
                      >
                        {tracks[selectedTrack].icon}
                      </div>
                      <h3 className="text-2xl font-bold">{tracks[selectedTrack].title}</h3>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{tracks[selectedTrack].description}</p>
                    
                    <h4 className="text-xl font-semibold mb-4">Problem Statements:</h4>
                    <ul className="space-y-4">
                      {tracks[selectedTrack].problems.map((problem, idx) => (
                        <li key={idx} className="bg-[#0B0F3B]/60 border border-[#6E3CBC]/30 p-4 rounded-lg">
                          <div className="flex items-start gap-3">
                            <div 
                              className="flex items-center justify-center rounded-full h-6 w-6 mt-1 flex-shrink-0 font-bold text-sm"
                              style={{ backgroundColor: tracks[selectedTrack].color }}
                            >
                              {idx + 1}
                            </div>
                            <p>{problem}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : (
                  <div className="h-full flex flex-col items-center justify-center text-center p-6">
                    <Lightbulb className="h-16 w-16 text-[#FF5E78] mb-4 opacity-60" />
                    <h3 className="text-xl font-bold mb-2">Select a Theme</h3>
                    <p className="text-gray-400">Choose a theme from the left panel to view its problem statements.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Tracks;
