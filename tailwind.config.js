/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" }
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" }
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" }
        },
        pulseSlow: {
          "0%, 100%": { opacity: 0.45 },
          "50%": { opacity: 1 }
        }
      },
      animation: {
        marquee: "marquee 24s linear infinite",
        shimmer: "shimmer 2.2s linear infinite",
        float: "float 6s ease-in-out infinite",
        pulseSlow: "pulseSlow 3s ease-in-out infinite"
      },
      boxShadow: {
        glow: "0 0 35px rgba(59,130,246,0.22)",
        soft: "0 12px 40px rgba(15,23,42,0.12)"
      }
    }
  },
  plugins: []
};
