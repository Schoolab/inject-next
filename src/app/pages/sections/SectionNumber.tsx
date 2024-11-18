import React from "react";

export const SectionNumber = ({ ...props }) => {
    return (
        <section className="landing-section" {...props}>
            <div className="container-xl">
                <div className="cq row-gap-md">

                    <div className="cq-12 cq-sm-6 cq-lg-4 cq-offset-lg-1">
                        <div className="d-flex flex-column gap-2xs">
                            <h2 className="display-2">Our programs to support your transformation</h2>
                            {/* <p className="lead">SCHOOLAB is an innovation studio that educates, advises, and supports its clients in responsible innovation</p> */}
                        </div>
                    </div>

                    <div className="cq-12 cq-sm-6 cq-lg-5 cq-offset-lg-1 d-flex flex-column gap-2xl">
                        <div className="cq">
                            <div className="cq-md-12 d-flex flex-column gap-2xs">
                                <p className="display-2" style={{ fontSize: "80px", lineHeight: "80px" }}>30,000+</p>
                                <p className="lead text-muted">people have used our digital platform</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};