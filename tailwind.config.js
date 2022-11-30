/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'darkCyan': 'hsl(185, 75%, 39%)',
        'veryDarkDesaturated': 'hsl(229, 23%, 23%)',
        'darkGrayish': 'hsl(227, 10%, 46%)',
        'darkGray': 'hsl(0, 0%, 59%)'
      },
      fontFamily: {
        kumbhSans: "var(--font-kumbh-sans)"
      }
    },
  },
  plugins: [],
}
