export interface FormTextareaProps {
    id?: string;
    defaultValue?: string;
    placeholder?: string;
    /**
     * Is the input disabled?
     */
    disabled?: boolean;
    /**
     * Is the input required?
     */
    required?: boolean;
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * Choose the type of input
     */
    type?: "text" | "wysiwyg" ;
    rows?: number;
    /**
     * Allows form controls to adjust in size to fit their contents.
     */
    fieldSizing?: boolean;
}

export const FormTextarea = ({ type = "text", id, defaultValue, placeholder, required = false, disabled = false, rows = 8, fieldSizing, addClass, ...props }: FormTextareaProps) => {
    let classInput = ["form-control"];
    
    fieldSizing && classInput.push("field-sizing")
    addClass && classInput.push(addClass);

    return (
        <textarea
            defaultValue={defaultValue} 
            placeholder={placeholder} 
            id={id}
            disabled={disabled}
            required={required}
            aria-required={required ? "true" : "false"}
            aria-describedby={'hint-' + id}
            className={classInput.join(" ")}
            rows={rows}
            {...props}
        />
    );
};
