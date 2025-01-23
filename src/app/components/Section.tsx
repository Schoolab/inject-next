import React, { CSSProperties } from "react";
import { ReactNode } from "react";
import { Icon } from "./Icon";
import { Placeholder } from "./Placeholder";

interface SectionProps {
    title?: string;
    subtitle?: string;
    subtitleIcon?: string;
    children?: ReactNode;
    collapsable?: boolean;
    collapsableId?: string;
    isOpen?: boolean;

    addClass?: string;
    style?: CSSProperties;
}

export const Section = (
    {
        title,
        subtitle,
        subtitleIcon,
        children,
        collapsable,
        collapsableId,
        isOpen = true,
        addClass,
        style,
        ...props
    }: SectionProps
) => {
    let classTab = ["application-section"];
    addClass && classTab.push(addClass);

    let classCollapse = ["collapse"];
    isOpen && classCollapse.push("show");

    return (
        <div className={classTab.join(" ")} style={{ ...style }} { ...props }>
            
            {title && collapsable && collapsableId ? (
                <>
                    <h3 className="application-section--title" data-toggle="collapse" data-target={`#${collapsableId}`} aria-expanded={isOpen ? "true" : "false"}>
                        <div className="d-flex flex-column gap-none w-100">
                            <div className="application-section--title-content">{title}</div>
                            { subtitle && 
                                <div className="d-flex gap-2xs align-items-center text-navigation text-muted">
                                    { subtitleIcon && <Icon name={subtitleIcon} size="xs" /> }
                                    <span>{subtitle}</span>
                                </div>
                            }
                        </div>

                        <span className="icon icon-chevron-right ml-auto" />
                    </h3>

                    <div className={classCollapse.join(" ")} id={collapsableId}>
                        {children ? children : <Placeholder />}
                    </div>
                </>
            ) : (
                <>
                    {title && <h3 className="application-section--title">
                        <div className="d-flex flex-column gap-none w-100">
                            <span className="application-section--title-content">{title}</span>
                            { subtitle && 
                                <div className="d-flex gap-2xs align-items-center text-navigation text-muted">
                                    { subtitleIcon && <Icon name={subtitleIcon} size="xs" /> }
                                    <span>{subtitle}</span>
                                </div>
                            }
                        </div>
                    </h3>}

                    {children ? children : <Placeholder />}
                </>
            )}

        </div>
    );
};