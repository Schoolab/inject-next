import React from "react";
import { ReactNode } from "react";

interface DropdownMenuProps {
children?: ReactNode;
  /**
 * Direction
 */
direction?: "top" | "right" | "bottom" | "left"; 
show?: boolean; 
addClass?: string;
}

export const DropdownMenu = ({direction, addClass, children, show}: DropdownMenuProps) => {
    let classTab = ["dropdown-menu"];
    direction && classTab.push(`dropdown-menu-${direction}`);
    addClass && classTab.push(addClass);
    show && classTab.push("show");
    return (
        <div className={classTab.join(" ")}>
            {children}
        </div>
    );
};
