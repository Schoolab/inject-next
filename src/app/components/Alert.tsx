import React from "react";
import DOMPurify from 'dompurify';

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
    type: "primary" | "secondary" | "tertiary" | "interactive" | "accent" | "assistant" | "info" | "success" | "warning" | "danger";
    icon?: string;
}

/**
 * Alert message is a contextual feedback message for typical user actions.
 */
export const Alert = ({ icon, text, title, buttonLabel, type }: AlertProps) => {
    let classTab = ["alert"];
    type && classTab.push(`alert-${type}`);

    let sanitizedText = DOMPurify.sanitize(text ?? '');

    return (
        <div className={classTab.join(" ")}>
            {icon && <Icon name={icon} size="2sm" />}
            <div className="flex-fill">
                {title && <p className="m-none font-weight-bold">{title}</p>}
                {sanitizedText && <p dangerouslySetInnerHTML={{ __html: sanitizedText }}></p>}
            </div>
            {buttonLabel && (
                <div className="flex-lg-shrink-1">
                    <Button type="default" label={buttonLabel} size="sm" extended={true} />
                </div>
            )}
        </div>
    );
};
