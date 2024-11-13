import { Button } from "@/app/components/Button";
import React, { CSSProperties } from "react";

interface SectionHeroProps {
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

export const SectionHero = (
    
    {
        title = "CPI Concept", 
        subtitle = "Rethink your future, reinvent your offering, change your organization", 
        content,
        imageSide = "right",
        imageUrl = "https://images.unsplash.com/photo-1621570172252-c5e8a6b08f40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1635&q=80", 
        addClass,
        style,
        ...props
    }: SectionHeroProps) => {

        let classSection = ["section"];
        addClass && classSection.push(addClass);
    
        let classImage = ["cq-12 cq-sm-5 cq-lg-4 d-none cq-d-sm-flex"];
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
                        <img src="https://inject.theschoolab.com/challenge/147/media/image/1093" alt="Logo" style={{width: "120px", height: "80px"}} />

                        <div className="d-flex flex-column gap-md">
                            <h2 className="hero-title">{title}</h2>
                            <p className="lead">{subtitle}</p>
                        </div>
                        <div className="d-flex flex-column gap-sm">
                            <p><strong>Objective:</strong> Prospective vision of a market, context, sector</p>
                            <p><strong>Deliverables:</strong> Book outlining the approach with the observation report, 3 detailed and illustrated prospective scenarios, and 1 scenario materialized by an immersive prototype</p>
                        </div>
                        <div className="cq row-gap-md">
                            <div className="cq-xs-6 d-flex flex-column gap-2xs">
                                <p className="small text-muted">Dates</p>
                                <p className="display-4">July 4 – Sept 2, 2024</p>
                            </div>
                            <div className="cq-xs-6 d-flex flex-column gap-2xs">
                                <p className="small text-muted">Locations</p>
                                <p className="display-4">Schoolab St-Lazare</p>
                            </div>
                        </div>

                        <div className="d-flex gap-sm">
                            <Button type="brand-primary" label="Join today" />
                            <Button type="default" label="Learn more" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};