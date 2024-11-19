import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/Button";
import { Avatar } from "@/app/components/avatars/Avatar";

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionTestimonialProps {
    title?: string;
    subtitle?: string;
    quote?: string;
    avatar?: string;
    author?: string;
    source?: string;
    buttons?: ButtonType[];

    addClass?: string;
    style?: CSSProperties;
}

export const SectionTestimonial = (
    {
        title, 
        subtitle, 
        quote = `
            <p>“Write a sentence said by someone here...”</p>
        `,
        avatar,
        author = "Author",
        source = "Source or position",
        buttons,
        addClass,
        style,
        ...props
    }: SectionTestimonialProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);

        let sanitizedQuote = DOMPurify.sanitize(quote);

        let listButtons = buttons?.map((button) => <Button type={button.type} label={button.label} link={button.link} />);

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-3xl">

                    { (title || subtitle || listButtons) && <div className="cq-12 cq-md-10 cq-lg-8 cq-offset-md-1 cq-offset-lg-2 text-center d-flex flex-column gap-xl align-items-center">
                        <div className="d-flex flex-column gap-xs">
                            <h2 className="display-2">{title}</h2>
                            { subtitle && <p className="lead">{subtitle}</p> }
                        </div>

                        { buttons && <div className="d-flex gap-sm">
                            {listButtons}
                        </div>}
                    </div> }

                    <div className="cq-12 cq-md-10 cq-lg-8 cq-offset-md-1 cq-offset-lg-2 d-flex flex-column gap-2xl">
                        <div className="card quote-item">
                            <div className="card-body d-flex flex-column gap-xl">
                                <div className="d-flex flex-column gap-sm lead" dangerouslySetInnerHTML={{ __html: sanitizedQuote }}></div>
                                <div className="d-flex gap-sm align-items-center">
                                    {avatar && <Avatar size="lg" image={avatar} />}
                                    { (author || source) && <div className="d-flex flex-column gap-none">
                                        { author && <p className="font-weight-bold">{author}</p> }
                                        { source && <p className="small text-muted">{source}</p> }
                                    </div> }
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};