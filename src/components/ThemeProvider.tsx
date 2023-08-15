import { MantineProvider, MantineThemeOverride } from "@mantine/core";

export const theme: MantineThemeOverride = {
  colorScheme: "light" || "dark",
  fontFamily: "Inter, sans-serif",
  breakpoints: {
    xs: "0em", //320px
    sm: "20em", //480px
    md: "30em", //720px
    lg: "45em", //1280px
    xl: "80em", //1440px
  },
  globalStyles: () => ({
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    body: {
      overflowX: "hidden",
    },
  }),
};

interface ThemeProviderProps {
  children: React.ReactNode;
}

export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={theme}>
      {children}
    </MantineProvider>
  );
}
