import tailwindcss from "@tailwindcss/postcss"
import autoprefixer from "autoprefixer"
import type { Plugin } from "postcss"

const plugins: Plugin[] = [tailwindcss, autoprefixer]

export default { plugins }
