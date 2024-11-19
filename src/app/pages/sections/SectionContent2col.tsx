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

interface SectionContent2colProps {
    mediaSide?: "top" | "bottom";
    mediaUrl?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    contentRight?: string;
    columns?: ColumnType[];
    buttons?: ButtonType[];

    style?: CSSProperties;
}

export const SectionContent2col = (
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;", 
        content = `
            <p>Write a really short description to briefly explain what are the objectives</p>
            <p>You can add multiple <code>&lt;div&gt;</code> paragraphs inside this <code>&lt;div&gt;</code> for more complexe situations. You can add <strong>bold</strong> texts, <em>italic</em> texts and more.</p>
        `,
        contentRight = `
            <p>Here is another content for when you need to describe something a bit longer, it is added to the second column.</p>
            <p>You can also add multiple <code>&lt;div&gt;</code> paragraphs inside this second column's <code>&lt;div&gt;</code> for more complexe situations. You can add <strong>bold</strong> texts, <em>italic</em> texts and more.</p>
        `,
        columns,
        buttons,
        mediaSide = "bottom",
        mediaUrl, 
        style,
        ...props
    }: SectionContent2colProps) => {
    
        let classMedia = ["cq-12 cq-lg-10 cq-offset-lg-1"];
        mediaSide === "top" && classMedia.push("cq-order-start");
        mediaSide === "bottom" && classMedia.push("cq-order-sm-end");

        let classContent = ["cq-12 cq-lg-10 cq-offset-lg-1"];

        let sanitizedContent = DOMPurify.sanitize(content); 
        let sanitizedContent2 = DOMPurify.sanitize(contentRight); 

        let listColumns = columns?.map((column) => (
            <div className="cq-2sm-6 cq-md-3 d-flex flex-column gap-2xs">
                <p className="display-2">{column.label}</p>
                <p className="small text-muted">{column.caption}</p>
            </div>
        ));

        let listButtons = buttons?.map((button) => <Button type={button.type} label={button.label} link={button.link} />);

    return (
        <section className="landing-section" style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-3xl">

                    <div className={classContent.join(" ")}>

                        <div className="cq row-gap-xl">

                            <div className="cq-12 cq-md-8">
                                <div className="d-flex flex-column gap-xs">
                                    <h2 className="display-2">{title}</h2>
                                    { subtitle && <p className="lead">{subtitle}</p> }
                                </div>
                            </div>
                            
                            { sanitizedContent && <div className="cq-12 cq-sm-6">
                                <div className="d-flex flex-column gap-sm" dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div>
                            </div> }

                            { sanitizedContent2 && <div className="cq-12 cq-sm-6">
                                <div className="d-flex flex-column gap-sm" dangerouslySetInnerHTML={{ __html: sanitizedContent2 }}></div>
                            </div> }

                            { columns && <div className="cq-12">
                                <div className="cq row-gap-md">
                                    {listColumns}
                                </div>
                            </div> }

                            { buttons && <div className="cq-12">
                                <div className="d-flex gap-sm">
                                    {listButtons}
                                </div>
                            </div>}
                    
                        </div>

                    </div>

                    { mediaUrl && <div className={classMedia.join(" ")}>
                        <picture className="media horizontal-stretch illustration-item">
                            <img src={mediaUrl} alt={'Illustration of ' + title} />
                        </picture>
                    </div> }

                </div>
            </div>
        </section>
    );
};