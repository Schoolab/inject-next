import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

import { Button } from "@/app/components/buttons/Button";
import { CardFeed } from "@/app/components/cards/CardFeed";

import { Icon } from "@/app/components/icons/Icon";

import { Section } from "@/app/components/sections/Section";

import { Nps } from "@/app/components/nps/Nps";
import { DataList } from "@/app/content/data/DataList";
import { DataListItem } from "@/app/content/data/DataListItem";

import { Badges } from "@/app/components/badges/Badges";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Stack } from "@/app/components/avatars/Stack";
import { phasesToggle } from "../../../../../public/utils/phasesToggle";
import { EmptyState } from "@/app/content/empty-states/EmptyState";

import { CardAskAI } from "@/app/components/cards/CardAskAI";
import { ItemResource } from "@/app/components/items/ItemResource";
import { ProgressBar } from "@/app/components/progress/bar/ProgressBar";
import { FiltersMySpace } from "@/app/components/filters/FiltersMySpace";

export const innovationProgramsuserParticipations = () => {
    useEffect(() => {
        phasesToggle();
    }, []);
    return (
        <Layout theme="default" showShortcutbarAdmin={true} showShortcutbar={false} shortcutBarExpanded={false}>
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Consulting missions",
                        href: "",
                    },
                    {
                        label: "Members",
                        href: "",
                    },
                    {
                        label: "User name",
                    },
                    {
                        label: "Details",
                    },
                ]}
                title="User name"
                buttons={[
                    {
                        type: "default",
                        label: "Data",
                        link: "",
                        iconStartName: "plan-data",
                    },
                ]}
                subnav={[
                    {
                        label: "Details",
                        href: "",
                        isActive: true,
                    },
                    {
                        label: "Participations",
                        href: "",
                    },
                ]}
            >
                <div className="row ">
                    <div className="col-12">
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
                                    <div className="col-12 col-md-6 col-lg-4 itemToShow">
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

                                            <div className="card-links">
                                                <div className="d-flex align-items-center justify-content-between text-muted">
                                                    <span className="small font-weight-bold text-truncate mr-2">Roles</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill">
                                                            <span>Member</span>
                                                        </div>
                                                        <div className="badge is-pill is-mentor">
                                                            <span>Coach</span>
                                                        </div>
                                                        <div className="badge is-pill is-jury">
                                                            <span>Jury</span>
                                                        </div>
                                                        <div className="badge is-pill is-manager">
                                                            <span>Manager</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
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
                                            <div className="card-links">
                                                <div className="d-flex align-items-center justify-content-between text-muted">
                                                    <span className="small font-weight-bold text-truncate mr-2">Roles</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill">
                                                            <span>Member</span>
                                                        </div>
                                                        <div className="badge is-pill is-mentor">
                                                            <span>Coach</span>
                                                        </div>
                                                        <div className="badge is-pill is-jury">
                                                            <span>Jury</span>
                                                        </div>
                                                        <div className="badge is-pill is-manager">
                                                            <span>Manager</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-6 col-lg-4">
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
                                            <div className="card-links">
                                                <div className="d-flex align-items-center justify-content-between text-muted">
                                                    <span className="small font-weight-bold text-truncate mr-2">Roles</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill">
                                                            <span>Member</span>
                                                        </div>
                                                        <div className="badge is-pill is-mentor">
                                                            <span>Coach</span>
                                                        </div>
                                                        <div className="badge is-pill is-jury">
                                                            <span>Jury</span>
                                                        </div>
                                                        <div className="badge is-pill is-manager">
                                                            <span>Manager</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    
                                    <div className="col-12 col-md-6 col-lg-4">
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
                                                    <span className="small font-weight-bold text-truncate mr-2">Roles</span>
                                                    <div className="badges">
                                                        <div className="badge is-pill">
                                                            <span>Member</span>
                                                        </div>
                                                        <div className="badge is-pill is-mentor">
                                                            <span>Coach</span>
                                                        </div>
                                                        <div className="badge is-pill is-jury">
                                                            <span>Jury</span>
                                                        </div>
                                                        <div className="badge is-pill is-manager">
                                                            <span>Manager</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            
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
                                        <p className="font-weight-bold">No programs.</p>
                                        <p className="small text-muted">Pprograms will be listed here.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="application-section">
                            <h3 className="application-section--title" data-toggle="collapse" data-target="#projects" aria-expanded="true">
                                <span className="application-section--title-content">Projects (3)</span>
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
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                    <div className="card-image bg-highlight bg-random-2">
                                                        <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                                            <span>E</span>
                                                        </span>
                                                    </div>

                                                    <div className="card-external">
                                                        <div className="small icon icon-school"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2"> Program name</div>
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
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                    <div className="card-image bg-highlight bg-random-4">
                                                        <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                                            <span>W</span>
                                                        </span>
                                                    </div>

                                                    <div className="card-external">
                                                        <div className="small icon icon-school"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2">Program name</div>
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
                                    <div className="col-12 col-md-6 col-lg-4">
                                        <div className="card h-100">
                                            <div className="card-infos is-linked">
                                            <div className="card-banner">
                                                    <div className="card-image bg-highlight bg-random-1">
                                                        <span className="icon icon--letter is-64px position-absolute top-50 start-50 translate-middle">
                                                            <span>W</span>
                                                        </span>
                                                    </div>

                                                    <div className="card-external">
                                                        <div className="small icon icon-school"></div>
                                                        <div className="small font-weight-bold text-truncate mx-2">Program name</div>
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
                                        <p className="small text-muted">Projects will be listed here.</p>
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
