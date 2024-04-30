import { defineConfig } from "@pandacss/dev";
import { libraryPreset } from "./src/preset/preset";

export default defineConfig({
  preflight: true,
  presets: [libraryPreset],
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  outdir: "../styled-system",
  jsxFramework: "react",
});
