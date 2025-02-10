import React from "react";

interface SdgProps {
    sdg: string;
    size?: "16" | "24" | "40";
}

export const Sdg = ({ sdg, size = "24" }: SdgProps) => {
    return (
        <div aria-hidden="true" className={`icon icon--sdg is-sdg-${sdg} is-${size}px`}>
            <span>{sdg}</span>
        </div>
    );
};