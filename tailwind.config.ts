import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: "#2F8DCA",
          deep: "#176FA8",
          navy: "#102A43",
          brick: "#B33A1C",
          orange: "#D96B27",
          concrete: "#F3F4F6",
          steel: "#6B7280"
        }
      },
      boxShadow: {
        soft: "0 20px 50px rgba(16, 42, 67, 0.10)",
        card: "0 12px 35px rgba(16, 42, 67, 0.08)"
      },
      borderRadius: {
        xl2: "1.25rem"
      }
    }
  },
  plugins: []
};

export default config;
