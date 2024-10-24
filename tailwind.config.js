/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
      // "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors:{mainColor:'#FF5A00'},
      backgroundColor:{bgColor:'#FF5A00'},
      borderColor:{bdColor:'#FF5A00'},
      fontFamily:{mainFont:['Poppins', 'sans-serif'],secondFont:["Redressed", 'cursive'],thirdFont:["Potta One", 'system-ui']}
    },
  },
  plugins: [
    require('flowbite/plugin') 
  ],
}