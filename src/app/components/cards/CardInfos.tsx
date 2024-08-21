import React from "react";
import { ReactNode } from "react";

interface CardInfosProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;  
}

export const CardInfos = ({addClass, children }: CardInfosProps) => {
    let classTab = ["card-infos"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")}>
            {children}
        </div>
    );
};
