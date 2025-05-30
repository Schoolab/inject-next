import { Notif } from "@/app/components/badges/notifs/Notif";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Button } from "@/app/components/buttons/Button";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { DropdownHeader } from "@/app/components/dropdowns/DropdownHeader";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";

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

            <Dropdown addClass="dropdown-container">
                <Button type="muted" addClass="btn-icon" iconStartName="options" dataToggle="dropdown" aria-expanded="false" data-boundary="window" />
                <DropdownMenu direction="right">
                    <DropdownHeader label="Position" />
                    <DropdownItem label="Send to top" iconName="arrow-top" />
                    <DropdownItem label="Move up" iconName="arrow-up" />
                    <DropdownItem label="Move down" iconName="arrow-down" />
                    <DropdownItem label="Send to bottom" iconName="arrow-bottom" />
                    <DropdownDivider />
                    <DropdownItem label="Edit" iconName="pencil" />
                    <DropdownItem label="Delete" type="danger" iconName="delete" />
                </DropdownMenu>
            </Dropdown>

        </div>
    );
};
