/** @type {import('tailwindcss').Config} */
module.exports = {
content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Esto cubre TODO dentro de src
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Aquí configuramos tu color de marca para usarlo como clase (ej: text-brand)
        brand: "#2D3436",
        accent: "#4A69BD",
      },
      fontFamily: {
        // Estas son las variables que configuramos en el layout.js
        serif: ['var(--font-serif)', 'serif'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
};