import React from "react";
import { Aside } from "@/app/components/asides/Aside";
import { AsideHeader } from "@/app/components/asides/AsideHeader";
import { AsideBody } from "@/app/components/asides/AsideBody";

interface PageAsideNotesProps {}

export const PageAsideNotes = ({}: PageAsideNotesProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <Aside size="large">
                    <div className="aside-content-container">
                        <AsideHeader
                            title="Title"
                            tabs={[
                                { 
                                    label: "About",
                                    href: "#",
                                    isActive: false,
                                    id: "about-tab",
                                    dataToggle: "tab",
                                    dataTarget: "#about",
                                    role: "tab",
                                    ariaControls: "about",
                                    ariaSelected: true
                                },
                                {
                                    label: "Notes",
                                    href: "#",
                                    isActive: true,
                                    badge: "2",
                                    id: "notes-tab",
                                    dataToggle: "tab",
                                    dataTarget: "#notes",
                                    role: "tab",
                                    ariaControls: "notes",
                                    ariaSelected: false
                                },
                                {
                                    label: "Data",
                                    href: "#",
                                    isActive: false,
                                    id: "data-tab",
                                    dataToggle: "tab",
                                    dataTarget: "#data",
                                    role: "tab",
                                    ariaControls: "data",
                                    ariaSelected: false
                                },
                            ]}
                            pagination={{
                                currentPage: 1,
                                totalPages: 6,
                                prevLink: "#",
                                nextLink: "#",
                                onPageChange: () => {}
                            }}
                            showNewTab={true}
                            showClose={true}
                        />
                        <div className="tab-content h-100 overflow-auto" id="notesTabsContent">
                            <div id="about" role="tabpanel" aria-labelledby="about-tab" className="tab-pane h-100 fade">
                                <AsideBody addClass="d-flex flex-column gap-md">
                                    <p>Content here...</p>
                                </AsideBody>
                            </div>
                            <div id="notes" role="tabpanel" aria-labelledby="notes-tab" className="tab-pane h-100 fade active show">
                                <AsideBody addClass="p-0">
                                    <div className="overflow-hidden h-100 tab-pane fade show active" id="chat" role="tabpanel">
                                        <div className="messages-module-container standaloneMainThreadContainer">
                                            <div className="messages-module-content">
                                                <div className="message align-items-end">
                                                    <a href="#" className="thumbnail is-oval is-md">
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                                    </a>
                                                    <div className="message-body">
                                                        <div className="message-row">
                                                            <ul className="metas is-list small">
                                                                <li>
                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                        <span>Pierre Lemeteil</span>
                                                                        {/* <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" /> */}
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <span>June 18, 2024</span>
                                                                </li>
                                                                <li>
                                                                    <span>3:40 PM</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="message-row align-items-end">
                                                            <div className="message-content gap-md">
                                                                <p>A short response</p>
                                                            </div>
                                                            <div className="message-options dropdown">
                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <span className="icon icon-options" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                        Edit
                                                                    </a>
                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="message align-items-end">
                                                    <a href="#" className="thumbnail is-oval is-md">
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg" />
                                                    </a>
                                                    <div className="message-body">
                                                        <div className="message-row">
                                                            <ul className="metas is-list small">
                                                                <li>
                                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                                        <span>Sasha Lehmann</span>
                                                                        {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                                                    </a>
                                                                </li>
                                                                <li>
                                                                    <span>June 18, 2024</span>
                                                                </li>
                                                                <li>
                                                                    <span>3:40 PM</span>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="message-row align-items-end">
                                                            <div className="message-content gap-md">
                                                                <p>Le chemin critique est la séquence d'activités la plus longue qui détermine la durée minimale du projet. Il est déterminé en analysant les dépendances entre les tâches et en calculant leur durée.</p>
                                                                <p>Tout retard sur une tâche du chemin critique retarde l'ensemble du projet. Par exemple, dans la construction d'une maison, le chemin critique pourrait inclure la pose des fondations, l'érection des murs, la pose de la toiture, etc. Si l'une de ces tâches est retardée, la date d'achèvement de la maison sera également repoussée.</p>
                                                            </div>
                                                            <div className="message-options dropdown">
                                                                <a className="btn btn-sm btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                    <span className="icon icon-options" />
                                                                </a>
                                                                <div className="dropdown-menu dropdown-menu-right">
                                                                    <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                                                        Edit
                                                                    </a>
                                                                    <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                                                        Delete
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="w-100 standaloneThreadForm" data-mark-as-read-url="/mark-as-read/60">
                                                <form className="w-100 message-composer is-sticky mt-auto" name="message_light" method="post" action="/messages/conversation/60" data-disable-on-submit={1}>
                                                    <div className="w-100 message-composer-row">
                                                        <textarea className="message-composer-input form-control" required placeholder="Write a note…" autoComplete="off" defaultValue={""} />
                                                        <button className="btn btn-transparent btn-icon message-composer-action is-disabled">
                                                            <span className="icon icon-send" />
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </AsideBody>
                            </div>
                            <div id="data" role="tabpanel" aria-labelledby="data-tab" className="tab-pane h-100 fade">
                                <AsideBody addClass="d-flex flex-column gap-md">
                                    <p>Content here...</p>
                                </AsideBody>
                            </div>
                        </div>
                    </div>
                </Aside>
            </div>
        </div>
    );
};
