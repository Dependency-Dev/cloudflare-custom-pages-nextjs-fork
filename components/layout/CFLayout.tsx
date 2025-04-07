import type { ReactNode } from "react";
import Footer from "../cf/Footer";
import { BaseLayout } from "./BaseLayout";

interface CFLayoutProps {
  children: ReactNode;
}

export const CFLayout = ({ children }: CFLayoutProps) => {
  return (
    <BaseLayout>
      <div className="flex flex-col min-h-[calc(100vh-2rem)] sm:min-h-[calc(100vh-3rem)] w-full px-2 sm:px-4 lg:px-6">
        <div className="flex-grow flex flex-col sm:justify-center w-full max-w-[360px] sm:max-w-[420px] md:max-w-2xl lg:max-w-3xl mx-auto">
          <div className="w-full pt-2 pb-4">
            {children}
          </div>
        </div>
        <div className="mt-4 sm:mt-6">
          <Footer />
        </div>
      </div>
    </BaseLayout>
  );
};

export default CFLayout;
