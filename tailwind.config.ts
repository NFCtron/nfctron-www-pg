import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f3f3fc",
          100: "#e6e5f9",
          200: "#d1cff2",
          300: "#b4b3eb",
          500: "#3246d1",
          600: "#0f2da4",
          700: "#0e1c69",
          900: "#0b0e38",
        },
        accent: {
          50: "#f3f5ff",
          100: "#e5e9ff",
          200: "#cbd3ff",
          500: "#4f6bea",
          600: "#3246d1",
        },
        aqua: {
          50: "#f5f6fa",
          100: "#e9edf5",
          200: "#d7dce7",
          500: "#7a7de0",
          600: "#3246d1",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "system-ui", "sans-serif"],
        display: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
