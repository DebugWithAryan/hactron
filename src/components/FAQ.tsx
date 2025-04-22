import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems: FAQItem[] = [
    {
      question: "What is Hacktrøn?",
      answer: "Hacktrøn is a 12-hour hackathon organized by Code Conquerors at Jaypee University of Engineering and Technology, Guna. It's where participants collaborate to create innovative solutions. Whether you're a coder, designer, or idea person, Hacktrøn offers a platform to transform your ideas into reality."
    },
    {
      question: "When and where is Hacktrøn taking place?",
      answer: "Hacktrøn will be held on April 26-27, 2025 at Jaypee University of Engineering and Technology, Guna, Madhya Pradesh."
    },
    {
      question: "Who can participate?",
      answer: "Hacktrøn is open to any undergraduate or postgraduate student from Jaypee University of Engineering and Technology, Guna."
    },
    {
      question: "What are the eligibility criteria?",
      answer: "You must be a student enrolled in Jaypee University of Engineering and Technology, Guna."
    },
    {
      question: "Do I need coding experience?",
      answer: "While coding experience is helpful, it's not mandatory. Teams benefit from diverse skills including design, project management, domain expertise, and presentation abilities. We encourage participants of all experience levels to join."
    },
    
    {
      question: "Can we use AI code editor such as ChatGPT, Claude, etc?",
      answer: "Yes, you can use AI code editor such as ChatGPT. "
    },
    {
      question: "What should I bring?",
      answer: "Bring your laptop, charger, any hardware you plan to use, valid college ID, and your creativity!. "
    },
    {
      question: "Is there a registration fee?",
      answer: "No, registration is free."
    },
    {
      question: "How do I register for Hacktrøn?",
      answer: "You can register through the Unstop platform at https://unstop.com/hackathons/hacktron-jaypee-university-of-engineering-and-technology-guna-1465508. Registration closes on April 24, 2025 by 11:59 PM."
    },
    {
      question: "Will there be food and accommodation?",
      answer: "No, food and accommodation will not be provided. Participants are responsible for their own travel and accommodation needs."
    },
    {
      question: "What are the prizes?",
      answer: "Hacktrøn offers exciting prizes worth over ₹10,000, including cash prizes, goodies, and certificate of participation."
    },
    {
      question: "What are the judging criteria?",
      answer: "Projects will be judged based on innovation, technical complexity, design, practical application, and alignment with the space theme. The judging panel includes industry experts, academics, and representatives from our sponsoring organizations."
    },
    {
      question: "Can I start working on my project before the event?",
      answer: "Yes, you can start working on your project after the problem statement going live. The time for the same is  April 26, 2025, 1:30 PM onwards."
    },
    {
      question: "What technologies can I use?",
      answer: "You're free to use any programming language, framework, or hardware as long as it helps you create an innovative solution. We encourage participants to explore emerging technologies like AI, blockchain, IoT, and AR/VR in their projects."
    },
    {
      question: "Will there be mentors available during the hackathon?",
      answer: "Yes, we'll have mentors from industry and academia who can guide you throughout the hackathon. They'll provide technical assistance, business insights, and help you refine your solutions."
    },
    {
      question: "Is there a team size limit?",
      answer: "Yes, the team size is limited to 2-4 members. We encourage collaboration and teamwork."
    },
    {
      question: "Is there a code of conduct?",
      answer: "Yes, a code of conduct will be enforced to ensure a safe and respectful environment for all participants. Violations will be penalized."
    }  
  ];

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text">Questions</span></h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">
            Everything you need to know about our cosmic coding adventure.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-[#0B0F3B]/60 backdrop-blur-sm rounded-lg border border-[#6E3CBC]/30 overflow-hidden">
          {faqItems.map((faq, index) => (
            <div key={index}>
              <div
                className={`p-6 cursor-pointer transition-colors ${
                  index !== faqItems.length - 1 ? 'border-b border-[#6E3CBC]/30' : ''
                } ${
                  activeIndex === index ? 'bg-[#0B0F3B]' : 'hover:bg-[#0B0F3B]/40'
                }`}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-bold pr-8">{faq.question}</h3>
                  {activeIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-[#FF5E78]" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-[#FF5E78]" />
                  )}
                </div>

                <div
                  className={`mt-2 text-gray-300 overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="pb-2">{faq.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-300 mb-4">
            Still have questions? Feel free to reach out!
          </p>
          <a
            href="mailto:codeconquerors7@gmail.com"
            className="text-[#FF5E78] hover:underline font-medium"
          >
            codeconquerors7@gmail.com
          </a>
          <br />
          <span className="text-[#FF5E78] font-medium">
            or Call on +91 7267067176, +91 9873510017, +91 7388080906
          </span>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
