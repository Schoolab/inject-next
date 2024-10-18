import React from "react";
import { Layout } from "../../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { FiltersHub } from "@/app/components/filters/FiltersHub";
import { FiltersViewHub } from "@/app/components/filters/FiltersViewsHub";
import { FilterDateRange } from "@/app/components/filters/FilterDateRange";

export const ProgramsHubDefault = () => {
    return (
        <Layout showShortcutbar={false}>
            <AppContent showSubnav={false} showTitle={false} showBreadcrumb={false} sections="cards">
                <div className="application-section">
                    <div className="items row card-row">
                        <div className="col-12 d-flex flex-column  gap-md">
                            <FiltersViewHub /> 
                            <FiltersHub />
                        </div>

                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/challenge/cover/pink_co900x600.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name {"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
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
                                            <span className="icon icon-information is-sm mr-2" />
                                            Public page{" "}
                                        </a>
                                        <span className="icon icon-chevron-right is-sm" />
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
                                                <img src="https://inject-prod.s3.amazonaws.com/images/f5e0a581-76e3-413a-a462-88dc98361172/co1800x1200.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name{"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
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
                                            <div className="badge is-pill is-open">
                                                <span className="icon icon-status-filled"></span>
                                                <span>Open</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-links">
                                    <div className="d-flex align-items-center justify-content-between text-muted mb-3">
                                        <span className="small font-weight-bold">Join the program</span>
                                        <span className="small">
                                            Canditates{" "}
                                            <span className="font-weight-bold">
                                                <span className="icon icon-account" /> 48
                                            </span>
                                        </span>
                                    </div>
                                    <div className="card-actions">
                                        <a className="btn btn-lg btn-primary btn-block" href="#">
                                            {" "}
                                            Join{" "}
                                        </a>
                                        <a className="btn btn-lg btn-default btn-block" href="#">
                                            {" "}
                                            Learn more{" "}
                                        </a>
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
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name{"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
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
                        <div className="col-12 col-md-6 col-lg-4">
                            <div className="card h-100">
                                <div className="card-infos is-linked">
                                    <div className="card-banner">
                                        <div className="card-image">
                                            <picture>
                                                <img src="https://inject-prod.s3.amazonaws.com/images/d5623bc5-fafa-49f4-8f9c-763d1f12fe44/co1920x640.png" alt="" />
                                            </picture>
                                        </div>
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name with a super long text{"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
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
                                        <div className="card-external">
                                            <div className="small">External: </div>
                                            <div className="small font-weight-bold text-truncate mx-2">
                                                {"{"}
                                                {"{"}Organization name with a super long text{"}"}
                                                {"}"}
                                            </div>
                                            <div className="small icon icon-new-tab" />
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
                            </div>
                        </div>
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
