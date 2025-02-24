import React, { CSSProperties, useState } from "react";
import { Notif } from "@/app/components/badges/notifs/Notif";
import { Icon } from "@/app/components/icons/Icon";
import { Button, ButtonProps } from "@/app/components/buttons/Button";

export type OptionType = {
    value: string;
    label: string;
    icon?: string;
    badge?: string;
    active?: boolean;
    disabled?: boolean;
}

export interface ViewsProps {
    id?: string;
    addClass?: string;
    style?: CSSProperties;
    options?: OptionType[];
    addView?: boolean;
    buttons?: ButtonProps[];
}

export const Views = ({
    id = "tables-views",
    addClass,
    style,
    options = [
        {
            value: "_default",
            label: "All {{items}}",
            active: true,
        },
        {
            value: "draft",
            label: "Draft",
        },
        {
            value: "pending",
            label: "Pending review",
        },  
        {
            value: "rejected",
            label: "Rejected",
        },
        {
            value: "accepted",  
            label: "Accepted",
        },
    ],
    addView = false,
    buttons = [],
    ...props
}: ViewsProps) => {
    const [viewOptions, setViewOptions] = useState(options);

    const handleOptionClick = (value: string) => {
        setViewOptions(prevOptions =>
            prevOptions.map(option => ({
                ...option,
                active: option.value === value
            }))
        );
    };

    let classTab = ["d-flex align-items-lg-start justify-content-between gap-xs"];
    addClass && classTab.push(addClass);

    return (
        <div id={id} className={classTab.join(" ")} style={style} {...props}>
            <form name="views" className="dataTableFilter">
                <select name="filters" id="filter-select" className="custom-select field-sizing d-md-none">
                    {viewOptions.map((option) => (
                        <option key={option.value} value={option.value} onClick={() => handleOptionClick(option.value)}>
                            {option.label}
                        </option>
                    ))}
                </select>
                <div className="d-none d-md-flex btn-group btn-group-lg btn-group-toggle btn-filter-radios" data-toggle="buttons" data-col={0}>
                    {viewOptions.map((option) => (
                        <label key={option.value} className={`btn btn-default btn-lg ${option.active ? "active" : ""}`} onClick={() => handleOptionClick(option.value)}>
                            <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id={`resourcesMainFilters_related_${option.value}`} defaultValue={option.value} autoComplete="off" required defaultChecked={option.active} />
                            {option.active && <Icon name="check" size="xs" />}
                            {option.icon && <Icon size="2sm" name={option.icon} />}
                            <span>{option.label}</span>
                            {option.badge && <Notif label={option.badge} status="highlight" />}
                        </label>
                    ))}
                </div>
            </form>
            {buttons.map((button) => (
                <Button {...button} />
            ))}
            {addView && (
                <Button
                    label="Add view"
                    iconStartName="plus-circle"
                    type="muted"
                />
            )}
        </div>
    );
};
