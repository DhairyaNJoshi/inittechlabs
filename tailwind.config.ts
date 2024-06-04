import type { Config } from "tailwindcss";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const baseFontSize = 16;
function pxToRem(px: number) {
  return px / baseFontSize + "rem";
}

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontSize: {
        12: pxToRem(12),
        14: pxToRem(14),
        16: pxToRem(16),
        18: pxToRem(18),
        20: pxToRem(20),
        22: pxToRem(22),
        24: pxToRem(24),
        26: pxToRem(26),
        28: pxToRem(28),
        30: pxToRem(30),
        32: pxToRem(32),
        34: pxToRem(34),
        36: pxToRem(36),
        38: pxToRem(38),
        40: pxToRem(40),
        42: pxToRem(42),
        44: pxToRem(44),
        46: pxToRem(46),
        48: pxToRem(48),
        50: pxToRem(50),
        52: pxToRem(52),
      },
      fontWeight: {
        100: "100",
        200: "200",
        300: "300",
        400: "400",
        500: "500",
        600: "600",
        700: "700",
        800: "800",
        900: "900",
      },
      colors: {
        primary: {
          DEFAULT: "#04BADE",
          50: "#E4EDFF",
          100: "#0496C7",
        },
        secondary: {
          DEFAULT: "#E3E6E7",
        },
        gray: {
          DEFAULT: "#3C3C3B",
          50: "#F5F5F5",
          100: "#6C757D",
        },
      },
      animation: {
        aurora: "aurora 60s linear infinite",
      },
      keyframes: {
        aurora: {
          from: {
            backgroundPosition: "50% 50%, 50% 50%",
          },
          to: {
            backgroundPosition: "350% 50%, 350% 50%",
          },
        },
      },
    },
  },
  plugins: [addVariablesForColors],
};
export default config;

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
