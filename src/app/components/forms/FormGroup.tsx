import { ReactNode } from "react";
import { Placeholder } from "../Placeholder";

export interface FormGroupProps {
    children?: ReactNode;
    label?: string; 
    srOnly?: boolean;
    required?: boolean;
    hint?: ReactNode;
    id?: string;
    addClass?: string;
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const FormGroup = ({ label, srOnly, hint, id, required = false, addClass, children, ...props }: FormGroupProps) => {
    let classGroup = ["form-group"];
    let classLabel = ["label"];

    required && classLabel.push("required")
    srOnly && classLabel.push("sr-only")
    addClass && classGroup.push(addClass);

    return(
        <div className={classGroup.join(" ")} {...props}>
            <label className={classLabel.join(" ")} htmlFor={id}>
                {label}
            </label>
            { hint && <small id={'hint-' + id} className="form-text text-muted">
                {hint}
            </small> }
            {children ? children : <Placeholder />}
            <div className="invalid-feedback">Please enter a message in the textarea.</div>
        </div>
    );
};