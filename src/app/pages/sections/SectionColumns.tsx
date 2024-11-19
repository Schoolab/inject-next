import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/Button";

type ColumnType = {
    image?: string;
    label?: string;
    content?: string;
};

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionColumnsProps {
    /**
     * Custom class
     */
    addClass?: string;

    title?: string;
    subtitle?: string;
    columns?: ColumnType[];
    buttons?: ButtonType[];
    
    style?: CSSProperties;
}

export const SectionColumns = (
    
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;", 
        columns,
        buttons,
        addClass,
        style,
        ...props
    }: SectionColumnsProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);

        let listColumns = columns?.map((column) => (
            <div className="cq-sm-6 cq-md-4 d-flex flex-column gap-sm">
                { column.image && <picture className="media">
                    <img src={column.image} alt={'Illustration of ' + column.label} />
                </picture> }
                <div className="d-flex flex-column gap-2xs">
                    <h3>{column.label}</h3>
                    {column.content && (<div className="gap-sm" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(column.content) }} />)}
                </div>
            </div>
        ));

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
                        { columns && <div className="cq-12">
                            <div className="cq row-gap-2xl justify-content-center">
                                {listColumns}
                            </div>
                        </div> }
                    </div>

                </div>
            </div>
        </section>
    );
};