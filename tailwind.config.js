/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      textShadow: {
        'glow': '0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 255, 0.6)',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'], // Adding Playfair Display to Tailwind CSS
        montserrat: ['Montserrat', 'sans-serif'], // Adding Montserrat to Tailwind CSS
      },
    },
  },
  plugins: [
    require('tailwindcss-textshadow') // Install the plugin if not already installed
  ],
};
