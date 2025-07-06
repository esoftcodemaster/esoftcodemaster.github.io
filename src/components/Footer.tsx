import React, { lazy } from 'react';
import { Phone, Mail } from 'lucide-react';
export const Footer = () => {
  return <footer id="footer" className="pt-16 pb-8 relative bg-[#0c0c0c] border-t border-gray-900">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?q=80&w=3271')] bg-cover bg-fixed opacity-5 -z-10"></div>
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            <div className="lazy-load">
              <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
                {/* Code Master logo */}
                <img src="https://i.ibb.co/zTCDHwNp/Code-Master-Logo-White-PNG.png" alt="Code Master Logo" className="h-12 animate-glow" loading="lazy" />
              </div>
              <p className="text-gray-400 mb-6">
                The ultimate coding challenge hosted by ESOFT Metro Campus,
                Matara. Join us for an exciting coding competition!
              </p>
            </div>
            <div className="lazy-load" style={{
            animationDelay: '0.15s'
          }}>
              <h3 className="font-space text-lg mb-5 text-white">Contact</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Phone size={16} className="text-[#0052D4] mr-3 flex-shrink-0 mt-1" />
                  <span className="text-gray-300">
                    076 6312397
                    <br />
                    <span className="text-sm text-gray-400">
                      Dileepa, Chief Organizer of Code Master Hackathon
                    </span>
                  </span>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-[#0052D4] mr-3 flex-shrink-0" />
                  <span className="text-gray-300">
                    dileepa.mihiranga@esoft.lk
                  </span>
                </div>
              </div>
            </div>
            <div className="lazy-load" style={{
            animationDelay: '0.3s'
          }}>
              <h3 className="font-space text-lg mb-5 text-white">
                Quick Links
              </h3>
              <ul className="space-y-3">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center hover-glow">
                    <span className="w-1.5 h-1.5 bg-[#0052D4] rounded-full mr-2"></span>
                    About
                  </a>
                </li>
                <li>
                  <a href="#challenges" className="text-gray-400 hover:text-white transition-colors flex items-center hover-glow">
                    <span className="w-1.5 h-1.5 bg-[#0052D4] rounded-full mr-2"></span>
                    Challenges
                  </a>
                </li>
                <li>
                  <a href="#rules" className="text-gray-400 hover:text-white transition-colors flex items-center hover-glow">
                    <span className="w-1.5 h-1.5 bg-[#0052D4] rounded-full mr-2"></span>
                    Rules
                  </a>
                </li>
                <li>
                  <a href="#registration" className="text-gray-400 hover:text-white transition-colors flex items-center hover-glow">
                    <span className="w-1.5 h-1.5 bg-[#0052D4] rounded-full mr-2"></span>
                    Registration
                  </a>
                </li>
                <li>
                  <a href="https://esoftlk-my.sharepoint.com/:b:/g/personal/dileepa_mihiranga_esoft_lk/EQBca64IaBNCtW1839vce0QBnbfxhakHVYp_D9unnG07wA?e=1PtdTL" target="_blank" rel="noopener noreferrer" download="Code Master 2.0 - Terms and Conditions.pdf" className="text-gray-400 hover:text-white transition-colors flex items-center hover-glow">
                    <span className="w-1.5 h-1.5 bg-[#0052D4] rounded-full mr-2"></span>
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div className="lazy-load" style={{
            animationDelay: '0.45s'
          }}>
              <h3 className="font-space text-lg mb-5 text-white">Location</h3>
              <div className="p-4 bg-gray-900 rounded-lg border border-gray-800 mesh-hover neon-border">
                <p className="text-gray-300">
                  ESOFT Metro Campus
                  <br />
                  Matara Branch
                  <br />
                  Sri Lanka
                </p>
                <a href="https://maps.app.goo.gl/Ahd5dsBbQezkvESX9" target="_blank" rel="noopener noreferrer" className="text-[#0052D4] text-sm mt-3 inline-block hover:underline hover-glow">
                  View on Google Maps
                </a>
              </div>
            </div>
          </div>
          <hr className="border-gray-800 my-10" />
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 Code Master 2.0. All rights reserved.
            </p>
            <p className="text-gray-500 text-xs mt-3 md:mt-0">
              Built with 💙 by ESOFT Matara
            </p>
          </div>
        </div>
      </div>
      {/* Floating register button */}
      <div className="fixed bottom-6 right-6 z-50">
        <a href="https://form.jotform.com/dileepams/codemaster-reg" target="_blank" rel="noopener noreferrer">
          <button className="bg-gradient-to-r from-[#0052D4] to-[#4364F7] text-white px-5 py-3 rounded-full shadow-lg shadow-[#0052D4]/20 hover:shadow-xl hover:shadow-[#0052D4]/30 transition-all hover-glow neon-button">
            Register Now
          </button>
        </a>
      </div>
    </footer>;
};