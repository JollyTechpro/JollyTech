import type { Config } from "tailwindcss";
export default {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0b1118",
        panel: "#0f1725",
        accent: "#27f39a",
        muted: "#9fb3a7"
      },
      borderRadius: { xl: "14px", "2xl": "20px" }
    }
  },
  plugins: []
} satisfies Config;
