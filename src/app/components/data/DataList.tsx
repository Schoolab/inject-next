import React, { CSSProperties } from "react";
import { ReactNode } from "react";

interface DataListProps {
    children?: ReactNode;
    addClass?: string;
    style?: CSSProperties;
}

export const DataList = ({ children, addClass, style, ...props }: DataListProps) => {
    let classTab = ["data-list"];
    addClass && classTab.push(addClass);

    return <div className={classTab.join(" ")} style={style} {...props}>{children}</div>;
};
