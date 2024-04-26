import { defineConfig } from "@pandacss/dev";
import { briksPreset } from "./src/preset/preset";

export default defineConfig({
  preflight: true,
  presets: [briksPreset],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  outdir: "../styled-system",
  jsxFramework: 'react'
});
