import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/Button";
import { Alert } from "@/app/components/Alert";
import { Icon } from "@/app/components/Icon";
import { Section } from "@/app/components/Section";
import { FormTextarea } from "@/app/components/forms/FormTextarea";
import { FormOption } from "@/app/components/forms/FormOption";


export const troubleShotCreateAccount = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent showSubnav={false} showBreadcrumb={false} showTitle={false}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 d-flex flex-column gap-md">
                        <div className="d-flex flex-column gap-sm">
                            <span className="d-flex align-items-start gap-xs">
                                <Button size="sm" type="default" iconStartName="arrow-left" data-toggle="tooltip" data-original-title="Back" />
                                <h2>Participant account creation</h2>
                            </span>
                            <Alert buttonLabel="" icon="information" text="A participant account will be created and may be reviewed by a manager." title="" type="info" />
                        </div>

                        <div className="application-section">
                            <div className="d-flex flex-column flex-md-row  align-items-center flex-wrap flex-xl-nowrap gap-md">
                                <div className="card-image-container">
                                    <div className="card-image" style={{ backgroundImage: 'url("img/program-innovators.png")', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                </div>
                                <div className="d-flex flex-column align-items-center  align-items-md-start gap-xs flex-fill">
                                    <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-0">
                                        <div className="d-flex align-items-center gap-2xs">
                                            <div className="h2  text-center text-xl-left d-flex align-items-center gap-2xs">
                                                <span>Impact Innovators</span>
                                            </div>
                                        </div>

                                        <ul className="text-muted small metas is-list mb-none">
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg'></div><span>Terence Irving</span></li><li><span>+ 4 more</span></li></ul>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
                                                <a href="/program/71/project/2903/users">
                                                    <small className="text-muted">8 members</small>
                                                </a>
                                            </li>
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li></ul>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
                                                <a href="/program/71/project/2903/mentors">
                                                    <small className="text-muted">3 managers</small>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="d-block bg-highlight rounded">
                                <div className="d-flex align-items-center flex-fill text-muted p-md" data-toggle="collapse" data-target="#Aboutprogram" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-xs flex-grow-1">
                                        <Icon name="information" size="sm" />
                                        <span className="font-weight-bold">About the program</span>
                                    </div>
                                    <Icon name="chevron-right" size="sm" />
                                </div>
                                <div className="collapse px-md pb-md" id="Aboutprogram">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                    <p>Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est.</p>
                                </div>
                            </div>
                        </div>

                        <Section title="Program rules" >
                            <FormTextarea
                                defaultValue="Text about the rules of the program"
                                fieldSizing
                                id="rules"
                                placeholder="Write your text here..."
                                readonly
                              
                            />
                            <FormOption
                                label="Accept rules"
                                type="checkbox"
                            />
                        </Section>
                        <div className="d-flex justify-content-end">
                                                        <Button
                                iconStartImage=""
                                iconStartName=""
                                label="Create my account"
                                size="default"
                                type="primary"
                                />
                       
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
