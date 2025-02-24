import React, { CSSProperties } from "react";
import { Button } from "@/app/components/buttons/Button";

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionVideoFeaturedProps {
    /**
     * Custom class
     */
    addClass?: string;

    title?: string;
    subtitle?: string;
    mediaUrl?: string;
    buttons?: ButtonType[];
    
    style?: CSSProperties;
}

export const SectionVideoFeatured = (
    
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;", 
        mediaUrl = "https://www.youtube.com/embed/6xWbJJTBxXg",
        buttons,
        addClass,
        style,
        ...props
    }: SectionVideoFeaturedProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);

        let listButtons = buttons?.map((button) => <Button type={button.type} label={button.label} link={button.link} />);

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-3xl">

                    <div className="cq-12 cq-md-10 cq-lg-8 cq-offset-md-1 cq-offset-lg-2 text-center d-flex flex-column gap-xl align-items-center">
                        <div className="d-flex flex-column gap-xs">
                            <h2 className="display-2">{title}</h2>
                            { subtitle && <p className="lead">{subtitle}</p> }
                        </div>

                        { buttons && <div className="d-flex gap-sm">
                            {listButtons}
                        </div>}
                    </div>

                    <div className="cq-12 cq-lg-10 cq-offset-lg-1 d-flex flex-column gap-2xl">
                        <div className="media embed-responsive embed-responsive-16by9 embed-item">
                            <iframe className="embed-responsive-item" src={mediaUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};