import React from "react";
import { Avatar } from "../avatars/Avatar";
export interface ItemSectionProps {
    /**
    * Item label
    */
    label?: string; 

     /**
    * Item caption
    */
     caption?: string; 

    /**
     * Image URL
     */
    image?: string;
}

export const ItemSection = ({ label = "{section.title}", caption = "{section.type.name}", image = "https://placehold.co/1080x720/f5f5f5/262626.svg?font=Inter&text=3%3A2", ...props }: ItemSectionProps) => {
    return (
        <div className="item is-small is-bordered gap-0px">
            <div className="item-row align-items-center gap-xs py-xs">
                <Avatar iconName="section" isOval={false} isFreeRatio={true} image={image} />

                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                    <a href="#" className="item-title stretched-link line-clamp-1">
                        {label}
                    </a>
                    <span className="small text-muted">{caption}</span>
                </div>
                <div className="d-flex align-items-center gap-xs dropdown">
                    <div className="dropdown-container">
                        <a className="btn btn-muted btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                            <span className="icon icon-options" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <h6 className="dropdown-header">Position</h6>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Send to top</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Move up</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Move down</span>
                            </a>
                            <a className="dropdown-item">
                                <span className="dropdown-item--label">Send to bottom</span>
                            </a>
                            <div className="dropdown-divider" />
                            <h6 className="dropdown-header">Section</h6>
                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                <span className="dropdown-item--label">Edit</span>
                            </a>
                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                <span className="dropdown-item--label">Duplicate</span>
                            </a>
                            <a className="dropdown-item is-danger">
                                <span className="dropdown-item--label">Delete</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
