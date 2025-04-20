import { Award, Medal, Trophy, Gift } from 'lucide-react';

const Prizes = () => {
  const mainPrizes = [
    {
      icon: <Trophy className="h-12 w-12 text-yellow-400" />,
      title: "1st Place",
      amount: "Rs. 3000",
      benefits: [
        "Cash prize",
        "Goodies and swags",
        "Featured on our partners' platforms"
      ],
      color: "from-yellow-400 to-orange-500"
    },
    {
      icon: <Medal className="h-12 w-12 text-gray-300" />,
      title: "2nd Place",
      amount: "Rs. 2,000",
      benefits: [
        "Cash prize",
        "Goodies and Swags",
        "Seminars Access",
      ],
      color: "from-gray-300 to-gray-500"
    },
    {
      icon: <Medal className="h-12 w-12 text-amber-700" />,
      title: "3rd Place",
      amount: "Rs. 1000",
      benefits: [
        "Cash prize",
        "Goodies and swags",
        "Social media highlight",
      ],
      color: "from-amber-700 to-amber-900"
    }
  ];

  return (
    <section id="prizes" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stellar <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Prizes</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Reach for the stars and win big. Our prize pool recognizes outstanding projects across 
            multiple categories with cash rewards and amazing opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainPrizes.map((prize, index) => (
            <div 
              key={index}
              className="bg-[#0B0F3B]/60 backdrop-blur-sm rounded-lg border border-[#6E3CBC]/30 overflow-hidden transition-transform hover:transform hover:scale-105 hover:shadow-xl group"
            >
              <div className={`h-2 w-full bg-gradient-to-r ${prize.color}`}></div>
              <div className="p-8">
                <div className="flex justify-center mb-6">
                  {prize.icon}
                </div>
                <h3 className="text-2xl font-bold text-center mb-2">{prize.title}</h3>
                <p className={`text-3xl font-bold text-center mb-6 bg-gradient-to-r ${prize.color} text-transparent bg-clip-text`}>
                  {prize.amount}
                </p>
                <ul className="space-y-2">
                  {prize.benefits.map((benefit, i) => (
                    <li key={i} className="flex items-start">
                      <div className="flex-shrink-0 h-5 w-5 rounded-full bg-[#6E3CBC]/30 flex items-center justify-center mt-0.5 mr-3">
                        <span className="h-2 w-2 rounded-full bg-[#FF5E78]"></span>
                      </div>
                      <span className="text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-[#0B0F3B]/60 backdrop-blur-sm rounded-lg p-8 border border-[#6E3CBC]/30">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
              <Gift className="h-6 w-6 mr-2 text-purple-400" />
              Top 5 Teams
            </h3>
            
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">
                All top 5 teams (including 1st, 2nd, and 3rd place winners) will receive:
              </p>
              <div className="bg-[#0B0F3B] p-6 rounded-lg border border-[#6E3CBC]/30 transition-transform hover:transform hover:scale-105">
                <h4 className="text-lg font-bold mb-2">Premium Goodies Package</h4>
                <p className="text-sm text-gray-400">
                  Exclusive tech gadgets, premium swag items, and special recognition from our sponsors
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#0B0F3B]/60 backdrop-blur-sm rounded-lg p-8 border border-[#6E3CBC]/30">
            <h3 className="text-2xl font-bold mb-6 flex items-center justify-center">
              <Award className="h-6 w-6 mr-2 text-[#FF5E78]" />
              For All Participants
            </h3>
            
            <div className="text-center">
              <p className="text-lg text-gray-300 mb-4">
                Every participant will receive:
              </p>
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="bg-[#0B0F3B] p-6 rounded-lg border border-[#6E3CBC]/30 transition-transform hover:transform hover:scale-105">
                  <h4 className="text-lg font-bold mb-2">Exclusive Swags</h4>
                  <p className="text-sm text-gray-400">
                    T-shirts, stickers, and other cool merchandise from our sponsors
                  </p>
                </div>
                <div className="bg-[#0B0F3B] p-6 rounded-lg border border-[#6E3CBC]/30 transition-transform hover:transform hover:scale-105">
                  <h4 className="text-lg font-bold mb-2">Certificate of Participation</h4>
                  <p className="text-sm text-gray-400">
                    Digital certificate recognizing your achievement and participation
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Prizes;
