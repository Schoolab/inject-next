import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Stepper, StepType } from "@/app/components/Stepper";
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
import { FormSelect } from "@/app/forms/FormSelect";
import { AppSplit } from "@/app/layouts/AppSplit";
import { ProgressBar } from "@/app/components/ProgressBar";
import { CardProgram } from "@/app/components/cards/CardProgram";

const Preview = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
        <CardProgram
          name="Impact Innovators"
          actions= {[
            { 
                title: "Join the program",
                metas: [
                    { label: "Applicants" },
                    { iconName: "account", label: "143", addClass: "font-weight-bold" },
                ],
                buttons: [
                    { label: "Join", type: "primary", link: "#" },
                    { label: "Learn more", type: "default", link: "#" },
                ],
            }
          ]}
          style={{ width: "100%", maxWidth: "32rem", }}
          cover="img/program-innovators.png"
        />
    </div>
  );
};

interface AdminInstallerBasicInfoProps {
  theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const AdminInstallerBasicInfo = ({ theme = "default" }: AdminInstallerBasicInfoProps) => {

    return (
        <Layout showNavbar={false} showShortcutbar={false}>
            <AppSplit addClass="py-3xl" theme={theme} positionX="left" shadow={true} preview={<Preview />}>
               
                <div className="d-flex flex-column gap-xs">
                    <h1 className="display-3">Basic info</h1>
                    <p>Name the program and choose a description.</p>
                </div>

                <form className="d-flex flex-column flex-fill justify-content-start" name="ChallengeDefaultForm" method="post" action="/rest/challenge/create/default">
                    <LangSwitch addClass="mb-lg" />

                    <div className="cq mb-lg">
                        
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
                        {/* <FormGroup id="slug" required={true} label="Slug" hint="Slug must not be changed after you communicate it to your users.">
                            <FormInputWrapper>
                                <FormInput id="slug" required={true} defaultValue="impact-innovators" maxLength={60} />
                                <div className="input-floating-actions">
                                    <Button iconStartName="restore" size="xs" type="muted" />
                                </div>
                            </FormInputWrapper>
                        </FormGroup> */}

                        <FormGroup addClass="cq-12 cq-xs-6" id="start-date" label="Start date" required={false}>
                            <FormInput id="start-date" type="datetime-local" />
                        </FormGroup>

                        <FormGroup addClass="cq-12 cq-xs-6" id="end-date" label="End date" required={false}>
                            <FormInput id="end-date" type="datetime-local" />
                        </FormGroup>

                        <FormGroup addClass="cq-12" id="description" label="Short description" hint="A short sentence to explain what the program offers to participants. It will appear on lists.">
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
                    
                    </div>

                    <div className="d-flex gap-lg align-items-center mt-auto">
                        <ProgressBar percentage={12} max={100}  addClass="flex-fill" inline={true} text="1/8" />
                        <div className="d-flex gap-xs">
                          <Button type="primary" label="Next step" link="/?path=/story/pages-admin-installer-studies--properties" />
                        </div>
                    </div>

                </form>
            </AppSplit>
        </Layout>
    );
};
