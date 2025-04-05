/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#5D9B9B',
          rgb: '93,155,155',
          contrast: '#ffffff',
          shade: '#4a7a7a',
          tint: '#7fb1b1'
        },
        secondary: {
          DEFAULT: '#F1C40F',
          rgb: '241,196,15',
          contrast: '#000000',
          shade: '#e0b70f',
          tint: '#f4d14d'
        },
        tertiary: {
          DEFAULT: '#1ABC9C',
          rgb: '26,188,156',
          contrast: '#ffffff',
          shade: '#17a28a',
          tint: '#4fc8b5'
        },
        success: {
          DEFAULT: '#22C55E',
          rgb: '34,197,94',
          contrast: '#ffffff',
          shade: '#1ead53',
          tint: '#38cb6e'
        },
        warning: {
          DEFAULT: '#F39C12',
          rgb: '243,156,18',
          contrast: '#000000',
          shade: '#e08e0d',
          tint: '#f6b62f'
        },
        danger: {
          DEFAULT: '#E74C3C',
          rgb: '231,76,60',
          contrast: '#ffffff',
          shade: '#c73d36',
          tint: '#ec5b53'
        },
        light: {
          DEFAULT: '#F8F9F9',
          rgb: '248,249,249',
          contrast: '#000000',
          shade: '#e3e4e5',
          tint: '#f9fafa'
        },
        medium: {
          DEFAULT: '#BDC3C7',
          rgb: '189,195,199',
          contrast: '#ffffff',
          shade: '#a6acb1',
          tint: '#c5ccd1'
        },
        dark: {
          DEFAULT: '#34495E',
          rgb: '52,73,94',
          contrast: '#ffffff',
          shade: '#2c3e50',
          tint: '#506c7f'
        }
      }
    },
  },
  plugins: [],
}

