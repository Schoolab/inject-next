import React, { CSSProperties } from "react";
import { ReactNode } from "react";
import { Placeholder } from "@/app/content/placeholders/Placeholder";
import { DataListItem } from "@/app/content/data/DataListItem";

interface DataListProps {
    children?: ReactNode;
    addClass?: string;
    style?: CSSProperties;
}

export const DataList = ({ children, addClass, style, ...props }: DataListProps) => {
    let classTab = ["data-list"];
    addClass && classTab.push(addClass);

    return <div className={classTab.join(" ")} style={style} {...props}>
        {children ? children : <>
            {Array.from({ length: 3 }, (_, i) => (
                <DataListItem 
                    key={i}
                    label={<Placeholder width="40px" height="16px" style={{margin: "0 4px"}} />} 
                    children={<Placeholder width="128px" height="16px" style={{margin: "0 4px"}} />} 
                />
            ))}
        </>}
    </div>;
};
