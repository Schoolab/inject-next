import React from "react";
import { Button } from "@/app/components/buttons/Button";
import { LangSwitch } from "@/app/components/lang-switch/LangSwitch";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { Icon } from "@/app/components/icons/Icon";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { CardCollapse } from "@/app/components/cards/CardCollapse";
export interface ModalSectionEditProps {}

export const ModalSectionEdit = ({}: ModalSectionEditProps) => {
    return (
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header border-bottom">
                    <h3 className="modal-title line-clamp-1">
                        <span className="text-truncate">Edit section</span>
                    </h3>
                    <nav className="modal-nav nav nav-tabs">
                            <a href="#" className=" nav-link nav-item active" id="content-tab" data-toggle="tab" data-target="#content" type="button" role="tab" aria-controls="content" aria-selected="true">
                                <span>Content</span>
                            </a>
                            <a href="#" className=" nav-link nav-item" id="styles-tab" data-toggle="tab" data-target="#styles" type="button" role="tab" aria-controls="styles" aria-selected="false">
                                <span>Styles</span>
                            </a>
                        </nav>
                        <div className="modal-pagination d-flex align-items-center ml-auto gap-xs">
                            <small className="pagination-label text-muted">1&nbsp;of&nbsp;15</small>
                            <Button type="default" size="sm" iconStartName="chevron-left" data-toggle="tooltip" data-original-title="Previous" />
                            <Button type="default" size="sm" iconStartName="chevron-right" data-toggle="tooltip" data-original-title="Next" />
                        </div>
                    <div className="modal-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="modal-body tab-content h-100" id="projectTabsContent">
                    <div id="content" role="tabpanel" aria-labelledby="content-tab" className="tab-pane h-100 fade active show">
                        <div className="d-flex flex-column gap-md">
                            <LangSwitch />
                            <FormGroup id="cover" label="Illustration">
                                <div className="dropdown">
                                    <Button type="default" label="Add image" iconStartName="plus-circle" extended={true} addClass="dropdown-toggle" data-toggle="dropdown" aria-expanded="false" />
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="#">Upload from computer</a>
                                        <a className="dropdown-item" href="#">Choose from gallery</a>
                                        {/* <a className="dropdown-item is-danger" href="#">Remove</a> */}
                                    </div>
                                </div>
                            </FormGroup>
                            <FormGroup id="title" label="Title">
                                <FormInput id="title" placeholder="e.g. Our team" />
                            </FormGroup>
                            <FormGroup id="subtitle" label="Subtitle" hint="If not needed, leave blank.">
                                <FormTextarea id="subtitle" placeholder="Your content here..." fieldSizing={true} />
                            </FormGroup>
                            <FormGroup id="content" label="Content" hint="If not needed, leave blank.">
                                <FormTextarea id="content" placeholder="Your content here..." />
                            </FormGroup>
                            <FormGroup id="buttons" label="Buttons" hint="If not needed, leave blank. Elements will follow the main content.">
                                <div className="accordion" id="accordionButtons">
                                    <CardCollapse id="1" parentId="accordionButtons" title="Join today" metas={[{label: "Primary button"},{label: "domain.tld"}]}>
                                        <div className="form-row">
                                            <FormGroup label="Label" addClass="col-6">
                                                <FormInput placeholder="e.g. Learn more" defaultValue="Join today" />
                                            </FormGroup>
                                            <FormGroup label="URL" addClass="col-6">
                                                <FormInput placeholder="e.g. https://inject.theschoolab.com" defaultValue="https://domain.tld" />
                                            </FormGroup>
                                        </div>
                                        <FormFieldSet legend="Behaviors">
                                            <div className="form-options" id="checkbox" aria-describedby="exemple_help">
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" id="checkbox_0" name="checkbox" className="custom-control-input" defaultValue={0} />
                                                    <label className="custom-control-label" htmlFor="checkbox_0">
                                                        Open in new tab
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" id="checkbox_1" name="checkbox" className="custom-control-input" defaultValue={1} />
                                                    <label className="custom-control-label" htmlFor="checkbox_1">
                                                        Nofollow
                                                    </label>
                                                </div>
                                            </div>
                                        </FormFieldSet>
                                        <FormGroup label="Style">
                                            <div className="btn-group btn-group-toggle btn-filter-radios align-self-start">
                                                <Button label="Primary" type="default" isActive={true}></Button>
                                                <Button label="Default" type="default"></Button>
                                                <Button label="Inverse" type="default"></Button>
                                            </div>
                                        </FormGroup>
                                        <FormFieldSet>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" role="switch" id="switch_0" name="switch" className="custom-control-input" defaultValue={0} defaultChecked />
                                                <label className="custom-control-label" htmlFor="switch_0">
                                                    Show button
                                                </label>
                                            </div>
                                        </FormFieldSet>
                                    </CardCollapse>
                                    <CardCollapse id="2" parentId="accordionButtons" title=" Learn more" metas={[{label: "Primary button"},{label: "domain.tld"},{label: "Open in new tab"},{label: "Nofollow"}]}>
                                        <div className="form-row">
                                            <FormGroup label="Label" addClass="col-6">
                                                <FormInput placeholder="e.g. Learn more" defaultValue="Learn more" />
                                            </FormGroup>
                                            <FormGroup label="URL" addClass="col-6">
                                                <FormInput placeholder="e.g. https://inject.theschoolab.com" defaultValue="https://domain.tld" />
                                            </FormGroup>
                                        </div>
                                        <FormFieldSet legend="Behaviors">
                                            <div className="form-options" id="checkbox" aria-describedby="exemple_help">
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" id="checkbox_2" name="checkbox" className="custom-control-input" defaultValue={2} defaultChecked />
                                                    <label className="custom-control-label" htmlFor="checkbox_2">
                                                        Open in new tab
                                                    </label>
                                                </div>
                                                <div className="custom-control custom-checkbox custom-control-inline">
                                                    <input type="checkbox" id="checkbox_3" name="checkbox" className="custom-control-input" defaultValue={3} defaultChecked />
                                                    <label className="custom-control-label" htmlFor="checkbox_3">
                                                        Nofollow
                                                    </label>
                                                </div>
                                            </div>
                                        </FormFieldSet>
                                        <FormGroup label="Style">
                                            <div className="btn-group btn-group-toggle btn-filter-radios align-self-start">
                                                <Button label="Primary" type="default"></Button>
                                                <Button label="Default" type="default" isActive={true}></Button>
                                                <Button label="Inverse" type="default"></Button>
                                            </div>
                                        </FormGroup>
                                        <FormFieldSet>
                                            <div className="custom-control custom-switch">
                                                <input type="checkbox" role="switch" id="switch_1" name="switch" className="custom-control-input" defaultValue={1} defaultChecked />
                                                <label className="custom-control-label" htmlFor="switch_1">
                                                    Show button
                                                </label>
                                            </div>
                                        </FormFieldSet>
                                    </CardCollapse>
                                </div>
                            </FormGroup>
                        </div>
                    </div>
                    <div id="styles" role="tabpanel" aria-labelledby="styles-tab" className="tab-pane h-100 fade">
                        <div className="d-flex flex-column gap-md">
                            <p>Content here...</p>
                        </div>
                    </div>
                </div>
                <div className="modal-footer border-top">
                    <div className="dropdown">
                        <Button type="default" label="Options"hasDropdown={true} />
                        <div className="dropdown-menu">
                            <a className="dropdown-item" href="#">
                                <span className="dropdown-item--label">Open</span>
                                <span className="dropdown-item--shortcut icon icon-new-tab" />
                            </a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" href="#">
                                <span>Edit</span>
                            </a>
                            <a className="dropdown-item is-danger" href="#">
                                <span>Delete</span>
                            </a>
                        </div>
                    </div>
                    <div className="d-flex gap-xs ml-auto">
                        <Button type="default" label="Discard changes" />
                        <Button type="primary" label="Save" />
                    </div>
                </div>
            </div>
        </div>
    );
};
