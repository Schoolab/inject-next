import React, { CSSProperties } from "react";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";
import { Icon } from "../Icon";
import { Tag } from "../badges/tags/Tag";
import { Badges } from "../badges/Badges";
import { Button } from "../Button";
import { CardActions } from "./CardActions";
import { Avatar } from "../avatars/Avatar";
import { Role } from "../badges/roles/Role";

type TagType = {
    label: string;
    link?: string;
};

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

interface CardParticipantProps {
    vertical?: boolean;
    avatar?: string;
    name: string;
    role?: "admin" | "manager" | "expert" | "jury" | "participant";
    metas?: MetaType[];
    link?: string;
    tags?: TagType[];
    showButton?: boolean;
    
    links?: LinkType[];
    actions?: ActionType[];

    children?: React.ReactNode;
    addClass?: string;
    style?: CSSProperties;
} 

export const CardParticipant = (
    {
        vertical,
        avatar,
        name,
        role,
        metas,
        link = "#",
        tags,
        showButton,
        links,
        actions,
        children, 
        addClass,
        style,
        ...props 
    }: CardParticipantProps
) => {
    let classTab = [""];
    addClass && classTab.push(addClass);

    let listMetas = metas?.map((meta) => <li key={meta.label}>{meta.label}</li>); 
    let listTags = tags?.slice(0, 2).map((tag) => <Tag label={tag.label} link={tag.link} />);
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

            <CardInfos addClass={ vertical ? "card-infos is-linked d-flex flex-column gap-md pt-2xl text-center" : "is-linked d-flex align-items-start gap-sm" }>
                <div className="thumbnail-relation m-auto">
                    <Avatar size={ vertical ? "2xl" : "lg" } image={avatar} iconName="account" />
                </div>
                <div className="card-title flex-grow-1">
                    <a href="#" className={`${vertical ? 'h3' : 'h4'} mb-none stretched-link line-clamp-1 gap-2xs d-flex flex-direction align-items-center ${vertical && 'justify-content-center'} gap-2xs`}>
                        <span>{name}</span>
                        { role && <Role status={role} addClass="z-2" /> }
                    </a>
                    <ul className={`text-muted small metas is-list mb-none ${vertical && 'justify-content-center'}`}>
                        {metas && listMetas}
                    </ul>
                    { tags && <Badges addClass="flex-nowrap mt-xs">
                        { listTags }
                        { tags.length - 2 > 0 && <span className="text-muted small text-nowrap">+{tags.length - 2}</span> }
                    </Badges> }
                </div>
                <div className={`dropdown ${vertical ? 'position-absolute' : ''}`} style={vertical ? { top: ".75rem", right: ".75rem" } : {}}>
                    <a className="btn btn-transparent btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span className="icon is-20px icon-options" />
                    </a>
                    <div className="dropdown-menu dropdown-menu-right">
                        <a className="dropdown-item" href="#">
                            Show profile
                        </a>
                        <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                            Send a message
                        </a>
                    </div>
                </div>
                { vertical && showButton && <div className="card-actions z-2">
                    <Button label="Message" type="default" iconStartName="comment" />
                </div> }
            </CardInfos>

            { links && <div className="card-targets">
               {listLinks} 
            </div> }

            { actions && listActions }

            { children }

        </Card>
    );
};
