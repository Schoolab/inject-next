import React, { CSSProperties } from "react";
import { Icon } from "../../Icon";

interface TagProps {
    label?: string;
    link?: string;
    isPill?: Boolean;
    status?: "default" | "open" | "progress" | "closed" | "done" | "draft";
    /**
     * Icon name, names refer to the <a href="https://pictogrammers.com/learning/mdi/" target="_blank">mdi list</a>
     */
    iconName?: string;

    addClass?: string;
    style?: CSSProperties;
}

export const Tag = (
    { 
        isPill = true, 
        iconName, 
        status = "default", 
        label, 
        link,
        addClass,
        style,
        ...props 
    }: TagProps
) => {
    let classTab = ["badge"];
    isPill && classTab.push("is-pill");
    status !== "default" && classTab.push(`is-${status}`);
    addClass && classTab.push(addClass);

    if (link) {
        return (
            <a href={link} className={classTab.join(" ")} style={style} {...props}>
                {iconName && <Icon name={iconName} />}
                {label && <span>{label}</span>}
            </a>
        );
    }

    return (
        <span className={classTab.join(" ")} style={style} {...props}>
            {iconName && <Icon name={iconName} />}
            {label && <span>{label}</span>}
        </span>
    );
};
