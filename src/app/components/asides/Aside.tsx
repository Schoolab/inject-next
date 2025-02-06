import React, { CSSProperties } from "react";

interface AsideProps {
    size?: "default" | "small" | "large";
    addClass?: string;
    children?: React.ReactNode;
    style?: CSSProperties;
}

export const Aside = ({
    size,
    addClass,
    children,
    style,
    ...props
}: AsideProps) => {
    let classTab = ["application-aside"];
    size === "small" && classTab.push("is-small");
    size === "large" && classTab.push("is-large");
    addClass && classTab.push(addClass);

    return (
        <aside className={classTab.join(" ")} style={style} {...props}>
            <div className="aside-content-container">
                {children}
            </div>
        </aside>
    );
};