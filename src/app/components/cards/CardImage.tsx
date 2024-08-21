import React from "react";
import { ReactNode } from "react";

interface CardImageProps {
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * does the card infos is linked ?
     */
    is3by1?: boolean;
      /**
     * image url
     */
    src: string;
}

export const CardImage = ({ is3by1, addClass, src}: CardImageProps) => {
    let classTab = ["card-image"];
    is3by1 && classTab.push("is-3by1");
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")}>
            <picture>
                <img src={src} alt="" />
            </picture>
        </div>
    );
};
