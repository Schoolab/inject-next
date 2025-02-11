import React from "react";
import { Icon } from "../Icon";

interface AvatarProps {
    addClass?: string;  
    isOval?: Boolean;
    isBordered?: Boolean;
    size?: "default" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl";
    iconName?: string;
    image?: string;
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

export const Avatar = ({ addClass, size = "lg", isOval = true, isBordered = false, iconName = "account", image, dataToggle, dataPlacement, dataOriginalTitle, dataBoundary, ...props }: AvatarProps) => {
    let classTab = ["thumbnail"];
    size && classTab.push(`is-${size}`);
    isOval && classTab.push(`is-oval`);
    isBordered && classTab.push(`is-bordered`);
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")} data-toggle={dataToggle} data-placement={dataPlacement} data-original-title={dataOriginalTitle} data-boundary={dataBoundary} {...props}>
            {iconName && !image && <Icon name={iconName} />}
            {image && <img src={image}></img>}
        </div> 
    );
};
