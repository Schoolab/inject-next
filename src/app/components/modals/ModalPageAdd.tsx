import React from "react";
import { Button } from "../Button";
import { FormFieldSet } from "../forms/FormFieldSet";
import { LangSwitch } from "../LangSwitch";
import { FormGroup } from "../forms/FormGroup";
import { FormInput } from "../forms/FormInput";

export interface ModalPageAddProps {}

export const ModalPageAdd = ({}: ModalPageAddProps) => {
    return (
        <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header border-bottom">
                    <h3 className="modal-title line-clamp-1">
                        <span className="text-truncate">Add page</span>
                    </h3>
                    <div className="modal-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    <LangSwitch />
                    <div className="form-row">
                        <FormGroup id="name" label="Name" required={true} addClass="col-10">
                            <FormInput id="name" placeholder="A short name" defaultValue="About" required={true} />
                        </FormGroup>
                        <FormGroup id="icon" label="Icon" required={false} addClass="col-2">
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
                <div className="modal-footer border-top">
                    <div className="d-flex gap-xs ml-auto">
                        <Button type="default" label="Cancel" />
                        <Button type="primary" label="Add" />
                    </div>
                </div>
            </div>
        </div>
    );
};