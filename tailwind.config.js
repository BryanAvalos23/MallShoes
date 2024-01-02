/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			screens: {
				'sm': '320px',  // Cambia el valor según tus necesidades
				'md': '640px',
				'lg': '768px',
				'xl': '1024px'
			}
		},
	},
	plugins: [],
}

