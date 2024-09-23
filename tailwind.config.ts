import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,jsx,ts,tsx}",
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
        brown: {
          700: '#8b4513',
        },
      },
    },
  },
  plugins: [],
};

export default config;