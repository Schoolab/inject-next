import React from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";

type ButtonType = {
    label?: string;
    disabled?: Boolean;
    isActive?: Boolean;
    showActive?: Boolean;
    hasDropdown?: Boolean;
    iconStartName?: string;
    iconEndName?: string;
    addClass?: string;
    type?: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "brand-primary" | "brand-secondary" | "brand-tertiary";
    size?: "default" | "sm" | "xs";
    extended?: Boolean;
    outlined?: Boolean;
    link?: string;
};

export interface TitleProps {
    /**
     * Title
     */
    title?: string;

    /**
     * Icon
     */
    iconName?: string;

    /**
     * Emoji
     */
    emoji?: string;

    /**
     * Custom class
     */
    addClass?: string;

    backLink?: string;
    paginationLabel?: string;
    prevLink?: string;
    nextLink?: string;
    buttons?: ButtonType[];
}

export const Title = ({ title = "Page title", iconName, emoji, backLink, paginationLabel, prevLink, nextLink, buttons, addClass }: TitleProps) => {
    let classTab = ["application-title"];
    addClass && classTab.push(addClass);

    let listButtons = buttons?.map((button, index) => <Button key={index} label={button.label} link={button.link} disabled={button.disabled} isActive={button.isActive} showActive={button.showActive} hasDropdown={button.hasDropdown} iconStartName={button.iconStartName} iconEndName={button.iconEndName} addClass={button.addClass} type={button.type} size={button.size} extended={button.extended} outlined={button.outlined} />);

    return (
        <div className={classTab.join(" ")}>
            {/* <div className="d-lg-none flex-grow-1">
                <div className="d-flex justify-content-between mb-3">
                    { backLink && <Button link={backLink} type="default" iconStartName="arrow-left" size="default" data-toggle="tooltip" data-original-title="Back" /> }
                    { (prevLink || nextLink) && (
                        <div className="d-flex align-items-center gap-xs">
                            { paginationLabel && (<small className="text-muted">{paginationLabel}</small>) }
                            <Button type="default" iconStartName="chevron-left" disabled={!prevLink} size="default" data-toggle="tooltip" data-original-title="Previous" />
                            <Button type="default" iconStartName="chevron-right" disabled={!nextLink} size="default" data-toggle="tooltip" data-original-title="Next" />
                        </div>
                    )}
                </div>
                <div className="dropdown">
                    <div className="h2 m-none dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="titleDropdown">
                        {title}
                    </div>               
                    <div className="dropdown-menu" aria-labelledby="titleDropdown">
                        <a className="dropdown-item" href="#">
                            Engagement
                        </a>
                        <a className="dropdown-item" href="#">
                            Participants
                        </a>
                        <a className="dropdown-item" href="#">
                            Projets
                        </a>
                        <a className="dropdown-item" href="#">
                            Experts
                        </a>
                        <a className="dropdown-item" href="#">
                            Evaluations
                        </a>
                        <a className="dropdown-item" href="#">
                            Contenu
                        </a>
                        <a className="dropdown-item" href="#">
                            Paramètres
                        </a>
                    </div>
                </div>
            </div> */}
            <div className="d-lg-none flex-grow-1">
                <div className="d-flex gap-xs">
                    <div className="flex-grow-1">
                        <div className="d-flex gap-xs">
                            {backLink && <Button link={backLink} type="default" iconStartName="arrow-left" size="default" data-toggle="tooltip" data-original-title="Back" />}
                            <div className="d-flex gap-xs m-none">
                                {iconName && <Icon name={iconName} />}
                                {emoji && <span>{emoji}</span>}
                                <div className="dropdown">
                                    <div className="h3 m-none dropdown-toggle  d-flex align-items-center" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" id="titleDropdown" style={{ ["whiteSpace" as any]: "normal" }} >
                                        <span className="line-clamp-1">
                                            {title}
                                        </span>
                                     
                                    </div>
                                    <div className="dropdown-menu" aria-labelledby="titleDropdown">
                                        <a className="dropdown-item" href="#">
                                            Engagement
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Participants
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Projets
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Experts
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Evaluations
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Contenu
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            Paramètres
                                        </a>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    {(prevLink || nextLink) && (
                        <div className="d-flex align-items-center gap-xs">
                            {paginationLabel && <small className="text-muted">{paginationLabel}</small>}
                            <Button type="default" iconStartName="chevron-left" disabled={!prevLink} size="default" data-toggle="tooltip" data-original-title="Previous" />
                            <Button type="default" iconStartName="chevron-right" disabled={!nextLink} size="default" data-toggle="tooltip" data-original-title="Next" />
                        </div>
                    )}
                </div>
            </div>
            <div className="d-none d-lg-block flex-grow-1">
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <div className="d-flex gap-xs">
                            {backLink && <Button link={backLink} type="default" iconStartName="arrow-left" size="default" data-toggle="tooltip" data-original-title="Back" />}
                            <div className="h3 d-flex gap-xs m-none">
                                {iconName && <Icon name={iconName} />}
                                {emoji && <span>{emoji}</span>}
                                <span>{title}</span>
                            </div>
                        </div>
                    </div>
                    {(prevLink || nextLink) && (
                        <div className="d-flex align-items-center gap-xs">
                            {paginationLabel && <small className="text-muted">{paginationLabel}</small>}
                            <Button type="default" iconStartName="chevron-left" disabled={!prevLink} size="default" data-toggle="tooltip" data-original-title="Previous" />
                            <Button type="default" iconStartName="chevron-right" disabled={!nextLink} size="default" data-toggle="tooltip" data-original-title="Next" />
                        </div>
                    )}
                </div>
            </div>
            <div className="title-buttons">
                {buttons && listButtons}
            </div>

        </div>
    );
};
