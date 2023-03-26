import React from "react";

import { PlusIcon } from "./icons/Plus.icon";
import { BinIcon } from "./icons/Bin.icon";
import { IconProps } from "@/types/icon.types";
import { CloseIcon } from "./icons/Close.icon";

export const icons = [
  { id: "plus", value: PlusIcon },
  { id: "bin", value: BinIcon },
  { id: "close", value: CloseIcon },
];

export const Icon = ({ id, className = "" }: IconProps): JSX.Element => {
  const svg = icons.find((icon) => icon.id === id);
  const IconElement = svg?.value;

  return (
    <>
      {IconElement ? (
        <span
          data-cy={id}
          className={`
              w-[1em] h-[1em] inline-block transform scale-[1.25]
              ${className}
          `}
        >
          <IconElement />
        </span>
      ) : (
        <span>☒</span>
      )}
    </>
  );
};
