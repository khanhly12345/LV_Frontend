/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./node_modules/flowbite/**/*.js"],
  theme: {
    extend: {
		spacing: {
			'200': '600px',
			'125' : '1500px',
			'500px' : '570px'
		},

	},

  },
  plugins: [require("flowbite/plugin")],
});
