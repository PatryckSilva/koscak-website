"use client";
import MainTemplate from "@/template";
import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
const Providers = ({ children, ...props }: ThemeProviderProps) => {
  return (
    <NextThemesProvider {...props}>
      <MainTemplate>{children}</MainTemplate>
    </NextThemesProvider>
  );
};

export default Providers;
