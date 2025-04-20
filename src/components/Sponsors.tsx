const Sponsors = () => {
  const tierSponsors = [
    {
      tier: "Galactic Partners",
      sponsors: [
        { name: "Cosmic Industries", logo: "https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Orbital Technologies", logo: "https://images.pexels.com/photos/23769/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600" }
      ]
    },
    {
      tier: "Stellar Supporters",
      sponsors: [
        { name: "Nebula Systems", logo: "https://images.pexels.com/photos/256301/pexels-photo-256301.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Astro Corp", logo: "https://images.pexels.com/photos/1269555/pexels-photo-1269555.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Lunar Innovations", logo: "https://images.pexels.com/photos/1008155/pexels-photo-1008155.jpeg?auto=compress&cs=tinysrgb&w=600" }
      ]
    },
    {
      tier: "Cosmic Contributors",
      sponsors: [
        { name: "Space Solutions", logo: "https://images.pexels.com/photos/12913198/pexels-photo-12913198.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Star Systems", logo: "https://images.pexels.com/photos/5875866/pexels-photo-5875866.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Meteor Media", logo: "https://images.pexels.com/photos/5386754/pexels-photo-5386754.jpeg?auto=compress&cs=tinysrgb&w=600" },
        { name: "Galaxy Games", logo: "https://images.pexels.com/photos/9669221/pexels-photo-9669221.jpeg?auto=compress&cs=tinysrgb&w=600" }
      ]
    }
  ];

  return (
    <section id="sponsors" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Sponsors</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Hacktrøn is made possible by the generous support of our sponsors from across the galaxy.
          </p>
        </div>
        
        <div className="space-y-16">
          {tierSponsors.map((tier, index) => (
            <div key={index} className="space-y-8">
              <h3 className="text-2xl font-bold text-center">
                <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">
                  {tier.tier}
                </span>
              </h3>
              
              <div 
                className={`grid gap-8 ${
                  tier.tier === "Galactic Partners" 
                    ? 'md:grid-cols-2' 
                    : tier.tier === "Stellar Supporters" 
                      ? 'md:grid-cols-3' 
                      : 'sm:grid-cols-2 md:grid-cols-4'
                }`}
              >
                {tier.sponsors.map((sponsor, idx) => (
                  <div 
                    key={idx} 
                    className="bg-[#0B0F3B]/60 backdrop-blur-sm rounded-lg p-4 flex flex-col items-center transition-transform hover:transform hover:scale-105 border border-[#6E3CBC]/30"
                  >
                    <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                      <img 
                        src={sponsor.logo} 
                        alt={sponsor.name} 
                        className="w-full h-full object-cover transition-transform hover:transform hover:scale-110" 
                      />
                    </div>
                    <h4 className="text-lg font-medium">{sponsor.name}</h4>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold mb-6">Become a Sponsor</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join our mission to support innovation in space technology. 
            Contact us to learn about our sponsorship packages and benefits.
          </p>
          <a 
            href="#contact" 
            className="px-6 py-3 rounded-full bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-white font-medium inline-block transition-transform hover:scale-105"
          >
            Contact for Sponsorship
          </a>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;