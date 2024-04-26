/* eslint-disable */
import type { Conditional } from './conditions';
import type { CssProperties } from './system-types';
import type { Tokens } from '../tokens/index';

export interface UtilityValues {
	zIndex: Tokens["zIndex"];
	top: Tokens["spacing"];
	left: Tokens["spacing"];
	insetInline: Tokens["spacing"];
	insetBlock: Tokens["spacing"];
	inset: "auto" | Tokens["spacing"];
	insetBlockEnd: Tokens["spacing"];
	insetBlockStart: Tokens["spacing"];
	insetInlineEnd: Tokens["spacing"];
	insetInlineStart: Tokens["spacing"];
	right: Tokens["spacing"];
	bottom: Tokens["spacing"];
	float: "left" | "right" | "start" | "end";
	hideFrom: Tokens["breakpoints"];
	hideBelow: Tokens["breakpoints"];
	flexBasis: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "full";
	flex: "1" | "auto" | "initial" | "none";
	gridTemplateColumns: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridTemplateRows: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12";
	gridColumn: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridRow: "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "10" | "11" | "12" | "full";
	gridAutoColumns: "min" | "max" | "fr";
	gridAutoRows: "min" | "max" | "fr";
	gap: Tokens["spacing"];
	gridGap: Tokens["spacing"];
	gridRowGap: Tokens["spacing"];
	gridColumnGap: Tokens["spacing"];
	rowGap: Tokens["spacing"];
	columnGap: Tokens["spacing"];
	padding: Tokens["spacing"];
	paddingLeft: Tokens["spacing"];
	paddingRight: Tokens["spacing"];
	paddingTop: Tokens["spacing"];
	paddingBottom: Tokens["spacing"];
	paddingBlock: Tokens["spacing"];
	paddingBlockEnd: Tokens["spacing"];
	paddingBlockStart: Tokens["spacing"];
	paddingInline: Tokens["spacing"];
	paddingInlineEnd: Tokens["spacing"];
	paddingInlineStart: Tokens["spacing"];
	marginLeft: "auto" | Tokens["spacing"];
	marginRight: "auto" | Tokens["spacing"];
	marginTop: "auto" | Tokens["spacing"];
	marginBottom: "auto" | Tokens["spacing"];
	margin: "auto" | Tokens["spacing"];
	marginBlock: "auto" | Tokens["spacing"];
	marginBlockEnd: "auto" | Tokens["spacing"];
	marginBlockStart: "auto" | Tokens["spacing"];
	marginInline: "auto" | Tokens["spacing"];
	marginInlineEnd: "auto" | Tokens["spacing"];
	marginInlineStart: "auto" | Tokens["spacing"];
	spaceX: "auto" | Tokens["spacing"] | CssProperties["marginInlineStart"];
	spaceY: "auto" | Tokens["spacing"] | CssProperties["marginBlockStart"];
	outlineColor: Tokens["colors"];
	outline: Tokens["borders"];
	outlineOffset: Tokens["spacing"];
	divideColor: Tokens["colors"];
	divideStyle: CssProperties["borderStyle"];
	width: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	inlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	minInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxWidth: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	maxInlineSize: "auto" | Tokens["sizes"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6" | "1/12" | "2/12" | "3/12" | "4/12" | "5/12" | "6/12" | "7/12" | "8/12" | "9/12" | "10/12" | "11/12" | "screen";
	height: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	blockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	minBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxHeight: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	maxBlockSize: "auto" | Tokens["sizes"] | "svh" | "lvh" | "dvh" | "screen" | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "1/5" | "2/5" | "3/5" | "4/5" | "1/6" | "2/6" | "3/6" | "4/6" | "5/6";
	color: Tokens["colors"];
	fontFamily: Tokens["fonts"];
	fontSize: Tokens["fontSizes"];
	fontWeight: Tokens["fontWeights"];
	fontSmoothing: "antialiased" | "subpixel-antialiased";
	letterSpacing: Tokens["letterSpacings"];
	lineHeight: Tokens["lineHeights"];
	textDecorationColor: Tokens["colors"];
	textEmphasisColor: Tokens["colors"];
	textIndent: Tokens["spacing"];
	textShadow: Tokens["shadows"];
	textShadowColor: Tokens["colors"];
	textWrap: "wrap" | "balance" | "nowrap";
	truncate: boolean;
	background: Tokens["colors"];
	backgroundColor: Tokens["colors"];
	backgroundGradient: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	textGradient: "to-t" | "to-tr" | "to-r" | "to-br" | "to-b" | "to-bl" | "to-l" | "to-tl";
	gradientFrom: Tokens["colors"];
	gradientTo: Tokens["colors"];
	gradientVia: Tokens["colors"];
	borderRadius: Tokens["radii"];
	borderTopLeftRadius: Tokens["radii"];
	borderTopRightRadius: Tokens["radii"];
	borderBottomRightRadius: Tokens["radii"];
	borderBottomLeftRadius: Tokens["radii"];
	borderTopRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderRightRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderBottomRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderLeftRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderStartStartRadius: Tokens["radii"];
	borderStartEndRadius: Tokens["radii"];
	borderStartRadius: Tokens["radii"] | CssProperties["borderRadius"];
	borderEndStartRadius: Tokens["radii"];
	borderEndEndRadius: Tokens["radii"];
	borderEndRadius: Tokens["radii"] | CssProperties["borderRadius"];
	border: Tokens["borders"];
	borderColor: Tokens["colors"];
	borderInline: Tokens["borders"];
	borderInlineColor: Tokens["colors"];
	borderBlock: Tokens["borders"];
	borderBlockColor: Tokens["colors"];
	borderLeft: Tokens["borders"];
	borderLeftColor: Tokens["colors"];
	borderInlineStart: Tokens["borders"];
	borderInlineStartColor: Tokens["colors"];
	borderRight: Tokens["borders"];
	borderRightColor: Tokens["colors"];
	borderInlineEnd: Tokens["borders"];
	borderInlineEndColor: Tokens["colors"];
	borderTop: Tokens["borders"];
	borderTopColor: Tokens["colors"];
	borderBottom: Tokens["borders"];
	borderBottomColor: Tokens["colors"];
	borderBlockEnd: Tokens["borders"];
	borderBlockEndColor: Tokens["colors"];
	borderBlockStart: Tokens["borders"];
	borderBlockStartColor: Tokens["colors"];
	boxShadow: Tokens["shadows"];
	boxShadowColor: Tokens["colors"];
	filter: "auto";
	blur: Tokens["blurs"];
	backdropFilter: "auto";
	backdropBlur: Tokens["blurs"];
	borderSpacing: Tokens["spacing"] | "auto";
	borderSpacingX: Tokens["spacing"];
	borderSpacingY: Tokens["spacing"];
	transitionTimingFunction: Tokens["easings"];
	transitionDelay: Tokens["durations"];
	transitionDuration: Tokens["durations"];
	transition: "all" | "common" | "background" | "colors" | "opacity" | "shadow" | "transform";
	animation: Tokens["animations"];
	animationTimingFunction: Tokens["easings"];
	animationDuration: Tokens["durations"];
	animationDelay: Tokens["durations"];
	rotate: "auto" | "auto-3d" | CssProperties["rotate"];
	rotateX: CssProperties["rotate"];
	rotateY: CssProperties["rotate"];
	rotateZ: CssProperties["rotate"];
	scale: "auto" | CssProperties["scale"];
	translate: "auto" | "auto-3d" | CssProperties["translate"];
	translateX: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	translateY: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	translateZ: Tokens["spacing"] | "1/2" | "1/3" | "2/3" | "1/4" | "2/4" | "3/4" | "full" | "-1/2" | "-1/3" | "-2/3" | "-1/4" | "-2/4" | "-3/4" | "-full";
	accentColor: Tokens["colors"];
	caretColor: Tokens["colors"];
	scrollbar: "visible" | "hidden";
	scrollMargin: Tokens["spacing"];
	scrollMarginLeft: Tokens["spacing"];
	scrollMarginRight: Tokens["spacing"];
	scrollMarginTop: Tokens["spacing"];
	scrollMarginBottom: Tokens["spacing"];
	scrollMarginBlock: Tokens["spacing"];
	scrollMarginBlockEnd: Tokens["spacing"];
	scrollMarginBlockStart: Tokens["spacing"];
	scrollMarginInline: Tokens["spacing"];
	scrollMarginInlineEnd: Tokens["spacing"];
	scrollMarginInlineStart: Tokens["spacing"];
	scrollPadding: Tokens["spacing"];
	scrollPaddingBlock: Tokens["spacing"];
	scrollPaddingBlockStart: Tokens["spacing"];
	scrollPaddingBlockEnd: Tokens["spacing"];
	scrollPaddingInline: Tokens["spacing"];
	scrollPaddingInlineEnd: Tokens["spacing"];
	scrollPaddingInlineStart: Tokens["spacing"];
	scrollPaddingLeft: Tokens["spacing"];
	scrollPaddingRight: Tokens["spacing"];
	scrollPaddingTop: Tokens["spacing"];
	scrollPaddingBottom: Tokens["spacing"];
	scrollSnapType: "none" | "x" | "y" | "both";
	scrollSnapStrictness: "mandatory" | "proximity";
	scrollSnapMargin: Tokens["spacing"];
	scrollSnapMarginTop: Tokens["spacing"];
	scrollSnapMarginBottom: Tokens["spacing"];
	scrollSnapMarginLeft: Tokens["spacing"];
	scrollSnapMarginRight: Tokens["spacing"];
	fill: Tokens["colors"];
	stroke: Tokens["colors"];
	srOnly: boolean;
	debug: boolean;
	containerName: CssProperties["containerName"];
	colorPalette: "base" | "success" | "warning" | "error" | "blue" | "green" | "beige" | "rose" | "indigo" | "bg-brand" | "brand" | "current" | "black" | "white" | "transparent" | "gray" | "gray.light" | "gray.dark" | "neutral" | "neutral.light" | "neutral.dark" | "text-primary" | "text-primary_on-brand" | "text-secondary" | "text-secondary_hover" | "text-secondary_on-brand" | "text-tertiary" | "text-tertiary_hover" | "text-tertiary_on-brand" | "text-quaternary" | "text-quaternary_on-brand" | "text-white" | "text-disabled" | "text-placeholder" | "text-placeholder_subtle" | "text-brand-primary" | "text-brand-secondary" | "text-brand-tertiary" | "text-brand-tertiary_alt" | "text-success-primary" | "text-warning-primary" | "text-error-primary" | "border-primary" | "border-primary_on-brand" | "border-secondary" | "border-tertiary" | "border-disabled" | "border-disabled_sublte" | "border-brand" | "border-brand-solid" | "border-brand-solid_alt" | "border-error" | "fg-primary" | "fg-primary_on-brand" | "fg-secondary" | "fg-secondary_hover" | "fg-tertiary" | "fg-tertiary_hover" | "fg-senary" | "fg-white" | "fg-disabled" | "fg-disabled_alt" | "fg-disabled_subtle" | "fg-brand-primary" | "fg-brand-primary_alt" | "fg-brand-secondary" | "fg-success-primary" | "fg-warning-primary" | "fg-error-primary" | "bg-primary" | "bg-primary_hover" | "bg-secondary" | "bg-secondary_hover" | "bg-tertiary" | "bg-tertiary_hover" | "bg-tertiary_subtle" | "bg-quaternary" | "bg-quaternary_hover" | "bg-white" | "bg-active" | "bg-disabled" | "bg-disabled_subtle" | "bg-overlay" | "bg-brand-primary" | "bg-brand-primary_hover" | "bg-brand-primary_subtle" | "bg-brand-secondary" | "bg-brand-secondary_hover" | "bg-brand-secondary_subtle" | "bg-brand-solid" | "bg-brand-solid_hover" | "bg-success-primary" | "bg-success-solid" | "bg-success.solid_hover" | "bg-success-solid_alt" | "bg-warning-primary" | "bg-warning-solid" | "bg-warning-solid_alt" | "bg-error-primary" | "bg-error-solid" | "bg-error-solid_alt" | "alpha-white-10" | "alpha-white-20" | "alpha-white-30" | "alpha-white-40" | "alpha-white-50" | "alpha-white-60" | "alpha-white-70" | "alpha-white-80" | "alpha-white-90" | "alpha-white-100" | "alpha-black-10" | "alpha-black-20" | "alpha-black-30" | "alpha-black-40" | "alpha-black-50" | "alpha-black-60" | "alpha-black-70" | "alpha-black-80" | "alpha-black-90" | "alpha-black-100" | "utility-blue-50" | "utility-blue-100" | "utility-blue-200" | "utility-blue-300" | "utility-blue-400" | "utility-blue-500" | "utility-blue-600" | "utility-blue-700" | "utility-blue-800" | "utility-blue-900" | "utility-blue-950" | "utility-green-50" | "utility-green-100" | "utility-green-200" | "utility-green-300" | "utility-green-400" | "utility-green-500" | "utility-green-600" | "utility-green-700" | "utility-green-800" | "utility-greene900" | "utility-green-950" | "utility-beige-50" | "utility-beige-100" | "utility-beige-200" | "utility-beige-300" | "utility-beige-400" | "utility-beige-500" | "utility-beige-600" | "utility-beige-700" | "utility-beige-800" | "utility-beige-900" | "utility-beige-950" | "utility-rose-50" | "utility-rose-100" | "utility-rose-200" | "utility-rose-300" | "utility-rose-400" | "utility-rose-500" | "utility-rose-600" | "utility-rose-700" | "utility-rose-800" | "utility-rose-900" | "utility-rose-950" | "utility-indigo-50" | "utility-indigo-100" | "utility-indigo-200" | "utility-indigo-300" | "utility-indigo-400" | "utility-indigo-500" | "utility-indigo-600" | "utility-indigo-700" | "utility-indigo-800" | "utility-indigo-900" | "utility-indigo-950" | "button-primary-bg" | "button-primary-bg_hover" | "button-primary-bg_subtle" | "button-secondary-bg" | "button-secondary-bg_hover" | "button-secondary-bg_subtle" | "button-secondary-brand-bg" | "button-secondary-brand-bg_hover" | "button-secondary-brand-bg_subtle" | "button-tertiary-bg" | "button-tertiary-bg_hover" | "button-tertiary-bg_subtle" | "button-tertiary-brand-bg" | "button-tertiary-brand-bg_hover" | "button-quaternary-bg" | "button-quaternary-bg_hover" | "button-quaternary-brand-bg" | "button-quaternary-brand-bg_hover" | "button-glassy-light-bg" | "button-glassy-dark-bg" | "button-tertiary-border" | "button-tertiary-border_hover" | "button-tertiary-brand-border" | "button-tertiary-brand-border_hover" | "button-glassy-border" | "accent" | "bg" | "fg" | "border";
	textStyle: "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "4xl" | "5xl" | "6xl" | "7xl";
}



type WithColorOpacityModifier<T> = T extends string ? `${T}/${string}` : T

type ImportantMark = "!" | "!important"
type WhitespaceImportant = ` ${ImportantMark}`
type Important = ImportantMark | WhitespaceImportant
type WithImportant<T> = T extends string ? `${T}${Important}` & { __important?: true } : T;

/**
 * Only relevant when using `strictTokens` or `strictPropertyValues` in your config.
 * - Allows you to use an escape hatch (e.g. `[123px]`) to use any string as a value.
 * - Allows you to use a color opacity modifier (e.g. `red/300`) with known color values.
 * - Allows you to use an important mark (e.g. `!` or `!important`) in the value.
 *
 * This is useful when you want to use a value that is not defined in the config or want to opt-out of the defaults.
 *
 * @example
 * css({
 *   fontSize: '[123px]', // ⚠️ will not throw even if you haven't defined 123px as a token
 * })
 *
 * @see https://panda-css.com/docs/concepts/writing-styles#stricttokens
 * @see https://panda-css.com/docs/concepts/writing-styles#strictpropertyvalues
 */
export type WithEscapeHatch<T> = T | `[${string}]` | WithColorOpacityModifier<T> | WithImportant<T>

/**
 * Will restrict the value of properties that have predefined values to those values only.
 *
 * @example
 * css({
 *   display: 'abc', // ❌ will throw
 * })
 *
 * @see https://panda-css.com/docs/concepts/writing-styles#strictpropertyvalues
 */
export type OnlyKnown<Key, Value> = Value extends boolean
  ? Value
  : Value extends `${infer _}` ? Value : never