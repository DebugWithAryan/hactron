import { Heart, Rocket, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const sections = [
    {
      title: "Links",
      links: [
        { name: "Home", url: "#home" },
        { name: "About", url: "#about" },
        { name: "Schedule", url: "#schedule" },
        { name: "Prizes", url: "#prizes" },
        { name: "FAQ", url: "#faq" }
      ]
    },
    
    {
      title: "Contact",
      links: [
        { name: "Email: codeconquerors7@gmail.com", url: "mailto:codeconquerors7@gmail.com" },
        { name: "Phone: +91 7267067176", url: "tel:+917267067176" },
        { name: "Address: Jaypee University of Engineering and Technology, Guna, Madhyapradesh, India", url: "#location" },
        
      ]
    }
  ];

  const socialLinks = [
    { icon: <Linkedin className="h-5 w-5" />, url: "https://www.linkedin.com/in/codeconquerors7/" },
    { icon: <Instagram className="h-5 w-5" />, url: "https://www.instagram.com/codeconquerors7/" }
  ];
  
  return (
    <footer className="bg-[#060921] pt-16 pb-8 border-t border-[#6E3CBC]/30 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <Rocket className="h-8 w-8 text-[#FF5E78] mr-2" />
              <span className="text-2xl font-bold bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">
                Hacktrøn
              </span>
            </div>
            <p className="text-gray-400 mb-6">
              Explore the coding world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <a 
                  key={index}
                  href={link.url}
                  className="p-2 rounded-full bg-[#0B0F3B] text-white/70 hover:text-white transition-colors"
                  aria-label={`Social media link ${index + 1}`}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
          
          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-bold mb-4 text-white">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, idx) => (
                  <li key={idx}>
                    <a href={link.url} className="text-gray-400 hover:text-[#FF5E78] transition-colors">
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-[#6E3CBC]/30 pt-8 mt-8 text-center text-gray-400">
          <p className="mb-4">
            &copy; {currentYear} Hacktrøn. All rights reserved.
          </p>
          <p className="flex items-center justify-center text-sm">
            Made with <Heart className="h-4 w-4 text-[#FF5E78] mx-1" /> by Code Conquerors Community
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
