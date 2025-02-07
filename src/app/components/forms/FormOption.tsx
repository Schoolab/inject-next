import React from "react";
import { Icon } from "../Icon";

interface FormOptionProps {
    type: "checkbox" | "radio" | "switch";
    id?: string;
    name?: string;
    label: string;
    caption?: string | React.ReactNode;
    icon?: string;
    value?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    card?: boolean;

    addClass?: string;
    onChange?: (checked: boolean) => void;
}

export const FormOption = (
    {
        type,
        id,
        name = "option",
        label,
        caption,
        icon,
        value,
        checked,
        defaultChecked,
        disabled,
        card,
        addClass,
        onChange,
        ...props
    }: FormOptionProps
) => {
    let classTab = ["custom-control"];
    addClass && classTab.push(addClass);
    type === "checkbox" && classTab.push("custom-checkbox");
    type === "radio" && classTab.push("custom-radio");
    type === "switch" && classTab.push("custom-switch");
    card && classTab.push("custom-control-card");

    return (
        <div className={classTab.join(" ")} {...props}>
            <input
                type={type !== "radio" ? "checkbox" : "radio"}
                id={'option-' + id}
                name={name}
                className="custom-control-input"
                defaultValue={value}
                defaultChecked={defaultChecked}
                disabled={disabled}
                checked={checked}
                onChange={() => onChange && onChange(!checked)}
            />

            <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor={'option-' + id} aria-describedby={'caption-' + id}>
                { icon && <Icon name={icon} size="sm" /> }
                <span>{label}</span>
            </label>

            { caption && <small id={'caption-' + id} className="form-text text-muted">
                    {caption}
                </small> }

            
        </div>
    );
};