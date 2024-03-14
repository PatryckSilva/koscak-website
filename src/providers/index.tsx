"use client";
import MainTemplate from "@/template";
import { ReactNode } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <NextThemesProvider attribute="class">
        <MainTemplate>{children}</MainTemplate>
      </NextThemesProvider>
    </>
  );
};

export default Providers;
