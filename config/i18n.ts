export interface PageTranslation {
  title: string;
  message: string;
}

export interface InterfaceTranslations {
  message: string;
}

export interface BlockPageTranslation extends PageTranslation {}
export interface ErrorPageTranslation extends PageTranslation {}
export interface ChallengePageTranslation extends PageTranslation {}

export const blockPageTranslations: Record<string, BlockPageTranslation> = {
  ip: {
    title: "Access Denied - IP Blocked",
    message: "The owner of this website has banned your IP address.",
  },
  waf: {
    title: "Firewall Block - WAF Blocked",
    message:
      "The Cloudflare WAF (Web Application Firewall) has blocked your request.",
  },
  "rate-limit": {
    title: "Rate Limit Block - 429",
    message:
      "You have made too many requests. Please wait a moment before trying again.",
  },
} as const;

export const errorPageTranslations: Record<string, ErrorPageTranslation> = {
  "500s": {
    title: "Server Error",
    message:
      "Please try again later, there was an unexpected error on the site.",
  },
  "1000s": {
    title: "DNS Resolution Error",
    message:
      "The requested hostname could not be resolved. Don't worry, it's not your problem.",
  },
} as const;

export const challengePageTranslations: Record<
  string,
  ChallengePageTranslation
> = {
  interactive: {
    title: "Interactive Challenge",
    message: "Please complete this CAPTCHA to access the site.",
  },
  managed: {
    title: "I'm Under Attack Mode™",
    message: "Complete CAPTCHA to proceed. This is a general security check.",
  },
  country: {
    title: "Country Challenge",
    message:
      "Additional verification is required for visitors from your Country/Region.",
  },
  javascript: {
    title: "JavaScript Challenge",
    message:
      "Please wait a moment while our security system verifies your request.",
  },
} as const;

export const interfaceTranslations: Record<string, InterfaceTranslations> = {
  "error-details": {
    message: "Details (click to expand):",
  },
  "connection-tracking": {
    message: "Connection Tracking",
  },
  "network-status-you": {
    message: "You",
  },
  "network-status-cdn": {
    message: "CDN",
  },
  "network-status-origin": {
    message: "Origin",
  },
} as const;
