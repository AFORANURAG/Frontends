// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";
import plugin from "tailwindcss/plugin";

const config: Pick<Config, "content" | "presets" | "theme" | "plugins"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig], // Ensure sharedConfig is valid Tailwind config
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', "sans-serif"],
      },
      boxShadow: {
        "3xl":
          "inset 0 0 6px 0 rgba(250, 250, 255, .16), inset 4px 6px 11px 1px rgba(38, 37, 37, .24)",
        "4xl": "0 1px 2px hsla(0,0%,6%,.06)",
      },
      backgroundImage: {
        SectionOneRightBGRight: "url('/SectionOneBG.svg')",
        ReadMoreArrow: "url('/arrow-right.svg')",
        SectionFourFirstCardBg: "url(/SECTIONFOURIMAGE1.jpg)",
        SectionFourSecondCardBg: "url(/SECTIONFOURIMAGE2.jpg)",
        SectionFourThirdCardBg: "url(/SECTIONFOURIMAGE3.jpg)",
        SectionFourFourthCardBg: "url(/SECTIONFOURIMAGEFOUR.jpg)",
        SectionThreeRightCard:
          "linear-gradient(104.13deg,hsla(0,0%,100%,.25) 3.11%,rgba(94,163,255,.125) 34.12%),#e8f2ff",
      },
      backgroundSize: {
        "50%": "50%", // Add missing comma here
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        full: "9999px",
        large: "36px",
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, config }) {
      // Add your custom styles here
      addUtilities({
        ".scrollbar-hide": {
          /* Hide scrollbar for WebKit browsers */
          "-webkit-overflow-scrolling": "touch",
          "-ms-overflow-style": "none",
          "scrollbar-width": "none" /* Firefox */,
          "&::-webkit-scrollbar": {
            display: "none" /* Safari and Chrome */,
          },
        },
      });
    }),
  ],
};

export default config;
