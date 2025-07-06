import React, { lazy } from 'react';
import { Button } from './ui/Button';
import { Download, PlusCircle } from 'lucide-react';
export const Sponsors = () => {
  const currentSponsors = [{
    name: 'Sponsor 1',
    logo: 'https://via.placeholder.com/150?text=Your+Logo+Here'
  }, {
    name: 'Sponsor 2',
    logo: 'https://via.placeholder.com/150?text=Your+Logo+Here'
  }];
  return <section id="sponsors" className="py-20 relative">
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#0052D4]/5 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-space font-bold mb-12 text-center text-white animate-code-reveal">
          Trusted by <span className="text-gradient">World-Class</span> Sponsors
        </h2>
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-space mb-8 text-center animate-code-reveal">
            Code Master 2.0 (2025)
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center mb-16">
            {currentSponsors.map((sponsor, index) => <div key={index} className="bg-gray-900/70 rounded-xl p-5 w-full h-28 flex items-center justify-center border border-dashed border-gray-700 hover:border-[#0052D4]/50 transition-colors hover-glow mesh-hover lazy-load" style={{
            animationDelay: `${index * 0.15}s`
          }}>
                <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="max-h-full max-w-full object-contain" />
              </div>)}
            <div className="bg-gray-900/70 rounded-xl p-5 w-full h-28 flex items-center justify-center border border-dashed border-gray-700 hover:border-[#0052D4]/50 transition-colors hover-glow mesh-hover lazy-load" style={{
            animationDelay: '0.3s'
          }}>
              <div className="text-center text-gray-400">
                <PlusCircle size={28} className="mx-auto mb-3" />
                <p className="text-sm">Your Logo Here</p>
              </div>
            </div>
            <div className="bg-gray-900/70 rounded-xl p-5 w-full h-28 flex items-center justify-center border border-dashed border-gray-700 hover:border-[#0052D4]/50 transition-colors hover-glow mesh-hover lazy-load" style={{
            animationDelay: '0.45s'
          }}>
              <div className="text-center text-gray-400">
                <PlusCircle size={28} className="mx-auto mb-3" />
                <p className="text-sm">Your Logo Here</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 lazy-load" style={{
          animationDelay: '0.6s'
        }}>
            <a href="https://esoftlk-my.sharepoint.com/:b:/g/personal/dileepa_mihiranga_esoft_lk/Eclg2O3l7FREvYQSf4wIQHIBcJ82cm8Zk4Zp1FSt4KOmZQ?e=FXwVaR" target="_blank" rel="noopener noreferrer" download="Code Master 2.0 Sponsorship Proposal.pdf">
              <Button variant="outline" icon={<Download size={16} />}>
                Download Sponsorship Proposal
              </Button>
            </a>
            <a href="https://forms.office.com/r/vyiB8zHhRm" target="_blank" rel="noopener noreferrer">
              <Button>Become a Sponsor</Button>
            </a>
          </div>
        </div>
      </div>
    </section>;
};