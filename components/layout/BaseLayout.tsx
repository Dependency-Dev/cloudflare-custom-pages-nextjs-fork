import type { JSX, ReactNode } from "react";

interface BaseLayoutProps {
  children: ReactNode;
}

export const BaseLayout = ({ children }: BaseLayoutProps): JSX.Element => {
  return (
    <div className="relative flex flex-col min-h-screen w-full">
      <main className="flex-grow pt-2 sm:pt-6">{children}</main>
    </div>
  );
};

export default BaseLayout;
