import { icons } from "@/components/Icon/Icon.component";

export type IconIds = "plus" | "bin";

export interface IconProps {
  className?: string;
  id: IconIds;
}
