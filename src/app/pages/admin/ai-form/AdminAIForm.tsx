import React from "react";
// import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/buttons/Button";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Alert } from "@/app/components/alerts/Alert";
import { AsideAIChat } from "@/app/components/asides/examples/AsideAIChat";
import { aside } from "../../../../../public/utils/aside";

export const AdminAIForm = () => {
    // useEffect(() => {
    //     aside();
    // }, []);
    return (
        <Layout sideBar="Admin" showShortcutbar={false}>
            <AppContent sections="transparent" showSubnav={false}>
                <div className="row">
                    <div className="col-12">
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#AIProvider" aria-expanded="true">
                                <span className="application-section--title-content">AI Provider</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="AIProvider">
                                <p className="mb-5">Select the AI provider that best aligns with your organization's requirements.</p>
                                <div className="form-row">
                                    <fieldset className="form-group">
                                        <legend className="label">Providers</legend>
                                        <small id="exemple_help" className="form-text text-muted">
                                            An AI provider offers technologies and services that help businesses automate tasks, analyze data, and enhance decision-making.
                                        </small>
                                        <div className="form-options" id="radio" aria-describedby="exemple_help">
                                            <div className="custom-control custom-control-card custom-radio">
                                                <div className="d-flex">
                                                    <div className="input-wrapper">
                                                        <input type="radio" id="radio_0" name="radio" className="custom-control-input" defaultValue={0} defaultChecked />
                                                        <label className="custom-control-label" htmlFor="radio_0" aria-describedby="exemple_help_0">
                                                            <span className="icon is-sm"><img src="img/OpenIA.svg" /></span>
                                                            OpenAI
                                                        </label>
                                                        <small id="exemple_help_0" className="form-text text-muted ml-7">
                                                            Most widely used. Perfect for general discussions, complex customer support, content creation, education and training, and translating.
                                                        </small>
                                                    </div>
                                                    <div className="ml-auto z-2 d-flex gap-xs align-items-start">
                                                        <div className="btn btn-default btn-sm  "><span className="icon icon-help-circle"></span></div>
                                                        <div className="btn btn-default btn-sm  "><span className="icon icon-cog"></span>API Keys</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-control-card custom-radio">
                                                <div className="d-flex">
                                                    <div className="input-wrapper">
                                                        <input type="radio" id="radio_1" name="radio" className="custom-control-input" defaultValue={0} defaultChecked />
                                                        <label className="custom-control-label" htmlFor="radio_1" aria-describedby="exemple_help_1">
                                                            <span className="icon is-sm"> <img src="img/mistral.svg" /></span>
                                                            MistralAI
                                                        </label>
                                                        <small id="exemple_help_1" className="form-text text-muted ml-7">
                                                            Most cost effective. Perfect for specialized discussions, direct customer support, personalized recommendations, and sentiment analysis.
                                                        </small>
                                                    </div>
                                                    <div className="ml-auto z-2 d-flex gap-xs align-items-start">
                                                        <div className="btn btn-default btn-sm  "><span className="icon icon-help-circle"></span></div>
                                                        <div className="btn btn-default btn-sm  "><span className="icon icon-cog"></span>API Keys</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="custom-control custom-control-card custom-radio">
                                                <div className="d-flex">
                                                    <div className="input-wrapper">
                                                        <input type="radio" id="radio_3" name="radio" className="custom-control-input" defaultValue={0} defaultChecked />
                                                        <label className="custom-control-label" htmlFor="radio_3" aria-describedby="exemple_help_3">
                                                            <span className="icon is-sm"> <img src="img/InjectIA.svg" /></span>
                                                            InjectAI
                                                        </label>
                                                        <small id="exemple_help_3" className="form-text text-muted ml-7">
                                                            Most integrated solution. Adapted to Inject but in construction.
                                                        </small>
                                                    </div>
                                                    <div className="ml-auto z-2 d-flex gap-xs align-items-start">
                                                        <div className="btn btn-default btn-sm  "><span className="icon icon-help-circle"></span></div>
                                                        <div className="btn btn-default btn-sm  "><span className="icon icon-cog"></span>API Keys</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset>
                                </div>
                                <div className="form-row"></div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#PublicPage" aria-expanded="true">
                                <span className="application-section--title-content">Configuration</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="PublicPage">
                                <p className="mb-5">Provide the AI with comprehensive information about your organization to enhance its ability to answer inquiries and offer improved recommendations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
