import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/buttons/Button";

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
    buttons?: ButtonType[];
    
    style?: CSSProperties;
}

export const SectionCallToAction = (
    
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;", 
        buttons,
        addClass,
        style,
        ...props
    }: SectionCallToActionProps) => {

        let classSection = ["landing-section is-lg"];
        addClass && classSection.push(addClass);

        let listButtons = buttons?.map((button) => <Button type={button.type} label={button.label} link={button.link} />);

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-3xl">

                    <div className="cq-12 cq-md-10 cq-lg-8 cq-offset-md-1 cq-offset-lg-2 text-center d-flex flex-column gap-xl align-items-center">
                        <div className="d-flex flex-column gap-md">
                            <h2 className="hero-title">{title}</h2>
                            { subtitle && <p className="lead">{subtitle}</p> }
                        </div>

                        { buttons && <div className="d-flex gap-sm">
                            {listButtons}
                        </div>}
                    </div>

                </div>
            </div>
        </section>
    );
};