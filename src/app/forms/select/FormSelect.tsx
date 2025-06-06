import React from "react";
import { useEffect } from "react";
import { select } from "../../../../public/utils/select";

type OptionType = {
    label: string;
    value?: string;
    disabled?: boolean;
    selected?: boolean;
    options?: OptionType[];
}

interface FormSelectProps {
    id?: string;
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    options?: OptionType[];
}

export const FormSelect = (
    {
        id,
        defaultValue,
        disabled,
        required,
        options = [
            { label: "Choose an option...", value: "", disabled: true, selected: true },
        ],
    }: FormSelectProps
) => {
    useEffect(() => {
        select();
    }, []);

    let listOptions = options?.map((option, index) => 
        option.options ? (
            <optgroup label={option.label} key={index}>
                {option.options.map((subOption, subIndex) => (
                    <option 
                        key={subIndex} 
                        value={subOption.value} 
                        disabled={subOption.disabled} 
                        selected={subOption.selected}
                    >
                        {subOption.label}
                    </option>
                ))}
            </optgroup>
        ) : (
            <option 
                key={index} 
                value={option.value} 
                disabled={option.disabled} 
                selected={option.selected}
            >
                {option.label}
            </option>
        )
    );

    return (
        <select
            defaultValue={defaultValue} 
            id={id}
            disabled={disabled}
            required={required}
            aria-required={required ? "true" : "false"}
            aria-describedby={'hint-' + id}
            className="form-control custom-select"
        >
            {listOptions}
        </select>
    );
};
