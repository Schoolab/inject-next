import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/buttons/Button";
import { FilterDateRange } from "@/app/components/filters/FilterDateRange";
import { Alert } from "@/app/components/alerts/Alert";

export const ExpertProjectMentored = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent>
                <div className="application-section">
                    {/* <div className="row">
                        <div className="col-12">
                            <div className="card is-assistant p-md d-flex flex-column flex-lg-row gap-md h-100  align-items-center justify-content-between">
                                <div className="flex-fill">
                                    <div className="d-flex gap-2xs align-items-center">
                                        <span className="icon is-2sm icon-ai text-assistant"></span>
                                        <h4>Ask AI</h4>
                                    </div>

                                    <p>Let artificial intelligence rank projects by relevance. The system matches your preferences and expertise with each project’s needs to highlight the most relevant ones.</p>
                                </div>
                                <div className="d-flex gap-xs">
                                    <a href="#" className="btn btn-default flex-fill" role="button">
                                        <span className="icon icon-reload"></span>
                                        <span>Refresh relevance scores</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="row card-row">
                        <div className="col-12">
                            <div className="alert alert-info">
                                <span className="icon is-2sm icon-ai"></span>
                                <div className="flex-fill">
                                    <p className="m-none font-weight-bold">Ask AI</p>
                                    <p>Let artificial intelligence rank projects by relevance. The system matches your preferences and expertise with each project’s needs to highlight the most relevant ones.</p>
                                </div>
                                <div className="flex-lg-shrink-1">
                                    <a href="#" className="btn btn-default btn-sm btn-block" role="button">
                                        <span className="icon icon-reload"></span>
                                        <span>Refresh relevance scores</span>
                                    </a>
                                </div>
                            </div>
                            <div className="datatableFiltersWrapper ">
                                <div className="d-flex flex-column flex-lg-row align-items-lg-start">
                                    <div className="d-flex flex-column flex-lg-row mr-lg-3 mr-0">
                                        <div id="sg-datatables-challenges_list_datatable_filter" className="dataTables_filter mb-5 mb-lg-0">
                                            <input type="search" className="form-control form-control-md" placeholder="Search" aria-controls="sg-datatables-challenges_list_datatable" style={{ minWidth: 150, width: "100%" }} />
                                        </div>
                                    </div>
                                    <div className="d-flex flex-column flex-lg-row scroll-h mr-lg-3 mr-0 flex-fill">
                                        <div className="mr-lg-3 mr-0 mb-5 mb-lg-0 d-flex align-items-start">
                                            <div className="dropdown dataFitlersControl" data-save-to-close="true">
                                                <a className="btn btn-lg btn-muted" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                                                    <span className="icon icon-plus-circle" />
                                                    <span>Filter</span>
                                                </a>

                                                <div className="dropdown-menu gap-xs">
                                                    <form className="d-flex flex-column gap-md px-16px">
                                                        <div className="form-group">
                                                            <label>Filters</label>
                                                            <select required data-hint="type" aria-describedby="exemple_help" className="form-control custom-select" defaultValue="">
                                                                <option value="" disabled>
                                                                    Choose a filter...
                                                                </option>
                                                            </select>
                                                            <div className="invalid-feedback">Please choose an option in the select.</div>
                                                        </div>
                                                    </form>
                                                    <div className="d-flex flex-column dataFitlersControlRemove px-16px"></div>
                                                </div>
                                            </div>

                                            <a className="btn btn-lg btn-muted dataFitlersClean" href="#" role="button">
                                                <span>Clean</span>
                                            </a>
                                        </div>
                                    </div>

                                    <div className="d-flex flex-column flex-lg-row">
                                        <div className="mr-lg-3 mr-0 mb-5 mb-lg-0" data-toggle="tooltip" data-placement="top" data-original-title="Sort by range dates" data-boundary="window">
                                            <FilterDateRange />
                                        </div>
                                        <div className="mb-5 mb-lg-0">
                                            <a id="btn-new-challenge" className="btn btn-default btn-icon btn-lg btn-block text-nowrap" data-form-url="/organization/challenge/modal/new" href="#">
                                                <span className="icon-ai text-assistant" />
                                                <span>Ask AI</span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image bg-highlight bg-random-1">
                                            <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                                <span>E</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                        <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                            Equality for all
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                        <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                            <div className="d-flex gap-2xs text-muted small">
                                                <span className="icon icon-members is-xs" />
                                                <span className="text-nowrap">2 members</span>
                                            </div>
                                            <div className="badges flex-nowrap">
                                                <div className="badge is-pill">2words tag</div>
                                                <div className="badge is-pill">2words tag</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                        <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                                        <span className="small">
                                            Total hours{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon--clock" /> 1h30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span className="icon icon-plus-circle is-sm mr-2" />
                                            <span>Add session</span>
                                        </a>
                                        <a className="btn btn-lg btn-default btn-block" href="#">
                                            <span className="icon icon-bookmark-outline is-sm mr-2" />
                                            <span>Follow</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image bg-highlight bg-random-2">
                                            <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                                <span>W</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                        <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                            Wind turbine
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                        <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                            <div className="d-flex gap-2xs text-muted small">
                                                <span className="icon icon-members is-xs" />
                                                <span className="text-nowrap">2 members</span>
                                            </div>
                                            <div className="badges flex-nowrap">
                                                <div className="badge is-pill">2words tag</div>
                                                <div className="badge is-pill">2words tag</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                        <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                                        <span className="small">
                                            Total hours{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon--clock" /> 1h30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span className="icon icon-plus-circle is-sm mr-2" />
                                            <span>Add session</span>
                                        </a>
                                        <a className="btn btn-lg btn-default btn-block" href="#">
                                            <span className="icon icon-bookmark-outline is-sm mr-2" />
                                            <span>Follow</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image bg-highlight bg-random-3">
                                            <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                                <span>O</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                        <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                            One world
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                        <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                            <div className="d-flex gap-2xs text-muted small">
                                                <span className="icon icon-members is-xs" />
                                                <span className="text-nowrap">2 members</span>
                                            </div>
                                            <div className="badges flex-nowrap">
                                                <div className="badge is-pill">2words tag</div>
                                                <div className="badge is-pill">2words tag</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                        <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                                        <span className="small">
                                            Total hours{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon--clock" /> 1h30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span className="icon icon-plus-circle is-sm mr-2" />
                                            <span>Add session</span>
                                        </a>
                                        <a className="btn btn-lg btn-default btn-block" href="#">
                                            <span className="icon icon-bookmark-outline is-sm mr-2" />
                                            <span>Follow</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image bg-highlight bg-random-4">
                                            <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                                <span>O</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="card-title d-flex align-items-center gap-2xs mb-none">
                                        <a href="#" className="h3 mb-none stretched-link line-clamp-1">
                                            Orange book
                                        </a>
                                    </div>
                                    <div className="d-flex justify-content-between align-items-end flex-nowrap gap-0">
                                        <div className="d-flex align-items-center flex-wrap flex-lg-nowrap flex-shrink-1 gap-xs overflow-hidden">
                                            <div className="d-flex gap-2xs text-muted small">
                                                <span className="icon icon-members is-xs" />
                                                <span className="text-nowrap">2 members</span>
                                            </div>
                                            <div className="badges flex-nowrap">
                                                <div className="badge is-pill">2words tag</div>
                                                <div className="badge is-pill">2words tag</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                        <span className="small font-weight-bold text-truncate mr-2"># coaching sessions</span>
                                        <span className="small">
                                            Total hours{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon--clock" /> 1h30
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            <span className="icon icon-plus-circle is-sm mr-2" />
                                            <span>Add session</span>
                                        </a>
                                        <a className="btn btn-lg btn-default btn-block" href="#">
                                            <span className="icon icon-bookmark-outline is-sm mr-2" />
                                            <span>Follow</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
