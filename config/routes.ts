import type { IconKey } from "@/config/icons";

interface BasePageConfig {
  type: string;
  code: string;
  icon: IconKey;
  networkStatus: NetworkStatusConfig;
}

export type BlockPageConfig = BasePageConfig & {
  type: "ip" | "waf" | "rate-limit";
};

export type ErrorPageConfig = BasePageConfig & {
  type: "500s" | "1000s";
  box: string;
};

export type ChallengePageConfig = BasePageConfig & {
  type: "interactive" | "managed" | "country" | "javascript";
  box: string | null;
};

export type PageType = "error" | "block" | "challenge";

type BlockType = BlockPageConfig["type"];
type ErrorType = ErrorPageConfig["type"];
type ChallengeType = ChallengePageConfig["type"];

export const directories: PageType[] = ["block", "error", "challenge"];

export const types = {
  block: ["ip", "waf", "rate-limit"] as BlockType[],
  error: ["500s", "1000s"] as ErrorType[],
  challenge: [
    "interactive",
    "managed",
    "country",
    "javascript",
  ] as ChallengeType[],
};

/**
 * Block page configurations
 * @type {Record<BlockType, BlockPageConfig>}
 */
export const blockPages: Record<BlockType, BlockPageConfig> = {
  ip: {
    type: "ip",
    code: "1006",
    icon: "shield-ban",
    networkStatus: {
      clientStatus: "error",
      edgeStatus: "success",
    },
  },
  waf: {
    type: "waf",
    code: "1010",
    icon: "shield",
    networkStatus: {
      clientStatus: "error",
      edgeStatus: "success",
    },
  },
  "rate-limit": {
    type: "rate-limit",
    code: "429",
    icon: "loader",
    networkStatus: {
      clientStatus: "challenging",
      edgeStatus: "success",
    },
  },
};

/**
 * Error page configurations
 * @type {Record<ErrorType, ErrorPageConfig>}
 */
export const errorPages: Record<ErrorType, ErrorPageConfig> = {
  "500s": {
    type: "500s",
    code: "500",
    box: "CLOUDFLARE_ERROR_500S_BOX",
    icon: "badge-alert",
    networkStatus: {
      clientStatus: "success",
      edgeStatus: "success",
      originStatus: "error",
    },
  },
  "1000s": {
    type: "1000s",
    code: "1000",
    box: "CLOUDFLARE_ERROR_1000S_BOX",
    icon: "construction",
    networkStatus: {
      clientStatus: "success",
      edgeStatus: "success",
      originStatus: "error",
    },
  },
};

/**
 * Challenge page configurations
 * @type {Record<ChallengeType, ChallengePageConfig>}
 */
export const challengePages: Record<ChallengeType, ChallengePageConfig> = {
  interactive: {
    type: "interactive",
    code: "403",
    box: "CAPTCHA_BOX",
    icon: "shield",
    networkStatus: {
      clientStatus: "challenging",
      edgeStatus: "success",
    },
  },
  managed: {
    type: "managed",
    code: "403",
    box: "CAPTCHA_BOX",
    icon: "shield-check",
    networkStatus: {
      clientStatus: "challenging",
      edgeStatus: "success",
    },
  },
  country: {
    type: "country",
    code: "403",
    box: "CAPTCHA_BOX",
    icon: "shield-alert",
    networkStatus: {
      clientStatus: "challenging",
      edgeStatus: "success",
    },
  },
  javascript: {
    type: "javascript",
    code: "403",
    box: "IM_UNDER_ATTACK_BOX",
    icon: "shield-ellipsis",
    networkStatus: {
      clientStatus: "challenging",
      edgeStatus: "success",
    },
  },
};

export interface NetworkStatusConfig {
  clientStatus: "success" | "error" | "challenging";
  edgeStatus: "success" | "error";
  originStatus?: "success" | "error";
  className?: string;
}
