import React from "react";
import { Button } from "@/app/components/Button";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { Icon } from "@/app/components/Icon";

export interface ModalCoachingSessionSentProps {}

export const ModalCoachingSessionSent = ({}: ModalCoachingSessionSentProps) => {
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

                    <div className="modal-body d-flex flex-column gap-xl">

                        <div className="d-flex flex-column gap-md align-items-center text-center">
                            <Icon size="lg" name="coaching" />
                            <div className="d-flex flex-column gap-none">
                                <h2>Invitation sent</h2>
                                <p>An invitation has been sent, you will receive an email when <a href="#">Sasha Lehmann</a> accepts your invitation.</p>
                            </div>
                            <Button type="primary" label="Add to calendar" iconStartName="plus-circle" />
                        </div>

                        <div className="d-flex flex-column gap-2xs">
                            <h3>Topic</h3>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Repellat ratione ullam, placeat illo veniam repudiandae dignissimos maiores numquam culpa debitis laudantium architecto ut reprehenderit quibusdam laboriosam! Quod cupiditate eius ea.</p>
                        </div>

                        <ItemsGroup addClass="p-xl gap-md">
                            <div className="d-flex flex-column gap-none w-100">
                                <h3>Access</h3>
                                <div className="d-flex gap-2xs align-items-center text-navigation text-muted">
                                    <Icon size="xs" name="lock" />
                                    <span>Only visible to participants and staff</span>
                                </div>
                            </div>

                            <p>This meeting takes place online. Here is the information to attend to the meeting.</p>

                            <div className="d-flex gap-xs">
                                <Icon size="sm" name="link" addClass="text-muted" />
                                <p>Meeting on meet.jit.si</p>
                            </div>

                            <div className="d-flex gap-xs">
                                <Icon size="sm" name="lock" addClass="text-muted" />
                                <p>Password: 6ndei-91bo3</p>
                            </div>

                            <div className="d-flex flex-column gap-2xs align-items-start">
                                <Button type="primary" label="Join with Jitsi" iconStartName="plus-circle" />
                                <p className="small text-muted">meet.jit.si/schoolab-inject/dca0f6edf0e190628351b08f5da351ac</p>
                            </div>
                        </ItemsGroup>

                    </div>
                    
                    <div className="modal-footer border-top">
                        <div className="d-flex gap-xs ml-auto">
                            <Button type="default" label="Cancel" />
                            <Button type="primary" label="Done" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};
