import { memo, splitProps } from '../helpers.mjs';
import { createRecipe, mergeRecipes } from './create-recipe.mjs';

const buttonFn = /* @__PURE__ */ createRecipe('button', {
  "variant": "solid",
  "size": "md"
}, [
  {
    "variant": "primary",
    "css": {
      "_hover": {
        "backgroundColor": "button-secondary-bg_hover"
      },
      "_active": {
        "backgroundColor": "button-primary-bg_subtle"
      }
    }
  },
  {
    "variant": "secondary",
    "css": {
      "_hover": {
        "backgroundColor": "button-secondary-bg_hover"
      },
      "_active": {
        "backgroundColor": "button-secondary-brand-bg_subtle"
      }
    }
  },
  {
    "variant": "tertiary",
    "css": {
      "_hover": {
        "backgroundColor": "button-tertiary-bg",
        "borderColor": "button-tertiary-brand-bg"
      },
      "_active": {
        "backgroundColor": "button-tertiary-bg",
        "borderColor": "button-tertiary-brand-border"
      }
    }
  },
  {
    "variant": "quaternary",
    "css": {
      "_hover": {
        "backgroundColor": "button-quaternary-bg_hover"
      },
      "_active": {
        "backgroundColor": "transparent"
      }
    }
  },
  {
    "variant": "primary",
    "disabled": true,
    "css": {
      "backgroundColor": "bg-disabled",
      "color": "text-disabled",
      "_hover": {
        "backgroundColor": "bg-disabled",
        "color": "text-disabled"
      },
      "_active": {
        "backgroundColor": "bg-disabled",
        "color": "text-disabled"
      }
    }
  },
  {
    "variant": "secondary",
    "disabled": true,
    "css": {
      "backgroundColor": "bg-disabled_subtle",
      "color": "text-disabled",
      "_hover": {
        "backgroundColor": "bg-disabled_subtle",
        "color": "text-disabled"
      },
      "_active": {
        "backgroundColor": "bg-disabled_subtle",
        "color": "text-disabled"
      }
    }
  },
  {
    "variant": "tertiary",
    "disabled": true,
    "css": {
      "backgroundColor": "transparent",
      "borderColor": "border-disabled",
      "color": "text-disabled",
      "_hover": {
        "backgroundColor": "transparent",
        "borderColor": "border-disabled",
        "color": "text-disabled"
      },
      "_active": {
        "backgroundColor": "transparent",
        "borderColor": "border-disabled",
        "color": "text-disabled"
      }
    }
  },
  {
    "variant": "quaternary",
    "disabled": true,
    "css": {
      "color": "text-disabled",
      "_hover": {
        "color": "text-disabled"
      },
      "_active": {
        "color": "text-disabled"
      }
    }
  }
])

const buttonVariantMap = {
  "disabled": [
    "true"
  ],
  "rounded": [
    "true"
  ],
  "variant": [
    "primary",
    "secondary",
    "tertiary",
    "quaternary",
    "solid",
    "outline",
    "ghost",
    "link",
    "subtle"
  ],
  "size": [
    "big",
    "medium",
    "small",
    "xs",
    "sm",
    "md",
    "lg",
    "xl",
    "2xl"
  ]
}

const buttonVariantKeys = Object.keys(buttonVariantMap)

export const button = /* @__PURE__ */ Object.assign(memo(buttonFn.recipeFn), {
  __recipe__: true,
  __name__: 'button',
  __getCompoundVariantCss__: buttonFn.__getCompoundVariantCss__,
  raw: (props) => props,
  variantKeys: buttonVariantKeys,
  variantMap: buttonVariantMap,
  merge(recipe) {
    return mergeRecipes(this, recipe)
  },
  splitVariantProps(props) {
    return splitProps(props, buttonVariantKeys)
  },
  getVariantProps: buttonFn.getVariantProps,
})