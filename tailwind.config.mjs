/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        "shorten-desktop": "url('/images/bg-shorten-desktop.svg')",
        "shorten-mobile": "url('/images/bg-shorten-mobile.svg')",
        "boost-desktop": "url('/images/bg-boost-desktop.svg')",
        "boost-mobile": "url('/images/bg-boost-mobile.svg')",
      },
    },
  },
  plugins: [],
};
