import React, { createElement } from 'react';
import './index.css';
import { render } from 'react-dom';
import { App } from './App';
// Preload critical fonts
const preloadFonts = () => {
  const fontLinks = [{
    href: 'https://fonts.googleapis.com/css2?family=Blinker:wght@400;700&display=swap',
    rel: 'preload',
    as: 'style'
  }, {
    href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap',
    rel: 'preload',
    as: 'style'
  }];
  fontLinks.forEach(font => {
    const link = document.createElement('link');
    link.href = font.href;
    link.rel = font.rel;
    link.as = font.as;
    document.head.appendChild(link);
    // Also add as standard link
    const standardLink = document.createElement('link');
    standardLink.href = font.href;
    standardLink.rel = 'stylesheet';
    document.head.appendChild(standardLink);
  });
};
// Call preload before rendering
preloadFonts();
render(<App />, document.getElementById('root'));