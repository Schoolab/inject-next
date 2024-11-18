import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { SectionHero } from "../sections/SectionHero";
import { SectionContent } from "../sections/SectionContent";
import { SectionNumber } from "../sections/SectionNumber";
import { SectionTimeline } from "../sections/SectionTimeline";
import { SectionContent2col } from "../sections/SectionContent2col";
import { SectionVideo } from "../sections/SectionVideo";

export const ProgramLanding = () => {
    return (
        <Layout shortcutBarExpanded={true} theme="Raiselab">
            <AppContent layout="full">

                <SectionHero
                    title="CPI Concept"
                    subtitle="Rethink your future, reinvent your offering, change your organization"
                    content={`
                        <p><strong>Objective:</strong> Prospective vision of a market, context, sector</p>
                        <p><strong>Deliverables:</strong> Book outlining the approach with the observation report, 3 detailed and illustrated prospective scenarios, and 1 scenario materialized by an immersive prototype</p>
                    `}
                    columns={[
                        { label: "Dates", caption: "July 4 – Sept 2, 2024"},
                        { label: "Location", caption: "Schoolab St-Lazare"},
                    ]}
                    buttons={[
                        { type: "primary", label: "Join today"},
                        { type: "default", label: "Learn more" },
                    ]}
                    addClass="is-md"
                    style={{ backgroundColor: "var(--bg-brand-hero)", color: "var(--fg-brand-hero)"}}
                />
                
                <SectionContent
                    mediaSide="left"
                    title="Our mission"
                    subtitle="SCHOOLAB is an innovation studio that educates, advises, and supports its clients in responsible innovation"
                    content={`
                        <p>To achieve this, SCHOOLAB relies on an international community of over 1000 entrepreneurs, executives, academic experts, and students who come together on our digital platforms and in our Open Innovation spaces.</p>
                        <p>For 13 years, we have been building a unique ecosystem to support the transformation of companies (from startups to large corporations) and accelerate their innovation projects.</p>
                        <div class="d-flex flex-column gap-xs bg-highlight p-xl rounded">
                            <p>By mobilizing entrepreneurial and collaborative qualities in their employees and leaders</p>
                            <p class="small text-muted">
                                <span>Author, Role @ Company</span>
                            </p>
                        </div>
                    `}
                />

                <SectionNumber style={{ backgroundColor: "#F5F5F5" }} />
                
                <SectionTimeline />
                
                <SectionContent
                    title="Our vision"
                    columns={[
                        {label: "20 years", caption: "of experience in design thinking and lean startup"},
                        {label: "700+", caption: "accelerated startups"}
                    ]}
                    mediaSide="right"
                    mediaUrl="https://cdn.prod.website-files.com/65b38407b9116a925100865b/6628f048b36b0b9ab9b95153_Se%CC%81bastien%20Bazin%20Accor_Elodie%20Arnould%20RaiseLab_Club%20Magellan%202023_compresse%CC%81e.jpg"
                />
                
                <SectionContent2col
                    title="What we do"
                    content={`
                        <p>To achieve this, SCHOOLAB relies on an international community of over 1000 entrepreneurs, executives, academic experts, and students who come together on our digital platforms and in our Open Innovation spaces.</p>
                        <p>For 13 years, we have been building a unique ecosystem to support the transformation of companies (from startups to large corporations) and accelerate their innovation projects.</p>
                        <p>These are shared challenges with clients, partners, teams, and the Schoolab community.</p>
                    `}
                    contentRight={`
                        <p>Social Innovation, embracing all talents, enriches the Schoolab ecosystem and that of its clients with new talents, diverse backgrounds, and complementary convictions. Schoolab brings together individuals around collaborative methodologies.</p>
                        <p>To achieve this, Schoolab supports numerous international, national, and local initiatives by bringing together experts, students, researchers, and committed entrepreneurs.</p>
                        <p>We are releasing our first mission report to account for our commitments in our approach.</p>
                    `}
                    mediaUrl="https://www.theschoolab.com/wp-content/uploads/2022/06/Homepage-header-diversity-scaled.jpg"
                    columns={[
                        { label: "20 years", caption: "of experience in design thinking and lean startup" },
                        { label: "700+", caption: "accelerated startups" },
                        { label: "24", caption: "countries where we operate" },
                        { label: "30,000+", caption: "people who have used our digital platform" },
                    ]}
                    style={{ backgroundColor: "var(--bg-brand-tertiary)", color: "var(--fg-brand-tertiary)" }}
                />
                
                <SectionVideo mediaSide="right" />

            </AppContent>
        </Layout>
    );
};
