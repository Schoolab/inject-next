import React from "react";
import { Icon } from "@/app/components/icons/Icon";

interface ProjectLetterProps {
    name: string;
    size?: "default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl";
    addClass?: string;  
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

export const ProjectLetter = ({ name, addClass, size = "lg", ...props }: ProjectLetterProps) => {
    let classTab = ["icon", "icon--letter"];
    size && classTab.push(`is-${size}`);
    addClass && classTab.push(addClass);

    // Function to extract initials
    const getInitial = (str: string) => {
        return str.charAt(0); // Take only the first letter of the string
    };

    return (
      <div aria-hidden="true" className={classTab.join(" ")}>
        <span aria-hidden="true">{getInitial(name)}</span>
      </div>
    );
};
