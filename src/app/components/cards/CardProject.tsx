import React, { CSSProperties } from "react";
import { Tag } from "../badges/tags/Tag";
import { Icon } from "../Icon";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";
import { CardActions } from "./CardActions";
import { Badges } from "../badges/Badges";
import { CardBanner } from "./CardBanner";
import { CardImage } from "./CardImage";

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
    status?: "draft" | "submitted" | "review" | "accepted" | "rejected";
    buttons?: ButtonType[];
}

interface CardProjectProps {
    pinned?: boolean;
    name: string;
    link?: string;
    members?: number;
    tags?: TagType[];
    cover?: string;
    program?: string;
    links?: LinkType[];
    actions?: ActionType[];

    children?: React.ReactNode;
    addClass?: string;
    style?: CSSProperties;
}

export const CardProject = (
    {
        pinned,
        name,
        link = "#",
        members = 0,
        tags,
        cover,
        program,
        links,
        actions,
        children, 
        addClass,
        style,
        ...props 
    }: CardProjectProps
) => {
    let classTab = [""];
    addClass && classTab.push(addClass);

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
        <CardActions title={action.title} metas={action.metas} status={action.status} buttons={action.buttons}  />
    ))
    
    return (
        <Card addClass={classTab.join(" ")} style={style} {...props}>

            <CardInfos addClass="is-linked">
                <CardBanner>
                    { cover 
                        ? <CardImage src={cover} />
                        : <div className="card-image bg-highlight"><span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle"><span>{name.charAt(0)}</span></span></div>
                    }
                    { program && <div className="card-external">
                        <Icon name="program" size="xs" addClass="ml-n6px" />
                        <div className="small font-weight-bold text-truncate mx-2">{program}</div>
                    </div> }
                </CardBanner>
                <div className="card-title d-flex align-items-center gap-2xs mb-none">
                    { pinned && <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned programs are visible on the organization Hub" data-boundary="window" /> }
                    <a href={link} className="h3 mb-none stretched-link line-clamp-1">
                        {name}
                    </a>
                </div>
                <div className="d-flex justify-content-between align-items-center flex-nowrap gap-0">
                    <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                        <div className="d-flex gap-2xs text-muted small">
                            <Icon name="members" size="xs" />
                            <span className="text-nowrap">
                                { members === 1 ? members + ' member' : members + ' members' }
                            </span>
                        </div>
                        { tags && <Badges addClass="flex-nowrap">
                            { listTags }
                            { tags.length - 2 > 0 && <span className="text-muted small text-nowrap">+{tags.length - 2}</span> }
                        </Badges> }
                    </div>
                </div>
            </CardInfos>

            { links && <div className="card-targets">
               {listLinks} 
            </div> }

            { actions && listActions }

        </Card>
    );
};
