// tailwind.config.js
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Add all your source files here
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'sans-serif'],  // Change 'Arial' to your desired font family
      },
      colors: {
        lightGrayBg: '#3A3B3F',  
        darkGrayBg: '#37383C',  
        orangeCustom: '#FF662D',
        brownCustom: '#464646',
        redCustom: '#FD2331',
        darkGrayCustom: '#4E4F53'
      },
    },
  },
  plugins: [],
}
