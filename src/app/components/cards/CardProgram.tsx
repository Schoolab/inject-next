import React, { CSSProperties } from "react";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";
import { Icon } from "../Icon";
import { Tag } from "../badges/tags/Tag";
import { Badges } from "../badges/Badges";
import { Button } from "../Button";
import { CardActions } from "./CardActions";
import { CardBanner } from "./CardBanner";
import { CardImage } from "./CardImage";

type CategoryType = {
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
    buttons?: ButtonType[];
}

interface CardProgramProps {
    pinned?: boolean;
    name: string;
    link?: string;
    members?: number;
    categories?: CategoryType[];
    status?: "draft" | "open" | "progress" | "done";
    cover?: string;
    externalProgram?: string;
    links?: LinkType[];
    actions?: ActionType[];

    children?: React.ReactNode;
    addClass?: string;
    style?: CSSProperties;
} 

export const CardProgram = (
    {
        pinned,
        name,
        link = "#",
        members = 0,
        categories,
        status,
        cover,
        externalProgram,
        links,
        actions,
        children, 
        addClass,
        style,
        ...props 
    }: CardProgramProps
) => {
    let listCategories = categories?.map((category) => <Tag label={category.label} link={link} />);
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
        <CardActions title={action.title} metas={action.metas} buttons={action.buttons} />
    ))
    
    return (
        <Card addClass={addClass} style={style} {...props}>

            <CardInfos addClass="is-linked">
                <CardBanner>
                    <CardImage src={cover ? cover : "img/placeholder-programs-pink.png"} />
                    { externalProgram && <div className="card-external">
                        <div className="small">External: </div>
                        <div className="small font-weight-bold text-truncate mx-2">{externalProgram}</div>
                        <span className="small icon icon-new-tab text-muted" />
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
                        { members > 0 && (<div className="d-flex gap-2xs text-muted small">
                            <Icon name="community" size="xs" />
                            <span className="text-nowrap">
                                { members === 1 ? members + ' participant' : members + ' participants' }
                            </span>
                        </div>) }
                        { (categories || members < 1) && <Badges addClass="flex-nowrap">
                            { categories ? listCategories : <span className="text-muted small text-nowrap">No category…</span> }
                        </Badges> }
                    </div>
                    { status === "draft" && <Tag label="Draft" iconName="status-bordered" status="draft" /> }
                    { status === "open" && <Tag label="Open" iconName="status-filled" status="open" /> }
                    { status === "progress" && <Tag label="In progress" iconName="status-dashed" status="progress" /> }
                    { status === "done" && <Tag label="Done" iconName="status-filled" status="done" /> }
                </div>
            </CardInfos>

            { links && <div className="card-targets">
               {listLinks} 
            </div> }

            { actions && listActions }

        </Card>
    );
};
