// tailwind config is required for editor support

import type { Config } from "tailwindcss";
import sharedConfig from "@repo/tailwind-config";

const config: Pick<Config, "content" | "presets"|"theme"> = {
  content: ["./src/app/**/*.tsx"],
  presets: [sharedConfig],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Work Sans"', 'sans-serif'],
      },
       backgroundImage: {
         'SectionOneRightBGRight': "url('/SectionOneBG.svg')"      },
      backgroundSize: {
              '50%': '50%',

      }
    }
  }
};

export default config;
