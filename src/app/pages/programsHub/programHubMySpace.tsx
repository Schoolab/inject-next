import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/Button";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { FiltersMySpace } from "@/app/components/filters/FiltersMySpace";
import { showMore } from "../../../../public/utils/showMore";

export const programHubMySpace = () => {
    useEffect(() => {
        showMore();
    }, []);
    return (
        <Layout shortcutBarExpanded={false} showShortcutbar={false} hub={true}>
            <AppContent showSubnav={false} showTitle={false} showBreadcrumb={false} sections="cards">
                <div className="row ">
                    <div className="col-12 col-lg-6 col-xl-8 ">
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#programs" aria-expanded="true">
                                <span className="application-section--title-content">Programs (4)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="programs">
                                <div className="row card-row">
                                    <div className="col-12 d-flex flex-column gap-md">
                                        <div id="tables-views" className="d-flex scroll-h flex-lg-row gap-xs pb-16px border-bottom flex-nowrap">
                                            <form name="views" className="dataTableFilter">
                                                <div className="d-flex btn-group btn-group-lg btn-group-toggle btn-filter-radios" data-toggle="buttons" data-col={0}>
                                                    <label className="btn btn-default btn-lg active">
                                                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_0" defaultValue="_default" autoComplete="off" required defaultChecked />
                                                        All
                                                    </label>
                                                    <label className="btn btn-default btn-lg">
                                                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                                                        Participant
                                                    </label>
                                                    <label className="btn btn-default btn-lg">
                                                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                                                        Expert
                                                    </label>
                                                    <label className="btn btn-default btn-lg">
                                                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                                                        Jury
                                                    </label>
                                                    <label className="btn btn-default btn-lg">
                                                        <input type="radio" className="btn-check" name="resourcesMainFilters[related]" id="resourcesMainFilters_related_1" defaultValue="draft" autoComplete="off" required />
                                                        Manager
                                                    </label>
                                                </div>
                                            </form>
                                        </div>
                                        <FiltersMySpace />
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6 itemToShow">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/f5e0a581-76e3-413a-a462-88dc98361172/co1800x1200.png" alt="" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                        {" "}
                                                        {"{"}
                                                        {"{"}Program name{"}"}
                                                        {"}"}
                                                    </a>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                    <div className="d-flex align-items- center flex-wrap">
                                                        <div className="badges mr-3">
                                                            <div className="badge is-pill">Food</div>
                                                            <a className="badge is-pill" href="#">
                                                                Plastic
                                                            </a>
                                                            <a className="badge is-pill" href="#">
                                                                DEI
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-open">
                                                            <span className="icon icon-status-filled"></span>
                                                            <span>Open</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="card-targets">
                                                <div className="card-target">
                                                    <a href="#" className="stretched-link d-flex align-items-center">
                                                        <span className="icon icon-project is-sm" />
                                                        <span>Project overview</span>
                                                    </a>
                                                    <span className="icon icon-chevron-right is-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/b9751cfd-f746-4963-af9e-23f335a5792f/co1920x640.png" alt="" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                        {" "}
                                                        {"{"}
                                                        {"{"}Program name{"}"}
                                                        {"}"}
                                                    </a>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="badges mr-3">
                                                            <div className="badge is-pill">Food</div>
                                                            <a className="badge is-pill" href="#">
                                                                Plastic
                                                            </a>
                                                            <a className="badge is-pill" href="#">
                                                                DEI
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-progress">
                                                            <span className="icon icon-status-dashed"></span>
                                                            <span>In progress</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-targets">
                                                <div className="card-target">
                                                    <a href="#" className="stretched-link d-flex align-items-center">
                                                        <span className="icon icon-settings is-sm mr-2" />
                                                        Manage program{" "}
                                                    </a>
                                                    <span className="icon icon-chevron-right is-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/d5623bc5-fafa-49f4-8f9c-763d1f12fe44/co1920x640.png" alt="" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                        {" "}
                                                        {"{"}
                                                        {"{"}Program name{"}"}
                                                        {"}"}
                                                    </a>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                    <div className="mr-3 mb-3">
                                                        <span className="text-muted small text-nowrap">No category...</span>
                                                    </div>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-closed">
                                                            <span className="icon icon-minus-circle" />
                                                            <span>Closed</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-targets">
                                                <div className="card-target">
                                                    <a href="#" className="stretched-link d-flex align-items-center">
                                                        <span className="icon icon-account-supervisor-circle is-sm" />
                                                        <span>Open expert overview</span>
                                                    </a>
                                                    <span className="icon icon-chevron-right is-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/bc84f5cc-c5be-45ac-a0f8-f2ad3b7efa91/co1800x1200.jpeg" alt="" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                        {" "}
                                                        {"{"}
                                                        {"{"}Program name{"}"}
                                                        {"}"}
                                                    </a>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="badges mr-3">
                                                            <div className="badge is-pill">Food</div>
                                                        </div>
                                                    </div>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-draft">
                                                            <span className="icon icon-status-bordered"></span>
                                                            <span>Draft</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-targets">
                                                <div className="card-target">
                                                    <a href="#" className="stretched-link d-flex align-items-center">
                                                        <span className="icon icon-gavel is-sm" />
                                                        <span>Open jury overview</span>
                                                    </a>
                                                    <span className="icon icon-chevron-right is-sm" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/bc84f5cc-c5be-45ac-a0f8-f2ad3b7efa91/co1800x1200.jpeg" alt="" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                        {" "}
                                                        {"{"}
                                                        {"{"}Program name{"}"}
                                                        {"}"}
                                                    </a>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="badges mr-3">
                                                            <div className="badge is-pill">Food</div>
                                                        </div>
                                                    </div>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-draft">
                                                            <span className="icon icon-status-bordered"></span>
                                                            <span>Draft</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-links">
                                                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                                    <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-draft">
                                                            <span className="icon icon-status-bordered"></span>
                                                            <span>Submitted</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-actions">
                                                    <a className="btn btn-lg btn-primary btn-block" href="#">
                                                        <span>Complete</span>
                                                    </a>
                                                    <a className="btn btn-lg btn-default btn-block" href="#">
                                                        <span>Delete application</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/bc84f5cc-c5be-45ac-a0f8-f2ad3b7efa91/co1800x1200.jpeg" alt="" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                        {" "}
                                                        {"{"}
                                                        {"{"}Program name{"}"}
                                                        {"}"}
                                                    </a>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="badges mr-3">
                                                            <div className="badge is-pill">Food</div>
                                                        </div>
                                                    </div>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-draft">
                                                            <span className="icon icon-status-bordered"></span>
                                                            <span>Draft</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-links">
                                                <div className="d-flex align-items-center justify-content-between text-muted">
                                                    <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-progress">
                                                            <span className="icon icon-status-dashed"></span>
                                                            <span>In review</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/bc84f5cc-c5be-45ac-a0f8-f2ad3b7efa91/co1800x1200.jpeg" alt="" />
                                                        </picture>
                                                    </div>
                                                </div>
                                                <div className="card-title">
                                                    <a href="/program/142/details" className="h3 mb-none stretched-link line-clamp-1">
                                                        {" "}
                                                        {"{"}
                                                        {"{"}Program name{"}"}
                                                        {"}"}
                                                    </a>
                                                </div>
                                                <div className="d-flex justify-content-between align-items-center flex-wrap row-gap-2xs">
                                                    <div className="d-flex align-items-center flex-wrap">
                                                        <div className="badges mr-3">
                                                            <div className="badge is-pill">Food</div>
                                                        </div>
                                                    </div>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-draft">
                                                            <span className="icon icon-status-bordered"></span>
                                                            <span>Draft</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-links">
                                                <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                                    <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-closed">
                                                            <span className="icon icon-minus-circle"></span>
                                                            <span>Rejected</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-actions">
                                                    <a className="btn btn-lg btn-default btn-block" href="#">
                                                        <span>Delete application</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-default btn-block showMoreBtn" href="/user/projects">
                                    Show more
                                </a>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#programsEmpty" aria-expanded="true">
                                <span className="application-section--title-content">Programs (0)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="programsEmpty">
                                <div className="bg-white border rounded px-40px py-40px d-flex flex-column align-items-center gap-0px text-center">
                                    <div className="d-flex pb-16px">
                                        <span className="icon icon-school is-24px" />
                                    </div>
                                    <div className="d-flex flex-column gap-2xs">
                                        <p className="font-weight-bold">You're not taking part in any programs yet.</p>
                                        <p className="small text-muted">Your programs will be listed here.</p>
                                    </div>
                                    <div className="d-flex pt-32px">
                                        <a href="#" className="btn btn-lg btn-default">
                                            <span>Show Programs</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#projects" aria-expanded="true">
                                <span className="application-section--title-content">Projects (2)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show" id="projects">
                                <div className="row card-row">
                                    <div className="col-12 d-flex flex-column gap-md">
                                        <div className="datatableFiltersWrapper ">
                                            <div className="d-flex flex-column flex-xl-row align-items-xl-start">
                                                <div className="d-flex flex-column flex-xl-row mr-xl-3 mr-0">
                                                    <div id="sg-datatables-challenges_list_datatable_filter" className="dataTables_filter mb-5 mb-xl-0">
                                                        <input type="search" className="form-control form-control-md" placeholder="Search" aria-controls="sg-datatables-challenges_list_datatable" style={{ minWidth: 150, width: "100%" }} />
                                                    </div>
                                                </div>
                                                <div className="d-flex flex-column flex-xl-row scroll-h mr-xl-3 mr-0 flex-fill">
                                                    <div className="mr-xl-3 mr-0 mb-3 mb-xl-0 dataFilter">
                                                        <div className="dropdown position-static mb-3">
                                                            <a className="btn btn-lg btn-default custom-select small text-nowrap" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" style={{ fontSize: ".9375rem" }}>
                                                                Program
                                                            </a>
                                                            <div className="dropdown-menu" style={{}}>
                                                                <form name="organization" method="post" className=" px-5 pt-5 pb-3" style={{ maxHeight: 300, overflowY: "auto" }}>
                                                                    <div className="">
                                                                        <input className="form-control form-control-md searchControl mb-3" placeholder="Search" type="search" />
                                                                        <div className="btn-group w-100 mb-3" role="group">
                                                                            <a className="btn btn-sm btn-default w-50 checkControl">Select all</a>
                                                                            <a className="btn btn-sm btn-default w-50 uncheckControl">Clean</a>
                                                                        </div>
                                                                        <div id="chFilters_organization">
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" id="chFilters_organization_0" name="chFilters[organization]" required className="custom-control-input" defaultValue={37} />
                                                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_0">
                                                                                    Le Perqo
                                                                                </label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" id="chFilters_organization_1" name="chFilters[organization]" required className="custom-control-input" defaultValue={34} />
                                                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_1">
                                                                                    Refactory
                                                                                </label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" id="chFilters_organization_2" name="chFilters[organization]" required className="custom-control-input" defaultValue={29} />
                                                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_2">
                                                                                    Rungis &amp; Co
                                                                                </label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" id="chFilters_organization_3" name="chFilters[organization]" required className="custom-control-input" defaultValue={2} />
                                                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_3">
                                                                                    Schoolab Startups
                                                                                </label>
                                                                            </div>
                                                                            <div className="custom-control custom-radio">
                                                                                <input type="radio" id="chFilters_organization_4" name="chFilters[organization]" required className="custom-control-input" defaultValue={31} />
                                                                                <label className="checkbox-custom custom-control-label custom-control-label required" htmlFor="chFilters_organization_4">
                                                                                    Université Paris Cité
                                                                                </label>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-external">
                                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                                    </div>
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/c17572e7-fb1e-48ac-b80d-bd77c815ed02/co1140x380.jpeg" alt="" />
                                                        </picture>
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
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-external">
                                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                                    </div>
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" alt="" />
                                                        </picture>
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
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-external">
                                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                                    </div>
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" alt="" />
                                                        </picture>
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
                                                    <span className="small font-weight-bold text-truncate mr-2"># events sessions</span>
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
                                                        <span>View project</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-external">
                                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                                    </div>
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" alt="" />
                                                        </picture>
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
                                                    <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-draft">
                                                            <span className="icon icon-status-bordered"></span>
                                                            <span>Submitted</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-actions">
                                                    <a className="btn btn-lg btn-primary btn-block" href="#">
                                                        <span>Complete</span>
                                                    </a>
                                                    <a className="btn btn-lg btn-default btn-block" href="#">
                                                        <span>Delete application</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-external">
                                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                                    </div>
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" alt="" />
                                                        </picture>
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
                                                <div className="d-flex align-items-center justify-content-between text-muted">
                                                    <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-progress">
                                                            <span className="icon icon-status-dashed"></span>
                                                            <span>In review</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-12 col-xl-6">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                                <div className="card-banner">
                                                    <div className="card-external">
                                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                                    </div>
                                                    <div className="card-image">
                                                        <picture>
                                                            <img src="https://inject-demo.s3.amazonaws.com/images/7241300b-a008-4101-b202-7f65d47c7382/co1140x380.jpeg" alt="" />
                                                        </picture>
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
                                                    <span className="small font-weight-bold text-truncate mr-2">Application status</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill is-closed">
                                                            <span className="icon icon-minus-circle"></span>
                                                            <span>Rejected</span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="card-actions">
                                                    <a className="btn btn-lg btn-default btn-block" href="#">
                                                        <span>Delete application</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <a className="btn btn-default btn-block" href="/user/projects">
                                        Show more
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#projectsEmpty" aria-expanded="true">
                                <span className="application-section--title-content">Projects (0)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show d-flex flex-column gap-xs" id="projectsEmpty">
                                <div className="bg-white border rounded px-40px py-40px d-flex flex-column align-items-center gap-0px text-center">
                                    <div className="d-flex pb-16px">
                                        <span className="icon icon-clipboard-text is-24px" />
                                    </div>
                                    <div className="d-flex flex-column gap-2xs">
                                        <p className="font-weight-bold">No project</p>
                                        <p className="small text-muted">Your projects will be listed here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 col-xl-4">
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#events" aria-expanded="true">
                                <span className="application-section--title-content">Upcoming events (2)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show d-flex flex-column gap-xs" id="events">
                                <div className="cards">
                                    <div className="card">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-external">
                                                    <div className="icon icon-program is-16px ml-n6px"></div>
                                                    <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                                </div>
                                                <div className="card-image is-3by1">
                                                    <picture>
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" alt="" />
                                                    </picture>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-sm">
                                                <div className="thumbnail is-date is-lg">
                                                    <span className="month">June</span>
                                                    <span className="day">8</span>
                                                </div>
                                                <div className="d-flex flex-column flex-fill gap-0">
                                                    <div className="card-title d-flex align-items-center gap-2xs mb-none p-2xs">
                                                        <a href="#" className="h4 mb-none stretched-link line-clamp-1">
                                                            Event Name
                                                        </a>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-xs">
                                                        <a className="badge is-pill" href="#">
                                                            <span className="icon icon-link"></span>
                                                            <span>Online</span>
                                                        </a>
                                                        <a className="badge is-pill is-draft" href="#">
                                                            <span className="icon icon-status-bordered"></span>
                                                            <span>Start at 10am</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card">
                                        <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                <div className="card-external">
                                                    <div className="icon icon-program is-16px ml-n6px"></div>
                                                    <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                                </div>
                                                <div className="card-image is-3by1">
                                                    <picture>
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" alt="" />
                                                    </picture>
                                                </div>
                                            </div>
                                            <div className="d-flex gap-sm">
                                                <div className="thumbnail is-date is-lg">
                                                    <span className="month">June</span>
                                                    <span className="day">8</span>
                                                </div>
                                                <div className="d-flex flex-column flex-fill gap-0">
                                                    <div className="card-title d-flex align-items-center gap-2xs mb-none p-2xs">
                                                        <a href="#" className="h4 mb-none stretched-link line-clamp-1">
                                                            Event Name
                                                        </a>
                                                    </div>
                                                    <div className="d-flex justify-content-between align-items-end flex-wrap gap-xs">
                                                        <a className="badge is-pill" href="#">
                                                            <span className="icon icon-link"></span>
                                                            <span>Online</span>
                                                        </a>
                                                        <a className="badge is-pill is-draft" href="#">
                                                            <span className="icon icon-status-bordered"></span>
                                                            <span>Start at 10am</span>
                                                        </a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-default btn-block" href="/user/projects">
                                    Show more
                                </a>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#coaching" aria-expanded="true">
                                <span className="application-section--title-content">Coaching (2)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show d-flex flex-column gap-xs" id="coaching">
                                <div className="cards">
                                    <div className="card h-100">
                                        <div className="card-external">
                                            <div className="icon icon-program is-16px ml-n6px"></div>
                                            <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                        </div>
                                        <div className="card-infos is-linked d-flex align-items-start gap-sm pt-7">
                                            <div className="thumbnail-relation m-auto">
                                                <span className="icon icon--letter is-40px">
                                                    <span>P</span>
                                                </span>
                                                <div className="thumbnail is-oval is-sm is-bordered is-top">
                                                    <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                                </div>
                                            </div>
                                            <div className="card-title flex-grow-1">
                                                <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                    <span className="line-clamp-1"> Project 24 / expert.name</span>
                                                </a>

                                                <ul className="text-muted small metas is-list mb-none">
                                                    <li
                                                        className="list-inline-item z-1"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                        data-html="true"
                                                        data-boundary="window"
                                                    >
                                                        <ul className="metas is-list">
                                                            <li>
                                                                <div className="thumbnail-stack">
                                                                    <div className="thumbnail is-oval is-xs">
                                                                        <img src="https://inject-intrap.s3.amazonaws.com/images/d5b965a6-9324-45d3-aac3-613e623d95d1/sq150.jpeg" />
                                                                    </div>
                                                                    <div className="thumbnail is-oval is-xs">
                                                                        <img src="https://inject-intrap.s3.amazonaws.com/images/e3af9c9d-3c0f-4fbd-a728-ce925a201011/sq150.jpeg" />
                                                                    </div>
                                                                </div>
                                                                <a href="/program/71/project/2903/mentors">
                                                                    <small className="text-muted">2 Members</small>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li>
                                                        <span>July 12, 2024</span>
                                                    </li>
                                                    <li>
                                                        <span>4:30 PM</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card h-100">
                                        <div className="card-external">
                                            <div className="icon icon-program is-16px ml-n6px"></div>
                                            <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                        </div>
                                        <div className="card-infos is-linked d-flex align-items-start gap-sm pt-7">
                                            <div className="thumbnail-relation m-auto">
                                                <div className="thumbnail is-oval is-lg is-bordered">
                                                    <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                                                </div>
                                                <span className="icon icon--letter is-24px is-top">
                                                    <span>P</span>
                                                </span>
                                            </div>
                                            <div className="card-title flex-grow-1">
                                                <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                    <span className="line-clamp-1"> Expert.name / Project 24 </span>
                                                </a>

                                                <ul className="text-muted small metas is-list mb-none">
                                                    <li>
                                                        <span>July 12, 2024</span>
                                                    </li>
                                                    <li>
                                                        <span>4:30 PM</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <a className="btn btn-default btn-block" href="/user/projects">
                                    Show more
                                </a>
                            </div>
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#evaluations" aria-expanded="true">
                                <span className="application-section--title-content">Evaluations (1)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show d-flex flex-column gap-xs" id="evaluations">
                            <div className="cards">
                                <div className="card h-100">
                                    <div className="card-external">
                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                    </div>
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm pt-7">
                                        <span className="icon icon-gavel is-md"></span>

                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1"> Evaluation session name</span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <div className="d-flex align-items-center gap-xs">
                                                        <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                                            <circle className="progress-circle progress-circle-bg" />
                                                            <circle className="progress-circle progress-circle-percent" />
                                                            <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                                        </svg>
                                                        <div className="d-flex flex-fill gap-2xs">
                                                            <span className="small">1/4</span>
                                                            <span className="small">Projects</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Until July 12, 2024</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-default btn-block" href="/user/projects">
                                Show more
                            </a>
                            </div>
                          
                            
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#progression" aria-expanded="true">
                                <span className="application-section--title-content">Progression (2)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show d-flex flex-column gap-xs" id="progression">
                            <div className="cards">
                                <div className="card h-100">
                                    <div className="card-external">
                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                    </div>
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm pt-7">
                                        <span className="icon icon-library is-md"></span>

                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1"> Learning Courses</span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <div className="d-flex align-items-center gap-xs">
                                                        <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 25 }}>
                                                            <circle className="progress-circle progress-circle-bg" />
                                                            <circle className="progress-circle progress-circle-percent" />
                                                            <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                                        </svg>
                                                        <div className="d-flex flex-fill gap-2xs">
                                                            <span className="small">1/4</span>
                                                            <span className="small">Lessons</span>
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="card h-100">
                                    <div className="card-external">
                                        <div className="icon icon-program is-16px ml-n6px"></div>
                                        <div className="small font-weight-bold text-truncate mx-2">Program Name</div>
                                    </div>
                                    <div className="card-infos is-linked d-flex align-items-start gap-sm pt-7">
                                        <span className="icon icon-bullseye-arrow is-md"></span>

                                        <div className="card-title flex-grow-1">
                                            <a href="#" className="h4 mb-none stretched-link d-flex flex-wrap column-gap-2xs">
                                                <span className="line-clamp-1">Objectives</span>
                                            </a>

                                            <ul className="text-muted small metas is-list mb-none">
                                                <li>
                                                    <div className="d-flex align-items-center gap-xs">
                                                        <svg className="progress-circle-container is-sm" viewBox="0 0 32 32" data-percent={25} style={{ ["--percent" as any]: 66 }}>
                                                            <circle className="progress-circle progress-circle-bg" />
                                                            <circle className="progress-circle progress-circle-percent" />
                                                            <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                            {/* <text class="progress-circle-text" x="16" y="20">567/756</text> */}
                                                        </svg>
                                                        <div className="d-flex flex-fill gap-2xs">
                                                            <span className="small">4/6</span>
                                                            <span className="small">Tasks</span>
                                                        </div>
                                                    </div>
                                                </li>
                                                <li>
                                                    <span>Until July 12, 2024</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="btn btn-default btn-block" href="/user/projects">
                                Show more
                            </a>
                            </div>
                           
                            
                        </div>
                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#coachingEmpty" aria-expanded="true">
                                <span className="application-section--title-content">Coaching (0)</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show d-flex flex-column gap-xs" id="coachingEmpty">
                            <div className="bg-white border rounded px-40px py-40px d-flex flex-column align-items-center gap-0px text-center">
                                <div className="d-flex pb-16px">
                                    <span className="icon icon-account-supervisor-circle is-24px" />
                                </div>
                                <div className="d-flex flex-column gap-2xs">
                                    <p className="font-weight-bold">No coaching</p>
                                    <p className="small text-muted">Your coaching will be listed here.</p>
                                </div>
                            </div>
                            </div>
                           
                        </div>

                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#eventsEmpty" aria-expanded="true">
                                <span className="application-section--title-content">Upcoming events (0))</span>
                                <span className="icon icon-chevron-right ml-auto" />
                            </h3>
                            <div className="collapse show d-flex flex-column gap-xs" id="eventsEmpty">
                            <div className="bg-white border rounded px-40px py-40px d-flex flex-column align-items-center gap-0px text-center">
                                <div className="d-flex pb-16px">
                                    <span className="icon icon-calendar is-24px" />
                                </div>

                                <div className="d-flex flex-column gap-2xs">
                                    <p className="font-weight-bold">No upcoming events</p>
                                    <p className="small text-muted">Your upcoming events will be listed here.</p>
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
