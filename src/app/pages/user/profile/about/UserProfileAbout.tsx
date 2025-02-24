import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Section } from "@/app/components/sections/Section";
import { Button } from "@/app/components/buttons/Button";
import { CardParticipant } from "@/app/components/cards/CardParticipant";
import { Badges } from "@/app/components/badges/Badges";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Icon } from "@/app/components/icons/Icon";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { CardCollapse } from "@/app/components/cards/CardCollapse";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { ItemResource } from "@/app/components/items/ItemResource";

export const UserProfileAbout = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent
                sections="transparent"
                breadcrumb = {[
                    {
                        label: "John Doe",
                        href: "#"
                    },
                    {
                        label: "About",
                    },
                ]}
                title="John Doe"
                buttons = {[
                    {
                        type: "default",
                        label: "Edit profile",
                        iconStartName: "pencil",
                        size: "sm",
                        link: "./?path=/story/pages-user-settings--profile",
                    },
                ]}
                subnav={[
                    {
                        label: "About",
                        href: "./?path=/story/pages-user-profile--about",
                        isActive: true,
                    },
                    {
                        label: "Participations",
                        href: "./?path=/story/pages-user-profile--participations",
                    },
                ]}
            >
                <div className="row">
                    <div className="col-12 col-lg-6 col-xl-8 ">
                        
                        <Section addClass="gap-md">

                            <div className="d-flex flex-column flex-md-row align-items-center flex-wrap flex-md-nowrap gap-md">
                                <Avatar size="2xl" image="img/avatar-john.jpeg" />

                                <div className="d-flex flex-column align-items-center align-items-md-start gap-xs flex-fill">
                                    <div className="d-flex flex-column align-items-center align-items-md-start gap-0">
                                        <div className="d-flex align-items-center gap-2xs">
                                            <a href="#" className="h3 d-flex align-items-center gap-2xs">
                                                <span>John Doe</span>
                                            </a>
                                        </div>
                                        <ul className="d-flex flex-column flex-sm-row align-items-center align-items-sm-start text-muted small metas is-list mb-none">
                                            <li>
                                                <div className="d-flex gap-2xs">
                                                    <span className="text-nowrap">Paris, FR</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex gap-2xs">
                                                    <span>200 followers</span>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="d-flex gap-2xs">
                                                    <span>Joined Oct 10, 2018</span>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="d-flex align-items-center align-items-md-start badges small">
                                        <div className="badge is-pill">
                                            <span>Product designer</span>
                                        </div>
                                        <a href="#" className="badge is-pill">
                                            <span className="icon icon-work" />
                                            <span>Schoolab</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="d-flex gap-xs align-items-center">
                                    {/* <Button type="primary" iconStartName="bookmark-outline" label="Follow" /> */}
                                    <Dropdown>
                                        <Button type="default" iconStartName="email" label="Contact" hasDropdown={true} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <DropdownMenu direction="right">
                                            <DropdownItem label="Open chat" iconName="comment" />
                                            <DropdownItem label="Open video" iconName="video" />
                                            <DropdownItem label="Send an email" iconName="email" />
                                            <DropdownItem label="Book a meeting" iconName="calendar-empty" />
                                        </DropdownMenu>
                                    </Dropdown>
                                    <Dropdown>
                                        <Button type="transparent" iconStartName="options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <DropdownMenu direction="right">
                                            <DropdownItem label="Login as John" iconName="key" type="interactive" />
                                            <DropdownItem label="Manage roles" iconName="settings" href="./?path=/story/pages-user-settings--data"/>
                                            <DropdownItem label="Disable this user" iconName="cancel" type="danger" href="./?path=/story/pages-user-settings--data" />
                                            <DropdownDivider />
                                            <DropdownItem label="Edit profile" iconName="pencil" href="./?path=/story/pages-user-settings--profile" />
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-md">
                                <div className="d-flex flex-column">
                                    <h4>Learn more</h4>
                                    <p>Seasoned professional currently serving as the Chief Digital Officer at SL Group, encompassing Schoolab, RaiseLab, and MoHo. His career spans roles that include Digital Director at Schoolab for nearly 5 years and positions focused on digital innovation and product development at other companies.</p>
                                    <p>He has a robust educational background with a certification from Stanford University's Graduate School of Business in Innovation and Entrepreneurship, has a degree in engineering, master of science and computer engineering from SUPINFO.</p>
                                    <p>
                                        John also has deep expertise in e-commerce and optimizing mobile purchasing funnels. He has proven his ability to develop innovative strategies to enhance the online shopping experience, focusing on leveraging mobile technologies to ease consumer access to products and services. This skill enables him to tailor shopping journeys to the specific needs of mobile users, optimizing interfaces for touchscreen displays and simplifying payment processes to maximize
                                        conversions.
                                    </p>
                                    <p>John is skilled in areas such as iPhone development and has a strong track record in leading digital transformation and innovation projects.</p>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4>Expertises</h4>
                                    <Badges>
                                        <Tag label="Design" />
                                        <Tag label="Figma" />
                                        <Tag label="Product" />
                                    </Badges>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4>Interests</h4>
                                    <Badges>
                                        <Tag label="Cosplay" />
                                        <Tag label="Cycling" />
                                        <Tag label="Wind surf" />
                                    </Badges>
                                </div>
                                <div className="d-flex flex-column">
                                    <h4>Links</h4>
                                    <ul className="list-unstyled mb-none">
                                        <li>
                                            <a href="#">
                                                <Icon name="linkedin" addClass="text-muted" />
                                                <span>Linkedin</span>
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="d-flex flex-column gap-2xs">
                                <h4>Responses</h4>
                                <CardCollapse progress={100} title="{registration.questionnaire.name}" metas={[{label: "3 fields evaluated"}, {label: "3 fields completed by the participant"}]}>
                                    <p>(ici il y aura un rappel des consignes données aux participant·e·s)</p>

                                    <FormGroup id="problem" label="À quel problème répondez-vous ?">
                                        <FormTextarea id="problem" readonly={true} fieldSizing={true} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa."} />
                                    </FormGroup>

                                    <FormGroup id="value" label="Quelle est votre proposition de valeur / solution ?">
                                        <FormTextarea id="value" readonly={true} fieldSizing={true} defaultValue={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa."} />
                                    </FormGroup>

                                    <FormFieldSet id="pitchdeck" legend="Un pitch deck a nous partager ?">
                                        <ItemResource
                                            icon={{name: "file-pdf-box", addClass: "text-danger"}}
                                            resource={{name: "pitch-deck-healthify.pdf", type: "PDF File", details: "120 KB"}}
                                            cover={true}
                                            img="img/pitch-deck-tidycards.png"
                                            action="download"
                                            options={false}
                                        />
                                    </FormFieldSet>

                                    <FormFieldSet id="categories" legend="Un pitch deck a nous partager ?">
                                        <Badges>
                                            <Tag label="tag" />
                                            <Tag label="tag" />
                                            <Tag label="tag" />
                                        </Badges>
                                    </FormFieldSet>
                                </CardCollapse>
                            </div>
   
                        </Section>

                    </div>
                    <div className="col-12 col-lg-6 col-xl-4 ">

                        <Section title="Users with same skills">
                            <div className="d-flex flex-column gap-xs">
                                <CardParticipant name="Marine Martinez" metas={[{ label: "Program Manager, Schoolab" }]} avatar="img/avatar-marine.jpeg" tags={[{label: "Product"}]} />
                                <CardParticipant name="Alexandra Jolly" metas={[{ label: "Product designer, Schoolab" }]} avatar="img/avatar-alexandra.jpeg" tags={[{label: "Figma"}, {label: "Product"}]} />
                                <CardParticipant name="Terence Irving" metas={[{ label: "Lead designer, Schoolab" }]} avatar="img/avatar-terence.jpeg" tags={[{label: "Figma"}, {label: "Product"}]} />
                            </div>
                            <Button type="default" extended={true} label="Show more" />
                        </Section>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
