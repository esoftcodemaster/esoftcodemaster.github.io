import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  useEffect(() => {
    // Prevent scrolling when mobile menu is open
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  const navItems = [{
    name: 'Home',
    id: 'hero'
  }, {
    name: 'About',
    id: 'about'
  }, {
    name: 'Challenges',
    id: 'challenges'
  }, {
    name: 'Schedule',
    id: 'schedule'
  }, {
    name: 'Rules',
    id: 'rules'
  }, {
    name: 'Sponsors',
    id: 'sponsors'
  }, {
    name: 'Highlights',
    id: 'gallery'
  }, {
    name: 'Media',
    id: 'media'
  }, {
    name: 'Contact',
    id: 'footer'
  }];
  return <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-950/90 backdrop-blur-lg shadow-lg' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <div className="flex items-center gap-3 cursor-pointer" onClick={() => scrollTo('hero')}>
                {/* Real logo image */}
                <img src="https://i.ibb.co/zTCDHwNp/Code-Master-Logo-White-PNG.png" alt="Code Master Logo" className="h-12 animate-glow" />
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-1">
                {navItems.map(item => <button key={item.id} onClick={() => scrollTo(item.id)} className="px-3 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-[#0F8FFF]/20 rounded-md transition-all relative group">
                    {item.name}
                    <span className="absolute bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#0F8FFF] to-[#004080] group-hover:w-full transition-all duration-300"></span>
                  </button>)}
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none z-50">
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>
      {/* Creative minimal full screen mobile menu */}
      {isMobileMenuOpen && <div className="fixed inset-0 z-40 bg-gray-950/95 backdrop-blur-lg flex flex-col items-center justify-center overflow-hidden">
          <div className="absolute inset-0 -z-10 opacity-30">
            <div className="stars"></div>
            <div className="stars2"></div>
            <div className="stars3"></div>
          </div>
          <button onClick={() => setIsMobileMenuOpen(false)} className="absolute top-5 right-5 w-10 h-10 rounded-full flex items-center justify-center bg-gray-900/50 text-white border border-gray-800">
            <X size={20} />
          </button>
          <div className="w-full max-w-xs px-6 relative">
            <div className="flex justify-center mb-16">
              <img src="https://i.ibb.co/zTCDHwNp/Code-Master-Logo-White-PNG.png" alt="Code Master Logo" className="h-14 animate-glow" />
            </div>
            <div className="space-y-8">
              {navItems.map((item, index) => <div key={item.id} className="overflow-hidden" style={{
            animationDelay: `${index * 0.1}s`
          }}>
                  <button onClick={() => scrollTo(item.id)} className="w-full text-center text-gray-300 hover:text-white transition-all group relative">
                    <span className="text-lg font-space">{item.name}</span>
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#0F8FFF] to-[#004080] group-hover:w-full transition-all duration-300"></span>
                  </button>
                </div>)}
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] rounded-full border border-[#0F8FFF]/10 animate-pulse"></div>
            <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full border border-[#0F8FFF]/5 animate-pulse" style={{
          animationDelay: '1s'
        }}></div>
          </div>
        </div>}
    </>;
};