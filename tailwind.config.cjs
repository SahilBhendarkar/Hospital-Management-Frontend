/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      /* COLORS */
      colors: {
        "blue-ribbon": {
          50: "#eff4ff",
          100: "#dbe6fe",
          200: "#bfd3fe",
          300: "#93b4fd",
          400: "#6090fa",
          500: "#3b76f6",
          600: "#2563eb",
          700: "#1d58d8",
          800: "#1e4baf",
          900: "#1e408a",
          950: "#172a54",
        },

        "mountain-meadow": {
          50: "#ecfdf7",
          100: "#d1faec",
          200: "#a7f3da",
          300: "#6ee7bf",
          400: "#34d39e",
          500: "#10b981",
          600: "#059666",
          700: "#047852",
          800: "#065f42",
          900: "#064e36",
          950: "#022c1e",
        },
      },

      animation: {
        "spin-slow": "spin 50s linear infinite",
      },
    },
  },
  plugins: [],
};
