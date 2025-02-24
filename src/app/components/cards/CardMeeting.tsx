import React, { CSSProperties } from "react";
import { Card } from "@/app/components/cards/Card";
import { CardInfos } from "@/app/components/cards/CardInfos";
import { Icon } from "@/app/components/icons/Icon";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Badges } from "@/app/components/badges/Badges";
import { Button } from "@/app/components/buttons/Button";
import { CardActions } from "@/app/components/cards/CardActions";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Role } from "@/app/components/badges/roles/Role";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";

type MetaType = {
    label: string;
    iconName?: string;
    addClass?: string;
}

type ButtonType = {
    addClass?: string;
    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;
    label?: string | number; 
    iconStartName?: string;
    iconEndName?: string;
    link?: string;
    hasDropdown?: Boolean;
}

type LinkType = {
    label: string;
    iconLetter?: string;
    iconName?: string;
    link?: string;
};

type ActionType = {
    title?: string;
    metas?: MetaType[];
    tasksNb?: number;
    tasksLabel?: string;
    tasksLabelPlural?: string;
    progress?: number;
    buttons?: ButtonType[];
}

interface CardMeetingProps {
    avatar?: string;
    mainAvatar?: "expert" | "project";
    showRelation?: boolean;
    name?: string;
    project?: string;
    today?: boolean;
    date: string;
    time: string;
    metas?: MetaType[];
    link?: string;
    status: "pending" | "accepted" | "success";
    
    links?: LinkType[];
    actions?: ActionType[];

    children?: React.ReactNode;
    addClass?: string;
    style?: CSSProperties;
} 

export const CardMeeting = (
    {
        avatar,
        mainAvatar = "expert",
        showRelation,
        name = "Expert",
        project = "Project",
        today,
        date,
        time,
        metas,
        link = "#",
        status = "accepted",
        links,
        actions,
        children, 
        addClass,
        style,
        ...props 
    }: CardMeetingProps
) => {
    let classTab = [""];
    addClass && classTab.push(addClass);

    let listMetas = metas?.map((meta) => <li key={meta.label}>
        { meta.iconName && <Icon name={meta.iconName} size="xs" /> }
        <span>{meta.label}</span>
    </li>); 
    let listLinks = links?.map((link) => (
        <div className="card-target">
            <a href={link.link} className="stretched-link d-flex align-items-center">
                { link.iconLetter && <span className="icon icon--letter is-sm"><span>{link.iconLetter}</span></span> }
                { link.iconName && <Icon name={link.iconName} size="sm" /> }
                <span>{link.label}</span>
            </a>
            <Icon name="chevron-right" size="sm" />
        </div>
    ));
    let listActions = actions?.map((action) => (
        <CardActions title={action.title} metas={action.metas} progress={action.progress} tasksNb={action.tasksNb} buttons={action.buttons} />
    ))
    
    return (
        <Card addClass={classTab.join(" ")} style={style} {...props}>

            <CardInfos addClass={`is-linked d-flex align-items-start gap-sm ${status === "pending" && 'is-pending'}`}>
                { mainAvatar === "expert" ? (
                    <div className="thumbnail-relation m-auto">
                        <Avatar size="lg" image={avatar} iconName="account" />
                        { showRelation && <div className="icon icon--letter is-sm is-top"><span>{project.charAt(0)}</span></div> }
                    </div>
                ) : (
                    <div className="thumbnail-relation m-auto">
                        <div className="icon icon--letter is-lg"><span>{project.charAt(0)}</span></div>
                        { showRelation && <Avatar size="sm" image={avatar} iconName="account" addClass="is-top" />}
                    </div>
                )}
                <div className="card-title flex-grow-1">
                    { mainAvatar === "expert" ? (
                        <a href="#" className="h4 mb-none stretched-link line-clamp-1 gap-2xs d-flex flex-direction align-items-center gap-2xs">
                            <span>{name}</span> / <span>{project}</span>
                        </a>
                    ) : (
                        <a href="#" className="h4 mb-none stretched-link line-clamp-1 gap-2xs d-flex flex-direction align-items-center gap-2xs">
                            <span>{project}</span> / <span>{name}</span>
                        </a>
                    ) }
                    <ul className="text-muted small metas is-list mb-none">
                        <li className={today ? 'text-danger' : ''}>
                            { today && <Icon name="notifications" size="xs" /> }
                            <span>{today ? "Today" : date}</span>
                        </li>
                        <li>{time}</li>
                    </ul>
                    { metas && <ul className="text-muted small metas is-list mb-none mt-2xs">
                        {listMetas}
                    </ul> }
                </div>

                { status === "pending" && <div className="d-flex align-items-center gap-xs py-2xs z-2">
                    <Tag status="progress" iconName="status-dashed" label="Pending" />
                    <div className="d-flex">
                        <Button iconStartName="check" size="sm" type="default" addClass="text-success" data-toggle="tooltip" data-placement="top" data-original-title="Accept invitation" data-boundary="window" />
                        <Button iconStartName="cancel" size="sm" type="transparent" addClass="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Decline invitation" data-boundary="window" />
                    </div>
                </div> }

                { status === "success" && <div className="d-flex align-items-center gap-xs py-xs z-2">
                    <Dropdown addClass="z-2">
                        <Tag status="open" iconName="flag" label="Success" addClass="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <DropdownMenu direction="right">
                            <DropdownItem label="Success" iconName="flag" addClass="text-success" />
                            <DropdownItem label="Warning" iconName="flag" addClass="text-warning" />
                            <DropdownItem label="Failed" iconName="flag" addClass="text-danger" />
                        </DropdownMenu>
                    </Dropdown>
                </div>}
                
                { status !== "pending" && <Dropdown addClass="z-2">
                    <Button type="muted" iconStartName="options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                    <DropdownMenu direction="right">
                        <DropdownItem label="Open profile" outbound={true} />
                        <DropdownItem label="Open project" outbound={true} />
                        <DropdownDivider />
                        <DropdownItem label="Add notes" caption="Access to meeting notes" iconName="plus-circle" />
                        <DropdownItem label="Mark as successful" iconName="check-circle" />
                        <DropdownDivider />
                        <DropdownItem label="Edit" iconName="pencil" />
                        <DropdownItem type="danger" label="Delete" iconName="delete" />
                    </DropdownMenu>
                </Dropdown> }
            </CardInfos>

            { links && <div className="card-targets">
               {listLinks} 
            </div> }

            { actions && listActions }

            { children }

        </Card>
    );
};
