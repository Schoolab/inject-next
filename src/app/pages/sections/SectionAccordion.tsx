import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';

type ColumnType = {
    label?: string;
    caption?: string;
};

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionAccordionProps {
    title?: string;
    subtitle?: string;
    content?: string;
    columns?: ColumnType[];
    buttons?: ButtonType[];

    addClass?: string;
    style?: CSSProperties;
}

export const SectionAccordion = (
    
    {
        title = "", 
        subtitle = "", 
        content = ``,
        addClass,
        style,
        ...props
    }: SectionAccordionProps) => {

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