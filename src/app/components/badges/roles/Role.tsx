import React from "react";
import { tooltips } from "../../../../../public/utils/tooltips";
import { useEffect } from "react";

interface RoleProps {
    status: "admin" | "manager" | "expert" | "jury" | "participant" | "visitor";
    addClass?: string;
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

export const Role = ({ status, addClass, dataToggle, dataPlacement, dataOriginalTitle, dataBoundary, ...props }: RoleProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    
    let classTab = ["badge badge-role"];
    status && classTab.push(`is-${status}`);    
    addClass && classTab.push(addClass);

    let statusFirstCapitalize = status.charAt(0).toUpperCase() + status.slice(1);

    return <span className={classTab.join(" ")} data-toggle={dataToggle} data-placement={dataPlacement} data-original-title={dataOriginalTitle || statusFirstCapitalize} data-boundary={dataBoundary} {...props} />;
};
