import React from "react";
import { Icon } from "@/app/components/Icon";

interface ItemIconProps {
    icon?: string;
    size?: "default" | "sm";
    addClass?: string;  
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

export const ItemIcon = ({ icon = "file-pdf-box", addClass, size = "default", ...props }: ItemIconProps) => {
    let classTab = ["icon"];
    size === "default" && classTab.push("item-icon");
    size === "sm" && classTab.push(`is-${size}`);
    icon && classTab.push(`icon-${icon}`);
    addClass && classTab.push(addClass);

    return (
      <div aria-hidden="true" className={classTab.join(" ")}></div>
    );
};
