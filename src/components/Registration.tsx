import React, { lazy } from 'react';
import { Button } from './ui/Button';
import { Calendar, Clock, CreditCard } from 'lucide-react';
export const Registration = () => {
  return <section id="registration" className="py-20 relative overflow-hidden">
      {/* Background decorations - simplified */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-full h-full bg-gradient-to-br from-[#0052D4]/5 to-[#4364F7]/5 opacity-30"></div>
      </div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-space font-bold mb-12 text-center text-white animate-code-reveal">
          <span className="text-gradient">Registration</span>
        </h2>
        {/* Simplified, professional card design */}
        <div className="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-lg rounded-xl p-8 md:p-10 shadow-lg border border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
            <div className="flex flex-col p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#0052D4]/30 transition-colors lazy-load">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#0052D4]/10 rounded-md">
                  <Calendar size={24} className="text-[#0052D4]" />
                </div>
                <h3 className="font-space text-lg">Registration Period</h3>
              </div>
              <p className="text-gray-300">July 5 – July 31, 2025</p>
            </div>
            <div className="flex flex-col p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#4364F7]/30 transition-colors lazy-load" style={{
            animationDelay: '0.15s'
          }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#4364F7]/10 rounded-md">
                  <Clock size={24} className="text-[#4364F7]" />
                </div>
                <h3 className="font-space text-lg">Event Date</h3>
              </div>
              <p className="text-gray-300">August 3, 2025</p>
            </div>
            <div className="flex flex-col p-6 bg-gray-900/50 rounded-lg border border-gray-800 hover:border-[#52057B]/30 transition-colors lazy-load" style={{
            animationDelay: '0.3s'
          }}>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-[#52057B]/10 rounded-md">
                  <CreditCard size={24} className="text-[#BC6FF1]" />
                </div>
                <h3 className="font-space text-lg">Registration Fee</h3>
              </div>
              <p className="text-gray-300">LKR 1800 per team (4 students)</p>
            </div>
          </div>
          <div className="text-center lazy-load" style={{
          animationDelay: '0.45s'
        }}>
            <p className="mb-8 text-xl text-gray-300">
              Ready to showcase your coding skills and compete with the best?
            </p>
            <a href="https://form.jotform.com/dileepams/codemaster-reg"> <Button size="lg">Register Now</Button></a>
            <p className="mt-6 text-sm text-gray-400">
              Registration opens on July 5, 2025
            </p>
          </div>
        </div>
      </div>
    </section>;
};