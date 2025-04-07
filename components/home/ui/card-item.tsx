"use client";

import { Icon } from "@/components/ui/icon";
import type { ColorClasses, Page } from "@/config/home";
import { Link } from "@heroui/link";
import { clsx as cx } from "clsx";

interface CardItemProps {
  page: Page;
  classes: ColorClasses;
}

export const CardItem = ({ page, classes }: CardItemProps) => {
  return (
    <Link
      href={page.path}
      isExternal
      className={cx(
        "group flex items-center justify-between py-3 px-4 rounded-xl transition-all duration-200 hover:scale-[1.02]",
        classes.itemBg,
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cx(
            "flex h-8 w-8 items-center justify-center rounded-lg shadow-sm",
            classes.iconBg,
          )}
        >
          {page.icon && (
            <Icon
              name={page.icon}
              className={cx("h-4 w-4", classes.iconText)}
            />
          )}
        </div>
        <span className="text-gray-800 dark:text-gray-200 font-medium">
          {page.title}
        </span>
      </div>
      <div className="flex items-center gap-2">
        {page.code && (
          <span
            className={cx(
              "text-xs px-2 py-0.5 font-mono rounded-full",
              classes.codeBg,
              classes.codeText,
            )}
          >
            {page.code}
          </span>
        )}
        <Icon
          name="arrow-right"
          className={cx(
            "h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-200",
            classes.iconText,
          )}
        />
      </div>
    </Link>
  );
};
