import { extendTheme, withDefaultColorScheme, Theme } from "@chakra-ui/react";

export const theme = extendTheme({}) as Theme;

export type MyTheme = typeof theme;

type Breakpoints = keyof MyTheme["breakpoints"];

export const mediaQueries = (
  Object.keys(theme.breakpoints) as Array<Breakpoints>
).reduce((acc, breakpoint) => {
  acc[breakpoint] = `@media (max-width: ${theme.breakpoints[breakpoint]})`;
  return acc;
}, {} as Record<keyof typeof theme.breakpoints, string>);
