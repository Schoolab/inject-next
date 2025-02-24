import React from "react";
import { Icon } from "@/app/components/icons/Icon";
import { Sdg } from "@/app/components/avatars/Sdg";

interface FormOptionProps {
    type: "checkbox" | "radio" | "switch";
    hideControl?: boolean;
    id?: string;
    name?: string;
    label: string;
    caption?: string | React.ReactNode;
    image?: string;
    icon?: string;
    sdg?: number;
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
        hideControl,
        id,
        name = "option",
        label,
        caption,
        image,
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
    type === "checkbox" && classTab.push("custom-checkbox");
    type === "radio" && classTab.push("custom-radio");
    type === "switch" && classTab.push("custom-switch");
    card && classTab.push("custom-control-card");
    hideControl && classTab.push("custom-control-hidden");
    addClass && classTab.push(addClass);

    let labelClassTab = ["custom-control-label text-nowrap d-flex column-gap-xs"];
    labelClass && labelClassTab.push(labelClass);
    image && labelClassTab.push("flex-column gap-xs");

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
                { image && <picture className="border rounded-sm">
                    <img role="presentation" src={image} alt={label} />
                </picture> }
                { icon && <Icon name={icon} size="sm" /> }
                { sdg && <Sdg number={sdg} size="24px" /> }
                <span>{label}</span>
            </label>

            { caption && <small id={'caption-' + id} className="form-text text-muted">
                {caption}
            </small> }
        </div>
    );
};