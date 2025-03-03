import React from "react";
import { FormInputGroupAppend } from "@/app/forms/input-group/FormInputGroupAppend";
import { FormInputGroupPrepend } from "@/app/forms/input-group/FormInputGroupPrepend";
import { Placeholder } from "@/app/content/placeholders/Placeholder";
import { FormInput } from "@/app/forms/input/FormInput";

interface FormInputGroupProps {
    appendText?: string;
    append?: React.ReactNode;
    prependText?: string;
    prepend?: React.ReactNode;
    addClass?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const FormInputGroup = ({ appendText, append, prependText, prepend, addClass, style, children, ...props }: FormInputGroupProps) => {
    let classTab = ["input-group"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            {(prepend || prependText) && <FormInputGroupPrepend text={prependText} children={prepend} />}
            {children ? children : <FormInput placeholder="Placeholder" />}
            {(append || appendText) && <FormInputGroupAppend text={appendText} children={append} />}
        </div>
    );
};
