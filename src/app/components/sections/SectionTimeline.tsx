import { Icon } from "@/app/components/Icon";
import React, { CSSProperties } from "react";

type ColumnType = {
    color?: string;
    date?: string;
    label?: string;
    caption?: string;
};

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionTimelineProps {
    title?: string;
    subtitle?: string;
    columns?: ColumnType[];
    buttons?: ButtonType[];

    addClass?: string;
    style?: CSSProperties;
}

export const SectionTimeline = (
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;", 
        columns = [
            { color: "var(--bg-brand-primary)", date: "Date", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
            { color: "var(--bg-brand-secondary)", date: "Date", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
            { color: "var(--bg-brand-tertiary)", date: "Date", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
        ],
        buttons,
        addClass,
        style,
        ...props 
    }: SectionTimelineProps
) => {
    let classSection = ["landing-section"];
    addClass && classSection.push(addClass);

    let listColumns = columns?.map((column) => (
        <div className="cq-sm-4 d-flex flex-column gap-xs">
            <div className="d-flex gap-xs align-items-center" style={{ color: column.color }}>
                <Icon name="circle" size="2xs" />
                <span className="font-weight-bold">{column.date}</span>
                <hr />
            </div>
            <p className="display-3">{column.label}</p>
            <p className="small">{column.caption}</p>
        </div>
    ));

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-xl">

                    <div className="cq-12 cq-lg-8 cq-offset-lg-2 mb-2xl">
                        <div className="d-flex flex-column gap-xs text-center">
                            <h2 className="display-2">{title}</h2>
                            { subtitle && <p className="lead">{subtitle}</p> }
                        </div>
                    </div>

                    <div className="cq-12 cq-lg-10 cq-offset-lg-1 d-flex flex-column gap-2xl">
                        { columns && <div className="cq row-gap-2xl">
                            {listColumns}
                        </div> }
                    </div>

                </div>
            </div>
        </section>
    );
};