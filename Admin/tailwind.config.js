/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      screens: {
        'mm':{ min:'557px'},
        'le':{ min:'639px', max:'797px'},
        'lee':{ min:'1058px'},
        'leee':{ min:'1058px', max: '1307px'},

      },

    },
  },
  plugins: [],
}

1