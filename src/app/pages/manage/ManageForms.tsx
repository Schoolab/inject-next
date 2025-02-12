import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Alert } from "@/app/components/Alert";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInput } from "@/app/forms/FormInput";
import { FormInputWrapper } from "@/app/forms/FormInputWrapper";
import { Button } from "@/app/components/Button";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdown/DropdownDivider";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { FormTextarea } from "@/app/forms/FormTextarea";
import { ItemResource } from "@/app/components/items/ItemResource";
import { DropdownNested } from "@/app/components/dropdown/DropdownNested";
import { Section } from "@/app/components/Section";
import { FormFieldSet } from "@/app/forms/FormFieldSet";
import { FormOption } from "@/app/forms/FormOption";
import { LangSwitch } from "@/app/components/LangSwitch";
import ConditionalFormGroup from "@/app/forms/ConditionalFormGroup";

export const ManageForms = () => {
    return (
        <Layout sideBar="Manage">
            <AppContent
                showStepper={true}
                sections="separated"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "#",
                    },
                    {
                        label: "Manage",
                        href: "#",
                    },
                    {
                        label: "Program",
                        href: "#",
                    },
                    {
                        label: "Configuration",
                    },
                ]}
                title="Configuration"
                buttons={[
                    {
                        label: "Preview",
                        type: "default",
                        size: "sm",
                        iconStartName: "preview",
                        iconEndName: "new-tab",
                    },
                    {
                        label: "Save changes",
                        type: "primary",
                        size: "sm",
                    },
                ]}
            >
                <div className="row">
                    <div className="col-12">
                        <Section title="Basic info" subtitle="Name the program and add details such as a description, dates, a cover image and an icon." collapsable isOpen={true} collapsableId="basic-info">
                            <div className="cq">
                                <FormGroup id="name" required={true} label="Name" hint="Should be short and descriptive.">
                                    <FormInputWrapper>
                                        <FormInput id="name" required={true} defaultValue="Impact Innovators" maxLength={60} />
                                        <div className="input-floating-actions">
                                            <Dropdown>
                                                <Button iconStartName="ai" size="xs" type="transparent" addClass="text-ai"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                <DropdownMenu direction="right" addClass="dropright">
                                                    <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                                    <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                                    <DropdownNested>
                                                        <DropdownItem
                                                            type="ai"
                                                            label="Change tone..."
                                                            iconName="tone"
                                                            toggle={true}
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        />
                                                        <DropdownMenu>
                                                            <DropdownItem label="Professional" />
                                                            <DropdownItem label="Casual" />
                                                            <DropdownItem label="Straightforward" />
                                                            <DropdownItem label="Confident" />
                                                            <DropdownItem label="Friendly" />
                                                        </DropdownMenu>
                                                    </DropdownNested>
                                                    <DropdownNested>
                                                        <DropdownItem
                                                            type="ai"
                                                            label="Translate to..."
                                                            iconName="translate"
                                                            toggle={true}
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        />
                                                        <DropdownMenu>
                                                            <DropdownItem label="English" />
                                                            <DropdownItem label="Korean" />
                                                            <DropdownItem label="Chinese, Simplified" />
                                                            <DropdownItem label="Chinese, Traditional" />
                                                            <DropdownItem label="Japanese" />
                                                            <DropdownItem label="Spanish" />
                                                            <DropdownItem label="Russian" />
                                                            <DropdownItem label="French" />
                                                            <DropdownItem label="Portuguese" />
                                                            <DropdownItem label="German" />
                                                            <DropdownItem label="Italian" />
                                                            <DropdownItem label="Dutch" />
                                                            <DropdownItem label="Indonesian" />
                                                            <DropdownItem label="Filipino" />
                                                            <DropdownItem label="Vietnamese" />
                                                        </DropdownMenu>
                                                    </DropdownNested>
                                                    <DropdownDivider />
                                                    <DropdownItem label="Copy from English" iconName="copy" />
                                                    <DropdownItem label="Restore to saved value" iconName="restore" />
                                                    <div className="dropdown-content text-center">
                                                        <span>Ask AI can make mistakes. Check important info.</span>
                                                    </div>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </FormInputWrapper>
                                </FormGroup>
                                <FormGroup id="slug" required={true} label="Slug" hint="Slug must not be changed after you communicate it to your users.">
                                    <FormInputWrapper>
                                        <FormInput id="slug" required={true} defaultValue="impact-innovators" maxLength={60} />
                                        <div className="input-floating-actions">
                                            <Button iconStartName="restore" size="xs" type="muted" />
                                        </div>
                                    </FormInputWrapper>
                                </FormGroup>

                                <FormGroup addClass="cq-12 cq-xs-6" id="start-date" label="Start date" required={true}>
                                    <FormInput id="start-date" type="datetime-local" />
                                </FormGroup>

                                <FormGroup addClass="cq-12 cq-xs-6" id="end-date" label="End date" required={true}>
                                    <FormInput id="end-date" type="datetime-local" />
                                </FormGroup>
                            </div>

                            <Alert type="info" icon="information" text={`To edit the registrations dates go to <a href="#" class="alert-link">Registration</a> then <a href="#" class="alert-link">Dates &amp; Rights</a>`} />

                            <FormGroup id="description" label="Short description" hint="A short sentence to explain what the program offers to participants. It will appear on lists.">
                                <FormInputWrapper>
                                    <FormTextarea
                                        id="description"
                                        rows={4}
                                        defaultValue={"A program to teach you our methodologies and the basics of impact, in your daily life as well as in your company, for a brighter future!"}
                                        maxLength={500}
                                    />
                                    <div className="input-floating-actions">
                                        <Dropdown>
                                            <Button iconStartName="ai" size="xs" type="transparent" addClass="text-ai" data-toggle="dropdown" aria-expanded="false" />
                                            <DropdownMenu direction="right" addClass="dropright">
                                                <DropdownItem type="ai" label="Write a course summary" caption="From all the content inside" iconName="summarize" />
                                                <DropdownItem type="ai" label="Translate to French" iconName="translate-generate" />
                                                <DropdownDivider />
                                                <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                                <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                                <DropdownNested>
                                                    <DropdownItem
                                                        type="ai"
                                                        label="Change tone..."
                                                        iconName="tone"
                                                        toggle={true}
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    />
                                                    <DropdownMenu>
                                                        <DropdownItem label="Professional" />
                                                        <DropdownItem label="Casual" />
                                                        <DropdownItem label="Straightforward" />
                                                        <DropdownItem label="Confident" />
                                                        <DropdownItem label="Friendly" />
                                                    </DropdownMenu>
                                                </DropdownNested>
                                                <DropdownNested>
                                                    <DropdownItem
                                                        type="ai"
                                                        label="Translate to..."
                                                        iconName="translate"
                                                        toggle={true}
                                                        data-toggle="dropdown"
                                                        aria-haspopup="true"
                                                        aria-expanded="false"
                                                    />
                                                    <DropdownMenu>
                                                        <DropdownItem label="English" />
                                                        <DropdownItem label="Korean" />
                                                        <DropdownItem label="Chinese, Simplified" />
                                                        <DropdownItem label="Chinese, Traditional" />
                                                        <DropdownItem label="Japanese" />
                                                        <DropdownItem label="Spanish" />
                                                        <DropdownItem label="Russian" />
                                                        <DropdownItem label="French" />
                                                        <DropdownItem label="Portuguese" />
                                                        <DropdownItem label="German" />
                                                        <DropdownItem label="Italian" />
                                                        <DropdownItem label="Dutch" />
                                                        <DropdownItem label="Indonesian" />
                                                        <DropdownItem label="Filipino" />
                                                        <DropdownItem label="Vietnamese" />
                                                    </DropdownMenu>
                                                </DropdownNested>
                                                <DropdownDivider />
                                                <DropdownItem label="Copy from English" iconName="copy" />
                                                <DropdownItem label="Restore to saved value" iconName="restore" />
                                                <div className="dropdown-content text-center">
                                                    <span>Ask AI can make mistakes. Check important info.</span>
                                                </div>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </FormInputWrapper>
                            </FormGroup>
                            <FormGroup id="cover" label="Cover image" hint="PNG,JPG,JPEG, at least 1800x1200 px.">
                                <ItemResource icon={{ name: "image" }} img="img/program-innovators.png" cover={false} resource={{ name: "impact-innovators-cover.png", type: "PNG Image" }} action="delete" />
                                <Dropdown>
                                    <Button iconStartName="plus-circle" label="Add image" type="default" extended={true} addClass="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                    <DropdownMenu>
                                        <DropdownItem type="ai" label="Generate an image..." iconName="attachment-generate" />
                                        <DropdownDivider />
                                        <DropdownItem label="Import image..." iconName="attachment" />
                                        <DropdownItem label="Add image link..." iconName="link" />
                                        <div className="dropdown-content text-center">
                                            <span>Ask AI can make mistakes. Check important info.</span>
                                        </div>
                                    </DropdownMenu>
                                </Dropdown>
                            </FormGroup>

                            <FormFieldSet id="visibility" legend="Visibility" hint="Choose who can see the program.">
                                <FormOption
                                    name="visibility"
                                    id="active"
                                    value="active"
                                    type="radio"
                                    card={true}
                                    label="Admins & managers only (draft mode)"
                                    caption="Only administrators and managers can see the program."
                                    defaultChecked={true}
                                />
                                <FormOption
                                    name="visibility"
                                    id="read-only"
                                    value="read-only"
                                    type="radio"
                                    card={true}
                                    label="Members only"
                                    caption="Only registered members of the organization can see it."
                                />
                                <FormOption
                                    name="visibility"
                                    id="inactive"
                                    value="inactive"
                                    type="radio"
                                    card={true}
                                    label="All visitors"
                                    caption="Everyone can see it."
                                />
                            </FormFieldSet>

                            <Alert type="warning" icon="alert" text="Reminder: don’t forget to publish the program to participants when you’re ready!" />
                        </Section>

                        <Section
                            title="Public pages &amp; briefs"
                            subtitle="Type your briefs for your participants, experts and jury members below."
                            collapsable
                            isOpen={true}
                            collapsableId="public-pages-briefs"
                        >
                            <div className="d-flex flex-column gap-md">
                                <LangSwitch />
                                <FormFieldSet id="public-pages" legend="Public page">
                                    <FormOption
                                        name="public-pages"
                                        id="public-page"
                                        value="public-page"
                                        type="checkbox"
                                        label="Enable public page"
                                        caption={<>Once enabled, you need to <a href="#">create new pages</a> in the manager, you can do this later</>}
                                        defaultChecked={true}
                                        card={true}
                                    />
                                    {/* <div className="form-group p-5 bg-light rounded mt-md">
                                        <label className="checkbox-custom font-weight-bold" htmlFor="challenge_advanced_form_customJavascript">
                                            Custom Javascript
                                        </label>
                                        <textarea
                                            id="challenge_advanced_form_customJavascript"
                                            name="challenge_advanced_form[customJavascript]"
                                            aria-describedby="challenge_advanced_form_customJavascript_help"
                                            rows={4}
                                            className="form-control"
                                            style={{
                                                overflow: "hidden",
                                                overflowWrap: "break-word",
                                                resize: "none",
                                                height: 102,
                                            }}
                                            defaultValue={""}
                                        />
                                        <small id="challenge_advanced_form_customJavascript_help" className="form-text text-muted">
                                            This Javascript code will be executed on the program public page.
                                        </small>
                                    </div> */}
                                </FormFieldSet>
                                <FormFieldSet id="briefs" legend="Briefs">
                                    <ConditionalFormGroup
                                        id="participants-brief"
                                        label="Brief for participants"
                                        caption="This will appear on the program dashboard."
                                        type="checkbox"
                                        checked={true}
                                        card={true}
                                    >
                                        <FormGroup id="participants-brief" label="Brief for participants" hint="Write a welcoming message for participants and present the program and program managers." addClass="bg-highlight rounded p-md">
                                            <FormTextarea id="participants-brief" rows={4} defaultValue={""} />
                                        </FormGroup>
                                    </ConditionalFormGroup>

                                    <ConditionalFormGroup
                                        id="experts-brief"
                                        label="Brief for experts"
                                        caption="This will appear on the experts space only."
                                        type="checkbox"
                                        card={true}
                                    >
                                        <FormGroup id="experts-brief" label="Brief for experts" hint="Write a welcoming message for experts and explain the expert role." addClass="bg-highlight rounded p-md">
                                            <FormTextarea id="experts-brief" rows={4} defaultValue={""} />
                                        </FormGroup>
                                    </ConditionalFormGroup>

                                    <ConditionalFormGroup
                                        id="juries-brief"
                                        label="Brief for juries"
                                        caption="This will appear on the jury members dashboard only."
                                        type="checkbox"
                                        card={true}
                                    >
                                        <FormGroup id="juries-brief" label="Brief for jury members" hint="Write a welcoming message for jury members and explain the jury role." addClass="bg-highlight rounded p-md">
                                            <FormTextarea id="juries-brief" rows={4} defaultValue={""} />
                                        </FormGroup>
                                    </ConditionalFormGroup>
                                </FormFieldSet>
                                <Alert type="info" icon="information" text="Only people for whom the brief is intended can see it" />
                            </div>
                        </Section>

                        <Section title="Advanced features" subtitle="Activate or deactivate features for your program." collapsable isOpen={true} collapsableId="features">
                            <FormFieldSet id="features" legend="Features">
                                <FormOption
                                    name="features"
                                    id="project-mode"
                                    value="project-mode"
                                    type="checkbox"
                                    label="Activate Project mode"
                                    card={true}
                                />
                                <FormOption
                                    name="features"
                                    id="show-workspace-people"
                                    value="show-workspace-people"
                                    type="checkbox"
                                    label="Show participants and mentors in the workspace menu"
                                    card={true}
                                />
                                <FormOption
                                    name="features"
                                    id="enable-global-chat"
                                    value="enable-global-chat"
                                    type="checkbox"
                                    label="Activate program global chat"
                                    card={true}
                                />
                            </FormFieldSet>
                            <FormFieldSet id="display" legend="Display">
                                <FormOption
                                    name="display"
                                    id="show-participation-button"
                                    value="show-participation-button"
                                    type="checkbox"
                                    label="Show the “Join” button when applications are closed"
                                    caption="The button will be disabled when applications is closed."
                                    card={true}
                                />
                            </FormFieldSet>
                        </Section>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
