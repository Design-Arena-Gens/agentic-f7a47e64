import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        muscle: "#fd3a69",
        slateDeep: "#0b1026"
      },
      backgroundImage: {
        "radial-grid":
          "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.08), transparent 55%), radial-gradient(circle at 80% 0%, rgba(253,58,105,0.12), transparent 45%)"
      }
    }
  },
  plugins: []
};

export default config;
