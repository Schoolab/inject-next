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
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";

export interface ModalSectionAddProps {}

export const ModalSpeekToTextadd = ({}: ModalSectionAddProps) => {
    useEffect(() => {
            speekToText();
        }, []);
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
                    <FormTextarea
                        defaultValue="Aliquam et tellus felis. Donec lorem leo, porttitor in nibh non, sodales efficitur tellus. Phasellus sed tincidunt risus. Duis enim mauris, finibus eget orci bibendum, sodales semper velit. Cras pulvinar neque vitae velit gravida, pharetra ultrices libero lobortis. Ut cursus, diam id consequat semper, orci sapien imperdiet leo, sit amet volutpat ligula est sit amet ligula. Nunc quis magna erat."
                        fieldSizing
                        id="description"
                        placeholder="Write your text here..."
                    />
                    <button id="recordBtn" className="btn btn-lg btn-default">
                        <span className="icon icon-micro"></span> continue recording
                    </button>
                </div>

                <div className="modal-footer border-top">
                    <button className="btn btn-lg btn-default" data-dismiss="modal">
                        Cancel
                    </button>
                    <button id="reRecordBtn" className="btn btn-lg btn-default">
                        Restart
                    </button>
                    <div className="d-flex gap-xs ml-auto">
                        <button id="downloadBtn" className="btn btn-lg btn-primary applyBtn">
                            <span>Apply</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
