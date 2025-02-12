import React from "react";
import { Button } from "@/app/components/Button";
import { FormFieldSet } from "@/app/forms/FormFieldSet";

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
                    <FormFieldSet legend="Hero" name="hero-sections">
                        <div className="form-options grid gap-xs" id="id-1" aria-describedby="exemple_help">
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-0" name="form1" className="custom-control-input" defaultValue={0} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-0">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_hero-left.png" alt="" />
                                        </picture>
                                        <span>Hero (image left)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-2" name="form1" className="custom-control-input" defaultValue={2} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-2">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_hero-right.png" alt="" />
                                        </picture>
                                        <span>Hero (image right)</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-3" name="form1" className="custom-control-input" defaultValue={3} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-3">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_hero-center.png" alt="" />
                                        </picture>
                                        <span>Hero (centered)</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </FormFieldSet>
                    <FormFieldSet legend="Content" name="hero-sections">
                        <div className="form-options grid gap-xs" id="id-1" aria-describedby="exemple_help">
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-4" name="form1" className="custom-control-input" defaultValue={4} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-4">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_content-left.png" alt="" />
                                        </picture>
                                        <span>Content</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-5" name="form1" className="custom-control-input" defaultValue={5} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-5">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_content-split.png" alt="" />
                                        </picture>
                                        <span>Split content</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-6" name="form1" className="custom-control-input" defaultValue={6} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-6">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_columns.png" alt="" />
                                        </picture>
                                        <span>Columns</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-7" name="form1" className="custom-control-input" defaultValue={7} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-7">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_cards.png" alt="" />
                                        </picture>
                                        <span>Cards</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-8" name="form1" className="custom-control-input" defaultValue={8} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-8">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_timeline.png" alt="" />
                                        </picture>
                                        <span>Timeline</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-9" name="form1" className="custom-control-input" defaultValue={9} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-9">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_timeline-images.png" alt="" />
                                        </picture>
                                        <span>Images timeline</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-10" name="form1" className="custom-control-input" defaultValue={10} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-10">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_number-big.png" alt="" />
                                        </picture>
                                        <span>Big number</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-11" name="form1" className="custom-control-input" defaultValue={11} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-11">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_numbers.png" alt="" />
                                        </picture>
                                        <span>Numbers</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-12" name="form1" className="custom-control-input" defaultValue={12} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-12">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_accordion.png" alt="" />
                                        </picture>
                                        <span>Accordion</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </FormFieldSet>
                    <FormFieldSet legend="Graphical" name="hero-sections">
                        <div className="form-options grid gap-xs" id="id-1" aria-describedby="exemple_help">
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-13" name="form1" className="custom-control-input" defaultValue={13} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-13">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_team.png" alt="" />
                                        </picture>
                                        <span>Team</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-14" name="form1" className="custom-control-input" defaultValue={14} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-14">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_gallery.png" alt="" />
                                        </picture>
                                        <span>Gallery</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-15" name="form1" className="custom-control-input" defaultValue={15} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-15">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_video.png" alt="" />
                                        </picture>
                                        <span>Video</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-16" name="form1" className="custom-control-input" defaultValue={16} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-16">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_video-featured.png" alt="" />
                                        </picture>
                                        <span>Featured video</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-17" name="form1" className="custom-control-input" defaultValue={17} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-17">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_testimonial.png" alt="" />
                                        </picture>
                                        <span>Testimonial</span>
                                    </label>
                                </div>
                            </div>
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-18" name="form1" className="custom-control-input" defaultValue={18} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-18">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_testimonials.png" alt="" />
                                        </picture>
                                        <span>Testimonials</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </FormFieldSet>
                    <FormFieldSet legend="Call to actions" name="hero-sections">
                        <div className="form-options grid gap-xs" id="id-1" aria-describedby="exemple_help">
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-19" name="form1" className="custom-control-input" defaultValue={19} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-19">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_cta.png" alt="" />
                                        </picture>
                                        <span>Call to action</span>
                                    </label>
                                </div>
                            </div>
                        </div>
                    </FormFieldSet>
                    <FormFieldSet legend="Advanced" name="hero-sections">
                        <div className="form-options grid gap-xs" id="id-1" aria-describedby="exemple_help">
                            <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                <div className="flex-fill mb-lg-0 custom-control custom-control-card custom-radio custom-control-hidden">
                                    <input type="radio" id="id-20" name="form1" className="custom-control-input" defaultValue={20} />
                                    <label className="custom-control-label text-nowrap d-flex flex-column gap-xs" htmlFor="id-20" aria-describedby="hint-id-20">
                                        <picture className="border rounded-sm">
                                            <img role="presentation" src="img/covers/section_custom-code.png" alt="" />
                                        </picture>
                                        <span>Custom HTML</span>
                                    </label>
                                    <small id="hint-id-20" className="form-text text-muted">Write your own code and save it as a new section model</small>
                                </div>
                            </div>
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
