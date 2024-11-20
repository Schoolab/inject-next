import React, { CSSProperties } from "react";
import { ReactNode } from "react";

interface CardProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;
    style?: CSSProperties;
}

export const Card = ({ children, addClass, style, ...props }: CardProps) => {
    let classTab = ["card"];
    addClass && classTab.push(addClass);
    return <div className={classTab.join(" ")} style={{ ...style }} { ...props }>{children}</div>;
};
