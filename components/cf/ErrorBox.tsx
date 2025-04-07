"use client";

import { Icon } from "@/components/ui/icon";
import { errorPageTranslations, interfaceTranslations } from "@/config/i18n";
import type { ErrorPageConfig } from "@/config/routes";
import { Accordion, AccordionItem } from "@heroui/accordion";
import { Chip } from "@heroui/chip";
import { useEffect, useState } from "react";
import { CFCard } from "./ui/CFCard";
import { NetworkStatusBox } from "./ui/NetworkStatusBox";
import { NetworkStatusWrapper } from "./ui/NetworkStatusWrapper";

export const ErrorBox = ({
  type,
  code,
  box,
  icon,
  networkStatus,
}: ErrorPageConfig) => {
  const [errorContent, setErrorContent] = useState<string>("");
  const translation = errorPageTranslations[type];

  useEffect(() => {
    const num = Number.parseInt(code.toString(), 10);
    const errorBoxId =
      num >= 1000
        ? "cf-error-1000s-box"
        : num >= 500
          ? "cf-error-500s-box"
          : null;

    if (errorBoxId) {
      const errorBox = document.getElementById(errorBoxId);
      if (errorBox) {
        setErrorContent(errorBox.innerHTML);
      }
    } else if (box) {
      setErrorContent(`<div>::${box}::</div>`);
    }
  }, [code, box]);

  return (
    <div>
      <CFCard
        title={translation.title}
        message={translation.message}
        subtitle={
          <Chip variant="flat" color="danger" size="sm">
            Error {code}
          </Chip>
        }
        icon={<Icon name={icon} className="text-white w-6 h-6" />}
        scheme="danger"
      >
        <NetworkStatusWrapper>
          <NetworkStatusBox {...networkStatus} />
        </NetworkStatusWrapper>

        {type === "1000s" && (
          <div id="cf-error-1000s-box" style={{ display: "none" }}>
            ::CLOUDFLARE_ERROR_1000S_BOX::
          </div>
        )}

        {type === "500s" && (
          <div id="cf-error-500s-box" style={{ display: "none" }}>
            ::CLOUDFLARE_ERROR_500S_BOX::
          </div>
        )}

        {(errorContent || box) && (
          <div className="mt-3 sm:mt-4 space-y-3 sm:space-y-4 p-2 sm:p-3 rounded-lg bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800">
            <Accordion variant="light">
              <AccordionItem
                key="error-details"
                title={interfaceTranslations["error-details"].message}
                classNames={{
                  base: "border-none",
                  heading: "p-0",
                  trigger:
                    "px-0 py-1.5 sm:py-2 hover:bg-transparent text-sm sm:text-base",
                  content: "px-0 pt-1.5 sm:pt-2 pb-0",
                }}
              >
                <div className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: errorContent,
                    }}
                  />
                </div>
              </AccordionItem>
            </Accordion>
          </div>
        )}
      </CFCard>
    </div>
  );
};

export default ErrorBox;
