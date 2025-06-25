import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "nautical-blue": "#0B2948",
        "ami-sand": "#F0EBE3",
        "digital-teal": "#00A79D",
        "solar-flare-coral": "#FF6F61",
        "charcoal-gray": "#4A4A4A",
        "gray-blue": "#272B36",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
        heading: ["Montserrat", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 8s linear infinite",
        "bounce-slow": "bounce 3s infinite",
        float: "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.8s ease-out forwards",
        "float-slow": "float-slow 8s ease-in-out infinite",
        "float-reverse": "float-reverse 10s ease-in-out infinite",
        "pulse-subtle": "pulse-subtle 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(10deg)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(-30px) translateX(20px)" },
        },
        "float-reverse": {
          "0%, 100%": { transform: "translateY(0px) translateX(0px)" },
          "50%": { transform: "translateY(30px) translateX(-20px)" },
        },
        "pulse-subtle": {
          "0%, 100%": { opacity: "0.3" },
          "50%": { opacity: "0.6" },
        },
        "pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 20px rgba(255, 111, 97, 0.5)" },
          "50%": {
            boxShadow:
              "0 0 40px rgba(255, 111, 97, 0.8), 0 0 60px rgba(255, 111, 97, 0.3)",
          },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      boxShadow: {
        "solar-flare-coral/50": "0 25px 50px -12px rgba(255, 111, 97, 0.5)",
      },
    },
  },
  plugins: [],
};

export default config;
