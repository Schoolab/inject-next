import React from "react";
import { ReactNode } from "react";

interface CardBannerProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;
}

export const CardBanner = ({ addClass, children }: CardBannerProps) => {
    let classTab = ["card-banner"];   
    addClass && classTab.push(addClass);

    return <div className={classTab.join(" ")}>{children}</div>;
    ;
};
