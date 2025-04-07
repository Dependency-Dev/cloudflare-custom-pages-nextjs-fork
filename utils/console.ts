"use client";
import { siteConfig } from "@/config/site";
import pkg from "@/package.json" assert { type: "json" };

const print = () => {
  console.log(
    `\n%c${pkg.name}%c v${pkg.version}`,
    `background: linear-gradient(to right, #ff66cc, #9370db, #66ccff);
        -webkit-background-clip: text;
        color: transparent;
        font-size: 1.2rem;
        font-weight: bold;`,
    "font-size: 2em; color: #666;",
  );

  console.log(
    "%cGitHub ↗",
    "color: #66ccff; font-size: 1em; cursor: pointer;",
    siteConfig.links.github,
  );
};

export default print;
