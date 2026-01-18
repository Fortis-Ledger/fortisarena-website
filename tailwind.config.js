/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        border: 'var(--color-border)', // gray-200
        input: 'var(--color-input)', // gray-50
        ring: 'var(--color-ring)', // cyan-400
        background: 'var(--color-background)', // gray-50
        foreground: 'var(--color-foreground)', // gray-900
        primary: {
          DEFAULT: 'var(--color-primary)', // black
          foreground: 'var(--color-primary-foreground)', // white
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)', // slate-900
          foreground: 'var(--color-secondary-foreground)', // white
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)', // red-500
          foreground: 'var(--color-destructive-foreground)', // white
        },
        muted: {
          DEFAULT: 'var(--color-muted)', // gray-100
          foreground: 'var(--color-muted-foreground)', // gray-500
        },
        accent: {
          DEFAULT: 'var(--color-accent)', // cyan-400
          foreground: 'var(--color-accent-foreground)', // black
        },
        popover: {
          DEFAULT: 'var(--color-popover)', // white
          foreground: 'var(--color-popover-foreground)', // gray-900
        },
        card: {
          DEFAULT: 'var(--color-card)', // gray-100
          foreground: 'var(--color-card-foreground)', // gray-900
        },
        success: {
          DEFAULT: 'var(--color-success)', // emerald-500
          foreground: 'var(--color-success-foreground)', // white
        },
        warning: {
          DEFAULT: 'var(--color-warning)', // amber-500
          foreground: 'var(--color-warning-foreground)', // white
        },
        error: {
          DEFAULT: 'var(--color-error)', // red-500
          foreground: 'var(--color-error-foreground)', // white
        },
        // Enhanced Gaming Theme Colors
        'gaming-dark': 'var(--color-gaming-dark)', // Deep space black
        'gaming-secondary': 'var(--color-gaming-secondary)', // Dark blue secondary
        'gaming-tertiary': 'var(--color-gaming-tertiary)', // Medium dark
        'electric-blue': 'var(--color-electric-blue)', // Bright electric blue
        'neon-purple': 'var(--color-neon-purple)', // Vibrant purple
        'neon-pink': 'var(--color-neon-pink)', // Hot pink
        'neon-green': 'var(--color-neon-green)', // Bright green
        'golden-cta': 'var(--color-golden-cta)', // Gold
        'cyber-orange': 'var(--color-cyber-orange)', // Cyber orange
        'matrix-green': 'var(--color-matrix-green)', // Matrix green
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
        'sans': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'electric-pulse': 'electric-pulse 2s infinite',
        'cyber-pulse': 'cyber-pulse 3s infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-glow': 'float-glow 4s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'matrix-scroll': 'matrix-scroll 20s linear infinite',
        'holographic-shift': 'holographic-shift 8s ease-in-out infinite',
        'neon-flicker': 'neon-flicker 2s ease-in-out infinite',
      },
      keyframes: {
        'electric-pulse': {
          '0%, 100%': {
            transform: 'scale(1)',
            boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)',
          },
          '50%': {
            transform: 'scale(1.02)',
            boxShadow: '0 0 30px rgba(0, 212, 255, 0.5)',
          },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow': {
          '0%': { boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)' },
          '100%': { boxShadow: '0 0 30px rgba(0, 212, 255, 0.6)' },
        },
      },
      backdropBlur: {
        'gaming': '20px',
      },
      boxShadow: {
        'gaming': '0 4px 20px rgba(0, 212, 255, 0.15)',
        'gaming-hover': '0 8px 30px rgba(0, 212, 255, 0.25)',
        'neon': '0 0 20px rgba(138, 43, 226, 0.4)',
        'golden': '0 4px 20px rgba(255, 215, 0, 0.3)',
      },
      borderRadius: {
        'gaming': '12px',
      },
      transitionTimingFunction: {
        'gaming': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
}