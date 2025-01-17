import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Alert } from "@/app/components/Alert";
import { FormGroup } from "@/app/components/forms/FormGroup";
import { FormInput } from "@/app/components/forms/FormInput";
import { FormInputWrapper } from "@/app/components/forms/FormInputWrapper";
import { Button } from "@/app/components/Button";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdown/DropdownDivider";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { FormTextarea } from "@/app/components/forms/FormTextarea";
import { ItemResource } from "@/app/components/items/ItemResource";

export const ManageForms = () => {
    return (
        <Layout sideBar="Manage">
            <AppContent showStepper={true} sections="separated" showSubnav={true}>
                <div className="row">
                    <div className="col-12">
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#BasicInfo" aria-expanded="true">
                                <span className="application-section--title-content">Basic info</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="BasicInfo">
                                <p className="mb-5">Name the program and add details such as a description, dates, a cover image and an icon.</p>
                                <div className="form-row">
                                    <FormGroup id="name" required={true} label="Name" hint="Should be short and descriptive. 3-60 characters" addClass="col-lg-6">
                                        <FormInputWrapper>
                                            <FormInput id="name" required={true} defaultValue="Impact Innovators" />
                                            <div className="input-floating-actions">
                                                <Dropdown data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <Button iconStartName="ai" label="Ask AI" size="xs" type="transparent" addClass="dropdown-toggle text-ai" />
                                                    <DropdownMenu direction="right">
                                                        <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                                        <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                                        <DropdownItem type="ai" label="Change tone..." iconName="tone" />
                                                        <DropdownItem type="ai" label="Translate to..." iconName="translate" />
                                                        <DropdownDivider />
                                                        <DropdownItem label="Copy from English" iconName="copy" />
                                                        <DropdownItem label="Restore to saved value" iconName="restore" />
                                                        <div className="dropdown-content text-center">
                                                            <span>AInject can make mistakes. Check important info.</span>
                                                        </div>
                                                    </DropdownMenu>
                                                </Dropdown>
                                            </div>
                                        </FormInputWrapper>
                                    </FormGroup>
                                    <FormGroup id="slug" required={true} label="Slug" hint="Slug must not be changed after you communicate it to your users." addClass="col-lg-6">
                                        <FormInputWrapper>
                                            <FormInput id="slug" required={true} defaultValue="impact-innovators" />
                                            <div className="input-floating-actions">
                                                <Button iconStartName="restore" label="Refresh" size="xs" type="muted" />
                                            </div>
                                        </FormInputWrapper>
                                    </FormGroup>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-lg-6">
                                        <label className="font-weight-bold" htmlFor="translations_wrapper[lang_fr][dateBegin]">
                                            Start date
                                        </label>
                                        <input type="date" id="translations_wrapper_lang_fr_dateBegin" name="translations_wrapper[lang_fr][dateBegin]" disabled className="form-control" />
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="font-weight-bold" htmlFor="translations_wrapper[lang_fr][dateEnd]">
                                            End date
                                        </label>
                                        <input type="date" id="translations_wrapper_lang_fr_dateEnd" name="translations_wrapper[lang_fr][dateEnd]" disabled className="form-control" />
                                    </div>
                                </div>

                                <Alert type="info" icon="information" text={`To edit the registrations dates go to <a href="#" class="alert-link">Registration</a> then <a href="#" class="alert-link">Dates &amp; Rights</a>`} />

                                <FormGroup id="description" label="Short description" hint="A short sentence to explain what the program offers to participants. It will appear on lists.">
                                    <FormInputWrapper>
                                        <FormTextarea
                                            id="description"
                                            rows={4}
                                            defaultValue={"A program to teach you our methodologies and the basics of impact, in your daily life as well as in your company, for a brighter future!"}
                                        />
                                        <div className="input-floating-actions">
                                            <Dropdown data-toggle="dropdown">
                                                <Button iconStartName="ai" size="xs" type="transparent" addClass="dropdown-toggle text-ai" data-toggle="dropdown" aria-expanded="false" />
                                                <DropdownMenu direction="right">
                                                    <DropdownItem type="ai" label="Write a course summary" caption="From all the content inside" iconName="summarize" />
                                                    <DropdownItem type="ai" label="Translate to French" iconName="translate-generate" />
                                                    <DropdownDivider />
                                                    <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                                    <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                                    <DropdownItem type="ai" label="Change tone..." iconName="tone" />
                                                    <DropdownItem type="ai" label="Translate to..." iconName="translate" />
                                                    <DropdownDivider />
                                                    <DropdownItem label="Copy from English" iconName="copy" />
                                                    <DropdownItem label="Restore to saved value" iconName="restore" />
                                                    <div className="dropdown-content text-center">
                                                        <span>AInject can make mistakes. Check important info.</span>
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
                                                <span>AInject can make mistakes. Check important info.</span>
                                            </div>
                                        </DropdownMenu>
                                    </Dropdown>
                                </FormGroup>
                                <fieldset className="form-group">
                                    <legend className="label">Visibility</legend>
                                    <div className="form-options grid gap-xs" id="id-4" aria-describedby="exemple_help">
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <div className="flex-fill custom-control custom-control-card custom-radio">
                                                <input type="radio" id="id-4_0" name="form2" className="custom-control-input" defaultValue={0} />
                                                <label className="custom-control-label text-nowrap" htmlFor="id-4_0">
                                                    Administrators only (draft mode)
                                                </label>
                                            </div>
                                        </div>
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <div className="flex-fill custom-control custom-control-card custom-radio">
                                                <input type="radio" id="id-4_1" name="form2" className="custom-control-input" defaultValue={1} defaultChecked />
                                                <label className="custom-control-label text-nowrap" htmlFor="id-4_1">
                                                    Members only
                                                </label>
                                            </div>
                                        </div>
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <div className="flex-fill custom-control custom-control-card custom-radio">
                                                <input type="radio" id="id-4_2" name="form2" className="custom-control-input" defaultValue={2} />
                                                <label className="custom-control-label text-nowrap" htmlFor="id-4_2">
                                                    All visitors
                                                </label>
                                            </div>
                                        </div>
                                    </div>
                                </fieldset>

                                <Alert type="warning" icon="alert" text="Reminder: don’t forget to publish the program to participants when you’re ready!" />
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#PublicPage" aria-expanded="true">
                                <span className="application-section--title-content">Public pages &amp; briefs</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="PublicPage">
                                <p className="mb-5">Type briefs for your participants, Experts and Juries below.</p>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" id="challenge_advanced_form_isPublic" name="challenge_advanced_form[isPublic]" autoComplete="off" aria-describedby="challenge_advanced_form_isPublic_help" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenge_advanced_form_isPublic">
                                            Enable public page
                                        </label>
                                    </div>
                                    <small id="challenge_advanced_form_isPublic_help" className="form-text text-muted ml-3 mt-0">
                                        To enable public page you need to create new pages in the manager, you can do this later
                                    </small>
                                </div>
                                <div className="form-group p-5 bg-light rounded">
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
                                </div>

                                <Alert type="info" icon="information" text={`To add a public page go to More then Content <a href="#" class="alert-link">Content</a>`} />

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" id="id-1" name="name-1" autoComplete="off" aria-describedby="id-1_help" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-1">
                                            Enable participants brief
                                        </label>
                                    </div>
                                    <small id="id-1_help" className="form-text text-muted ml-3 mt-0">
                                        This will appear on the program dashboard for participants, experts and juries.
                                    </small>
                                </div>
                                <div className="form-group p-5 bg-light rounded">
                                    <label className="checkbox-custom font-weight-bold" htmlFor="id-2">
                                        Brief for participants
                                    </label>
                                    <textarea
                                        id="id-2"
                                        name="id-2"
                                        aria-describedby="id-2_help"
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
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" id="id-3" name="name-1" autoComplete="off" aria-describedby="id-3_help" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="id-3">
                                            Enable juries brief
                                        </label>
                                    </div>
                                    <small id="id-3_help" className="form-text text-muted ml-3 mt-0">
                                        This will appear on the juries’ dashboard only.
                                    </small>
                                </div>
                                <div className="form-group p-5 bg-light rounded">
                                    <label className="checkbox-custom font-weight-bold" htmlFor="id-4">
                                        Brief for juries
                                    </label>
                                    <textarea
                                        id="id-4"
                                        name="id-4"
                                        aria-describedby="id-4_help"
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
                                </div>

                                <Alert type="info" icon="information" text="Only people for whom the brief is intended can see it" />
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#AdvancedSettings" aria-expanded="true">
                                <span className="application-section--title-content">Public pages &amp; briefs</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="AdvancedSettings">
                                <h4>Features</h4>
                                <div className="form-group mb-none">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" id="challenge_advanced_form_config_enable_challenge_timeline" name="challenge_advanced_form[config][enable_challenge_timeline]" autoComplete="off" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenge_advanced_form_config_enable_challenge_timeline">
                                            Activate Project mode
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group mb-none">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" id="challenge_advanced_form_config_show_workspace_people" name="challenge_advanced_form[config][show_workspace_people]" autoComplete="off" className="custom-control-input" defaultValue={1} defaultChecked />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenge_advanced_form_config_show_workspace_people">
                                            Show participants and mentors in the workspace menu
                                        </label>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" id="challenge_thread_thread" name="challenge_thread[thread]" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenge_thread_thread">
                                            Activate program global chat
                                        </label>
                                    </div>
                                </div>
                                <h4>Display</h4>
                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" id="challenge_appearance_form_config_show_overview_register_closed_btn" name="challenge_appearance_form[config][show_overview_register_closed_btn]" autoComplete="off" className="custom-control-input" defaultValue={1} />
                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="challenge_appearance_form_config_show_overview_register_closed_btn">
                                            Show the participation button (disabled) when applications are closed.
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
