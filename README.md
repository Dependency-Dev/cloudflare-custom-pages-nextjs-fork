# 🌐 Cloudflare Custom Pages - Next.js

A set of elegant, out-of-the-box Cloudflare WAF Custom Page Templates implemented using **Next.js**, **Tailwind CSS**, and **HeroUI**. Built with Next.js 15, TypeScript, and Tailwind CSS, featuring responsive design, dark mode support, and automatic Cloudflare variable replacement.

English | [简体中文](README.zh.md) | [Online Demo](https://cw-preview.000000039.xyz/)

> [!TIP]
> Please comply with the project's [Open Source License](LICENSE) when making modifications.

## 📸 Screenshots

<div align="center" style="margin-bottom: 20px;">
    <img src="./docs/assets/home.png" alt="Preview" width="70%">
    <br> Main Page
</div>

<div align="center">
<table style="width: 100%; border-collapse: collapse; margin: 20px 0; font-size: 16px; text-align: center; align-items: center; justify-content: center;">
    <thead>
        <tr>
            <th style="padding: 12px; text-align: center; border: 1px solid; font-weight: bold;">Example Page</th>
            <th style="padding: 12px; text-align: center; border: 1px solid; font-weight: bold;">Light Mode</th>
            <th style="padding: 12px; text-align: center; border: 1px solid; font-weight: bold;">Dark Mode</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td style="padding: 12px; text-align: center; border: 1px solid;">IP Block</td>
            <td style="padding: 12px; text-align: center; border: 1px solid;"><img src="./docs/assets/block-from-ip-light.png" style="max-width: 200px; height: auto;"></td>
            <td style="padding: 12px; text-align: center; border: 1px solid;"><img src="./docs/assets/block-from-ip-dark.png" style="max-width: 200px; height: auto;"></td>
        </tr>
        <tr>
            <td style="padding: 12px; text-align: center; border: 1px solid;">JS Challenge</td>
            <td style="padding: 12px; text-align: center; border: 1px solid;"><img src="./docs/assets/captcha-ic-light.png" style="max-width: 200px; height: auto;"></td>
            <td style="padding: 12px; text-align: center; border: 1px solid;"><img src="./docs/assets/captcha-ic-dark.png" style="max-width: 200px; height: auto;"></td>
        </tr>
        <tr>
            <td style="padding: 12px; text-align: center; border: 1px solid;">500s Error</td>
            <td style="padding: 12px; text-align: center; border: 1px solid;"><img src="./docs/assets/error-500s-light.png" style="max-width: 200px; height: auto;"></td>
            <td style="padding: 12px; text-align: center; border: 1px solid;"><img src="./docs/assets/error-500s-dark.png" style="max-width: 200px; height: auto;"></td>
        </tr>
    </tbody>
</table>
</div>

## ✨ Key Features

-   🎨 **Modern Responsive Design**: Sleek and contemporary layout optimized for all devices.
-   🌙 **Dark Mode Support**: Automatically adapts to system preferences for comfortable viewing.
-   🔒 **Full Coverage of Cloudflare Page Types**:
    -   `Block`: WAF interception pages
    -   `Error`: 1000s / 500s error pages
    -   `Captcha`: CAPTCHA challenge pages
-   📱 **Mobile-First Approach**: Guaranteed smooth experience on mobile devices.
-   🎭 **Automatic Cloudflare Variable Replacement**: Seamless integration of Cloudflare-specific variables.

## 🛠️ Tech Stack

-   **Next.js 15** + **React 19**
-   **HeroUI v2** + **Tailwind CSS v3**
-   **TypeScript**

## 🎯 Supported Variables

Currently supported automatic variable replacements:

-   `::CLIENT_IP::` - Client IP Address
-   `::RAY_ID::` - Cloudflare Ray ID
-   `::GEO::` - Client Geolocation
-   `::CLOUDFLARE_ERROR_500S_BOX::` - 500s Error Page Component
-   `::CLOUDFLARE_ERROR_1000S_BOX::` - 1000s Error Page Component
-   `::CAPTCHA_BOX::` - Cloudflare CAPTCHA Component
-   `::IM_UNDER_ATTACK_BOX::` - Cloudflare JavaScript Challenge Component

## 🔭 Usage

Quickly access Cloudflare Custom Pages via [this link](https://dash.cloudflare.com/?to=/:account/:zone/custom-pages).

> [!TIP]
> Your Cloudflare zone must be on Pro plan or higher to use these templates.

| Type        | Subtype                                     | Link                                 |
| ----------- | ------------------------------------------- | ------------------------------------ |
| Error Pages | Server Errors (500s)                        | [Import Link][error-500s]            |
|             | CF 1000s Errors                             | [Import Link][error-1000s]           |
| Block Pages | IP Block (1006)                             | [Import Link][block-ip]              |
|             | WAF Block (1010)                            | [Import Link][block-waf]             |
|             | Rate Limit Block (429)                      | [Import Link][block-rate-limit]      |
| Challenges  | Interactive Challenge                       | [Import Link][challenge-interactive] |
|             | Managed Challenge (I'm Under Attack Mode™) | [Import Link][challenge-managed]     |
|             | Country/Region Challenge                    | [Import Link][challenge-country]     |
|             | JavaScript Challenge                        | [Import Link][challenge-js]          |

[error-500s]: https://cw-preview.000000039.xyz/cf/error/500s/
[error-1000s]: https://cw-preview.000000039.xyz/cf/error/1000s/
[block-ip]: https://cw-preview.000000039.xyz/cf/block/ip/
[block-waf]: https://cw-preview.000000039.xyz/cf/block/waf/
[block-rate-limit]: https://cw-preview.000000039.xyz/cf/block/rate-limit/
[challenge-interactive]: https://cw-preview.000000039.xyz/cf/challenge/interactive/
[challenge-managed]: https://cw-preview.000000039.xyz/cf/challenge/managed/
[challenge-country]: https://cw-preview.000000039.xyz/cf/challenge/country/
[challenge-js]: https://cw-preview.000000039.xyz/cf/challenge/javascript/

## 🌍 Deployment Guide

-   **Deploy to Vercel (Recommended)**:

    [![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2FAlice39s%2Fcloudflare-custom-pages-nextjs%2Ftree%2Fmain&project-name=cloudflare-custom-pages-nextjs-fork&repository-name=cloudflare-custom-pages-nextjs-fork&demo-title=Online%20Demo&demo-description=A%20beautiful%2C%20out-of-the-box%20Cloudflare%20WAF%20custom%20page%20template.&demo-url=https%3A%2F%2Fcw-preview.000000039.xyz%2F)

-   **Manual Deployment**:

    ```bash
    bun run build
    # Ignore the following command if using Nginx/etc.
    bun run start
    ```

    `bun run start` launches a local server using `serve@latest`, listening on `0.0.0.0:3001` by default.

## 🚀 Development Guide

0. **Install Bun**:

    ```bash
    # macOS/Linux:
    curl -fsSL https://bun.sh/install | bash
    # Windows PowerShell:
    powershell -c "irm bun.sh/install.ps1 | iex"
    ```

1. **Clone Repository**:

    ```bash
    git clone https://github.com/Alice39s/cloudflare-custom-pages-nextjs.git
    ```

2. **Install Dependencies**:

    ```bash
    bun install
    ```

3. **Start Dev Server**:

    ```bash
    bun dev
    ```

4. **Build Production Version**:

    ```bash
    bun run build
    ```

## 🎨 Customization Guide

### 1. Site Configuration

Modify fields in `./config/site.ts` (name, description, etc.).

### 2. Content Customization

Translations of all texts can be modified in `. /config/i18n.ts` to change the translation of all texts (TODO: multi-language support).

To change the page text, edit `. /config/i18n.ts`:

```ts
export const blockPageTranslations = {
    ip: {
        title: "Access Denied - IP Blocked",
        message: "The owner of this website has banned your IP address.",
    },
    // ... more translations
};
```

To modify page configurations (without text content), edit `./config/routes.ts`:

```ts
export const blockPages = {
    ip: {
        type: "ip",
        code: "1006",
        icon: "shield-ban",
        networkStatus: {
            clientStatus: "error",
            edgeStatus: "success",
        },
    },
    // ... more configurations
};
```

### 3. Component Styling

Project structure:

```
components/
├── cf/        # 🌩️ Cloudflare Components
├── home/      # 🏠 Homepage Components
└── layout/    # 🖼️ Global Layout Components
```

### 4. Custom Icons

This project utilizes the `lucide-react` icon library. To optimize the project's size, we have encapsulated a unified entry point and on-demand loading component called `Icon`.

You can follow the steps below to add or replace icons:

1. Check if the icon you want to use is not already listed in `./config/icons.ts`. If it exists, skip directly to step 5.

2. Visit the [Lucide](https://lucide.dev/icons/) icon library and select your preferred icon.

3. Click the `Copy Component Name` button to copy the icon's name.

4. Then, navigate to `./config/icons.ts` and follow the instructions to add the icon name to:

    1. `import { ... Component } from "lucide-react"` (import the icon component)
    2. `export type IconKey = ...` (add the icon name to the type list)
    3. `export const icons = { ... }` (add the icon name to the mapping dictionary)

5. Finally, use the desired icon in `./config/routes.ts`.

## 📜 License

Licensed under GPL v3.0. See [LICENSE](LICENSE) for details.
