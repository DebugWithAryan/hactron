
import SSS from '../assets/SSS.jpg';
import TanishBhole from '../assets/TanishBhole.jpg';
import SnehalSaurabh from '../assets/SnehalSir.jpg';
import VibhorPhalke from '../assets/VibhorPhalke.jpg';
import ShashwatSingh from '../assets/ShashwatPSingh.jpg';


const Mentors = () => {
  const mentors = [
    {
      name: "Shrijan Sahay Srivastava",
      expertise: "3x MLH Hackathon Winner",
      image: SSS
    },
    {
      name: "Tanish Bhole",
      expertise: "2x MLH Hackathon Winner",
      image: TanishBhole
    },
    {
      name: "Snehal Saurabh",
      expertise: "3x Hackathon Winner",
      image: SnehalSaurabh
    },
    {
      name: "Vibhor Phalke",
      expertise: "3x Hackathon Winner",
      image: VibhorPhalke
    },
    {
      name: "Shashwat Singh",
      expertise: "3x Hackathon Winner",
      image: ShashwatSingh
    }
  ];

  return (
    <section id="mentors" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Mentors</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Expert guidance from industry professionals to help you reach the stars.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-12">
          {mentors.map((mentor, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full overflow-hidden mb-4 border-4 border-[#FF5E78] p-1">
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover rounded-full transition-transform hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-1 md:mb-2">{mentor.name}</h3>
              <p className="text-[#6E3CBC] text-sm md:text-base text-center">{mentor.expertise}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mentors;
