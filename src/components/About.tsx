import React, { useState, lazy } from 'react';
import { Play, X } from 'lucide-react';
export const About = () => {
  const [showVideo, setShowVideo] = useState(false);
  return <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-space font-bold mb-8 text-center text-white animate-code-reveal">
            About <span className="text-gradient">Code Master</span>
          </h2>
          <div className="space-y-6 text-lg lazy-load">
            <p className="text-gray-300">
              Code Master 2.0 is the flagship annual hackathon{' '}
              <span className="font-bold">
                organized by ESOFT Metro Campus, Matara.
              </span>{' '}
              On <span className="font-bold">August 3, 2025</span>, over 120
              students from diploma and degree programs will compete in a series
              of fast-paced, team-based challenges that push their coding,
              problem-solving, and collaboration skills.
            </p>
            <div className="p-8 glass-effect rounded-2xl shadow-xl shadow-[#8E2DE2]/5 mesh-hover">
              <p className="text-xl md:text-2xl font-medium mb-4 text-white">
                <span className="bg-gradient-to-r from-[#8E2DE2]/15 to-[#4A00E0]/15 px-3 py-1 rounded">
                  After the success of Code Master 1.0 in 2023, this year's
                  event is bigger, smarter, and supported by national media
                  exposure.
                </span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-6">
                <div className="bg-gradient-to-r from-[#8E2DE2]/10 to-[#8E2DE2]/5 px-5 py-2 rounded-full text-sm border border-[#8E2DE2]/20 hover:border-[#8E2DE2]/40 transition-colors hover-glow neon-border">
                  National Media Coverage
                </div>
                <div className="bg-gradient-to-r from-[#4A00E0]/10 to-[#4A00E0]/5 px-5 py-2 rounded-full text-sm border border-[#4A00E0]/20 hover:border-[#4A00E0]/40 transition-colors hover-glow neon-border">
                  120+ Participants
                </div>
                <div className="bg-gradient-to-r from-[#8E2DE2]/10 to-[#4A00E0]/10 px-5 py-2 rounded-full text-sm border border-white/10 hover:border-white/20 transition-colors hover-glow neon-border">
                  Industry Sponsors
                </div>
              </div>
            </div>
            {/* Larger Video Recap Button with Thumbnail - Styled like Media section */}
            <div className="mt-10 lazy-load" style={{
            animationDelay: '0.4s'
          }}>
              <button onClick={() => setShowVideo(true)} className="group relative overflow-hidden rounded-xl border border-[#8E2DE2]/30 hover:border-[#8E2DE2]/60 transition-all duration-300 bg-gradient-to-r from-[#8E2DE2]/10 to-[#4A00E0]/10 hover:from-[#8E2DE2]/20 hover:to-[#4A00E0]/20 hover-glow w-full max-w-xl mx-auto block neon-border">
                <div className="aspect-video relative">
                  <img src="https://i.ibb.co/wFmQdp4b/Recap-Thumbnail.png" alt="Video thumbnail" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 flex items-center justify-center">
                    <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#8E2DE2]/80 to-[#4A00E0]/80 flex items-center justify-center group-hover:from-[#8E2DE2] group-hover:to-[#4A00E0] transition-colors transform group-hover:scale-110 duration-300 shadow-lg shadow-[#8E2DE2]/30">
                      <Play size={32} fill="white" />
                    </div>
                  </div>
                </div>
                <div className="p-4 glass-effect border-t border-gray-800">
                  <p className="text-xl font-space mb-0">
                    Watch Code Master 1.0 Recap
                  </p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Video Modal */}
      {showVideo && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden futuristic-border">
            <button onClick={() => setShowVideo(false)} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white z-10 hover:bg-black/70 transition-colors">
              <X size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe src="https://streamable.com/e/4e3eo4?autoplay=1&quality=highest&muted=0" width="100%" height="100%" style={{
            border: 'none'
          }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share" loading="lazy"></iframe>
            </div>
          </div>
        </div>}
      {/* Background elements */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-[#8E2DE2]/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A00E0]/10 rounded-full blur-3xl -z-10"></div>
    </section>;
};