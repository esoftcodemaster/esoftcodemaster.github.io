import React, { useEffect, useState, useRef, lazy } from 'react';
import { Button } from './ui/Button';
import { ArrowRight } from 'lucide-react';
export const Hero = () => {
  // Typewriter effect state and phrases
  const phrases = ['The Ultimate Coding Challenge', 'Where Ideas Become Code', 'Built by Students, Powered by Innovation', 'Fueling the Future with Code', 'Where Young Minds Engineer Tomorrow'];
  const [displayText, setDisplayText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);
  // Handle typewriter effect
  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const timer = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        if (charIndex < currentPhrase.length) {
          setDisplayText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
          setTypingSpeed(80 + Math.random() * 50);
        } else {
          // Pause at the end of typing before starting to delete
          setIsDeleting(false);
          setTypingSpeed(2000); // Wait 2 seconds before moving to next phrase
          // Move to next phrase after pause
          setTimeout(() => {
            setPhraseIndex((phraseIndex + 1) % phrases.length);
            setCharIndex(0);
            setDisplayText('');
          }, 2000);
        }
      }
    }, typingSpeed);
    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, phraseIndex, typingSpeed, phrases]);
  return <section id="hero" className="relative min-h-screen flex items-center justify-center pt-28 md:pt-16 overflow-hidden">
      {/* Mesh gradient background */}
      <div className="absolute inset-0 -z-10">
        <div className="hero-mesh-gradient"></div>
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
        {/* Animated galaxy elements */}
        <div className="absolute w-1 h-1 bg-white rounded-full top-1/4 left-1/3 animate-twinkle"></div>
        <div className="absolute w-1.5 h-1.5 bg-white rounded-full top-1/3 right-1/4 animate-twinkle-delayed"></div>
        <div className="absolute w-1 h-1 bg-white rounded-full bottom-1/4 right-1/3 animate-twinkle"></div>
        <div className="absolute w-2 h-2 bg-white rounded-full top-2/3 left-1/4 animate-twinkle-delayed"></div>
        <div className="absolute w-[500px] h-[500px] rounded-full border border-[#0052D4]/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute w-[700px] h-[700px] rounded-full border border-[#0052D4]/10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{
        animationDelay: '1s'
      }}></div>
        <div className="absolute w-[900px] h-[900px] rounded-full border border-[#4364F7]/5 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-pulse" style={{
        animationDelay: '2s'
      }}></div>
        {/* Floating elements */}
        <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-[#0052D4]/30 rounded-full blur-md animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-6 h-6 bg-[#4364F7]/30 rounded-full blur-md animate-float" style={{
        animationDelay: '1.5s'
      }}></div>
        <div className="absolute top-1/3 right-1/3 w-4 h-4 bg-white/20 rounded-full blur-sm animate-float" style={{
        animationDelay: '2.5s'
      }}></div>
        {/* Neon light effects */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#0052D4]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/3 w-48 h-48 bg-[#4364F7]/10 rounded-full blur-3xl"></div>
      </div>
      <div className="container mx-auto px-6 z-10 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-7/12 text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-space font-bold mb-6 text-white">
              <span className="text-gradient">Code Master 2.0</span>
              <br />
              <div className="h-[3.5rem] md:h-[4.5rem] lg:h-[5.5rem] overflow-hidden mt-2 flex items-center justify-center lg:justify-start">
                <span className="text-2xl md:text-4xl lg:text-5xl inline-block typewriter-text typewriter-neon">
                  {displayText}
                  <span className="custom-cursor"></span>
                </span>
              </div>
            </h1>
            <div className="text-xl md:text-2xl mb-8 text-gray-300 lazy-load">
              <p>
                Hosted by{' '}
                <span className="font-bold">ESOFT Metro Campus, Matara</span>
              </p>
              <p className="mt-3 inline-block bg-gradient-to-r from-[#0052D4]/20 to-[#4364F7]/20 px-6 py-2 rounded-full text-white font-bold border border-white/5 shadow-lg neon-border">
                August 3, 2025
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 lazy-load" style={{
            animationDelay: '0.3s'
          }}>
              <a href="https://form.jotform.com/dileepams/codemaster-reg" target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="neon-button">
                  Register Now <ArrowRight className="ml-2" size={16} />
                </Button>
              </a>
              <Button variant="outline" size="lg" onClick={() => document.getElementById('about')?.scrollIntoView({
              behavior: 'smooth'
            })}>
                Learn More
              </Button>
            </div>
          </div>
          {/* Responsive astronaut image with better mobile optimization */}
          <div className="lg:w-5/12 mt-12 lg:mt-0 relative">
            <div className="w-full max-w-md mx-auto relative">
              <img src="https://i.ibb.co/G4tt77RN/Gemini-Generated-Image-mxr30jmxr30jmxr3-Photoroom.png" alt="Astronaut" className="w-full h-auto object-contain animate-float-slow lazy-load" style={{
              maxHeight: '80vh',
              maxWidth: '100%'
            }} loading="lazy" />
              <div className="absolute -inset-4 bg-[#0052D4]/5 rounded-full blur-3xl -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};