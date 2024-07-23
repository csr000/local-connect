/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F5E5FB",
          100: "#EBD0F9",
          200: "#D4A8F2",
          300: "#BD80EB",
          400: "#A759E4",
          DEFAULT: "#6A0DAD", // Deep Purple
          600: "#5F0C9B",
          700: "#4B097B",
          800: "#37075B",
          900: "#24053C",
        },
        accent: {
          50: "#E6F9E6",
          100: "#CCF3CC",
          200: "#99E799",
          300: "#66DB66",
          DEFAULT: "#32CD32", // Lime Green
          500: "#2BB72B",
          600: "#239F23",
          700: "#1A781A",
          800: "#124F12",
          900: "#092709",
        },
      },
      backgroundImage: {
        "bg-img-1": "url('/man.jpg')",
        "bg-img-2": "url('/2-women.jpg')",
        "feature-bg": "url('/feature-bg.png')",

        pattern: "url('/3d-map.png')",
        "pattern-2": "url('/feature-bg.png')",
      },
      screens: {
        xs: "400px",
        "3xl": "1680px",
        "4xl": "2200px",
      },
      maxWidth: {
        "10xl": "1512px",
      },
      borderRadius: {
        "5xl": "40px",
      },
    },
    keyframes: {
      "accordion-down": {
        from: { height: "0" },
        to: { height: "var(--radix-accordion-content-height)" },
      },
      "accordion-up": {
        from: { height: "var(--radix-accordion-content-height)" },
        to: { height: "0" },
      },
      spotlight: {
        "0%": {
          opacity: "0",
          transform: "translate(-72%, -62%) scale(0.5)",
        },
        "100%": {
          opacity: "1",
          transform: "translate(-50%,-40%) scale(1)",
        },
      },
      shimmer: {
        from: {
          backgroundPosition: "0 0",
        },
        to: {
          backgroundPosition: "-200% 0",
        },
      },
      moveHorizontal: {
        "0%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
        "50%": {
          transform: "translateX(50%) translateY(10%)",
        },
        "100%": {
          transform: "translateX(-50%) translateY(-10%)",
        },
      },
      moveInCircle: {
        "0%": {
          transform: "rotate(0deg)",
        },
        "50%": {
          transform: "rotate(180deg)",
        },
        "100%": {
          transform: "rotate(360deg)",
        },
      },
      moveVertical: {
        "0%": {
          transform: "translateY(-50%)",
        },
        "50%": {
          transform: "translateY(50%)",
        },
        "100%": {
          transform: "translateY(-50%)",
        },
      },
      scroll: {
        to: {
          transform: "translate(calc(-50% - 0.5rem))",
        },
      },
    },
    animation: {
      "accordion-down": "accordion-down 0.2s ease-out",
      "accordion-up": "accordion-up 0.2s ease-out",
      spotlight: "spotlight 2s ease .75s 1 forwards",
      shimmer: "shimmer 2s linear infinite",
      first: "moveVertical 30s ease infinite",
      second: "moveInCircle 20s reverse infinite",
      third: "moveInCircle 40s linear infinite",
      fourth: "moveHorizontal 40s ease infinite",
      fifth: "moveInCircle 20s ease infinite",
      scroll: "scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite",
    },
  },

  plugins: [],
};
