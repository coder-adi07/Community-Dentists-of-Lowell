/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dental: {
          navy: {
            DEFAULT: "#102D46",
            50: "#EEF6FC",
            100: "#D7ECF7",
            200: "#B3DAEF",
            700: "#1E4C73",
            800: "#163857",
            900: "#102D46",
            950: "#0A1C2C",
          },
          blue: {
            DEFAULT: "#2476A8",
            50: "#EAF5FB",
            100: "#D5EDF8",
            200: "#AEDBF1",
            300: "#76C0E7",
            400: "#38A0D9",
            500: "#2476A8",
            600: "#1D6490",
            700: "#185175",
          },
          sky: "#EAF5FB",
          neutral: "#F5F8FA",
          accent: "#0D9488",
          turquoise: "#14B8A6",
          gold: "#EAB308",
        },
      },
      fontFamily: {
        sans: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
        display: ["var(--font-plus-jakarta)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(16, 45, 70, 0.06), 0 2px 6px -1px rgba(16, 45, 70, 0.04)',
        'premium': '0 20px 40px -15px rgba(16, 45, 70, 0.08), 0 0 1px 1px rgba(16, 45, 70, 0.05)',
        'elevated': '0 25px 50px -12px rgba(16, 45, 70, 0.15)',
        'glow': '0 0 25px rgba(36, 118, 168, 0.25)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseSlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        pulseSlow: 'pulseSlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

