import { useState } from 'react';
import ShashwatShukla from '../assets/ShaswatShukla.jpeg';
import AryanJaiswal from '../assets/AryanJaiswal.jpg';
import AvinashSharma from '../assets/AvinashSharma.jpg';
import SatyamKumar from '../assets/SatyamKumar.jpeg';
import JayeshSir from '../assets/Jayesh.jpeg';
import Shouray from '../assets/Shouray.jpg';
import KanchiGupta from '../assets/KanchiGupta.jpg';
import AnupamSir from '../assets/AnupamSir.jpeg';
import Ayaan from '../assets/Ayaan.jpeg';
import Soham from '../assets/SohamGhosh.jpg';
import Aaradhya from '../assets/AaradhyaWaoo.jpg';
import Ayush from '../assets/AyushPrakash.jpeg';
import Prince from '../assets/PrinceYadav.jpeg';

// Define TypeScript interfaces
interface TeamMemberType {
  name: string;
  role: string;
  image: string;
}

interface TeamSectionType {
  title: string;
  members: TeamMemberType[];
}

interface TeamMemberProps {
  member: TeamMemberType;
}

const HostingTeam = () => {
  const [hoveredMember, setHoveredMember] = useState<string | null>(null);

  const teamSections: TeamSectionType[] = [
    {
      title: "Organizers",
      members: [
        {
          name: "Shashwat Shukla",
          role: "Lead Organiser",
          image: ShashwatShukla
        },
        {
          name: "Aryan Jaiswal",
          role: "Lead Organiser",
          image: AryanJaiswal
        }
      ]
    },
    {
      title: "Technical Team",
      members: [
        {
          name: "Avinash Sharma",
          role: "Technical Lead",
          image: AvinashSharma
        },
        {
          name: "Satyam Kumar",
          role: "Technical Lead",
          image: SatyamKumar
        },
        {
          name: "Soham Ghosh",
          role: "Technical Core Member",
          image: Soham
        }
      ]
    },
    {
      title: "Management Team",
      members: [
        {
          name: "Shouray Soni",
          role: "Management Lead",
          image: Shouray
        },
        {
          name: "Jayesh Bansal",
          role: "Operations Manager",
          image: JayeshSir
        },
        {
          name: "Ayush Prakash",
          role: "Management Core Member",
          image: Ayush
        },
        {
          name: "Ayaan Khan",
          role: "Management Core Member",
          image: Ayaan
        }
      ]
    },
    {
      title: "Media Team",
      members: [
        {
          name: "Anupam Dwivedi",
          role: "Media Lead",
          image: AnupamSir
        },
        {
          name: "Prince Yadav",
          role: "Media Core Member",
          image: Prince
        },
        {
          name: "Kanchi Gupta",
          role: "Media Core Member",
          image: KanchiGupta
        },
        {
          name: "Aaradhya Waoo",
          role: "Media Core Member",
          image: Aaradhya
        }
      ]
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

  // Function to determine grid class based on section type and member count
  const getGridClass = (sectionTitle: string, membersCount: number) => {
    // Special case for Technical Team to center it
    if (sectionTitle === "Technical Team") {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 max-w-5xl mx-auto justify-items-center";
    }
    // Original logic for other teams
    if (membersCount === 2) {
      return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto";
    }
    return "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12";
  };

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            HACKTRØN <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Team</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Meet the dedicated teams making Hacktrøn possible.
          </p>
        </div>

        {teamSections.map((section, sectionIndex) => (
          <div key={sectionIndex} className="mb-20">
            <h3 className="text-3xl md:text-4xl font-bold mb-12 text-center">
              <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">
                {section.title}
              </span>
            </h3>

            <div className={getGridClass(section.title, section.members.length)}>
              {section.members.map((member, memberIndex) => (
                <TeamMember key={memberIndex} member={member} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HostingTeam;
