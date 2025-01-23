import React from "react";
import { Button } from "../Button";
import { ItemsGroup } from "../items-group/ItemsGroup";
import { FormGroup } from "./FormGroup";
import { FormInput } from "./FormInput";

interface FormAddOptionsProps {}

export const FormAddOptions = ({}: FormAddOptionsProps) => {
    return (
        <ItemsGroup>
            <div className="d-flex align-items-center gap-2xs">
                <FormGroup id="option1" label="Name" srOnly={true}>
                    <FormInput id="option1" defaultValue="Option #1" placeholder="Option value here..." />
                </FormGroup>
                <Button type="muted" size="sm" addClass="btn-danger-on-hover" iconStartName="delete" />
            </div>
            <div className="d-flex align-items-center gap-2xs">
                <FormGroup id="option2" label="Name" srOnly={true}>
                    <FormInput id="option2" placeholder="Option value here..." />
                </FormGroup>
                <Button type="muted" size="sm" addClass="btn-danger-on-hover" iconStartName="delete" />
            </div>
            <Button label="Add option" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
        </ItemsGroup>
    );
};
