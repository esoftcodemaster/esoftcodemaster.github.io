import React, { useEffect, useState, lazy } from 'react';
export const Gallery = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [{
    url: 'https://i.ibb.co/FLzN4RMH/gallery-1.jpg',
    caption: 'Senior Team – Code Combat Winners'
  }, {
    url: 'https://i.ibb.co/fdHG8dzk/gallery-1.jpg',
    caption: 'Opening Ceremony 2023'
  }, {
    url: 'https://i.ibb.co/qYwCNqfB/gallery-2.jpg',
    caption: 'Judge Feedback Moments'
  }, {
    url: 'https://i.ibb.co/6cCvCW4H/gallery-3.jpg',
    caption: 'Teams Collaborating During Challenge'
  }, {
    url: 'https://i.ibb.co/BVJdBSNQ/gallery-5.jpg',
    caption: 'Prize Distribution Ceremony'
  }, {
    url: 'https://i.ibb.co/FbwGFxC4/gallery-6.jpg',
    caption: 'Senior Team – Code Combat Winners'
  }, {
    url: 'https://i.ibb.co/Fkkf8jZ7/gallery-7.jpg',
    caption: 'Opening Ceremony 2023'
  }, {
    url: 'https://i.ibb.co/PZ95qg8w/gallery-8.jpg',
    caption: 'Judge Feedback Moments'
  }, {
    url: 'https://i.ibb.co/60jcxnyq/gallery-22.jpg',
    caption: 'Teams Collaborating During Challenge'
  }, {
    url: 'https://i.ibb.co/9kJXjcv7/gallery-11.jpg',
    caption: 'Prize Distribution Ceremony'
  }

  /*
  https://i.ibb.co/FLzN4RMH/gallery-1.jpg
  https://i.ibb.co/fdHG8dzk/gallery-1.jpg
  https://i.ibb.co/qYwCNqfB/gallery-2.jpg
  https://i.ibb.co/6cCvCW4H/gallery-3.jpg
  https://i.ibb.co/BVJdBSNQ/gallery-5.jpg
  https://i.ibb.co/FbwGFxC4/gallery-6.jpg
  https://i.ibb.co/Fkkf8jZ7/gallery-7.jpg
  https://i.ibb.co/PZ95qg8w/gallery-8.jpg
  https://i.ibb.co/rf529RB6/gallery-9.jpg
  https://i.ibb.co/9kJXjcv7/gallery-11.jpg
  https://i.ibb.co/HDY7JTfP/gallery-16.jpg
  https://i.ibb.co/kVvYLHSs/gallery-17.jpg
  https://i.ibb.co/VYnN49cQ/gallery-18.jpg
  https://i.ibb.co/Mxm4kqJY/gallery-19.jpg
  https://i.ibb.co/4nvZjvDj/gallery-20.jpg
  
  */];
  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);
  const nextSlide = () => {
    setActiveIndex(prevIndex => (prevIndex + 1) % images.length);
  };
  const prevSlide = () => {
    setActiveIndex(prevIndex => (prevIndex - 1 + images.length) % images.length);
  };
  return <section id="gallery" className="py-16 relative">
      <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-[#0052D4]/10 rounded-full blur-3xl -z-10"></div>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-space font-bold mb-12 text-center text-white animate-code-reveal">
          Event <span className="text-gradient">Highlights</span> – Code Master
          1.0
        </h2>
        <div className="max-w-5xl mx-auto relative lazy-load">
          {/* Main large image */}
          <div className="relative h-[300px] md:h-[500px] overflow-hidden rounded-2xl shadow-xl border border-gray-800 futuristic-border">
            {images.map((image, index) => <div key={index} className={`absolute inset-0 transition-all duration-700 ${index === activeIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'}`}>
                <img src={image.url} alt={image.caption} className="w-full h-full object-cover" />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent p-8">
                  <p className="text-white text-lg md:text-2xl font-space font-medium">
                    {image.caption}
                  </p>
                </div>
              </div>)}
            {/* Navigation arrows */}
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-colors hover-glow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white p-3 rounded-full transition-colors hover-glow">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
          {/* Creative thumbnails with indicators */}
          <div className="mt-6 flex justify-center">
            <div className="flex items-center gap-3 bg-gray-900/70 px-4 py-2 rounded-full border border-gray-800">
              {images.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-2.5 h-2.5 rounded-full transition-all ${index === activeIndex ? 'bg-gradient-to-r from-[#0052D4] to-[#4364F7] scale-125 shadow-lg shadow-[#0052D4]/30' : 'bg-white/30 hover:bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />)}
            </div>
          </div>
          {/* Image counter */}
          <div className="absolute top-4 right-4 bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full text-sm text-white font-medium">
            {activeIndex + 1} / {images.length}
          </div>
          {/* Image preview grid - small version */}
          <div className="grid grid-cols-5 gap-2 mt-6">
            {images.map((image, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`relative overflow-hidden rounded-md transition-all ${index === activeIndex ? 'ring-2 ring-[#0052D4] ring-offset-1 ring-offset-gray-900' : 'opacity-60 hover:opacity-100'}`}>
                <div className="aspect-video">
                  <img src={image.url} alt={`Thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                </div>
                {index === activeIndex && <div className="absolute inset-0 bg-[#0052D4]/20"></div>}
              </button>)}
          </div>
        </div>
      </div>
    </section>;
};