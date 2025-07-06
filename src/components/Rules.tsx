import React, { useState, lazy } from 'react';
import { Accordion } from './ui/Accordion';
import { Download } from 'lucide-react';
export const Rules = () => {
  const [openSection, setOpenSection] = useState<string | null>('eligibility');
  const toggleSection = (id: string) => {
    setOpenSection(openSection === id ? null : id);
  };
  const sections = [{
    id: 'eligibility',
    title: 'Eligibility',
    content: <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-[#0052D4] mt-2 mr-3"></div>
            <p>
              <span className="text-blue-300 font-bold">Junior:</span> Diploma
              students only
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-[#4364F7] mt-2 mr-3"></div>
            <p>
              <span className="text-blue-200 font-bold">Senior:</span> HND +
              Degree students only
            </p>
          </div>
        </div>
  }, {
    id: 'registration',
    title: 'Registration',
    content: <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3"></div>
            <p>
              <span className="font-bold">Opens:</span> July 5, 2025
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3"></div>
            <p>
              <span className="font-bold">Closes:</span> July 31, 2025
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-white mt-2 mr-3"></div>
            <p>
              <span className="font-bold">Fee:</span> LKR 1800 per team (4
              students)
            </p>
          </div>
        </div>
  }, {
    id: 'devices',
    title: 'Device Rules',
    content: <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-[#0052D4] mt-2 mr-3"></div>
            <p>
              <span className="text-blue-300 font-bold">Junior:</span> One
              provided PC + one team PC
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-[#4364F7] mt-2 mr-3"></div>
            <p>
              <span className="text-blue-200 font-bold">Senior:</span> Must
              bring personal laptops
            </p>
          </div>
        </div>
  }, {
    id: 'tools',
    title: 'External Tools',
    content: <div className="space-y-4">
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-green-400 mt-2 mr-3"></div>
            <p>
              <span className="text-green-400 font-bold">AI tools:</span> Only
              allowed in Code Combat
            </p>
          </div>
          <div className="flex items-start">
            <div className="w-2 h-2 rounded-full bg-red-400 mt-2 mr-3"></div>
            <p>
              <span className="text-red-400 font-bold">Not allowed:</span>{' '}
              Pre-built templates/CMS (WordPress, Webflow)
            </p>
          </div>
        </div>
  }];
  return <section id="rules" className="py-20 relative">
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#4364F7]/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-space font-bold mb-12 text-center text-white animate-code-reveal">
          <span className="text-gradient">Rules</span> & Eligibility
        </h2>
        <div className="max-w-3xl mx-auto">
          <div className="space-y-5">
            {sections.map((section, index) => <Accordion key={section.id} title={section.title} isOpen={openSection === section.id} onToggle={() => toggleSection(section.id)} className="lazy-load" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                {section.content}
              </Accordion>)}
          </div>
          <div className="mt-10 text-center lazy-load" style={{
          animationDelay: '0.6s'
        }}>
            <a href="https://esoftlk-my.sharepoint.com/:b:/g/personal/dileepa_mihiranga_esoft_lk/EWFx4oH-fqhPt9v2oFWtOkcBVePaBGHa45CA3vVioLjhYQ?e=UTfn88" target="_blank" rel="noopener noreferrer" download="Code Master 2.0 - Rules and Guidelines.pdf" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-[#0052D4] to-[#4364F7] text-white rounded-full hover:shadow-lg hover:shadow-[#0052D4]/20 transition-all hover-glow">
              <Download size={18} className="mr-2" />
              Download Full Rules & Guidelines PDF
            </a>
          </div>
        </div>
      </div>
    </section>;
};