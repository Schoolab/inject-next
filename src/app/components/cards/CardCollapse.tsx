import React from "react";
import { ReactNode } from "react";
import { Icon } from "../Icon";
import { Progress } from "../Progress";
import { Placeholder } from "../Placeholder";
import { Card } from "./Card";

type MetaType = {
    label: string;
};

interface CardCollapseProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;
    id?: string;
    parentId?: string;
    title?: string;
    metas?: MetaType[];
    progress?: number;
}

export const CardCollapse = ({ id = "Card", parentId, children, title = "Card Title", metas, progress, addClass }: CardCollapseProps) => {
    let classTab = ["card"];
    addClass && classTab.push(addClass);
    
    let listMetas = metas?.map((meta) => <li key={meta.label}>{meta.label}</li>); 

    return (
        <Card addClass={classTab.join(" ")}>
            <div className="card-header d-flex gap-sm align-items-center" id={'header' + id} data-toggle="collapse" data-target={'#body' + id} aria-expanded="false" aria-controls={'body' + id}>
                { progress && <Progress percentage={progress} /> }
                <div className="d-flex flex-column w-100 gap-none">
                    <p className="h4">{title}</p>
                    {metas && (
                        <ul className="metas is-list small">
                            {listMetas}
                        </ul>
                    )}
                    
                </div>
                <Icon name="chevron-right" />
            </div>
            <div className="collapse" id={'body' + id}  aria-labelledby={'header' + id} {...(parentId && { "data-parent": '#' + parentId })}>
                <div className="card-body">
                    {children && children}
                    {!children && <Placeholder />}
                </div>
            </div>
        </Card>
    );
};
