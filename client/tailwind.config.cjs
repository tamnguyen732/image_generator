module.exports = {
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '480px'
      },
      fontFamily: {
        inter: ['Inter var', 'sans-serif']
      },
      boxShadow: {
        card: '0 0 1px 0 rgba(189,192,207,0.06),0 20px 16px -1px rgba(189,192,207,0.2)',
        cardhover: '0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)'
      },
      animation: {
        zoomIn: 'zoomIn 250ms ease'
      },
      keyframes: {
        zoomIn: {
          from: {
            opacity: 0,
            transform: 'scale(0.85)'
          },
          to: {
            opacity: 1,
            transform: 'scale(1)'
          }
        }
      }
    }
  },
  plugins: []
};
