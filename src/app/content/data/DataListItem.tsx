import React, { CSSProperties, useEffect } from "react";
import { ReactNode } from "react";
import { DataListDetails } from "@/app/content/data/DataListDetails";
import { Icon } from "@/app/components/icons/Icon";
import { tooltips } from "../../../../public/utils/tooltips";

interface DataListItemProps {
    label: string | ReactNode;
    direction?: "horizontal" | "vertical";
    tooltip?: string;
    tooltipIcon?: string;
    children?: ReactNode;
    addClass?: string;
    style?: CSSProperties;
}

export const DataListItem = ({ label = "Label", direction = "horizontal", tooltip, tooltipIcon = "help-circle", children, addClass, style, ...props }: DataListItemProps) => {
    let classTab = ["data-list-item"];
    classTab.push(`is-${direction}`);
    addClass && classTab.push(addClass);

    useEffect(() => {
      tooltips();
    }, []);

    return <div className={classTab.join(" ")} style={style} {...props}>
      <dt>
        <span>{label}</span>
        {tooltip && <Icon size="xs" name={tooltipIcon} dataOriginalTitle={tooltip} dataToggle="tooltip" dataPlacement="top" addClass="m-2xs" />}
      </dt>
      <DataListDetails>
        { children ? children : <dd>No data</dd> }
      </DataListDetails>
    </div>;
};
