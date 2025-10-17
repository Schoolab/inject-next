import React from "react";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { tooltips } from "../../../../../public/utils/tooltips";
import { EmptyState } from "@/app/content/empty-states/EmptyState";
import { Notif } from "../../badges/notifs/Notif";
export interface ModalMessagesNewProps {
    isShow?: Boolean;
    emptyState?: Boolean;
    loading?: Boolean;
}

export const ModalMessagesNew = ({ isShow = false, emptyState = false, loading = false }: ModalMessagesNewProps) => {
    useEffect(() => {
        tooltips();
    }, []);
    let classTabModal = ["modal fade is-right"];
    isShow && classTabModal.push("show d-block");
    return (
        <div className={classTabModal.join(" ")} id="iaSidebar" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-vertical" role="document">
                <div className="modal-content scrollable">
                    <div className="modal-header border-bottom">
                       
                        <h3 className="modal-title d-flex align-items-center gap-2xs">
                            <button id="chat-return" className="modal-action btn btn-default btn-sm d-flex"><span className="icon icon-arrow-left"></span></button>
                            <span className="text-nowrap">À : </span>
                         
                                 <input className="form-control " id="searchMessages" type="text" placeholder="@personne, ou quelquun@exemple.com" />
                        
                           
                        </h3>

                        <div className="modal-actions">
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <div className="tab-content h-100">
                        <div role="tabpanel" aria-labelledby="info-tab" className="h-100 tab-pane fade active show">
                       
                                
                        
                            <div className="modal-footer mt-auto border-top is-sticky">
                                <div className="w-100 message-composer-row disabled ">
                                    <textarea className="message-composer-input form-control" required placeholder="Type your question here..." autoComplete="off" defaultValue={""} />
                                    <button className="btn btn-transparent btn-icon message-composer-action disabled">
                                        <span className="icon icon-send" />
                                    </button>
                                </div>
                            </div>
                           
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
};
