/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'raleway': ['Raleway', 'sans'],
      },
      zIndex: {
        '100': '100',
        '200': '200',
        // ... add more values if necessary
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(29, 24, 80, 1) 20%, rgba(15, 111, 123, 1) 61%, rgba(1, 4, 20, 1) 95%)',
      },
      // ... other extensions if needed
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}


