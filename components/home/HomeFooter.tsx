"use client";

import { ThemeSwitch } from "@/components/theme-switch";
import { Icon } from "@/components/ui/icon";
import type { IconKey } from "@/config/icons";
import { siteConfig } from "@/config/site";
import print from "@/utils/console";
import { clsx as cx } from "clsx";
import type { FC, ReactNode } from "react";

interface FooterLinkProps {
  href: string;
  icon: IconKey;
}

interface FooterSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const FooterLink = ({ href, icon }: FooterLinkProps) => (
  <div className="p-2 rounded-full hover:bg-default-100 transition-all duration-200 hover:scale-110 active:scale-95">
    <a
      href={href}
      aria-label="External link"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon
        name={icon}
        className="w-5 h-5 text-default-500 hover:text-primary-500 transition-colors"
      />
    </a>
  </div>
);

const FooterSection: FC<FooterSectionProps> = ({
  children,
  className,
  delay = 0,
}) => (
  <div
    className={cx("animate-fade-in", className)}
    style={{ animationDelay: `${delay}s` }}
  >
    {children}
  </div>
);

const HomeFooter = () => {
  const links = [
    { href: siteConfig.links.docs, icon: "book-open" as IconKey },
    { href: siteConfig.links.github, icon: "github" as IconKey },
  ];

  print();

  return (
    <footer className="w-full py-8 border-t bg-gradient-to-b from-background/60 to-background/80 backdrop-blur-lg">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          <FooterSection className="flex flex-col items-center md:items-start space-y-2">
            <div className="text-sm text-default-500">
              Copyright © {new Date().getFullYear()} Alice39s
            </div>
          </FooterSection>

          <FooterSection
            className="flex justify-center items-center gap-6"
            delay={0.2}
          >
            {links.map((link) => (
              <FooterLink key={link.href} {...link} />
            ))}
            <ThemeSwitch />
          </FooterSection>

          <FooterSection
            className="flex justify-center md:justify-end"
            delay={0.4}
          >
            <div className="text-xs text-default-400 flex items-center gap-2">
              Made with <Icon name="heart" className="w-4 h-4 text-red-500" />{" "}
              by Alice39s
            </div>
          </FooterSection>
        </div>
      </div>
    </footer>
  );
};

export default HomeFooter;
