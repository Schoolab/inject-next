import React, { CSSProperties } from "react";

interface SdgProps {
    number: number;
    size?: "16px" | "24px" | "40px";
    addClass?: string;
    style?: CSSProperties;
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

export const Sdg = ({ number, size = "40px", addClass, style, ...props }: SdgProps) => {
    let classTab = ["icon", "icon--sdg"];
    number && classTab.push(`is-sdg-${number}`);
    size && classTab.push(`is-${size}`);
    addClass && classTab.push(addClass);

    return (
      <div aria-hidden="true" className={classTab.join(" ")} style={style} {...props}>
        <span>{number}</span>
      </div>
    );
};
