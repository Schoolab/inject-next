import React from "react";

interface NotifProps {
     /**
     * contents
     */
     label?: string; 
    /**
     * Custom class
     */
    addClass?: string;  
    /**
     * Status
     */
    status: "interactive" | "accent" | "highlight";
}

export const Notif = ({ addClass, status, label }: NotifProps) => {
    let classTab = ["badge badge-notification"];
    status && classTab.push(`is-${status}`);
    addClass && classTab.push(addClass);

    return (
        <span className={classTab.join(" ")}>
            {label && <span>{label}</span>} 
        </span> 
    );
};
