import React from "react";
import { Icon } from "../../Icon";

interface TagProps {
    /**
     * Contents
     */
    label?: string;
    link?: string;
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * is pill ?
     */
    isPill?: Boolean;
    /**
     * Status
     */
    status?: "default" | "open" | "progress" | "closed" | "done" | "draft";
    /**
     * Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>
     */
    iconName?: string;
}

export const Tag = ({ isPill = true, addClass, iconName, status = "default", label, link }: TagProps) => {
    let classTab = ["badge"];
    isPill && classTab.push("is-pill");
    status !== "default" && classTab.push(`is-${status}`);
    addClass && classTab.push(addClass);

    if (link) {
        return (
            <a className={classTab.join(" ")} href={link}>
                {iconName && <Icon name={iconName} />}
                {label && <span>{label}</span>}
            </a>
        );
    }

    return (
        <span className={classTab.join(" ")}>
            {iconName && <Icon name={iconName} />}
            {label && <span>{label}</span>}
        </span>
    );
};
