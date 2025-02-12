import React, { CSSProperties } from "react";
import { ReactNode } from "react";
import { Icon } from "@/app/components/Icon";
import { Button } from "@/app/components/Button";
import { Tag } from "@/app/components/badges/tags/Tag";
import { ProgressBar } from "@/app/components/ProgressBar";

type MetaType = {
    label: string;
    iconName?: string;
    addClass?: string;
}

type ButtonType = {
    addClass?: string;
    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;
    label?: string | number; 
    iconStartName?: string;
    iconEndName?: string;
    link?: string;
    hasDropdown?: Boolean;
}

interface CardActionsProps {
    title?: string;
    metas?: MetaType[];

    tasksNb?: number;
    tasksLabel?: string;
    tasksLabelPlural?: string;
    progress?: number;

    status?: "draft" | "submitted" | "review" | "accepted" | "rejected";
    buttons?: ButtonType[];
    
    addClass?: string;
    style?: CSSProperties;
}

export const CardActions = (
    {
        title,
        metas,
        tasksNb,
        tasksLabel,
        tasksLabelPlural,
        progress,
        status,
        buttons,
        addClass,
        style,
        ...props
    }: CardActionsProps
) => {
    let classTab = ["card-links d-flex flex-column gap-xs"];
    addClass && classTab.push(addClass);

    let listMetas = metas?.map((meta) => (
        <li className={"d-flex gap-3xs " + meta.addClass}>
            { meta.iconName && <Icon name={meta.iconName} size="xs" /> }
            <span>{meta.label}</span>
        </li>
    ));

    let listButtons = buttons?.map((button) => (
        <Button label={button.label} type={button.type} link={button.link} iconStartName={button.iconStartName} iconEndName={button.iconEndName} />
    ));

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            { title && 
                <div className="d-flex gap-sm align-items-center justify-content-between text-muted">
                    <div className="text-navigation-bold text-truncate mr-2">{ title }</div>
                    { metas && (
                        <ul className="list-unstyled small d-flex gap-2xs">
                            { listMetas }
                        </ul>
                    ) }
                    { status === "draft" && <Tag label="Draft" iconName="status-bordered" status="draft" /> }
                    { status === "submitted" && <Tag label="Submitted" iconName="status-bordered" status="draft" /> }
                    { status === "review" && <Tag label="In review" iconName="status-dashed" status="progress" /> }
                    { status === "accepted" && <Tag label="Accepted" iconName="status-filled" status="done" /> }
                    { status === "rejected" && <Tag label="Rejected" iconName="status-stop" status="closed" /> }
                </div>
            }

            { tasksNb && progress && <ProgressBar max={tasksNb} percentage={ (progress / tasksNb) * 100 } text={ progress + "/" + tasksNb } inline={true} /> }

            { listButtons && <div className="card-actions">
                { listButtons }
            </div> }
        </div>
    );
};
