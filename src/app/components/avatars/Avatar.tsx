import React from "react";
import { Icon } from "../Icon";

interface AvatarProps {
    /**
     * Custom class
     */
    addClass?: string;  
    /**
     * Make the avatar round
     */
    isOval?: Boolean;
    /**
     * Add a thin border on the outside of the avatar (useful when superposed)
     */
    isBordered?: Boolean;
    /**
     * Sizes
     */
    size?: "default" | "sm" | "md" | "lg" | "xl" | "2xl";
    /**
     * IconName
     */
    iconName?: string;
    /**
     * Image URL
     */
    image?: string;
}

export const Avatar = ({ addClass, size = "lg", isOval = true, isBordered = false, iconName = "account", image, ...props }: AvatarProps) => {
    let classTab = ["thumbnail"];
    size && classTab.push(`is-${size}`);
    isOval && classTab.push(`is-oval`);
    isBordered && classTab.push(`is-bordered`);
    addClass && classTab.push(addClass);

    return (
        <span className={classTab.join(" ")} {...props}>
            {iconName && !image && <Icon name={iconName} />}
            {image && <img src={image}></img>}
        </span> 
    );
};
