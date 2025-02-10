import React from "react";
import { Icon } from "../Icon";
import { Sdg } from "../Sdg";

interface FormOptionProps {
    type: "checkbox" | "radio" | "switch";
    id?: string;
    name?: string;
    label: string;
    caption?: string | React.ReactNode;
    icon?: string;
    sdg?: string;
    value?: string;
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    card?: boolean;

    addClass?: string;
    labelClass?: string;
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
        sdg,
        value,
        checked,
        defaultChecked,
        disabled,
        card,
        addClass,
        labelClass,
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

    let labelClassTab = ["custom-control-label text-nowrap d-flex column-gap-xs"];
    labelClass && labelClassTab.push(labelClass);

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

            <label className={labelClassTab.join(" ")} htmlFor={'option-' + id} aria-describedby={'caption-' + id}>
                { icon && <Icon name={icon} size="sm" /> }
                { sdg && <Sdg sdg={sdg} size="24" /> }
                <span>{label}</span>
            </label>

            { caption && <small id={'caption-' + id} className="form-text text-muted">
                {caption}
            </small> }
        </div>
    );
};