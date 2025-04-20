import { useState, useEffect, useRef } from 'react';

interface ScheduleEvent {
  day: string;
  time: string;
  title: string;
  description?: string;
  highlight?: boolean;
  planetColor?: string;
}

type PlanetSize = 'sm' | 'md' | 'lg' | 'xl';

const Schedule = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState('Saturday');
  const scheduleRef = useRef<HTMLElement>(null);

  const scheduleEvents: ScheduleEvent[] = [
    // Saturday
    {
      day: "Saturday",
      time: "1:00 PM - 1:30 PM",
      title: "Inauguration by VC sir",
      description: "Official opening of the hackathon",
      highlight: true,
      planetColor: "#ADD8E6" // Light blue
    },
    {
      day: "Saturday",
      time: "1:30 PM onwards",
      title: "Problem Statement Open",
      description: "Hackathon challenges are revealed",
      planetColor: "#87CEFA" // Light sky blue
    },
    
    // Sunday
    {
      day: "Sunday",
      time: "8:00 AM - 9:00 AM",
      title: "Checking time",
      description: "Participant check-in",
      planetColor: "#FFB347" // Orange
    },
    {
      day: "Sunday",
      time: "9:00 AM - 9:30 AM",
      title: "Room and seat Allocation",
      description: "Get your designated workspace",
      planetColor: "#90EE90" // Light green
    },
    {
      day: "Sunday",
      time: "9:30 AM - 1:00 PM",
      title: "hacking time + TON society Webinar",
      description: "Coding session with special webinar",
      highlight: true,
      planetColor: "#6E3CBC" // Purple
    },
    {
      day: "Sunday",
      time: "1:00 PM - 2:15 PM",
      title: "Lunch Time",
      description: "Networking and recharge",
      planetColor: "#FFA07A" // Light salmon
    },
    {
      day: "Sunday",
      time: "2:30 PM - 5:00 PM",
      title: "hacking time",
      description: "Continue working on your projects",
      planetColor: "#6E3CBC" // Purple
    },
    {
      day: "Sunday",
      time: "5:00 PM - 5:30 PM",
      title: "Snack time and games",
      description: "Take a break and recharge",
      planetColor: "#DDA0DD" // Plum
    },
    {
      day: "Sunday",
      time: "5:30 PM - 6:00 PM",
      title: "Soft Submission",
      description: "Initial project submission for review",
      planetColor: "#B0C4DE" // Light steel blue
    },
    {
      day: "Sunday",
      time: "6:00 PM - 7:00 PM",
      title: "final deadline",
      description: "Last chance to submit your projects",
      highlight: true,
      planetColor: "#FF6347" // Tomato red
    },
    {
      day: "Sunday",
      time: "6:30 PM - 8:15 PM",
      title: "Judging Rounds",
      description: "Projects evaluated by our panel",
      planetColor: "#FFD700" // Gold
    },
    {
      day: "Sunday",
      time: "8:15 PM - 8:30 PM",
      title: "Closing Ceremony",
      description: "Wrap-up and announcements",
      highlight: true,
      planetColor: "#ADD8E6" // Light blue
    },

  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (scheduleRef.current) {
      observer.observe(scheduleRef.current);
    }

    return () => {
      if (scheduleRef.current) {
        observer.unobserve(scheduleRef.current);
      }
    };
  }, []);

  interface PlanetProps {
    color: string;
    size?: PlanetSize;
  }

  const Planet = ({ color, size = "lg" }: PlanetProps) => {
    const sizes: Record<PlanetSize, string> = {
      sm: "w-12 h-12",
      md: "w-16 h-16",
      lg: "w-24 h-24",
      xl: "w-32 h-32"
    };
    
    return (
      <div className={`relative ${sizes[size]}`}>
        <div 
          className="absolute inset-0 rounded-full opacity-30 blur-md"
          style={{ backgroundColor: color }}
        ></div>
        <div 
          className="absolute inset-2 rounded-full"
          style={{ backgroundColor: color }}
        >
          <div className="absolute top-2 left-2 w-1/4 h-1/4 bg-white opacity-60 rounded-full"></div>
        </div>
      </div>
    );
  };

  // Filter events by selected day
  const filteredEvents = scheduleEvents.filter(event => event.day === selectedDay);

  // CSS for custom scrollbar using regular style
  const scrollbarStyles = `
    .custom-scrollbar::-webkit-scrollbar {
      width: 6px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-track {
      background: rgba(110, 60, 188, 0.1);
      border-radius: 10px;
    }
    
    .custom-scrollbar::-webkit-scrollbar-thumb {
      background: linear-gradient(180deg, #FF5E78, #6E3CBC);
      border-radius: 10px;
    }
    
    .custom-scrollbar {
      scrollbar-width: thin;
      scrollbar-color: #6E3CBC rgba(110, 60, 188, 0.1);
    }
  `;

  return (
    <section id="schedule" className="py-20 relative" ref={scheduleRef}>
      {/* Add styles */}
      <style dangerouslySetInnerHTML={{ __html: scrollbarStyles }} />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Event <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Schedule</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Your roadmap through the cosmos. Check out our packed schedule of coding, 
            learning, and networking throughout this cosmic hackathon.
          </p>
        </div>

        {/* Day selector tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-2 bg-gray-800/50 backdrop-blur-sm rounded-lg p-1">
            {['Saturday', 'Sunday'].map((day) => (
              <button
                key={day}
                onClick={() => setSelectedDay(day)}
                className={`px-6 py-2 rounded-md transition-all ${
                  selectedDay === day 
                    ? 'bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-white font-medium'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {day}
              </button>
            ))}
          </div>
        </div>

        {/* Fixed height box with scrollable content */}
        <div className="relative mx-auto max-w-4xl">
          {/* Purple glow border */}
          <div className="absolute inset-0 rounded-lg border-2 border-purple-500 opacity-70 blur-sm"></div>
          
          {/* Content box with scrollable timeline - using transparent background */}
          <div className="relative border-2 border-purple-500 rounded-lg bg-transparent backdrop-blur-sm p-6">
            <h3 className="text-2xl font-bold mb-8 text-center text-white sticky top-0 bg-[#0B0F3B]/30 py-4 z-10 backdrop-blur-sm">
              {selectedDay}, 2025
            </h3>
            
            {/* Scrollable container */}
            <div className="h-96 overflow-y-auto pr-4 space-y-16 custom-scrollbar">
              {filteredEvents.length > 0 ? (
                filteredEvents.map((event, index) => (
                  <div 
                    key={index}
                    className={`flex items-center transition-all duration-1000 ${
                      isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                    style={{ 
                      transitionDelay: `${index * 200}ms`,
                    }}
                  >
                    {/* Left or right positioning based on index */}
                    {index % 2 === 0 ? (
                      <>
                        <div className="w-1/3 flex justify-center">
                          <Planet color={event.planetColor || "#6E3CBC"} size="md" />
                        </div>
                        <div className="w-2/3 text-white">
                          <div className="text-xl font-bold text-purple-300">{event.time}</div>
                          <h4 className={`text-2xl font-bold ${event.highlight ? 'text-[#FF5E78]' : ''}`}>{event.title}</h4>
                          {event.description && <p className="text-gray-400">{event.description}</p>}
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="w-2/3 text-white text-right">
                          <div className="text-xl font-bold text-purple-300">{event.time}</div>
                          <h4 className={`text-2xl font-bold ${event.highlight ? 'text-[#FF5E78]' : ''}`}>{event.title}</h4>
                          {event.description && <p className="text-gray-400">{event.description}</p>}
                        </div>
                        <div className="w-1/3 flex justify-center">
                          <Planet color={event.planetColor || "#6E3CBC"} size="md" />
                        </div>
                      </>
                    )}
                  </div>
                ))
              ) : (
                <div className="flex justify-center items-center h-full">
                  <p className="text-gray-400 text-xl">No events scheduled for this day</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Schedule;
