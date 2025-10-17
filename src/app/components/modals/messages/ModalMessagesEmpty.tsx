import React from "react";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { tooltips } from "../../../../../public/utils/tooltips";
import { EmptyState } from "@/app/content/empty-states/EmptyState";
import { Notif } from "../../badges/notifs/Notif";
export interface ModalMessagesEmptyProps {
    isShow?: Boolean;
    emptyState?: Boolean;
    loading?: Boolean;
}

export const ModalMessagesEmpty = ({ isShow = false, emptyState = false, loading = false }: ModalMessagesEmptyProps) => {
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
                        <h3 className="modal-title line-clamp-1 d-flex align-items-start">
                            <span className="text-truncate">Messages</span>
                        </h3>

                        <div className="modal-actions">
                            <button className="btn btn-default btn-sm" role="button">
                                <span className="icon icon-plus-circle"></span>
                                <span>New message</span>
                            </button>
                            <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                                <span className="icon icon-close is-24px" aria-hidden="true" />
                            </button>
                        </div>
                    </div>

                    <div className="tab-content h-100">
                        <div id="chat" role="tabpanel" aria-labelledby="info-tab" className="h-100 tab-pane fade active show">
                            <EmptyState addClass="h-100" bordered={false} iconBtn="plus-circle" title="No messages" iconTitle="comment" text="Your messages will be listed here." labelBtn="New message" labelLink="Support center" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
