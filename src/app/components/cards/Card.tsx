import React from "react";
import { ReactNode } from "react";

interface CardProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;
}

export const Card = ({ children, addClass }: CardProps) => {
    let classTab = ["card"];
    addClass && classTab.push(addClass);
    return <div className={classTab.join(" ")}>{children}</div>;
};
