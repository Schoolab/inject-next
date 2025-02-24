import React, { CSSProperties } from "react";
import { Button } from "@/app/components/buttons/Button";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInput } from "@/app/forms/FormInput";

type Option = {
    id: string;
    label: string;
    value?: string;
}

interface FormOptionsProps {
    id?: string;
    options?: Option[];
    placeholders?: string;
    autofocus?: boolean;
    addable?: boolean;
    deletable?: boolean;
    buttonLabel?: string;
    buttonIcon?: string;
    addClass?: string;
    style?: CSSProperties;
}

export const FormOptions = ({ id, options, placeholders = "Option value here...", autofocus, addable = true, deletable, buttonLabel = "Add option", buttonIcon = "plus-circle", addClass, style, ...props }: FormOptionsProps) => {
    let classTab = [];
    addClass && classTab.push(addClass);

    return (
        <ItemsGroup addClass={classTab.join(" ")} aria-describedby={'hint-' + id} style={style} {...props}>
            {options?.map((option) => (
                <div className="d-flex align-items-center gap-2xs">
                    <FormGroup id={option.id} label="Name" srOnly={true}>
                        <FormInput id={option.id} defaultValue={option.value} placeholder={placeholders} autofocus={autofocus} />
                    </FormGroup>
                    {deletable && <Button type="muted" size="sm" addClass="btn-danger-on-hover" iconStartName="delete" />}
                </div>
            ))}
            {addable && <Button label={buttonLabel} iconStartName={buttonIcon} size="sm" type="muted" addClass="align-self-start" />}
        </ItemsGroup>
    );
};
