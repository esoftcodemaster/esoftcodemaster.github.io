import React, { useState, lazy, Component } from 'react';
import { Play, X } from 'lucide-react';
export const Media = () => {
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const videos = [{
    id: 'hiru',
    thumbnail: 'https://i.ibb.co/twMQDVrc/HiruTV.png',
    title: 'Hiru TV News',
    description: 'National coverage of Code Master 1.0, broadcast on Hiru News.',
    url: 'https://web.facebook.com/watch/?v=285687870523502&ref=sharing'
  }, {
    id: 'rupavahini',
    thumbnail: 'https://i.ibb.co/MxjkFBmR/Rupavahini-TV.png',
    title: 'Rupavahini Biz News',
    description: 'Recognized on Biz-News for industry relevance and student innovation.',
    url: 'https://web.facebook.com/watch/?v=144130258698714&ref=sharing'
  }];
  const openVideo = (videoId: string) => {
    setActiveVideo(videoId);
  };
  const closeVideo = () => {
    setActiveVideo(null);
  };
  const getEmbedUrl = (url: string) => {
    // Convert Facebook watch URL to embed URL
    const videoId = url.split('v=')[1]?.split('&')[0] || '';
    return `https://www.facebook.com/plugins/video.php?href=${encodeURIComponent(url)}&show_text=false`;
  };
  return <section id="media" className="py-20 relative">
      <div className="absolute top-1/2 right-0 w-64 h-64 bg-[#0052D4]/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-space font-bold mb-12 text-center text-white animate-code-reveal">
          Television <span className="text-gradient">Coverage</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => <div key={video.id} className="group relative overflow-hidden rounded-xl shadow-lg border border-gray-800 hover:border-gray-700 transition-colors hover-glow mesh-hover lazy-load h-full" style={{
          animationDelay: `${index * 0.3}s`
        }}>
              <div className="aspect-video relative">
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/20 flex items-center justify-center group-hover:bg-black/60 transition-colors">
                  <button onClick={() => openVideo(video.id)} className="w-20 h-20 rounded-full bg-gradient-to-r from-[#0052D4]/80 to-[#4364F7]/80 flex items-center justify-center group-hover:from-[#0052D4] group-hover:to-[#4364F7] transition-colors transform group-hover:scale-110 duration-300 shadow-lg shadow-[#0052D4]/30">
                    <Play size={32} fill="white" />
                  </button>
                </div>
              </div>
              <div className="p-6 glass-effect border-t border-gray-800 flex flex-col h-[120px]">
                <h3 className="text-xl font-space mb-2">{video.title}</h3>
                <p className="text-gray-300">{video.description}</p>
              </div>
              <div className="absolute top-4 right-4 bg-gradient-to-r from-[#0052D4] to-[#4364F7] text-white text-xs px-3 py-1 rounded-full shadow-lg">
                2023
              </div>
            </div>)}
        </div>
      </div>
      {/* Video Modal */}
      {activeVideo && <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl bg-gray-900 rounded-xl overflow-hidden futuristic-border">
            <button onClick={closeVideo} className="absolute top-4 right-4 w-10 h-10 rounded-full bg-black/50 flex items-center justify-center text-white z-10 hover:bg-black/70 transition-colors">
              <X size={20} />
            </button>
            <div className="aspect-video w-full">
              <iframe src={getEmbedUrl(videos.find(v => v.id === activeVideo)?.url || '')} width="100%" height="100%" style={{
            border: 'none'
          }} scrolling="no" frameBorder="0" allowFullScreen={true} allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
            </div>
          </div>
        </div>}
    </section>;
};