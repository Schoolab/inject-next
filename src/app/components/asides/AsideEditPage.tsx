import React from "react";
import { LangSwitch } from "../LangSwitch";
import { ItemsGroup } from "../items-group/ItemsGroup";
import { ItemsGroupHeader } from "../items-group/ItemsGroupHeader";
import { ItemSection } from "../items/ItemSection";
import { Button } from "../Button";

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
                            <p>Content here...</p>
                        </div>
                    </div>
                    <div id="seo" role="tabpanel" aria-labelledby="seo-tab" className="tab-pane h-100 fade">
                        <div className=" d-flex flex-column gap-md">
                            <p>Content here...</p>
                        </div>
                    </div>
                    <div id="advanced" role="tabpanel" aria-labelledby="advanced-tab" className="tab-pane h-100 fade">
                        <div className=" d-flex flex-column gap-md">
                            <p>Content here...</p>
                        </div>
                    </div>
                </div>
            </div>
        </aside>
    );
};
