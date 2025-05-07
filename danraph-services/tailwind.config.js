/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'lg-custom': { min: '1024px', max: '1232px' },
        'lg-custo': { min: '1024px', max: '1131px' },
        'small': { max: '1347px' },
        'medium': {min:'1023px', max:'1229px'},
        'foot':{min:'640', max:'1256px'},
        'log':{ min:'1024px', max:'1174px' },
        'nav': { min: '1046px' },
        'na': { max: '366px' },
        'naa': { max: '390px' },
        'footer':{ max:'316px' },
        'flex':{min: '768px', max: '984px'},
        'flexx':{min: '885px', max: '984px'},
        'fle':{min: '1046px', max: '1204px'},
        'f':{max: '450px'},
        'm':{min: '451px'},
        'g':{min: '561px'},
        'mm':{ max:'560px'},
        'med': {min:'342px', max:'639px'},
        'me': {min:'384px', max:'639px'},
      },

     
    },
  },
  plugins: [],
}

