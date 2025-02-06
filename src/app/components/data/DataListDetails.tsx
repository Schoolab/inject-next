import React, { CSSProperties } from "react";
import { ReactNode } from "react";

interface DataListDetailsProps {
    children?: ReactNode;
    addClass?: string;
    style?: CSSProperties;
}

export const DataListDetails = ({ children, addClass, style, ...props }: DataListDetailsProps) => {
    let classTab = ["data-list-details"];
    addClass && classTab.push(addClass);

    return <div className={classTab.join(" ")} style={style} {...props}>
      {children}
    </div>;
};
