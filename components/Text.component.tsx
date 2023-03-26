import { createElement } from "react";

import type { PropsWithChildren } from "react";

type TextSizes = "l" | "m" | "s";

interface TextProps {
  className?: string;
  size: TextSizes;
  type?: "span" | "p" | "h1" | "h2" | "h3" | "h4" | "h5";
}

/**
 * Tailwind doesn't support dynamic classnames
 * Create a helper function that returns the class as whole string
 * https://tailwindcss.com/docs/content-configuration#dynamic-class-names
 */
export const getTextSize = (size: TextSizes) => {
  switch (size) {
    case "l":
      return "text-l sm:text-l";
    case "m":
      return "text-s sm:text-m";
    case "s":
      return "text-s";
  }
};

export const Text = ({
  className = "",
  children,
  size,
  type = "span",
  ...rest
}: PropsWithChildren<TextProps>) => {
  return createElement(
    type,
    {
      ...rest,
      className: `${getTextSize(size)} text-white font-inter m-0 ${className}`,
    },
    children
  );
};
