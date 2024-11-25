// tailwind.config.ts
import type {Config} from 'tailwindcss'

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: '#DE4F4F',
          50: '#FAE6E6',
          100: '#F7D4D4',
          200: '#F0AFAF',
          300: '#EA8B8B',
          400: '#E46666',
          500: '#DE4F4F', // Your main brand color
          600: '#C42D2D',
          700: '#952222',
          800: '#661717',
          900: '#380D0D',
        },
        // Complementary neutral colors
        surface: {
          50: '#FAFAFA',
          100: '#F4F4F5',
          200: '#E4E4E7',
          300: '#D4D4D8',
          400: '#A1A1AA',
          500: '#71717A',
          600: '#52525B',
          700: '#3F3F46',
          800: '#27272A',
          900: '#18181B',
        },
      },
    },
  },
  plugins: [],
}

export default config
