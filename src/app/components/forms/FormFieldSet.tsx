import { ReactNode } from "react";
import { Placeholder } from "../Placeholder";

export interface FormFieldSetProps {
    children?: ReactNode;
    /**
     * Fieldset group name
     */
    name?: string;
    /**
     * Fieldset legend
     */
    legend?: string; 
    /**
     * Is the fieldset disabled?
     */
    disabled?: boolean;
    /**
     * A short text to help users to complete the input
     */
    hint?: string;
    /**
     * Custom class
     */
    addClass?: string;
}

/**
 * The `fieldset` HTML element is used to group several controls as well as labels (`label`) within a web form.
 */
export const FormFieldSet = ({ name, legend, hint, disabled = false, addClass, children, ...props }: FormFieldSetProps) => {
    let classGroup = ["form-group"];
    let classLegend = ["label"];
    addClass && classGroup.push(addClass);

    return(
        <fieldset name={name} className={classGroup.join(" ")} {...props}>
            <legend className={classLegend.join(" ")}>
                {legend}
            </legend>
            {children && children}
            {!children && <Placeholder />}
        </fieldset>
    );
};