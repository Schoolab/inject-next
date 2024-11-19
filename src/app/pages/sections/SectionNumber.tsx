import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/Button";

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionNumbersProps {
    title?: string;
    subtitle?: string;
    content?: string;
    numberLabel?: string;
    numberCaption?: string;
    buttons?: ButtonType[];
    
    addClass?: string;
    style?: CSSProperties;
}

export const SectionNumber = (
    {
        title = "Section title", 
        subtitle,
        content = ``,
        numberLabel,
        numberCaption,
        buttons,
        ...props
    }: SectionNumbersProps
) => {
    
    let sanitizedContent = DOMPurify.sanitize(content);

    let listButtons = buttons?.map((button) => <Button type={button.type} label={button.label} link={button.link} />);

    return (
        <section className="landing-section" {...props}>
            <div className="container-xl">
                <div className="cq row-gap-3xl align-items-center">

                    <div className="cq-12 cq-md-5 cq-lg-4 cq-offset-lg-1 d-flex flex-column gap-xl py-3xl">
                        <div className="d-flex flex-column gap-xs">
                            <h2 className="display-2">{title}</h2>
                            { subtitle && <p className="lead">{subtitle}</p> }
                        </div>

                        { sanitizedContent && <div className="d-flex flex-column gap-sm" dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div> }

                        { buttons && <div className="d-flex gap-sm">
                            {listButtons}
                        </div>}
                    </div>

                    <div className="cq-12 cq-md-6 cq-lg-5 cq-offset-md-1 align-self-stretch">
                        <div className="card gap-2xs p-3xl h-100 justify-content-center">
                            <p className="display-2" style={{ fontSize: "80px", lineHeight: "80px" }}>{numberLabel}</p>
                            <p className="lead text-muted">{numberCaption}</p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};