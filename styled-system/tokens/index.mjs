const tokens = {
  "animations.backdrop-in": {
    "value": "fade-in 250ms var(--easings-emphasized-in)",
    "variable": "var(--animations-backdrop-in)"
  },
  "animations.backdrop-out": {
    "value": "fade-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-backdrop-out)"
  },
  "animations.dialog-in": {
    "value": "slide-in 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-dialog-in)"
  },
  "animations.dialog-out": {
    "value": "slide-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-dialog-out)"
  },
  "animations.drawer-in-left": {
    "value": "slide-in-left 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-drawer-in-left)"
  },
  "animations.drawer-out-left": {
    "value": "slide-out-left 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-drawer-out-left)"
  },
  "animations.drawer-in-right": {
    "value": "slide-in-right 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-drawer-in-right)"
  },
  "animations.drawer-out-right": {
    "value": "slide-out-right 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-drawer-out-right)"
  },
  "animations.skeleton-pulse": {
    "value": "skeleton-pulse 2s var(--easings-pulse) infinite",
    "variable": "var(--animations-skeleton-pulse)"
  },
  "animations.fade-in": {
    "value": "fade-in 400ms var(--easings-emphasized-in)",
    "variable": "var(--animations-fade-in)"
  },
  "animations.collapse-in": {
    "value": "collapse-in 250ms var(--easings-emphasized-in)",
    "variable": "var(--animations-collapse-in)"
  },
  "animations.collapse-out": {
    "value": "collapse-out 200ms var(--easings-emphasized-out)",
    "variable": "var(--animations-collapse-out)"
  },
  "blurs.sm": {
    "value": "4px",
    "variable": "var(--blurs-sm)"
  },
  "blurs.base": {
    "value": "8px",
    "variable": "var(--blurs-base)"
  },
  "blurs.md": {
    "value": "12px",
    "variable": "var(--blurs-md)"
  },
  "blurs.lg": {
    "value": "16px",
    "variable": "var(--blurs-lg)"
  },
  "blurs.xl": {
    "value": "24px",
    "variable": "var(--blurs-xl)"
  },
  "blurs.2xl": {
    "value": "40px",
    "variable": "var(--blurs-2xl)"
  },
  "blurs.3xl": {
    "value": "64px",
    "variable": "var(--blurs-3xl)"
  },
  "borders.none": {
    "value": "none",
    "variable": "var(--borders-none)"
  },
  "colors.base.black": {
    "value": "#000000",
    "variable": "var(--colors-base-black)"
  },
  "colors.base.white": {
    "value": "#FFFFFF",
    "variable": "var(--colors-base-white)"
  },
  "colors.success.50": {
    "value": "#ECFDF7",
    "variable": "var(--colors-success-50)"
  },
  "colors.success.100": {
    "value": "#D1FAEC",
    "variable": "var(--colors-success-100)"
  },
  "colors.success.200": {
    "value": "#A7F3DA",
    "variable": "var(--colors-success-200)"
  },
  "colors.success.300": {
    "value": "#6EE7BF",
    "variable": "var(--colors-success-300)"
  },
  "colors.success.400": {
    "value": "#34D39E",
    "variable": "var(--colors-success-400)"
  },
  "colors.success.500": {
    "value": "#10B981",
    "variable": "var(--colors-success-500)"
  },
  "colors.success.600": {
    "value": "#059666",
    "variable": "var(--colors-success-600)"
  },
  "colors.success.700": {
    "value": "#047852",
    "variable": "var(--colors-success-700)"
  },
  "colors.success.800": {
    "value": "#065F42",
    "variable": "var(--colors-success-800)"
  },
  "colors.success.900": {
    "value": "#064E36",
    "variable": "var(--colors-success-900)"
  },
  "colors.success.950": {
    "value": "#022C1E",
    "variable": "var(--colors-success-950)"
  },
  "colors.warning.50": {
    "value": "#FFF8EB",
    "variable": "var(--colors-warning-50)"
  },
  "colors.warning.100": {
    "value": "#FEEAC7",
    "variable": "var(--colors-warning-100)"
  },
  "colors.warning.200": {
    "value": "#FDD28A",
    "variable": "var(--colors-warning-200)"
  },
  "colors.warning.300": {
    "value": "#FCBB4D",
    "variable": "var(--colors-warning-300)"
  },
  "colors.warning.400": {
    "value": "#FBAB24",
    "variable": "var(--colors-warning-400)"
  },
  "colors.warning.500": {
    "value": "#F59E0B",
    "variable": "var(--colors-warning-500)"
  },
  "colors.warning.600": {
    "value": "#D98B06",
    "variable": "var(--colors-warning-600)"
  },
  "colors.warning.700": {
    "value": "#B47409",
    "variable": "var(--colors-warning-700)"
  },
  "colors.warning.800": {
    "value": "#92610E",
    "variable": "var(--colors-warning-800)"
  },
  "colors.warning.900": {
    "value": "#78510F",
    "variable": "var(--colors-warning-900)"
  },
  "colors.warning.950": {
    "value": "#452C03",
    "variable": "var(--colors-warning-950)"
  },
  "colors.error.50": {
    "value": "#FFF2F1",
    "variable": "var(--colors-error-50)"
  },
  "colors.error.100": {
    "value": "#FFE0DF",
    "variable": "var(--colors-error-100)"
  },
  "colors.error.200": {
    "value": "#FFC8C5",
    "variable": "var(--colors-error-200)"
  },
  "colors.error.300": {
    "value": "#FFA19D",
    "variable": "var(--colors-error-300)"
  },
  "colors.error.400": {
    "value": "#FF6B64",
    "variable": "var(--colors-error-400)"
  },
  "colors.error.500": {
    "value": "#FF3D34",
    "variable": "var(--colors-error-500)"
  },
  "colors.error.600": {
    "value": "#ED1F15",
    "variable": "var(--colors-error-600)"
  },
  "colors.error.700": {
    "value": "#C8150D",
    "variable": "var(--colors-error-700)"
  },
  "colors.error.800": {
    "value": "#A5160F",
    "variable": "var(--colors-error-800)"
  },
  "colors.error.900": {
    "value": "#881914",
    "variable": "var(--colors-error-900)"
  },
  "colors.error.950": {
    "value": "#460B1B",
    "variable": "var(--colors-error-950)"
  },
  "colors.blue.50": {
    "value": "#F6F7F9",
    "variable": "var(--colors-blue-50)"
  },
  "colors.blue.100": {
    "value": "#EBEEF3",
    "variable": "var(--colors-blue-100)"
  },
  "colors.blue.200": {
    "value": "#D4D9E3",
    "variable": "var(--colors-blue-200)"
  },
  "colors.blue.300": {
    "value": "#AEB9CB",
    "variable": "var(--colors-blue-300)"
  },
  "colors.blue.400": {
    "value": "#8193AF",
    "variable": "var(--colors-blue-400)"
  },
  "colors.blue.500": {
    "value": "#627595",
    "variable": "var(--colors-blue-500)"
  },
  "colors.blue.600": {
    "value": "#485773",
    "variable": "var(--colors-blue-600)"
  },
  "colors.blue.700": {
    "value": "#3F4B65",
    "variable": "var(--colors-blue-700)"
  },
  "colors.blue.800": {
    "value": "#374155",
    "variable": "var(--colors-blue-800)"
  },
  "colors.blue.900": {
    "value": "#323948",
    "variable": "var(--colors-blue-900)"
  },
  "colors.blue.950": {
    "value": "#212530",
    "variable": "var(--colors-blue-950)"
  },
  "colors.green.50": {
    "value": "#F4F5F5",
    "variable": "var(--colors-green-50)"
  },
  "colors.green.100": {
    "value": "#E4E7E4",
    "variable": "var(--colors-green-100)"
  },
  "colors.green.200": {
    "value": "#C9D1CC",
    "variable": "var(--colors-green-200)"
  },
  "colors.green.300": {
    "value": "#A0ACA5",
    "variable": "var(--colors-green-300)"
  },
  "colors.green.400": {
    "value": "#7C8B83",
    "variable": "var(--colors-green-400)"
  },
  "colors.green.500": {
    "value": "#5D6C64",
    "variable": "var(--colors-green-500)"
  },
  "colors.green.600": {
    "value": "#47544E",
    "variable": "var(--colors-green-600)"
  },
  "colors.green.700": {
    "value": "#39433E",
    "variable": "var(--colors-green-700)"
  },
  "colors.green.800": {
    "value": "#2E3732",
    "variable": "var(--colors-green-800)"
  },
  "colors.green.900": {
    "value": "#272D2B",
    "variable": "var(--colors-green-900)"
  },
  "colors.green.950": {
    "value": "#151917",
    "variable": "var(--colors-green-950)"
  },
  "colors.beige.50": {
    "value": "#F7F7F5",
    "variable": "var(--colors-beige-50)"
  },
  "colors.beige.100": {
    "value": "#EDECE7",
    "variable": "var(--colors-beige-100)"
  },
  "colors.beige.200": {
    "value": "#D9D7CF",
    "variable": "var(--colors-beige-200)"
  },
  "colors.beige.300": {
    "value": "#B6B2A1",
    "variable": "var(--colors-beige-300)"
  },
  "colors.beige.400": {
    "value": "#A8A18F",
    "variable": "var(--colors-beige-400)"
  },
  "colors.beige.500": {
    "value": "#968E79",
    "variable": "var(--colors-beige-500)"
  },
  "colors.beige.600": {
    "value": "#897E6D",
    "variable": "var(--colors-beige-600)"
  },
  "colors.beige.700": {
    "value": "#73695B",
    "variable": "var(--colors-beige-700)"
  },
  "colors.beige.800": {
    "value": "#5F574D",
    "variable": "var(--colors-beige-800)"
  },
  "colors.beige.900": {
    "value": "#4E4840",
    "variable": "var(--colors-beige-900)"
  },
  "colors.beige.950": {
    "value": "#292521",
    "variable": "var(--colors-beige-950)"
  },
  "colors.rose.50": {
    "value": "#FFF1F3",
    "variable": "var(--colors-rose-50)"
  },
  "colors.rose.100": {
    "value": "#FFE4E9",
    "variable": "var(--colors-rose-100)"
  },
  "colors.rose.200": {
    "value": "#FECDD5",
    "variable": "var(--colors-rose-200)"
  },
  "colors.rose.300": {
    "value": "#FDA4B3",
    "variable": "var(--colors-rose-300)"
  },
  "colors.rose.400": {
    "value": "#FB7189",
    "variable": "var(--colors-rose-400)"
  },
  "colors.rose.500": {
    "value": "#F43F5E",
    "variable": "var(--colors-rose-500)"
  },
  "colors.rose.600": {
    "value": "#E11D3F",
    "variable": "var(--colors-rose-600)"
  },
  "colors.rose.700": {
    "value": "#BE122F",
    "variable": "var(--colors-rose-700)"
  },
  "colors.rose.800": {
    "value": "#9F122A",
    "variable": "var(--colors-rose-800)"
  },
  "colors.rose.900": {
    "value": "#881327",
    "variable": "var(--colors-rose-900)"
  },
  "colors.rose.950": {
    "value": "#4C0511",
    "variable": "var(--colors-rose-950)"
  },
  "colors.indigo.50": {
    "value": "#EEF2FF",
    "variable": "var(--colors-indigo-50)"
  },
  "colors.indigo.100": {
    "value": "#E0E7FF",
    "variable": "var(--colors-indigo-100)"
  },
  "colors.indigo.200": {
    "value": "#C7D2FE",
    "variable": "var(--colors-indigo-200)"
  },
  "colors.indigo.300": {
    "value": "#A5B4FC",
    "variable": "var(--colors-indigo-300)"
  },
  "colors.indigo.400": {
    "value": "#818CF8",
    "variable": "var(--colors-indigo-400)"
  },
  "colors.indigo.500": {
    "value": "#6366F1",
    "variable": "var(--colors-indigo-500)"
  },
  "colors.indigo.600": {
    "value": "#4F46E5",
    "variable": "var(--colors-indigo-600)"
  },
  "colors.indigo.700": {
    "value": "#4338CA",
    "variable": "var(--colors-indigo-700)"
  },
  "colors.indigo.800": {
    "value": "#3730A3",
    "variable": "var(--colors-indigo-800)"
  },
  "colors.indigo.900": {
    "value": "#312E81",
    "variable": "var(--colors-indigo-900)"
  },
  "colors.indigo.950": {
    "value": "#1E1B4B",
    "variable": "var(--colors-indigo-950)"
  },
  "colors.bg-brand.50": {
    "value": "#F9FAFB",
    "variable": "var(--colors-bg-brand-50)"
  },
  "colors.bg-brand.100": {
    "value": "#F3F4F6",
    "variable": "var(--colors-bg-brand-100)"
  },
  "colors.bg-brand.200": {
    "value": "#E5E7EB",
    "variable": "var(--colors-bg-brand-200)"
  },
  "colors.bg-brand.500": {
    "value": "#1F2937",
    "variable": "var(--colors-bg-brand-500)"
  },
  "colors.bg-brand.600": {
    "value": "#111827",
    "variable": "var(--colors-bg-brand-600)"
  },
  "colors.bg-brand.700": {
    "value": "#030712",
    "variable": "var(--colors-bg-brand-700)"
  },
  "colors.brand.50": {
    "value": "#F9FAFB",
    "variable": "var(--colors-brand-50)"
  },
  "colors.brand.100": {
    "value": "#F3F4F6",
    "variable": "var(--colors-brand-100)"
  },
  "colors.brand.200": {
    "value": "#E5E7EB",
    "variable": "var(--colors-brand-200)"
  },
  "colors.brand.300": {
    "value": "#D1D5DB",
    "variable": "var(--colors-brand-300)"
  },
  "colors.brand.400": {
    "value": "#9CA3AF",
    "variable": "var(--colors-brand-400)"
  },
  "colors.brand.500": {
    "value": "#6B7280",
    "variable": "var(--colors-brand-500)"
  },
  "colors.brand.600": {
    "value": "#4B5563",
    "variable": "var(--colors-brand-600)"
  },
  "colors.brand.700": {
    "value": "#374151",
    "variable": "var(--colors-brand-700)"
  },
  "colors.brand.800": {
    "value": "#1F2937",
    "variable": "var(--colors-brand-800)"
  },
  "colors.brand.900": {
    "value": "#111827",
    "variable": "var(--colors-brand-900)"
  },
  "colors.brand.950": {
    "value": "#030712",
    "variable": "var(--colors-brand-950)"
  },
  "colors.current": {
    "value": "currentColor",
    "variable": "var(--colors-current)"
  },
  "colors.black.4%": {
    "value": "#0000000A",
    "variable": "var(--colors-black-4\\%)"
  },
  "colors.black.8%": {
    "value": "#00000014",
    "variable": "var(--colors-black-8\\%)"
  },
  "colors.black.12%": {
    "value": "#0000001F",
    "variable": "var(--colors-black-12\\%)"
  },
  "colors.black.16%": {
    "value": "#00000029",
    "variable": "var(--colors-black-16\\%)"
  },
  "colors.black.24%": {
    "value": "#0000003D",
    "variable": "var(--colors-black-24\\%)"
  },
  "colors.black.32%": {
    "value": "#00000052",
    "variable": "var(--colors-black-32\\%)"
  },
  "colors.black.48%": {
    "value": "#0000007A",
    "variable": "var(--colors-black-48\\%)"
  },
  "colors.black.64%": {
    "value": "#000000A3",
    "variable": "var(--colors-black-64\\%)"
  },
  "colors.black.80%": {
    "value": "#000000CC",
    "variable": "var(--colors-black-80\\%)"
  },
  "colors.black.96%": {
    "value": "#000000F5",
    "variable": "var(--colors-black-96\\%)"
  },
  "colors.black": {
    "value": "#000000",
    "variable": "var(--colors-black)"
  },
  "colors.black.a1": {
    "value": "rgba(0, 0, 0, 0.05)",
    "variable": "var(--colors-black-a1)"
  },
  "colors.black.a2": {
    "value": "rgba(0, 0, 0, 0.1)",
    "variable": "var(--colors-black-a2)"
  },
  "colors.black.a3": {
    "value": "rgba(0, 0, 0, 0.15)",
    "variable": "var(--colors-black-a3)"
  },
  "colors.black.a4": {
    "value": "rgba(0, 0, 0, 0.2)",
    "variable": "var(--colors-black-a4)"
  },
  "colors.black.a5": {
    "value": "rgba(0, 0, 0, 0.3)",
    "variable": "var(--colors-black-a5)"
  },
  "colors.black.a6": {
    "value": "rgba(0, 0, 0, 0.4)",
    "variable": "var(--colors-black-a6)"
  },
  "colors.black.a7": {
    "value": "rgba(0, 0, 0, 0.5)",
    "variable": "var(--colors-black-a7)"
  },
  "colors.black.a8": {
    "value": "rgba(0, 0, 0, 0.6)",
    "variable": "var(--colors-black-a8)"
  },
  "colors.black.a9": {
    "value": "rgba(0, 0, 0, 0.7)",
    "variable": "var(--colors-black-a9)"
  },
  "colors.black.a10": {
    "value": "rgba(0, 0, 0, 0.8)",
    "variable": "var(--colors-black-a10)"
  },
  "colors.black.a11": {
    "value": "rgba(0, 0, 0, 0.9)",
    "variable": "var(--colors-black-a11)"
  },
  "colors.black.a12": {
    "value": "rgba(0, 0, 0, 0.95)",
    "variable": "var(--colors-black-a12)"
  },
  "colors.white.4%": {
    "value": "#FFFFFF0A",
    "variable": "var(--colors-white-4\\%)"
  },
  "colors.white.8%": {
    "value": "#FFFFFF14",
    "variable": "var(--colors-white-8\\%)"
  },
  "colors.white.12%": {
    "value": "#FFFFFF1F",
    "variable": "var(--colors-white-12\\%)"
  },
  "colors.white.16%": {
    "value": "#FFFFFF29",
    "variable": "var(--colors-white-16\\%)"
  },
  "colors.white.24%": {
    "value": "#FFFFFF3D",
    "variable": "var(--colors-white-24\\%)"
  },
  "colors.white.32%": {
    "value": "#FFFFFF52",
    "variable": "var(--colors-white-32\\%)"
  },
  "colors.white.48%": {
    "value": "#FFFFFF7A",
    "variable": "var(--colors-white-48\\%)"
  },
  "colors.white.64%": {
    "value": "#FFFFFFA3",
    "variable": "var(--colors-white-64\\%)"
  },
  "colors.white.80%": {
    "value": "#FFFFFFCC",
    "variable": "var(--colors-white-80\\%)"
  },
  "colors.white.96%": {
    "value": "#FFFFFFF5",
    "variable": "var(--colors-white-96\\%)"
  },
  "colors.white": {
    "value": "#ffffff",
    "variable": "var(--colors-white)"
  },
  "colors.white.a1": {
    "value": "rgba(255, 255, 255, 0.05)",
    "variable": "var(--colors-white-a1)"
  },
  "colors.white.a2": {
    "value": "rgba(255, 255, 255, 0.1)",
    "variable": "var(--colors-white-a2)"
  },
  "colors.white.a3": {
    "value": "rgba(255, 255, 255, 0.15)",
    "variable": "var(--colors-white-a3)"
  },
  "colors.white.a4": {
    "value": "rgba(255, 255, 255, 0.2)",
    "variable": "var(--colors-white-a4)"
  },
  "colors.white.a5": {
    "value": "rgba(255, 255, 255, 0.3)",
    "variable": "var(--colors-white-a5)"
  },
  "colors.white.a6": {
    "value": "rgba(255, 255, 255, 0.4)",
    "variable": "var(--colors-white-a6)"
  },
  "colors.white.a7": {
    "value": "rgba(255, 255, 255, 0.5)",
    "variable": "var(--colors-white-a7)"
  },
  "colors.white.a8": {
    "value": "rgba(255, 255, 255, 0.6)",
    "variable": "var(--colors-white-a8)"
  },
  "colors.white.a9": {
    "value": "rgba(255, 255, 255, 0.7)",
    "variable": "var(--colors-white-a9)"
  },
  "colors.white.a10": {
    "value": "rgba(255, 255, 255, 0.8)",
    "variable": "var(--colors-white-a10)"
  },
  "colors.white.a11": {
    "value": "rgba(255, 255, 255, 0.9)",
    "variable": "var(--colors-white-a11)"
  },
  "colors.white.a12": {
    "value": "rgba(255, 255, 255, 0.95)",
    "variable": "var(--colors-white-a12)"
  },
  "colors.transparent": {
    "value": "rgb(0 0 0 / 0)",
    "variable": "var(--colors-transparent)"
  },
  "colors.gray.light.1": {
    "value": "#fcfcfc",
    "variable": "var(--colors-gray-light-1)"
  },
  "colors.gray.light.2": {
    "value": "#f9f9f9",
    "variable": "var(--colors-gray-light-2)"
  },
  "colors.gray.light.3": {
    "value": "#f0f0f0",
    "variable": "var(--colors-gray-light-3)"
  },
  "colors.gray.light.4": {
    "value": "#e8e8e8",
    "variable": "var(--colors-gray-light-4)"
  },
  "colors.gray.light.5": {
    "value": "#e0e0e0",
    "variable": "var(--colors-gray-light-5)"
  },
  "colors.gray.light.6": {
    "value": "#d9d9d9",
    "variable": "var(--colors-gray-light-6)"
  },
  "colors.gray.light.7": {
    "value": "#cecece",
    "variable": "var(--colors-gray-light-7)"
  },
  "colors.gray.light.8": {
    "value": "#bbbbbb",
    "variable": "var(--colors-gray-light-8)"
  },
  "colors.gray.light.9": {
    "value": "#8d8d8d",
    "variable": "var(--colors-gray-light-9)"
  },
  "colors.gray.light.10": {
    "value": "#838383",
    "variable": "var(--colors-gray-light-10)"
  },
  "colors.gray.light.11": {
    "value": "#646464",
    "variable": "var(--colors-gray-light-11)"
  },
  "colors.gray.light.12": {
    "value": "#202020",
    "variable": "var(--colors-gray-light-12)"
  },
  "colors.gray.light.a1": {
    "value": "#00000003",
    "variable": "var(--colors-gray-light-a1)"
  },
  "colors.gray.light.a2": {
    "value": "#00000006",
    "variable": "var(--colors-gray-light-a2)"
  },
  "colors.gray.light.a3": {
    "value": "#0000000f",
    "variable": "var(--colors-gray-light-a3)"
  },
  "colors.gray.light.a4": {
    "value": "#00000017",
    "variable": "var(--colors-gray-light-a4)"
  },
  "colors.gray.light.a5": {
    "value": "#0000001f",
    "variable": "var(--colors-gray-light-a5)"
  },
  "colors.gray.light.a6": {
    "value": "#00000026",
    "variable": "var(--colors-gray-light-a6)"
  },
  "colors.gray.light.a7": {
    "value": "#00000031",
    "variable": "var(--colors-gray-light-a7)"
  },
  "colors.gray.light.a8": {
    "value": "#00000044",
    "variable": "var(--colors-gray-light-a8)"
  },
  "colors.gray.light.a9": {
    "value": "#00000072",
    "variable": "var(--colors-gray-light-a9)"
  },
  "colors.gray.light.a10": {
    "value": "#0000007c",
    "variable": "var(--colors-gray-light-a10)"
  },
  "colors.gray.light.a11": {
    "value": "#0000009b",
    "variable": "var(--colors-gray-light-a11)"
  },
  "colors.gray.light.a12": {
    "value": "#000000df",
    "variable": "var(--colors-gray-light-a12)"
  },
  "colors.gray.dark.1": {
    "value": "#111111",
    "variable": "var(--colors-gray-dark-1)"
  },
  "colors.gray.dark.2": {
    "value": "#191919",
    "variable": "var(--colors-gray-dark-2)"
  },
  "colors.gray.dark.3": {
    "value": "#222222",
    "variable": "var(--colors-gray-dark-3)"
  },
  "colors.gray.dark.4": {
    "value": "#2a2a2a",
    "variable": "var(--colors-gray-dark-4)"
  },
  "colors.gray.dark.5": {
    "value": "#313131",
    "variable": "var(--colors-gray-dark-5)"
  },
  "colors.gray.dark.6": {
    "value": "#3a3a3a",
    "variable": "var(--colors-gray-dark-6)"
  },
  "colors.gray.dark.7": {
    "value": "#484848",
    "variable": "var(--colors-gray-dark-7)"
  },
  "colors.gray.dark.8": {
    "value": "#606060",
    "variable": "var(--colors-gray-dark-8)"
  },
  "colors.gray.dark.9": {
    "value": "#6e6e6e",
    "variable": "var(--colors-gray-dark-9)"
  },
  "colors.gray.dark.10": {
    "value": "#7b7b7b",
    "variable": "var(--colors-gray-dark-10)"
  },
  "colors.gray.dark.11": {
    "value": "#b4b4b4",
    "variable": "var(--colors-gray-dark-11)"
  },
  "colors.gray.dark.12": {
    "value": "#eeeeee",
    "variable": "var(--colors-gray-dark-12)"
  },
  "colors.gray.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-gray-dark-a1)"
  },
  "colors.gray.dark.a2": {
    "value": "#ffffff09",
    "variable": "var(--colors-gray-dark-a2)"
  },
  "colors.gray.dark.a3": {
    "value": "#ffffff12",
    "variable": "var(--colors-gray-dark-a3)"
  },
  "colors.gray.dark.a4": {
    "value": "#ffffff1b",
    "variable": "var(--colors-gray-dark-a4)"
  },
  "colors.gray.dark.a5": {
    "value": "#ffffff22",
    "variable": "var(--colors-gray-dark-a5)"
  },
  "colors.gray.dark.a6": {
    "value": "#ffffff2c",
    "variable": "var(--colors-gray-dark-a6)"
  },
  "colors.gray.dark.a7": {
    "value": "#ffffff3b",
    "variable": "var(--colors-gray-dark-a7)"
  },
  "colors.gray.dark.a8": {
    "value": "#ffffff55",
    "variable": "var(--colors-gray-dark-a8)"
  },
  "colors.gray.dark.a9": {
    "value": "#ffffff64",
    "variable": "var(--colors-gray-dark-a9)"
  },
  "colors.gray.dark.a10": {
    "value": "#ffffff72",
    "variable": "var(--colors-gray-dark-a10)"
  },
  "colors.gray.dark.a11": {
    "value": "#ffffffaf",
    "variable": "var(--colors-gray-dark-a11)"
  },
  "colors.gray.dark.a12": {
    "value": "#ffffffed",
    "variable": "var(--colors-gray-dark-a12)"
  },
  "colors.neutral.50": {
    "value": "#F9FAFB",
    "variable": "var(--colors-neutral-50)"
  },
  "colors.neutral.100": {
    "value": "#F3F4F6",
    "variable": "var(--colors-neutral-100)"
  },
  "colors.neutral.200": {
    "value": "#E5E7EB",
    "variable": "var(--colors-neutral-200)"
  },
  "colors.neutral.300": {
    "value": "#D1D5DB",
    "variable": "var(--colors-neutral-300)"
  },
  "colors.neutral.400": {
    "value": "#9CA3AF",
    "variable": "var(--colors-neutral-400)"
  },
  "colors.neutral.500": {
    "value": "#6B7280",
    "variable": "var(--colors-neutral-500)"
  },
  "colors.neutral.600": {
    "value": "#4B5563",
    "variable": "var(--colors-neutral-600)"
  },
  "colors.neutral.700": {
    "value": "#374151",
    "variable": "var(--colors-neutral-700)"
  },
  "colors.neutral.800": {
    "value": "#1F2937",
    "variable": "var(--colors-neutral-800)"
  },
  "colors.neutral.900": {
    "value": "#111827",
    "variable": "var(--colors-neutral-900)"
  },
  "colors.neutral.950": {
    "value": "#030712",
    "variable": "var(--colors-neutral-950)"
  },
  "colors.neutral.light.1": {
    "value": "#fcfcfc",
    "variable": "var(--colors-neutral-light-1)"
  },
  "colors.neutral.light.2": {
    "value": "#f9f9f9",
    "variable": "var(--colors-neutral-light-2)"
  },
  "colors.neutral.light.3": {
    "value": "#f0f0f0",
    "variable": "var(--colors-neutral-light-3)"
  },
  "colors.neutral.light.4": {
    "value": "#e8e8e8",
    "variable": "var(--colors-neutral-light-4)"
  },
  "colors.neutral.light.5": {
    "value": "#e0e0e0",
    "variable": "var(--colors-neutral-light-5)"
  },
  "colors.neutral.light.6": {
    "value": "#d9d9d9",
    "variable": "var(--colors-neutral-light-6)"
  },
  "colors.neutral.light.7": {
    "value": "#cecece",
    "variable": "var(--colors-neutral-light-7)"
  },
  "colors.neutral.light.8": {
    "value": "#bbbbbb",
    "variable": "var(--colors-neutral-light-8)"
  },
  "colors.neutral.light.9": {
    "value": "#8d8d8d",
    "variable": "var(--colors-neutral-light-9)"
  },
  "colors.neutral.light.10": {
    "value": "#838383",
    "variable": "var(--colors-neutral-light-10)"
  },
  "colors.neutral.light.11": {
    "value": "#646464",
    "variable": "var(--colors-neutral-light-11)"
  },
  "colors.neutral.light.12": {
    "value": "#202020",
    "variable": "var(--colors-neutral-light-12)"
  },
  "colors.neutral.light.a1": {
    "value": "#00000003",
    "variable": "var(--colors-neutral-light-a1)"
  },
  "colors.neutral.light.a2": {
    "value": "#00000006",
    "variable": "var(--colors-neutral-light-a2)"
  },
  "colors.neutral.light.a3": {
    "value": "#0000000f",
    "variable": "var(--colors-neutral-light-a3)"
  },
  "colors.neutral.light.a4": {
    "value": "#00000017",
    "variable": "var(--colors-neutral-light-a4)"
  },
  "colors.neutral.light.a5": {
    "value": "#0000001f",
    "variable": "var(--colors-neutral-light-a5)"
  },
  "colors.neutral.light.a6": {
    "value": "#00000026",
    "variable": "var(--colors-neutral-light-a6)"
  },
  "colors.neutral.light.a7": {
    "value": "#00000031",
    "variable": "var(--colors-neutral-light-a7)"
  },
  "colors.neutral.light.a8": {
    "value": "#00000044",
    "variable": "var(--colors-neutral-light-a8)"
  },
  "colors.neutral.light.a9": {
    "value": "#00000072",
    "variable": "var(--colors-neutral-light-a9)"
  },
  "colors.neutral.light.a10": {
    "value": "#0000007c",
    "variable": "var(--colors-neutral-light-a10)"
  },
  "colors.neutral.light.a11": {
    "value": "#0000009b",
    "variable": "var(--colors-neutral-light-a11)"
  },
  "colors.neutral.light.a12": {
    "value": "#000000df",
    "variable": "var(--colors-neutral-light-a12)"
  },
  "colors.neutral.dark.1": {
    "value": "#111111",
    "variable": "var(--colors-neutral-dark-1)"
  },
  "colors.neutral.dark.2": {
    "value": "#191919",
    "variable": "var(--colors-neutral-dark-2)"
  },
  "colors.neutral.dark.3": {
    "value": "#222222",
    "variable": "var(--colors-neutral-dark-3)"
  },
  "colors.neutral.dark.4": {
    "value": "#2a2a2a",
    "variable": "var(--colors-neutral-dark-4)"
  },
  "colors.neutral.dark.5": {
    "value": "#313131",
    "variable": "var(--colors-neutral-dark-5)"
  },
  "colors.neutral.dark.6": {
    "value": "#3a3a3a",
    "variable": "var(--colors-neutral-dark-6)"
  },
  "colors.neutral.dark.7": {
    "value": "#484848",
    "variable": "var(--colors-neutral-dark-7)"
  },
  "colors.neutral.dark.8": {
    "value": "#606060",
    "variable": "var(--colors-neutral-dark-8)"
  },
  "colors.neutral.dark.9": {
    "value": "#6e6e6e",
    "variable": "var(--colors-neutral-dark-9)"
  },
  "colors.neutral.dark.10": {
    "value": "#7b7b7b",
    "variable": "var(--colors-neutral-dark-10)"
  },
  "colors.neutral.dark.11": {
    "value": "#b4b4b4",
    "variable": "var(--colors-neutral-dark-11)"
  },
  "colors.neutral.dark.12": {
    "value": "#eeeeee",
    "variable": "var(--colors-neutral-dark-12)"
  },
  "colors.neutral.dark.a1": {
    "value": "#00000000",
    "variable": "var(--colors-neutral-dark-a1)"
  },
  "colors.neutral.dark.a2": {
    "value": "#ffffff09",
    "variable": "var(--colors-neutral-dark-a2)"
  },
  "colors.neutral.dark.a3": {
    "value": "#ffffff12",
    "variable": "var(--colors-neutral-dark-a3)"
  },
  "colors.neutral.dark.a4": {
    "value": "#ffffff1b",
    "variable": "var(--colors-neutral-dark-a4)"
  },
  "colors.neutral.dark.a5": {
    "value": "#ffffff22",
    "variable": "var(--colors-neutral-dark-a5)"
  },
  "colors.neutral.dark.a6": {
    "value": "#ffffff2c",
    "variable": "var(--colors-neutral-dark-a6)"
  },
  "colors.neutral.dark.a7": {
    "value": "#ffffff3b",
    "variable": "var(--colors-neutral-dark-a7)"
  },
  "colors.neutral.dark.a8": {
    "value": "#ffffff55",
    "variable": "var(--colors-neutral-dark-a8)"
  },
  "colors.neutral.dark.a9": {
    "value": "#ffffff64",
    "variable": "var(--colors-neutral-dark-a9)"
  },
  "colors.neutral.dark.a10": {
    "value": "#ffffff72",
    "variable": "var(--colors-neutral-dark-a10)"
  },
  "colors.neutral.dark.a11": {
    "value": "#ffffffaf",
    "variable": "var(--colors-neutral-dark-a11)"
  },
  "colors.neutral.dark.a12": {
    "value": "#ffffffed",
    "variable": "var(--colors-neutral-dark-a12)"
  },
  "durations.fastest": {
    "value": "50ms",
    "variable": "var(--durations-fastest)"
  },
  "durations.faster": {
    "value": "100ms",
    "variable": "var(--durations-faster)"
  },
  "durations.fast": {
    "value": "150ms",
    "variable": "var(--durations-fast)"
  },
  "durations.normal": {
    "value": "200ms",
    "variable": "var(--durations-normal)"
  },
  "durations.slow": {
    "value": "300ms",
    "variable": "var(--durations-slow)"
  },
  "durations.slower": {
    "value": "400ms",
    "variable": "var(--durations-slower)"
  },
  "durations.slowest": {
    "value": "500ms",
    "variable": "var(--durations-slowest)"
  },
  "easings.pulse": {
    "value": "cubic-bezier(0.4, 0.0, 0.6, 1.0)",
    "variable": "var(--easings-pulse)"
  },
  "easings.default": {
    "value": "cubic-bezier(0.2, 0.0, 0, 1.0)",
    "variable": "var(--easings-default)"
  },
  "easings.emphasized-in": {
    "value": "cubic-bezier(0.05, 0.7, 0.1, 1.0)",
    "variable": "var(--easings-emphasized-in)"
  },
  "easings.emphasized-out": {
    "value": "cubic-bezier(0.3, 0.0, 0.8, 0.15)",
    "variable": "var(--easings-emphasized-out)"
  },
  "fonts.inter": {
    "value": "Inter",
    "variable": "var(--fonts-inter)"
  },
  "fonts.pp-editorial-new": {
    "value": "PP Editorial New",
    "variable": "var(--fonts-pp-editorial-new)"
  },
  "fonts.sans": {
    "value": "ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, \"Noto Sans\", sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\", \"Noto Color Emoji\"",
    "variable": "var(--fonts-sans)"
  },
  "fonts.serif": {
    "value": "ui-serif, Georgia, Cambria, \"Times New Roman\", Times, serif",
    "variable": "var(--fonts-serif)"
  },
  "fonts.mono": {
    "value": "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace",
    "variable": "var(--fonts-mono)"
  },
  "fontSizes.h6": {
    "value": "40px",
    "variable": "var(--font-sizes-h6)"
  },
  "fontSizes.h5": {
    "value": "48px",
    "variable": "var(--font-sizes-h5)"
  },
  "fontSizes.h4": {
    "value": "56px",
    "variable": "var(--font-sizes-h4)"
  },
  "fontSizes.h3": {
    "value": "64px",
    "variable": "var(--font-sizes-h3)"
  },
  "fontSizes.h2": {
    "value": "72px",
    "variable": "var(--font-sizes-h2)"
  },
  "fontSizes.h1": {
    "value": "80px",
    "variable": "var(--font-sizes-h1)"
  },
  "fontSizes.2xs": {
    "value": "0.5rem",
    "variable": "var(--font-sizes-2xs)"
  },
  "fontSizes.xs": {
    "value": "0.75rem",
    "variable": "var(--font-sizes-xs)"
  },
  "fontSizes.sm": {
    "value": "0.875rem",
    "variable": "var(--font-sizes-sm)"
  },
  "fontSizes.md": {
    "value": "1rem",
    "variable": "var(--font-sizes-md)"
  },
  "fontSizes.lg": {
    "value": "1.125rem",
    "variable": "var(--font-sizes-lg)"
  },
  "fontSizes.xl": {
    "value": "1.25rem",
    "variable": "var(--font-sizes-xl)"
  },
  "fontSizes.2xl": {
    "value": "1.5rem",
    "variable": "var(--font-sizes-2xl)"
  },
  "fontSizes.3xl": {
    "value": "1.875rem",
    "variable": "var(--font-sizes-3xl)"
  },
  "fontSizes.4xl": {
    "value": "2.25rem",
    "variable": "var(--font-sizes-4xl)"
  },
  "fontSizes.5xl": {
    "value": "3rem",
    "variable": "var(--font-sizes-5xl)"
  },
  "fontSizes.6xl": {
    "value": "3.75rem",
    "variable": "var(--font-sizes-6xl)"
  },
  "fontSizes.7xl": {
    "value": "4.5rem",
    "variable": "var(--font-sizes-7xl)"
  },
  "fontSizes.8xl": {
    "value": "6rem",
    "variable": "var(--font-sizes-8xl)"
  },
  "fontSizes.9xl": {
    "value": "8rem",
    "variable": "var(--font-sizes-9xl)"
  },
  "fontWeights.regular": {
    "value": "400",
    "variable": "var(--font-weights-regular)"
  },
  "fontWeights.semiBold": {
    "value": "600",
    "variable": "var(--font-weights-semi-bold)"
  },
  "fontWeights.thin": {
    "value": "100",
    "variable": "var(--font-weights-thin)"
  },
  "fontWeights.extralight": {
    "value": "200",
    "variable": "var(--font-weights-extralight)"
  },
  "fontWeights.light": {
    "value": "300",
    "variable": "var(--font-weights-light)"
  },
  "fontWeights.normal": {
    "value": "400",
    "variable": "var(--font-weights-normal)"
  },
  "fontWeights.medium": {
    "value": "500",
    "variable": "var(--font-weights-medium)"
  },
  "fontWeights.semibold": {
    "value": "600",
    "variable": "var(--font-weights-semibold)"
  },
  "fontWeights.bold": {
    "value": "700",
    "variable": "var(--font-weights-bold)"
  },
  "fontWeights.extrabold": {
    "value": "800",
    "variable": "var(--font-weights-extrabold)"
  },
  "fontWeights.black": {
    "value": "900",
    "variable": "var(--font-weights-black)"
  },
  "letterSpacings.xs": {
    "value": "-0.4px",
    "variable": "var(--letter-spacings-xs)"
  },
  "letterSpacings.sm": {
    "value": "-0.6px",
    "variable": "var(--letter-spacings-sm)"
  },
  "letterSpacings.md": {
    "value": "-0.8px",
    "variable": "var(--letter-spacings-md)"
  },
  "letterSpacings.lg": {
    "value": "-1px",
    "variable": "var(--letter-spacings-lg)"
  },
  "letterSpacings.xl": {
    "value": "-1.2px",
    "variable": "var(--letter-spacings-xl)"
  },
  "letterSpacings.2xl": {
    "value": "-1.5px",
    "variable": "var(--letter-spacings-2xl)"
  },
  "letterSpacings.3xl": {
    "value": "-1.8px",
    "variable": "var(--letter-spacings-3xl)"
  },
  "letterSpacings.4xl": {
    "value": "-2px",
    "variable": "var(--letter-spacings-4xl)"
  },
  "letterSpacings.5xl": {
    "value": "-3px",
    "variable": "var(--letter-spacings-5xl)"
  },
  "letterSpacings.6xl": {
    "value": "-4px",
    "variable": "var(--letter-spacings-6xl)"
  },
  "letterSpacings.tighter": {
    "value": "-0.05em",
    "variable": "var(--letter-spacings-tighter)"
  },
  "letterSpacings.tight": {
    "value": "-0.025em",
    "variable": "var(--letter-spacings-tight)"
  },
  "letterSpacings.normal": {
    "value": "0em",
    "variable": "var(--letter-spacings-normal)"
  },
  "letterSpacings.wide": {
    "value": "0.025em",
    "variable": "var(--letter-spacings-wide)"
  },
  "letterSpacings.wider": {
    "value": "0.05em",
    "variable": "var(--letter-spacings-wider)"
  },
  "letterSpacings.widest": {
    "value": "0.1em",
    "variable": "var(--letter-spacings-widest)"
  },
  "lineHeights.xs": {
    "value": "12px",
    "variable": "var(--line-heights-xs)"
  },
  "lineHeights.sm": {
    "value": "16px",
    "variable": "var(--line-heights-sm)"
  },
  "lineHeights.md": {
    "value": "20px",
    "variable": "var(--line-heights-md)"
  },
  "lineHeights.lg": {
    "value": "24px",
    "variable": "var(--line-heights-lg)"
  },
  "lineHeights.xl": {
    "value": "26px",
    "variable": "var(--line-heights-xl)"
  },
  "lineHeights.2xl": {
    "value": "28px",
    "variable": "var(--line-heights-2xl)"
  },
  "lineHeights.3xl": {
    "value": "32px",
    "variable": "var(--line-heights-3xl)"
  },
  "lineHeights.4xl": {
    "value": "36px",
    "variable": "var(--line-heights-4xl)"
  },
  "lineHeights.5xl": {
    "value": "40px",
    "variable": "var(--line-heights-5xl)"
  },
  "lineHeights.6xl": {
    "value": "44px",
    "variable": "var(--line-heights-6xl)"
  },
  "lineHeights.7xl": {
    "value": "50px",
    "variable": "var(--line-heights-7xl)"
  },
  "lineHeights.8xl": {
    "value": "58px",
    "variable": "var(--line-heights-8xl)"
  },
  "lineHeights.9xl": {
    "value": "66px",
    "variable": "var(--line-heights-9xl)"
  },
  "lineHeights.10xl": {
    "value": "74px",
    "variable": "var(--line-heights-10xl)"
  },
  "lineHeights.11xl": {
    "value": "82px",
    "variable": "var(--line-heights-11xl)"
  },
  "lineHeights.12xl": {
    "value": "92px",
    "variable": "var(--line-heights-12xl)"
  },
  "lineHeights.none": {
    "value": "1",
    "variable": "var(--line-heights-none)"
  },
  "lineHeights.tight": {
    "value": "1.25",
    "variable": "var(--line-heights-tight)"
  },
  "lineHeights.normal": {
    "value": "1.5",
    "variable": "var(--line-heights-normal)"
  },
  "lineHeights.relaxed": {
    "value": "1.75",
    "variable": "var(--line-heights-relaxed)"
  },
  "lineHeights.loose": {
    "value": "2",
    "variable": "var(--line-heights-loose)"
  },
  "radii.none": {
    "value": "var(--spacing-0)",
    "variable": "var(--radii-none)"
  },
  "radii.2xs": {
    "value": "0.0625rem",
    "variable": "var(--radii-2xs)"
  },
  "radii.xs": {
    "value": "0.125rem",
    "variable": "var(--radii-xs)"
  },
  "radii.sm": {
    "value": "0.25rem",
    "variable": "var(--radii-sm)"
  },
  "radii.md": {
    "value": "0.375rem",
    "variable": "var(--radii-md)"
  },
  "radii.lg": {
    "value": "0.5rem",
    "variable": "var(--radii-lg)"
  },
  "radii.xl": {
    "value": "0.75rem",
    "variable": "var(--radii-xl)"
  },
  "radii.2xl": {
    "value": "1rem",
    "variable": "var(--radii-2xl)"
  },
  "radii.3xl": {
    "value": "1.5rem",
    "variable": "var(--radii-3xl)"
  },
  "radii.full": {
    "value": "var(--spacing-20)",
    "variable": "var(--radii-full)"
  },
  "sizes.0": {
    "value": "0rem",
    "variable": "var(--sizes-0)"
  },
  "sizes.1": {
    "value": "0.25rem",
    "variable": "var(--sizes-1)"
  },
  "sizes.2": {
    "value": "0.5rem",
    "variable": "var(--sizes-2)"
  },
  "sizes.3": {
    "value": "0.75rem",
    "variable": "var(--sizes-3)"
  },
  "sizes.4": {
    "value": "1rem",
    "variable": "var(--sizes-4)"
  },
  "sizes.5": {
    "value": "1.25rem",
    "variable": "var(--sizes-5)"
  },
  "sizes.6": {
    "value": "1.5rem",
    "variable": "var(--sizes-6)"
  },
  "sizes.7": {
    "value": "1.75rem",
    "variable": "var(--sizes-7)"
  },
  "sizes.8": {
    "value": "2rem",
    "variable": "var(--sizes-8)"
  },
  "sizes.9": {
    "value": "2.25rem",
    "variable": "var(--sizes-9)"
  },
  "sizes.10": {
    "value": "2.5rem",
    "variable": "var(--sizes-10)"
  },
  "sizes.11": {
    "value": "2.75rem",
    "variable": "var(--sizes-11)"
  },
  "sizes.12": {
    "value": "3rem",
    "variable": "var(--sizes-12)"
  },
  "sizes.14": {
    "value": "3.5rem",
    "variable": "var(--sizes-14)"
  },
  "sizes.16": {
    "value": "4rem",
    "variable": "var(--sizes-16)"
  },
  "sizes.20": {
    "value": "5rem",
    "variable": "var(--sizes-20)"
  },
  "sizes.24": {
    "value": "6rem",
    "variable": "var(--sizes-24)"
  },
  "sizes.28": {
    "value": "7rem",
    "variable": "var(--sizes-28)"
  },
  "sizes.32": {
    "value": "8rem",
    "variable": "var(--sizes-32)"
  },
  "sizes.36": {
    "value": "9rem",
    "variable": "var(--sizes-36)"
  },
  "sizes.40": {
    "value": "10rem",
    "variable": "var(--sizes-40)"
  },
  "sizes.44": {
    "value": "11rem",
    "variable": "var(--sizes-44)"
  },
  "sizes.48": {
    "value": "12rem",
    "variable": "var(--sizes-48)"
  },
  "sizes.52": {
    "value": "13rem",
    "variable": "var(--sizes-52)"
  },
  "sizes.56": {
    "value": "14rem",
    "variable": "var(--sizes-56)"
  },
  "sizes.60": {
    "value": "15rem",
    "variable": "var(--sizes-60)"
  },
  "sizes.64": {
    "value": "16rem",
    "variable": "var(--sizes-64)"
  },
  "sizes.72": {
    "value": "18rem",
    "variable": "var(--sizes-72)"
  },
  "sizes.80": {
    "value": "20rem",
    "variable": "var(--sizes-80)"
  },
  "sizes.96": {
    "value": "24rem",
    "variable": "var(--sizes-96)"
  },
  "sizes.0.5": {
    "value": "0.125rem",
    "variable": "var(--sizes-0\\.5)"
  },
  "sizes.1.5": {
    "value": "0.375rem",
    "variable": "var(--sizes-1\\.5)"
  },
  "sizes.2.5": {
    "value": "0.625rem",
    "variable": "var(--sizes-2\\.5)"
  },
  "sizes.3.5": {
    "value": "0.875rem",
    "variable": "var(--sizes-3\\.5)"
  },
  "sizes.4.5": {
    "value": "1.125rem",
    "variable": "var(--sizes-4\\.5)"
  },
  "sizes.2xs": {
    "value": "16rem",
    "variable": "var(--sizes-2xs)"
  },
  "sizes.xs": {
    "value": "20rem",
    "variable": "var(--sizes-xs)"
  },
  "sizes.sm": {
    "value": "24rem",
    "variable": "var(--sizes-sm)"
  },
  "sizes.md": {
    "value": "28rem",
    "variable": "var(--sizes-md)"
  },
  "sizes.lg": {
    "value": "32rem",
    "variable": "var(--sizes-lg)"
  },
  "sizes.xl": {
    "value": "36rem",
    "variable": "var(--sizes-xl)"
  },
  "sizes.2xl": {
    "value": "42rem",
    "variable": "var(--sizes-2xl)"
  },
  "sizes.3xl": {
    "value": "48rem",
    "variable": "var(--sizes-3xl)"
  },
  "sizes.4xl": {
    "value": "56rem",
    "variable": "var(--sizes-4xl)"
  },
  "sizes.5xl": {
    "value": "64rem",
    "variable": "var(--sizes-5xl)"
  },
  "sizes.6xl": {
    "value": "72rem",
    "variable": "var(--sizes-6xl)"
  },
  "sizes.7xl": {
    "value": "80rem",
    "variable": "var(--sizes-7xl)"
  },
  "sizes.8xl": {
    "value": "90rem",
    "variable": "var(--sizes-8xl)"
  },
  "sizes.full": {
    "value": "100%",
    "variable": "var(--sizes-full)"
  },
  "sizes.min": {
    "value": "min-content",
    "variable": "var(--sizes-min)"
  },
  "sizes.max": {
    "value": "max-content",
    "variable": "var(--sizes-max)"
  },
  "sizes.fit": {
    "value": "fit-content",
    "variable": "var(--sizes-fit)"
  },
  "sizes.breakpoint-sm": {
    "value": "640px",
    "variable": "var(--sizes-breakpoint-sm)"
  },
  "sizes.breakpoint-md": {
    "value": "768px",
    "variable": "var(--sizes-breakpoint-md)"
  },
  "sizes.breakpoint-lg": {
    "value": "1024px",
    "variable": "var(--sizes-breakpoint-lg)"
  },
  "sizes.breakpoint-xl": {
    "value": "1280px",
    "variable": "var(--sizes-breakpoint-xl)"
  },
  "sizes.breakpoint-2xl": {
    "value": "1536px",
    "variable": "var(--sizes-breakpoint-2xl)"
  },
  "spacing.0": {
    "value": "0rem",
    "variable": "var(--spacing-0)"
  },
  "spacing.1": {
    "value": "0.25rem",
    "variable": "var(--spacing-1)"
  },
  "spacing.2": {
    "value": "0.5rem",
    "variable": "var(--spacing-2)"
  },
  "spacing.3": {
    "value": "0.75rem",
    "variable": "var(--spacing-3)"
  },
  "spacing.4": {
    "value": "1rem",
    "variable": "var(--spacing-4)"
  },
  "spacing.5": {
    "value": "1.25rem",
    "variable": "var(--spacing-5)"
  },
  "spacing.6": {
    "value": "1.5rem",
    "variable": "var(--spacing-6)"
  },
  "spacing.7": {
    "value": "1.75rem",
    "variable": "var(--spacing-7)"
  },
  "spacing.8": {
    "value": "2rem",
    "variable": "var(--spacing-8)"
  },
  "spacing.9": {
    "value": "2.25rem",
    "variable": "var(--spacing-9)"
  },
  "spacing.10": {
    "value": "2.5rem",
    "variable": "var(--spacing-10)"
  },
  "spacing.11": {
    "value": "2.75rem",
    "variable": "var(--spacing-11)"
  },
  "spacing.12": {
    "value": "3rem",
    "variable": "var(--spacing-12)"
  },
  "spacing.14": {
    "value": "3.5rem",
    "variable": "var(--spacing-14)"
  },
  "spacing.16": {
    "value": "4rem",
    "variable": "var(--spacing-16)"
  },
  "spacing.20": {
    "value": "5rem",
    "variable": "var(--spacing-20)"
  },
  "spacing.24": {
    "value": "6rem",
    "variable": "var(--spacing-24)"
  },
  "spacing.28": {
    "value": "7rem",
    "variable": "var(--spacing-28)"
  },
  "spacing.30": {
    "value": "7.5rem",
    "variable": "var(--spacing-30)"
  },
  "spacing.32": {
    "value": "8rem",
    "variable": "var(--spacing-32)"
  },
  "spacing.36": {
    "value": "9rem",
    "variable": "var(--spacing-36)"
  },
  "spacing.40": {
    "value": "10rem",
    "variable": "var(--spacing-40)"
  },
  "spacing.44": {
    "value": "11rem",
    "variable": "var(--spacing-44)"
  },
  "spacing.48": {
    "value": "12rem",
    "variable": "var(--spacing-48)"
  },
  "spacing.52": {
    "value": "13rem",
    "variable": "var(--spacing-52)"
  },
  "spacing.56": {
    "value": "14rem",
    "variable": "var(--spacing-56)"
  },
  "spacing.60": {
    "value": "15rem",
    "variable": "var(--spacing-60)"
  },
  "spacing.64": {
    "value": "16rem",
    "variable": "var(--spacing-64)"
  },
  "spacing.72": {
    "value": "18rem",
    "variable": "var(--spacing-72)"
  },
  "spacing.80": {
    "value": "20rem",
    "variable": "var(--spacing-80)"
  },
  "spacing.96": {
    "value": "24rem",
    "variable": "var(--spacing-96)"
  },
  "spacing.180": {
    "value": "45rem",
    "variable": "var(--spacing-180)"
  },
  "spacing.5.5": {
    "value": "1.375rem",
    "variable": "var(--spacing-5\\.5)"
  },
  "spacing.0.5": {
    "value": "0.125rem",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.1.5": {
    "value": "0.375rem",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.2.5": {
    "value": "0.625rem",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.3.5": {
    "value": "0.875rem",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.4.5": {
    "value": "1.125rem",
    "variable": "var(--spacing-4\\.5)"
  },
  "zIndex.hide": {
    "value": -1,
    "variable": "var(--z-index-hide)"
  },
  "zIndex.base": {
    "value": 0,
    "variable": "var(--z-index-base)"
  },
  "zIndex.docked": {
    "value": 10,
    "variable": "var(--z-index-docked)"
  },
  "zIndex.dropdown": {
    "value": 1000,
    "variable": "var(--z-index-dropdown)"
  },
  "zIndex.sticky": {
    "value": 1100,
    "variable": "var(--z-index-sticky)"
  },
  "zIndex.banner": {
    "value": 1200,
    "variable": "var(--z-index-banner)"
  },
  "zIndex.overlay": {
    "value": 1300,
    "variable": "var(--z-index-overlay)"
  },
  "zIndex.modal": {
    "value": 1400,
    "variable": "var(--z-index-modal)"
  },
  "zIndex.popover": {
    "value": 1500,
    "variable": "var(--z-index-popover)"
  },
  "zIndex.skipLink": {
    "value": 1600,
    "variable": "var(--z-index-skip-link)"
  },
  "zIndex.toast": {
    "value": 1700,
    "variable": "var(--z-index-toast)"
  },
  "zIndex.tooltip": {
    "value": 1800,
    "variable": "var(--z-index-tooltip)"
  },
  "breakpoints.sm": {
    "value": "640px",
    "variable": "var(--breakpoints-sm)"
  },
  "breakpoints.md": {
    "value": "768px",
    "variable": "var(--breakpoints-md)"
  },
  "breakpoints.lg": {
    "value": "1024px",
    "variable": "var(--breakpoints-lg)"
  },
  "breakpoints.xl": {
    "value": "1280px",
    "variable": "var(--breakpoints-xl)"
  },
  "breakpoints.2xl": {
    "value": "1536px",
    "variable": "var(--breakpoints-2xl)"
  },
  "spacing.none": {
    "value": "var(--spacing-0)",
    "variable": "var(--spacing-none)"
  },
  "spacing.spacing-0.5": {
    "value": "var(--spacing-0\\.5)",
    "variable": "var(--spacing-spacing-0\\.5)"
  },
  "spacing.spacing-1": {
    "value": "var(--spacing-1)",
    "variable": "var(--spacing-spacing-1)"
  },
  "spacing.spacing-1.5": {
    "value": "var(--spacing-1\\.5)",
    "variable": "var(--spacing-spacing-1\\.5)"
  },
  "spacing.spacing-2": {
    "value": "var(--spacing-2)",
    "variable": "var(--spacing-spacing-2)"
  },
  "spacing.spacing-2.5": {
    "value": "var(--spacing-2\\.5)",
    "variable": "var(--spacing-spacing-2\\.5)"
  },
  "spacing.spacing-3": {
    "value": "var(--spacing-3)",
    "variable": "var(--spacing-spacing-3)"
  },
  "spacing.spacing-3.5": {
    "value": "var(--spacing-3\\.5)",
    "variable": "var(--spacing-spacing-3\\.5)"
  },
  "spacing.spacing-4": {
    "value": "var(--spacing-4)",
    "variable": "var(--spacing-spacing-4)"
  },
  "spacing.spacing-5": {
    "value": "var(--spacing-5)",
    "variable": "var(--spacing-spacing-5)"
  },
  "spacing.spacing-6": {
    "value": "var(--spacing-6)",
    "variable": "var(--spacing-spacing-6)"
  },
  "spacing.spacing-8": {
    "value": "var(--spacing-8)",
    "variable": "var(--spacing-spacing-8)"
  },
  "spacing.spacing-10": {
    "value": "var(--spacing-10)",
    "variable": "var(--spacing-spacing-10)"
  },
  "spacing.spacing-12": {
    "value": "var(--spacing-12)",
    "variable": "var(--spacing-spacing-12)"
  },
  "spacing.spacing-14": {
    "value": "var(--spacing-14)",
    "variable": "var(--spacing-spacing-14)"
  },
  "spacing.spacing-16": {
    "value": "var(--spacing-16)",
    "variable": "var(--spacing-spacing-16)"
  },
  "spacing.spacing-20": {
    "value": "var(--spacing-20)",
    "variable": "var(--spacing-spacing-20)"
  },
  "spacing.spacing-24": {
    "value": "var(--spacing-24)",
    "variable": "var(--spacing-spacing-24)"
  },
  "spacing.spacing-32": {
    "value": "var(--spacing-32)",
    "variable": "var(--spacing-spacing-32)"
  },
  "spacing.spacing-40": {
    "value": "var(--spacing-40)",
    "variable": "var(--spacing-spacing-40)"
  },
  "colors.text-primary": {
    "value": "var(--colors-neutral-900)",
    "variable": "var(--colors-text-primary)"
  },
  "colors.text-primary_on-brand": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-text-primary_on-brand)"
  },
  "colors.text-secondary": {
    "value": "var(--colors-neutral-600)",
    "variable": "var(--colors-text-secondary)"
  },
  "colors.text-secondary_hover": {
    "value": "var(--colors-neutral-700)",
    "variable": "var(--colors-text-secondary_hover)"
  },
  "colors.text-secondary_on-brand": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-text-secondary_on-brand)"
  },
  "colors.text-tertiary": {
    "value": "var(--colors-neutral-400)",
    "variable": "var(--colors-text-tertiary)"
  },
  "colors.text-tertiary_hover": {
    "value": "var(--colors-neutral-500)",
    "variable": "var(--colors-text-tertiary_hover)"
  },
  "colors.text-tertiary_on-brand": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-text-tertiary_on-brand)"
  },
  "colors.text-quaternary": {
    "value": "var(--colors-neutral-300)",
    "variable": "var(--colors-text-quaternary)"
  },
  "colors.text-quaternary_on-brand": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-text-quaternary_on-brand)"
  },
  "colors.text-white": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-text-white)"
  },
  "colors.text-disabled": {
    "value": "var(--colors-neutral-400)",
    "variable": "var(--colors-text-disabled)"
  },
  "colors.text-placeholder": {
    "value": "var(--colors-neutral-400)",
    "variable": "var(--colors-text-placeholder)"
  },
  "colors.text-placeholder_subtle": {
    "value": "var(--colors-neutral-200)",
    "variable": "var(--colors-text-placeholder_subtle)"
  },
  "colors.text-brand-primary": {
    "value": "var(--colors-brand-900)",
    "variable": "var(--colors-text-brand-primary)"
  },
  "colors.text-brand-secondary": {
    "value": "var(--colors-brand-600)",
    "variable": "var(--colors-text-brand-secondary)"
  },
  "colors.text-brand-tertiary": {
    "value": "var(--colors-brand-400)",
    "variable": "var(--colors-text-brand-tertiary)"
  },
  "colors.text-brand-tertiary_alt": {
    "value": "var(--colors-brand-500)",
    "variable": "var(--colors-text-brand-tertiary_alt)"
  },
  "colors.text-success-primary": {
    "value": "var(--colors-success-600)",
    "variable": "var(--colors-text-success-primary)"
  },
  "colors.text-warning-primary": {
    "value": "var(--colors-warning-600)",
    "variable": "var(--colors-text-warning-primary)"
  },
  "colors.text-error-primary": {
    "value": "var(--colors-error-600)",
    "variable": "var(--colors-text-error-primary)"
  },
  "colors.border-primary": {
    "value": "var(--colors-neutral-400)",
    "variable": "var(--colors-border-primary)"
  },
  "colors.border-primary_on-brand": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-border-primary_on-brand)"
  },
  "colors.border-secondary": {
    "value": "var(--colors-neutral-200)",
    "variable": "var(--colors-border-secondary)"
  },
  "colors.border-tertiary": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-border-tertiary)"
  },
  "colors.border-disabled": {
    "value": "var(--colors-neutral-200)",
    "variable": "var(--colors-border-disabled)"
  },
  "colors.border-disabled_sublte": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-border-disabled_sublte)"
  },
  "colors.border-brand": {
    "value": "var(--colors-brand-900)",
    "variable": "var(--colors-border-brand)"
  },
  "colors.border-brand-solid": {
    "value": "var(--colors-brand-950)",
    "variable": "var(--colors-border-brand-solid)"
  },
  "colors.border-brand-solid_alt": {
    "value": "var(--colors-brand-950)",
    "variable": "var(--colors-border-brand-solid_alt)"
  },
  "colors.border-error": {
    "value": "var(--colors-error-600)",
    "variable": "var(--colors-border-error)"
  },
  "colors.fg-primary": {
    "value": "var(--colors-neutral-900)",
    "variable": "var(--colors-fg-primary)"
  },
  "colors.fg-primary_on-brand": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-fg-primary_on-brand)"
  },
  "colors.fg-secondary": {
    "value": "var(--colors-neutral-600)",
    "variable": "var(--colors-fg-secondary)"
  },
  "colors.fg-secondary_hover": {
    "value": "var(--colors-neutral-700)",
    "variable": "var(--colors-fg-secondary_hover)"
  },
  "colors.fg-tertiary": {
    "value": "var(--colors-neutral-400)",
    "variable": "var(--colors-fg-tertiary)"
  },
  "colors.fg-tertiary_hover": {
    "value": "var(--colors-neutral-500)",
    "variable": "var(--colors-fg-tertiary_hover)"
  },
  "colors.fg-senary": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-fg-senary)"
  },
  "colors.fg-white": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-fg-white)"
  },
  "colors.fg-disabled": {
    "value": "var(--colors-neutral-400)",
    "variable": "var(--colors-fg-disabled)"
  },
  "colors.fg-disabled_alt": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-fg-disabled_alt)"
  },
  "colors.fg-disabled_subtle": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-fg-disabled_subtle)"
  },
  "colors.fg-brand-primary": {
    "value": "var(--colors-brand-900)",
    "variable": "var(--colors-fg-brand-primary)"
  },
  "colors.fg-brand-primary_alt": {
    "value": "var(--colors-brand-800)",
    "variable": "var(--colors-fg-brand-primary_alt)"
  },
  "colors.fg-brand-secondary": {
    "value": "var(--colors-brand-600)",
    "variable": "var(--colors-fg-brand-secondary)"
  },
  "colors.fg-success-primary": {
    "value": "var(--colors-success-600)",
    "variable": "var(--colors-fg-success-primary)"
  },
  "colors.fg-warning-primary": {
    "value": "var(--colors-warning-600)",
    "variable": "var(--colors-fg-warning-primary)"
  },
  "colors.fg-error-primary": {
    "value": "var(--colors-error-600)",
    "variable": "var(--colors-fg-error-primary)"
  },
  "colors.bg-primary": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-bg-primary)"
  },
  "colors.bg-primary_hover": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-bg-primary_hover)"
  },
  "colors.bg-secondary": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-bg-secondary)"
  },
  "colors.bg-secondary_hover": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-bg-secondary_hover)"
  },
  "colors.bg-tertiary": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-bg-tertiary)"
  },
  "colors.bg-tertiary_hover": {
    "value": "var(--colors-neutral-200)",
    "variable": "var(--colors-bg-tertiary_hover)"
  },
  "colors.bg-tertiary_subtle": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-bg-tertiary_subtle)"
  },
  "colors.bg-quaternary": {
    "value": "var(--colors-neutral-200)",
    "variable": "var(--colors-bg-quaternary)"
  },
  "colors.bg-quaternary_hover": {
    "value": "var(--colors-neutral-300)",
    "variable": "var(--colors-bg-quaternary_hover)"
  },
  "colors.bg-white": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-bg-white)"
  },
  "colors.bg-active": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-bg-active)"
  },
  "colors.bg-disabled": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-bg-disabled)"
  },
  "colors.bg-disabled_subtle": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-bg-disabled_subtle)"
  },
  "colors.bg-overlay": {
    "value": "var(--colors-neutral-700)",
    "variable": "var(--colors-bg-overlay)"
  },
  "colors.bg-brand-primary": {
    "value": "var(--colors-brand-600)",
    "variable": "var(--colors-bg-brand-primary)"
  },
  "colors.bg-brand-primary_hover": {
    "value": "var(--colors-bg-brand-700)",
    "variable": "var(--colors-bg-brand-primary_hover)"
  },
  "colors.bg-brand-primary_subtle": {
    "value": "var(--colors-bg-brand-500)",
    "variable": "var(--colors-bg-brand-primary_subtle)"
  },
  "colors.bg-brand-secondary": {
    "value": "var(--colors-bg-brand-50)",
    "variable": "var(--colors-bg-brand-secondary)"
  },
  "colors.bg-brand-secondary_hover": {
    "value": "var(--colors-bg-brand-100)",
    "variable": "var(--colors-bg-brand-secondary_hover)"
  },
  "colors.bg-brand-secondary_subtle": {
    "value": "var(--colors-bg-brand-50)",
    "variable": "var(--colors-bg-brand-secondary_subtle)"
  },
  "colors.bg-brand-solid": {
    "value": "var(--colors-bg-brand-600)",
    "variable": "var(--colors-bg-brand-solid)"
  },
  "colors.bg-brand-solid_hover": {
    "value": "var(--colors-bg-brand-500)",
    "variable": "var(--colors-bg-brand-solid_hover)"
  },
  "colors.bg-success-primary": {
    "value": "var(--colors-success-50)",
    "variable": "var(--colors-bg-success-primary)"
  },
  "colors.bg-success-solid": {
    "value": "var(--colors-success-600)",
    "variable": "var(--colors-bg-success-solid)"
  },
  "colors.bg-success.solid_hover": {
    "value": "var(--colors-success-800)",
    "variable": "var(--colors-bg-success\\.solid_hover)"
  },
  "colors.bg-success-solid_alt": {
    "value": "var(--colors-success-500)",
    "variable": "var(--colors-bg-success-solid_alt)"
  },
  "colors.bg-warning-primary": {
    "value": "var(--colors-warning-50)",
    "variable": "var(--colors-bg-warning-primary)"
  },
  "colors.bg-warning-solid": {
    "value": "var(--colors-warning-600)",
    "variable": "var(--colors-bg-warning-solid)"
  },
  "colors.bg-warning-solid_alt": {
    "value": "var(--colors-warning-500)",
    "variable": "var(--colors-bg-warning-solid_alt)"
  },
  "colors.bg-error-primary": {
    "value": "var(--colors-error-50)",
    "variable": "var(--colors-bg-error-primary)"
  },
  "colors.bg-error-solid": {
    "value": "var(--colors-error-600)",
    "variable": "var(--colors-bg-error-solid)"
  },
  "colors.bg-error-solid_alt": {
    "value": "var(--colors-error-500)",
    "variable": "var(--colors-bg-error-solid_alt)"
  },
  "colors.alpha-white-10": {
    "value": "var(--colors-white-4\\%)",
    "variable": "var(--colors-alpha-white-10)"
  },
  "colors.alpha-white-20": {
    "value": "var(--colors-white-8\\%)",
    "variable": "var(--colors-alpha-white-20)"
  },
  "colors.alpha-white-30": {
    "value": "var(--colors-white-12\\%)",
    "variable": "var(--colors-alpha-white-30)"
  },
  "colors.alpha-white-40": {
    "value": "var(--colors-white-16\\%)",
    "variable": "var(--colors-alpha-white-40)"
  },
  "colors.alpha-white-50": {
    "value": "var(--colors-white-24\\%)",
    "variable": "var(--colors-alpha-white-50)"
  },
  "colors.alpha-white-60": {
    "value": "var(--colors-white-32\\%)",
    "variable": "var(--colors-alpha-white-60)"
  },
  "colors.alpha-white-70": {
    "value": "var(--colors-white-48\\%)",
    "variable": "var(--colors-alpha-white-70)"
  },
  "colors.alpha-white-80": {
    "value": "var(--colors-white-64\\%)",
    "variable": "var(--colors-alpha-white-80)"
  },
  "colors.alpha-white-90": {
    "value": "var(--colors-white-80\\%)",
    "variable": "var(--colors-alpha-white-90)"
  },
  "colors.alpha-white-100": {
    "value": "var(--colors-white-96\\%)",
    "variable": "var(--colors-alpha-white-100)"
  },
  "colors.alpha-black-10": {
    "value": "var(--colors-black-4\\%)",
    "variable": "var(--colors-alpha-black-10)"
  },
  "colors.alpha-black-20": {
    "value": "var(--colors-black-8\\%)",
    "variable": "var(--colors-alpha-black-20)"
  },
  "colors.alpha-black-30": {
    "value": "var(--colors-black-12\\%)",
    "variable": "var(--colors-alpha-black-30)"
  },
  "colors.alpha-black-40": {
    "value": "var(--colors-black-16\\%)",
    "variable": "var(--colors-alpha-black-40)"
  },
  "colors.alpha-black-50": {
    "value": "var(--colors-black-24\\%)",
    "variable": "var(--colors-alpha-black-50)"
  },
  "colors.alpha-black-60": {
    "value": "var(--colors-black-32\\%)",
    "variable": "var(--colors-alpha-black-60)"
  },
  "colors.alpha-black-70": {
    "value": "var(--colors-black-48\\%)",
    "variable": "var(--colors-alpha-black-70)"
  },
  "colors.alpha-black-80": {
    "value": "var(--colors-black-64\\%)",
    "variable": "var(--colors-alpha-black-80)"
  },
  "colors.alpha-black-90": {
    "value": "var(--colors-black-80\\%)",
    "variable": "var(--colors-alpha-black-90)"
  },
  "colors.alpha-black-100": {
    "value": "var(--colors-black-96\\%)",
    "variable": "var(--colors-alpha-black-100)"
  },
  "colors.utility-blue-50": {
    "value": "var(--colors-blue-50)",
    "variable": "var(--colors-utility-blue-50)"
  },
  "colors.utility-blue-100": {
    "value": "var(--colors-blue-100)",
    "variable": "var(--colors-utility-blue-100)"
  },
  "colors.utility-blue-200": {
    "value": "var(--colors-blue-200)",
    "variable": "var(--colors-utility-blue-200)"
  },
  "colors.utility-blue-300": {
    "value": "var(--colors-blue-300)",
    "variable": "var(--colors-utility-blue-300)"
  },
  "colors.utility-blue-400": {
    "value": "var(--colors-blue-400)",
    "variable": "var(--colors-utility-blue-400)"
  },
  "colors.utility-blue-500": {
    "value": "var(--colors-blue-500)",
    "variable": "var(--colors-utility-blue-500)"
  },
  "colors.utility-blue-600": {
    "value": "var(--colors-blue-600)",
    "variable": "var(--colors-utility-blue-600)"
  },
  "colors.utility-blue-700": {
    "value": "var(--colors-blue-700)",
    "variable": "var(--colors-utility-blue-700)"
  },
  "colors.utility-blue-800": {
    "value": "var(--colors-blue-800)",
    "variable": "var(--colors-utility-blue-800)"
  },
  "colors.utility-blue-900": {
    "value": "var(--colors-blue-900)",
    "variable": "var(--colors-utility-blue-900)"
  },
  "colors.utility-blue-950": {
    "value": "var(--colors-blue-950)",
    "variable": "var(--colors-utility-blue-950)"
  },
  "colors.utility-green-50": {
    "value": "var(--colors-green-50)",
    "variable": "var(--colors-utility-green-50)"
  },
  "colors.utility-green-100": {
    "value": "var(--colors-green-100)",
    "variable": "var(--colors-utility-green-100)"
  },
  "colors.utility-green-200": {
    "value": "var(--colors-green-200)",
    "variable": "var(--colors-utility-green-200)"
  },
  "colors.utility-green-300": {
    "value": "var(--colors-green-300)",
    "variable": "var(--colors-utility-green-300)"
  },
  "colors.utility-green-400": {
    "value": "var(--colors-green-400)",
    "variable": "var(--colors-utility-green-400)"
  },
  "colors.utility-green-500": {
    "value": "var(--colors-green-500)",
    "variable": "var(--colors-utility-green-500)"
  },
  "colors.utility-green-600": {
    "value": "var(--colors-green-600)",
    "variable": "var(--colors-utility-green-600)"
  },
  "colors.utility-green-700": {
    "value": "var(--colors-green-700)",
    "variable": "var(--colors-utility-green-700)"
  },
  "colors.utility-green-800": {
    "value": "var(--colors-green-800)",
    "variable": "var(--colors-utility-green-800)"
  },
  "colors.utility-greene900": {
    "value": "var(--colors-green-900)",
    "variable": "var(--colors-utility-greene900)"
  },
  "colors.utility-green-950": {
    "value": "var(--colors-green-950)",
    "variable": "var(--colors-utility-green-950)"
  },
  "colors.utility-beige-50": {
    "value": "var(--colors-beige-50)",
    "variable": "var(--colors-utility-beige-50)"
  },
  "colors.utility-beige-100": {
    "value": "var(--colors-beige-100)",
    "variable": "var(--colors-utility-beige-100)"
  },
  "colors.utility-beige-200": {
    "value": "var(--colors-beige-200)",
    "variable": "var(--colors-utility-beige-200)"
  },
  "colors.utility-beige-300": {
    "value": "var(--colors-beige-300)",
    "variable": "var(--colors-utility-beige-300)"
  },
  "colors.utility-beige-400": {
    "value": "var(--colors-beige-400)",
    "variable": "var(--colors-utility-beige-400)"
  },
  "colors.utility-beige-500": {
    "value": "var(--colors-beige-500)",
    "variable": "var(--colors-utility-beige-500)"
  },
  "colors.utility-beige-600": {
    "value": "var(--colors-beige-600)",
    "variable": "var(--colors-utility-beige-600)"
  },
  "colors.utility-beige-700": {
    "value": "var(--colors-beige-700)",
    "variable": "var(--colors-utility-beige-700)"
  },
  "colors.utility-beige-800": {
    "value": "var(--colors-beige-800)",
    "variable": "var(--colors-utility-beige-800)"
  },
  "colors.utility-beige-900": {
    "value": "var(--colors-beige-900)",
    "variable": "var(--colors-utility-beige-900)"
  },
  "colors.utility-beige-950": {
    "value": "var(--colors-beige-950)",
    "variable": "var(--colors-utility-beige-950)"
  },
  "colors.utility-rose-50": {
    "value": "var(--colors-rose-50)",
    "variable": "var(--colors-utility-rose-50)"
  },
  "colors.utility-rose-100": {
    "value": "var(--colors-rose-100)",
    "variable": "var(--colors-utility-rose-100)"
  },
  "colors.utility-rose-200": {
    "value": "var(--colors-rose-200)",
    "variable": "var(--colors-utility-rose-200)"
  },
  "colors.utility-rose-300": {
    "value": "var(--colors-rose-300)",
    "variable": "var(--colors-utility-rose-300)"
  },
  "colors.utility-rose-400": {
    "value": "var(--colors-rose-400)",
    "variable": "var(--colors-utility-rose-400)"
  },
  "colors.utility-rose-500": {
    "value": "var(--colors-rose-500)",
    "variable": "var(--colors-utility-rose-500)"
  },
  "colors.utility-rose-600": {
    "value": "var(--colors-rose-600)",
    "variable": "var(--colors-utility-rose-600)"
  },
  "colors.utility-rose-700": {
    "value": "var(--colors-rose-700)",
    "variable": "var(--colors-utility-rose-700)"
  },
  "colors.utility-rose-800": {
    "value": "var(--colors-rose-800)",
    "variable": "var(--colors-utility-rose-800)"
  },
  "colors.utility-rose-900": {
    "value": "var(--colors-rose-900)",
    "variable": "var(--colors-utility-rose-900)"
  },
  "colors.utility-rose-950": {
    "value": "var(--colors-rose-950)",
    "variable": "var(--colors-utility-rose-950)"
  },
  "colors.utility-indigo-50": {
    "value": "var(--colors-indigo-50)",
    "variable": "var(--colors-utility-indigo-50)"
  },
  "colors.utility-indigo-100": {
    "value": "var(--colors-indigo-100)",
    "variable": "var(--colors-utility-indigo-100)"
  },
  "colors.utility-indigo-200": {
    "value": "var(--colors-indigo-200)",
    "variable": "var(--colors-utility-indigo-200)"
  },
  "colors.utility-indigo-300": {
    "value": "var(--colors-indigo-300)",
    "variable": "var(--colors-utility-indigo-300)"
  },
  "colors.utility-indigo-400": {
    "value": "var(--colors-indigo-400)",
    "variable": "var(--colors-utility-indigo-400)"
  },
  "colors.utility-indigo-500": {
    "value": "var(--colors-indigo-500)",
    "variable": "var(--colors-utility-indigo-500)"
  },
  "colors.utility-indigo-600": {
    "value": "var(--colors-indigo-600)",
    "variable": "var(--colors-utility-indigo-600)"
  },
  "colors.utility-indigo-700": {
    "value": "var(--colors-indigo-700)",
    "variable": "var(--colors-utility-indigo-700)"
  },
  "colors.utility-indigo-800": {
    "value": "var(--colors-indigo-800)",
    "variable": "var(--colors-utility-indigo-800)"
  },
  "colors.utility-indigo-900": {
    "value": "var(--colors-indigo-900)",
    "variable": "var(--colors-utility-indigo-900)"
  },
  "colors.utility-indigo-950": {
    "value": "var(--colors-indigo-950)",
    "variable": "var(--colors-utility-indigo-950)"
  },
  "colors.button-primary-bg": {
    "value": "var(--colors-bg-brand-600)",
    "variable": "var(--colors-button-primary-bg)"
  },
  "colors.button-primary-bg_hover": {
    "value": "var(--colors-bg-brand-700)",
    "variable": "var(--colors-button-primary-bg_hover)"
  },
  "colors.button-primary-bg_subtle": {
    "value": "var(--colors-bg-brand-500)",
    "variable": "var(--colors-button-primary-bg_subtle)"
  },
  "colors.button-secondary-bg": {
    "value": "var(--colors-neutral-100)",
    "variable": "var(--colors-button-secondary-bg)"
  },
  "colors.button-secondary-bg_hover": {
    "value": "var(--colors-neutral-200)",
    "variable": "var(--colors-button-secondary-bg_hover)"
  },
  "colors.button-secondary-bg_subtle": {
    "value": "var(--colors-neutral-50)",
    "variable": "var(--colors-button-secondary-bg_subtle)"
  },
  "colors.button-secondary-brand-bg": {
    "value": "var(--colors-bg-brand-100)",
    "variable": "var(--colors-button-secondary-brand-bg)"
  },
  "colors.button-secondary-brand-bg_hover": {
    "value": "var(--colors-bg-brand-200)",
    "variable": "var(--colors-button-secondary-brand-bg_hover)"
  },
  "colors.button-secondary-brand-bg_subtle": {
    "value": "var(--colors-bg-brand-50)",
    "variable": "var(--colors-button-secondary-brand-bg_subtle)"
  },
  "colors.button-tertiary-bg": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-button-tertiary-bg)"
  },
  "colors.button-tertiary-bg_hover": {
    "value": "var(--colors-black-8\\%)",
    "variable": "var(--colors-button-tertiary-bg_hover)"
  },
  "colors.button-tertiary-bg_subtle": {
    "value": "var(--colors-black-4\\%)",
    "variable": "var(--colors-button-tertiary-bg_subtle)"
  },
  "colors.button-tertiary-brand-bg": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-button-tertiary-brand-bg)"
  },
  "colors.button-tertiary-brand-bg_hover": {
    "value": "var(--colors-bg-brand-50)",
    "variable": "var(--colors-button-tertiary-brand-bg_hover)"
  },
  "colors.button-quaternary-bg": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-button-quaternary-bg)"
  },
  "colors.button-quaternary-bg_hover": {
    "value": "var(--colors-black-4\\%)",
    "variable": "var(--colors-button-quaternary-bg_hover)"
  },
  "colors.button-quaternary-brand-bg": {
    "value": "var(--colors-base-white)",
    "variable": "var(--colors-button-quaternary-brand-bg)"
  },
  "colors.button-quaternary-brand-bg_hover": {
    "value": "var(--colors-bg-brand-50)",
    "variable": "var(--colors-button-quaternary-brand-bg_hover)"
  },
  "colors.button-glassy-light-bg": {
    "value": "var(--colors-white-80\\%)",
    "variable": "var(--colors-button-glassy-light-bg)"
  },
  "colors.button-glassy-dark-bg": {
    "value": "var(--colors-black-8\\%)",
    "variable": "var(--colors-button-glassy-dark-bg)"
  },
  "colors.button-tertiary-border": {
    "value": "var(--colors-neutral-900)",
    "variable": "var(--colors-button-tertiary-border)"
  },
  "colors.button-tertiary-border_hover": {
    "value": "var(--colors-neutral-950)",
    "variable": "var(--colors-button-tertiary-border_hover)"
  },
  "colors.button-tertiary-brand-border": {
    "value": "var(--colors-neutral-900)",
    "variable": "var(--colors-button-tertiary-brand-border)"
  },
  "colors.button-tertiary-brand-border_hover": {
    "value": "var(--colors-brand-950)",
    "variable": "var(--colors-button-tertiary-brand-border_hover)"
  },
  "colors.button-glassy-border": {
    "value": "var(--colors-black-4\\%)",
    "variable": "var(--colors-button-glassy-border)"
  },
  "colors.neutral.1": {
    "value": "var(--colors-neutral-1)",
    "variable": "var(--colors-neutral-1)"
  },
  "colors.neutral.2": {
    "value": "var(--colors-neutral-2)",
    "variable": "var(--colors-neutral-2)"
  },
  "colors.neutral.3": {
    "value": "var(--colors-neutral-3)",
    "variable": "var(--colors-neutral-3)"
  },
  "colors.neutral.4": {
    "value": "var(--colors-neutral-4)",
    "variable": "var(--colors-neutral-4)"
  },
  "colors.neutral.5": {
    "value": "var(--colors-neutral-5)",
    "variable": "var(--colors-neutral-5)"
  },
  "colors.neutral.6": {
    "value": "var(--colors-neutral-6)",
    "variable": "var(--colors-neutral-6)"
  },
  "colors.neutral.7": {
    "value": "var(--colors-neutral-7)",
    "variable": "var(--colors-neutral-7)"
  },
  "colors.neutral.8": {
    "value": "var(--colors-neutral-8)",
    "variable": "var(--colors-neutral-8)"
  },
  "colors.neutral.9": {
    "value": "var(--colors-neutral-9)",
    "variable": "var(--colors-neutral-9)"
  },
  "colors.neutral.10": {
    "value": "var(--colors-neutral-10)",
    "variable": "var(--colors-neutral-10)"
  },
  "colors.neutral.11": {
    "value": "var(--colors-neutral-11)",
    "variable": "var(--colors-neutral-11)"
  },
  "colors.neutral.12": {
    "value": "var(--colors-neutral-12)",
    "variable": "var(--colors-neutral-12)"
  },
  "colors.neutral.a1": {
    "value": "var(--colors-neutral-a1)",
    "variable": "var(--colors-neutral-a1)"
  },
  "colors.neutral.a2": {
    "value": "var(--colors-neutral-a2)",
    "variable": "var(--colors-neutral-a2)"
  },
  "colors.neutral.a3": {
    "value": "var(--colors-neutral-a3)",
    "variable": "var(--colors-neutral-a3)"
  },
  "colors.neutral.a4": {
    "value": "var(--colors-neutral-a4)",
    "variable": "var(--colors-neutral-a4)"
  },
  "colors.neutral.a5": {
    "value": "var(--colors-neutral-a5)",
    "variable": "var(--colors-neutral-a5)"
  },
  "colors.neutral.a6": {
    "value": "var(--colors-neutral-a6)",
    "variable": "var(--colors-neutral-a6)"
  },
  "colors.neutral.a7": {
    "value": "var(--colors-neutral-a7)",
    "variable": "var(--colors-neutral-a7)"
  },
  "colors.neutral.a8": {
    "value": "var(--colors-neutral-a8)",
    "variable": "var(--colors-neutral-a8)"
  },
  "colors.neutral.a9": {
    "value": "var(--colors-neutral-a9)",
    "variable": "var(--colors-neutral-a9)"
  },
  "colors.neutral.a10": {
    "value": "var(--colors-neutral-a10)",
    "variable": "var(--colors-neutral-a10)"
  },
  "colors.neutral.a11": {
    "value": "var(--colors-neutral-a11)",
    "variable": "var(--colors-neutral-a11)"
  },
  "colors.neutral.a12": {
    "value": "var(--colors-neutral-a12)",
    "variable": "var(--colors-neutral-a12)"
  },
  "colors.neutral.default": {
    "value": "var(--colors-neutral-default)",
    "variable": "var(--colors-neutral-default)"
  },
  "colors.neutral.emphasized": {
    "value": "var(--colors-gray-12)",
    "variable": "var(--colors-neutral-emphasized)"
  },
  "colors.neutral.fg": {
    "value": "var(--colors-neutral-fg)",
    "variable": "var(--colors-neutral-fg)"
  },
  "colors.neutral.text": {
    "value": "var(--colors-neutral-text)",
    "variable": "var(--colors-neutral-text)"
  },
  "colors.gray.1": {
    "value": "var(--colors-gray-1)",
    "variable": "var(--colors-gray-1)"
  },
  "colors.gray.2": {
    "value": "var(--colors-gray-2)",
    "variable": "var(--colors-gray-2)"
  },
  "colors.gray.3": {
    "value": "var(--colors-gray-3)",
    "variable": "var(--colors-gray-3)"
  },
  "colors.gray.4": {
    "value": "var(--colors-gray-4)",
    "variable": "var(--colors-gray-4)"
  },
  "colors.gray.5": {
    "value": "var(--colors-gray-5)",
    "variable": "var(--colors-gray-5)"
  },
  "colors.gray.6": {
    "value": "var(--colors-gray-6)",
    "variable": "var(--colors-gray-6)"
  },
  "colors.gray.7": {
    "value": "var(--colors-gray-7)",
    "variable": "var(--colors-gray-7)"
  },
  "colors.gray.8": {
    "value": "var(--colors-gray-8)",
    "variable": "var(--colors-gray-8)"
  },
  "colors.gray.9": {
    "value": "var(--colors-gray-9)",
    "variable": "var(--colors-gray-9)"
  },
  "colors.gray.10": {
    "value": "var(--colors-gray-10)",
    "variable": "var(--colors-gray-10)"
  },
  "colors.gray.11": {
    "value": "var(--colors-gray-11)",
    "variable": "var(--colors-gray-11)"
  },
  "colors.gray.12": {
    "value": "var(--colors-gray-12)",
    "variable": "var(--colors-gray-12)"
  },
  "colors.gray.a1": {
    "value": "var(--colors-gray-a1)",
    "variable": "var(--colors-gray-a1)"
  },
  "colors.gray.a2": {
    "value": "var(--colors-gray-a2)",
    "variable": "var(--colors-gray-a2)"
  },
  "colors.gray.a3": {
    "value": "var(--colors-gray-a3)",
    "variable": "var(--colors-gray-a3)"
  },
  "colors.gray.a4": {
    "value": "var(--colors-gray-a4)",
    "variable": "var(--colors-gray-a4)"
  },
  "colors.gray.a5": {
    "value": "var(--colors-gray-a5)",
    "variable": "var(--colors-gray-a5)"
  },
  "colors.gray.a6": {
    "value": "var(--colors-gray-a6)",
    "variable": "var(--colors-gray-a6)"
  },
  "colors.gray.a7": {
    "value": "var(--colors-gray-a7)",
    "variable": "var(--colors-gray-a7)"
  },
  "colors.gray.a8": {
    "value": "var(--colors-gray-a8)",
    "variable": "var(--colors-gray-a8)"
  },
  "colors.gray.a9": {
    "value": "var(--colors-gray-a9)",
    "variable": "var(--colors-gray-a9)"
  },
  "colors.gray.a10": {
    "value": "var(--colors-gray-a10)",
    "variable": "var(--colors-gray-a10)"
  },
  "colors.gray.a11": {
    "value": "var(--colors-gray-a11)",
    "variable": "var(--colors-gray-a11)"
  },
  "colors.gray.a12": {
    "value": "var(--colors-gray-a12)",
    "variable": "var(--colors-gray-a12)"
  },
  "colors.gray.default": {
    "value": "var(--colors-gray-default)",
    "variable": "var(--colors-gray-default)"
  },
  "colors.gray.emphasized": {
    "value": "var(--colors-gray-12)",
    "variable": "var(--colors-gray-emphasized)"
  },
  "colors.gray.fg": {
    "value": "var(--colors-gray-fg)",
    "variable": "var(--colors-gray-fg)"
  },
  "colors.gray.text": {
    "value": "var(--colors-gray-text)",
    "variable": "var(--colors-gray-text)"
  },
  "colors.accent.1": {
    "value": "var(--colors-accent-1)",
    "variable": "var(--colors-accent-1)"
  },
  "colors.accent.2": {
    "value": "var(--colors-accent-2)",
    "variable": "var(--colors-accent-2)"
  },
  "colors.accent.3": {
    "value": "var(--colors-accent-3)",
    "variable": "var(--colors-accent-3)"
  },
  "colors.accent.4": {
    "value": "var(--colors-accent-4)",
    "variable": "var(--colors-accent-4)"
  },
  "colors.accent.5": {
    "value": "var(--colors-accent-5)",
    "variable": "var(--colors-accent-5)"
  },
  "colors.accent.6": {
    "value": "var(--colors-accent-6)",
    "variable": "var(--colors-accent-6)"
  },
  "colors.accent.7": {
    "value": "var(--colors-accent-7)",
    "variable": "var(--colors-accent-7)"
  },
  "colors.accent.8": {
    "value": "var(--colors-accent-8)",
    "variable": "var(--colors-accent-8)"
  },
  "colors.accent.9": {
    "value": "var(--colors-accent-9)",
    "variable": "var(--colors-accent-9)"
  },
  "colors.accent.10": {
    "value": "var(--colors-accent-10)",
    "variable": "var(--colors-accent-10)"
  },
  "colors.accent.11": {
    "value": "var(--colors-accent-11)",
    "variable": "var(--colors-accent-11)"
  },
  "colors.accent.12": {
    "value": "var(--colors-accent-12)",
    "variable": "var(--colors-accent-12)"
  },
  "colors.accent.a1": {
    "value": "var(--colors-accent-a1)",
    "variable": "var(--colors-accent-a1)"
  },
  "colors.accent.a2": {
    "value": "var(--colors-accent-a2)",
    "variable": "var(--colors-accent-a2)"
  },
  "colors.accent.a3": {
    "value": "var(--colors-accent-a3)",
    "variable": "var(--colors-accent-a3)"
  },
  "colors.accent.a4": {
    "value": "var(--colors-accent-a4)",
    "variable": "var(--colors-accent-a4)"
  },
  "colors.accent.a5": {
    "value": "var(--colors-accent-a5)",
    "variable": "var(--colors-accent-a5)"
  },
  "colors.accent.a6": {
    "value": "var(--colors-accent-a6)",
    "variable": "var(--colors-accent-a6)"
  },
  "colors.accent.a7": {
    "value": "var(--colors-accent-a7)",
    "variable": "var(--colors-accent-a7)"
  },
  "colors.accent.a8": {
    "value": "var(--colors-accent-a8)",
    "variable": "var(--colors-accent-a8)"
  },
  "colors.accent.a9": {
    "value": "var(--colors-accent-a9)",
    "variable": "var(--colors-accent-a9)"
  },
  "colors.accent.a10": {
    "value": "var(--colors-accent-a10)",
    "variable": "var(--colors-accent-a10)"
  },
  "colors.accent.a11": {
    "value": "var(--colors-accent-a11)",
    "variable": "var(--colors-accent-a11)"
  },
  "colors.accent.a12": {
    "value": "var(--colors-accent-a12)",
    "variable": "var(--colors-accent-a12)"
  },
  "colors.accent.default": {
    "value": "var(--colors-accent-default)",
    "variable": "var(--colors-accent-default)"
  },
  "colors.accent.emphasized": {
    "value": "var(--colors-gray-12)",
    "variable": "var(--colors-accent-emphasized)"
  },
  "colors.accent.fg": {
    "value": "var(--colors-accent-fg)",
    "variable": "var(--colors-accent-fg)"
  },
  "colors.accent.text": {
    "value": "var(--colors-accent-text)",
    "variable": "var(--colors-accent-text)"
  },
  "colors.bg.canvas": {
    "value": "var(--colors-gray-1)",
    "variable": "var(--colors-bg-canvas)"
  },
  "colors.bg.default": {
    "value": "var(--colors-bg-default)",
    "variable": "var(--colors-bg-default)"
  },
  "colors.bg.subtle": {
    "value": "var(--colors-bg-subtle)",
    "variable": "var(--colors-bg-subtle)"
  },
  "colors.bg.muted": {
    "value": "var(--colors-bg-muted)",
    "variable": "var(--colors-bg-muted)"
  },
  "colors.bg.emphasized": {
    "value": "var(--colors-bg-emphasized)",
    "variable": "var(--colors-bg-emphasized)"
  },
  "colors.bg.disabled": {
    "value": "var(--colors-bg-disabled)",
    "variable": "var(--colors-bg-disabled)"
  },
  "colors.fg.default": {
    "value": "var(--colors-gray-12)",
    "variable": "var(--colors-fg-default)"
  },
  "colors.fg.muted": {
    "value": "var(--colors-gray-11)",
    "variable": "var(--colors-fg-muted)"
  },
  "colors.fg.subtle": {
    "value": "var(--colors-gray-10)",
    "variable": "var(--colors-fg-subtle)"
  },
  "colors.fg.disabled": {
    "value": "var(--colors-gray-7)",
    "variable": "var(--colors-fg-disabled)"
  },
  "colors.border.default": {
    "value": "var(--colors-gray-7)",
    "variable": "var(--colors-border-default)"
  },
  "colors.border.muted": {
    "value": "var(--colors-gray-6)",
    "variable": "var(--colors-border-muted)"
  },
  "colors.border.subtle": {
    "value": "var(--colors-gray-4)",
    "variable": "var(--colors-border-subtle)"
  },
  "colors.border.disabled": {
    "value": "var(--colors-gray-5)",
    "variable": "var(--colors-border-disabled)"
  },
  "colors.border.outline": {
    "value": "var(--colors-gray-a9)",
    "variable": "var(--colors-border-outline)"
  },
  "shadows.xs": {
    "value": "var(--shadows-xs)",
    "variable": "var(--shadows-xs)"
  },
  "shadows.sm": {
    "value": "var(--shadows-sm)",
    "variable": "var(--shadows-sm)"
  },
  "shadows.md": {
    "value": "var(--shadows-md)",
    "variable": "var(--shadows-md)"
  },
  "shadows.lg": {
    "value": "var(--shadows-lg)",
    "variable": "var(--shadows-lg)"
  },
  "shadows.xl": {
    "value": "var(--shadows-xl)",
    "variable": "var(--shadows-xl)"
  },
  "shadows.2xl": {
    "value": "var(--shadows-2xl)",
    "variable": "var(--shadows-2xl)"
  },
  "radii.radius-0.5": {
    "value": "var(--spacing-0\\.5)",
    "variable": "var(--radii-radius-0\\.5)"
  },
  "radii.radius-1": {
    "value": "var(--spacing-1)",
    "variable": "var(--radii-radius-1)"
  },
  "radii.radius-1.5": {
    "value": "var(--spacing-1\\.5)",
    "variable": "var(--radii-radius-1\\.5)"
  },
  "radii.radius-2": {
    "value": "var(--spacing-2)",
    "variable": "var(--radii-radius-2)"
  },
  "radii.radius-2.5": {
    "value": "var(--spacing-2\\.5)",
    "variable": "var(--radii-radius-2\\.5)"
  },
  "radii.radius-3": {
    "value": "var(--spacing-3)",
    "variable": "var(--radii-radius-3)"
  },
  "radii.radius-4": {
    "value": "var(--spacing-4)",
    "variable": "var(--radii-radius-4)"
  },
  "radii.radius-5": {
    "value": "var(--spacing-5)",
    "variable": "var(--radii-radius-5)"
  },
  "radii.radius-6": {
    "value": "var(--spacing-6)",
    "variable": "var(--radii-radius-6)"
  },
  "radii.radius-8": {
    "value": "var(--spacing-8)",
    "variable": "var(--radii-radius-8)"
  },
  "radii.radius-10": {
    "value": "var(--spacing-10)",
    "variable": "var(--radii-radius-10)"
  },
  "radii.radius-12": {
    "value": "var(--spacing-12)",
    "variable": "var(--radii-radius-12)"
  },
  "radii.l1": {
    "value": "var(--radii-xs)",
    "variable": "var(--radii-l1)"
  },
  "radii.l2": {
    "value": "var(--radii-sm)",
    "variable": "var(--radii-l2)"
  },
  "radii.l3": {
    "value": "var(--radii-md)",
    "variable": "var(--radii-l3)"
  },
  "spacing.-1": {
    "value": "calc(var(--spacing-1) * -1)",
    "variable": "var(--spacing-1)"
  },
  "spacing.-2": {
    "value": "calc(var(--spacing-2) * -1)",
    "variable": "var(--spacing-2)"
  },
  "spacing.-3": {
    "value": "calc(var(--spacing-3) * -1)",
    "variable": "var(--spacing-3)"
  },
  "spacing.-4": {
    "value": "calc(var(--spacing-4) * -1)",
    "variable": "var(--spacing-4)"
  },
  "spacing.-5": {
    "value": "calc(var(--spacing-5) * -1)",
    "variable": "var(--spacing-5)"
  },
  "spacing.-6": {
    "value": "calc(var(--spacing-6) * -1)",
    "variable": "var(--spacing-6)"
  },
  "spacing.-7": {
    "value": "calc(var(--spacing-7) * -1)",
    "variable": "var(--spacing-7)"
  },
  "spacing.-8": {
    "value": "calc(var(--spacing-8) * -1)",
    "variable": "var(--spacing-8)"
  },
  "spacing.-9": {
    "value": "calc(var(--spacing-9) * -1)",
    "variable": "var(--spacing-9)"
  },
  "spacing.-10": {
    "value": "calc(var(--spacing-10) * -1)",
    "variable": "var(--spacing-10)"
  },
  "spacing.-11": {
    "value": "calc(var(--spacing-11) * -1)",
    "variable": "var(--spacing-11)"
  },
  "spacing.-12": {
    "value": "calc(var(--spacing-12) * -1)",
    "variable": "var(--spacing-12)"
  },
  "spacing.-14": {
    "value": "calc(var(--spacing-14) * -1)",
    "variable": "var(--spacing-14)"
  },
  "spacing.-16": {
    "value": "calc(var(--spacing-16) * -1)",
    "variable": "var(--spacing-16)"
  },
  "spacing.-20": {
    "value": "calc(var(--spacing-20) * -1)",
    "variable": "var(--spacing-20)"
  },
  "spacing.-24": {
    "value": "calc(var(--spacing-24) * -1)",
    "variable": "var(--spacing-24)"
  },
  "spacing.-28": {
    "value": "calc(var(--spacing-28) * -1)",
    "variable": "var(--spacing-28)"
  },
  "spacing.-30": {
    "value": "calc(var(--spacing-30) * -1)",
    "variable": "var(--spacing-30)"
  },
  "spacing.-32": {
    "value": "calc(var(--spacing-32) * -1)",
    "variable": "var(--spacing-32)"
  },
  "spacing.-36": {
    "value": "calc(var(--spacing-36) * -1)",
    "variable": "var(--spacing-36)"
  },
  "spacing.-40": {
    "value": "calc(var(--spacing-40) * -1)",
    "variable": "var(--spacing-40)"
  },
  "spacing.-44": {
    "value": "calc(var(--spacing-44) * -1)",
    "variable": "var(--spacing-44)"
  },
  "spacing.-48": {
    "value": "calc(var(--spacing-48) * -1)",
    "variable": "var(--spacing-48)"
  },
  "spacing.-52": {
    "value": "calc(var(--spacing-52) * -1)",
    "variable": "var(--spacing-52)"
  },
  "spacing.-56": {
    "value": "calc(var(--spacing-56) * -1)",
    "variable": "var(--spacing-56)"
  },
  "spacing.-60": {
    "value": "calc(var(--spacing-60) * -1)",
    "variable": "var(--spacing-60)"
  },
  "spacing.-64": {
    "value": "calc(var(--spacing-64) * -1)",
    "variable": "var(--spacing-64)"
  },
  "spacing.-72": {
    "value": "calc(var(--spacing-72) * -1)",
    "variable": "var(--spacing-72)"
  },
  "spacing.-80": {
    "value": "calc(var(--spacing-80) * -1)",
    "variable": "var(--spacing-80)"
  },
  "spacing.-96": {
    "value": "calc(var(--spacing-96) * -1)",
    "variable": "var(--spacing-96)"
  },
  "spacing.-180": {
    "value": "calc(var(--spacing-180) * -1)",
    "variable": "var(--spacing-180)"
  },
  "spacing.-5.5": {
    "value": "calc(var(--spacing-5\\.5) * -1)",
    "variable": "var(--spacing-5\\.5)"
  },
  "spacing.-0.5": {
    "value": "calc(var(--spacing-0\\.5) * -1)",
    "variable": "var(--spacing-0\\.5)"
  },
  "spacing.-1.5": {
    "value": "calc(var(--spacing-1\\.5) * -1)",
    "variable": "var(--spacing-1\\.5)"
  },
  "spacing.-2.5": {
    "value": "calc(var(--spacing-2\\.5) * -1)",
    "variable": "var(--spacing-2\\.5)"
  },
  "spacing.-3.5": {
    "value": "calc(var(--spacing-3\\.5) * -1)",
    "variable": "var(--spacing-3\\.5)"
  },
  "spacing.-4.5": {
    "value": "calc(var(--spacing-4\\.5) * -1)",
    "variable": "var(--spacing-4\\.5)"
  },
  "spacing.-none": {
    "value": "calc(var(--spacing-none) * -1)",
    "variable": "var(--spacing-none)"
  },
  "spacing.-spacing-0.5": {
    "value": "calc(var(--spacing-spacing-0\\.5) * -1)",
    "variable": "var(--spacing-spacing-0\\.5)"
  },
  "spacing.-spacing-1": {
    "value": "calc(var(--spacing-spacing-1) * -1)",
    "variable": "var(--spacing-spacing-1)"
  },
  "spacing.-spacing-1.5": {
    "value": "calc(var(--spacing-spacing-1\\.5) * -1)",
    "variable": "var(--spacing-spacing-1\\.5)"
  },
  "spacing.-spacing-2": {
    "value": "calc(var(--spacing-spacing-2) * -1)",
    "variable": "var(--spacing-spacing-2)"
  },
  "spacing.-spacing-2.5": {
    "value": "calc(var(--spacing-spacing-2\\.5) * -1)",
    "variable": "var(--spacing-spacing-2\\.5)"
  },
  "spacing.-spacing-3": {
    "value": "calc(var(--spacing-spacing-3) * -1)",
    "variable": "var(--spacing-spacing-3)"
  },
  "spacing.-spacing-3.5": {
    "value": "calc(var(--spacing-spacing-3\\.5) * -1)",
    "variable": "var(--spacing-spacing-3\\.5)"
  },
  "spacing.-spacing-4": {
    "value": "calc(var(--spacing-spacing-4) * -1)",
    "variable": "var(--spacing-spacing-4)"
  },
  "spacing.-spacing-5": {
    "value": "calc(var(--spacing-spacing-5) * -1)",
    "variable": "var(--spacing-spacing-5)"
  },
  "spacing.-spacing-6": {
    "value": "calc(var(--spacing-spacing-6) * -1)",
    "variable": "var(--spacing-spacing-6)"
  },
  "spacing.-spacing-8": {
    "value": "calc(var(--spacing-spacing-8) * -1)",
    "variable": "var(--spacing-spacing-8)"
  },
  "spacing.-spacing-10": {
    "value": "calc(var(--spacing-spacing-10) * -1)",
    "variable": "var(--spacing-spacing-10)"
  },
  "spacing.-spacing-12": {
    "value": "calc(var(--spacing-spacing-12) * -1)",
    "variable": "var(--spacing-spacing-12)"
  },
  "spacing.-spacing-14": {
    "value": "calc(var(--spacing-spacing-14) * -1)",
    "variable": "var(--spacing-spacing-14)"
  },
  "spacing.-spacing-16": {
    "value": "calc(var(--spacing-spacing-16) * -1)",
    "variable": "var(--spacing-spacing-16)"
  },
  "spacing.-spacing-20": {
    "value": "calc(var(--spacing-spacing-20) * -1)",
    "variable": "var(--spacing-spacing-20)"
  },
  "spacing.-spacing-24": {
    "value": "calc(var(--spacing-spacing-24) * -1)",
    "variable": "var(--spacing-spacing-24)"
  },
  "spacing.-spacing-32": {
    "value": "calc(var(--spacing-spacing-32) * -1)",
    "variable": "var(--spacing-spacing-32)"
  },
  "spacing.-spacing-40": {
    "value": "calc(var(--spacing-spacing-40) * -1)",
    "variable": "var(--spacing-spacing-40)"
  },
  "colors.colorPalette.black": {
    "value": "var(--colors-color-palette-black)",
    "variable": "var(--colors-color-palette-black)"
  },
  "colors.colorPalette.white": {
    "value": "var(--colors-color-palette-white)",
    "variable": "var(--colors-color-palette-white)"
  },
  "colors.colorPalette.50": {
    "value": "var(--colors-color-palette-50)",
    "variable": "var(--colors-color-palette-50)"
  },
  "colors.colorPalette.100": {
    "value": "var(--colors-color-palette-100)",
    "variable": "var(--colors-color-palette-100)"
  },
  "colors.colorPalette.200": {
    "value": "var(--colors-color-palette-200)",
    "variable": "var(--colors-color-palette-200)"
  },
  "colors.colorPalette.300": {
    "value": "var(--colors-color-palette-300)",
    "variable": "var(--colors-color-palette-300)"
  },
  "colors.colorPalette.400": {
    "value": "var(--colors-color-palette-400)",
    "variable": "var(--colors-color-palette-400)"
  },
  "colors.colorPalette.500": {
    "value": "var(--colors-color-palette-500)",
    "variable": "var(--colors-color-palette-500)"
  },
  "colors.colorPalette.600": {
    "value": "var(--colors-color-palette-600)",
    "variable": "var(--colors-color-palette-600)"
  },
  "colors.colorPalette.700": {
    "value": "var(--colors-color-palette-700)",
    "variable": "var(--colors-color-palette-700)"
  },
  "colors.colorPalette.800": {
    "value": "var(--colors-color-palette-800)",
    "variable": "var(--colors-color-palette-800)"
  },
  "colors.colorPalette.900": {
    "value": "var(--colors-color-palette-900)",
    "variable": "var(--colors-color-palette-900)"
  },
  "colors.colorPalette.950": {
    "value": "var(--colors-color-palette-950)",
    "variable": "var(--colors-color-palette-950)"
  },
  "colors.colorPalette": {
    "value": "var(--colors-color-palette)",
    "variable": "var(--colors-color-palette)"
  },
  "colors.colorPalette.4%": {
    "value": "var(--colors-color-palette-4\\%)",
    "variable": "var(--colors-color-palette-4\\%)"
  },
  "colors.colorPalette.8%": {
    "value": "var(--colors-color-palette-8\\%)",
    "variable": "var(--colors-color-palette-8\\%)"
  },
  "colors.colorPalette.12%": {
    "value": "var(--colors-color-palette-12\\%)",
    "variable": "var(--colors-color-palette-12\\%)"
  },
  "colors.colorPalette.16%": {
    "value": "var(--colors-color-palette-16\\%)",
    "variable": "var(--colors-color-palette-16\\%)"
  },
  "colors.colorPalette.24%": {
    "value": "var(--colors-color-palette-24\\%)",
    "variable": "var(--colors-color-palette-24\\%)"
  },
  "colors.colorPalette.32%": {
    "value": "var(--colors-color-palette-32\\%)",
    "variable": "var(--colors-color-palette-32\\%)"
  },
  "colors.colorPalette.48%": {
    "value": "var(--colors-color-palette-48\\%)",
    "variable": "var(--colors-color-palette-48\\%)"
  },
  "colors.colorPalette.64%": {
    "value": "var(--colors-color-palette-64\\%)",
    "variable": "var(--colors-color-palette-64\\%)"
  },
  "colors.colorPalette.80%": {
    "value": "var(--colors-color-palette-80\\%)",
    "variable": "var(--colors-color-palette-80\\%)"
  },
  "colors.colorPalette.96%": {
    "value": "var(--colors-color-palette-96\\%)",
    "variable": "var(--colors-color-palette-96\\%)"
  },
  "colors.colorPalette.a1": {
    "value": "var(--colors-color-palette-a1)",
    "variable": "var(--colors-color-palette-a1)"
  },
  "colors.colorPalette.a2": {
    "value": "var(--colors-color-palette-a2)",
    "variable": "var(--colors-color-palette-a2)"
  },
  "colors.colorPalette.a3": {
    "value": "var(--colors-color-palette-a3)",
    "variable": "var(--colors-color-palette-a3)"
  },
  "colors.colorPalette.a4": {
    "value": "var(--colors-color-palette-a4)",
    "variable": "var(--colors-color-palette-a4)"
  },
  "colors.colorPalette.a5": {
    "value": "var(--colors-color-palette-a5)",
    "variable": "var(--colors-color-palette-a5)"
  },
  "colors.colorPalette.a6": {
    "value": "var(--colors-color-palette-a6)",
    "variable": "var(--colors-color-palette-a6)"
  },
  "colors.colorPalette.a7": {
    "value": "var(--colors-color-palette-a7)",
    "variable": "var(--colors-color-palette-a7)"
  },
  "colors.colorPalette.a8": {
    "value": "var(--colors-color-palette-a8)",
    "variable": "var(--colors-color-palette-a8)"
  },
  "colors.colorPalette.a9": {
    "value": "var(--colors-color-palette-a9)",
    "variable": "var(--colors-color-palette-a9)"
  },
  "colors.colorPalette.a10": {
    "value": "var(--colors-color-palette-a10)",
    "variable": "var(--colors-color-palette-a10)"
  },
  "colors.colorPalette.a11": {
    "value": "var(--colors-color-palette-a11)",
    "variable": "var(--colors-color-palette-a11)"
  },
  "colors.colorPalette.a12": {
    "value": "var(--colors-color-palette-a12)",
    "variable": "var(--colors-color-palette-a12)"
  },
  "colors.colorPalette.light.1": {
    "value": "var(--colors-color-palette-light-1)",
    "variable": "var(--colors-color-palette-light-1)"
  },
  "colors.colorPalette.1": {
    "value": "var(--colors-color-palette-1)",
    "variable": "var(--colors-color-palette-1)"
  },
  "colors.colorPalette.light.2": {
    "value": "var(--colors-color-palette-light-2)",
    "variable": "var(--colors-color-palette-light-2)"
  },
  "colors.colorPalette.2": {
    "value": "var(--colors-color-palette-2)",
    "variable": "var(--colors-color-palette-2)"
  },
  "colors.colorPalette.light.3": {
    "value": "var(--colors-color-palette-light-3)",
    "variable": "var(--colors-color-palette-light-3)"
  },
  "colors.colorPalette.3": {
    "value": "var(--colors-color-palette-3)",
    "variable": "var(--colors-color-palette-3)"
  },
  "colors.colorPalette.light.4": {
    "value": "var(--colors-color-palette-light-4)",
    "variable": "var(--colors-color-palette-light-4)"
  },
  "colors.colorPalette.4": {
    "value": "var(--colors-color-palette-4)",
    "variable": "var(--colors-color-palette-4)"
  },
  "colors.colorPalette.light.5": {
    "value": "var(--colors-color-palette-light-5)",
    "variable": "var(--colors-color-palette-light-5)"
  },
  "colors.colorPalette.5": {
    "value": "var(--colors-color-palette-5)",
    "variable": "var(--colors-color-palette-5)"
  },
  "colors.colorPalette.light.6": {
    "value": "var(--colors-color-palette-light-6)",
    "variable": "var(--colors-color-palette-light-6)"
  },
  "colors.colorPalette.6": {
    "value": "var(--colors-color-palette-6)",
    "variable": "var(--colors-color-palette-6)"
  },
  "colors.colorPalette.light.7": {
    "value": "var(--colors-color-palette-light-7)",
    "variable": "var(--colors-color-palette-light-7)"
  },
  "colors.colorPalette.7": {
    "value": "var(--colors-color-palette-7)",
    "variable": "var(--colors-color-palette-7)"
  },
  "colors.colorPalette.light.8": {
    "value": "var(--colors-color-palette-light-8)",
    "variable": "var(--colors-color-palette-light-8)"
  },
  "colors.colorPalette.8": {
    "value": "var(--colors-color-palette-8)",
    "variable": "var(--colors-color-palette-8)"
  },
  "colors.colorPalette.light.9": {
    "value": "var(--colors-color-palette-light-9)",
    "variable": "var(--colors-color-palette-light-9)"
  },
  "colors.colorPalette.9": {
    "value": "var(--colors-color-palette-9)",
    "variable": "var(--colors-color-palette-9)"
  },
  "colors.colorPalette.light.10": {
    "value": "var(--colors-color-palette-light-10)",
    "variable": "var(--colors-color-palette-light-10)"
  },
  "colors.colorPalette.10": {
    "value": "var(--colors-color-palette-10)",
    "variable": "var(--colors-color-palette-10)"
  },
  "colors.colorPalette.light.11": {
    "value": "var(--colors-color-palette-light-11)",
    "variable": "var(--colors-color-palette-light-11)"
  },
  "colors.colorPalette.11": {
    "value": "var(--colors-color-palette-11)",
    "variable": "var(--colors-color-palette-11)"
  },
  "colors.colorPalette.light.12": {
    "value": "var(--colors-color-palette-light-12)",
    "variable": "var(--colors-color-palette-light-12)"
  },
  "colors.colorPalette.12": {
    "value": "var(--colors-color-palette-12)",
    "variable": "var(--colors-color-palette-12)"
  },
  "colors.colorPalette.light.a1": {
    "value": "var(--colors-color-palette-light-a1)",
    "variable": "var(--colors-color-palette-light-a1)"
  },
  "colors.colorPalette.light.a2": {
    "value": "var(--colors-color-palette-light-a2)",
    "variable": "var(--colors-color-palette-light-a2)"
  },
  "colors.colorPalette.light.a3": {
    "value": "var(--colors-color-palette-light-a3)",
    "variable": "var(--colors-color-palette-light-a3)"
  },
  "colors.colorPalette.light.a4": {
    "value": "var(--colors-color-palette-light-a4)",
    "variable": "var(--colors-color-palette-light-a4)"
  },
  "colors.colorPalette.light.a5": {
    "value": "var(--colors-color-palette-light-a5)",
    "variable": "var(--colors-color-palette-light-a5)"
  },
  "colors.colorPalette.light.a6": {
    "value": "var(--colors-color-palette-light-a6)",
    "variable": "var(--colors-color-palette-light-a6)"
  },
  "colors.colorPalette.light.a7": {
    "value": "var(--colors-color-palette-light-a7)",
    "variable": "var(--colors-color-palette-light-a7)"
  },
  "colors.colorPalette.light.a8": {
    "value": "var(--colors-color-palette-light-a8)",
    "variable": "var(--colors-color-palette-light-a8)"
  },
  "colors.colorPalette.light.a9": {
    "value": "var(--colors-color-palette-light-a9)",
    "variable": "var(--colors-color-palette-light-a9)"
  },
  "colors.colorPalette.light.a10": {
    "value": "var(--colors-color-palette-light-a10)",
    "variable": "var(--colors-color-palette-light-a10)"
  },
  "colors.colorPalette.light.a11": {
    "value": "var(--colors-color-palette-light-a11)",
    "variable": "var(--colors-color-palette-light-a11)"
  },
  "colors.colorPalette.light.a12": {
    "value": "var(--colors-color-palette-light-a12)",
    "variable": "var(--colors-color-palette-light-a12)"
  },
  "colors.colorPalette.dark.1": {
    "value": "var(--colors-color-palette-dark-1)",
    "variable": "var(--colors-color-palette-dark-1)"
  },
  "colors.colorPalette.dark.2": {
    "value": "var(--colors-color-palette-dark-2)",
    "variable": "var(--colors-color-palette-dark-2)"
  },
  "colors.colorPalette.dark.3": {
    "value": "var(--colors-color-palette-dark-3)",
    "variable": "var(--colors-color-palette-dark-3)"
  },
  "colors.colorPalette.dark.4": {
    "value": "var(--colors-color-palette-dark-4)",
    "variable": "var(--colors-color-palette-dark-4)"
  },
  "colors.colorPalette.dark.5": {
    "value": "var(--colors-color-palette-dark-5)",
    "variable": "var(--colors-color-palette-dark-5)"
  },
  "colors.colorPalette.dark.6": {
    "value": "var(--colors-color-palette-dark-6)",
    "variable": "var(--colors-color-palette-dark-6)"
  },
  "colors.colorPalette.dark.7": {
    "value": "var(--colors-color-palette-dark-7)",
    "variable": "var(--colors-color-palette-dark-7)"
  },
  "colors.colorPalette.dark.8": {
    "value": "var(--colors-color-palette-dark-8)",
    "variable": "var(--colors-color-palette-dark-8)"
  },
  "colors.colorPalette.dark.9": {
    "value": "var(--colors-color-palette-dark-9)",
    "variable": "var(--colors-color-palette-dark-9)"
  },
  "colors.colorPalette.dark.10": {
    "value": "var(--colors-color-palette-dark-10)",
    "variable": "var(--colors-color-palette-dark-10)"
  },
  "colors.colorPalette.dark.11": {
    "value": "var(--colors-color-palette-dark-11)",
    "variable": "var(--colors-color-palette-dark-11)"
  },
  "colors.colorPalette.dark.12": {
    "value": "var(--colors-color-palette-dark-12)",
    "variable": "var(--colors-color-palette-dark-12)"
  },
  "colors.colorPalette.dark.a1": {
    "value": "var(--colors-color-palette-dark-a1)",
    "variable": "var(--colors-color-palette-dark-a1)"
  },
  "colors.colorPalette.dark.a2": {
    "value": "var(--colors-color-palette-dark-a2)",
    "variable": "var(--colors-color-palette-dark-a2)"
  },
  "colors.colorPalette.dark.a3": {
    "value": "var(--colors-color-palette-dark-a3)",
    "variable": "var(--colors-color-palette-dark-a3)"
  },
  "colors.colorPalette.dark.a4": {
    "value": "var(--colors-color-palette-dark-a4)",
    "variable": "var(--colors-color-palette-dark-a4)"
  },
  "colors.colorPalette.dark.a5": {
    "value": "var(--colors-color-palette-dark-a5)",
    "variable": "var(--colors-color-palette-dark-a5)"
  },
  "colors.colorPalette.dark.a6": {
    "value": "var(--colors-color-palette-dark-a6)",
    "variable": "var(--colors-color-palette-dark-a6)"
  },
  "colors.colorPalette.dark.a7": {
    "value": "var(--colors-color-palette-dark-a7)",
    "variable": "var(--colors-color-palette-dark-a7)"
  },
  "colors.colorPalette.dark.a8": {
    "value": "var(--colors-color-palette-dark-a8)",
    "variable": "var(--colors-color-palette-dark-a8)"
  },
  "colors.colorPalette.dark.a9": {
    "value": "var(--colors-color-palette-dark-a9)",
    "variable": "var(--colors-color-palette-dark-a9)"
  },
  "colors.colorPalette.dark.a10": {
    "value": "var(--colors-color-palette-dark-a10)",
    "variable": "var(--colors-color-palette-dark-a10)"
  },
  "colors.colorPalette.dark.a11": {
    "value": "var(--colors-color-palette-dark-a11)",
    "variable": "var(--colors-color-palette-dark-a11)"
  },
  "colors.colorPalette.dark.a12": {
    "value": "var(--colors-color-palette-dark-a12)",
    "variable": "var(--colors-color-palette-dark-a12)"
  },
  "colors.colorPalette.default": {
    "value": "var(--colors-color-palette-default)",
    "variable": "var(--colors-color-palette-default)"
  },
  "colors.colorPalette.emphasized": {
    "value": "var(--colors-color-palette-emphasized)",
    "variable": "var(--colors-color-palette-emphasized)"
  },
  "colors.colorPalette.fg": {
    "value": "var(--colors-color-palette-fg)",
    "variable": "var(--colors-color-palette-fg)"
  },
  "colors.colorPalette.text": {
    "value": "var(--colors-color-palette-text)",
    "variable": "var(--colors-color-palette-text)"
  },
  "colors.colorPalette.canvas": {
    "value": "var(--colors-color-palette-canvas)",
    "variable": "var(--colors-color-palette-canvas)"
  },
  "colors.colorPalette.subtle": {
    "value": "var(--colors-color-palette-subtle)",
    "variable": "var(--colors-color-palette-subtle)"
  },
  "colors.colorPalette.muted": {
    "value": "var(--colors-color-palette-muted)",
    "variable": "var(--colors-color-palette-muted)"
  },
  "colors.colorPalette.disabled": {
    "value": "var(--colors-color-palette-disabled)",
    "variable": "var(--colors-color-palette-disabled)"
  },
  "colors.colorPalette.outline": {
    "value": "var(--colors-color-palette-outline)",
    "variable": "var(--colors-color-palette-outline)"
  }
}

export function token(path, fallback) {
  return tokens[path]?.value || fallback
}

function tokenVar(path, fallback) {
  return tokens[path]?.variable || fallback
}

token.var = tokenVar