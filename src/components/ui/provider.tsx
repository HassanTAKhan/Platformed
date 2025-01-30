"use client";

import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

const system = createSystem(defaultConfig, {
  globalCss: {
    "html, body, #root": {
      overflow: "hidden",
      height: "100%",
    },
    "#root": {
      display: "flex",
      flexFlow: "column nowrap",
    },
  },
  theme: {
    recipes: {
      icon: {
        base: {
          boxSize: "1em",
        },
      },
    },
  },
});

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={system}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
