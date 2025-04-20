import { Rocket, Code, Users, Trophy } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Rocket className="h-6 w-6 text-[#FF5E78]" />,
      title: "Launch Your Ideas",
      description: "Transform your innovative concepts into reality through intensive coding and collaboration."
    },
    {
      icon: <Code className="h-6 w-6 text-[#FF5E78]" />,
      title: "Code in Orbit",
      description: "12-hours of uninterrupted coding to bring your ideas to life."
    },
    {
      icon: <Users className="h-6 w-6 text-[#FF5E78]" />,
      title: "Collaboration and Networking",
      description: "Connect with like-minded individuals, mentors, and industry experts to fuel your creativity and innovation."
    },
    {
      icon: <Trophy className="h-6 w-6 text-[#FF5E78]" />,
      title: "Prizes",
      description: "Win exciting prizes and recognition for your outstanding projects."
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Hacktrøn</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Hacktrøn, a premier 12-hour offline hackathon, is set to ignite innovation, creativity, and teamwork among JUET’s brilliant students. Taking place on Sunday, 27th April, at the JUET Campus, this dynamic event promises an atmosphere of intense collaboration and groundbreaking ideas. 

          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-[#0B0F3B]/60 backdrop-blur-sm p-6 rounded-lg border border-[#6E3CBC]/30 transition-transform hover:transform hover:scale-105 hover:shadow-lg group"
            >
              <div className="p-4 rounded-full bg-[#0B0F3B] inline-block mb-4 group-hover:bg-[#6E3CBC]/30 transition-all">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default About;
