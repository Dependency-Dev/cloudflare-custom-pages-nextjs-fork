import { Icon } from "@/components/ui/icon";
import { siteConfig } from "@/config/site";

export function Hero() {
  return (
    <div className="text-center mb-8 space-y-6 lg:space-y-8">
      <div className="inline-flex justify-center p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg">
        <div className="flex h-16 w-16 lg:h-20 lg:w-20 items-center justify-center rounded-xl bg-blue-100 dark:bg-blue-900/30 shadow-inner">
          <Icon
            name="shield"
            className="h-8 w-8 lg:h-10 lg:w-10 text-blue-600 dark:text-blue-400"
          />
        </div>
      </div>
      <div className="max-w-3xl mx-auto space-y-4 lg:space-y-6 gap-4">
        <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          {siteConfig.name}
        </h1>
        <p className="text-lg lg:text-2xl text-gray-600 dark:text-gray-400 leading-relaxed">
          {siteConfig.description}
        </p>
      </div>
    </div>
  );
}
