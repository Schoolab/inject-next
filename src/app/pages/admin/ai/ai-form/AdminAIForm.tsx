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
import { aside } from "../../../../../../public/utils/aside";
import { Section } from "@/app/components/sections/Section";
import { FormSelect } from "@/app/forms/select/FormSelect";

export const AdminAIForm = () => {
    // useEffect(() => {
    //     aside();
    // }, []);
    return (
        <Layout showShortcutbarAdmin={true} showShortcutbar={false} shortcutBarExpanded={true} >
            <AppContent sections="separated" showSubnav={false}>
                <Section collapsable={true} collapsableId="Providers" title="Providers" subtitle="Manage your AI providers here to activate and enhance INJECT’s features.">
                    <div className="row card-row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                                    <div className="d-flex flex-column gap-sm">
                                 
                                        <div className="d-flex flex-column gap-none">
                                            <p className="h3 line-clamp-1 align-items-center">       
                                                <span className="icon is-sm mr-2">
                                                    <img src="img/InjectIA.svg" />
                                                </span>
                                                <span>INJECT AI</span>
                                            </p>
                                            <p className="text-navigation">Most integrated solution.</p>
                                        </div>
                                    </div>
                                </div>
                                     <div className="card-links" >
                                    <div className="card-actions">
                                        <Button iconStartName="code" label="Json Config" size="sm" type="default" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                                    <div className="d-flex flex-column gap-sm">
                                 
                                        <div className="d-flex flex-column gap-none">
                                            <p className="h3 line-clamp-1 align-items-center">       
                                                <span className="icon is-sm mr-2">
                                                    <img src="img/OpenIA.svg" />
                                                </span>
                                                <span>OpenIA</span>
                                            </p>
                                            <p className="text-navigation">  Most widely used. Perfect for general discussions, complex customer support, content creation, education and training, and translating.</p>
                                        </div>
                                    </div>
                                </div>
                                     <div className="card-links" >
                                    <div className="card-actions">
                                        <Button iconStartName="lock" label="Secret Key" size="sm" type="default" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                          <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                                    <div className="d-flex flex-column gap-sm">
                                 
                                        <div className="d-flex flex-column gap-none">
                                            <p className="h3 line-clamp-1 align-items-center">       
                                                <span className="icon is-sm mr-2">
                                                    <img src="img/mistral.svg" />
                                                </span>
                                                <span>MistralAI</span>
                                            </p>
                                            <p className="text-navigation">Most cost effective. Perfect for specialized discussions, direct customer support, personalized recommendations, and sentiment analysis.</p>
                                        </div>
                                    </div>
                                </div>
                                     <div className="card-links" >
                                    <div className="card-actions">
                                        <Button iconStartName="lock" label="Secret Key" size="sm" type="default" />
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </Section>
                <Section collapsable={true} collapsableId="Features" title="Features">
                    <div className="row card-row">
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                                    <div className="d-flex flex-column gap-sm">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <div className="custom-control custom-switch">
                                                    <input id="ai_feature_chat" className="custom-control-input featureActivate" type="checkbox" checked disabled value="chat" name="ai_feature_chat" />
                                                    <label className="custom-control-label" htmlFor="ai_feature_chat">
                                                        Enable
                                                     </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gap-none">
                                            <p className="h3 line-clamp-1">Assistant INJECT</p>
                                            <p className="text-navigation">Conversational chatbot integrated into INJECT.</p>
                                        </div>
                                        <div className="item-group gap-2xs">
                                            <FormGroup addClass="cq-12" id="provider" label="Provider">
                                                <FormSelect
                                                    id="Provider-1"
                                                    disabled
                                                    options={[
                                                   
                                                        { label: "INJECT AI", value: "INJECT",selected: true,
                                                            disabled: true, },
                                                    ]}
                                                />
                                            </FormGroup>
                                            <FormGroup addClass="cq-12" id="Assistant" label="Assistant" >
                                                <FormSelect
                                                    id="Assistant-1"
                                                    disabled
                                                    options={[
                                                        {
                                                            label: "-",
                                                            value: "",
                                                            selected: true,
                                                            disabled: true,
                                                        },
                                                    ]}
                                                />
                                            </FormGroup>
                                 
                                        </div>

                                       
                                    </div>
                                </div>
                                     <div className="card-links" >
                                    <div className="card-actions">
                                        <Button disabled iconStartName="code" label="Prompt & Output" size="sm" type="default" />
                                        <Button disabled iconStartName="settings" label="Config" size="sm" type="default" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                                    <div className="d-flex flex-column gap-sm">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <div className="custom-control custom-switch">
                                                    <input id="ai_feature_chat" className="custom-control-input featureActivate" type="checkbox" checked value="chat" name="ai_feature_chat" />
                                                    <label className="custom-control-label" htmlFor="ai_feature_chat">
                                                        Enable
                                                     </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gap-none">
                                            <p className="h3 line-clamp-1">AskAI Text Helper</p>
                                            <p className="text-navigation">AskAI Helper assists you in generating, translating, and optimizing your texts directly within INJECT..</p>
                                        </div>
                                        <div className="item-group gap-2xs">
                                            <FormGroup addClass="cq-12" id="provider" label="Provider">
                                                <FormSelect
                                                    id="Provider-2"
                                                    options={[
                                                        {
                                                            label: "Select a provider",
                                                            value: "",
                                                            selected: true,
                                                            disabled: true,
                                                        },
                                                        { label: "OpenAI", value: "OpenAI" },
                                                        { label: "Mistral", value: "Mistral" },
                                                
                                                    ]}
                                                />
                                            </FormGroup>
                                            <FormGroup addClass="cq-12" id="Assistant" label="Assistant">
                                                <FormSelect
                                                    id="Assistant-2"
                                                    disabled
                                                    options={[
                                                        {
                                                            label: "-",
                                                            value: "",
                                                            selected: true,
                                                            disabled: true,
                                                        },
                                                    ]}
                                                />
                                            </FormGroup>
                                        
                                        </div>

                                    
                                    </div>
                                </div>
                                     <div className="card-links" >
                                    <div className="card-actions">
                                        <Button disabled iconStartName="code" label="Prompt & Output" size="sm" type="default" />
                                        <Button iconStartName="settings" label="Config" size="sm" type="default" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                                    <div className="d-flex flex-column gap-sm">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <div className="custom-control custom-switch">
                                                    <input id="ai_feature_chat" className="custom-control-input featureActivate" type="checkbox" checked disabled value="chat" name="ai_feature_chat" />
                                                    <label className="custom-control-label" htmlFor="ai_feature_chat">
                                                        Enable
                                                     </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gap-none">
                                            <p className="h3 line-clamp-1">AskAI Form Helper </p>
                                            <p className="text-navigation">Helps automatically generate summary content from responses entered in a form.</p>
                                        </div>
                                        <div className="item-group gap-2xs">
                                            <FormGroup addClass="cq-12" id="provider" label="Provider">
                                                <FormSelect
                                                    id="Provider-3"
                                                    options={[
                                                        {
                                                            label: "Select a provider",
                                                            value: "",
                                                            selected: true,
                                                            disabled: true,
                                                        },
                                                        { label: "OpenAI", value: "OpenAI" },
                                                        { label: "Mistral", value: "Mistral" },
                                                    
                                                    ]}
                                                />
                                            </FormGroup>
                                            <FormGroup addClass="cq-12" id="Assistant" label="Assistant">
                                                <FormSelect
                                                    id="Assistant-3"
                                                    disabled
                                                    options={[
                                                        {
                                                            label: "-",
                                                            value: "",
                                                            selected: true,
                                                            disabled: true,
                                                        },
                                                    ]}
                                                />
                                            </FormGroup>
                                        </div>

                                        
                                    </div>
                                </div>
                                     <div className="card-links" >
                                    <div className="card-actions">
                                        <Button disabled iconStartName="code" label="Prompt & Output" size="sm" type="default" />
                                        <Button disabled iconStartName="settings" label="Config" size="sm" type="default" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                                    <div className="d-flex flex-column gap-sm">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <div className="custom-control custom-switch">
                                                    <input id="ai_feature_chat" className="custom-control-input featureActivate" type="checkbox" checked disabled value="chat" name="ai_feature_chat" />
                                                    <label className="custom-control-label" htmlFor="ai_feature_chat">
                                                        Enable
                                                     </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gap-none">
                                            <p className="h3 line-clamp-1">AskAI Transcriptions</p>
                                            <p className="text-navigation">Automatically transcribes audio to text.</p>
                                        </div>
                                        <div className="item-group gap-2xs">
                                            <FormGroup addClass="cq-12" id="provider" label="Provider">
                                                <FormSelect
                                                    id="Provider-4"
                                                    disabled
                                                    options={[
                                                     
                                                      
                                                        { label: "Mistral", value: "Mistral",   selected: true,
                                                            disabled: true, },
                                                      
                                                    ]}
                                                />
                                            </FormGroup>
                                            <FormGroup addClass="cq-12" id="Assistant" label="Assistant">
                                                <FormSelect
                                                    id="Assistant-4"
                                                    disabled
                                                    options={[
                                                        {
                                                            label: "-",
                                                            value: "",
                                                            selected: true,
                                                            disabled: true,
                                                        },
                                                    ]}
                                                />
                                            </FormGroup>
                                        
                                        </div>

                                    </div>
                                </div>
                                     <div className="card-links" >
                                    <div className="card-actions">
                                        <Button disabled iconStartName="code" label="Prompt & Output" size="sm" type="default" />
                                        <Button disabled iconStartName="settings" label="Config" size="sm" type="default" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos d-flex flex-column align-items-stretch gap-md">
                                    <div className="d-flex flex-column gap-sm">
                                        <div className="form-row">
                                            <div className="form-group">
                                                <div className="custom-control custom-switch">
                                                    <input id="ai_feature_chat" className="custom-control-input featureActivate" type="checkbox" checked  value="chat" name="ai_feature_chat" />
                                                    <label className="custom-control-label" htmlFor="ai_feature_chat">
                                                        Enable
                                                     </label>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex flex-column gap-none">
                                            <p className="h3 line-clamp-1">AskAI Matching Mentoring</p>
                                            <p className="text-navigation">Enables  AI-powered suggestions for matching experts with projects..</p>
                                        </div>
                                        <div className="item-group gap-2xs">
                                            <FormGroup addClass="cq-12" id="provider" label="Provider">
                                                <FormSelect
                                                    id="Provider-5"
                                                    options={[
                                                        {
                                                            label: "Select a provider",
                                                            value: "",
                                                            selected: true,
                                                            disabled: true,
                                                        },
                                                        { label: "OpenAI", value: "OpenAI" },
                                                        { label: "Mistral", value: "Mistral" },
                                                      
                                                    ]}
                                                />
                                            </FormGroup>
                                            <FormGroup addClass="cq-12" id="Assistant" label="Assistant">
                                                <FormSelect
                                                    id="Assistant-5"
                                                    options={[
                                                        {
                                                            label: "Select an assistant",
                                                            value: "",
                                                            selected: true,
                                                            disabled: true,
                                                        },
                                                    ]}
                                                />
                                            </FormGroup>
                                            <p className="d-flex flex-wrap gap-2xs small m-none">
                                                <mark className="font-weight-normal">
                                                    <span className="icon is-xs icon-plus-circle"></span> <a href="">Create an assistant</a>
                                                </mark>
                                            </p>
                                        </div>

                                        <div className="d-flex justify-content-end gap-xs">
                                           
                                        </div>
                                    </div>
                                </div>
                               <div className="card-links" >
                                    <div className="card-actions">
                                        <Button iconStartName="code" label="Prompt & Output" size="sm" type="default" />
                                        <Button iconStartName="settings" label="Config" size="sm" type="default" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

               
                <div className="application-section">
        <h3 className="application-section--title mb-0 " data-toggle="collapse" data-target="#context" aria-expanded="true">
                <span className="title-container">Configuration</span>
                <span className="icon icon-chevron-right ml-auto"></span>
        </h3>
        <div className=" collapse show" id="context">
                <p className="mb-5"> Provide the AI with comprehensive information about your organization to enhance its ability to answer questions and offer improved recommendations. </p>
                <div className="contextFormContainer">
                        <form name="fields_configuration_form" method="post" action="/rest/ai/context/83a93717-1382-49f2-bd0e-d78bb5752627"><input type="hidden" name="_method" value="PATCH" />
                                <div id="fields_configuration_form">
                                        <div className="form-group"> 
                                            <label className="checkbox-custom font-weight-bold" htmlFor="fields_configuration_form_textValue">Context</label>
                                                <small id="fields_configuration_form_textValue_help" className="form-text text-muted">To provide context to an AI agent, include detailed descriptions of the subjects, matter, relevant examples, and any specific goals or outcomes you want to achieve.</small> 
                                                <textarea id="fields_configuration_form_textValue" name="fields_configuration_form[textValue]" placeholder="e.g., Expertises and History"  aria-describedby="fields_configuration_form_textValue_help" className="form-control" ></textarea>
                                        </div>
                                        <fieldset className="form-group">
                                                <legend className="active checkbox-custom font-weight-bold col-form-label">Tone of voice</legend>
                                                <div id="fields_configuration_form_tone" data-display="flex-fill"  data-force-blank="">
                                                        <div className="d-flex flex-column flex-lg-row gap-xs">
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_tone_0" name="fields_configuration_form[tone]" data-display="flex-fill"  data-force-blank="" value="0" checked />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_tone_0">Friendly</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_tone_1" name="fields_configuration_form[tone]" data-display="flex-fill"  data-force-blank="" value="1" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_tone_1">Professional</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_tone_2" name="fields_configuration_form[tone]" data-display="flex-fill"  data-force-blank="" value="2" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_tone_2">Persuasive</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_tone_3" name="fields_configuration_form[tone]" data-display="flex-fill"  data-force-blank="" value="3" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_tone_3">Informative</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_tone_4" name="fields_configuration_form[tone]" data-display="flex-fill"  data-force-blank="" value="4" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_tone_4">Direct</label>
                                                                </div>
                                                        </div>
                                                </div>
                                        </fieldset>
                                        <fieldset className="form-group">
                                                <legend className="active checkbox-custom font-weight-bold col-form-label">Audience</legend>
                                                <div id="fields_configuration_form_audience" data-display="flex-fill"  data-force-blank="">
                                                        <div className="d-flex flex-column flex-lg-row gap-xs">
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_audience_0" name="fields_configuration_form[audience]" data-display="flex-fill"  data-force-blank="" value="0" checked />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_audience_0">Corporate</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_audience_1" name="fields_configuration_form[audience]" data-display="flex-fill"  data-force-blank="" value="1" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_audience_1">Startup</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_audience_2" name="fields_configuration_form[audience]" data-display="flex-fill"  data-force-blank="" value="2" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_audience_2">Academic</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_audience_3" name="fields_configuration_form[audience]" data-display="flex-fill"  data-force-blank="" value="3" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_audience_3">Associations</label>
                                                                </div>
                                                        </div>
                                                </div>
                                        </fieldset>
                                        <fieldset className="form-group">
                                                <legend className="active checkbox-custom font-weight-bold col-form-label">Language</legend>
                                                <div id="fields_configuration_form_language" data-display="flex-fill"  data-force-blank="">
                                                        <div className="d-flex flex-column flex-lg-row gap-xs">
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_language_0" name="fields_configuration_form[language]" data-display="flex-fill"  data-force-blank="" value="0" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_language_0">Simple</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_language_1" name="fields_configuration_form[language]" data-display="flex-fill"  data-force-blank="" value="1" checked />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_language_1">Technical</label>
                                                                </div>
                                                                <div className="custom-control custom-control-card custom-radio flex-fill">
                                                                        <input type="radio" className="custom-control-input" id="fields_configuration_form_language_2" name="fields_configuration_form[language]" data-display="flex-fill"  data-force-blank="" value="2" />
                                                                        <label className="checkbox-custom custom-control-label custom-control-label" htmlFor="fields_configuration_form_language_2">Inclusive</label>
                                                                </div>
                                                        </div>
                                                </div>
                                        </fieldset> <input type="hidden" id="fields_configuration_form__token" name="fields_configuration_form[_token]" value="3aeec692681262c635a54c6da.mB-IHfo69zfLJWzt76I7ZcGqSCc_Q2v8tNkrh1hNn8Q.13GxL7tsgXG6HBalq9tsB_j8fmhFezyN65Fp6WkY5Yf0JsMlnnS0eIxwDw" />
                                </div>
                                <div className="d-flex justify-content-end">
                                        <button type="submit" className="btn btn-primary">Save</button>
                                </div>
                        </form>
                </div>
        </div>
</div>
            </AppContent>
        </Layout>
    );
};
