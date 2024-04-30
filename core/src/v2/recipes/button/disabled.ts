import { type Recipe } from "../../types/recipe";

export const disabled = {
  primary: {
    backgroundColor: "bg-disabled",
    color: "text-disabled",
  },
  secondary: {
    backgroundColor: "bg-disabled_subtle",
    color: "text-disabled",
  },
  tertiary: {
    backgroundColor: "transparent",
    borderColor: "border-disabled",
    color: "text-disabled",
  },
  quaternary: {
    color: "text-disabled",
  },
} satisfies Recipe;
