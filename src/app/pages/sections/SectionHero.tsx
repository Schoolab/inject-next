import { Button } from "@/app/components/Button";
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

interface SectionHeroProps {
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * On which side is the illustration
     */
    mediaSide?: "left" | "right";
    mediaUrl?: string;

    logo?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    columns?: ColumnType[];
    buttons?: ButtonType[];

    style?: CSSProperties;
}

export const SectionHero = (
    
    {
        logo = "https://inject.theschoolab.com/challenge/147/media/image/1093",
        title = "Your program name", 
        subtitle = "Add an impactfull sentence to hook visitors", 
        content = `
            <p>Write a really short description to briefly explain what are the objectives</p>
            <p>You can add multiple <code>&lt;div&gt;</code> paragraphs inside this <code>&lt;div&gt;</code> for more complexe situations. You can add <strong>bold</strong> texts, <em>italic</em> texts and more.</p>
        `,
        columns,
        buttons,
        mediaSide = "right",
        // mediaUrl = "https://images.unsplash.com/photo-1621570172252-c5e8a6b08f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80", 
        mediaUrl = "https://cdn.prod.website-files.com/65b38407b9116a925100865b/6628f048b36b0b9ab9b95153_Se%CC%81bastien%20Bazin%20Accor_Elodie%20Arnould%20RaiseLab_Club%20Magellan%202023_compresse%CC%81e.jpg",
        addClass,
        style,
        ...props
    }: SectionHeroProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);
    
        let classMedia = ["cq-12 cq-sm-5 cq-lg-4 d-none cq-d-sm-flex"];
        mediaSide === "left" && classMedia.push("cq-offset-lg-1 cq-order-sm-0");
        mediaSide === "right" && classMedia.push("cq-offset-sm-1 cq-order-sm-12");

        let classContent = ["cq-12 cq-sm-6 cq-lg-5 d-flex flex-column gap-2xl justify-content-center"];
        mediaSide === "left" && classContent.push("cq-offset-sm-1");
        mediaSide === "right" && classContent.push("cq-offset-lg-1");

        let sanitizedContent = DOMPurify.sanitize(content);

        let listColumns = columns?.map((column) => (
            <div className="cq-xs-6 d-flex flex-column gap-2xs">
                <p className="small text-muted">{column.label}</p>
                <p className="display-4">{column.caption}</p>
            </div>
        ));

        let listButtons = buttons?.map((button) => <Button type={button.type} label={button.label} link={button.link} />);

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-md">

                    <div className={classMedia.join(" ")}>
                        <picture className="media vertical-stretch">
                            <img src={mediaUrl} alt={'Illustration of ' + title} />
                        </picture>
                    </div>

                    <div className={classContent.join(" ")}>
                        { logo && <img src={logo} alt="Logo" style={{width: "120px", height: "80px"}} /> }

                        <div className="d-flex flex-column gap-md">
                            <h2 className="hero-title">{title}</h2>
                            <p className="lead">{subtitle}</p>
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