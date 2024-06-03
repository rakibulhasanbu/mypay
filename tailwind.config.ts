import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#4B86FC",
        secondary: "#75F2F6",
      },
      backgroundImage: {
        bg: "url('/bg.jpeg')",
      },
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
export default config;
