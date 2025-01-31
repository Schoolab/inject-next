import React from "react";
import { ReactNode } from "react";

interface DropdownNestedProps {
children?: ReactNode;
  /**
 * Direction
 */
addClass?: string;
}

export const DropdownNested = ({addClass, children}: DropdownNestedProps) => {
    let classTab = ["dropdown-nested"];
    addClass && classTab.push(addClass);
    return (
        <div className={classTab.join(" ")}>
            {children}
        </div>
    );
};