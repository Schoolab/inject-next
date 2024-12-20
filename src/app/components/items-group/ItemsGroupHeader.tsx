import { Notif } from "../badges/notifs/Notif";
import { Tag } from "../badges/tags/Tag";

export interface ItemsGroupHeaderProps {
    label?: string; 
    number?: number; 
    date?: string;
    dueDate?: string;
    locked?: boolean;
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const ItemsGroupHeader = ({
    label,
    number,
    date,
    dueDate,
    locked,
    ...props
}: ItemsGroupHeaderProps) => {
    let classTab = ["item-group-header"];

    return (
        <div className={classTab.join(" ")} {...props}>

            <h4 className="nav-title flex-fill mb-none">
                {label}
            </h4>

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
            
            <Notif label={number} status="highlight" />

            <div className="dropdown-container">
                <a className="btn btn-xs btn-transparent btn-icon text-muted" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                    <span className="icon icon-options" />
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
    );
};
