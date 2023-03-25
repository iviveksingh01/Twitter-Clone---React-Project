/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        twitter:'#00ADED',
        backblue:"#002841"
      },
      backgroundImage: {
        'twitterBackground': "url('../public/images/twitter-home-logo.jpg')",
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
