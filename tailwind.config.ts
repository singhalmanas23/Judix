import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "custom-blue":"#1B72B1",
        "cust-blue":"#0B2C4B",
        "cust-gray":"#455A64",
        "custom-gray":"#8F8D8E",
        "exp-col":"#6986D9",
        "chat-gray":"#7091A1"
        
      },
    },
  },
  plugins: [],
};
export default config;
