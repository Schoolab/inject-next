import React, { CSSProperties } from "react";

interface SectionTwoColContentProps {
    imageSide?: "top" | "bottom";
    imageUrl?: string;
    title?: string;
    subtitle?: string;
    content?: string;
    content2?: string;
    style?: CSSProperties;
}

export const SectionTwoColContent = (
    
    {
        title = "Our mission", 
        subtitle = "SCHOOLAB is an innovation studio that educates, advises, and supports its clients in responsible innovation", 
        content,
        content2,
        imageSide = "bottom",
        imageUrl = "https://www.theschoolab.com/wp-content/uploads/2022/06/Homepage-header-diversity-scaled.jpg", 
        style,
        ...props
    }: SectionTwoColContentProps) => {
    
        let classImage = ["cq-12 cq-md-10 cq-offset-md-1"];
        imageSide === "top" && classImage.push("cq-order-start");
        imageSide === "bottom" && classImage.push("cq-order-sm-end");

    return (
        <section className="section" style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-2xl">

                    <div className="cq-12 cq-md-10 cq-offset-md-1">

                        <div className="cq row-gap-2xl">

                            <div className="cq-12 cq-md-8">
                                <div className="d-flex flex-column gap-2xs">
                                    <h2 className="display-2">{title}</h2>
                                    <p className="lead">{subtitle}</p>
                                </div>
                            </div>
                            <div className="cq-12 cq-md-6">
                                <div className="d-flex flex-column gap-sm">
                                    <p>To achieve this, SCHOOLAB relies on an international community of over 1000 entrepreneurs, executives, academic experts, and students who come together on our digital platforms and in our Open Innovation spaces.</p>
                                    <p>For 13 years, we have been building a unique ecosystem to support the transformation of companies (from startups to large corporations) and accelerate their innovation projects.</p>
                                    <p>These are shared challenges with clients, partners, teams, and the Schoolab community.</p>
                                </div>
                            </div>
                            <div className="cq-12 cq-md-6">
                                <div className="d-flex flex-column gap-sm">
                                    <p>Social Innovation, embracing all talents, enriches the Schoolab ecosystem and that of its clients with new talents, diverse backgrounds, and complementary convictions. Schoolab brings together individuals around collaborative methodologies.</p>
                                    <p>To achieve this, Schoolab supports numerous international, national, and local initiatives by bringing together experts, students, researchers, and committed entrepreneurs.</p>
                                    <p>We are releasing our first mission report to account for our commitments in our approach.</p>
                                </div>
                            </div>
                            <div className="cq-12">
                                <div className="cq row-gap-md">
                                    <div className="cq-xs-6 cq-md-3 d-flex flex-column gap-2xs">
                                        <p className="display-2">20 years</p>
                                        <p className="small text-muted">of experience in design thinking and lean startup</p>
                                    </div>
                                    <div className="cq-xs-6 cq-md-3 d-flex flex-column gap-2xs">
                                        <p className="display-2">700+</p>
                                        <p className="small text-muted">accelerated startups</p>
                                    </div>
                                    <div className="cq-xs-6 cq-md-3 d-flex flex-column gap-2xs">
                                        <p className="display-2">24</p>
                                        <p className="small text-muted">countries where we operate</p>
                                    </div>
                                    <div className="cq-xs-6 cq-md-3 d-flex flex-column gap-2xs">
                                        <p className="display-2">250+</p>
                                        <p className="small text-muted">corporate innovation projects initiated and accelerated</p>
                                    </div>
                                </div>
                            </div>
                    
                        </div>

                    </div>

                    <div className={classImage.join(" ")}>
                        <picture className="horizontal-stretch">
                            <img src={imageUrl} alt={'Illustration of ' + title} />
                        </picture>
                    </div>

                </div>
            </div>
        </section>
    );
};