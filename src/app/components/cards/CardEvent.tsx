import React from "react";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";
import { CardBanner } from "./CardBanner";
import { CardImage } from "./CardImage";
import { Tag } from "../badges/tags/Tag";

type StartType = {
    month: string;
    day: string;
    startTime: string;
    endTime: string;
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
    ongoing?: boolean; 
    register?: boolean;

}

export const CardEvent = ({ img, start, title, pin, location, ongoing=false, register=false }: CardEventProps) => {
    return (
        <Card>
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
                            {location === "Online" && <Tag iconName="link" label="Online" />}
                            {location === "Hybride" && <Tag iconName="location" label="Hybride" />}
                            {location === "InPerson" && <Tag iconName="location" label="In person" />}
                            {ongoing ? (
                                <Tag iconName="status-filled" status="open" label={`Ongoing until ${start.endTime}`} />
                            ) :(
                                <Tag iconName="status-bordered" status="draft" label={`Start at ${start.startTime}`} />
                            )}
                            
                        </div>
                    </div>
                </div>
            </CardInfos>
            {register && (
            <div className="card-links">
                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                    <span className="small font-weight-bold text-truncate mr-2">To access the event </span>
                    <span className="small">
                        Canditates
                        <span className="font-weight-bold">
                            <span className="icon icon-account" /> 48
                        </span>
                    </span>
                </div>
                <div className="card-actions">
                    <a className="btn btn-lg btn-primary btn-block" href="#">
                        <span>Register</span>
                    </a>
                    <a className="btn btn-lg btn-default btn-block" href="#">
                        <span>Learn more</span>
                    </a>
                </div>
            </div>
            )}
        </Card>
    );
};
