import React from "react";

export interface IconProps {
  /**
   * Icon name, names refer to the <a href="https://pictogrammers.com/library/mdi/" target="_blank">mdi list</a>
   */
  name: string;
  /**
   * How large should the icon be?
   */
  size?: "default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl";
}

/**
 * Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.
 */
export const Icon = ({ name, size="default" }: IconProps) => {
  const sizeContent = size !=="default" ? `is-${size}`: "" ;
  return (
    <span className={["icon", `icon-${name}`, sizeContent].join(" ")}></span>
  );
};
