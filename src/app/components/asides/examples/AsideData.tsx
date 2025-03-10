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
                pagination={pagination}
                showNewTab={true}
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
                                    <span>Feb 12, 2025 - March 12, 2025  </span>
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
                            <DataListItem label="Status ">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Tag label="Open" iconName="status-filled" status="open" /> <Tag label="Public" iconName="visibility" status="open" />
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
                       
                        
                            {/* <DataListItem label="SDGs" tooltip="The SDGs are the United Nations Sustainable Development Goals. They are a set of 17 goals designed to transform our world by 2030. Each goal has specific targets to achieve by 2030.">
                                <dd>
                                    <Badges>
                                        <Tag link="#" isPill={false}>
                                            <div aria-hidden="true" className="icon icon--sdg is-sdg-7 is-16px">
                                                <span>7</span>
                                            </div>
                                            <span>Affordable and clean energy</span>
                                        </Tag>
                                    </Badges>
                                </dd>
                            </DataListItem> */}
                               <DataListItem label="Used case ">
                                <dd>
                                    <Badges>
                                        <Tag label="workshop" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                                  
                            <DataListItem label="Methodologies ">
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
                            
                        </DataList>

                        <hr />

                        <FormGroup id="problem" label="Problems addressed" hint="A short sentence to explain what the problems are.">
                            <FormTextarea id="problem" rows={4} placeholder="Not completed yet" defaultValue={"La Semmaris a lancé la Rungis Académie : un centre de formation de 3 000 m² conçu pour former 500 diplômés par an, doté d’équipements modernes adaptés aux besoins du secteur. Rungis Académie souhaite lancer une consultation à destination de potentiels concessionnaires (organismes de formation)."} readonly={true} fieldSizing={true} />
                        </FormGroup>

                        <FormGroup id="goal" label="Mission goal" hint="List the goals of the mission in simple sentences or bullet points.">
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
                        </FormGroup>

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
                            <a href="#" className="btn btn-default dropdown-toggle" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><span>Actions</span></a>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">
                                    <div className="dropdown-item--label"><span className="d-flex">Data</span></div>
                                   
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">                                
                                    <div className="dropdown-item--label"><span className="d-flex">Workspace</span></div>
                                </a>
                                <a className="dropdown-item" href="#">                                
                                    <div className="dropdown-item--label"><span className="d-flex">Public page</span></div>
                                </a>
                                <a className="dropdown-item" href="#">                                
                                    <div className="dropdown-item--label"><span className="d-flex">Manage</span></div>
                                </a>
                                <a className="dropdown-item" href="#">                                
                                    <div className="dropdown-item--label"><span className="d-flex">Edit</span></div>
                                </a>
                                <a className="dropdown-item" href="#">                                
                                    <div className="dropdown-item--label"><span className="d-flex">Duplicate</span></div>
                                </a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item is-danger" href="#">                            
                                    <div className="dropdown-item--label"><span className="d-flex">Delete</span></div>
                                </a>
                            </div>
                        </div>
                        {/* <div className="d-flex gap-xs ml-auto">
                            <a href="#" className="btn btn-default" role="button"><span>Discard changes</span></a>
                            <a href="#" className="btn btn-primary" role="button"><span>Save</span></a>
                        </div> */}
                    </div>
                </div>
                <div id="edit" role="tabpanel" aria-labelledby="edit-tab" className={`tab-pane h-100 fade ${activeTab === "edit" ? "active show" : ""}`}>
                    <AsideBody>
                        <FormFieldSet
                            legend="Pipedrive ID"
                            name="Pipedrive ID"
                        />
                          <FormFieldSet
                            legend="Customer"
                            name="Customer"
                        />
                          <FormFieldSet
                            legend="Business line"
                            name="Business line"
                        />
                          <FormFieldSet
                            legend="Methodology used"
                            name="Methodology used"
                        />
                         <FormFieldSet
                            legend="Owner"
                            name="Owner"
                        />
                         <FormFieldSet
                            legend="Google drive"
                            name="Google drive"
                        />
                         <FormFieldSet
                            legend="Confidentiality"
                            name="Confidentiality"
                        />
                          <FormFieldSet
                            legend="Problems addressed"
                            name="Problems addressed"
                        />
                          <FormFieldSet
                            legend="Mission goal"
                            name="Mission goal"
                        />
                         <FormFieldSet
                            legend="Results and impact"
                            name="Results and impact"
                        />
                         <FormFieldSet
                            legend="Customer verbatim"
                            name="Customer verbatim"
                        />
                         <FormFieldSet
                            legend="Note"
                            name="Note"
                        />
                    </AsideBody>
                    <div className="aside-footer">
                        <div className="d-flex gap-xs ml-auto">
                            <a className="btn btn-lg btn-default" href="#">Discard changes</a>
                            <a className="btn btn-lg btn-primary" href="#">Save</a>
                        </div>
                    </div>
                </div>
            </div>
        </Aside>
    );
};
