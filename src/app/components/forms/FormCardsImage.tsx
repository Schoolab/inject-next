import React from "react";
import { FormFieldSet } from "./FormFieldSet";

interface FormCardsImageProps {}

export const FormCardsImage = ({}: FormCardsImageProps) => {
    return (
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
    );
};
