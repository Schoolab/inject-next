import React from "react";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { FormOption } from "@/app/forms/option/FormOption";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";
import { FormInput } from "@/app/forms/input/FormInput";
import { Tag } from "../badges/tags/Tag";
import { Notif } from "../badges/notifs/Notif";
import { speekToText } from "../../../../public/utils/speekToText";
import { Alert } from "../alerts/Alert";

export interface ModalAddSpeekToTextProps {}

export const ModalAddSpeekToText = ({}: ModalAddSpeekToTextProps) => {

    return (
        <div className="modal-dialog  modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header border-bottom">
                    <h3 className="modal-title line-clamp-1">
                        <span className="text-truncate">Ask AI</span>
                    </h3>
                    <div className="modal-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="modal-body d-flex flex-column gap-sm">
                    <div className="d-flex flex-column">
                        <span className="label mb-0">Transcribe voice</span>
                    </div>

                    <div id="recaller" className="bg-highlight rounded-pill px-md d-flex align-items-center w-100 gap-md">
                        <div className="small text-muted" id="timer">
                            0:00
                        </div>
                        <canvas className="flex-fill" id="visualizer" style={{ height: "54px" }}></canvas>
                        <div className="d-flex gap-2xs">
                            <button id="recordBtn" className="btn  btn-sm btn-transparent" title="Record">
                                <span className="icon icon-micro"></span>
                            </button>
                            <button id="stopBtn" className="btn  btn-sm btn-transparent" title="Arrêter">
                                <span className="icon icon-check"></span>
                            </button>
                        </div>
                    </div>

                    <audio id="player" controls className="bg-highlight rounded-pill  w-100 d-none"></audio>
                    {/* <span className="small text-muted">Recordings limit  to 30 seconds</span>   */}
                    {/* <Alert
                        buttonLabel=""
                        icon="information"
                        text="For performance reasons, we limit recordings to 30 seconds."
                        title=""
                        type="assistant"
                    />  */}
                </div>

                <div className="modal-footer border-top">
                    <button className="btn btn-lg btn-default" data-dismiss="modal">
                        Cancel
                    </button>
                    <div className="d-flex gap-xs ml-auto">
                        <button id="reRecordBtn" className="btn btn-lg btn-default reloadBtn" title="Regenerate">
                            <span className="icon icon-reload"></span>
                        </button>
                        {/* <button className="btn btn-lg btn-default copyToClipboard" title="Copy" data-mode="html">
                            <span className="icon icon-copy"></span>
                        </button> */}
                        <button id="downloadBtn" className="btn btn-lg btn-primary applyBtn">
                            <span>Apply</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
