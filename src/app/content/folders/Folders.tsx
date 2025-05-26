import { ItemFolder } from "@/app/components/items/ItemFolder";
import React, { CSSProperties } from "react";

export interface FoldersProps {
    addClass?: string;
    style?: CSSProperties;
}

export const Folders = ({
    addClass,
    style,
    ...props
}: FoldersProps) => {
    let classTab = ["cq row-gap-md"];
    addClass && classTab.push(addClass);

    return (
        <div id="tables-folders" className={classTab.join(" ")} style={style} {...props}>
            <div className="cq-12 cq-sm-6 cq-md-3">
                <ItemFolder label="All" caption="120 resources" icon="folder" active={true} options={[{ label: "Edit", iconName: "pencil", onClick: () => {} }, { label: "Delete", type: "danger", iconName: "delete", onClick: () => {} }]} />
            </div>
            <div className="cq-12 cq-sm-6 cq-md-3">
                <ItemFolder label="Learning course" caption="4 resources" icon="folder" options={[{ label: "Edit", iconName: "pencil", onClick: () => {} }, { label: "Delete", type: "danger", iconName: "delete", onClick: () => {} }]} />
            </div>
            <div className="cq-12 cq-sm-6 cq-md-3">
                <ItemFolder label="A very long label that is not entirely visible" caption="4 resources" icon="folder" options={[{ label: "Edit", iconName: "pencil", onClick: () => {} }, { label: "Delete", type: "danger", iconName: "delete", onClick: () => {} }]} />
            </div>
            <div className="cq-12 cq-sm-6 cq-md-3">
                <ItemFolder label="Folder Name" caption="4 resources" icon="folder" options={[{ label: "Edit", iconName: "pencil", onClick: () => {} }, { label: "Delete", type: "danger", iconName: "delete", onClick: () => {} }]} />
            </div>
        </div>
    );
};