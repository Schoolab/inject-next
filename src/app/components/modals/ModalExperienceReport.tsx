import React from "react";
import { Button } from "@/app/components/buttons/Button";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { FormOption } from "@/app/forms/option/FormOption";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";
import { FormInput } from "@/app/forms/input/FormInput";
import { Tag } from "../badges/tags/Tag";
import { Notif } from "../badges/notifs/Notif";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { Stepper, StepType } from "@/app/components/stepper/Stepper";

export interface ModalExperienceReport {}
const steps: StepType[] = [
    {
        title: "Context and challenges",
        description: "In progress",
        status: "in-progress",
        link: "",
        current: true,
    },
    {
        title: "Expertises and methodology used",
        description: "completed",
        status: "not-completed",
        current: false,
    },
    {
        title: "Results and impacts (business and ESG)",
        description: "Not completed",
        status: "not-completed",
        current: false,
    },
];
export const ModalExperienceReport = ({}: ModalExperienceReport) => {
    return (
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header border-bottom">
                    <h3 className="modal-title line-clamp-1">
                        <span className="text-truncate">Experience report</span>
                    </h3>
                    <div className="modal-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    {/* <Stepper steps={steps} /> */}
                    <h3 className="mb-0">1. Context and challenges</h3>
                    <p className="small text-muted">Objectif : Identifier clairement la problématique client, les enjeux, objectifs et facteurs clés de succès.</p>

                    <FormGroup  label="Quel était le besoin ou la problématique exprimée par le client au démarrage de la mission ?" >
                        <FormInputWrapper>
                            <FormTextarea rows={4} defaultValue={"Start writing here ..."} maxLength={500} />
                            <div className="input-floating-actions">
                                <Button iconStartName="micro" size="xs" type="transparent" addClass="text-primary" data-toggle="dropdown" aria-expanded="false" />
                            </div>
                        </FormInputWrapper>
                    </FormGroup>
                    <FormGroup  label="Quels étaient les principaux objectifs de la mission pour le client (business, organisationnels, etc.) ?" >
                        <FormInputWrapper>
                            <FormTextarea rows={4} defaultValue={"Start writing here ..."} maxLength={500} />
                            <div className="input-floating-actions">
                                <Button iconStartName="micro" size="xs" type="transparent" addClass="text-primary" data-toggle="dropdown" aria-expanded="false" />
                            </div>
                        </FormInputWrapper>
                    </FormGroup>
                    <FormGroup  label="Quels étaient les facteurs clés de succès identifiés dès le début de la mission (ressources, parties prenantes, calendrier, etc.) ?" >
                        <FormInputWrapper>
                            <FormTextarea rows={4} defaultValue={"Start writing here ..."} maxLength={500} />
                            <div className="input-floating-actions">
                                <Button iconStartName="micro" size="xs" type="transparent" addClass="text-primary" data-toggle="dropdown" aria-expanded="false" />
                            </div>
                        </FormInputWrapper>
                    </FormGroup>
                </div>
                <div className="modal-footer border-top">
                    <Button type="default" label="cancel" />
                    <div className="d-flex gap-xs ml-auto">
                        <Button type="default" iconStartName="reload" />
                        <Button type="default" iconStartName="copy" />
                        <Button type="primary" label="Apply and next" />
                    </div>
                </div>
            </div>
        </div>
    );
};
