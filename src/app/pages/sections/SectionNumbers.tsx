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

interface SectionNumbersProps {
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

export const SectionNumbers = (
    
    {
        title = "", 
        subtitle = "", 
        content = ``,
        columns,
        addClass,
        style,
        ...props
    }: SectionNumbersProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);

        let sanitizedContent = DOMPurify.sanitize(content); 

        let listColumns = columns?.map((column) => (
            <div className="cq-xs-6 cq-md-3 d-flex flex-column gap-2xs">
                <p className="display-2">{column.label}</p>
                <p className="small text-muted">{column.caption}</p>
            </div>
        ));

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-3xl">

                    <div className="cq-12 cq-md-5 cq-lg-4 cq-offset-lg-1">
                        <div className="d-flex flex-column gap-xs">
                            <h2 className="display-2">Our programs to support your transformation</h2>
                            {/* <p className="lead">SCHOOLAB is an innovation studio that educates, advises, and supports its clients in responsible innovation</p> */}
                        </div>
                    </div>

                    <div className="cq-12 cq-md-6 cq-lg-5 cq-offset-md-1 d-flex flex-column gap-2xl">
                        { columns && <div className="cq-12">
                            <div className="cq row-gap-md">
                                {listColumns}
                            </div>
                        </div> }
                    </div>

                </div>
            </div>
        </section>
    );
};