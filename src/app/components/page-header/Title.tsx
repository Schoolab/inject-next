import React from "react";
import { Button } from "../Button";
import { Icon } from "../Icon";

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
}

export const Title = ({ title = "Page title", iconName, emoji, addClass }: TitleProps) => {
    let classTab = ["application-title"];
    addClass && classTab.push(addClass);
    return (
        <div className={classTab.join(" ")}>
            <div className="d-lg-none flex-grow-1">
                <div className="d-flex justify-content-between mb-3">
                    <Button type="default" iconStartName="arrow-left" size="sm" data-toggle="tooltip" data-original-title="Back" />
                    <div className="d-flex align-items-center gap-xs">
                        <small className="text-muted">1&nbsp;on&nbsp;6</small>
                        <Button type="default" iconStartName="chevron-left" disabled={true} size="sm" data-toggle="tooltip" data-original-title="Previous" />
                        <Button type="default" iconStartName="chevron-right" size="sm" data-toggle="tooltip" data-original-title="Next" />
                    </div>
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
            </div>
            <div className="d-none d-lg-block flex-grow-1">
                <div className="d-flex">
                    <div className="flex-grow-1">
                        <div className="d-flex gap-xs">
                            <Button type="default" iconStartName="arrow-left" size="sm" data-toggle="tooltip" data-original-title="Back" />
                            <div className="h3 d-flex gap-xs m-none">
                                {iconName && <Icon name={iconName} />}
                                {emoji && <span>{emoji}</span>}
                                <span>{title}</span>
                            </div>
                        </div>        
                    </div>
                    <div className="d-flex align-items-center gap-xs">
                        <small className="text-muted">1&nbsp;of&nbsp;6</small>
                        <Button type="default" iconStartName="chevron-left" disabled={true} size="sm" data-toggle="tooltip" data-original-title="Previous" />
                        <Button type="default" iconStartName="chevron-right" size="sm" data-toggle="tooltip" data-original-title="Next" />
                    </div>
                </div>
            </div>
            <Button label="Preview" type="default" iconStartName="preview" iconEndName="new-tab" size="sm" />
            <Button label="Save changes" type="primary" size="sm" />
        </div>
    );
};
