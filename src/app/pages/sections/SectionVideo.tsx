import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/Button";

type ColumnType = {
    label?: string;
    caption?: string;
};

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionVideoProps {
    mediaSide?: "left" | "right";
    mediaUrl?: string;
    mediaType?: "video" | "image";

    title?: string;
    subtitle?: string;
    content?: string;
    columns?: ColumnType[];
    buttons?: ButtonType[];

    addClass?: string;
    style?: CSSProperties;
}

export const SectionVideo = (
    
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;",  
        content = ``,
        columns,
        buttons,
        mediaSide = "right",
        mediaUrl = "https://www.youtube.com/embed/8xlxu6wP2Ls?si=4Y6gvAYm9v2DUeBO",
        mediaType = "video",
        addClass,
        style,
        ...props
    }: SectionVideoProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);
    
        let classMedia = ["cq-12 cq-md-6 cq-lg-5 cq-order-xs-12"];
        mediaSide === "left" && classMedia.push("cq-offset-lg-1 cq-order-md-0");
        mediaSide === "right" && classMedia.push("cq-offset-md-1");

        let classContent = ["cq-12 cq-md-5 cq-lg-4 d-flex flex-column gap-xl justify-content-center"];
        mediaSide === "left" && classContent.push("cq-offset-md-1");
        mediaSide === "right" && classContent.push("cq-offset-lg-1");

        let sanitizedContent = DOMPurify.sanitize(content); 

        let listColumns = columns?.map((column) => (
            <div className="cq-2sm-6 cq-md-3 d-flex flex-column gap-2xs">
                <p className="display-2">{column.label}</p>
                <p className="small text-muted">{column.caption}</p>
            </div>
        ));

        let listButtons = buttons?.map((button) => <Button type={button.type} label={button.label} link={button.link} />);

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-3xl">

                    <div className={classMedia.join(" ")}>
                        {mediaType === "image" && <picture className="media vertical-stretch">
                            <img src={mediaUrl} alt={'Illustration of ' + title} />
                        </picture>}

                        {mediaType === "video" && <div className="media embed-responsive embed-responsive-16by9 embed-item">
                            <iframe className="embed-responsive-item" src={mediaUrl} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                        </div>}
                    </div>

                    <div className={classContent.join(" ")}>
                        <div className="d-flex flex-column gap-xs">
                            <h2 className="display-2">{title}</h2>
                            { subtitle && <p className="lead">{subtitle}</p> }
                        </div>
                        
                        { sanitizedContent && <div className="d-flex flex-column gap-sm" dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div> }

                        { columns && <div className="cq row-gap-md">
                            {listColumns}
                        </div> }

                        { buttons && <div className="d-flex gap-sm">
                            {listButtons}
                        </div>}
                    </div>

                </div>
            </div>
        </section>
    );
};