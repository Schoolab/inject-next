import React from "react";
import { Icon } from "../Icon";

type ResourceType = {
    name: string;
    type: string;
    details?: string;
};
type IconTypeType = {
    name: string;
    addClass?: string;
};

export interface ItemResourceProps {
    /**
     * Does the item have an image url
     */
    img?: string;
    /**
     * Resource informations
     */
    resource: ResourceType;
    /**
     * What kind of action is possible?
     */
    action: "download" | "openLink";
    /**
     * Icon parameters
     */
    icon: IconTypeType;
    /**
     * Is small ?
     */
    isSmall: Boolean;
}

export const ItemResource = ({ img, resource, action, icon, isSmall = false }: ItemResourceProps) => {
    let classTab = ["item is-bordered"];
    isSmall && classTab.push("is-small");

    return (
        <div className={classTab.join(" ")}>
            {img && (
                <div className="item-cover is-16by9">
                    <img src={img} alt="Intro to ideation file cover" />
                </div>
            )}
            <div className="item-row">
                <div className="item-row">
                    {icon.addClass ? <Icon name={icon.name} addClass={`item-icon ${icon.addClass}`} /> : <Icon name={icon.name} addClass="item-icon" />}

                    <div className="item-content">
                        <a className="item-title stretched-link text-truncate" href="#">
                            {resource.name}
                        </a>
                        <ul className="item-caption metas small is-list">
                            <li>
                                <span>{resource.type}</span>
                            </li>
                            {resource.details && (
                                <li>
                                    <span>420 KB</span>
                                </li>
                            )}
                        </ul>
                    </div>
                </div>
                <div className="item-options">
                    {action == "download" && (
                        <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window" data-original-title="" title="">
                            <span className="icon icon-cloud-download" />
                        </a>
                    )}
                    {action == "openLink" && (
                        <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="tooltip" data-placement="top" data-title="Open in new tab" data-boundary="window" data-original-title="" title="">
                            <span className="icon icon-new-tab" />
                        </a>
                    )}

                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                        <a className="btn btn-transparent btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window">
                            <span className="icon icon-options" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item">
                                Edit file
                            </a>
                            <a href="#" className="dropdown-item is-danger">
                                Delete file
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
