import React, { CSSProperties } from "react";

interface AsideProps {
    size?: "default" | "small" | "large";
    addClass?: string;
    children?: React.ReactNode;
    style?: CSSProperties;
    id?: string;
}

export const Aside = ({
    size,
    addClass,
    children,
    id,
    style,
    ...props
}: AsideProps) => {
    let classTab = ["application-aside"];
    size === "small" && classTab.push("is-small");
    size === "large" && classTab.push("is-large");
    addClass && classTab.push(addClass);

    return (
        <aside id={id} className={classTab.join(" ")} style={style} {...props}>
            <div className="aside-content-container">
                {children}
            </div>
        </aside>
    );
};