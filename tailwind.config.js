/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark: "#121212",
        lightDark: "#171717",
        shade: "#F8F8F8",
      },
      textColor: {
        disable: "#CECECE",
        primary1:"#0A0A0A",
      },
      colors: {
        primary: "#F72585",
        primary1:"#0A0A0A",
        grey: "#8F92A1",
        greyText: "#595959",
        greyText2: "#505050",
        textBlack: "#010101",
        checkbox:'#6A6A6A',
        table:'#171717',
        model:'#121212',
        field: "rgba(255, 255, 255, 0.05)",
        lightWhite: "rgba(255, 255, 255, 0.6)",
        btnFrom: "rgba(255, 61, 0, 0.88)",
        btnTo: "rgba(228, 41, 130, 0.85)",
        cardFrom:"rgba(228, 41, 130, 0.35)",
        cardTo:"rgba(90, 24, 154, 0.35)",
        red:'#DE350B',
        green:"#00875A",
        blue:"#0052CC",
        sharpGreen:"#1EFF86",
        barColor:"#D9D9D9",
        lightWhite:"#FFFFFF99",
        lightPink:"#FFADC7"
      },
      
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      popins:[''],
    },
      boxShadow: {
        form: "80px 120px 504px 0px rgba(0, 0, 0, 0.16)",
      },
      screens: {
        'sm': '640px',
        // => @media (min-width: 640px) { ... }
  
        'md': '768px',
        // => @media (min-width: 768px) { ... }
  
        'lg': '1024px',
        // => @media (min-width: 1024px) { ... }
  
        'xl': '1280px',
        // => @media (min-width: 1280px) { ... }
  
        '2xl': '1536px',
        // => @media (min-width: 1536px) { ... }
      }
    },
  },
  plugins: [],
};
