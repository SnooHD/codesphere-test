import { icons } from "@/components/Icon/Icon.component";

export type IconIds = "plus" | "bin" | "close";

export interface IconProps {
  className?: string;
  id: IconIds;
}
