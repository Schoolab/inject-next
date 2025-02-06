import React, { CSSProperties } from "react";
import { ReactNode } from "react";
import { DataListDetails } from "./DataListDetails";

interface DataListItemProps {
    label: string;
    children?: ReactNode;
    addClass?: string;
    style?: CSSProperties;
}

export const DataListItem = ({ label = "Label", children, addClass, style, ...props }: DataListItemProps) => {
    let classTab = ["data-list-item"];
    addClass && classTab.push(addClass);

    return <div className={classTab.join(" ")} style={style} {...props}>
      <dt>{label}</dt>
      <DataListDetails>
        { children ? children : <dd>No data</dd> }
      </DataListDetails>
    </div>;
};
