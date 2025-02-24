import React, { CSSProperties } from "react";
import DOMPurify from 'dompurify';
import { Button } from "@/app/components/buttons/Button";
import { Avatar } from "@/app/components/avatars/Avatar";

type QuoteType = {
    quote?: string;
    avatar?: string;
    author?: string;
    source?: string;
};

type ButtonType = {
    type?: "primary" | "default";
    label?: string;
    link?: string;
}

interface SectionTestimonialsProps {
    title?: string;
    subtitle?: string;
    quotes?: QuoteType[];
    buttons?: ButtonType[];

    addClass?: string;
    style?: CSSProperties;
}

export const SectionTestimonials = (
    {
        title, 
        subtitle,
        quotes = [
            {
                quote: `
                    <p>“Write a sentence said by someone here...”</p>
                `,
            },
        ],
        buttons,
        addClass,
        style,
        ...props
    }: SectionTestimonialsProps) => {

        let classSection = ["landing-section"];
        addClass && classSection.push(addClass);

        let listQuotes = quotes?.map((quote) => (
            <div className="cq-sm-6 d-flex flex-column">
                <div className="card h-100 quote-item">
                    <div className="card-body d-flex flex-column gap-xl">
                        {quote.quote && <div className="d-flex flex-column gap-sm lead" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(quote.quote) }}></div>}
                        <div className="d-flex gap-sm align-items-center">
                            {quote.avatar && <Avatar size="lg" image={quote.avatar} />}
                            { (quote.author || quote.source) && <div className="d-flex flex-column gap-none">
                                { quote.author && <p className="font-weight-bold">{quote.author}</p> }
                                { quote.source && <p className="small text-muted">{quote.source}</p> }
                            </div> }
                        </div>
                    </div>
                </div>
            </div>
        ))

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
                        { quotes && <div className="cq-12">
                            <div className="cq row-gap-2xl justify-content-center">
                                {listQuotes}
                            </div>
                        </div> }
                    </div>

                </div>
            </div>
        </section>
    );
};