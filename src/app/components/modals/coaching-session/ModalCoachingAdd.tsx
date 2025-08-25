import React from "react";
import { Button } from "@/app/components/buttons/Button";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { DropdownNested } from "@/app/components/dropdowns/DropdownNested";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { FormOption } from "@/app/forms/option/FormOption";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";

export interface ModalMeetingAddProps {}

export const ModalMeetingAdd = ({}: ModalMeetingAddProps) => {
    return (
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header border-bottom">
                    <h3 className="modal-title line-clamp-1">
                        <span className="text-truncate">Add a meeting</span>
                    </h3>
                    <div className="modal-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>

                <div className="modal-body d-flex flex-column gap-md">
                    <div className="cq">
                        <FormGroup addClass="cq-xs-12" id="project" required={true} label="Project">
                            <FormSelect
                                id="project"
                              
                                options={[
                                    { label: "Choose an option...", value: "",},
                                    { label: "Healthify", value: "healthify", selected: true },
                                    { label: "TidyCards", value: "tidycards" },
                                ]}
                            />
                        </FormGroup>

                        <FormGroup addClass="cq-xs-12" id="expert" required={true} label="Expert">
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

                        <FormGroup addClass="cq-xs-3" id="date" required={true} label="Day">
                            <FormInput id="date" required={true} type="date" />
                        </FormGroup>

                        <FormGroup addClass="cq-xs-3" id="hour" required={true} label="Hour">
                            <FormSelect
                                id="hour"
                                options={[
                                    { label: "9am", value: "9am" },
                                    { label: "10am", value: "10am", selected: true },
                                    { label: "11am", value: "11am" },
                                    { label: "12am", value: "12am" },
                                    { label: "1pm", value: "1pm" },
                                    { label: "2pm", value: "2pm" },
                                    { label: "3pm", value: "3pm" },
                                    { label: "4pm", value: "4pm" },
                                    { label: "5pm", value: "5pm" },
                                    { label: "6pm", value: "6pm" },
                                    { label: "7pm", value: "7pm" },
                                ]}
                            />
                        </FormGroup>
                             <FormGroup addClass="cq-xs-3" id="Min" required={true} label="Min">
                            <FormSelect
                                id="Min"
                                options={[
                                    { label: "0", value: "0min" },
                                    { label: "15", value: "15min", selected: true },
                                    { label: "30", value: "30min" },
                                    { label: "40", value: "40min" },
                                ]}
                            />
                        </FormGroup>

                        <FormGroup addClass="cq-xs-3" id="duration" required={true} label="Duration">
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

                        <FormGroup addClass="cq-12" id="Note" label="Note">
                            <FormInputWrapper>
                                <FormTextarea id="topic" rows={4} defaultValue={""} placeholder="Your content here..." />
                                <div className="input-floating-actions">
                                    <Dropdown>
                                        <Button iconStartName="ai" size="xs" type="transparent" addClass="text-ai" data-toggle="dropdown" aria-expanded="false" />
                                        <DropdownMenu direction="right" addClass="dropright">
                                            <DropdownItem type="ai" label="Write a bio" caption="From all the info in your settings" iconName="summarize" />
                                            <DropdownDivider />
                                            <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                            <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                            <DropdownNested>
                                                <DropdownItem type="ai" label="Change tone..." iconName="tone" toggle={true} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                                <DropdownMenu>
                                                    <DropdownItem label="Professional" />
                                                    <DropdownItem label="Casual" />
                                                    <DropdownItem label="Straightforward" />
                                                    <DropdownItem label="Confident" />
                                                    <DropdownItem label="Friendly" />
                                                </DropdownMenu>
                                            </DropdownNested>
                                            <DropdownNested>
                                                <DropdownItem type="ai" label="Translate to..." iconName="translate" toggle={true} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
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

                        <FormFieldSet addClass="cq-12" id="access" legend="Access" grid={true}>
                            <div className="g-col-12 g-col-md-4">
                                <FormOption name="access" id="access-online" value="access-online" type="radio" label="Online" defaultChecked={true} card={true} />
                            </div>
                            <div className="g-col-12 g-col-md-4">
                                 <FormOption name="access" id="access-in-person" value="access-in-person" type="radio" label="In person" card={true} />
                            </div>
                            <div className="g-col-12 g-col-md-4">
                                <FormOption name="access" id="access-hybrid" value="access-hybrid" type="radio" label="Online + In person" card={true} />
                            </div>
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
                        <Button type="primary" label="Add" />
                    </div>
                </div>
            </div>
        </div>
    );
};
