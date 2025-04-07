"use client";

import { Icon } from "@/components/ui/icon";
import { blockPageTranslations } from "@/config/i18n";
import type { BlockPageConfig } from "@/config/routes";
import { CFCard } from "./ui/CFCard";
import { NetworkStatusBox } from "./ui/NetworkStatusBox";
import { NetworkStatusWrapper } from "./ui/NetworkStatusWrapper";

export const BlockBox = ({
  type,
  code,
  icon,
  networkStatus,
}: BlockPageConfig) => {
  const translation = blockPageTranslations[type];
  return (
    <div>
      <CFCard
        title={translation.title}
        message={translation.message}
        subtitle="Access Denied"
        icon={<Icon name={icon} className="h-6 w-6 text-white" />}
        headerClassName="bg-gradient-to-br from-red-50 to-red-100 dark:from-red-950 dark:to-gray-900"
        scheme="danger"
      >
        <div className="space-y-6">
          <div className="rounded-lg bg-gradient-to-br from-red-50 to-red-100 dark:from-red-900/20 dark:to-red-900/10 p-4 backdrop-blur-sm border border-red-100 dark:border-red-900/50">
            <div className="font-mono text-sm">
              <div className="flex items-center gap-2 text-red-700 dark:text-red-400">
                <span className="font-semibold">Your IP:</span>
                <code>::CLIENT_IP::</code>
              </div>

              {type === "waf" && (
                <div className="flex items-center gap-2 text-red-700 dark:text-red-400 mt-2">
                  <span className="font-semibold">Ray ID:</span>
                  <code>::RAY_ID::</code>
                </div>
              )}
            </div>
          </div>

          <NetworkStatusWrapper>
            <NetworkStatusBox {...networkStatus} />
          </NetworkStatusWrapper>
        </div>
      </CFCard>
    </div>
  );
};

export default BlockBox;
