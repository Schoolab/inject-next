import React, { CSSProperties } from "react";

interface SectionContentProps {
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * On which side is the illustration
     */
    imageSide?: "left" | "right";

    imageUrl?: string;

    title?: string;
    subtitle?: string;
    content?: string;
    style?: CSSProperties;
}

export const SectionContent = (
    
    {
        title = "Our mission", 
        subtitle = "SCHOOLAB is an innovation studio that educates, advises, and supports its clients in responsible innovation", 
        content,
        imageSide = "left",
        imageUrl = "https://www.theschoolab.com/wp-content/uploads/2022/03/Entreprise-de%CC%81velopper-vos-talents-apprendre-par-des-projets-416X600.jpg", 
        addClass,
        style,
        ...props
    }: SectionContentProps) => {

        let classSection = ["section"];
        addClass && classSection.push(addClass);
    
        let classImage = ["cq-12 cq-sm-5 cq-lg-4"];
        imageSide === "left" && classImage.push("cq-offset-lg-1 cq-order-sm-0");
        imageSide === "right" && classImage.push("cq-offset-sm-1 cq-order-sm-12");

        let classContent = ["cq-12 cq-sm-6 cq-lg-5 d-flex flex-column gap-2xl"];
        imageSide === "left" && classContent.push("cq-offset-sm-1");
        imageSide === "right" && classContent.push("cq-offset-lg-1");

    return (
        <section className={classSection.join(" ")} style={style} {...props}>
            <div className="container-xl">
                <div className="cq row-gap-md">

                    <div className={classImage.join(" ")}>
                        <picture className="vertical-stretch">
                            <img src={imageUrl} alt={'Illustration of ' + title} />
                        </picture>
                    </div>

                    <div className={classContent.join(" ")}>
                        <div className="d-flex flex-column gap-2xs">
                            <h2 className="display-2">{title}</h2>
                            <p className="lead">{subtitle}</p>
                        </div>
                        <div className="d-flex flex-column gap-sm">
                            <p>To achieve this, SCHOOLAB relies on an international community of over 1000 entrepreneurs, executives, academic experts, and students who come together on our digital platforms and in our Open Innovation spaces.</p>
                            <p>For 13 years, we have been building a unique ecosystem to support the transformation of companies (from startups to large corporations) and accelerate their innovation projects.</p>
                            <div className="d-flex flex-column gap-xs bg-highlight p-xl rounded-lg">
                                <p>By mobilizing entrepreneurial and collaborative qualities in their employees and leaders</p>
                                <p className="small text-muted">
                                    <span>Author, Role @ Company</span>
                                </p>
                            </div>
                        </div>
                        <div className="cq row-gap-md">
                            <div className="cq-sm-6 d-flex flex-column gap-2xs">
                                <p className="display-2">20 years</p>
                                <p className="small text-muted">of experience in design thinking and lean startup</p>
                            </div>
                            <div className="cq-sm-6 d-flex flex-column gap-2xs">
                                <p className="display-2">700+</p>
                                <p className="small text-muted">accelerated startups</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};