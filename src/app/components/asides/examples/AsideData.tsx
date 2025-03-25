import React, { useState, useEffect } from "react";
import { Aside } from "@/app/components/asides/Aside";
import { AsideHeader } from "@/app/components/asides/AsideHeader";
import { PaginationProps } from "@/app/components/pagination/Pagination";
import { AsideBody } from "@/app/components/asides/AsideBody";
import { Button } from "@/app/components/buttons/Button";
import { Icon } from "@/app/components/icons/Icon";
import { DataList } from "@/app/content/data/DataList";
import { DataListItem } from "@/app/content/data/DataListItem";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Badges } from "@/app/components/badges/Badges";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Stack } from "@/app/components/avatars/Stack";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { FormInput } from "@/app/forms/input/FormInput";
import { ItemResource } from "@/app/components/items/ItemResource";
import { AsideFooter } from "../AsideFooter";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { FormOption } from "@/app/forms/option/FormOption";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";
import { FormSelectMultiple } from "@/app/forms/select-multiple/FormSelectMultiple";
interface AsideDataProps {
    initialTab?: string;
    pagination?: PaginationProps;
}

export const AsideData: React.FC<AsideDataProps> = ({
    initialTab = "info",
    pagination = {
        currentPage: 1,
        totalPages: 9,
        prevLink: "#",
        nextLink: "#",
        onPageChange: () => {},
    },
}) => {
    const [activeTab, setActiveTab] = useState(initialTab || "info");

    useEffect(() => {
        setActiveTab(initialTab || "info");
    }, [initialTab]);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <Aside>
            <AsideHeader
                tabs={[
                    {
                        label: "Info",
                        href: "#",
                        isActive: true,
                        id: "info-tab",
                        dataToggle: "tab",
                        dataTarget: "#info",
                        role: "tab",
                        ariaControls: "info",
                        ariaSelected: true,
                    },
                    {
                        label: "Edit",
                        href: "#",
                        isActive: false,

                        id: "edit-tab",
                        dataToggle: "tab",
                        dataTarget: "#edit",
                        role: "tab",
                        ariaControls: "edit",
                        ariaSelected: false,
                    },
                ]}
                showManage={true}
                pagination={pagination}
            />
            <div className="tab-content h-100 overflow-auto" id="dataTabsContent">
                <div id="info" role="tabpanel" aria-labelledby="info-tab" className={`tab-pane h-100 fade ${activeTab === "info" ? "active show" : ""}`}>
                    <AsideBody addClass="d-flex flex-column gap-md">
                        <DataList>
                            <DataListItem label="Name">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span>Impact Innovators</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Customer">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span>Schoolab</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Business line">
                                <dd>
                                    <span>Real Estate and construction</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Timeline">
                                <dd>
                                    <span>Feb 12, 2025 - March 12, 2025 </span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Pipedrive ID" tooltip="You can find an item’s system ID in two places: the URL after opening an item in Pipedrive or in the list view by adding the ID column.">
                                <dd className="d-flex flex-row gap-none">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span className="text-muted">#</span>
                                        <span>42986</span>
                                        <Icon name="new-tab" addClass="text-muted" />
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Budget">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span>100k</span>
                                        <Icon name="new-tab" addClass="text-muted" />
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Status">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Tag label="Open" iconName="status-filled" status="open" /> <Tag label="Public" iconName="visibility" status="open" />
                                </dd>
                            </DataListItem>
                            <DataListItem label="Customer contact">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-julien.jpeg" />
                                        <span>John Doe</span>
                                    </Button>
                                </dd>
                            </DataListItem>

                            <DataListItem label="Owners">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-terence.jpeg" />
                                        <span>Terence Irving</span>
                                    </Button>
                                </dd>
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-alexandra.jpeg" />
                                        <span>Alexandra Jolly</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Managers">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Stack>
                                            <Avatar size="xs" image="img/avatar-pierre.jpeg" />
                                            <Avatar size="xs" image="img/avatar-emma.jpeg" />
                                            <Avatar size="xs" image="img/avatar-julien.jpeg" />
                                        </Stack>
                                        <span>5</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Participants">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Stack>
                                            <Avatar size="xs" image="img/avatar-nora.jpeg" />
                                            <Avatar size="xs" image="img/avatar-marine.jpeg" />
                                            <Avatar size="xs" image="img/avatar-john.jpeg" />
                                        </Stack>
                                        <span>803</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="projects">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Stack>
                                            <div className="icon icon--letter is-xs">
                                                <span aria-hidden="true">A</span>
                                            </div>
                                            <div className="icon icon--letter is-xs">
                                                <span aria-hidden="true">S</span>
                                            </div>
                                            <div className="icon icon--letter is-xs">
                                                <span aria-hidden="true">H</span>
                                            </div>
                                        </Stack>
                                        <span>12</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                            {/*    <DataListItem label="Used case ">
                                <dd>
                                    <Badges>
                                        <Tag label="workshop" />
                                    </Badges>
                                </dd>
                            </DataListItem> */}

                            <DataListItem label="Used case ">
                                <dd>
                                    <Badges>
                                        <Tag label="Consulting" />
                                        <Tag label="Design Thinking" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Tags">
                                <dd>
                                    <Badges>
                                        <Tag link="#" isPill={false}>
                                            <div aria-hidden="true" className="icon icon--sdg is-sdg-7 is-16px">
                                                <span>7</span>
                                            </div>
                                            <span>Affordable and clean energy</span>
                                        </Tag>
                                        <Tag link="#" label="Impact native" iconName="impact-native" isPill={false} />
                                        <Tag link="#" label="DEI" iconName="vertical-dei" isPill={false} />
                                        <Tag link="#" label="Corporate" iconName="ecosystem-corporate" />
                                        <Tag link="#" label="Strategic" />
                                        <Tag link="#" label="Innovation" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Links">
                                <dd>
                                    <div className="d-flex flex-row flex-wrap gap-3xs">
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-drive" addClass="text-muted" />
                                            <span>Drive</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-dropbox" addClass="text-muted" />
                                            <span>Dropbox</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-notion" addClass="text-muted" />
                                            <span>Notion</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-slack" addClass="text-muted" />
                                            <span>Slack</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                        <Button type="muted" addClass="btn-link" size="xs">
                                            <Icon name="brand-figma" addClass="text-muted" />
                                            <span>Figma</span>
                                            <Icon name="new-tab" addClass="text-muted" />
                                        </Button>
                                    </div>
                                </dd>
                            </DataListItem>
                            <h4 className="nav-title flex-fill mb-none">Custom fields</h4>
                            <DataListItem label="Country">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span>France</span>
                                    </Button>
                                </dd>
                            </DataListItem>
                        </DataList>

                        <hr />

                        <FormGroup id="problem" label="Context and Challenges" hint="A short sentence to explain what the context and the challenge.">
                            <FormTextarea id="c&c" rows={4} placeholder="Not completed yet" defaultValue={"La Semmaris a lancé la Rungis Académie : un centre de formation de 3 000 m² conçu pour former 500 diplômés par an, doté d’équipements modernes adaptés aux besoins du secteur. Rungis Académie souhaite lancer une consultation à destination de potentiels concessionnaires (organismes de formation)."} readonly={true} fieldSizing={true} />
                        </FormGroup>

                        {/* <FormGroup id="goal" label="Mission goal" hint="List the goals of the mission in simple sentences or bullet points.">
                            <FormTextarea
                                id="goal"
                                rows={4}
                                placeholder="Not completed yet"
                                defaultValue={`Il est clé pour Rungis Académie de clarifier son positionnement et sa proposition de valeur et d’identifier les meilleurs organismes / opérateurs de formation, à même d’occuper les lieux. 

                                Notre mission: vous accompagner du cadrage de la proposition de valeur au choix du titulaire. 

                                Il s’agira de : 
                                - mener des entretiens en vue de comprendre plus finement le besoin en matière de formation
                                - définir une proposition de valeur différenciante et attrayante
                                - vous appuyer dans l’analyse des offres jusqu’au choix du ou des concessionnaires.`}
                                readonly={true}
                                fieldSizing={true}
                            />
                        </FormGroup> */}

                        <FormGroup
                            id="results"
                            label="Results and impact"
                            hint={
                                <>
                                    The product owner must complete this info. <a href="#">Reach out to them</a>
                                </>
                            }
                        >
                            <FormTextarea id="problem" rows={4} placeholder="Not completed yet" readonly={true} fieldSizing={true} />
                        </FormGroup>
                    </AsideBody>
                    <div className="aside-footer">
                        <div className="dropdown">
                            <a href="#" className="btn btn-default dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <span>Actions</span>
                            </a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    <div className="dropdown-item--label">
                                        <span className="d-flex">Data</span>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">
                                    <div className="dropdown-item--label">
                                        <span className="d-flex">Workspace</span>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="dropdown-item--label">
                                        <span className="d-flex">Public page</span>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="dropdown-item--label">
                                        <span className="d-flex">Manage</span>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="dropdown-item--label">
                                        <span className="d-flex">Edit</span>
                                    </div>
                                </a>
                                <a className="dropdown-item" href="#">
                                    <div className="dropdown-item--label">
                                        <span className="d-flex">Duplicate</span>
                                    </div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item is-danger" href="#">
                                    <div className="dropdown-item--label">
                                        <span className="d-flex">Delete</span>
                                    </div>
                                </a>
                            </div>
                        </div>
                        <div className="d-flex gap-xs ml-auto">
                            <a className="btn btn-lg btn-default" href="#">
                                Open full page
                            </a>
                        </div>
                    </div>
                </div>
                <div id="edit" role="tabpanel" aria-labelledby="edit-tab" className={`tab-pane h-100 fade ${activeTab === "edit" ? "active show" : ""}`}>
                    <AsideBody>
                        <FormGroup id="Customer" label="Customer">
                            <FormSelect
                                id="Customer"
                                options={[
                                    {
                                        label: "Select customer",
                                        value: "",
                                        selected: true,
                                        disabled: true,
                                    },

                                    {
                                        label: "customer",
                                        value: "customer",
                                    },
                                    {
                                        label: "customer",
                                        value: "customer",
                                    },
                                    {
                                        label: "customer",
                                        value: "customer",
                                    },
                                    {
                                        label: "Other",
                                        value: "other",
                                    },
                                ]}
                            />
                        </FormGroup>
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
                                    },
                                ]}
                            />
                        </FormGroup>
                        <FormGroup addClass="cq-12 " id="pipedrive_id" label="Pipedrive ID">
                            <FormInputWrapper>
                                <FormInput id="pipedrive_id" placeholder="e.g. #1234567890" />
                            </FormInputWrapper>
                        </FormGroup>
                        <FormFieldSet addClass="cq-12" id="confidentiality" legend="Confidentiality" grid={true}>
                            <div className="g-col-12 g-col-md-6">
                                <FormOption name="confidentiality" id="confidentiality-public" label="Public" value="public" type="radio" card={true} icon="visibility" defaultChecked={true} />
                            </div>
                            <div className="g-col-12 g-col-md-6">
                                <FormOption name="confidentiality" id="confidentiality-confidential" label="Confidential" value="confidential" type="radio" card={true} icon="visibility-off" />
                            </div>
                        </FormFieldSet>
                        <FormGroup addClass="cq-12" id="owner" label="Owner" required={true}>
                            <FormSelect
                                id="owner"
                                options={[
                                    { label: "Guillaume Yvon", value: "guillaume-yvon" },
                                    { label: "Org Admins", value: "org-admin" },
                                ]}
                            />
                        </FormGroup>
                        <FormGroup addClass="cq-12" id="Used-case" required={false} label="Used case">
                            <FormSelectMultiple
                                id="Used-case"
                                options={[
                                    { label: "Choose an option...", value: "", disabled: true },
                                    { label: "Consulting", value: "Consulting" },
                                    { label: "Design fiction", value: "Design fictions", selected: true },
                                    { label: "Design thinking", value: "Design thinking", selected: true },
                                    { label: "Education engineering", value: "Education engineering" },
                                    { label: "Sustainable design", value: "Sustainable design" },
                                    { label: "UX/UI", value: "UX/UI" },
                                    { label: "Other", value: "Other" },
                                ]}
                            />
                        </FormGroup>

                        <FormGroup id="Context and Challenges" label="Context and Challenges" hint="A short sentence to explain what the context and the challenge.">
                            <FormTextarea id="impact" rows={4} />
                        </FormGroup>

                        <FormGroup id="impact" label="Results and impact" hint="What is the impact of the program? Including environmental and social impact">
                            <FormTextarea id="impact" rows={4} />
                        </FormGroup>
                        <FormGroup id="customer_verbatim" label="Customer verbatim">
                            <FormTextarea id="customer_verbatim" rows={4} />
                        </FormGroup>
                        <FormGroup id="note" label="Note" hint="Why do we believe in it?">
                            <FormTextarea id="note" rows={4} />
                        </FormGroup>
                 
                        <FormFieldSet id="impact" legend="Impact" hint="Choose the the case that best describes the program." grid={true}>
                            <div className="g-col-12 g-col-sm-6">
                                <FormOption name="impact" id="no-impact" value="no-impact" type="radio" card={true} label="None" defaultChecked={true} icon="impact-none" />
                            </div>
                            <div className="g-col-12 g-col-sm-6">
                                <FormOption name="impact" id="impact-not-obvious" value="impact-not-obvious" type="radio" card={true} label="Not obvious" icon="impact-not-obvious" />
                            </div>
                            <div className="g-col-12 g-col-sm-6">
                                <FormOption
                                    name="impact"
                                    id="impact-push"
                                    value="impact-push"
                                    type="radio"
                                    card={true}
                                    label="Push"
                                    // caption="The program has an impact, but not initially."
                                    icon="impact-push"
                                />
                            </div>
                            <div className="g-col-12 g-col-sm-6">
                                <FormOption
                                    name="impact"
                                    id="impact-native"
                                    value="impact-native"
                                    type="radio"
                                    card={true}
                                    label="Native"
                                    // caption="The program has an impact and is part of the core."
                                    icon="impact-native"
                                />
                            </div>
                        </FormFieldSet>

                        <FormFieldSet id="verticals" legend="Verticals">
                            <FormOption name="verticals" id="plastic" value="plastic" type="checkbox" card={true} icon="vertical-plastic" label="Plastic" />
                            <FormOption name="verticals" id="food" value="food" type="checkbox" card={true} icon="vertical-food" label="Food" />
                            <FormOption name="verticals" id="dei" value="dei" type="checkbox" card={true} icon="vertical-dei" label="DEI" />
                        </FormFieldSet>
                        <FormFieldSet id="sdgs" legend="SDGs" grid={true}>
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-1" value="sdg-1" type="checkbox" card={true} label="No poverty" sdg={1} />
                            </div>
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-2" value="sdg-2" type="checkbox" card={true} label="Zero hunger" sdg={2} />
                            </div>
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-3" value="sdg-3" type="checkbox" card={true} label="Good health and well being" sdg={3} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-4" value="sdg-4" type="checkbox" card={true} label="Quality education" sdg={4} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-5" value="sdg-5" type="checkbox" card={true} label="Gender equality" sdg={5} />
                            </div>
                           
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-6" value="sdg-6" type="checkbox" card={true} label="Clean water and sanitation" sdg={6} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-7" value="sdg-7" type="checkbox" card={true} label="Affordable and clean energy" sdg={7} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-8" value="sdg-8" type="checkbox" card={true} label="Decent work and economic growth" sdg={8} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-9" value="sdg-9" type="checkbox" card={true} label="Industry innovation and infrastructure" sdg={9} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-10" value="sdg-10" type="checkbox" card={true} label="Reduced inequalities" sdg={10} />
                            </div>
                           
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-11" value="sdg-11" type="checkbox" card={true} label="Sustainable cities and communities" sdg={11} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-12" value="sdg-12" type="checkbox" card={true} label="Responsable consumption and production" sdg={12} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-13" value="sdg-13" type="checkbox" card={true} label="Climate action" sdg={13} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-14" value="sdg-14" type="checkbox" card={true} label="Life below water" sdg={14} />
                            </div>
                            
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-15" value="sdg-15" type="checkbox" card={true} label="Life on land" sdg={15} />
                            </div>
                           
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-16" value="sdg-16" type="checkbox" card={true} label="Peace, justice and strong institutions" sdg={16} />
                            </div>
                           
                            <div className="g-col-12 g-col-sm-6">
                            <FormOption name="sdgs" id="sdg-17" value="sdg-17" type="checkbox" card={true} label="Partnerships for the goals" sdg={17} />
                            </div>
                            
                        </FormFieldSet>

                        <FormFieldSet name="ecosystems" legend="Ecosystems">
                            <FormOption name="ecosystems" id="ecosystem-students" value="students" type="checkbox" card={true} label="Students" icon="ecosystem-student" />
                            <FormOption name="ecosystems" id="ecosystem-startups" value="startups" type="checkbox" card={true} label="Startups" icon="ecosystem-startups" />
                            <FormOption name="ecosystems" id="ecosystem-corporate" value="corporate" type="checkbox" card={true} label="Corporate" icon="ecosystem-corporate" />
                        </FormFieldSet>
                        <FormGroup addClass="cq-12" id="google_drive" label="Google Drive">
                            <FormInputWrapper>
                                <FormInput id="google_drive" placeholder="e.g. https://drive.google.com/..." />
                            </FormInputWrapper>
                        </FormGroup>
                        <FormGroup addClass="cq-12" id="Notion" label="Notion">
                            <FormInputWrapper>
                                <FormInput id="Notion" placeholder="e.g. https://notion.com/..." />
                            </FormInputWrapper>
                        </FormGroup>
                        <FormGroup addClass="cq-12" id="Slack" label="Slack">
                            <FormInputWrapper>
                                <FormInput id="Slack" placeholder="e.g. https://Slack.com/..." />
                            </FormInputWrapper>
                        </FormGroup>
                        <h4 className="nav-title flex-fill mb-none">Custom fields</h4>
                        <FormGroup addClass="cq-12" id="Country" label="Country" required={true}>
                            <FormSelect
                                id="Country"
                                options={[
                                    { label: "France", value: "France" },
                                    { label: "Other", value: "Other" },
                                ]}
                            />
                        </FormGroup>
                        
                    </AsideBody>
                    <div className="aside-footer">
                        <div className="d-flex gap-xs ml-auto">
                            <a className="btn btn-lg btn-default" href="#">
                                Discard changes
                            </a>
                            <a className="btn btn-lg btn-primary" href="#">
                                Save
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </Aside>
    );
};
