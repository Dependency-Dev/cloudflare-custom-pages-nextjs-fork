"use client";

import { HeroUIProvider } from "@heroui/system";
import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { useRouter } from "next/router";
import type { ReactNode } from "react";
// import { fontSans, fontMono } from '@/config/fonts';

export interface ProvidersProps {
  children: ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={(path) => router.push(path)}>
      <NextThemesProvider {...themeProps}>
        <main className={"antialiased"}>{children}</main>
      </NextThemesProvider>
    </HeroUIProvider>
  );
}
