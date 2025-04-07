import { interfaceTranslations } from "@/config/i18n";
import type { NetworkStatusConfig } from "@/config/routes";
import { clsx } from "clsx";
import { useEffect, useState } from "react";
import { NetworkLine } from "./NetworkLine";
import { NetworkNode } from "./NetworkNode";

interface NetworkStatusBoxProps extends NetworkStatusConfig {
  rayId?: string;
  className?: string;
}

export const NetworkStatusBox = ({
  clientStatus,
  edgeStatus,
  originStatus,
  className,
}: NetworkStatusBoxProps) => {
  const [hostname, setHostname] = useState("");

  useEffect(() => {
    const domain = window.location.hostname;
    if (domain.length <= 10) {
      setHostname(domain);
    }
  }, []);

  return (
    <div
      className={clsx(
        "w-full p-3 sm:p-5 backdrop-blur-sm rounded-xl",
        "bg-white/50 dark:bg-gray-900/50",
        "border border-gray-100/80 dark:border-gray-800/80",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-1 sm:gap-2">
        <NetworkNode
          label={interfaceTranslations["network-status-you"].message}
          status={clientStatus}
          className="w-[100px] sm:w-[120px]"
        />
        <NetworkLine status={clientStatus} />
        <NetworkNode
          label={interfaceTranslations["network-status-cdn"].message}
          status={edgeStatus}
          className="w-[100px] sm:w-[120px]"
        />

        {originStatus && (
          <>
            <NetworkLine status={edgeStatus} />
            <NetworkNode
              label={
                hostname ||
                interfaceTranslations["network-status-origin"].message
              }
              status={originStatus}
              className="w-[100px] sm:w-[120px]"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default NetworkStatusBox;
