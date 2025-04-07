import { Icon } from "@/components/ui/icon";
import { clsx } from "clsx";

type NetworkStatus = "success" | "error" | "challenging";

interface NetworkNodeProps {
  label: string;
  status: NetworkStatus;
  className?: string;
}

export const NetworkNode = ({ label, status, className }: NetworkNodeProps) => {
  const styles = {
    success: {
      container:
        "bg-green-50/80 text-green-600 ring-1 ring-green-100/80 dark:bg-green-900/20 dark:text-green-300 dark:ring-green-900/30",
      icon: "text-green-500 dark:text-green-400",
    },
    error: {
      container:
        "bg-red-50/80 text-red-600 ring-1 ring-red-100/80 dark:bg-red-900/20 dark:text-red-300 dark:ring-red-900/30",
      icon: "text-red-500 dark:text-red-400",
    },
    challenging: {
      container:
        "bg-orange-50/80 text-orange-600 ring-1 ring-orange-100/80 dark:bg-orange-900/20 dark:text-orange-300 dark:ring-orange-900/30",
      icon: "text-orange-500 dark:text-orange-400",
    },
  }[status];

  const iconName =
    status === "success"
      ? "check-circle"
      : status === "error"
        ? "x-circle"
        : "shield-check";

  return (
    <div
      className={clsx(
        "px-3 sm:px-4 py-2 sm:py-2.5 rounded-xl font-medium text-xs sm:text-sm flex items-center gap-1.5 sm:gap-2",
        "transition-all duration-300 ease-out hover:scale-[1.02] active:scale-100",
        styles.container,
        className,
      )}
    >
      <Icon
        name={iconName}
        className={clsx(
          "w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform flex-shrink-0",
          styles.icon,
          status === "challenging" && "animate-pulse",
        )}
      />
      <span
        className={clsx(
          "truncate",
          status === "challenging" && "animate-pulse",
        )}
      >
        {label}
      </span>
    </div>
  );
};
