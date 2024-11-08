import React from "react";
import { Icon } from "@/app/components/Icon";

export interface StatCardProps {
    /**
     * Stat Number
     */
    number?: string;

    /**
     * Stat variation compared to previous period
     */
    variation?: string;

    /**
     * Warning
     */
    warning?: Boolean;

    /** 
     * Caption
     */
    caption?: string;

    /**
     * Link
     */
    link?: string;

    /**
     * Custom class
     */
    addClass?: string;
}

export const StatCard = ({ number = "0", variation, warning = false, caption = "Statistic Name", link = "", addClass, ...props }: StatCardProps) => {
    let classTab = ["bg-light rounded p-sm w-100 d-flex flex-column gap-2xs justify-content-center text-decoration-none"];
    addClass && classTab.push(addClass);

    if (link !== "") {
        return (
            <a href={`link`} className={classTab.join(" ")} {...props}>
                <div className="d-flex align-items-baseline gap-xs">
                    <span className="h2 mb-none" style={{ fontSize: "2rem", lineHeight: "2rem", fontWeight: "600" }}>
                        {number}
                    </span>
                    {warning && <Icon name="alert" addClass="text-warning is-sm" />}
                    {variation && <span className="small text-muted">{variation}</span>}
                </div>
                <div className="d-flex text-muted small">
                    <span>{caption}</span>
                    <Icon name="chevron-right" />
                </div>
            </a>
        )
    }
    return (
        <div className={classTab.join(" ")} {...props}>
            <div className="d-flex align-items-baseline gap-xs">
                <span className="h2 mb-none" style={{ fontSize: "2rem", lineHeight: "2rem", fontWeight: "600" }}>
                    {number}
                </span>
                {warning && <Icon name="alert" addClass="text-warning is-sm" />}
                {variation && <span className="small text-muted">{variation}</span>}
            </div>
            <div className="d-flex text-muted small">
                <span>{caption}</span>
            </div>
        </div>
    )
};
