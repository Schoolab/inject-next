import React from "react";
import { ReactNode } from "react";
import { Icon } from "@/app/components/icons/Icon";
import { Progress } from "@/app/components/progress/Progress";
import { Placeholder } from "@/app/content/Placeholder";
import { Card } from "@/app/components/cards/Card";

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
    headerClass?: string;
    bodyClass?: string;
}

export const CardCollapse = ({ id = "Card", parentId, children, title = "Card Title", metas, progress, headerClass, bodyClass, addClass }: CardCollapseProps) => {
    let classTab = [""];
    addClass && classTab.push(addClass);

    let classTabHeader = ["card-header d-flex gap-sm align-items-center"];
    headerClass && classTabHeader.push(headerClass);

    let classTabBody = ["card-body"];
    bodyClass && classTabBody.push(bodyClass);
    
    let listMetas = metas?.map((meta) => <li key={meta.label}>{meta.label}</li>); 

    return (
        <Card addClass={classTab.join(" ")}>
            <div className={classTabHeader.join(" ")} id={'header' + id} data-toggle="collapse" data-target={'#body' + id} aria-expanded="false" aria-controls={'body' + id}>
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
            <div className="collapse" id={'body' + id} aria-labelledby={'header' + id} {...(parentId && { "data-parent": '#' + parentId })}>
                <div className={classTabBody.join(" ")}>
                    {children && children}
                    {!children && <Placeholder />}
                </div>
            </div>
        </Card>
    );
};
