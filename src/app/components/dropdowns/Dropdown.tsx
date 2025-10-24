import React, { CSSProperties } from "react";
import { ReactNode } from "react";

interface DropdownProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;
    style?: CSSProperties;
}

export const Dropdown = ({ children, addClass, style, ...props }: DropdownProps) => {
    let classTab = ["dropdown-container"];
    addClass && classTab.push(addClass);
    return <div className={classTab.join(" ")} style={style} {...props}>{children}</div>;
};
