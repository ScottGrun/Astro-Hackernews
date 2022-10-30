const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["InterVariable", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        background: "#F7F8FD",
        "primary-header": "#3A4374",
        "primary-text": "#647196",
        "pill-background": "#F2F4FF",
        "interactive-primary": "#4661E6",
      },
      backgroundImage: {
        "header-gradient": "url('/src/icons/gradient.svg')",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
