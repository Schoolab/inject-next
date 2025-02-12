import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/Button";
import { CardCollapse } from "@/app/components/cards/CardCollapse";

type AccordionType = {
    title: string;
    content: string;
};

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionAccordionProps {
    title?: string;
    subtitle?: string;
    content?: string;
    buttons?: ButtonType[];
    accordions?: AccordionType[];

    addClass?: string;
    style?: CSSProperties;
}

export const SectionAccordion = (
    
    {
        title = "Section title", 
        subtitle = "",
        content = ``,
        buttons,
        accordions,
        addClass,
        style,
        ...props
    }: SectionAccordionProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);

        let sanitizedContent = DOMPurify.sanitize(content); 
        let listButtons = buttons?.map((button) => <Button type={button.type} label={button.label} link={button.link} />);
        let listAccordions = accordions?.map((accordion, index) => (
            <CardCollapse title={accordion.title} parentId="accordion" id={index.toString()} addClass="" bodyClass="pt-sm pb-md">
                { accordion.content && <div dangerouslySetInnerHTML={{ __html: accordion.content }}></div> }
            </CardCollapse>
        ));

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-3xl">

                    <div className="cq-12 cq-md-10 cq-lg-8 cq-offset-md-1 cq-offset-lg-2 text-center d-flex flex-column gap-xl align-items-center">
                        <div className="d-flex flex-column gap-xs">
                            <h2 className="display-2">{title}</h2>
                            { subtitle && <p className="lead">{subtitle}</p> }
                        </div>

                        { sanitizedContent && <div className="d-flex flex-column gap-sm" dangerouslySetInnerHTML={{ __html: sanitizedContent }}></div> }

                        { buttons && <div className="d-flex gap-sm">
                            {listButtons}
                        </div> }
                    </div>

                    <div className="cq-12 cq-lg-10 cq-offset-lg-1">
                        <div className=" d-flex flex-column gap-sm" id="accordion">
                            {listAccordions}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};