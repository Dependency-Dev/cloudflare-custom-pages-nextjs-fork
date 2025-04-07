"use client";

import { Icon } from "@/components/ui/icon";
import { type SwitchProps, useSwitch } from "@heroui/switch";
import { useIsSSR } from "@react-aria/ssr";
import { VisuallyHidden } from "@react-aria/visually-hidden";
import { clsx as cx } from "clsx";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import type { FC } from "react";

export interface ThemeSwitchProps {
  className?: string;
  classNames?: SwitchProps["classNames"];
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({
  className,
  classNames,
}) => {
  const { theme, setTheme, systemTheme } = useTheme();
  const isSSR = useIsSSR();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const initialTheme = theme || systemTheme || "light";
    setTheme(initialTheme);
    setMounted(true);
  }, [theme, systemTheme, setTheme]);

  const currentTheme = theme || systemTheme;

  const onChange = () => {
    currentTheme === "light" ? setTheme("dark") : setTheme("light");
  };

  const {
    Component,
    slots,
    isSelected,
    getBaseProps,
    getInputProps,
    getWrapperProps,
  } = useSwitch({
    isSelected: currentTheme === "light" || isSSR,
    "aria-label": `Switch to ${currentTheme === "light" || isSSR ? "dark" : "light"} mode`,
    onChange,
  });

  // Prevent hydration mismatch
  if (!mounted || isSSR) {
    return null;
  }

  return (
    <Component
      {...getBaseProps({
        className: cx(
          "px-px transition-opacity hover:opacity-80 cursor-pointer",
          className,
          classNames?.base,
        ),
      })}
    >
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <div
        {...getWrapperProps()}
        className={slots.wrapper({
          class: cx(
            [
              "w-auto h-auto",
              "bg-transparent",
              "rounded-lg",
              "flex items-center justify-center",
              "group-data-[selected=true]:bg-transparent",
              "!text-default-500",
              "pt-px",
              "px-0",
              "mx-0",
            ],
            classNames?.wrapper,
          ),
        })}
      >
        <motion.div
          key={currentTheme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          exit={{ rotate: 90, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          {!isSelected || isSSR ? (
            <div className="relative">
              <Icon name="sun" className="h-6 w-6" />
              <div className="absolute inset-0 flex items-center justify-center bg-default-100 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                ☀️
              </div>
            </div>
          ) : (
            <div className="relative">
              <Icon name="moon" className="h-6 w-6" />
              <div className="absolute inset-0 flex items-center justify-center bg-default-100 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                🌙
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </Component>
  );
};
