import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionCallToActionProps {
    /**
     * Custom class
     */
    addClass?: string;

    title?: string;
    subtitle?: string;
    content?: string;
    buttons?: ButtonType[];

    style?: CSSProperties;
}

export const SectionCallToAction = (
    
    {
        title = "", 
        subtitle = "", 
        content = ``,
        addClass,
        style,
        ...props
    }: SectionCallToActionProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);

        let sanitizedContent = DOMPurify.sanitize(content); 

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-md">

                   

                </div>
            </div>
        </section>
    );
};