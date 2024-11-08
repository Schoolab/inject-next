import React from "react";
import { useEffect } from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideEditPage } from "@/app/components/asides/AsideEditPage";
import { aside } from "../../../../../public/utils/aside";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Icon } from "@/app/components/Icon";

export const ManagePagesEdit = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout shortcutBarExpanded={false}>
            <AppContent showSubnav={false} layout="full" sections="transparent" isAsside={true}>

            <style>
                @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
            </style>
                
                <section className="section">
                    <div className="container">
                        <div className="row d-flex align-items-stretch">

                            <div className="col-md-4 offset-md-1">
                                <picture className="vertical-stretch bleeding-top">
                                    <source srcSet="https://www.theschoolab.com/wp-content/uploads/2022/03/Offre-le-bridge-EDL-416X600.jpg 1x" />
                                    <img src="https://www.theschoolab.com/wp-content/uploads/2022/03/Offre-le-bridge-EDL-416X600.jpg" alt="" />
                                </picture>
                            </div>

                            <div className="col-md-5 offset-md-1 d-flex flex-column gap-2xl">
                                <div className="d-flex flex-column gap-sm">
                                    <h2 className="display-2">Our mission</h2>
                                    <p className="lead">SCHOOLAB is an innovation studio that educates, advises, and supports its clients in responsible innovation</p>
                                </div>
                                <div className="d-flex flex-column gap-sm">
                                    <p>To achieve this, SCHOOLAB relies on an international community of over 1000 entrepreneurs, executives, academic experts, and students who come together on our digital platforms and in our Open Innovation spaces.</p>
                                    <p>For 13 years, we have been building a unique ecosystem to support the transformation of companies (from startups to large corporations) and accelerate their innovation projects.</p>
                                </div>
                                <div className="d-flex flex-column gap-xs bg-highlight p-xl rounded-lg">
                                    <p>By mobilizing entrepreneurial and collaborative qualities in their employees and leaders</p>
                                    <p className="small text-muted">
                                        <span>Author, Role @ Company</span>
                                    </p>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 d-flex flex-column gap-2xs">
                                        <p className="display-2">20 years</p>
                                        <p className="small text-muted">of experience in design thinking and lean startup</p>
                                    </div>
                                    <div className="col-md-6 d-flex flex-column gap-2xs">
                                        <p className="display-2">700+</p>
                                        <p className="small text-muted">accelerated startups</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section" style={{ backgroundColor: "#F5F5F5" }}>
                    <div className="container">
                        <div className="row d-flex align-items-stretch">

                            <div className="col-md-4 offset-md-1">
                                <div className="d-flex flex-column gap-sm">
                                    <h2 className="display-2">Our programs to support your transformation</h2>
                                    {/* <p className="lead">SCHOOLAB is an innovation studio that educates, advises, and supports its clients in responsible innovation</p> */}
                                </div>
                            </div>

                            <div className="col-md-5 offset-md-1 d-flex flex-column gap-2xl">
                                <div className="row">
                                    <div className="col-md-12 d-flex flex-column gap-2xs">
                                        <p className="display-2" style={{ fontSize: "80px", lineHeight: "80px" }}>30,000+</p>
                                        <p className="lead text-muted">people have used our digital platform</p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container">
                        <div className="row d-flex align-items-stretch">

                            <div className="col-md-8 offset-md-2 mb-2xl">
                                <div className="d-flex flex-column gap-sm text-center">
                                    <h2 className="display-2">Tell a story with a timeline</h2>
                                    <p className="lead">Conception and deployment of your innovation strategy</p>
                                </div>
                            </div>

                            <div className="col-md-10 offset-md-1 d-flex flex-column gap-2xl">
                                <div className="row">
                                    <div className="col-md-4 d-flex flex-column gap-xs">
                                        <div className="d-flex gap-xs align-items-center" style={{ color: "var(--bg-brand-primary)" }}>
                                            <Icon name="circle" size="2xs" />
                                            <span className="font-weight-bold">Date</span>
                                            <hr />
                                        </div>
                                        <p className="display-3">Step title</p>
                                        <p className="small">Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.</p>
                                    </div>
                                    <div className="col-md-4 d-flex flex-column gap-xs">
                                        <div className="d-flex gap-xs align-items-center" style={{ color: "var(--bg-brand-secondary)" }}>
                                            <Icon name="circle" size="2xs" />
                                            <span className="font-weight-bold">Date</span>
                                            <hr />
                                        </div>
                                        <p className="display-3">Step title</p>
                                        <p className="small">Nihil aut nam. Dignissimos a pariatur et quos omnis. Aspernatur asperiores et dolorem dolorem optio voluptate repudiandae.</p>
                                    </div>
                                    <div className="col-md-4 d-flex flex-column gap-xs">
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

            </AppContent>
            <AsideEditPage />
        </Layout>
    );
};
