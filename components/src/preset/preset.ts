import { definePreset } from "@pandacss/dev";
import {
  colorsPrimitives,
  fontSizesPrimitives,
  spacingPrimitives,
  lineHeightPrimtives,
  fontWeightPrimitives,
  letterSpacingPrimitives,
  fontFamiliesPrimitivies,
  secondaryColors,
  tertiaryColors,
} from "../../../core/src/v2/primitives";
import {
  colorsTokens,
  spacingTokens,
  radiusTokens,
} from "../../../core/src/v2/tokens";
import { button } from "../components/button/button-recipe";
import parkPreset from "@park-ui/panda-preset";
import { format } from "../utils/mapToPandaFormat";

export const libraryPreset = definePreset({
  theme: {
    extend: {
      recipes: {
        button,
      },
      tokens: {
        colors: format(colorsPrimitives).toToken(),
        fontSizes: format(fontSizesPrimitives).toToken(),
        spacing: format(spacingPrimitives).toToken(),
        lineHeights: format(lineHeightPrimtives).toToken(),
        fontWeights: format(fontWeightPrimitives).toToken(),
        letterSpacings: format(letterSpacingPrimitives).toToken(),
        fonts: format(fontFamiliesPrimitivies).toToken(),
      },
      semanticTokens: {
        colors: format(colorsTokens).toSemanticToken("colors"),
        spacing: format(spacingTokens).toSemanticToken("spacing"),
        radii: format(radiusTokens).toSemanticToken("spacing"),
      },
    },
  },
  themes: {
    extend: {
      secondary: {
        tokens: {
          colors: format(secondaryColors).toToken(),
        },
      },
      tertiary: {
        tokens: {
          colors: format(tertiaryColors).toToken(),
        },
      },
    },
  },
  presets: ["@pandacss/preset-base", parkPreset],
});
