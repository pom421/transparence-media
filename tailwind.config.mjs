/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: "selector",
	theme: {
		fontFamily: {
			sans: ["Quicksand", "sans-serif"],
			julius: ["Julius Sans One", "sans-serif"],
			convergence: ["Convergence", "sans-serif"]
		},
		extend: {},
	},
	plugins: [
		require('@tailwindcss/typography'),
	],
}
