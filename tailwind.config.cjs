const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const config = {
	content: [
    './src/**/*.{html,js,svelte,ts}'
  ],
	theme: {
    extend: {
		colors: {
            current: 'currentColor',
            sahha: {
              '800': '#292836',
              '900': '#1C1B26',
            },
            ...defaultTheme.colors,
            orange: colors.orange,
            gray: colors.gray,
            blue: colors.blue,
            rose: colors.rose,
            green: colors.emerald,
            yellow: colors.amber,
            purple: colors.violet,
          },
          fontFamily: {
              sans: ['Rubik', 'sans-serif'],
          },
          // width: {
          //   '120': '28rem',
          // }     
          },
	},

	plugins: [],
  corePlugins: {
    preflight: true,
  },
};

module.exports = config;
