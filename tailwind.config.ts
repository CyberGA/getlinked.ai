import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './containers/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        "c-button-gradient": "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)",
        "c-text-gradient": "linear-gradient(270deg, #903AFF 0%, #D434FE 56.42%, #FF26B9 99.99%, #FE34B9 100%)"
      },
      colors: {
        "c-bg": "#150E28",
        "c-dark-bg": "#100B20",
        "c-pink": "#D434FE",
        "c-dark-pink": "#FF26B9",
        "c-purple": "#903AFF",
        "c-green": "#2DE100",
      },
      fontFamily: {
        "montserrat": ['var(--font-montserrat)']
      }
    },
  },
  plugins: [],
}
export default config
