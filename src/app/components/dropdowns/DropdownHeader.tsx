import React, { CSSProperties } from "react";
import { ReactNode } from "react";

interface DropdownHeaderProps {
    children?: ReactNode;
    label: string;
    addClass?: string;
    style?: CSSProperties;
}

export const DropdownHeader = ({ children, label, addClass, style, ...props }: DropdownHeaderProps) => {
    let classTab = ["dropdown-header"];
    addClass && classTab.push(addClass);
    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            <span>{label}</span>
            {children}
        </div>
    );
};