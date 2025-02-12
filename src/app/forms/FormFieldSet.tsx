import { ReactNode } from "react";
import { Placeholder } from "@/app/content/Placeholder";

export interface FormFieldSetProps {
    children?: ReactNode;
    name?: string;
    legend?: string; 
    disabled?: boolean;
    grid?: boolean;
    hint?: string | ReactNode;
    id?: string;
    addClass?: string;
}

/**
 * The `fieldset` HTML element is used to group several controls as well as labels (`label`) within a web form.
 */
export const FormFieldSet = (
    { 
        name,
        legend,
        hint,
        id,
        disabled = false,
        grid,
        addClass,
        children,
        ...props
    }: FormFieldSetProps
) => {
    let classGroup = ["form-group"];
    let classLegend = ["label"];
    let classOptions = ["form-options"];
    addClass && classGroup.push(addClass);
    grid && classOptions.push("grid gap-xs");

    return(
        <fieldset name={name} className={classGroup.join(" ")} {...props}>
            <legend className={classLegend.join(" ")}>
                {legend}
            </legend>
            { hint && <small id={'hint-' + id} className="form-text text-muted">
                {hint}
            </small> }
            <div className={classOptions.join(" ")} id={id} aria-describedby={'hint-' + id}>
                {children ? children : <Placeholder />}
            </div>
        </fieldset>
    );
};