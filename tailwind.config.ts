import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/layoutes/**/*.{ts,tsx}",
    "./src/features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: "inter",
        "pt-sans": "pt-sans",
      },
      screens: {
        s375: "375px",
        s390: "390px",
        s412: "412px",
        s430: "430px",
        s1280: "1280px",
        s1512: "1512px",
        s1600: "1600px",
        s1728: "1728px",
        s1920: "1920px",
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
