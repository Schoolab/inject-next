export interface FormInputProps {
    id?: string;
    defaultValue?: string;
    placeholder?: string;
    disabled?: boolean;
    required?: boolean;
    readonly?: boolean,

    addClass?: string;
    type?: "text" | "email" | "tel" | "number" | "date" | "datetime-local" | "time" | "color" | "file" | "password" | "range" ;
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const FormInput = ({ type = "text", id, defaultValue, placeholder, required = false, disabled = false, readonly = false, addClass, ...props }: FormInputProps) => {

    return(
        <input 
            type={type} 
            defaultValue={defaultValue} 
            placeholder={placeholder} 
            id={id}
            disabled={disabled}
            required={required}
            readOnly={readonly}
            aria-required={required ? "true" : "false"}
            aria-describedby={'hint-' + id}
            className="form-control"
        />
    );
};