import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/Button";
import { Avatar } from "@/app/components/avatars/Avatar";

type ColumnType = {
    image?: string;
    label?: string;
    caption?: string;
};

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionTeamProps {
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

export const SectionTeam = (
    
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;", 
        columns,
        buttons,
        addClass,
        style,
        ...props
    }: SectionTeamProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);

        let listColumns = columns?.map((column) => (
            <div className="cq-12 d-flex flex-column gap-sm" style={{minWidth: "8rem", maxWidth: "20cqw"}}>
                <Avatar size="2xl" image={column.image} addClass="w-100" />
                <div className="d-flex flex-column gap-2xs text-center">
                    <h3 className="display-4">{column.label}</h3>
                    { column.caption && <p className="small text-muted">{column.caption}</p> }
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
                        { columns && <div className="cq row-gap-md justify-content-center">
                            {listColumns}
                        </div> }
                    </div>

                </div>
            </div>
        </section>
    );
};