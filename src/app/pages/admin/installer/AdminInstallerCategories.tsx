import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Stepper, StepType } from "@/app/components/Stepper";
import { Section } from "@/app/components/Section";
import { FormGroup } from "@/app/components/forms/FormGroup";
import { FormFieldSet } from "@/app/components/forms/FormFieldSet";
import { FormOption } from "@/app/components/forms/FormOption";
import { FormSelect } from "@/app/components/forms/FormSelect";

const steps: StepType[] = [
    {
      title: "Basic info",
      description: "Completed",
      status: "completed",
      link: "/?path=/story/pages-admin-installer--basic-info",
      current: false,
    },
    {
      title: "Categories",
      description: "In progress",
      status: "in-progress",
      current: true,
    },
    {
      title: "Managers",
      description: "Not completed",
      status: "not-completed",
      current: false,
    },
    {
      title: "Features",
      description: "Not completed",
      status: "not-completed",
      current: false,
    }
  ];

export const AdminInstallerCategories = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent showSubnav={false}>
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 ">
                        <div className="mb-7 py-5 py-lg-0">
                            <div className="mb-5">
                                <h2>Create a new program</h2>
                                <p className="text-muted">Fill the information below and watch how it will appear to people joining it.</p>
                            </div>
                            <Stepper steps={steps} />
                        </div>

                        <Section title="Categories" subtitle="Choose the impact and the categories of the program. It will be used for insights.">
                            <fieldset className="form-group">
                                <div id="ChallengeDefaultForm_defaultFormModel_categories">
                                    <FormFieldSet id="impact" legend="Impact" hint="Choose the the case that best describes the program." grid={true}>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="impact"
                                                id="no-impact"
                                                value="no-impact"
                                                type="radio"
                                                card={true}
                                                label="No impact"
                                                caption="The program has no social or environmental impact."
                                                defaultChecked={true}
                                                icon="impact-none"
                                                labelClass="flex-column gap-3xs"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="impact"
                                                id="impact-not-obvious"
                                                value="impact-not-obvious"
                                                type="radio"
                                                card={true}
                                                label="Impact not obvious"
                                                caption="The program has an impact, but it is not obvious."
                                                icon="impact-not-obvious"
                                                labelClass="flex-column gap-3xs"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="impact"
                                                id="impact-push"
                                                value="impact-push"
                                                type="radio"
                                                card={true}
                                                label="Impact push"
                                                caption="The program has an impact, but not initially."
                                                icon="impact-push"
                                                labelClass="flex-column gap-3xs"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="impact"
                                                id="impact-native"
                                                value="impact-native"
                                                type="radio"
                                                card={true}
                                                label="Impact native"
                                                caption="The program has an impact and is part of the core."
                                                icon="impact-native"
                                                labelClass="flex-column gap-3xs"
                                            />
                                        </div>
                                    </FormFieldSet>

                                    <FormFieldSet id="verticals" legend="Verticals" grid={true}>
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <FormOption
                                                name="verticals"
                                                id="plastic"
                                                value="plastic"
                                                type="checkbox"
                                                card={true}
                                                icon="vertical-plastic"
                                                label="Plastic"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <FormOption
                                                name="verticals"
                                                id="food"
                                                value="food"
                                                type="checkbox"
                                                card={true}
                                                icon="vertical-food"
                                                label="Food"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <FormOption
                                                name="verticals"
                                                id="dei"
                                                value="dei"
                                                type="checkbox"
                                                card={true}
                                                icon="vertical-dei"
                                                label="DEI"
                                            />
                                        </div>
                                    </FormFieldSet>

                                    <FormFieldSet name="ecosystems" legend="Ecosystems" grid={true}>
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <FormOption
                                                name="ecosystems"
                                                id="ecosystem-students"
                                                value="students"
                                                type="checkbox"
                                                card={true}
                                                label="Students"
                                                icon="ecosystem-student"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <FormOption
                                                name="ecosystems"
                                                id="ecosystem-startups"
                                                value="startups"
                                                type="checkbox"
                                                card={true}
                                                label="Startups"
                                                icon="ecosystem-startups"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6 g-col-md-4">
                                            <FormOption
                                                name="ecosystems"
                                                id="ecosystem-corporate"    
                                                value="corporate"
                                                type="checkbox"
                                                card={true}
                                                label="Corporate"
                                                icon="ecosystem-corporate"
                                            />
                                        </div>
                                    </FormFieldSet>

                                    <FormFieldSet id="sdgs" legend="SDGs" hint={<>Choose which SDGs this program has an impact on. <a href='https://sdgs.un.org/goals' target='_blank'>Open full SDGs list</a></>} grid={true}>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-1"
                                                value="sdg-1"
                                                type="checkbox"
                                                card={true}
                                                label="No poverty"
                                                sdg="1"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-2"
                                                value="sdg-2"
                                                type="checkbox"
                                                card={true}
                                            label="Zero hunger"
                                                sdg="2"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-3"
                                                value="sdg-3"
                                                type="checkbox"
                                                card={true}
                                                label="Good health and well being"
                                                sdg="3"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-4"
                                                value="sdg-4"
                                                type="checkbox"
                                                card={true}
                                                label="Quality education"
                                                sdg="4"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-5"
                                                value="sdg-5"
                                                type="checkbox"
                                                card={true}
                                                label="Gender equality"
                                                sdg="5"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-6"
                                                value="sdg-6"
                                                type="checkbox"
                                                card={true}
                                                label="Clean water and sanitation"
                                                sdg="6"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-7"
                                                value="sdg-7"
                                                type="checkbox"
                                                card={true}
                                                label="Affordable and clean energy"
                                                sdg="7"
                                            />  
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-8"
                                                value="sdg-8"
                                                type="checkbox"
                                                card={true}
                                                label="Decent work and economic growth"
                                                sdg="8"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-9"
                                                value="sdg-9"
                                                type="checkbox"
                                                card={true}
                                                label="Industry innovation and infrastructure"
                                                sdg="9"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-10"
                                                value="sdg-10"
                                                type="checkbox"
                                                card={true}
                                                label="Reduced inequalities"
                                                sdg="10"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-11"
                                                value="sdg-11"
                                                type="checkbox"
                                                card={true}
                                                label="Sustainable cities and communities"
                                                sdg="11"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-12"
                                                value="sdg-12"
                                                type="checkbox"
                                                card={true}
                                                label="Responsable consumption and production"
                                                sdg="12"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-13"
                                                value="sdg-13"
                                                type="checkbox"
                                                card={true}
                                                label="Climate action"
                                                sdg="13"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-14"
                                                value="sdg-14"
                                                type="checkbox"
                                                card={true}
                                                label="Life below water"
                                                sdg="14"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-15"
                                                value="sdg-15"
                                                type="checkbox"
                                                card={true}
                                                label="Life on land"
                                                sdg="15"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-16"
                                                value="sdg-16"
                                                type="checkbox"
                                                card={true}
                                                label="Peace, justice and strong institutions"
                                                sdg="16"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="sdgs"
                                                id="sdg-17"
                                                value="sdg-17"
                                                type="checkbox"
                                                card={true}
                                                label="Partnerships for the goals"
                                                sdg="17"
                                            />
                                        </div>
                                    </FormFieldSet>

                                    {/* <fieldset className="form-group">
                                        <legend className="checkbox-custom font-weight-bold col-form-label">SDGs</legend>
                                        <div id="ChallengeDefaultForm_defaultFormModel_categories_13" data-display="custom">
                                            <div className="d-flex flex-wrap">
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_0" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={14} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_0" title="1 - No poverty">
                                                        <img src="img/odd/F-WEB-Goal-01.png" alt="1 - No poverty" title="1 - No poverty" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_1" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={15} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_1" title="2 - Zero hunger">
                                                        <img src="img/odd/F-WEB-Goal-02.png" alt="2 - Zero hunger" title="2 - Zero hunger" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_2" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={16} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_2" title="3 - Good health and well-being">
                                                        <img src="img/odd/F-WEB-Goal-03.png" alt="3 - Good health and well-being" title="3 - Good health and well-being" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_3" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={17} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_3" title="4 - Quality education">
                                                        <img src="img/odd/F-WEB-Goal-04.png" alt="4 - Quality education" title="4 - Quality education" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_4" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={18} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_4" title="5 - Gender equality">
                                                        <img src="img/odd/F-WEB-Goal-05.png" alt="5 - Gender equality" title="5 - Gender equality" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_5" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={19} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_5" title="6 - Clean water and sanitation">
                                                        <img src="img/odd/F-WEB-Goal-06.png" alt="6 - Clean water and sanitation" title="6 - Clean water and sanitation" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_6" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={20} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_6" title="7 - Affordable and clean energy">
                                                        <img src="img/odd/F-WEB-Goal-07.png" alt="7 - Affordable and clean energy" title="7 - Affordable and clean energy" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_7" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={21} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_7" title="8 - Decent work and economic growth">
                                                        <img src="img/odd/F-WEB-Goal-08.png" alt="8 - Decent work and economic growth" title="8 - Decent work and economic growth" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_8" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={22} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_8" title="9 - Industry, innovation and infrastructure">
                                                        <img src="img/odd/F-WEB-Goal-09.png" alt="9 - Industry, innovation and infrastructure" title="9 - Industry, innovation and infrastructure" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_9" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={23} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_9" title="10 - Reduced inequalities">
                                                        <img src="img/odd/F-WEB-Goal-10.png" alt="10 - Reduced inequalities" title="10 - Reduced inequalities" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_10" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={24} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_10" title="11 - Sustainable cities and communities">
                                                        <img src="img/odd/F-WEB-Goal-11.png" alt="11 - Sustainable cities and communities" title="11 - Sustainable cities and communities" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_11" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={25} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_11" title="12 - Responsible consumption and production">
                                                        <img src="img/odd/F-WEB-Goal-12.png" alt="12 - Responsible consumption and production" title="12 - Responsible consumption and production" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_12" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={26} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_12" title="13 - Climate action">
                                                        <img src="img/odd/F-WEB-Goal-13.png" alt="13 - Climate action" title="13 - Climate action" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_13" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={27} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_13" title="14 - Life below water">
                                                        <img src="img/odd/F-WEB-Goal-14.png" alt="14 - Life below water" title="14 - Life below water" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_14" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={28} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_14" title="15 - Life on land">
                                                        <img src="img/odd/F-WEB-Goal-15.png" alt="15 - Life on land" title="15 - Life on land" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_15" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={29} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_15" title="16 - Peace, justice and strong institutions">
                                                        <img src="img/odd/F-WEB-Goal-16.png" alt="16 - Peace, justice and strong institutions" title="16 - Peace, justice and strong institutions" />
                                                    </label>
                                                </div>
                                                <div className="custom-label custom-label--sdg">
                                                    <input type="checkbox" id="ChallengeDefaultForm_defaultFormModel_categories_13_16" name="ChallengeDefaultForm[defaultFormModel][categories][13][]" className="d-none" defaultValue={30} />
                                                    <label className="d-flex flex-column p-1" htmlFor="ChallengeDefaultForm_defaultFormModel_categories_13_16" title="17 - Partnerships for the goals">
                                                        <img src="img/odd/F-WEB-Goal-17.png" alt="17 - Partnerships for the goals" title="17 - Partnerships for the goals" />
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </fieldset> */}

                                    <FormFieldSet name="use-case" legend="Use case" grid={true}>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-incubator"
                                                value="incubator"
                                                type="radio"
                                                card={true}
                                                label="Incubator & Entrepreneurship"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-innovation-hub"
                                                value="innovation-hub"
                                                type="radio"
                                                card={true}
                                                label="Innovation hub & Community"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-hackathon"
                                                value="hackathon"
                                                type="radio"
                                                card={true}
                                                label="Hackathon, Bootcamp & Project acceleration"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-learning-expedition"
                                                value="learning-expedition"
                                                type="radio"
                                                card={true}
                                                label="Learning Expedition"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-learning"
                                                value="learning"
                                                type="radio"
                                                card={true}
                                                label="Learning"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-workshop"
                                                value="workshop"
                                                type="radio"
                                                card={true}
                                                label="Workshop"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-startup-challenge"
                                                value="startup-challenge"
                                                type="radio"
                                                card={true}
                                                label="Startup & Student challenge"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-strategic-thinking"
                                                value="strategic-thinking"
                                                type="radio"
                                                card={true}
                                                label="Strategic thinking, Framework"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-inject"
                                                value="inject"
                                                type="radio"
                                                card={true}
                                                label="Inject"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-leadership"
                                                value="leadership"
                                                type="radio"
                                                card={true}
                                                label="Leadership, Talent & Intrapreneurship program"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="use-case"
                                                id="use-case-other"
                                                value="other"
                                                type="radio"
                                                card={true}
                                                label="Other"
                                            />
                                        </div>
                                    </FormFieldSet>

                                    <FormFieldSet name="capability" legend="Capability" grid={true}>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="capability"
                                                id="capability-education"
                                                value="education"
                                                type="radio"
                                                card={true}
                                                label="Education"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="capability"
                                                id="capability-entrepreneurship"
                                                value="entrepreneurship"
                                                type="radio"
                                                card={true}
                                                label="Entrepreneurship"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="capability"
                                                id="capability-innovation"
                                                value="innovation"
                                                type="radio"
                                                card={true}
                                                label="Innovation"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="capability"
                                                id="capability-inject"
                                                value="inject"
                                                type="radio"
                                                card={true}
                                                label="Inject"
                                            />
                                        </div>
                                        <div className="g-col-12 g-col-sm-6">
                                            <FormOption
                                                name="capability"
                                                id="capability-campus"
                                                value="campus"
                                                type="radio"
                                                card={true}
                                                label="Campus"
                                            />
                                        </div>
                                    </FormFieldSet>

                                    <FormGroup id="business-line" label="Business line">
                                        <FormSelect
                                            id="business-line"
                                            options={[
                                                {
                                                    label: "Select a business line",
                                                    value: "",
                                                    selected: true,
                                                    disabled: true,
                                                },
                                                {
                                                    label: "Agriculture and Food Production",
                                                    value: "agriculture-and-food-production",
                                                },
                                                {
                                                    label: "Corporate services",
                                                    value: "corporate-services",
                                                },
                                                {
                                                    label: "Education",
                                                    value: "education",
                                                },
                                                {
                                                    label: "Energy and Utilities",
                                                    value: "energy-and-utilities",
                                                },
                                                {
                                                    label: "Entertainment",
                                                    value: "entertainment",
                                                },
                                                {
                                                    label: "Financial Services",
                                                    value: "financial-services",
                                                },
                                                {
                                                    label: "Healthcare and Life Sciences",
                                                    value: "healthcare-and-life-sciences",
                                                },
                                                {
                                                    label: "Hospitality and Tourism",
                                                    value: "hospitality-and-tourism",
                                                },
                                                {
                                                    label: "Manufacturing",
                                                    value: "manufacturing",
                                                },
                                                {
                                                    label: "Media",
                                                    value: "media",
                                                },
                                                {
                                                    label: "Mobility and Logistics",
                                                    value: "mobility-and-logistics",
                                                },
                                                {
                                                    label: "Public Administration and Government Services",
                                                    value: "public-administration-and-government-services",
                                                },
                                                {
                                                    label: "Real Estate and Construction",
                                                    value: "real-estate-and-construction",
                                                },
                                                {
                                                    label: "Retail and Consumer Goods",
                                                    value: "retail-and-consumer-goods",
                                                },
                                                {
                                                    label: "Software and Technology",
                                                    value: "software-and-technology",
                                                },
                                                {
                                                    label: "Telecommunications",
                                                    value: "telecommunications",
                                                },
                                                {
                                                    label: "Other",
                                                    value: "other",
                                                }
                                            ]}
                                        />
                                    </FormGroup>
                                </div>
                            </fieldset>
                            <div className="d-flex justify-content-end">
                                <button type="submit" className="btn btn-default btn-lg mr-3">
                                    Previous
                                </button>
                                <button type="submit" className="btn btn-primary btn-lg">
                                    Next Step
                                </button>
                            </div>
                        </Section>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
