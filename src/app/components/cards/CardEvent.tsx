import React, { CSSProperties } from "react";
import { Card } from "@/app/components/cards/Card";
import { CardInfos } from "@/app/components/cards/CardInfos";
import { CardBanner } from "@/app/components/cards/CardBanner";
import { CardImage } from "@/app/components/cards/CardImage";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Icon } from "@/app/components/icons/Icon";
import { CardActions } from "./CardActions";
import { Badges } from "../badges/Badges";

type StartType = {
    month: string;
    day: string;
    startTime: string;
    endTime: string;
};

type MetaType = {
    label: string;
    iconName?: string;
    addClass?: string;
};

type ButtonType = {
    addClass?: string;
    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary";
    label?: string | number;
    iconStartName?: string;
    iconEndName?: string;
    link?: string;
    hasDropdown?: Boolean;
};

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
};

interface CardEventProps {
    /**
     * Does the event have an image url
     */
    img?: string;
    /**
     * When the event begin
     */
    start: StartType;
    /**
     * Event Name
     */
    title: string;
    /**
     * Pin
     */
    pin?: boolean;
    /**
     * Where is the event
     */
    location?: "Online" | "Hybride" | "InPerson";
    /**
     * is this event still ongoing
     */
    isPrivate?: boolean;
    ongoing?: boolean;
    links?: LinkType[];
    actions?: ActionType[];

    addClass?: string;
    style?: CSSProperties;
}

export const CardEvent = ({ img, start, title, pin, location, isPrivate = false, ongoing = false, links, actions, addClass, style, ...props }: CardEventProps) => {
    let classTab = [""];
    addClass && classTab.push(addClass);

    let listLinks = links?.map((link) => (
        <div className="card-target">
            <a href={link.link} className="stretched-link d-flex align-items-center">
                {link.iconLetter && (
                    <span className="icon icon--letter is-sm">
                        <span>{link.iconLetter}</span>
                    </span>
                )}
                {link.iconName && <Icon name={link.iconName} size="sm" />}
                <span>{link.label}</span>
            </a>
            <Icon name="chevron-right" size="sm" />
        </div>
    ));
    let listActions = actions?.map((action) => <CardActions title={action.title} metas={action.metas} buttons={action.buttons} />);

    return (
        <Card addClass={classTab.join(" ")} style={style} {...props}>
            <CardInfos addClass="is-linked">
                {img && (
                    <CardBanner>
                        <CardImage is3by1={true} src={img} />
                    </CardBanner>
                )}
                <div className="d-flex gap-sm">
                    <div className="thumbnail is-date is-lg">
                        <span className="month">{start.month}</span> <span className="day">{start.day}</span>
                    </div>
                    <div className="d-flex flex-column flex-fill gap-0">
                        <div className="card-title d-flex align-items-center gap-2xs mb-none p-2xs">
                            {pin && <span className="icon icon-pin is-24px z-2" data-toggle="tooltip" data-placement="top" data-original-title="Pinned events are visible on the organization Hub" data-boundary="window" />}

                            <a href="#" className="h4 mb-none stretched-link line-clamp-1">
                                {title}
                            </a>
                        </div>
                        <div className="d-flex justify-content-between align-items-end flex-wrap gap-xs">
                            <Badges addClass="flex-nowrap">
                                {location === "Online" && <Tag iconName="link" label="Online" />}
                                {location === "Hybride" && <Tag iconName="location" label="Hybride" />}
                                {location === "InPerson" && <Tag iconName="location" label="In person" />}
                                {isPrivate && <Tag iconName="eye-off" isPill label="Private" status="default" />}
                            </Badges>

                            {ongoing ? <Tag iconName="status-filled" status="open" label={`Ongoing until ${start.endTime}`} /> : <Tag iconName="status-bordered" status="draft" label={`Starts at ${start.startTime}`} />}
                        </div>
                    </div>
                </div>
            </CardInfos>

            {links && <div className="card-targets">{listLinks}</div>}

            {actions && listActions}
        </Card>
    );
};
