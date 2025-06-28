/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#0A0A14',
          light: '#12121F',
          lighter: '#1A1A2E',
        },
        primary: {
          DEFAULT: '#6C63FF',
          dark: '#5046E5',
          light: '#8A83FF',
        },
        secondary: {
          DEFAULT: '#FF6584',
          dark: '#E54B6A',
          light: '#FF85A0',
        },
        accent: {
          DEFAULT: '#00C2FF',
          dark: '#00A3DB',
          light: '#40D4FF',
        },
        success: {
          DEFAULT: '#4ADE80',
          dark: '#22C55E',
          light: '#86EFAC',
        },
        warning: {
          DEFAULT: '#FACC15',
          dark: '#EAB308',
          light: '#FDE047',
        },
        error: {
          DEFAULT: '#F87171',
          dark: '#EF4444',
          light: '#FCA5A5',
        },
        text: {
          primary: '#FFFFFF',
          secondary: '#A0A0CF',
          muted: '#6B7280',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      backdropBlur: {
        xs: '2px',
        sm: '4px',
        md: '8px',
        lg: '12px',
        xl: '16px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'fade-in': 'fadeIn 0.5s ease-in',
        'slide-up': 'slideUp 0.5s ease-out',
        'star-movement-bottom': 'star-movement-bottom linear infinite alternate',
        'star-movement-top': 'star-movement-top linear infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(108, 99, 255, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(108, 99, 255, 0.8)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        'star-movement-bottom': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(-100%, 0%)', opacity: '0' },
        },
        'star-movement-top': {
          '0%': { transform: 'translate(0%, 0%)', opacity: '1' },
          '100%': { transform: 'translate(100%, 0%)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};