import { type IconKey, icons } from "@/config/icons";
import { clsx as cx } from "clsx";
import type { LucideProps } from "lucide-react";

export interface IconProps extends LucideProps {
  name: IconKey;
}

export function Icon({ name, className, ...props }: IconProps) {
  const Icon = icons[name];

  if (!Icon) {
    return null;
  }

  return <Icon className={cx("h-4 w-4", className)} {...props} />;
}
