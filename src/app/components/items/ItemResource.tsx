import React from "react";
import { Icon } from "../Icon";
import { Button } from "../Button";

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
    cover?: boolean;
    /**
     * Resource informations
     */
    resource: ResourceType;
    /**
     * What kind of action is possible?
     */
    action?: "download" | "openLink" | "delete";
    options?: Boolean;
    /**
     * Icon parameters
     */
    icon: IconTypeType;
    /**
     * Is small ?
     */
    isSmall?: Boolean;
}

export const ItemResource = ({ img, cover, resource, action, options = true, icon, isSmall = false }: ItemResourceProps) => {
    let classTab = ["item is-bordered"];
    isSmall && classTab.push("is-small");

    return (
        <div className={classTab.join(" ")}>
            {cover && img && (
                <div className="item-cover is-16by9">
                    <img src={img} alt="Intro to ideation file cover" />
                </div>
            )}
            <div className="item-row">
                <div className="item-row">
                    { cover
                        ? <Icon name={icon.name} addClass={`item-icon ${icon.addClass}`} />
                        : img ? <div className="thumbnail is-lg"><img src={img} /></div> : <Icon name={icon.name} addClass={`item-icon ${icon.addClass}`} />
                    }

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
                        <Button type="muted" iconStartName="download" addClass="z-1" data-toggle="tooltip" data-placement="top" data-title="Download file" data-boundary="window" />
                    )}
                    {action == "openLink" && (
                        <Button type="muted" iconStartName="new-tab" addClass="z-1" data-toggle="tooltip" data-placement="top" data-title="Open in new tab" data-boundary="window" />
                    )}
                    {action == "delete" && (
                        <Button type="muted" iconStartName="delete" addClass="z-1 btn-danger-on-hover" data-toggle="tooltip" data-placement="top" data-title="Delete file" data-boundary="window" />
                    )}
                    {options && (
                        <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                            <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window">
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
                    )}
                </div>
            </div>
        </div>
    );
};
