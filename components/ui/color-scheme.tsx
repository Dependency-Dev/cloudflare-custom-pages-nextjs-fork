import type { ColorScheme } from "@/config/home";
import { clsx as cx } from "clsx";
import type { ReactNode } from "react";

interface ColorSchemeBoxProps {
  scheme: ColorScheme;
  children: ReactNode;
  className?: string;
  withBorder?: boolean;
  withBackground?: boolean;
}

const schemeClasses: Record<
  ColorScheme,
  {
    bg: string;
    border: string;
    text: string;
    gradient: string;
    iconBg: string;
  }
> = {
  danger: {
    bg: "bg-red-50 dark:bg-red-900/30",
    border: "border-red-100 dark:border-red-900/30",
    text: "text-red-600 dark:text-red-400",
    gradient: "from-red-500 to-red-600",
    iconBg: "bg-red-500",
  },
  warning: {
    bg: "bg-amber-50 dark:bg-amber-900/30",
    border: "border-amber-100 dark:border-amber-900/30",
    text: "text-amber-600 dark:text-amber-400",
    gradient: "from-amber-500 to-amber-600",
    iconBg: "bg-amber-500",
  },
  primary: {
    bg: "bg-blue-50 dark:bg-blue-900/30",
    border: "border-blue-100 dark:border-blue-900/30",
    text: "text-blue-600 dark:text-blue-400",
    gradient: "from-blue-500 to-blue-600",
    iconBg: "bg-blue-500",
  },
};

export function ColorSchemeBox({
  scheme,
  children,
  className,
  withBorder = false,
  withBackground = true,
}: ColorSchemeBoxProps) {
  const classes = schemeClasses[scheme];

  return (
    <div
      className={cx(
        withBackground && classes.bg,
        withBorder && ["border", classes.border],
        className,
      )}
    >
      {children}
    </div>
  );
}

export function ColorSchemeText({
  scheme,
  children,
  className,
}: Omit<ColorSchemeBoxProps, "withBorder" | "withBackground">) {
  return (
    <span className={cx(schemeClasses[scheme].text, className)}>
      {children}
    </span>
  );
}

export function getSchemeClasses(scheme: ColorScheme) {
  return schemeClasses[scheme];
}
