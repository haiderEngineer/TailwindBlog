/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}", "./node_modules/flowbite/**/*.js"],
  theme: {
    fontFamily: {
      space: ["Space Grotesk"],
    },
    extend: {
      colors: {
        "black-1000": "#030711",
        "black-2000": "#061C3D",
        "black-3000": "#121127",
        "black-4000": "#283646",
        "gray-1000": "#6B7280",
        "gray-2000": "#9CA3AF",
        "gray-3000": "#6A778B",
        "pink-1000": "#F472B6",
        "pink-2000": "#ff0084",
        "purple-1000": "#6366F1",
        "blue-1000": "#3dc6e0",
      },

      boxShadow: {
        "3xl": "0px 0px 15px 5px rgba(214,214,214,0.75)",
      },
      screens: {
        xss: "375px",
        // => @media (min-width: 375px) { ... }

        xs: "414px",
        // => @media (min-width: 414px) { ... }

        sm: "576px",
        // => @media (min-width: 575px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "992px",
        // => @media (min-width: 992px) { ... }

        xl: "1200px",
        // => @media (min-width: 1200px) { ... }

        "2xl": "1366px",
        // => @media (min-width: 1440px) { ... }

        "3xl": "1600px",
        // => @media (min-width: 1600px) { ... }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
