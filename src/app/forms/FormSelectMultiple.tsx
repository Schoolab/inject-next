import React from "react";
import { useEffect } from "react";
import { select } from "../../../public/utils/select";

type OptionType = {
    label: string;
    value?: string;
    disabled?: boolean;
    selected?: boolean;
}

interface FormSelectMultipleProps {
    id?: string;
    defaultValue?: string;
    disabled?: boolean;
    required?: boolean;
    options?: OptionType[];
}

export const FormSelectMultiple = (
    {
        id,
        defaultValue,
        disabled,
        required,
        options = [
            { label: "Choose an option...", value: "", disabled: true, selected: true },
        ],
    }: FormSelectMultipleProps
) => {
    useEffect(() => {
        select();
    }, []);

    let listOptions = options?.map((option, index) => (
        <option key={index} value={option.value} disabled={option.disabled} selected={option.selected}>
            {option.label}
        </option>
    ));

    return (
        <select
            defaultValue={defaultValue} 
            id={id}
            disabled={disabled}
            required={required}
            aria-required={required ? "true" : "false"}
            aria-describedby={'hint-' + id}
            multiple
            className="form-control custom-select-tags"
        >
            {listOptions}
        </select>
    );
};
