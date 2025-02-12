import React from "react";
import { Button } from "@/app/components/Button";
import { FormFieldSet } from "@/app/forms/FormFieldSet";
import { FormOption } from "@/app/forms/FormOption";

export interface ModalSectionAddProps {}

export const ModalSectionAdd = ({}: ModalSectionAddProps) => {
    return (
        <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable" role="document">
            <div className="modal-content">
                <div className="modal-header border-bottom">
                    <h3 className="modal-title line-clamp-1">
                        <span className="text-truncate">Add section</span>
                    </h3>
                    <div className="modal-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted" type="button" data-dismiss="modal" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="modal-body">
                    <FormFieldSet legend="Hero" name="hero-sections" grid={true}>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="hero-left"
                                value="hero-left"
                                type="radio"
                                card={true}
                                image="img/covers/section_hero-left.png"
                                label="Hero (image left)"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="hero-right"
                                value="hero-right"
                                type="radio"
                                card={true}
                                image="img/covers/section_hero-right.png"
                                label="Hero (image right)"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="hero-center"
                                value="hero-center"
                                type="radio"
                                card={true}
                                image="img/covers/section_hero-center.png"
                                label="Hero (centered)"
                                hideControl={true}
                            />
                        </div>
                    </FormFieldSet>
                    <FormFieldSet legend="Content" name="hero-sections" grid={true}>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-left"
                                value="content-left"
                                type="radio"
                                card={true}
                                image="img/covers/section_content-left.png"
                                label="Content"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-split"
                                value="content-split"
                                type="radio"
                                card={true}
                                image="img/covers/section_content-split.png"
                                label="Split content"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-columns"
                                value="content-columns"
                                type="radio"
                                card={true}
                                image="img/covers/section_columns.png"
                                label="Columns"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-cards"
                                value="content-cards"
                                type="radio"
                                card={true}
                                image="img/covers/section_cards.png"
                                label="Cards"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-timeline"
                                value="content-timeline"
                                type="radio"
                                card={true}
                                image="img/covers/section_timeline.png"
                                label="Timeline"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-timeline-images"
                                value="content-timeline-images"
                                type="radio"
                                card={true}
                                image="img/covers/section_timeline-images.png"
                                label="Images timeline"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-number-big"
                                value="content-number-big"
                                type="radio"
                                card={true}
                                image="img/covers/section_number-big.png"
                                label="Big number"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-numbers"
                                value="content-numbers"
                                type="radio"
                                card={true}
                                image="img/covers/section_numbers.png"
                                label="Numbers"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-accordion"
                                value="content-accordion"
                                type="radio"
                                card={true}
                                image="img/covers/section_accordion.png"
                                label="Accordion"
                                hideControl={true}
                            />
                        </div>
                    </FormFieldSet>
                    <FormFieldSet legend="Graphical" name="hero-sections" grid={true}>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-team"
                                value="content-team"
                                type="radio"
                                card={true}
                                image="img/covers/section_team.png"
                                label="Team"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-gallery"
                                value="content-gallery"
                                type="radio"
                                card={true}
                                image="img/covers/section_gallery.png"
                                label="Gallery"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-video"
                                value="content-video"
                                type="radio"
                                card={true}
                                image="img/covers/section_video.png"
                                label="Video"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-video-featured"
                                value="content-video-featured"
                                type="radio"
                                card={true}
                                image="img/covers/section_video-featured.png"
                                label="Featured video"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-testimonial"
                                value="content-testimonial"
                                type="radio"
                                card={true}
                                image="img/covers/section_testimonial.png"
                                label="Testimonial"
                                hideControl={true}
                            />
                        </div>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-testimonials"
                                value="content-testimonials"
                                type="radio"
                                card={true}
                                image="img/covers/section_testimonials.png"
                                label="Testimonials"
                                hideControl={true}
                            />
                        </div>
                    </FormFieldSet>
                    <FormFieldSet legend="Call to actions" name="hero-sections" grid={true}>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-cta"
                                value="content-cta"
                                type="radio"
                                card={true}
                                image="img/covers/section_cta.png"
                                label="Call to action"
                                hideControl={true}
                            />
                        </div>
                    </FormFieldSet>
                    <FormFieldSet legend="Advanced" name="hero-sections" grid={true}>
                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                            <FormOption
                                name="sections"
                                id="content-custom-code"
                                value="content-custom-code"
                                type="radio"
                                card={true}
                                image="img/covers/section_custom-code.png"
                                label="Custom HTML"
                                caption="Write your own code and save it as a new section model"
                                hideControl={true}
                            />
                        </div>
                    </FormFieldSet>
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
