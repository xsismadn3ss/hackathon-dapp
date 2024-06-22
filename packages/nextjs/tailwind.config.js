/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}", "./utils/**/*.{js,ts,jsx,tsx}"],
  plugins: [require("daisyui")],
  darkTheme: "dark",
  darkMode: ["selector", "[data-theme='dark']"],
  // DaisyUI theme colors
  daisyui: {
    themes: [
      {
        light: {
          primary: "#A690DA",
          "primary-content": "#2A2138",
          secondary: "#A690DA",
          "secondary-content": "#101010",
          accent: "#101010",
          "accent-content": "#101010",
          neutral: "#2A2138",
          "neutral-content": "#777",
          "base-100": "#ffffff",
          "base-200": "#f4f8ff",
          "base-300": "#A690DA",
          "base-content": "#2A2138",
          info: "#4C4579",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
      {
        dark: {
          primary: "#2C2345",
          "primary-content": "#59ED98",
          secondary: "#413261",
          "secondary-content": "#F9FBFF",
          accent: "#AE6EFF",
          "accent-content": "#59ED98",
          neutral: "#59ED98",
          "neutral-content": "#4F3883",
          "base-100": "#261942",
          "base-200": "#1C1734",
          "base-300": "#2C2345",
          "base-content": "#59ED98",
          info: "#4F3883",
          success: "#34EEB6",
          warning: "#FFCF72",
          error: "#FF8863",

          "--rounded-btn": "9999rem",

          ".tooltip": {
            "--tooltip-tail": "6px",
            "--tooltip-color": "oklch(var(--p))",
          },
          ".link": {
            textUnderlineOffset: "2px",
          },
          ".link:hover": {
            opacity: "80%",
          },
        },
      },
    ],
  },
  theme: {
    extend: {
      boxShadow: {
        center: "0 0 12px -2px rgb(0 0 0 / 0.05)",
      },
      animation: {
        "pulse-fast": "pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
    },
  },
};
