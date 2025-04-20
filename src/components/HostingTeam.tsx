import { useState } from 'react';
import ShashwatShukla from '../assets/ShaswatShukla.jpeg';
import AryanJaiswal from '../assets/AryanJaiswal.jpg';
import AvinashSharma from '../assets/AvinashSharma.jpg';
import SatyamKumar from '../assets/SatyamKumar.jpeg';

// Define TypeScript interfaces
interface TeamMemberType {
  name: string;
  role: string;
  image: string;
}

interface TeamMemberProps {
  member: TeamMemberType;
}

const HostingTeam = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);
  
  const teamMembers: TeamMemberType[] = [
    {
      name: "Shashwat Shukla",
      role: "Lead Organiser",
      image: ShashwatShukla
    },
    {
      name: "Aryan Jaiswal",
      role: "Lead Organiser",
      image: AryanJaiswal
    },
    {
      name: "Avinash Sharma",
      role: "Technical Lead",
      image: AvinashSharma
    },
    {
      name: "Satyam Kumar",
      role: "Technical Lead",
      image: SatyamKumar
    }
  ];

  const TeamMember = ({ member }: TeamMemberProps) => {
    const isHovered = hoveredMember === member.name;
    
    return (
      <div 
        className="flex flex-col items-center mb-12"
        onMouseEnter={() => setHoveredMember(member.name)}
        onMouseLeave={() => setHoveredMember(null)}
      >
        <div 
          className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full overflow-hidden mb-6 border-4 p-2"
          style={{
            borderImage: 'linear-gradient(to right, #FF5E78, #6E3CBC) 1',
            transition: 'transform 0.3s ease'
          }}
        >
          <img
            src={member.image}
            alt={member.name}
            className={`w-full h-full object-cover rounded-full transition-transform duration-300 ${isHovered ? 'scale-110' : ''}`}
          />
        </div>
        <h3 className="text-2xl md:text-3xl font-bold text-center mb-2">{member.name}</h3>
        <p className="text-[#FF5E78] text-lg md:text-xl text-center">{member.role}</p>
      </div>
    );
  };

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Hosting <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated team making Hacktrøn possible.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HostingTeam;
