import React, { CSSProperties } from "react";
import { ReactNode } from "react";
import { Icon } from "@/app/components/icons/Icon";
import { Placeholder } from "@/app/content/placeholders/Placeholder";
import { Button } from "@/app/components/buttons/Button";
import { FormComposer } from "@/app/forms/composer/FormComposer";

type ButtonType = {
    addClass?: string;
    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary";
    label?: string | number;
    iconStartName?: string;
    iconEndName?: string;
    link?: string;
    hasDropdown?: Boolean;
};

interface SectionProps {
    title?: string;
    subtitle?: string;
    subtitleIcon?: string;
    addClassTitleIcon?: string;
    buttons?: ButtonType[];
    children?: ReactNode;
    collapsable?: boolean;
    collapsableId?: string;
    isOpen?: boolean;
    isIAComposer?: boolean;
    titleIcon?: string;
    addClass?: string;
    style?: CSSProperties;
}

export const Section = ({ title, titleIcon, addClassTitleIcon, subtitle, subtitleIcon, buttons, children, collapsable, collapsableId, isOpen = true, isIAComposer = false, addClass, style, ...props }: SectionProps) => {
    let classTab = ["application-section"];
    addClass && classTab.push(addClass);

    let classCollapse = ["collapse"];
    isOpen && classCollapse.push("show");

    let listButtons = buttons?.map((button) => <Button label={button.label} type={button.type} link={button.link} iconStartName={button.iconStartName} iconEndName={button.iconEndName} size="sm" />);

    return (
        <div className={classTab.join(" ")} style={{ ...style }} {...props}>
            {title && collapsable && collapsableId ? (
                <>
                    <h3 className="application-section--title" data-toggle="collapse" data-target={`#${collapsableId}`} aria-expanded={isOpen ? "true" : "false"}>
                        <div className="d-flex flex-column gap-none w-100">
                            <div className="application-section--title-content">
                                <div className="t d-flex align-items-center gap-xs">
                                    {titleIcon && <Icon name={titleIcon} addClass={addClassTitleIcon} size="2sm" />} {title}
                                </div>
                            </div>
                            {subtitle && (
                                <div className="d-flex gap-2xs align-items-center text-navigation text-muted">
                                    {subtitleIcon && <Icon name={subtitleIcon} size="xs" />}
                                    <span>{subtitle}</span>
                                </div>
                            )}
                        </div>
                        {buttons && listButtons}
                        <span className="icon icon-chevron-right ml-auto" />
                    </h3>

                    <div className={classCollapse.join(" ")} id={collapsableId}>
                        {children ? children : <Placeholder />}
                    </div>
                </>
            ) : (
                <>
                    {title && (
                        <h3 className="application-section--title">
                            <div className="d-flex flex-column gap-none w-100">
                                <span className="application-section--title-content">{title}</span>
                                {subtitle && (
                                    <div className="d-flex gap-2xs align-items-center text-navigation text-muted">
                                        {subtitleIcon && <Icon name={subtitleIcon} size="xs" />}
                                        <span>{subtitle}</span>
                                    </div>
                                )}
                            </div>
                            {buttons && listButtons}
                        </h3>
                    )}

                    {children ? children : <Placeholder />}
                </>
            )}

            {isIAComposer && (
                <div className="d-flex flex-column gap-xs">
                    <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true"  data-boundary="window">
                        <div className="badge is-pill">
                            <span className="icon icon-ai text-assistant" />
                            <span>Summarize in a Briefing doc</span>
                        </div>
                        <div className="badge is-pill">
                            <span className="icon icon-faq text-assistant" />
                            <span>F.A.Q.</span>
                        </div>
                        <div className="badge is-pill">
                            <span className="icon icon-information text-assistant" />
                            <span>How did the mission evolve ?</span>
                        </div>
                    </div>
                    <div className="w-100 message-composer-row">
                        <textarea className="message-composer-input form-control" id="message_light_body" name="message_light[body]" placeholder="Write a message…"></textarea>
                        <a href="#" className="btn btn-transparent btn-icon message-composer-action" role="button">
                            <span className="icon icon-send"></span>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
};
