import React, { CSSProperties } from "react";
import { Icon } from "@/app/components/Icon";
import { Tag } from "@/app/components/badges/tags/Tag";

export interface ItemObjectiveProps {
    icon?: string;
    emoji?: string;
    name: string;
    link?: string;
    tasks?: number;
    date?: string;
    dueDate?: string;
    locked?: boolean;

    children?: React.ReactNode;
    addClass?: string;
    style?: CSSProperties;
}

export const ItemObjective = ({
    icon = "objective",
    emoji,
    name,
    link = "#",
    tasks = 0,
    date,
    dueDate,
    locked = true,
    children,
    addClass,
    style,
    ...props
}: ItemObjectiveProps) => {
    let classTab = ["item is-small is-bordered gap-0px"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            <div className="item-row gap-xs pb-8px">
                <div className="d-flex p-3xs text-muted">
                    { emoji && <span className="emoji is-20px">{emoji}</span> }
                    {!emoji && <Icon name={icon} size="2sm" /> }
                </div>
                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                    <a href={link} className="item-title stretched-link line-clamp-1">
                        {name}
                    </a>
                    { (tasks > 0) && <span className="small text-muted">{ tasks === 1 ? "1 task" : tasks + " tasks"}</span> }
                </div>
                { date && !dueDate && <Tag
                    status={locked ? "draft" : "open"}
                    iconName={locked ? "status-bordered" : "status-filled"}
                    label={date}
                /> }
                 { date && dueDate && <Tag
                    status={locked ? "draft" : "progress"}
                    iconName={locked ? "status-bordered" : "status-dashed"}
                    label={date + " -> " + dueDate}
                /> }
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
                            <h6 className="dropdown-header">Actions</h6>
                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                <span className="dropdown-item--label">Edit</span>
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