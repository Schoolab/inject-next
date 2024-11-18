import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';

interface SectionTestimonialProps {
    /**
     * Custom class
     */
    addClass?: string;

    title?: string;
    subtitle?: string;
    content?: string;
    style?: CSSProperties;
}

export const SectionTestimonial = (
    
    {
        title = "", 
        subtitle = "", 
        content = ``,
        addClass,
        style,
        ...props
    }: SectionTestimonialProps) => {

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