import React from "react";

interface FormInputGroupPrependProps {
    text?: string;
    addClass?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const FormInputGroupPrepend = ({ text, addClass, style, children, ...props }: FormInputGroupPrependProps) => {
    let classTab = ["input-group-prepend"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            {children && children}
            {!children && text && <span className="input-group-text">{text}</span>}
        </div>
    );
};
