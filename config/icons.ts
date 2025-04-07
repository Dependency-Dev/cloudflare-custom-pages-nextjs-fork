// 1. 在这里引入图标，注意是 `Copy Component Name` 按钮复制的名称
import {
  Activity,
  ArrowRight,
  BadgeAlert,
  BookOpen,
  CheckCircle,
  ChevronsLeftRightEllipsis,
  Construction,
  FileQuestion,
  Github,
  Heart,
  HelpCircle,
  Info,
  Lightbulb,
  Loader,
  LoaderCircle,
  Lock,
  type LucideIcon,
  Moon,
  Network,
  Shield,
  ShieldAlert,
  ShieldBan,
  ShieldCheck,
  ShieldEllipsis,
  Sun,
  TriangleAlert,
  XCircle,
} from "lucide-react";

// 2. 在这里添加你想要的图标到类型列表中
export type IconKey =
  | "shield-ban"
  | "shield"
  | "loader"
  | "badge-alert"
  | "construction"
  | "shield-check"
  | "shield-alert"
  | "shield-ellipsis"
  | "file-question"
  | "sun"
  | "moon"
  | "triangle-alert"
  | "lock"
  | "info"
  | "book-open"
  | "github"
  | "heart"
  | "arrow-right"
  | "check-circle"
  | "x-circle"
  | "loader-circle"
  | "activity"
  | "network"
  | "help-circle"
  | "lightbulb"
  | "chevron-left-right-ellipsis";

// 3. 在这里添加你想要的图标到 `icons` 映射字典中
export const icons: Record<IconKey, LucideIcon> = {
  "shield-ban": ShieldBan,
  shield: Shield,
  loader: Loader,
  "badge-alert": BadgeAlert,
  construction: Construction,
  "shield-check": ShieldCheck,
  "shield-alert": ShieldAlert,
  "shield-ellipsis": ShieldEllipsis,
  "file-question": FileQuestion,
  sun: Sun,
  moon: Moon,
  "triangle-alert": TriangleAlert,
  lock: Lock,
  info: Info,
  "book-open": BookOpen,
  github: Github,
  heart: Heart,
  "arrow-right": ArrowRight,
  "check-circle": CheckCircle,
  "x-circle": XCircle,
  "loader-circle": LoaderCircle,
  activity: Activity,
  network: Network,
  "help-circle": HelpCircle,
  lightbulb: Lightbulb,
  "chevron-left-right-ellipsis": ChevronsLeftRightEllipsis,
};
