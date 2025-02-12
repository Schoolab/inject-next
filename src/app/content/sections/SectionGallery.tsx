import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/Button";

type GalleryType = {
    type?: "image" | "video";
    alt?: string;
    url?: string;
};

type ColumnType = {
    label?: string;
    caption?: string;
};

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionGalleryProps {
    mediaSide?: "left" | "right";

    title?: string;
    subtitle?: string;
    content?: string;
    gallery?: GalleryType[];
    columns?: ColumnType[];
    buttons?: ButtonType[];
    
    addClass?: string;
    style?: CSSProperties;
}

export const SectionGallery = (
    
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;",
        content = `
            <p>Write a really short description to briefly explain what are the objectives</p>
            <p>You can add multiple <code>&lt;div&gt;</code> paragraphs inside this <code>&lt;div&gt;</code> for more complexe situations. You can add <strong>bold</strong> texts, <em>italic</em> texts and more.</p>
        `,
        gallery = [
            { type: "video", url: "https://www.youtube.com/embed/6xWbJJTBxXg" },
            { type: "image", alt: "A view from above of the building's courtyard", url: "https://www.theschoolab.com/wp-content/uploads/2022/03/Page-Lieux-Bureaux-Saint-Lazare-1088x584-1.jpg" },
            { type: "image", alt: "A group of people working at the Schoolbar", url: "https://www.theschoolab.com/wp-content/uploads/2022/03/Header-Lieux-Bureaux-Saint-Lazare-1440x392-1-scaled.jpg" },
            { type: "image", alt: "A group of people playing a game of Go", url: "https://www.theschoolab.com/wp-content/uploads/2022/03/Entreprise-de%CC%81velopper-vos-talents-apprendre-par-des-projets-416X600.jpg" },
        ],
        columns,
        buttons,
        mediaSide = "left",
        addClass,
        style,
        ...props
    }: SectionGalleryProps) => {
        
        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);
    
        let classMedia = ["cq-12 cq-md-6 cq-lg-5 cq-order-xs-12"];
        mediaSide === "left" && classMedia.push("cq-offset-lg-1 cq-order-md-0");
        mediaSide === "right" && classMedia.push("cq-offset-md-1");

        let classContent = ["cq-12 cq-md-5 cq-lg-4 d-flex flex-column gap-xl justify-content-center"];
        mediaSide === "left" && classContent.push("cq-offset-md-1");
        mediaSide === "right" && classContent.push("cq-offset-lg-1");

        let sanitizedContent = DOMPurify.sanitize(content); 

        let listGallery = gallery?.map((item) => (
            <div className="cq-xs-6 cq-md-3 d-flex flex-column gap-2xs px-xs">
                {item.type === "image" && <picture className="media embed-responsive embed-responsive-1by1 gallery-item">
                    <img className="embed-responsive-item" src={item.url} alt={'Illustration of ' + item.alt} />
                </picture>}

                {item.type === "video" && <div className="media embed-responsive embed-responsive-1by1 gallery-item">
                    <iframe className="embed-responsive-item" src={item.url + '?controls=0'} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                </div>}
            </div>
        ));

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
                        <div className="cq row-gap-md">
                            {listGallery}
                        </div>
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