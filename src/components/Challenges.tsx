import React, { useState, lazy } from 'react';
import { Card } from './ui/Card';
import { Button } from './ui/Button';
import { Sparkles, X } from 'lucide-react';
export const Challenges = () => {
  const [showPopup, setShowPopup] = useState(false);
  const challenges = [{
    title: 'Code Combat',
    logo: 'https://i.ibb.co/mrp86jMw/Code-Combat-Logo-V3-white.png',
    description: 'Junior: Build web pages using HTML & CSS. Senior: Advanced web development challenges.',
    levels: ['Junior', 'Senior'],
    aiAllowed: true
  }, {
    title: 'Mind Maze',
    logo: 'https://i.ibb.co/Dfb1dmFm/Mind-Maze-Logo-v3-white.png',
    description: 'Logic-based problem solving without actual coding. Encourages critical thinking in puzzle form.',
    levels: ['Junior'],
    aiAllowed: false
  }, {
    title: 'Blitz Code',
    logo: 'https://i.ibb.co/M5nZ1DCb/Blitz-Code-Logo-v3-white.png',
    description: 'Live coding with high pressure. Test your coding speed and accuracy under time constraints.',
    levels: ['Senior'],
    aiAllowed: false
  }, {
    title: 'Bullet Brain',
    logo: 'https://i.ibb.co/KpxX9ntp/Bullet-Brain-Logo-V3-white.png',
    description: 'Fast-paced quiz challenge. Speed + accuracy = points. Test your tech knowledge!',
    levels: ['Junior', 'Senior'],
    aiAllowed: false
  }];
  return <section id="challenges" className="py-16 relative">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-space font-bold mb-12 text-center text-white animate-code-reveal">
          <span className="text-gradient">Challenges</span> Overview
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {challenges.map((challenge, index) => <Card key={index} className="group transform transition-all hover:-translate-y-2 hover:shadow-lg hover:shadow-[#0052D4]/10 mesh-hover lazy-load" style={{
          animationDelay: `${index * 0.15}s`
        }}>
              <div className="flex flex-col items-center mb-5 h-24 justify-center">
                <div className="h-16 flex items-center justify-center">
                  <img src={challenge.logo} alt={`${challenge.title} logo`} className="h-full object-contain" />
                </div>
              </div>
              <p className="text-gray-300 mb-5 text-sm md:text-base h-28 overflow-auto">
                {challenge.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {challenge.levels.map(level => <span key={level} className={`text-xs px-3 py-1 rounded-full ${level === 'Junior' ? 'bg-[#0052D4]/20 text-blue-300 border border-[#0052D4]/30' : 'bg-[#4364F7]/20 text-blue-200 border border-[#4364F7]/30'}`}>
                    {level}
                  </span>)}
              </div>
              <div className="flex items-center justify-between mt-auto pt-4">
                <div className={`text-xs px-3 py-1 rounded-full ${challenge.aiAllowed ? 'bg-green-900/20 text-green-400 border border-green-800/30' : 'bg-red-900/20 text-red-400 border border-red-800/30'}`}>
                  {challenge.aiAllowed ? 'AI Allowed' : 'No AI'}
                </div>
                <button className="relative overflow-hidden bg-gradient-to-r from-[#0052D4] to-[#4364F7] text-white text-xs px-3 py-1.5 rounded-full shadow-md hover:shadow-lg hover:shadow-[#0052D4]/20 transition-all duration-300" onClick={() => setShowPopup(true)}>
                  <span className="flex items-center">
                    Try a sample
                    <Sparkles size={12} className="ml-1.5" />
                  </span>
                  <span className="absolute inset-0 bg-white/20 transform translate-y-full hover:translate-y-0 transition-transform duration-300"></span>
                </button>
              </div>
            </Card>)}
        </div>
      </div>
      {/* Sample challenge popup */}
      {showPopup && <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative bg-gray-900 rounded-xl p-8 max-w-md w-full border border-[#0052D4]/30 shadow-lg shadow-[#0052D4]/10 neon-border">
            <button onClick={() => setShowPopup(false)} className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center text-white hover:bg-gray-800 transition-colors">
              <X size={18} />
            </button>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-[#0052D4]/20 flex items-center justify-center">
                <Sparkles size={32} className="text-[#4364F7]" />
              </div>
              <h3 className="text-xl font-space font-bold mb-4 text-white">
                Coming Soon!
              </h3>
              <p className="text-gray-300">
                Sample challenges are coming your way soon! Check back in the
                next few days for exciting new content.
              </p>
              <button onClick={() => setShowPopup(false)} className="mt-8 px-6 py-2 bg-gradient-to-r from-[#0052D4] to-[#4364F7] text-white rounded-full hover:shadow-lg hover:shadow-[#0052D4]/20 transition-all">
                Got it
              </button>
            </div>
          </div>
        </div>}
    </section>;
};