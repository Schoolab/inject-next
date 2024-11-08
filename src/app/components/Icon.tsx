import React from "react";

export interface IconProps {
  /**
   * Icon name
   */
  name: string;
  /**
   * How large should the icon be?
   */
  size?: "default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl";
  /**
   * Custom class
   */
  addClass?: string;
}

/**
 * Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.
 */
export const Icon = ({ name, size="default", addClass, ...props }: IconProps) => {
  let classTab = ["icon"];
  size !== "default" && classTab.push(`is-${size}`);
  name && classTab.push(`icon-${name}`);
  addClass && classTab.push(addClass);

  // const sizeContent = size !=="default" ? `is-${size}`: "" ;
  // addClass && classTab.push(addClass);

  return (
    <span className={classTab.join(" ")} {...props}></span>
  );
};