/** @type {import('tailwindcss').Config} */
module.exports = {
  important: true,
  content: [],
  purge: [
    './src/**/*.html',
    './src/**/*.vue',
    './src/**/*.jsx',
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#00FFFF",
        customPurple: "#ff017d",
        customWhite:"#ffffff",
        textCol:"#a6a6a6",
        customGold:"#d7d23f",
        customGray:"#1d212c",
        customBlack:"#1f1f1f",
        customGreen:"#60ffd9",
        customForest:"#228B22",
        Charcoal: "#36454F",
        Navy: "#001F3F",
        whitesmoke:"#DCDCDC",
        Midnight: "#004953",
        Hunter: "#355E3B",
        lime: {
          50: '#f7fee7',
          100: '#ecfccb',
          200: '#d9f99d',
          300: '#bef264',
          400: '#a3e635',
          500: '#84cc16', // Main lime green
          600: '#65a30d',
          700: '#4d7c0f',
          800: '#3f6212',
          900: '#365314',
        },
        mint: {
          50: '#f4faf7',
          100: '#e5f7f1',
          200: '#c3ece1',
          300: '#8fd6bd',
          400: '#63c4a8',
          500: '#38a89d', // Main mint green
          600: '#2a887f',
          700: '#1e6b63',
          800: '#184c4d',
          900: '#143b3a',
        },
        chartreuse: {
          50: '#f8fdf2',
          100: '#f0f9e6',
          200: '#d8f48a',
          300: '#a9e34b',
          400: '#7dd158',
          500: '#52c41a', // Main chartreuse
          600: '#389e0d',
          700: '#287b07',
          800: '#1e5303',
          900: '#143a02',
        },
        seafoam: {
          50: '#f0f9f5',
          100: '#dcf1eb',
          200: '#a7e7d0',
          300: '#67c79c',
          400: '#34bfa3',
          500: '#2e8b57', // Main seafoam green
          600: '#236c4d',
          700: '#1c513d',
          800: '#173b31',
          900: '#0f2924',
        },
        spring: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ae387',
          500: '#FF007F', // Main spring green
          600: '#00cc66',
          700: '#00994d',
          800: '#006b38',
          900: '#00451e',
        },
      },
      fontFamily: {
        sans: ['Proxima Nova', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
      },
      truncate: {
        lines: {
          2: '2',
          3: '3',
          4: '4',
        },
      },
      screens: {
        'sm': '150px',
        'md': '768px',
        'lg': '992px',
        'xl': '1100px',
      },
      fontSize: {
        'xs': '.75rem',     // 12px
        'sm': '.875rem',    // 14px
        'base': '1rem',     // 16px
        'lg': '1.125rem',   // 18px
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
        '6xl': '4rem',      // 64px
        '7xl': '5rem',
        '8xl': '6rem',
      },
      fontWeight: {
        'light': 300,
        'normal': 400,
        'medium': 500,
        'semibold': 600,
        'bold': 700,
        'extrabold': 800,
        'black': 900,
      },
      lineHeight: {
        'none': 1,
        'tight': 1.25,
        'normal': 1.5,
        'loose': 2,
      },
      letterSpacing: {
        'tight': '-0.05em',
        'normal': '0',
        'wide': '0.05em',
      },
      maxWidth: {
        'xxs': '15rem',
        'xs': '20rem',
        'sm': '30rem',
        'md': '40rem',
        'lg': '50rem',
        'xl': '60rem',
        '2xl': '70rem',
        '3xl': '80rem',
        '4xl': '90rem',
        '5xl': '100rem',
        'full': '100%',
      },    
    },
  },
  plugins: [],
}

