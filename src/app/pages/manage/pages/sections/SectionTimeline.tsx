import { Icon } from "@/app/components/Icon";
import React from "react";

export const SectionTimeline = ({ ...props }) => {
    return (
        <section className="section" {...props}>
            <div className="container-xl">
                <div className="cq row-gap-xl">

                    <div className="cq-12 cq-lg-8 cq-offset-lg-2 mb-2xl">
                        <div className="d-flex flex-column gap-2xs text-center">
                            <h2 className="display-2">Tell a story with a timeline</h2>
                            <p className="lead">Conception and deployment of your innovation strategy</p>
                        </div>
                    </div>

                    <div className="cq-12 cq-lg-10 cq-offset-lg-1 d-flex flex-column gap-2xl">
                        <div className="cq row-gap-2xl">
                            <div className="cq-sm-4 d-flex flex-column gap-xs">
                                <div className="d-flex gap-xs align-items-center" style={{ color: "var(--bg-brand-primary)" }}>
                                    <Icon name="circle" size="2xs" />
                                    <span className="font-weight-bold">Date</span>
                                    <hr />
                                </div>
                                <p className="display-3">Step title</p>
                                <p className="small">Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.</p>
                            </div>
                            <div className="cq-sm-4 d-flex flex-column gap-xs">
                                <div className="d-flex gap-xs align-items-center" style={{ color: "var(--bg-brand-secondary)" }}>
                                    <Icon name="circle" size="2xs" />
                                    <span className="font-weight-bold">Date</span>
                                    <hr />
                                </div>
                                <p className="display-3">Step title</p>
                                <p className="small">Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.</p>
                            </div>
                            <div className="cq-sm-4 d-flex flex-column gap-xs">
                                <div className="d-flex gap-xs align-items-center" style={{ color: "var(--bg-brand-tertiary)" }}>
                                    <Icon name="circle" size="2xs" />
                                    <span className="font-weight-bold">Date</span>
                                    <hr />
                                </div>
                                <p className="display-3">Step title</p>
                                <p className="small">Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};