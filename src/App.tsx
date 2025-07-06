import React, { useEffect, lazy, createElement } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Challenges } from './components/Challenges';
import { Gallery } from './components/Gallery';
import { Schedule } from './components/Schedule';
import { Rules } from './components/Rules';
import { Sponsors } from './components/Sponsors';
import { Media } from './components/Media';
import { Registration } from './components/Registration';
import { Footer } from './components/Footer';
export function App() {
  // Add spotlight effect
  useEffect(() => {
    let spotlight: HTMLDivElement | null = null;
    const handleMouseMove = (e: MouseEvent) => {
      if (!spotlight) {
        spotlight = document.createElement('div');
        spotlight.className = 'spotlight-effect';
        document.body.appendChild(spotlight);
      }
      spotlight.style.left = `${e.clientX}px`;
      spotlight.style.top = `${e.clientY}px`;
      // Remove the spotlight after animation completes
      setTimeout(() => {
        if (spotlight && spotlight.parentNode) {
          spotlight.parentNode.removeChild(spotlight);
          spotlight = null;
        }
      }, 300);
    };
    // Only add listener for desktop devices
    if (window.matchMedia('(min-width: 768px)').matches) {
      document.addEventListener('mousemove', handleMouseMove);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      if (spotlight && spotlight.parentNode) {
        spotlight.parentNode.removeChild(spotlight);
      }
    };
  }, []);
  // Lazy loading animation
  useEffect(() => {
    const lazyElements = document.querySelectorAll('.lazy-load');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('loaded');
          observer.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    });
    lazyElements.forEach(element => {
      observer.observe(element);
    });
    return () => {
      lazyElements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);
  // Preload critical resources
  useEffect(() => {
    // Preload important images
    const imagesToPreload = ['https://i.ibb.co/zTCDHwNp/Code-Master-Logo-White-PNG.png', 'https://i.ibb.co/G4tt77RN/Gemini-Generated-Image-mxr30jmxr30jmxr3-Photoroom.png'];
    imagesToPreload.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }, []);
  return <div className="font-blinker text-gray-100 overflow-x-hidden bg-dark-gradient min-h-screen">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=3271')] bg-cover bg-fixed opacity-3 -z-10"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-[#0c0c0c] via-[#0c0c0c]/95 to-[#0c0c0c] -z-10"></div>
      <div className="galaxy"></div>
      {/* Mesh gradient backgrounds with neon effects */}
      <div className="fixed inset-0 -z-5 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full neon-mesh-gradient"></div>
        <div className="absolute top-1/4 left-1/4 w-1/2 h-1/2 blur-3xl rounded-full bg-[#0052D4]/10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1/3 h-1/3 blur-3xl rounded-full bg-[#4364F7]/10 animate-pulse-slow" style={{
        animationDelay: '2s'
      }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-[#0052D4]/5 animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full border border-[#4364F7]/10 animate-pulse-slow" style={{
        animationDelay: '1.5s'
      }}></div>
      </div>
      {/* Neon grid lines */}
      <div className="fixed inset-0 -z-5 opacity-10">
        <div className="neon-grid"></div>
      </div>
      {/* Mesh grid background */}
      <div className="absolute inset-0 mesh-grid -z-10 opacity-30"></div>
      <Navbar />
      <Hero />
      <About />
      <Challenges />
      <Gallery />
      <Schedule />
      <Rules />
      <Sponsors />
      <Media />
      <Registration />
      <Footer />
    </div>;
}