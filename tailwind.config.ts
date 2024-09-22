import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      flexGrow: {
        '2': '2',
        '4': '4',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        wood: "#8B4513",
      },
    },
  },
  plugins: [],
};

export default config;