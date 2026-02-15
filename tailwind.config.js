/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive) / <alpha-value>)",
          foreground: "hsl(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // Breaking Bad Theme Colors
        'bb-black': '#0D0D0D',
        'bb-charcoal': '#1A1A1A',
        'bb-gray': '#2D2D2D',
        'bb-green': '#00FF41',
        'bb-green-dim': '#00CC33',
        'bb-green-dark': '#008F24',
        'bb-amber': '#FFD700',
        'bb-yellow': '#F4D03F',
        'bb-white': '#F0F0F0',
        'bb-muted': '#888888',
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        xl: "calc(var(--radius) + 4px)",
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xs: "calc(var(--radius) - 6px)",
      },
      boxShadow: {
        xs: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
        'bb-glow': '0 0 20px rgba(0, 255, 65, 0.4)',
        'bb-glow-strong': '0 0 40px rgba(0, 255, 65, 0.6)',
        'amber-glow': '0 0 20px rgba(255, 215, 0, 0.4)',
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
        "caret-blink": {
          "0%,70%,100%": { opacity: "1" },
          "20%,50%": { opacity: "0" },
        },
        "pulse-green": {
          "0%, 100%": { opacity: "1", boxShadow: "0 0 10px rgba(0, 255, 65, 0.8)" },
          "50%": { opacity: "0.6", boxShadow: "0 0 20px rgba(0, 255, 65, 1)" },
        },
        "float": {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "typing": {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        "blink": {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0" },
        },
        "smoke": {
          "0%": { transform: "translateY(0) scale(1)", opacity: "0.3" },
          "100%": { transform: "translateY(-200px) scale(3)", opacity: "0" },
        },
        "chem-pulse": {
          "0%, 100%": { boxShadow: "0 0 5px rgba(0, 255, 65, 0.3)" },
          "50%": { boxShadow: "0 0 20px rgba(0, 255, 65, 0.6)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "caret-blink": "caret-blink 1.25s ease-out infinite",
        "pulse-green": "pulse-green 2s ease-in-out infinite",
        "float": "float 3s ease-in-out infinite",
        "typing": "typing 3s steps(40, end)",
        "blink": "blink 1s step-end infinite",
        "smoke": "smoke 6s ease-out infinite",
        "chem-pulse": "chem-pulse 2s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
