import React from "react";
import { ReactNode } from "react";

interface DropdownNestedProps {
children?: ReactNode;
  /**
 * Direction
 */
direction?: "dropleft" | "dropright"; 
addClass?: string;
}

export const DropdownNested = ({direction, addClass, children}: DropdownNestedProps) => {
    let classTab = ["dropdown-nested"];
    direction && classTab.push(direction);
    addClass && classTab.push(addClass);
    return (
        <div className={classTab.join(" ")}>
            {children}
        </div>
    );
};