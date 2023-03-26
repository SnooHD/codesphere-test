import { Icon } from "./Icon/Icon.component";

import type { ButtonHTMLAttributes, PropsWithChildren } from "react";
import type { IconIds } from "@/types/icon.types";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: IconIds;
}

export const Button = ({
  children,
  icon,
  className = "",
  ...rest
}: PropsWithChildren<ButtonProps>): JSX.Element => {
  return (
    <button
      className={`
        bg-purple rounded px-l py-xs text-white font-inter font-regular text-m flex space-x-xs items-center justify-center
        ${className}
      `}
      {...rest}
    >
      {icon && <Icon id="plus" />}
      <span className="inline-block">{children}</span>
    </button>
  );
};
