import React from "react";

interface FormInputGroupAppendProps {
    text?: string;
    addClass?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const FormInputGroupAppend = ({ text, addClass, style, children, ...props }: FormInputGroupAppendProps) => {
    let classTab = ["input-group-append"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            {children && children}
            {!children && text && <span className="input-group-text">{text}</span>}
        </div>
    );
};
