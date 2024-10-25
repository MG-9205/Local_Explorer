const flowbite = require("flowbite-react/tailwind");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "dark-bg": "#0a0a23", // Background to match your screenshot
        "purple-gradient":
          "linear-gradient(to right, #0F0C29, #302B63, #24243E)",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
