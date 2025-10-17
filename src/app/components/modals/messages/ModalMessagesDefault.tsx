import React from "react";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { tooltips } from "../../../../../public/utils/tooltips";
import { EmptyState } from "@/app/content/empty-states/EmptyState";
import { Notif } from "../../badges/notifs/Notif";
import { Icon } from "@/app/components/icons/Icon";
import { Avatar } from "@/app/components/avatars/Avatar";
import { ItemList } from "@/app/components/items/ItemList";
export interface ModalMessagesDefaultProps {
    isShow?: Boolean;
    emptyState?: Boolean;
    loading?: Boolean;
}

export const ModalMessagesDefault = ({ isShow = false, emptyState = false, loading = false }: ModalMessagesDefaultProps) => {
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
                        <div role="tabpanel" aria-labelledby="info-tab" className="h-100 tab-pane fade active show">
                            <div className="items">
                                <form className="px-xl pt-xl pb-xs w-100">
                                <div className="form-group mb-0 w-100">
                                    <label className="sr-only" htmlFor="searchMessages">
                                        Search messages
                                    </label>
                                    <input className="form-control w-100" id="searchMessages" type="text" placeholder="Search for messages or users…" />
                                </div>
                            </form>

                            <ItemList type="project" label="Healthify" caption="Pierre: Aenean eget libero" datetime="1:28 PM" notifs={9} />
                            <ItemList avatars={[{ image: "img/avatar-pierre.jpeg" }, { image: "img/avatar-terence.jpeg" }]} label="Pierre, Terence, Alexandra" caption="You: Donuts do have powers 🤣" datetime="3:04 PM" />
                            <ItemList avatars={[{ image: "img/avatar-terence.jpeg" }, { image: "" }]} label="Terence, John" caption="Terence: Aenean eget libero" datetime="1:28 PM" />
                            <ItemList type="program" label="Impact Innovators" caption="No messages…" />
                            <ItemList avatars={[{ image: "img/avatar-pierre.jpeg" }]} label="Pierre Lemeteil" caption="No messages…" />
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
