import React from "react";
import { tooltips } from "../../../../../public/utils/tooltips";
import { useEffect } from "react";

interface RoleProps {
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * Status
     */
    status: "admin" | "manager" | "expert" | "jury" | "participant" | "visitor";
}

export const Role = ({ addClass, status }: RoleProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    
    let classTab = ["badge badge-role"];
    status && classTab.push(`is-${status}`);    
    addClass && classTab.push(addClass);

    let statusFirstCapitalize = status.charAt(0).toUpperCase() + status.slice(1);

    return <span className={classTab.join(" ")} data-toggle="tooltip" data-placement="top" data-original-title={statusFirstCapitalize} data-boundary="window" />;
};
