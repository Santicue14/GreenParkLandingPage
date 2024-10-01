/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors:{
				lightGreen:" #4dc247",
				lighterGreen: '#76d667',
				lightestGreen: '#a6e891',
				darkGreen: '#3a9a35',
				darkerGreen: '#287329',
				darkestGreen: '#1b4f1e',
				offWhite: '#f7f7f7',
				white: '#ffffff',
				grayLight: '#e0e0e0',
				grayDark: '#999999',
			}
		},
	},
	plugins: [],
}
