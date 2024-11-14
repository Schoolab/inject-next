import { ReactNode } from "react";

export interface FormGroupProps {
    children?: ReactNode;
    /**
     * Form Group Label
     */
    label?: string; 
    /**
     * A short text to help users to complete the input
     */
    hint?: string;
    id?: string;
    defaultValue?: string;
    placeholder?: string;
    /**
     * Is the input required?
     */
    required?: boolean;
    /**
     * Custom class
     */
    addClass?: string;
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const FormGroup = ({ label, hint, id, defaultValue, required = false, addClass, children, ...props }: FormGroupProps) => {
    let classGroup = ["form-group"];
    let classLabel = [""];
    
    required && classLabel.push("required")
    addClass && classGroup.push(addClass);

    return(
        <div className={classGroup.join(" ")} {...props}>
            <label className={classLabel.join(" ")} htmlFor={id}>
                {label}
            </label>
            <small id={'hint-' + id} className="form-text text-muted">
                {hint}
            </small>
            {children}
            <div className="invalid-feedback">Please enter a message in the textarea.</div>
        </div>
    );
};