import React, { CSSProperties } from "react";
import { Card } from "@/app/components/cards/Card";
import { CardInfos } from "@/app/components/cards/CardInfos";
import { Icon } from "@/app/components/icons/Icon";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Badges } from "@/app/components/badges/Badges";
import { Button } from "@/app/components/buttons/Button";
import { CardActions } from "@/app/components/cards/CardActions";
import { CardBanner } from "@/app/components/cards/CardBanner";
import { CardImage } from "@/app/components/cards/CardImage";

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
    cardImageAddClass?: string;
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
        cardImageAddClass,
        style,
        ...props 
    }: CardProgramProps
) => {
    let classTab = [""];
    addClass && classTab.push(addClass);
    let cardImageClass=["card-image bg-highlight"];
    cardImageAddClass && cardImageClass.push(cardImageAddClass);

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
        <Card addClass={classTab.join(" ")} style={style} {...props}>

            <CardInfos addClass="is-linked">
                <CardBanner>
                      { cover 
                            ? <CardImage src={cover} />
                            : <div className={cardImageClass.join(" ")}>
                                <span className="icon icon--program is-64px position-absolute top-50 start-50 translate-middle">
                                    <span>{name.charAt(0)}</span>
                                </span>
                            </div>
                        }



                    
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
                            { categories && listCategories}
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
