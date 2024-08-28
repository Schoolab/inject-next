import React from "react";
import { ReactNode } from "react";

interface DropdownProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;
}

export const Dropdown = ({ children, addClass }: DropdownProps) => {
    let classTab = ["dropdown"];
    addClass && classTab.push(addClass);
    return <div className={classTab.join(" ")}>{children}</div>;
};
