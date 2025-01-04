/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      borderRadius: {
        customLg: "40px"
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #B06AB3, #4568DC)',
        'purple-gradient': 'linear-gradient(#9418fd, #571094)',
      },
    },
  },
  plugins: [],
}

