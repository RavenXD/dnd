/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Prompt", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        "dd-main-bg": "#111319",
        "dd-section-bg": "#15171C",
        "dd-primary": "#DD4242",
        "dd-grey": "#717171",
        "dd-card-grey": "#1D1E22",
        "dd-text-grey": "#B5B5B5",
      },
      keyframes: {
        imgbounce: {
          "0%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "img-bounce": "imgbounce 16s linear infinite",
      },
      backgroundImage: {
        "detail-img": "url('/service-detail.jpg')",
      },
    },
  },
  plugins: [],
};
