import { Icon } from "@/app/components/Icon";
import React, { CSSProperties } from "react";

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

interface SectionTimelineImageProps {
    title?: string;
    subtitle?: string;
    columns?: ColumnType[];
    buttons?: ButtonType[];

    addClass?: string;
    style?: CSSProperties;
}

export const SectionTimelineImage = (
    {
        title = "Section title", 
        subtitle = "Use this line to summarize this section. View it as a TL:DR;", 
        columns = [
            { image: "", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
            { image: "", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
            { image: "", label: "Step title", caption: "Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae." },
        ],
        buttons,
        addClass,
        style,
        ...props 
    }: SectionTimelineImageProps
) => {
    let classSection = ["landing-section"];
    addClass && classSection.push(addClass);

    let listColumns = columns?.map((column) => (
        <div className="cq-sm-4 d-flex flex-column gap-xs text-center">
            <div className="d-flex gap-xs align-items-center">
                <hr />
                { column.image 
                    ? <picture className="bg-transparent">
                        <img src={column.image} alt={column.label} style={{ height: "3rem" }} />
                    </picture>
                    : <Icon name="circle" size="sm" addClass="text-muted" />
                }
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