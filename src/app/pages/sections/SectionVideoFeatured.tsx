import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionVideoFeaturedProps {
    title?: string;
    subtitle?: string;
    content?: string;
    buttons?: ButtonType[];

    addClass?: string;
    style?: CSSProperties;
}

export const SectionVideoFeatured = (
    
    {
        title = "", 
        subtitle = "", 
        content = ``,
        addClass,
        style,
        ...props
    }: SectionVideoFeaturedProps) => {

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