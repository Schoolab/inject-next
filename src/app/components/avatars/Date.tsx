import React, { CSSProperties } from "react";

interface DateProps {
    month: string;
    day: string;
    size?: "sm" | "md" | "lg" | "xl";
    addClass?: string;
    style?: CSSProperties;
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

export const Date = ({ month, day, size = "lg", addClass, style, ...props }: DateProps) => {
    let classTab = ["thumbnail", "is-date"];
    size && classTab.push(`is-${size}`);
    addClass && classTab.push(addClass);

    return (
      <div className={classTab.join(" ")} style={style} {...props}>
        <span className="month">{month}</span>
        <span className="day">{day}</span>
      </div>
    );
};
