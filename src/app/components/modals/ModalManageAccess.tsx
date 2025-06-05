import React from "react";
import { Button } from "@/app/components/buttons/Button";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { FormOption } from "@/app/forms/option/FormOption";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";
import { FormInput } from "@/app/forms/input/FormInput";
import { Tag } from "../badges/tags/Tag";
import { Notif } from "../badges/notifs/Notif";

export interface ModalSectionAddProps {}

export const ModalManageAccess = ({}: ModalSectionAddProps) => {
    return (
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header border-bottom">
                    <h3 className="modal-title line-clamp-1">
                        <span className="text-truncate">Manage access</span>
                    </h3>
                    <div className="modal-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    <FormGroup addClass="cq-12 " id="share_access" label="Share access to:">
                        <FormInputWrapper>
                            <FormInput id="share_access" placeholder="Enter an email" />
                        </FormInputWrapper>
                    </FormGroup>

                    
                    <div className="d-flex flex-column gap-xs">
                        <span className="label">Who has access:</span>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                            
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    <Notif
                                        addClass="is-pill"
                                        label={1}
                                        status="accent"
                                        />  
                                    </div>          
                                </div>
                            
                                <div className="item-options gap-2xs">
                                    <Tag label="Pending" iconName="status-dashed" status="progress" /> 
                                    <a href="#" className="btn btn-default z-1" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Download file"><span className="icon icon-check text-success"></span></a>
                                    <a href="#" className="btn btn-muted z-1" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Download file"><span className="icon icon-cancel"></span></a>
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                            
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    <Notif
                                        addClass="is-pill"
                                        label={1}
                                        status="accent"
                                        />  
                                    </div>          
                                </div>
                            
                                <div className="item-options gap-2xs">
                                    <Tag label="Pending" iconName="status-dashed" status="progress" /> 
                                    <a href="#" className="btn btn-default z-1" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Download file"><span className="icon icon-check text-success"></span></a>
                                    <a href="#" className="btn btn-muted z-1" role="button" data-toggle="tooltip" data-placement="top" data-boundary="window" data-title="Download file"><span className="icon icon-cancel"></span></a>
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    </div>          
                                </div>
                                <div className="item-options gap-2xs">
                                    <Tag label="Invited" iconName="status-bordered" status="draft" /> 
                              
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    </div>          
                                </div>
                                <div className="item-options gap-2xs">
                                    <Tag label="Accepted" iconName="status-filled" status="open" /> 
                              
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    </div>          
                                </div>
                                <div className="item-options gap-2xs">
                                    <Tag label="Accepted" iconName="status-filled" status="open" /> 
                              
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    </div>          
                                </div>
                                <div className="item-options gap-2xs">
                                    <Tag label="Accepted" iconName="status-filled" status="open" /> 
                              
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    </div>          
                                </div>
                                <div className="item-options gap-2xs">
                                    <Tag label="Accepted" iconName="status-filled" status="open" /> 
                              
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    </div>          
                                </div>
                                <div className="item-options gap-2xs">
                                    <Tag label="Accepted" iconName="status-filled" status="open" /> 
                              
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-bordered">
                            <div className="item-row align-items-center">
                                <div className="item-content">
                                    <div className="item-row">
                                    <a className="item-title stretched-link text-truncate" href="#">name.lastname@email.com   </a>
                                    </div>          
                                </div>
                                <div className="item-options gap-2xs">
                                    <Tag label="Accepted" iconName="status-filled" status="open" /> 
                              
                                    <div className="dropdown" data-toggle="tooltip" data-placement="top" data-title="Options" data-boundary="window" data-original-title="" title="">
                                        <a className="btn btn-muted btn-icon z-1" href="#" role="button" data-toggle="dropdown" aria-expanded="false" data-boundary="window"><span className="icon icon-options"></span></a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <a href="#" className="dropdown-item">Edit file</a>
                                            <a href="#" className="dropdown-item is-danger">Delete file</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className="modal-footer border-top">
                    <div className="d-flex gap-xs ml-auto">
                        <Button type="default" iconStartName="link" label="Copy access link" />
                        <Button type="primary" label="Save" />
                    </div>
                </div>
            </div>
        </div>
    );
};
