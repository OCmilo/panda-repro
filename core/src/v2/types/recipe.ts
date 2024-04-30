import { CSSProperties } from 'react';
import { fontFamiliesPrimitivies } from '../primitives/font-families';
import {
  colorsTokens,
  fontSizeTokens,
  fontWeightTokens,
  letterSpacingTokens,
  lineHeightTokens,
  radiusTokens,
  spacingTokens
} from '../tokens'

export type Tokens = 
  keyof typeof colorsTokens |
  keyof typeof fontSizeTokens |
  keyof typeof fontWeightTokens |
  keyof typeof letterSpacingTokens |
  keyof typeof lineHeightTokens |
  keyof typeof radiusTokens |
  keyof typeof spacingTokens |
  keyof typeof fontFamiliesPrimitivies;

type CSSPropertyKeys = keyof CSSProperties;
type String = string & {};

export type BaseRecipe = {
  [key in CSSPropertyKeys]?: Tokens | CSSProperties[key] ;
}

export type Recursive<T> = {
  [key: String]: T | Recursive<T>;
}

export type Recipe = BaseRecipe | Recursive<BaseRecipe>;
