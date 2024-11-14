import React from "react";
import { Button } from "./Button";
import { Icon } from "./Icon";

export interface AlertProps {
    /**
     * Text content
     */
    text?: string;
    /**
     * Title content
     */
    title?: string;
    /**
     * Button label content
     */
    buttonLabel?: string;
    /**
     * Contextual type 
     */
    type: "primary" | "success" | "danger" | "warning" | "info";
    icon?: string;
}

/**
 * Alert message is a contextual feedback message for typical user actions.
 */
export const Alert = ({ icon, text, title, buttonLabel, type }: AlertProps) => {
    let classTab = ["alert d-flex align-items-left align-items-lg-center flex-column flex-lg-row gap-xs"];
    type && classTab.push(`alert-${type}`);

    return (
        <div className={classTab.join(" ")}>
            {icon && (
                <div className="flex-lg-shrink-1 d-flex align-items-start align-self-stretch">
                    <Icon name={icon} size="2sm" />
                </div>
            )}
            <div className="flex-fill mb-5 mb-lg-0 mr-0 mr-lg-5">
                {title && <p className="m-none font-weight-bold">{title}</p>}
                {text && <p>{text}</p>}
            </div>
            {buttonLabel && (
                <div className="flex-lg-shrink-1">
                    <Button label={buttonLabel} type="default" extended={true} />
                </div>
            )}
        </div>
    );
};
