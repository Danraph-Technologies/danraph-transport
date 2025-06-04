/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      screens: {
        mm: {
          min: "500px",
          max: "767px",
        } /* for the grid for mobile screen in dashboard.jsx */,
        le: {
          min: "1058px",
          max: "1302px",
        } /* for the grid in dashboard.jsx */,
        lee: { min: "1058px" } /* for the right menue in dashboard.jsx */,
        leee: {
          min: "1058px",
          max: "1307px",
        } /* for the table in dashboard.jsx */,
        leeee: { max: "1023px" } /* for the table in dashboard.jsx */,
        f: { max: "450px" },
        fa: { min: "810px" },
      },
    },
  },
  plugins: [],
};

1;
