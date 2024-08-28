import React from "react";
export interface ItemCoursesProps {}

export const ItemCourses = ({}: ItemCoursesProps) => {
    return (
        <div className="container py-8">
            <div className="row">
                <div className="col-12 d-flex flex-column gap-2xl">
                    <div>
                        <h3>Default</h3>
                        <div className="item is-small is-bordered gap-0px">
                            <div className="item-row gap-xs pb-8px">
                                <div className="d-flex p-3xs text-muted">
                                    <span className="emoji is-20px">👋</span>
                                </div>
                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                        Name
                                    </a>
                                    <span className="small text-muted">3 questions</span>
                                </div>
                                <div className="badge is-pill is-muted">
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                    </svg>
                                    <span>May 21</span>
                                </div>
                                <div className="d-flex align-items-center gap-xs dropdown">
                                    <div className="dropdown-container">
                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <h6 className="dropdown-header">Position</h6>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Send to top</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Move up</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Move down</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Send to bottom</span>
                                            </a>
                                            <div className="dropdown-divider" />
                                            <h6 className="dropdown-header">Actions</h6>
                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                <span className="dropdown-item--label">Edit</span>
                                            </a>
                                            <a className="dropdown-item is-danger">
                                                <span className="dropdown-item--label">Delete</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="item is-small is-bordered gap-0px">
                            <div className="item-row gap-xs pb-8px">
                                <div className="d-flex p-3xs text-muted">
                                    <span className="icon icon-file-document-box is-20px" />
                                </div>
                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                        Name
                                    </a>
                                </div>
                                <div className="badge is-pill is-success">
                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx={6} cy={6} r={6} fill="#1A4433" />
                                    </svg>
                                    <span>May 25</span>
                                </div>
                                <div className="d-flex align-items-center gap-xs dropdown">
                                    <div className="dropdown-container">
                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                        </a>
                                        <div className="dropdown-menu dropdown-menu-right">
                                            <h6 className="dropdown-header">Position</h6>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Send to top</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Move up</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Move down</span>
                                            </a>
                                            <a className="dropdown-item">
                                                <span className="dropdown-item--label">Send to bottom</span>
                                            </a>
                                            <div className="dropdown-divider" />
                                            <h6 className="dropdown-header">Actions</h6>
                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                <span className="dropdown-item--label">Edit</span>
                                            </a>
                                            <a className="dropdown-item is-danger">
                                                <span className="dropdown-item--label">Delete</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <h3>Modules</h3>
                        <div className="grid-container overflow-x-scroll overflow-y-visible">
                            <div className="grid-cards gap-md">
                                <div className="item-group">
                                    <div className="item-group-header">
                                        <h4 className="nav-title flex-fill mb-none">1. Module name</h4>
                                        <div className="badge is-pill is-success">
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx={6} cy={6} r={6} fill="currentColor" />
                                            </svg>
                                            <span>May 15</span>
                                        </div>
                                        <span className="badge badge-notification is-highlight">0</span>
                                        <div className="dropdown-container">
                                            <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon icon-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <h6 className="dropdown-header">Position</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to top</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move up</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move down</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to bottom</span>
                                                </a>
                                                <div className="dropdown-divider" />
                                                <h6 className="dropdown-header">Actions</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Manage</span>
                                                    <div className="dropdown-item--icon icon icon-arrow-top-right" />
                                                </a>
                                                <a className="dropdown-item is-danger">
                                                    <span className="dropdown-item--label">Delete</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-default btn-transparent text-muted text-nowrap align-self-start" role="button">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add capsule</span>
                                    </button>
                                </div>
                                <div className="item-group">
                                    <div className="item-group-header">
                                        <h4 className="nav-title flex-fill mb-none">2. Module name</h4>
                                        <div className="badge is-pill is-muted">
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                            </svg>
                                            <span>May 21</span>
                                        </div>
                                        <span className="badge badge-notification is-highlight">8</span>
                                        <div className="dropdown-container">
                                            <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon icon-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <h6 className="dropdown-header">Position</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to top</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move up</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move down</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to bottom</span>
                                                </a>
                                                <div className="dropdown-divider" />
                                                <h6 className="dropdown-header">Actions</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Manage</span>
                                                    <div className="dropdown-item--icon icon icon-arrow-top-right" />
                                                </a>
                                                <a className="dropdown-item is-danger">
                                                    <span className="dropdown-item--label">Delete</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column gap-2xs">
                                        <div className="item is-small is-bordered gap-0px">
                                            <div className="item-row gap-xs pb-8px">
                                                <div className="d-flex p-3xs text-muted">
                                                    <span className="emoji is-20px">🚧</span>
                                                </div>
                                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                                        La roadmap d'observation
                                                    </a>
                                                    <span className="small text-muted">1 question</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-xs dropdown">
                                                    <div className="dropdown-container">
                                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <h6 className="dropdown-header">Position</h6>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to top</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move up</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move down</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to bottom</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <h6 className="dropdown-header">Actions</h6>
                                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                <span className="dropdown-item--label">Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger">
                                                                <span className="dropdown-item--label">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-small is-bordered gap-0px">
                                            <div className="item-row gap-xs pb-8px">
                                                <div className="d-flex p-3xs text-muted">
                                                    <span className="emoji is-20px">🔎</span>
                                                </div>
                                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                                        Observation - la recherche
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center gap-xs dropdown">
                                                    <div className="dropdown-container">
                                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <h6 className="dropdown-header">Position</h6>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to top</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move up</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move down</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to bottom</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <h6 className="dropdown-header">Actions</h6>
                                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                <span className="dropdown-item--label">Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger">
                                                                <span className="dropdown-item--label">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-small is-bordered gap-0px">
                                            <div className="item-row gap-xs pb-8px">
                                                <div className="d-flex p-3xs text-muted">
                                                    <span className="emoji is-20px">🥊</span>
                                                </div>
                                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                                        Observation - le terrain
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center gap-xs dropdown">
                                                    <div className="dropdown-container">
                                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <h6 className="dropdown-header">Position</h6>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to top</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move up</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move down</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to bottom</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <h6 className="dropdown-header">Actions</h6>
                                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                <span className="dropdown-item--label">Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger">
                                                                <span className="dropdown-item--label">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-small is-bordered gap-0px">
                                            <div className="item-row gap-xs pb-8px">
                                                <div className="d-flex p-3xs text-muted">
                                                    <span className="emoji is-20px">🌱</span>
                                                </div>
                                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                                        Cerner les enjeux environnementaux
                                                    </a>
                                                </div>
                                                <div className="d-flex align-items-center gap-xs dropdown">
                                                    <div className="dropdown-container">
                                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <h6 className="dropdown-header">Position</h6>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to top</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move up</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move down</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to bottom</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <h6 className="dropdown-header">Actions</h6>
                                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                <span className="dropdown-item--label">Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger">
                                                                <span className="dropdown-item--label">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-small is-bordered gap-0px">
                                            <div className="item-row gap-xs pb-8px">
                                                <div className="d-flex p-3xs text-muted">
                                                    <span className="emoji is-20px">🎤</span>
                                                </div>
                                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                                        L'identification des acteurs à interroger
                                                    </a>
                                                    <span className="small text-muted">2 questions</span>
                                                </div>
                                                <div className="badge is-pill is-muted">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                                    </svg>
                                                    <span>May 26</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-xs dropdown">
                                                    <div className="dropdown-container">
                                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <h6 className="dropdown-header">Position</h6>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to top</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move up</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move down</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to bottom</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <h6 className="dropdown-header">Actions</h6>
                                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                <span className="dropdown-item--label">Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger">
                                                                <span className="dropdown-item--label">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-small is-bordered gap-0px">
                                            <div className="item-row gap-xs pb-8px">
                                                <div className="d-flex p-3xs text-muted">
                                                    <span className="emoji is-20px">✍️</span>
                                                </div>
                                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                                        La rédaction d'un guide d'entretien
                                                    </a>
                                                    <span className="small text-muted">1 question</span>
                                                </div>
                                                <div className="badge is-pill is-muted">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                                    </svg>
                                                    <span>May 26</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-xs dropdown">
                                                    <div className="dropdown-container">
                                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <h6 className="dropdown-header">Position</h6>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to top</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move up</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move down</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to bottom</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <h6 className="dropdown-header">Actions</h6>
                                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                <span className="dropdown-item--label">Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger">
                                                                <span className="dropdown-item--label">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-small is-bordered gap-0px">
                                            <div className="item-row gap-xs pb-8px">
                                                <div className="d-flex p-3xs text-muted">
                                                    <span className="emoji is-20px">📆</span>
                                                </div>
                                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                                        L'entretien semi-directif
                                                    </a>
                                                </div>
                                                <div className="badge is-pill is-muted">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                                    </svg>
                                                    <span>May 26</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-xs dropdown">
                                                    <div className="dropdown-container">
                                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <h6 className="dropdown-header">Position</h6>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to top</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move up</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move down</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to bottom</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <h6 className="dropdown-header">Actions</h6>
                                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                <span className="dropdown-item--label">Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger">
                                                                <span className="dropdown-item--label">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item is-small is-bordered gap-0px">
                                            <div className="item-row gap-xs pb-8px">
                                                <div className="d-flex p-3xs text-muted">
                                                    <span className="emoji is-20px">💬</span>
                                                </div>
                                                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                                                    <a href="#" className="item-title stretched-link line-clamp-1">
                                                        Synthétiser ses entretiens
                                                    </a>
                                                    <span className="small text-muted">8 questions</span>
                                                </div>
                                                <div className="badge is-pill is-muted">
                                                    <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                                    </svg>
                                                    <span>May 28</span>
                                                </div>
                                                <div className="d-flex align-items-center gap-xs dropdown">
                                                    <div className="dropdown-container">
                                                        <a className="btn btn-transparent btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                                                            <span className="icon icon-dots-vertical" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                                                        </a>
                                                        <div className="dropdown-menu dropdown-menu-right">
                                                            <h6 className="dropdown-header">Position</h6>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to top</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move up</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Move down</span>
                                                            </a>
                                                            <a className="dropdown-item">
                                                                <span className="dropdown-item--label">Send to bottom</span>
                                                            </a>
                                                            <div className="dropdown-divider" />
                                                            <h6 className="dropdown-header">Actions</h6>
                                                            <a className="dropdown-item" data-toggle="collapse" data-target="#question1">
                                                                <span className="dropdown-item--label">Edit</span>
                                                            </a>
                                                            <a className="dropdown-item is-danger">
                                                                <span className="dropdown-item--label">Delete</span>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-default btn-transparent text-muted text-nowrap align-self-start" role="button">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add capsule</span>
                                    </button>
                                </div>
                                <div className="item-group">
                                    <div className="item-group-header">
                                        <h4 className="nav-title flex-fill mb-none">3. Module name</h4>
                                        <div className="badge is-pill is-muted">
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                            </svg>
                                            <span>May 21</span>
                                        </div>
                                        <span className="badge badge-notification is-highlight">0</span>
                                        <div className="dropdown-container">
                                            <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon icon-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <h6 className="dropdown-header">Position</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to top</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move up</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move down</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to bottom</span>
                                                </a>
                                                <div className="dropdown-divider" />
                                                <h6 className="dropdown-header">Actions</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Manage</span>
                                                    <div className="dropdown-item--icon icon icon-arrow-top-right" />
                                                </a>
                                                <a className="dropdown-item is-danger">
                                                    <span className="dropdown-item--label">Delete</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-default btn-transparent text-muted text-nowrap align-self-start" role="button">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add capsule</span>
                                    </button>
                                </div>
                                <div className="item-group">
                                    <div className="item-group-header">
                                        <h4 className="nav-title flex-fill mb-none">4. Module name</h4>
                                        <div className="badge is-pill is-muted">
                                            <svg width={12} height={12} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M6 9C7.65685 9 9 7.65685 9 6C9 4.34315 7.65685 3 6 3C4.34315 3 3 4.34315 3 6C3 7.65685 4.34315 9 6 9ZM6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z" fill="currentColor" />
                                            </svg>
                                            <span>May 21</span>
                                        </div>
                                        <span className="badge badge-notification is-highlight">0</span>
                                        <div className="dropdown-container">
                                            <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <span className="icon icon-dots-vertical" />
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right">
                                                <h6 className="dropdown-header">Position</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to top</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move up</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Move down</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Send to bottom</span>
                                                </a>
                                                <div className="dropdown-divider" />
                                                <h6 className="dropdown-header">Actions</h6>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Edit</span>
                                                </a>
                                                <a className="dropdown-item">
                                                    <span className="dropdown-item--label">Manage</span>
                                                    <div className="dropdown-item--icon icon icon-arrow-top-right" />
                                                </a>
                                                <a className="dropdown-item is-danger">
                                                    <span className="dropdown-item--label">Delete</span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn btn-sm btn-default btn-transparent text-muted text-nowrap align-self-start" role="button">
                                        <span className="icon icon-plus-circle" />
                                        <span>Add capsule</span>
                                    </button>
                                </div>
                                <button className="btn btn-sm btn-default btn-transparent text-muted text-nowrap" role="button">
                                    <span className="icon icon-plus-circle" />
                                    <span>Add module</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
