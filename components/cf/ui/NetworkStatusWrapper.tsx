import { Icon } from "@/components/ui/icon";
import { interfaceTranslations } from "@/config/i18n";
import type { ReactNode } from "react";

export const NetworkStatusWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="p-3 sm:p-5 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
      <div className="space-y-4 sm:space-y-5">
        <h3 className="text-sm font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1.5 sm:gap-2">
          <Icon
            name="chevron-left-right-ellipsis"
            className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500"
          />
          {interfaceTranslations["connection-tracking"].message}
        </h3>
        {children}
      </div>
    </div>
  );
};
