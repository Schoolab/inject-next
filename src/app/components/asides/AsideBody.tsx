import React, { CSSProperties } from "react";

interface AsideBodyProps {
    addClass?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
}

export const AsideBody = ({
    addClass,
    style,
    children,
    ...props
}: AsideBodyProps) => {
    let classTab = ["aside-body"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
          {children}
        </div>
    );
};