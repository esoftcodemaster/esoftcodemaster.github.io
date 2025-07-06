import React, { lazy } from 'react';
import { Clock, Coffee, Trophy, Lightbulb, Code, Brain, Zap } from 'lucide-react';
export const Schedule = () => {
  const scheduleItems = [{
    time: '08:30 AM',
    activity: 'Welcome Speech & Opening',
    icon: <Clock size={24} className="text-[#0052D4]" />
  }, {
    time: '09:00 AM',
    activity: 'First Challenge – Code Combat',
    icon: <Code size={24} className="text-[#0052D4]" />
  }, {
    time: '11:45 AM',
    activity: 'Tech Talk by Main Sponsor',
    icon: <Lightbulb size={24} className="text-[#4364F7]" />
  }, {
    time: '12:15 PM',
    activity: 'Lunch Break',
    icon: <Coffee size={24} className="text-amber-400" />
  }, {
    time: '01:00 PM',
    activity: 'Second Challenge – Mind Maze / Blitz',
    icon: <Brain size={24} className="text-[#4364F7]" />
  }, {
    time: '02:15 PM',
    activity: 'Third Challenge – Bullet Brain',
    icon: <Zap size={24} className="text-[#0052D4]" />
  }, {
    time: '03:20 PM',
    activity: 'Awards & Closing Ceremony',
    icon: <Trophy size={24} className="text-amber-400" />
  }];
  return <section id="schedule" className="py-20 relative">
      <div className="absolute top-0 right-0 w-64 h-64 bg-[#0052D4]/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-space font-bold mb-12 text-center text-white animate-code-reveal">
          Event Day <span className="text-gradient">Schedule</span>
        </h2>
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-[#0052D4] via-[#4364F7] to-[#892CDC] hidden md:block rounded-full"></div>
          <div className="space-y-8">
            {scheduleItems.map((item, index) => <div key={index} className="flex flex-col md:flex-row items-start md:items-center group lazy-load" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <div className="flex-shrink-0 w-16 h-16 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center z-10 group-hover:border-[#0052D4] transition-colors mb-4 md:mb-0 shadow-lg hover-glow">
                  {item.icon}
                </div>
                <div className="md:ml-8 p-4 md:p-6 glass-effect rounded-xl flex-grow group-hover:border-[#0052D4]/30 group-hover:bg-gray-900/80 transition-all transform hover:-translate-y-1 duration-300 w-full md:w-auto mesh-hover">
                  <div className="text-[#0052D4] font-space font-bold text-lg">
                    {item.time}
                  </div>
                  <div className="text-lg mt-1 text-white">{item.activity}</div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
      {/* Decorative astronaut image */}
      
      <div className="absolute bottom-10 right-10 w-28 h-28 opacity-20 hidden lg:block">
        <img src="https://i.ibb.co/v6G3FJ1B/astro-3.png" alt="Decorative astronaut" className="w-full h-full object-contain animate-float-slow" style={{
        animationDelay: '1s'
      }} />
      </div>
    </section>;
};