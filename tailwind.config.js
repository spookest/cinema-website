/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			fontFamily: {
				sofia: ["'Sofia Sans', sans-serif"],
				bakbak: ["Bakbak One"],
				ubuntu: ["Ubuntu"],
			},
			screens: {
				xs: "320px",
			},
			// backgroundImage: {
			// 	'movie-1': "url('')"
			// 	'movie-2': "url('')"
			// 	'movie-3': "url('')"
			// 	'movie-4': "url('')"
			// 	'movie-5': "url('')"
			// 	'movie-6': "url('')"
			// 	'movie-7': "url('')"
			// 	'movie-8': "url('')"
			// }
		},
	},
	corePlugins: {
		aspectRatio: false,
	},
	plugins: [
		require("@tailwindcss/aspect-ratio"),
		require("@tailwindcss/line-clamp"),
	],
};
