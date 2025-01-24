export interface FormTextareaProps {
    id?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    readonly?: boolean,
    required?: boolean;
    addClass?: string;
    type?: "text" | "wysiwyg" ;
    rows?: number;
    fieldSizing?: boolean;
}

export const FormTextarea = ({ type = "text", id, defaultValue, placeholder, required = false, disabled = false, readonly, rows = 8, fieldSizing, addClass, ...props }: FormTextareaProps) => {
    let classInput = ["form-control"];
    
    fieldSizing && classInput.push("field-sizing")
    addClass && classInput.push(addClass);

    return (
        <textarea
            defaultValue={defaultValue} 
            placeholder={placeholder} 
            id={id}
            disabled={disabled}
            readOnly={readonly}
            required={required}
            aria-required={required ? "true" : "false"}
            aria-describedby={'hint-' + id}
            className={classInput.join(" ")}
            rows={rows}
            {...props}
        />
    );
};
