import React from "react";
import { LangSwitch } from "../LangSwitch";
import { ItemsGroup } from "../items-group/ItemsGroup";
import { ItemsGroupHeader } from "../items-group/ItemsGroupHeader";
import { ItemSection } from "../items/ItemSection";
import { Button } from "../Button";
import { FormGroup } from "../forms/FormGroup";
import { FormInput } from "../forms/FormInput";
import { FormTextarea } from "../forms/FormTextarea";
import { ItemResource } from "../items/ItemResource";
import { Alert } from "../Alert";

interface AsideEditPageProps {}

export const AsideEditPage = ({}: AsideEditPageProps) => {
    return (
        <aside className="application-aside">
            <div className="aside-content-container">
                <div className="aside-header">
                    <nav className="aside-nav nav nav-tabs">
                        <a href="#" className=" nav-link nav-item active" id="content-tab" data-toggle="tab" data-target="#content" type="button" role="tab" aria-controls="content" aria-selected="true">
                            <span>Content</span>
                        </a>
                        <a href="#" className=" nav-link nav-item" id="info-tab" data-toggle="tab" data-target="#info" type="button" role="tab" aria-controls="info" aria-selected="false">
                            <span>Basic info</span>
                        </a>
                        <a href="#" className=" nav-link nav-item" id="seo-tab" data-toggle="tab" data-target="#seo" type="button" role="tab" aria-controls="data" aria-selected="false">
                            <span>SEO</span>
                        </a>
                        <a href="#" className=" nav-link nav-item" id="advanced-tab" data-toggle="tab" data-target="#advanced" type="button" role="tab" aria-controls="data" aria-selected="false">
                            <span>Advanced</span>
                        </a>
                    </nav>
                </div>
                <div className="tab-content aside-body" id="projectTabsContent">
                    <div id="content" role="tabpanel" aria-labelledby="content-tab" className="tab-pane h-100 fade active show">
                        <div className=" d-flex flex-column gap-md">
                            <LangSwitch />
                            <ItemsGroup>
                                <ItemsGroupHeader label="Sections" number="15" />
                                <div className="d-flex flex-column gap-2xs">
                                    <ItemSection label="CPI Concept" caption="Hero (image right)"/>
                                    <ItemSection label="Our mission" caption="Content (2 columns, image left)" />
                                    <ItemSection label="Our programs to support your transformation" caption="Numbers (2 columns)" />
                                    <ItemSection label="Tell a story with a timeline" caption="Timeline (3 columns)" />
                                    <ItemSection label="Our vision" caption="Content (2 columns, image bleeding right)" />
                                    <ItemSection label="Aligning action with values" caption="Content (2 columns, image bottom)" />
                                    <ItemSection label="The digital team" caption="Content (2 columns, image right)" />
                                    <ItemSection label="Our programs to support your transformation" caption="Cards (3 columns)" />
                                    <ItemSection label="Our passionate team" caption="Team (5 columns)" />
                                    <ItemSection label="Office life" caption="Gallery" />
                                    <ItemSection label="Pierre Lemeteil" caption="Testimonial" />
                                    <ItemSection label="How to apply?" caption="Featured video" />
                                    <ItemSection label="Last season photos" caption="Gallery with lightbox" />
                                    <ItemSection label="Learnings from the program" caption="Columns (3 columns)" />
                                    <ItemSection label="Explain the value you provide with a last call to action" caption="Call to action (1 column)" />
                                </div>
                                <Button label="Add section" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
                            </ItemsGroup>
                        </div>
                    </div>
                    <div id="info" role="tabpanel" aria-labelledby="info-tab" className="tab-pane h-100 fade">
                        <div className=" d-flex flex-column gap-md">
                            <LangSwitch />
                            <div className="form-row">
                                <FormGroup id="name" label="Name" required={true} addClass="col-10 m-none">
                                    <FormInput id="name" placeholder="A short name" defaultValue="About" required={true} />
                                </FormGroup>
                                <FormGroup id="icon" label="Icon" required={false} addClass="col-2 m-none">
                                    <FormInput id="icon" placeholder="" defaultValue="👋" required={false} />
                                </FormGroup>
                            </div>
                            <div className="d-flex flex-column gap-md p-md bg-highlight rounded-lg">
                                <FormGroup id="type" label="Page type">
                                <div className="btn-group btn-group-toggle btn-filter-radios">
                                    <Button label="Custom" type="default" isActive={true}></Button>
                                    <Button label="Events" type="default"></Button>
                                    <Button label="Participants" type="default"></Button>
                                    <Button label="Experts" type="default"></Button>
                                    <Button label="Jury" type="default"></Button>
                                </div>
                                </FormGroup>
                            </div>
                        </div>
                    </div>
                    <div id="seo" role="tabpanel" aria-labelledby="seo-tab" className="tab-pane h-100 fade">
                        <div className=" d-flex flex-column gap-md">
                            <LangSwitch />
                            <p>This information will only be used in your landing page metadata and won't appear in your management interface.</p>
                            <FormGroup id="title" label="Title tag" hint="Optimal title length is approximatively 55 characters.">
                                <FormInput id="title" placeholder="A short name" defaultValue="CPI Concept" />
                            </FormGroup>
                            <FormGroup id="description" label="Meta description" hint="Optimal description length is 155 to 300 characters. ">
                                <FormTextarea id="description" placeholder="Write page description here..." defaultValue="Rethink your future, reinvent your offering, change your organization" />
                            </FormGroup>
                            <FormGroup id="cover" label="Open Graph image" hint="Make sure your images are at least 1200px by 630px and have a 1.91:1 aspect ratio.">
                                <ItemResource
                                    isSmall={false}
                                    action="delete"
                                    icon={{
                                        name: "image",
                                    }}
                                    resource={{
                                        details: "1.2 MB",
                                        name: "cpi-concept-cover.png",
                                        type: "PNG Image",
                                    }}
                                    options={false}
                                />
                                <div className="dropdown">
                                    <Button type="default" label="Replace image" iconStartName="plus-circle" extended={true} addClass="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" />
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Upload from computer</a>
                                        <a className="dropdown-item" href="#">Choose from gallery</a>
                                        <a className="dropdown-item is-danger" href="#">Remove</a>
                                    </div>
                                </div>
                            </FormGroup>
                            <Alert type="info" icon="information" text="Open Graph are the info that shows up when sharing content on Facebook, X (Twitter), LinkedIn, and Pinterest." />
                        </div>
                    </div>
                    <div id="advanced" role="tabpanel" aria-labelledby="advanced-tab" className="tab-pane h-100 fade">
                        <div className=" d-flex flex-column gap-md">
                            <p>The code included here will only apply to this page, and will appear after any landing-wide custom code.</p>
                            <FormGroup label="Inside <head> tag">
                                <FormTextarea placeholder="Your code here..." />
                            </FormGroup>
                            <FormGroup label="Before </body> tag">
                                <FormTextarea placeholder="Your code here..." />
                            </FormGroup>
                            <Alert type="warning" icon="alert" text="Custom code is not validated. Incorrect code may cause issues with the published page." />
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
