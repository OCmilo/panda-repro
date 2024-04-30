import { type Recipe } from "../../types/recipe";

export const hover: Recipe = {
  primary: { backgroundColor: "button-secondary-bg_hover" },
  secondary: { backgroundColor: "button-secondary-bg_hover" },
  tertiary: {
    backgroundColor: "button-tertiary-bg",
    borderColor: "button-tertiary-brand-bg",
  },
  quaternary: { backgroundColor: "button-quaternary-bg_hover" },
} satisfies Recipe;

export const active: Recipe = {
  primary: { backgroundColor: "button-primary-bg_subtle" },
  secondary: { backgroundColor: "button-secondary-brand-bg_subtle" },
  tertiary: {
    backgroundColor: "button-tertiary-bg",
    borderColor: "button-tertiary-brand-border",
  },
  quaternary: { backgroundColor: "transparent" },
} satisfies Recipe;
