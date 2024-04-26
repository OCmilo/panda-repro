import { defineRecipe } from '@pandacss/dev'
import { buttonRecipe } from '../../../../core/src/v2/recipes/button'

export const button = defineRecipe({
  className: 'button',
  base: {
    ...buttonRecipe.base,
    _hover: buttonRecipe.hover
  },
  defaultVariants: {
    variant: 'primary',
    size: 'medium',
  },
  variants: {
    size: buttonRecipe.size,
    variant: buttonRecipe.variant,
    disabled: { true: {} },
    rounded: buttonRecipe.rounded,
  },
  compoundVariants: [
    {
      variant: 'primary',
      css: {
        _hover: buttonRecipe.hover.primary,
        _active: buttonRecipe.active.primary,
      },
    },
    {
      variant: 'secondary',
      css: {
        _hover: buttonRecipe.hover.secondary,
        _active: buttonRecipe.active.secondary,
      },
    },
    {
      variant: 'tertiary',
      css: {
        _hover: buttonRecipe.hover.tertiary,
        _active: buttonRecipe.active.tertiary,
      },
    },
    {
      variant: 'quaternary',
      css: {
        _hover: buttonRecipe.hover.quaternary,
        _active: buttonRecipe.active.quaternary,
      },
    },
    {
      variant: 'primary',
      disabled: true,
      css: {
        ...buttonRecipe.disabled.primary, 
        _hover: {
        ...buttonRecipe.disabled.primary,
        },
        _active: {
        ...buttonRecipe.disabled.primary,
        }
      },
    },
    {
      variant: 'secondary',
      disabled: true,
      css: {
        ...buttonRecipe.disabled.secondary, 
        _hover: {
        ...buttonRecipe.disabled.secondary,
        },
        _active: {
        ...buttonRecipe.disabled.secondary,
        }
      },
    },
    {
      variant: 'tertiary',
      disabled: true,
      css: {
        ...buttonRecipe.disabled.tertiary, 
        _hover: {
        ...buttonRecipe.disabled.tertiary,
        },
        _active: {
        ...buttonRecipe.disabled.tertiary,
        }
      },
    },
    {
      variant: 'quaternary',
      disabled: true,
      css: {
        ...buttonRecipe.disabled.quaternary, 
        _hover: {
        ...buttonRecipe.disabled.quaternary,
        },
        _active: {
        ...buttonRecipe.disabled.quaternary,
        }
      },
    },
  ],
});
