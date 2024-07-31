import React from "react";
import { Icon } from "./Icon";

export interface ButtonProps {
  /**
   * Button contents
   */
  label: string;
  /**
   * Icon Start
   */
  iconStart?: Boolean;
  /**
   * Icon name, names refer to the <a href="https://pictogrammers.com/library/mdi/" target="_blank">mdi list</a>
   */

  iconStartName?: string;
  /**
   * Icon End
   */
  iconEnd?: Boolean;
  /**
   * Icon name, names refer to the <a href="https://pictogrammers.com/library/mdi/" target="_blank">mdi list</a>
   */
  iconEndName?: string;
  /**
   * Custom class
   */
  customClass?: string;
  /**
   * Is this the principal call to action on the page?
   */
  type:
    | "default"
    | "primary"
    | "transparent"
    | "muted"
    | "danger"
    | "warning"
    | "secondary";
  /**
   * How large should the button be?
   */
  size?: "default" | "sm" | "xs";
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const Button = ({
  size = "default",
  type = "primary",
  label,
  customClass,
  iconStart = false,
  iconStartName = "compass",
  iconEnd = false,
  iconEndName = "open-in-new",
  ...props
}: ButtonProps) => {
  const sizeContent = size !== "default" ? `btn-${size}` : "";
  return (
    <a
      href="#"
      className={["btn", `btn-${type}`, sizeContent, customClass].join(" ")}
      {...props}
    >
      {iconStart && <Icon name={iconStartName} />}
      <span>{label}</span>
      {iconEnd && <Icon name={iconEndName} />}
    </a>
  );
};
