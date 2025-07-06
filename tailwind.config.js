export default {content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        primary: '#0F8FFF',
        secondary: '#B980FF',
        dark: {
          950: '#0A0E17',
          900: '#0F172A',
          800: '#1E293B'
        }
      },
      fontFamily: {
        blinker: ['Blinker', 'sans-serif'],
        space: ['Space Grotesk', 'sans-serif']
      }
    }
  }
}