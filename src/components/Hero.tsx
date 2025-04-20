import { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

import geekRoomLogo from '../assets/GeekRoomLogo.png';
const Hero = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  // TON Society SVG logo
  const TonSocietyLogo = () => (
    <svg width="124" height="36" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full w-auto">
      <path d="M25.4898 5.92015L16.7979 20.5151C16.6781 20.7142 16.3717 20.5964 16.4159 20.3684L18.7666 7.75066C18.7898 7.63054 18.7106 7.51452 18.5903 7.49261L16.4783 7.10652C16.3584 7.08461 16.2437 7.16433 16.2224 7.28426L14.0559 19.791C14.0153 20.0199 13.6867 20.0194 13.6467 19.7905L10.4391 1.58242C10.4183 1.46259 10.304 1.38258 10.1843 1.4038L8.06866 1.77904C7.94864 1.80027 7.86891 1.91521 7.89083 2.03504L11.3174 20.3896C11.3591 20.6172 11.0533 20.7324 10.9346 20.5336L2.23585 5.91536C2.17324 5.81011 2.03688 5.77636 1.93241 5.84014L0.10523 6.95646C0.0017365 7.01965 -0.0309355 7.15464 0.0320606 7.25824L12.0812 27.0655C12.1691 27.2113 12.3268 27.3004 12.4969 27.3004H15.2428C15.4122 27.3004 15.5693 27.2121 15.6573 27.0674L27.7036 7.26273C27.7667 7.15895 27.7336 7.02357 27.6298 6.96057L25.7921 5.84562C25.6881 5.78242 25.5525 5.81588 25.4898 5.92015Z" fill="white"></path>
      <path d="M115.835 20.5638L112.869 15.1592H115.463L117.14 18.5759C117.357 19.0263 117.776 19.0263 117.978 18.5759L119.671 15.1592H122L116.13 26.0305H113.692L115.804 22.5051C116.208 21.8217 116.208 21.2316 115.835 20.5638Z" fill="white"></path>
      <path d="M107.654 16.8672H106.536V15.1589H107.654C108.105 15.1589 108.307 14.9103 108.307 14.491V13.4816L110.636 11.8975V14.491C110.636 14.9103 110.838 15.1589 111.289 15.1589H112.734V16.8672H111.289C110.838 16.8672 110.636 17.1001 110.636 17.535V20.2839C110.636 20.9051 110.916 21.1846 111.537 21.1846H113.401V22.924H111.491C109.565 22.924 108.307 22.1165 108.307 20.3305V17.535C108.307 17.1001 108.105 16.8672 107.654 16.8672Z" fill="white"></path>
      <path d="M98.3115 19.0263C98.3115 16.6657 99.9895 15.0039 102.474 15.0039C104.804 15.0039 106.45 16.6036 106.45 18.8089C106.45 19.0263 106.434 19.2438 106.403 19.4923H100.921C100.689 19.4923 100.564 19.6165 100.564 19.8961C100.564 20.5794 101.247 21.4957 102.474 21.4957C103.235 21.4957 103.888 21.154 104.214 20.5483H106.481C106.093 22.0703 104.555 23.1108 102.537 23.1108C99.8962 23.1108 98.3115 21.3249 98.3115 19.0263ZM100.921 18.079H103.872C104.105 18.079 104.198 17.9547 104.198 17.7994C104.198 17.3646 103.623 16.6191 102.412 16.6191C101.216 16.6191 100.595 17.3801 100.595 17.7994C100.595 17.9703 100.704 18.079 100.921 18.079Z" fill="white"></path>
      <path d="M96.124 14.2116C95.3326 14.2116 94.7422 13.6214 94.7422 12.9071C94.7422 12.1771 95.3326 11.5869 96.124 11.5869C96.9163 11.5869 97.5067 12.1771 97.5067 12.9071C97.5067 13.6214 96.9163 14.2116 96.124 14.2116ZM97.3048 22.9242H94.9441V15.1589H97.3048V22.9242Z" fill="white"></path>
      <path d="M89.6571 23.1108C86.9705 23.1108 85.1377 21.2782 85.1377 19.0574C85.1377 16.8366 86.9705 15.0039 89.6571 15.0039C92.0178 15.0039 93.7266 16.4017 94.0218 18.2188H91.5832C91.3813 17.3957 90.636 16.8366 89.6571 16.8366C88.3523 16.8366 87.5138 17.8305 87.5138 19.0574C87.5138 20.2843 88.3523 21.2782 89.6571 21.2782C90.636 21.2782 91.3813 20.7192 91.5832 19.8961H94.0218C93.7266 21.7131 92.0178 23.1108 89.6571 23.1108Z" fill="white"></path>
      <path d="M80.1798 23.1108C77.493 23.1108 75.6914 21.2782 75.6914 19.0574C75.6914 16.8366 77.493 15.0039 80.1798 15.0039C82.8667 15.0039 84.6677 16.8366 84.6677 19.0574C84.6677 21.2782 82.8667 23.1108 80.1798 23.1108ZM80.1798 21.2782C81.4685 21.2782 82.2762 20.3154 82.2762 19.0574C82.2762 17.7994 81.4685 16.8366 80.1798 16.8366C78.8907 16.8366 78.0676 17.7994 78.0676 19.0574C78.0676 20.3154 78.8907 21.2782 80.1798 21.2782Z" fill="white"></path>
      <path d="M66.8242 19.8179H69.3712C69.4643 20.6877 70.039 21.2002 71.033 21.2002C72.0114 21.2002 72.5705 20.7032 72.5705 19.9733C72.5705 19.4142 72.2444 18.9016 71.2348 18.6066L69.8061 18.1717C68.1753 17.6903 66.995 16.6498 66.995 15.0967C66.995 13.3107 68.6257 11.8975 71.0019 11.8975C73.2228 11.8975 74.9933 13.0933 75.1486 15.1589H72.6015C72.4929 14.2426 71.8716 13.8076 70.9863 13.8076C70.039 13.8076 69.4643 14.3202 69.4643 15.0036C69.4643 15.5781 69.8526 15.9664 70.7534 16.2305L72.2288 16.6809C74.1235 17.2399 75.0709 18.4047 75.0709 19.849C75.0709 21.7593 73.4557 23.1104 71.033 23.1104C68.7344 23.1104 67.0106 21.9146 66.8242 19.8179Z" fill="white"></path>
      <path d="M55.4936 22.924H53.1797V12.0527H56.2236L60.1217 17.9388C60.4945 18.4978 61.1933 18.3892 61.1933 17.6282V12.0527H63.5074V22.924H60.7896L56.5964 16.5877C56.2081 16.0285 55.4936 16.1373 55.4936 16.8672V22.924Z" fill="white"></path>
      <path d="M46.1741 23.1104C42.6486 23.1104 40.1016 20.641 40.1016 17.504C40.1016 14.3668 42.6486 11.8975 46.1741 11.8975C49.6994 11.8975 52.2465 14.3823 52.2465 17.504C52.2465 20.6256 49.6994 23.1104 46.1741 23.1104ZM46.1741 20.9983C48.2395 20.9983 49.6062 19.4608 49.6062 17.504C49.6062 15.5471 48.2395 14.0096 46.1741 14.0096C44.1085 14.0096 42.7418 15.5471 42.7418 17.504C42.7418 19.4608 44.1085 20.9983 46.1741 20.9983Z" fill="white"></path>
      <path d="M33.6557 13.963H31V12.0527H40.5823V13.963H37.9266C37.383 13.963 37.0413 14.2891 37.0413 14.8172V22.924H34.5409V14.8172C34.5409 14.2891 34.1992 13.963 33.6557 13.963Z" fill="white"></path>
    </svg>
  );

  return (
    <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-[300px] h-[300px] rounded-full bg-[#6E3CBC]/20 blur-[100px] -top-20 -left-20 animate-pulse" style={{ animationDuration: '15s' }}></div>
        <div className="absolute w-[250px] h-[250px] rounded-full bg-[#FF5E78]/20 blur-[100px] top-40 -right-20 animate-pulse" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-10">


        <div className="text-center max-w-4xl mx-auto">
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <span className="bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-transparent bg-clip-text inline-block">
              HackTrøn
            </span>
            <br />
            <span className="text-white">2025</span>
          </h1>

          <p
            className={`text-lg md:text-xl text-gray-300 mb-10 transition-all duration-1000 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            Explore the cosmic frontiers of code at the ultimate space-themed hackathon.
            <br className="hidden md:block" />
            Launch your ideas into orbit and create something stellar.
          </p>

          <div
            className={`flex justify-center transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            <a
              href="https://unstop.com/p/codeconquerors-jaypee-university-of-engineering-and-technology-guna-1465508"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-full bg-gradient-to-r from-[#FF5E78] to-[#6E3CBC] text-white font-bold text-lg transition-transform hover:scale-105 shadow-lg shadow-[#FF5E78]/20"
            >
              Register Now
            </a>
          </div>

          <div
            className={`mt-12 flex justify-center items-center gap-8 flex-wrap transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
          >
            {/* TonSociety */}
            <div className="flex flex-col items-center justify-center">
              <div className="h-12 flex items-center">
                <div className="h-full">
                  <TonSocietyLogo />
                </div>
              </div>

            </div>

            {/* GeekRoom */}
            <div className="flex flex-col items-center justify-center">
              <div className="flex items-center h-12">
                <img
                  src={geekRoomLogo}
                  alt="Geek Room Logo"
                  className="h-full object-contain"
                />
                <span className="text-white font-semibold text-sm ml-2">Geek Room</span>
              </div>
            </div>
          </div>


        </div>
      </div>


      <div
        className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce transition-all duration-1000 delay-700 ${loaded ? 'opacity-100' : 'opacity-0'
          }`}
      >
        <a href="#about" className="text-white/70 hover:text-white">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default Hero;
