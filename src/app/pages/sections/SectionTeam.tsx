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

interface SectionTeamProps {
    /**
     * Custom class
     */
    addClass?: string;

    title?: string;
    subtitle?: string;
    content?: string;
    columns?: ColumnType[];
    buttons?: ButtonType[];
    
    style?: CSSProperties;
}

export const SectionTeam = (
    
    {
        title = "", 
        subtitle = "", 
        content = ``,
        addClass,
        style,
        ...props
    }: SectionTeamProps) => {

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