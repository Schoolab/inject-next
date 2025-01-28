import React, { CSSProperties } from "react";
import { ReactNode } from "react";

interface DropdownMenuProps {
    children?: ReactNode;
    /**
     * Direction
     */
    direction?: "top" | "right" | "bottom" | "left"; 
    show?: boolean; 
    addClass?: string;
    style?: CSSProperties;
    }

export const DropdownMenu = ({direction, addClass, children, show, style, ...props}: DropdownMenuProps) => {
    let classTab = ["dropdown-menu"];
    direction && classTab.push(`dropdown-menu-${direction}`);
    addClass && classTab.push(addClass);
    show && classTab.push("show");
    return (
        <div className={classTab.join(" ")} style={{ ...style }} {...props}>
            {children}
        </div>
    );
};
