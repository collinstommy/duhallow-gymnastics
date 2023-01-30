/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: colors.orange['500'],
				dark: colors.gray['900']
			},
		},
	},
	plugins: [],
}
