import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideEditPage } from "@/app/components/asides/examples/AsideEditPage";
import { aside } from "../../../../../public/utils/aside";
import { SectionContent } from "@/app/content/sections/content/SectionContent";
import { SectionNumber } from "@/app/content/sections/number/SectionNumber";
import { SectionTimeline } from "@/app/content/sections/timeline/SectionTimeline";
import { EditableBlock } from "@/app/components/editable-blocks/EditableBlock";
import { AddableBlock } from "@/app/components/addable-blocks/AddableBlock";
import { SectionContent2col } from "@/app/content/sections/content-2col/SectionContent2col";
import { SectionHero } from "@/app/content/sections/hero/SectionHero";
import { Button } from "@/app/components/buttons/Button";
import { Add } from "@/app/components/modals/ModalPageAdd.stories";
import { SectionVideo } from "@/app/content/sections/video/SectionVideo";
import { SectionCards } from "@/app/content/sections/cards/SectionCards";
import { SectionTeam } from "@/app/content/sections/team/SectionTeam";
import { SectionGallery } from "@/app/content/sections/gallery/SectionGallery";
import { SectionTestimonial } from "@/app/content/sections/testimonial/SectionTestimonial";
import { SectionColumns } from "@/app/content/sections/columns/SectionColumns";
import { SectionCallToAction } from "@/app/content/sections/cta/SectionCallToAction";

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

                <div className="d-flex align-items-start">
                    <div className="container-fluid">
                        <AddableBlock />

                        <EditableBlock>
                            <SectionHero
                                title="Impact Innovators"
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
                                style={{ backgroundColor: "var(--bg-brand-hero)", color: "var(--fg-brand-hero)"}}
                            />
                        </EditableBlock>

                        <AddableBlock />
                        
                        <EditableBlock>
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
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionNumber
                                title="Our programs to support your transformation"
                                numberLabel="30,000+"
                                numberCaption="people have used our digital platform"
                                style={{ backgroundColor: "#F5F5F5", color: "#111" }}
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionTimeline />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionContent
                                title="Our vision"
                                columns={[
                                    {label: "20 years", caption: "of experience in design thinking and lean startup"},
                                    {label: "700+", caption: "accelerated startups"}
                                ]}
                                mediaSide="right"
                                mediaUrl="https://cdn.prod.website-files.com/65b38407b9116a925100865b/6628f048b36b0b9ab9b95153_Se%CC%81bastien%20Bazin%20Accor_Elodie%20Arnould%20RaiseLab_Club%20Magellan%202023_compresse%CC%81e.jpg"
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
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
                        </EditableBlock>

                        <AddableBlock />  

                        <EditableBlock>
                            <SectionVideo
                                title = "The Digital Team"
                                subtitle = "The Digital Team designs and develops Schoolab's websites and SaaS platforms with our clients and users."
                                mediaSide="right"
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionCards
                                columns={[
                                    {
                                        backgroundColor: "var(--bg-brand-primary)",
                                        label: "Open Innovation",
                                        content: `
                                            <p class="font-weight-bold mb-2xs">Innovating with students</p>
                                            <p class="small">from the most prestigious French and international schools and universities</p>
                                            <p class="font-weight-bold mb-2xs">Innovating with startups</p>
                                            <p class="small">from across all industries and geographical zones</p>
                                        `,
                                    },
                                    {
                                        backgroundColor: "var(--bg-brand-secondary)",
                                        label: "Project Acceleration",
                                        content: `
                                            <p class="font-weight-bold mb-2xs">Launching your innovation projects faster</p>
                                            <p class="small">with our entrepreneurs, designers, developers and analysts</p>
                                            <p class="font-weight-bold mb-2xs">Designing and running your intrapreneurship programs</p>
                                            <p class="small">with our experts and entrepreneurial coaches</p>
                                        `,
                                    },
                                    {
                                        backgroundColor: "var(--bg-brand-tertiary)",
                                        color: "#111",
                                        label: "Coaching & Training",
                                        content: `
                                            <p class="font-weight-bold mb-2xs">Leading your collective efforts</p>
                                            <p class="small">Hackathons, Seminars, Innovation Labs, Learning Expeditions</p>
                                            <p class="font-weight-bold mb-2xs">Training your leaders</p>
                                            <p class="small">on innovation, digital and impact</p>
                                        `,
                                    },
                                ]}
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionTeam
                                title="Our passionnate team"
                                subtitle="We’re a dynamic group of individuals who are passionate about what we do and dedicated to delivering the best results for our clients."
                                columns={[
                                    {
                                        image: "img/thumbnails/julien.jpg",
                                        label: "Julien Fayet",
                                        caption: "Founder, Schoolab",
                                    },
                                    {
                                        image: "img/thumbnails/sasha.jpg",
                                        label: "Sasha Lehmann",
                                        caption: "Marketing, Freelance",
                                    },
                                    {
                                        image: "img/thumbnails/marjorie.jpg",
                                        label: "Marjorie Pouzadoux Bokobza",
                                        caption: "DG, Schoolab",
                                    },
                                    {
                                        image: "img/thumbnails/guillaume.jpg",
                                        label: "Guillaume Larieu",
                                        caption: "PM CPi, Schoolab",
                                    },
                                    {
                                        image: "img/thumbnails/emma.jpg",
                                        label: "Emma Salvarelli",
                                        caption: "Customer Success, Schoolab",
                                    },
                                ]}
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionGallery
                                title="Office life"
                                subtitle="Experience the vibrant atmosphere of our office, where we prioritize a serene and harmonious environment for all our team members."
                                columns={[
                                    { label: "31 years", caption: "average age" },
                                    { label: "3%", caption: "turnover" }
                                ]}
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionTestimonial
                                quote={`
                                    <p>“L’équipe Digitale de Schoolab conçoit, design et développe les sites Web et les Plateformes SaaS Schoolab en collaboration étroite avec nos équipes, nos clients et notre écosystème. Ce positionnement unique permet à chaque membre de l’équipe de contribuer directement au succès de nos programmes pour faire bouger les lignes sur nos missions.”</p>
                                `}
                                avatar="img/thumbnails/pierre.jpg"
                                author="Pierre Lemeteil"
                                source="Head of Digital @ Schoolab"
                                style={{ backgroundColor: "var(--bg-brand-tertiary)", color: "var(--fg-brand-tertiary)"}}
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionColumns
                                title="Our programs to support your transformation"
                                subtitle="Conception and deployment of your innovation strategy"
                                columns={[
                                    {
                                        image: "img/placeholder-events-green.png",
                                        label: "Open Innovation",
                                        content: `
                                            <p>Innovating with students from the most prestigious French and international schools and universities</p>
                                        `,
                                    },
                                    {
                                        image: "img/placeholder-events-orange.png",
                                        label: "Project Acceleration",
                                        content: `
                                            <p>Launching your innovation projects faster with our entrepreneurs, designers, developers and analysts</p>
                                        `,
                                    },
                                    {
                                        image: "img/placeholder-events-pink.png",
                                        label: "Coaching & Training",
                                        content: `
                                            <p>Leading your collective efforts: Hackathons, Seminars, Innovation Labs, Learning Expeditions</p>
                                        `,
                                    },
                                ]}
                            />
                        </EditableBlock>

                        <AddableBlock />

                        <EditableBlock>
                            <SectionCallToAction
                                title="Explain the value you provide with a last call to action"
                                subtitle="Explain shortly how you will provide the value you promised to the people reading this landing page. Explain the range of tactics you have designed and implemented to help them effectively in their mission."
                                buttons={[
                                    { type: "primary", label: "Join today"},
                                    { type: "default", label: "Learn more" },
                                ]}
                                style={{ backgroundColor: "var(--bg-brand-hero)", color: "var(--fg-brand-hero)"}}
                            />
                        </EditableBlock>
                    </div>
                
                    <div className="aside-buttons no-subnav d-lg-none">
                        <Button type="default" label="Edit content" iconStartName="pencil" showActive={false} data-toggle="tooltip" data-original-title="Edit" />
                    </div>
                </div>

            </AppContent>

            <AsideEditPage />
        </Layout>
    );
};
