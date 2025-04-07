import { siteConfig } from "@/config/site";
import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <!-- Cloudflare Pages Custom Error Pages --> */}
        <meta name="description" content={siteConfig.description} />
        <meta name="robots" content="index, nofollow" />
      </Head>
      <body className="min-h-screen bg-background font-sans antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
