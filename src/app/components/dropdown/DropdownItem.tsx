import React from "react";
import { Icon } from "../Icon";

interface DropdownItemProps {
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * is interactive or danger ?
     */
    type?: "interactive" | "danger" | "ai";
    /**
     * is this an outbound link?
     */
    outbound?: boolean;
    /**
     * Label
     */
    label: string;
      /**
     * Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>
     */
    iconName?: string;
    /**
     * Caption
     */
    caption?: string;

}

export const DropdownItem = ({ type, addClass, outbound, label, iconName, caption }: DropdownItemProps) => {
    let classTab = ["dropdown-item"];
    type && classTab.push(`is-${type}`);
    addClass && classTab.push(addClass);
    return (
        <a className={classTab.join(" ")} href="#">
            {iconName && <Icon name={iconName} addClass="dropdown-item--icon" />}
            <div className="dropdown-item--label">
                <span>{label}</span>
                {caption && <span className="caption">{caption}</span>}
            </div>           
            {outbound && <Icon name="arrow-top-right" addClass="dropdown-item--shortcut" />}
        </a>
    );
};
