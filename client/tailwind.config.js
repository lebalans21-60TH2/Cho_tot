/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      borderWidth: {
        'custom': '14px 13px 14px 0',
      },
      borderColor: theme => ({
        'custom-arrow': 'transparent #f1f1f1 transparent transparent',
      }),
      screens: {
        "1000px": "1050px",
        "1100px": "1110px",
        "800px": "800px",
        "1300px": "1300px",
        "430px":"430px",
        "400px":"400px",
        "390px":"390px",
        "375px":"375px",
        "360px":"360px"
      },
    },
    textShadow: {
      'white': 'rgb(255, 255, 255) 0px 0px',
    },
    boxShadow: {
      bl:'0px 0px 3px 3px rgba(0, 0, 0, 0.15)',
      lbl:'0px 0px 3px 3px rgba(0.15, 0, 0, 0.35)',
      bdpd:'0 0 11px rgba(33,33,33,.2)',
    }
  },
  plugins: [
    require("flowbite/plugin"),
  ],
};
