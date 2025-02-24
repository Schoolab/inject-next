import React from "react";
import { Icon } from "@/app/components/icons/Icon";

export interface StatCardProps {
    /**
     * Stat Number
     */
    number?: number | any;

    isPercentage?: boolean;

    /**
     * Stat variation compared to previous period
     */
    variation?: number;

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

export const StatCard = ({ number = 0, isPercentage, variation, warning = false, caption = "Statistic Name", link = "", addClass, ...props }: StatCardProps) => {
    let classTab = ["bg-light rounded p-sm w-100 h-100 d-flex flex-column gap-xs justify-content-start text-decoration-none"];
    addClass && classTab.push(addClass);

    let difference;
    let formattedDifference;

    if (variation !== undefined && variation !== 0) {
        difference = ((number - (number - variation)) / (number - variation)) * 100;
        formattedDifference = Math.abs(difference).toFixed(1);
    } else {
        formattedDifference = 0;
    }

    if (link) {
        return (
            <a href={`link`} className={classTab.join(" ")} {...props}>
                <div className="d-flex flex-column gap-2xs">
                    <div className="d-flex gap-none align-items-center text-muted text-navigation-bold">
                        <span>{caption}</span>
                        <Icon name="chevron-right" size="xs" />
                    </div>
                    <div className="d-flex align-items-baseline gap-xs">
                        <span className="h2 mb-none" style={{ fontSize: "2rem", lineHeight: "2rem", fontWeight: "600" }}>
                            {number}{ isPercentage ? "%" : "" }
                        </span>
                        {warning && <Icon name="alert" addClass="text-warning is-sm" />}
                    </div>
                </div>
                { variation !== undefined && (
                    <div className="d-flex gap-3xs small">
                        <Icon 
                            size="xs" 
                            name={variation > 0 ? "arrow-up-circle" : variation < 0 ? "arrow-down-circle" : "arrow-right-circle"} 
                            addClass={variation > 0 ? " text-success" : variation < 0 ? " text-danger" : " text-muted"} 
                        />
                        <span className={variation > 0 ? " text-success" : variation < 0 ? " text-danger" : "text-muted"}>
                            { (variation >= 0 ? "+" : "") + variation}{ isPercentage ? "%" : "" }
                        </span>
                        { difference && <span className="text-muted">({ difference >= 0 ? "+" : "-" }{ formattedDifference }%)</span> }
                    </div>
                )}
            </a>
        )
    }
    return (
        <div className={classTab.join(" ")} {...props}>
            <div className="d-flex flex-column gap-2xs">
                <div className="d-flex gap-none align-items-center text-muted text-navigation-bold">
                    <span>{caption}</span>
                </div>
                <div className="d-flex align-items-baseline gap-xs">
                    <span className="h2 mb-none" style={{ fontSize: "2rem", lineHeight: "2rem", fontWeight: "600" }}>
                        {number}{ isPercentage ? "%" : "" }
                    </span>
                    {warning && <Icon name="alert" addClass="text-warning is-sm" />}
                </div>
            </div>
            { variation !== undefined && (
                <div className="d-flex gap-3xs small">
                    <Icon 
                        size="xs" 
                        name={variation > 0 ? "arrow-up-circle" : variation < 0 ? "arrow-down-circle" : "arrow-right-circle"} 
                        addClass={variation > 0 ? " text-success" : variation < 0 ? " text-danger" : " text-muted"} 
                    />
                    <span className={variation > 0 ? " text-success" : variation < 0 ? " text-danger" : "text-muted"}>
                        { (variation >= 0 ? "+" : "") + variation}{ isPercentage ? "%" : "" }
                    </span>
                    { difference && <span className="text-muted">({ difference >= 0 ? "+" : "-" }{ formattedDifference }%)</span> }
                </div>
            )}
        </div>
    )
};
