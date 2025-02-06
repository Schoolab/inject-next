import React, { useState, useEffect } from "react";
import { Aside } from "./Aside";
import { AsideHeader } from "./AsideHeader";
import { PaginationProps } from "../Pagination";
import { AsideBody } from "./AsideBody";
import { Button } from "../Button";
import { Icon } from "../Icon";
import { DataList } from "../data/DataList";
import { DataListItem } from "../data/DataListItem";
import { Tag } from "../badges/tags/Tag";
import { Badges } from "../badges/Badges";
import { Avatar } from "../avatars/Avatar";
import { Stack } from "../avatars/Stack";
import { FormGroup } from "../forms/FormGroup";
import { FormTextarea } from "../forms/FormTextarea";
import { FormInput } from "../forms/FormInput";
import { ItemResource } from "../items/ItemResource";

interface AsideDataProps {
    initialTab?: string;
    pagination?: PaginationProps;
}

export const AsideData: React.FC<AsideDataProps> = ({
    initialTab = 'info',
    pagination = {
        currentPage: 1,
        totalPages: 9,
        prevLink: "#",
        nextLink: "#",
        onPageChange: () => {}
    }
}) => {
    const [activeTab, setActiveTab] = useState(initialTab || 'info');

    useEffect(() => {
        setActiveTab(initialTab || 'info');
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
                        ariaSelected: true
                    },
                    {
                        label: "Resources",
                        href: "#",
                        isActive: false,
                        badge: "6",
                        id: "resources-tab",
                        dataToggle: "tab",
                        dataTarget: "#resources",
                        role: "tab",
                        ariaControls: "resources",
                        ariaSelected: false
                    },
                ]}
                pagination={pagination}
            />
            <div className="tab-content h-100 overflow-auto" id="dataTabsContent">
                <div 
                    id="info" 
                    role="tabpanel" 
                    aria-labelledby="info-tab" 
                    className={`tab-pane h-100 fade ${activeTab === 'info' ? 'active show' : ''}`}
                >
                    <AsideBody addClass="d-flex flex-column gap-md">
                        <DataList>
                            <DataListItem label="Name">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <span>Impact Innovators</span>
                                        <Icon name="new-tab" addClass="text-muted" />
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Customer">
                                <dd>
                                    <span>Schoolab</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Pipedrive ID">
                                <dd className="d-flex flex-row gap-none">
                                    <span className="text-muted">#</span>
                                    <span>42986</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Methodology ">
                                <dd>
                                    <Badges>
                                        <Tag label="Consulting" />
                                        <Tag label="Design Thinking" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Business line">
                                <dd>
                                    <span>Real Estate and construction</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Confidentiality ">
                                <dd>
                                    <Tag label="Public" iconName="visibility" status="open" />
                                </dd>
                            </DataListItem>
                            <DataListItem label="Owners">
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-terence.jpeg" />
                                        <span>Terence Irving</span>
                                        <Icon name="new-tab" addClass="text-muted" />
                                    </Button>
                                </dd>
                                <dd>
                                    <Button type="muted" addClass="btn-link" size="xs">
                                        <Avatar size="xs" image="img/avatar-alexandra.jpeg" />
                                        <span>Alexandra Jolly</span>
                                        <Icon name="new-tab" addClass="text-muted" />
                                    </Button>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Managers">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Stack>
                                        <Avatar size="xs" image="img/avatar-pierre.jpeg" />
                                        <Avatar size="xs" image="img/avatar-emma.jpeg" />
                                        <Avatar size="xs" image="img/avatar-julien.jpeg" />
                                    </Stack>
                                    <span>5</span>
                                    <Button type="muted" iconStartName="new-tab" size="xs" />
                                </dd>
                            </DataListItem>
                            <DataListItem label="Participants">
                                <dd className="d-flex flex-row gap-2xs">
                                    <Stack>
                                        <Avatar size="xs" image="img/avatar-nora.jpeg" />
                                        <Avatar size="xs" image="img/avatar-marine.jpeg" />
                                        <Avatar size="xs" image="img/avatar-john.jpeg" />
                                    </Stack>
                                    <span>803</span>
                                    <Button type="muted" iconStartName="new-tab" size="xs" />
                                </dd>
                            </DataListItem>
                            <DataListItem label="Participants">
                                <dd className="d-flex flex-row gap-2xs">
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
                                    <Button type="muted" iconStartName="new-tab" size="xs" />
                                </dd>
                            </DataListItem>
                            <DataListItem label="Created at">
                                <dd>
                                    <span>Feb 12, 2025</span>
                                </dd>
                            </DataListItem>
                            <DataListItem label="Status ">
                                <dd>
                                    <Tag label="Open" iconName="status-filled" status="open" />
                                </dd>
                            </DataListItem>
                            <DataListItem label="Tags ">
                                <dd>
                                    <Badges>
                                        <Tag label="Impact native" iconName="impact-native" isPill={false} />
                                        <Tag label="DEI" iconName="vertical-dei" isPill={false} />
                                        <Tag isPill={false}>
                                            <div aria-hidden="true" className="icon icon--sdg is-sdg-7 is-16px">
                                                <span>7</span>
                                            </div>
                                            <span>Affordable and clean energy</span>
                                        </Tag>
                                        <Tag label="Corporate" iconName="ecosystem-corporate" />
                                        <Tag label="Strategic" />
                                        <Tag label="Innovation" />
                                    </Badges>
                                </dd>
                            </DataListItem>
                        </DataList>
                        
                        <hr />

                        <FormGroup id="problem" label="Problems addressed" hint="A short sentence to explain what the problems are.">
                            <FormTextarea
                                id="problem"
                                rows={4}
                                placeholder="Not completed yet"
                                defaultValue={"La Semmaris a lancé la Rungis Académie : un centre de formation de 3 000 m² conçu pour former 500 diplômés par an, doté d’équipements modernes adaptés aux besoins du secteur. Rungis Académie souhaite lancer une consultation à destination de potentiels concessionnaires (organismes de formation)."}
                                readonly={true}
                                fieldSizing={true}
                            />
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

                        <FormGroup id="results" label="Results and impact" hint={<>The product owner must complete this info. <a href="#">Reach out to them</a></>}>
                            <FormTextarea
                                id="problem"
                                rows={4}
                                placeholder="Not completed yet"
                                readonly={true}
                                fieldSizing={true}
                            />
                        </FormGroup>
                    </AsideBody>
                </div>
                <div 
                    id="resources" 
                    role="tabpanel" 
                    aria-labelledby="resources-tab" 
                    className={`tab-pane h-100 fade ${activeTab === 'resources' ? 'active show' : ''}`}
                >
                    <AsideBody>
                        <FormGroup id="search" label="Search" srOnly={true}>
                            <FormInput
                                id="search"
                                placeholder="Search for resources"
                            />
                        </FormGroup>
                        <div className="d-flex flex-column gap-xs">
                            <ItemResource isSmall={false} action="openLink" icon={{ name: "link" }} resource={{ details: "google.com", name: "Google Drive", type: "Link" }} />
                            <ItemResource isSmall={false} action="download" icon={{ name: "image" }} resource={{ details: "120 KB", name: "Customer Logo", type: "PNG Image" }} />
                            <ItemResource isSmall={false} action="openLink" icon={{ name: "questionnaire" }} resource={{ details: "from Program", name: "Note", type: "Form" }} />
                            <ItemResource isSmall={false} action="download" icon={{ addClass: "text-danger", name: "file-pdf-box" }} resource={{ details: "120 KB", name: "Mission Brief.pdf", type: "PDF File" }} />
                            <ItemResource isSmall={false} action="download" icon={{ name: "file-play-box" }} resource={{ details: "23 MB", name: "CEO Interview", type: "MP4 Video" }} />
                            <ItemResource isSmall={false} action="download" icon={{ addClass: "text-danger", name: "file-pdf-box" }} resource={{ details: "120 KB", name: "reference.pdf", type: "PDF File" }} />
                        </div>
                    </AsideBody>
                </div>
            </div>
        </Aside>
    );
};