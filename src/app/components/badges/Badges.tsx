import React from "react";
import { ReactNode } from "react";

interface BadgesProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;
}

export const Badges = ({ children, addClass }: BadgesProps) => {
    let classTab = ["badges"];
    addClass && classTab.push(addClass);
    return <div className={classTab.join(" ")}>{children}</div>;
};
