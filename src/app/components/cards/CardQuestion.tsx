import React from "react";

interface CardQuestionProps {}

export const CardQuestion = ({}: CardQuestionProps) => {
    return (
        <div className="container py-8 d-flex flex-column row-gap-2xl">
            <div className="row justify-content-start row-gap-md">
                <h3 className="col-12">Default</h3>
                <div className="col-12 col-lg-6">
                    <div className="card">
                        <div className="card-infos d-flex flex-column align-items-stretch gap-md p-24px">
                            <div className="text-navigation d-flex gap-2xs">
                                <p className="text-muted">From program:</p>
                                <a href="#" className="text-muted font-weight-bold">
                                    CPI Concept
                                </a>
                            </div>
                            <div className="d-flex flex-grow-1 gap-sm">
                                <div className="thumbnail-relation m-auto">
                                    <a href="#" className="thumbnail is-oval is-lg is-bordered">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg" />
                                    </a>
                                </div>
                                <div className="card-title flex-grow-1">
                                    <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                        <span>Nora Hechelef</span>
                                    </a>
                                    <ul className="text-muted small metas is-list mb-none">
                                        <li>
                                            <span>May 13</span>
                                        </li>
                                        <li>
                                            <span>3:39 PM</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown z-2">
                                    <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-dots-vertical" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open profile</span>
                                            <span className="dropdown-item--shortcut icon icon-arrow-top-right" />
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open program</span>
                                            <span className="dropdown-item--shortcut icon icon-arrow-top-right" />
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            <span>Edit</span>
                                        </a>
                                        <a className="dropdown-item is-danger" href="#">
                                            <span>Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-md">
                                <p>Dans la gestion de projet, on entend souvent parler de "chemin critique". Mais qu'est-ce que cela signifie réellement ? Comment est-il déterminé et pourquoi est-il si crucial pour la réussite d'un projet ? Pourriez-vous donner un exemple concret pour illustrer son importance ?</p>
                                <div className="d-flex justify-content-between flex-nowrap gap-0">
                                    <div className="badges flex-nowrap">
                                        <a className="badge is-pill" href="#">
                                            Project Management
                                        </a>
                                    </div>
                                    <div className="badge is-pill is-progress">
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.7969 7.55348L8.8987 6.77876C8.9642 6.53371 9 6.27334 9 6C9 5.72666 8.9642 5.46629 8.8987 5.22124L11.7969 4.44652C11.9294 4.94201 12 5.46276 12 6C12 6.53724 11.9294 7.05799 11.7969 7.55348ZM11.197 2.99952L8.60035 4.50194C8.33632 4.0456 7.9544 3.66368 7.49806 3.39965L9.00048 0.80297C9.91099 1.32978 10.6702 2.08901 11.197 2.99952ZM7.55348 0.203056L6.77876 3.1013C6.53371 3.0358 6.27334 3 6 3C5.72666 3 5.46629 3.0358 5.22124 3.1013L4.44652 0.203056C4.94201 0.0706099 5.46276 0 6 0C6.53724 0 7.05799 0.0706099 7.55348 0.203056ZM2.99952 0.80297L4.50194 3.39965C4.0456 3.66368 3.66368 4.0456 3.39965 4.50194L0.80297 2.99952C1.32978 2.08901 2.08901 1.32979 2.99952 0.80297ZM0.203056 4.44652C0.0706099 4.94201 0 5.46276 0 6C0 6.53724 0.0706099 7.05799 0.203056 7.55348L3.1013 6.77876C3.0358 6.53371 3 6.27334 3 6C3 5.72666 3.0358 5.46629 3.1013 5.22124L0.203056 4.44652ZM0.80297 9.00048L3.39965 7.49806C3.66368 7.9544 4.0456 8.33632 4.50194 8.60035L2.99952 11.197C2.08901 10.6702 1.32979 9.91099 0.80297 9.00048ZM4.44652 11.7969L5.22124 8.8987C5.46629 8.9642 5.72666 9 6 9C6.27334 9 6.53371 8.9642 6.77876 8.8987L7.55348 11.7969C7.05799 11.9294 6.53724 12 6 12C5.46276 12 4.94201 11.9294 4.44652 11.7969ZM9.00048 11.197L7.49806 8.60035C7.9544 8.33632 8.33632 7.9544 8.60035 7.49806L11.197 9.00048C10.6702 9.91099 9.91099 10.6702 9.00048 11.197Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span>Pending</span>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between flex-nowrap">
                                <div className="d-flex gap-xs flex-fill">
                                    <a href="#" className="btn btn-sm btn-secondary">
                                        <span className="icon icon-thumb-up" />
                                        <span>Like</span>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-secondary">
                                        <span className="icon icon-comment" />
                                        <span>Comment</span>
                                    </a>
                                </div>
                                <a href="#" className="btn btn-sm btn-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Click to copy link" data-boundary="window">
                                    <span className="icon icon-share-variant" />
                                    <span>Copy link</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card">
                        <div className="card-infos d-flex flex-column align-items-stretch gap-md p-24px">
                            <div className="d-flex flex-grow-1 gap-sm">
                                <div className="thumbnail-relation m-auto">
                                    <a href="#" className="thumbnail is-oval is-lg is-bordered">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg" />
                                    </a>
                                </div>
                                <div className="card-title flex-grow-1">
                                    <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                        <span>Nora Hechelef</span>
                                    </a>
                                    <ul className="text-muted small metas is-list mb-none">
                                        <li>
                                            <span>May 13</span>
                                        </li>
                                        <li>
                                            <span>3:39 PM</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown z-2">
                                    <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-dots-vertical" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open profile</span>
                                            <span className="dropdown-item--shortcut icon icon-arrow-top-right" />
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open program</span>
                                            <span className="dropdown-item--shortcut icon icon-arrow-top-right" />
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            <span>Edit</span>
                                        </a>
                                        <a className="dropdown-item is-danger" href="#">
                                            <span>Delete</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-md">
                                <p>Dans la gestion de projet, on entend souvent parler de "chemin critique". Mais qu'est-ce que cela signifie réellement ? Comment est-il déterminé et pourquoi est-il si crucial pour la réussite d'un projet ? Pourriez-vous donner un exemple concret pour illustrer son importance ?</p>
                                <div className="d-flex justify-content-between flex-nowrap gap-0">
                                    <div className="badges flex-nowrap">
                                        <a className="badge is-pill" href="#">
                                            Project Management
                                        </a>
                                    </div>
                                    <div className="badge is-pill is-open">
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx={6} cy={6} r={6} fill="currentColor" />
                                        </svg>
                                        <span>Resolved</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex flex-column gap-md">
                                <div className="message p-0 align-items-end">
                                    <a href="#" className="thumbnail is-oval is-md">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                    </a>
                                    <div className="message-body">
                                        <div className="message-row">
                                            <ul className="metas is-list small">
                                                <li>
                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                        <span>Pierre Lemeteil</span>
                                                        <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" />
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
                                                <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-dots-vertical" />
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
                                <div className="message p-0 align-items-end">
                                    <a href="#" className="thumbnail is-oval is-md">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/182d9560-bae6-432f-a316-0065b826fe3b/sq150.jpeg" />
                                    </a>
                                    <div className="message-body">
                                        <div className="message-row">
                                            <ul className="metas is-list small">
                                                <li>
                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                        <span>Sasha Lehmann</span>
                                                        <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" />
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
                                                <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-dots-vertical" />
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
                            <div className="d-flex justify-content-between flex-nowrap">
                                <div className="d-flex gap-xs flex-fill">
                                    <a href="#" className="btn btn-sm btn-secondary active">
                                        <span className="icon icon-thumb-up" />
                                        <span>9</span>
                                    </a>
                                    <a href="#" className="btn btn-sm btn-secondary">
                                        <span className="icon icon-comment" />
                                        <span>4</span>
                                    </a>
                                </div>
                                <a href="#" className="btn btn-sm btn-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Click to copy link" data-boundary="window">
                                    <span className="icon icon-share-variant" />
                                    <span>Copy link</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row justify-content-start row-gap-md">
                <h3 className="col-12">Links</h3>
                <div className="col-12 col-lg-6">
                    <div className="card">
                        <div className="card-infos d-flex flex-column align-items-stretch gap-md p-24px">
                            <div className="d-flex flex-grow-1 gap-sm">
                                <div className="thumbnail-relation m-auto">
                                    <a href="#" className="thumbnail is-oval is-lg is-bordered">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg" />
                                    </a>
                                </div>
                                <div className="card-title flex-grow-1">
                                    <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                        <span>Nora Hechelef</span>
                                    </a>
                                    <ul className="text-muted small metas is-list mb-none">
                                        <li>
                                            <span>May 13</span>
                                        </li>
                                        <li>
                                            <span>3:39 PM</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown z-2">
                                    <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-dots-vertical" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open profile</span>
                                            <span className="dropdown-item--shortcut icon icon-arrow-top-right" />
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open program</span>
                                            <span className="dropdown-item--shortcut icon icon-arrow-top-right" />
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--icon icon icon-plus-circle" />
                                            <span className="dropdown-item--label">
                                                <span>Add response</span>
                                                <span className="caption">Open details &amp; responses</span>
                                            </span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--icon icon icon-check-circle" />
                                            <span className="dropdown-item--label">Mark resolved</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-md">
                                <p>Dans la gestion de projet, on entend souvent parler de "chemin critique". Mais qu'est-ce que cela signifie réellement ? Comment est-il déterminé et pourquoi est-il si crucial pour la réussite d'un projet ? Pourriez-vous donner un exemple concret pour illustrer son importance ?</p>
                                <div className="d-flex justify-content-between flex-nowrap gap-0">
                                    <div className="badges flex-nowrap">
                                        <a className="badge is-pill" href="#">
                                            Project Management
                                        </a>
                                    </div>
                                    <div className="badge is-pill is-progress">
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.7969 7.55348L8.8987 6.77876C8.9642 6.53371 9 6.27334 9 6C9 5.72666 8.9642 5.46629 8.8987 5.22124L11.7969 4.44652C11.9294 4.94201 12 5.46276 12 6C12 6.53724 11.9294 7.05799 11.7969 7.55348ZM11.197 2.99952L8.60035 4.50194C8.33632 4.0456 7.9544 3.66368 7.49806 3.39965L9.00048 0.80297C9.91099 1.32978 10.6702 2.08901 11.197 2.99952ZM7.55348 0.203056L6.77876 3.1013C6.53371 3.0358 6.27334 3 6 3C5.72666 3 5.46629 3.0358 5.22124 3.1013L4.44652 0.203056C4.94201 0.0706099 5.46276 0 6 0C6.53724 0 7.05799 0.0706099 7.55348 0.203056ZM2.99952 0.80297L4.50194 3.39965C4.0456 3.66368 3.66368 4.0456 3.39965 4.50194L0.80297 2.99952C1.32978 2.08901 2.08901 1.32979 2.99952 0.80297ZM0.203056 4.44652C0.0706099 4.94201 0 5.46276 0 6C0 6.53724 0.0706099 7.05799 0.203056 7.55348L3.1013 6.77876C3.0358 6.53371 3 6.27334 3 6C3 5.72666 3.0358 5.46629 3.1013 5.22124L0.203056 4.44652ZM0.80297 9.00048L3.39965 7.49806C3.66368 7.9544 4.0456 8.33632 4.50194 8.60035L2.99952 11.197C2.08901 10.6702 1.32979 9.91099 0.80297 9.00048ZM4.44652 11.7969L5.22124 8.8987C5.46629 8.9642 5.72666 9 6 9C6.27334 9 6.53371 8.9642 6.77876 8.8987L7.55348 11.7969C7.05799 11.9294 6.53724 12 6 12C5.46276 12 4.94201 11.9294 4.44652 11.7969ZM9.00048 11.197L7.49806 8.60035C7.9544 8.33632 8.33632 7.9544 8.60035 7.49806L11.197 9.00048C10.6702 9.91099 9.91099 10.6702 9.00048 11.197Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span>Pending</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-targets">
                            <div className="card-target">
                                <a href="#" className="stretched-link d-flex align-items-center">
                                    <span className="icon icon-faq is-sm" />
                                    <span>Details &amp; responses</span>
                                </a>
                                <span className="badge badge-notification is-highlight">0</span>
                                <span className="icon icon-chevron-right is-sm" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6">
                    <div className="card">
                        <div className="card-infos d-flex flex-column align-items-stretch gap-md p-24px">
                            <div className="d-flex flex-grow-1 gap-sm">
                                <div className="thumbnail-relation m-auto">
                                    <a href="#" className="thumbnail is-oval is-lg is-bordered">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg" />
                                    </a>
                                </div>
                                <div className="card-title flex-grow-1">
                                    <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                                        <span>Nora Hechelef</span>
                                    </a>
                                    <ul className="text-muted small metas is-list mb-none">
                                        <li>
                                            <span>May 13</span>
                                        </li>
                                        <li>
                                            <span>3:39 PM</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="dropdown z-2">
                                    <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="icon is-20px icon-dots-vertical" />
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right">
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open profile</span>
                                            <span className="dropdown-item--shortcut icon icon-arrow-top-right" />
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--label">Open program</span>
                                            <span className="dropdown-item--shortcut icon icon-arrow-top-right" />
                                        </a>
                                        <div className="dropdown-divider" />
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--icon icon icon-plus-circle" />
                                            <span className="dropdown-item--label">
                                                <span>Add response</span>
                                                <span className="caption">Open details &amp; responses</span>
                                            </span>
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <span className="dropdown-item--icon icon icon-check-circle" />
                                            <span className="dropdown-item--label">Mark resolved</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="d-flex flex-column gap-md">
                                <p>Dans la gestion de projet, on entend souvent parler de "chemin critique". Mais qu'est-ce que cela signifie réellement ? Comment est-il déterminé et pourquoi est-il si crucial pour la réussite d'un projet ? Pourriez-vous donner un exemple concret pour illustrer son importance ?</p>
                                <div className="d-flex justify-content-between flex-nowrap gap-0">
                                    <div className="badges flex-nowrap">
                                        <a className="badge is-pill" href="#">
                                            Project Management
                                        </a>
                                    </div>
                                    <div className="badge is-pill is-progress">
                                        <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M11.7969 7.55348L8.8987 6.77876C8.9642 6.53371 9 6.27334 9 6C9 5.72666 8.9642 5.46629 8.8987 5.22124L11.7969 4.44652C11.9294 4.94201 12 5.46276 12 6C12 6.53724 11.9294 7.05799 11.7969 7.55348ZM11.197 2.99952L8.60035 4.50194C8.33632 4.0456 7.9544 3.66368 7.49806 3.39965L9.00048 0.80297C9.91099 1.32978 10.6702 2.08901 11.197 2.99952ZM7.55348 0.203056L6.77876 3.1013C6.53371 3.0358 6.27334 3 6 3C5.72666 3 5.46629 3.0358 5.22124 3.1013L4.44652 0.203056C4.94201 0.0706099 5.46276 0 6 0C6.53724 0 7.05799 0.0706099 7.55348 0.203056ZM2.99952 0.80297L4.50194 3.39965C4.0456 3.66368 3.66368 4.0456 3.39965 4.50194L0.80297 2.99952C1.32978 2.08901 2.08901 1.32979 2.99952 0.80297ZM0.203056 4.44652C0.0706099 4.94201 0 5.46276 0 6C0 6.53724 0.0706099 7.05799 0.203056 7.55348L3.1013 6.77876C3.0358 6.53371 3 6.27334 3 6C3 5.72666 3.0358 5.46629 3.1013 5.22124L0.203056 4.44652ZM0.80297 9.00048L3.39965 7.49806C3.66368 7.9544 4.0456 8.33632 4.50194 8.60035L2.99952 11.197C2.08901 10.6702 1.32979 9.91099 0.80297 9.00048ZM4.44652 11.7969L5.22124 8.8987C5.46629 8.9642 5.72666 9 6 9C6.27334 9 6.53371 8.9642 6.77876 8.8987L7.55348 11.7969C7.05799 11.9294 6.53724 12 6 12C5.46276 12 4.94201 11.9294 4.44652 11.7969ZM9.00048 11.197L7.49806 8.60035C7.9544 8.33632 8.33632 7.9544 8.60035 7.49806L11.197 9.00048C10.6702 9.91099 9.91099 10.6702 9.00048 11.197Z"
                                                fill="currentColor"
                                            />
                                        </svg>
                                        <span>Pending</span>
                                    </div>
                                </div>
                            </div>
                            <hr />
                            <div className="d-flex flex-column gap-md">
                                <div className="message p-0 align-items-end">
                                    <a href="#" className="thumbnail is-oval is-md">
                                        <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                    </a>
                                    <div className="message-body">
                                        <div className="message-row">
                                            <ul className="metas is-list small">
                                                <li>
                                                    <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                        <span>Pierre Lemeteil</span>
                                                        <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" />
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
                                                <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-dots-vertical" />
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
                        </div>
                        <div className="card-targets">
                            <div className="card-target">
                                <a href="#" className="stretched-link d-flex align-items-center">
                                    <span className="icon icon-faq is-sm" />
                                    <span>Details &amp; responses</span>
                                </a>
                                <span className="badge badge-notification is-highlight">1</span>
                                <span className="icon icon-chevron-right is-sm" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
