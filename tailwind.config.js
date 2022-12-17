/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './features/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['IBM Plex Sans', ...defaultTheme.fontFamily.sans],
				header: ['IBM Plex Sans Condensed', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: '#c69963',
				'primary-dark': '#b28451',
				secondary: '#101d2c',
			},
		},
	},
	plugins: [require('@tailwindcss/typography')],
};
