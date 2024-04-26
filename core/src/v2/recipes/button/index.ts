import { size } from './size';
import { variant } from './variant';
import { rounded } from './rounded';
import { disabled } from './disabled';
import { active, hover } from './interactions';
import { base } from './base';

export const buttonRecipe = {
  base,
  variant,
  size,
  rounded,
  disabled,
  active,
  hover,
} as const;
