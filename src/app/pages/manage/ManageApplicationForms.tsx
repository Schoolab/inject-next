import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { Button } from "@/app/components/Button";

export const ManageApplicationForms = () => {
    return (
        <Layout  sideBar="Manage">
            <AppContent sections="separated" showSubnav={false}>
                <div className="row">
                    <div className="col-12">
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#participants" aria-expanded="true">
                                <span className="application-section--title-content">Participants</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show " id="participants">
                                <p className="mb-md">Add questions you want to ask to participants during their applications.</p>
                                <div className="grid-vertical gap-md">
                                    <div className="bg-highlight rounded-lg p-md d-flex flex-column gap-xs w-100">
                                        <div className="d-flex align-items-center justify-content-between gap-xs">
                                            <h4 className="nav-title flex-fill mb-none">Basic info</h4>
                                            <span className="badge badge-notification is-highlight">2</span>
                                            <div className="dropdown-container">
                                                <a className="btn btn-xs btn-transparent btn-icon text-muted" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <h6 className="dropdown-header">Position</h6>
                                                    <a className="dropdown-item">
                                                        <span className="dropdown-item--label">Send to top</span>
                                                    </a>
                                                    <a className="dropdown-item">
                                                        <span className="dropdown-item--label">Move up</span>
                                                    </a>
                                                    <a className="dropdown-item">
                                                        <span className="dropdown-item--label">Move down</span>
                                                    </a>
                                                    <a className="dropdown-item">
                                                        <span className="dropdown-item--label">Send to bottom</span>
                                                    </a>
                                                    <div className="dropdown-divider" />
                                                    <h6 className="dropdown-header">Actions</h6>
                                                    <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                        <span className="dropdown-item--label">Edit</span>
                                                    </a>
                                                    <a className="dropdown-item is-danger">
                                                        <span className="dropdown-item--label">Delete</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item--condition-wrapper">
                                            <div className="py-8px px-12px d-flex justify-content-between align-items-center text-muted small">
                                                <span>
                                                    If Participant's type is <span className="text-body">Student</span>
                                                </span>
                                                <span>Condition</span>
                                            </div>
                                            <div className="item is-small is-bordered gap-0px">
                                                <div className="item-row gap-2xs pb-8px" data-toggle="collapse" data-target="#question1" aria-expanded="false">
                                                    <a className="btn btn-xs btn-transparent btn-icon" data-toggle="collapse" data-target="#question1" aria-expanded="false" href="#">
                                                        <span className="icon icon-chevron-right" data-toggle="tooltip" data-placement="top" data-original-title="Click to toggle." data-boundary="window" />
                                                    </a>
                                                    <div className="d-flex flex-fill gap-xs">
                                                        <div className="icon icon-form-textbox is-20px p-3xs text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Short text" data-boundary="window" />
                                                        <div className="item-content d-flex flex-column align-items-start">
                                                            <h4 className="item-title">
                                                                Question Label
                                                                <span className="text-danger" data-toggle="tooltip" data-placement="top" data-original-title="Required question" data-boundary="window">
                                                                    *
                                                                </span>
                                                            </h4>
                                                            <span className="small text-muted">n options: [list options here]</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-xs dropdown">
                                                        <span className="icon icon-visibility-off is-20px text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Private response" data-boundary="window" />
                                                        <span className="icon icon-lock is-20px text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Locked. Can't be moved or deleted." data-boundary="window" />
                                                        <div className="dropdown-container">
                                                            <a className="btn btn-xs btn-transparent btn-icon" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                                <span className="icon icon-options" data-toggle="tooltip" data-placement="top" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <h6 className="dropdown-header">Position</h6>
                                                                <a className="dropdown-item">
                                                                    <span className="dropdown-item--label">Send to top</span>
                                                                </a>
                                                                <a className="dropdown-item">
                                                                    <span className="dropdown-item--label">Move up</span>
                                                                </a>
                                                                <a className="dropdown-item">
                                                                    <span className="dropdown-item--label">Move down</span>
                                                                </a>
                                                                <a className="dropdown-item">
                                                                    <span className="dropdown-item--label">Send to bottom</span>
                                                                </a>
                                                                <div className="dropdown-divider" />
                                                                <h6 className="dropdown-header">Actions</h6>
                                                                <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                    <span className="dropdown-item--label">Edit</span>
                                                                </a>
                                                                <a className="dropdown-item is-danger">
                                                                    <span className="dropdown-item--label">Delete</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="collapse" id="question1">
                                                    <div className="bg-highlight rounded-sm p-md mb-2xs d-flex flex-column gap-md">
                                                        <ul className="nav nav-pills gap-xs" role="tablist">
                                                            <li className="nav-item d-flex align-items-center gap-xs">
                                                                <span className="icon icon-translate is-16px text-muted" />
                                                                <span className="small d-none d-lg-flex text-muted">Edit for each language</span>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link is-sm active" id="question1_lang_en" data-toggle="pill" href="#form-question1_lang_en" role="tab" aria-controls="form-question1_lang_en" aria-selected="true">
                                                                    English
                                                                </a>
                                                            </li>
                                                            <li className="nav-item">
                                                                <a className="nav-link is-sm" id="question2_lang_fr" data-toggle="pill" href="#form-question2_lang_fr" role="tab" aria-controls="form-question2_lang_fr" aria-selected="false">
                                                                    French
                                                                </a>
                                                            </li>
                                                        </ul>
                                                        <div className="form-group">
                                                            <label className="font-weight-bold required" htmlFor="question_label">
                                                                Question
                                                            </label>
                                                            <input type="text" id="question_label" name="translations_wrapper[lang_en][name]" required data-hint="name" aria-describedby="question_label_help" className="form-control" defaultValue="" placeholder="Your question here..." />
                                                            <div className="d-flex flex-column flex-lg-row gap-xs mt-4px">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" type="checkbox" id="checkbox1" defaultValue="checkbox1" defaultChecked />
                                                                    <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="checkbox1">
                                                                        Required question
                                                                    </label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" type="checkbox" id="checkbox2" defaultValue="checkbox2" />
                                                                    <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="checkbox2">
                                                                        Private response
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="font-weight-bold" htmlFor="hint">
                                                                Hint text
                                                            </label>
                                                            <input type="text" id="hint" name="translations_wrapper[lang_en][name]" data-hint="name" aria-describedby="hint_help" className="form-control" defaultValue="" placeholder="e.g. What is you school name?" />
                                                            <small id="hint_help" className="form-text text-muted">
                                                                This is a text to help participants to understand how to fill the field.
                                                            </small>
                                                        </div>
                                                        <hr />
                                                        <div className="form-group">
                                                            <label className="checkbox-custom font-weight-bold required" htmlFor="type">
                                                                Type
                                                            </label>
                                                            <select id="type" defaultValue="short" className="custom-select">
                                                                <option value="short">
                                                                    Short text
                                                                </option>
                                                                <option value="long">Long text</option>
                                                                <option value="unique-select">Unique choice (select)</option>
                                                                <option value="unique-radio">Unique choice (radio)</option>
                                                                <option value="multiple">Multiple choices</option>
                                                                <option value="checklist">Checklist</option>
                                                                <option value="resources">Resources</option>
                                                                <option value="links">Links</option>
                                                                <option value="rating">Rating</option>
                                                                <option value="nps">NPS</option>
                                                            </select>
                                                        </div>
                                                        <div className="form-group">
                                                            <label className="font-weight-bold">Preview</label>
                                                            <div className="bg-white border rounded d-flex flex-column justify-content-center align-items-center p-48px">
                                                                {/* Preview: update with form infos */}
                                                                <div className="form-group w-100">
                                                                    <label className="font-weight-bold required" htmlFor="exemple">
                                                                        Question Label
                                                                    </label>
                                                                    <input type="text" id="exemple" required data-hint="name" aria-describedby="exemple_help" className="form-control" defaultValue="" placeholder="Your response here..." />
                                                                    <small id="exemple_help" className="form-text text-muted">
                                                                        Hint text
                                                                    </small>
                                                                </div>
                                                                {/* Preview */}
                                                            </div>
                                                        </div>
                                                        <div className="form-row">
                                                            <div className="form-group col-lg-6">
                                                                <label className="font-weight-bold" htmlFor="text_max_length">
                                                                    Text max length
                                                                </label>
                                                                <input type="number" id="text_max_length" data-hint="name" aria-describedby="text_max_length_help" className="form-control" defaultValue="" placeholder="e.g. 100" />
                                                                <small id="text_max_length_help" className="form-text text-muted">
                                                                    Leave empty for no limit
                                                                </small>
                                                            </div>
                                                            <div className="form-group col-lg-6">
                                                                <label className="font-weight-bold required" htmlFor="text_type_verification">
                                                                    Text type verification
                                                                </label>
                                                                <select id="text_type_verification" defaultValue="none" required aria-describedby="text_type_verification_help" className="custom-select">
                                                                    <option value="none">
                                                                        No verification
                                                                    </option>
                                                                    <hr />
                                                                    <optgroup label="Texts">
                                                                        <option value="text">Text</option>
                                                                        <option value="email">Email</option>
                                                                        <option value="url">URL</option>
                                                                    </optgroup>
                                                                    <optgroup label="Numbers">
                                                                        <option value="tel">Phone</option>
                                                                        <option value="number">Number</option>
                                                                    </optgroup>
                                                                    <optgroup label="Dates">
                                                                        <option value="date">Date</option>
                                                                        <option value="time">Time</option>
                                                                        <option value="datetime">DateTime</option>
                                                                        <option value="month">Month</option>
                                                                        <option value="week">Week</option>
                                                                    </optgroup>
                                                                </select>
                                                                {/* types: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/email */}
                                                                <small id="text_type_verification_help" className="form-text text-muted">
                                                                    Choose what type of content you want in responses
                                                                </small>
                                                            </div>
                                                        </div>
                                                        <hr />
                                                        <div className="form-group">
                                                            <label className="font-weight-bold">Integrations</label>
                                                            <div className="d-flex flex-column flex-lg-row gap-xs">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" type="checkbox" id="show_csv" defaultValue="show_csv" defaultChecked />
                                                                    <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="show_csv">
                                                                        Show in CSV exports
                                                                    </label>
                                                                </div>
                                                                <div className="custom-control custom-checkbox">
                                                                    <input className="custom-control-input" type="checkbox" id="show_insights" defaultValue="show_insights" defaultChecked />
                                                                    <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="show_insights">
                                                                        Show in Insights
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        {/* Hide unless show_insights checked */}
                                                        <div className="form-group">
                                                            <label className="font-weight-bold required" htmlFor="insights_chart_type">
                                                                Insights chart type
                                                            </label>
                                                            <select id="insights_chart_type" required aria-describedby="insights_chart_type_help" defaultValue="pie" className="custom-select">
                                                                <option value="pie">
                                                                    Pie chart
                                                                </option>
                                                                <option value="bar">Bar chart</option>
                                                                <option value="radar">Radar chart</option>
                                                                <option value="average">Average value</option>
                                                                <option value="total">Total value</option>
                                                            </select>
                                                        </div>
                                                        <hr />
                                                        <div className="form-group">
                                                            <label className="font-weight-bold" htmlFor="condition">
                                                                Condition
                                                            </label>
                                                            <a href="#" className="btn btn-lg btn-default btn-block">
                                                                <span className="icon icon-plus-circle" />
                                                                <span>Add condition</span>
                                                            </a>
                                                            <small className="form-text text-muted">You can add only one condition on a question.</small>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item--condition-wrapper">
                                            <div className="py-8px px-12px d-flex justify-content-between align-items-center text-muted small">
                                                <span>
                                                    If Participant's type is <span className="text-body">Student</span>
                                                </span>
                                                <span>Condition</span>
                                            </div>
                                            <div className="item is-small is-bordered">
                                                <div className="item-row gap-2xs">
                                                    <div className="d-flex flex-fill gap-xs">
                                                        <div className="icon icon-form-textbox is-20px p-3xs text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Short text" data-boundary="window" />
                                                        <div className="item-content d-flex flex-column align-items-start">
                                                            <h4 className="item-title">
                                                                Origin of the funding
                                                                <span className="text-danger" data-toggle="tooltip" data-placement="top" data-original-title="Required question" data-boundary="window">
                                                                    *
                                                                </span>
                                                            </h4>
                                                            <span className="small text-muted">n options: [list options here]</span>
                                                        </div>
                                                    </div>
                                                    <div className="d-flex align-items-center gap-xs dropdown">
                                                        <span className="icon icon-visibility-off is-20px text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Private response" data-boundary="window" />
                                                        <span className="icon icon-lock is-20px text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Locked. Can't be moved or deleted." data-boundary="window" />
                                                        <div className="dropdown-container">
                                                            <a className="btn btn-xs btn-transparent btn-icon text-muted" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                                <span className="icon icon-options" data-toggle="tooltip" data-placement="top" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                            </a>
                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                <h6 className="dropdown-header">Position</h6>
                                                                <a className="dropdown-item">
                                                                    <span className="dropdown-item--label">Send to top</span>
                                                                </a>
                                                                <a className="dropdown-item">
                                                                    <span className="dropdown-item--label">Move up</span>
                                                                </a>
                                                                <a className="dropdown-item">
                                                                    <span className="dropdown-item--label">Move down</span>
                                                                </a>
                                                                <a className="dropdown-item">
                                                                    <span className="dropdown-item--label">Send to bottom</span>
                                                                </a>
                                                                <div className="dropdown-divider" />
                                                                <h6 className="dropdown-header">Actions</h6>
                                                                <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                    <span className="dropdown-item--label">Edit</span>
                                                                </a>
                                                                <a className="dropdown-item is-danger">
                                                                    <span className="dropdown-item--label">Delete</span>
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="btn btn-sm btn-default btn-transparent text-muted text-nowrap align-self-start"  role="button">
                                            <span className="icon icon-plus-circle" />
                                            <span>Add question</span>
                                        </button>
                                    </div>
                                    <button className="btn btn-sm btn-default btn-transparent text-muted text-nowrap align-self-start"  role="button">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add step</span>
                                    </button>
                                </div>
                                <div className="d-flex justify-content-end mt-16px">
                                    <button type="submit" className="btn btn-default btn-lg mr-3">
                                        <span className="icon icon-visibility mr-2" />
                                        Preview questions
                                    </button>
                                    <button type="submit" className="btn btn-primary btn-lg">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#projects" aria-expanded="true">
                                <span className="application-section--title-content">Projects</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="projects">
                                <p className="mb-md">Add questions you want to ask to participants during their applications.</p>
                                <div className="d-flex flex-column gap-md">
                                    <div className="bg-white border rounded px-40px py-80px d-flex flex-column align-items-center gap-0px text-center">
                                        <div className="d-flex pb-16px">
                                            <span className="icon icon-questionnaire is-24px" />
                                        </div>
                                        <div className="d-flex flex-column gap-2xs">
                                            <p className="font-weight-bold">There’s no questions yet</p>
                                            <p className="small text-muted">Before being able to add a question you have to create a&nbsp;first&nbsp;step.</p>
                                        </div>
                                        <div className="d-flex pt-32px">
                                            <a href="#" className="btn btn-lg btn-primary">
                                                <span className="icon icon-plus-circle" />
                                                <span>Add step</span>
                                            </a>
                                        </div>
                                        <div className="d-flex py-16px">
                                            <a href="#" className="small">
                                                Learn more about questions
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#experts" aria-expanded="false">
                                <span className="application-section--title-content">Experts</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse" id="experts"></div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#jury" aria-expanded="false">
                                <span className="application-section--title-content">Jury</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse" id="jury"></div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
