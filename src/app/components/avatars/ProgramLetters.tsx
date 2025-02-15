import React from "react";
import { Icon } from "@/app/components/Icon";

interface ProgramLettersProps {
    name: string;
    size?: "default" | "2xs" | "xs" | "2sm" | "sm" | "md" | "lg" | "xl" | "2xl";
    addClass?: string;  
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

export const ProgramLetters = ({ name, addClass, size = "lg", ...props }: ProgramLettersProps) => {
    let classTab = ["icon", "icon--program"];
    size && classTab.push(`is-${size}`);
    addClass && classTab.push(addClass);

    // Function to extract initials
    const getInitials = (str: string) => {
        return str
            .split(/\s+/)  // Split string into words
            .slice(0, 3)   // Take first 3 words
            .map(word => word.charAt(0))  // Take first letter of each word
            .join('');     // Join letters together
    };

    return (
      <div aria-hidden="true" className={classTab.join(" ")}>
        <span aria-hidden="true">{getInitials(name)}</span>
      </div>
    );
};
