/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,ts,jsx,tsx}',
		'./pages/**/*.{js,ts,jsx,tsx}',
		'./components/**/*.{js,ts,jsx,tsx}',

		// Or if using `src` directory:
		'./src/**/*.{js,ts,jsx,tsx}',
	],
	theme: {
		extend: {
			theme: {
				light: '#f2f2e6',
				dark: '#07020a',
			},
			colors: {
				haliteBlue: {
					50: '#dfbdd2',
					100: '#cb98c7',
					200: '#825ca5',
					300: '#373282',
					400: '#182e62',
					500: '#0a2b48',
					600: '#042234',
					700: '#021725',
					800: '#020d1a',
					900: '#020611',
				},
				curedEggplant: {
					50: '#dcc0bb',
					100: '#c69696',
					200: '#9b596e',
					300: '#742f58',
					400: '#521648',
					500: '#360937',
					600: '#1f0424',
					700: '#120217',
					800: '#0b0110',
					900: '#08010c',
				},
				chocolateCastle: {
					50: '#dfdcbd',
					100: '#ccc699',
					200: '#a79a5e',
					300: '#847034',
					400: '#654919',
					500: '#4b2a0b',
					600: '#371405',
					700: '#270603',
					800: '#1b0207',
					900: '#120209',
				},
				gameboyContrast: {
					50: '#c6dcbb',
					100: '#a0c696',
					200: '#5b9b59',
					300: '#2f7434',
					400: '#16521b',
					500: '#0a3709',
					600: '#0c2404',
					700: '#0f1702',
					800: '#101001',
					900: '#0c0601',
				},
			},
		},
	},
	plugins: [],
}
