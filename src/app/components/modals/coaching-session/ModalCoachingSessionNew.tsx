import React from "react";
import { Button } from "@/app/components/Button";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInput } from "@/app/forms/FormInput";
import { FormSelect } from "@/app/forms/FormSelect";
import { FormTextarea } from "@/app/forms/FormTextarea";
import { FormInputWrapper } from "@/app/forms/FormInputWrapper";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdown/DropdownDivider";
import { DropdownNested } from "@/app/components/dropdown/DropdownNested";
import { FormFieldSet } from "@/app/forms/FormFieldSet";
import { FormOption } from "@/app/forms/FormOption";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";

export interface ModalCoachingSessionNewProps {}

export const ModalCoachingSessionNew = ({}: ModalCoachingSessionNewProps) => {
    return (
        <div className="application-modals modal show overflow-y-scroll" tabIndex={-1} role="dialog" style={{ zIndex: 1040, display: "block" }} aria-modal="true">
            <div className="modal-dialog modal-dialog-centered" role="document" style={{ maxWidth: "800px!important" }}>
                <div className="modal-content">

                    <div className="modal-header border-bottom">
                        <h3 className="modal-title line-clamp-1">
                            <span className="text-truncate">New coaching session</span>
                        </h3>
                        <div className="modal-actions">
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <div className="modal-body d-flex flex-column gap-md">

                        <div className="cq">
                            <FormGroup addClass="cq-xs-6" id="project" required={true} label="Project">
                                <FormSelect
                                    id="project"
                                    disabled={true}
                                    options={[
                                        { label: "Healthify", value: "healthify", selected: true },
                                        { label: "TidyCards", value: "tidycards" },
                                    ]}
                                />
                            </FormGroup>

                            <FormGroup addClass="cq-xs-6" id="expert" required={true} label="Expert">
                                <FormSelect
                                    id="expert"
                                    options={[
                                        { label: "Choose an option...", value: "", disabled: true, selected: true },
                                        { label: "Julien Mulac", value: "julien-mulac" },
                                        { label: "Guillaume Yvon", value: "guillaume-yvon" },
                                        { label: "Robin Tamine", value: "robin-tamine" },
                                    ]}
                                />
                            </FormGroup>

                            <FormGroup addClass="cq-xs-6" id="datetime" required={true} label="Date and time">
                                <FormInput id="datetime" required={true} type="datetime-local" />
                            </FormGroup>

                            <FormGroup addClass="cq-xs-6" id="duration" required={true} label="Duration">
                                <FormSelect
                                    id="duration"
                                    options={[
                                        { label: "15 minutes", value: "&5min" },
                                        { label: "30 minutes", value: "30min", selected: true },
                                        { label: "45 minutes", value: "45min" },
                                        { label: "60 minutes", value: "60min" },
                                    ]}
                                />
                            </FormGroup>

                            <FormGroup addClass="cq-12" id="topic" label="Topic" hint="Explain shortly the topic of this coaching session">
                                <FormInputWrapper>
                                    <FormTextarea
                                        id="topic"
                                        rows={4}
                                        defaultValue={""}
                                        placeholder="Your content here..."
                                    />
                                    <div className="input-floating-actions">
                                        <Dropdown>
                                            <Button iconStartName="ai" size="xs" type="transparent" addClass="text-ai" data-toggle="dropdown" aria-expanded="false" />
                                            <DropdownMenu direction="right" addClass="dropright">
                                                <DropdownItem type="ai" label="Write a bio" caption="From all the info in your settings" iconName="summarize" />
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
                                                <DropdownItem label="Restore to saved value" iconName="restore" />
                                                <div className="dropdown-content text-center">
                                                    <span>Ask AI can make mistakes. Check important info.</span>
                                                </div>
                                            </DropdownMenu>
                                        </Dropdown>
                                    </div>
                                </FormInputWrapper>
                            </FormGroup>

                            <FormFieldSet addClass="cq-12" id="access" legend="Access">
                                <FormOption
                                    name="access"
                                    id="access-online"
                                    value="access-online"
                                    type="radio"
                                    label="Online"
                                    defaultChecked={true}
                                    card={true}
                                />
                                <FormOption
                                    name="access"
                                    id="access-in-person"
                                    value="access-in-person"
                                    type="radio"
                                    label="In person"
                                    card={true}
                                />
                                <FormOption
                                    name="access"
                                    id="access-hybrid"
                                    value="access-hybrid"
                                    type="radio"
                                    label="Online + In person"
                                    card={true}
                                />
                            </FormFieldSet>

                            <div className="cq-12">
                                <ItemsGroup addClass="p-md gap-md">
                                    <FormGroup id="access-link" required={true} label="Access link" hint="In the following format: http://example.com">
                                        <FormInput id="access-link" required={true} placeholder="e.g. Google Meet, Jitsy, Zoom, ..." />
                                    </FormGroup>
                                    <FormGroup id="access-password" label="Access password" hint="Optional password to enter the meeting">
                                        <FormInput id="access-password" placeholder="Optionnal" />
                                    </FormGroup>
                                </ItemsGroup>
                            </div>
                            
                        </div>

                    </div>
                    
                    <div className="modal-footer border-top">
                        <div className="d-flex gap-xs ml-auto">
                            <Button type="default" label="Discard changes" />
                            <Button type="primary" label="Send" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
