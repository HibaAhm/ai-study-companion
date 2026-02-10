import type { Config } from "tailwindcss"

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // TS + JS + JSX + TSX
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

export default config
