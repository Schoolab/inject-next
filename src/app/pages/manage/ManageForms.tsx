import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Alert } from "@/app/components/Alert";

export const ManageForms = () => {
    return (
        <Layout  sideBar="Manage">
            <AppContent showStepper={true}  sections="separated" showSubnav={false}>
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
                                    <div className="form-group col-lg-6">
                                        <label className="font-weight-bold required" htmlFor="translations_wrapper_lang_en_name">
                                            Name
                                        </label>
                                        <input type="text" id="translations_wrapper_lang_en_name" name="translations_wrapper[lang_en][name]" required data-hint="name" aria-describedby="translations_wrapper_lang_en_name_help" className="form-control" defaultValue="We Design a Brighter Future" />
                                        <small id="translations_wrapper_lang_en_name_help" className="form-text text-muted">
                                            The program name should be short and descriptive. 3-60 characters
                                        </small>
                                    </div>
                                    <div className="form-group col-lg-6">
                                        <label className="font-weight-bold required" htmlFor="translations_wrapper_lang_en_slug">
                                            Slug
                                        </label>
                                        <input type="text" id="translations_wrapper_lang_en_slug" name="translations_wrapper[lang_en][slug]" required data-hint="slug" className="form-control" defaultValue="schoolab-impact" />
                                        <small id="translations_wrapper_lang_en_slug_help" className="form-text text-muted">
                                            Slug must not be changed after you communicate it to your users.
                                        </small>
                                    </div>
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
                                
                                <div className="form-group">
                                    <label className="font-weight-bold" htmlFor="translations_wrapper_lang_en_overview">
                                        Short description
                                    </label>
                                    <textarea
                                        id="translations_wrapper_lang_en_overview"
                                        name="translations_wrapper[lang_en][overview]"
                                        maxLength={500}
                                        data-hint="overview"
                                        aria-describedby="translations_wrapper_lang_en_overview_help"
                                        rows={4}
                                        className="form-control"
                                        style={{
                                            overflow: "hidden",
                                            overflowWrap: "break-word",
                                            resize: "none",
                                            height: 102,
                                        }}
                                        defaultValue={"A program to teach you our methodologies and the basics of impact, in your daily life as well as in your company, for a brighter future!"}
                                    />
                                    <small id="translations_wrapper_lang_en_overview_help" className="form-text text-muted">
                                        A short sentence to explain what the program offers to participants. It will appear on lists.
                                    </small>
                                </div>
                                <div className="form-group" id="challengeCoverManager">
                                    <label className="font-weight-bold">Cover image</label>
                                    <div className="imageUploadManagerContainer">
                                        <div className="mb-3 imageUploadList">
                                            <div className="item is-bordered imageUploadListItem" data-identifier="11718cfa-9796-48f4-86ab-467af8f5cf04">
                                                <div className="item-row">
                                                    <div className="thumbnail is-lg">
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/11718cfa-9796-48f4-86ab-467af8f5cf04/co300x200.png" />
                                                    </div>
                                                    <div className="item-content ml-4 py-1">
                                                        <span className="item-title is-truncated h4 mb-none">Screenshot 2023-08-02 at 20.11.34.png</span>
                                                        <small className="text-muted">Image/png</small>
                                                    </div>
                                                    <div className="item-options dropdown">
                                                        <button className="btn btn-lg btn-transparent btn-icon" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                            <span className="icon icon-options" />
                                                        </button>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item updateImageButton" href="#" data-width={1800} data-height={1200} data-maxfileweight={5242880} data-url="/program/142/manage/cover-pictures/206/update" data-signed-url="/rest/challenge/142/cover-picture/signed-url/206">
                                                                {" "}
                                                                Update{" "}
                                                            </a>
                                                            <a className="dropdown-item text-danger deleteImageButton cursorLink" href="#" data-url="/program/142/manage/cover-pictures/206/delete">
                                                                {" "}
                                                                Delete{" "}
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="btn btn-block btn-lg btn-icon btn-default createImageButton" data-width={1800} data-height={1200} data-url="/program/142/manage/cover-pictures/create" data-signed-url="/rest/challenge/142/cover-picture/signed-url" data-maxfiles={5} data-maxfileweight={5242880} data-file-types="image/png,image/jpg,image/jpeg" data-maxfilesremaining={4}>
                                            <span className="icon icon-attachment" />
                                            <span>Add image</span>
                                        </span>
                                        <small className="form-text text-muted">PNG,JPG,JPEG, at least 1800x1200 px.</small>
                                    </div>
                                </div>
                                <fieldset className="form-group">
                                    <h4>Visibility</h4>
                                    <div className="d-flex flex-column flex-lg-row" id="challenge_advanced_form_visibility">
                                        <div className="flex-fill mr-0 mr-lg-3 mb-3 mb-lg-0 custom-control custom-radio is-bordered">
                                            <input type="radio" id="challenge_advanced_form_visibility_0" name="challenge_advanced_form[visibility]" className="custom-control-input" defaultValue={0} />
                                            <label className="text-nowrap custom-control-label custom-control-label" htmlFor="challenge_advanced_form_visibility_0">
                                                Administrators only (draft mode)
                                            </label>
                                            <div className="input-box" />
                                        </div>
                                        <div className="flex-fill mr-0 mr-lg-3 mb-3 mb-lg-0 custom-control custom-radio is-bordered">
                                            <input type="radio" id="challenge_advanced_form_visibility_1" name="challenge_advanced_form[visibility]" className="custom-control-input" defaultValue={1} defaultChecked />
                                            <label className="text-nowrap checkbox-custom custom-control-label custom-control-label" htmlFor="challenge_advanced_form_visibility_1">
                                                Members only
                                            </label>
                                            <div className="input-box" />
                                        </div>
                                        <div className="flex-fill mb-3 mb-lg-0 custom-control custom-radio is-bordered">
                                            <input type="radio" id="challenge_advanced_form_visibility_2" name="challenge_advanced_form[visibility]" className="custom-control-input" defaultValue={2} />
                                            <label className="text-nowrap checkbox-custom custom-control-label custom-control-label" htmlFor="challenge_advanced_form_visibility_2">
                                                All visitors
                                            </label>
                                            <div className="input-box" />
                                        </div>
                                    </div>
                                </fieldset>

                                <Alert type="warning" icon="alert" text="Reminder: don’t forget to publish the program to participants when you’re ready!" />
                                
                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary btn-flat btn-lg">
                                        Save
                                    </button>
                                </div>
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

                                <div className="d-flex justify-content-end">
                                    <button type="submit" className="btn btn-primary btn-flat btn-lg">
                                        Save
                                    </button>
                                </div>
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
