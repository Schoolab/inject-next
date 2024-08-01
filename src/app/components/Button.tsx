import React from "react";
import { Icon } from "./Icon";

export interface ButtonProps {
    /**
     * Button contents
     */
    label?: string; 
    /**
     * Is Active ?
     */
    isActive?: Boolean;
    /**
     * Icon name, names refer to the <a href="https://pictogrammers.com/library/mdi/" target="_blank">mdi list</a>
     */

    iconStartName?: string;
    /**
     * Icon name, names refer to the <a href="https://pictogrammers.com/library/mdi/" target="_blank">mdi list</a>
     */
    iconEndName?: string;
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * Is this the principal call to action on the page?
     */
    type?: "default" | "primary" | "transparent" | "muted" | "danger" | "warning" | "secondary";
    /**
     * How large should the button be?
     */
    size?: "default" | "sm" | "xs";
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const Button = ({ size = "default", type, isActive = false, label, addClass, iconStartName, iconEndName, ...props }: ButtonProps) => {
    let classTab = ["btn"];
    type && classTab.push(`btn-${type}`);
    size !== "default" && classTab.push(`btn-${size}`);
    isActive && classTab.push("active");
    addClass && classTab.push(addClass);

    return (
        <a href="#" className={classTab.join(" ")} {...props}>
            {iconStartName && <Icon name={iconStartName} />}
            {label && <span>{label}</span>} 
            {iconEndName && <Icon name={iconEndName} />}
        </a>
    );
};
