import React, { CSSProperties, useState } from "react";
import { Icon } from "./Icon";

type OptionType = {
    label: string;
    active?: boolean;
    type?: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;
    size?: "default" | "sm" | "xs";
}

export interface ButtonsRadioProps {
    options: OptionType[];
    addClass?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
}

export const ButtonsRadio = ({
    options,
    addClass,
    style,
    children,
    ...props
}: ButtonsRadioProps) => {
    const [activeOption, setActiveOption] = useState<string | null>("0");

    const handleOptionClick = (label: string) => {
        setActiveOption(label);
    };

    let classTab = ["btn-group btn-group-toggle"];
    addClass && classTab.push(addClass);

    let listOptions = options?.map((option, index) => (
        <label 
            key={index} 
            className={`btn ${option.type ? "btn-" + option.type : "btn-default"} ${option.active ? "active" : ""}`}
            onClick={() => handleOptionClick(index.toString())}
        >
            <input type="radio" name="options" id={index.toString()} checked={option.active} />
            { activeOption === index.toString() && <Icon name="check" /> }
            <span>{option.label}</span>
        </label>
    ));

    return (
        
        <div className={classTab.join(" ")} data-toggle="buttons" style={{ ...style }} {...props}>
            {listOptions}
        </div>

    );
};
