import PSB from '../assets/PSB.png';
import VRsir from '../assets/VRsir.png';
import DKVsir from '../assets/DKVsir.png';
import NVGsir from '../assets/NVGsir.png';
import ShekharSir from '../assets/ShekharSir.png';

const Judges = () => {
  const judges = [
    {
      name: "Dr. Parth Sarthy Banarjee",
      title: "Judge",
      image: PSB
    },
    {
      name: "Dr. Vikas Raghuvanshi",
      title: "Judge",
      image: VRsir
    },
    {
      name: "Dr. Dinesh Kumar Verma",
      title: "Judge",
      image: DKVsir
    },
    {
      name: "Mr. Navaljeet Singh",
      title: "Judge",
      image: NVGsir
    },
    {
      name: "Dr. Shekhar Singh",
      title: "Judge",
      image: ShekharSir
    }
  ];

  return (
    <section id="judges" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Judges</span>
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Distinguished experts from the fields of technology, space research, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {judges.map((judge, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 lg:w-48 lg:h-48 rounded-full overflow-hidden mb-4 border-4 border-[#6E3CBC] p-1">
                <img
                  src={judge.image}
                  alt={judge.name}
                  className="w-full h-full object-cover rounded-full transition-transform hover:scale-110"
                />
              </div>
              <h3 className="text-base sm:text-lg md:text-xl font-bold text-center mb-1 md:mb-2">{judge.name}</h3>
              <p className="text-[#FF5E78] text-sm md:text-base text-center">{judge.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Judges;
