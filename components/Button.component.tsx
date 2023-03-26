import { IconIds } from "@/types/icon.types";
import { PropsWithChildren } from "react";
import { Icon } from "./Icon/Icon.component";

interface ButtonProps {
  icon?: IconIds;
}

export const Button = ({
  children,
  icon,
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button className="bg-purple rounded px-l py-sm text-white font-inter font-regular text-m flex space-x-sm items-center">
      {icon && <Icon id="plus" />}
      <span className="inline-block">{children}</span>
    </button>
  );
};
