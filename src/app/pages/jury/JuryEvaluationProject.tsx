import React from "react";
import { useEffect } from "react";

import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideJury } from "@/app/components/asides/AsideJury";
import { aside } from "../../../../public/utils/aside";

export const JuryEvaluationProject = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout>
            <AppContent showSubnav={false} sections="separated" isAsside={true}>
                <div className="d-flex align-items-start">
                    <div className="container-lg container-fluid">
                        <div className="row justify-content-center flex-grow-1">
                            <div className="col-12 col-xl-10">
                                <div className="application-section">
                                    <h3>Criteria</h3>
                                    <p>Here are all the criteria that were selected for this jury session. Use them to evaluate the project and submit your evaluation.</p>
                                    <div className="card p-5 d-flex">
                                        <div className="row">
                                            <div className="col-12 col-lg-5 mb-5 mb-lg-0">
                                                <div
                                                    className="cover-container rounded "
                                                    style={{
                                                        backgroundImage: 'url("img/hero-3.png")',
                                                        backgroundRepeat: "no-repeat",
                                                        backgroundPosition: "center",
                                                        backgroundSize: "cover",
                                                    }}
                                                />
                                            </div>
                                            <div className="col-12 col-lg-7">
                                                <h3 className="mb-2">Green energy</h3>
                                                <ul className="list-inline list-dotted text-muted">
                                                    <li className="list-inline-item">
                                                        <a className="icon icon-program" href="/program/esg-awards">
                                                            ESG Awards
                                                        </a>
                                                    </li>
                                                    <li className="list-inline-item small">
                                                        <span className="icon icon-time">01/30/2023</span>
                                                    </li>
                                                    <li className="list-inline-item small">2 members</li>
                                                </ul>
                                                <p>Linking our illuminated ads to green energy</p>
                                                <ul className="list-inline ">
                                                    <li className="list-inline-item mr-3">
                                                        <a className="btn btn-lg btn-default" href="">
                                                            <span className="icon icon-new-tab mr-2" />
                                                            show more
                                                        </a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card ">
                                        <div className="card-header" data-toggle="collapse" data-target="#delivrables" aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <div className="mr-3 d-none">
                                                    <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                </div>
                                                <strong>Project delivrables</strong>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </div>
                                        </div>
                                        <div className="card-body collapse" id="delivrables">
                                            <h4>Lorem ipsum</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem </p>
                                            <h4>Lorem ipsum</h4>
                                            <div className="badges mb-3">
                                                <a className="badge is-pill" href="#">
                                                    Lorem
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    Ipsum
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    Lorem
                                                </a>
                                            </div>
                                            <h4>Lorem ipsum</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                                            <h4>Lorem ipsum</h4>
                                            <div className="badges mb-3">
                                                <a className="badge is-pill" href="#">
                                                    Isum
                                                </a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                                            <h4>Lorem ipsum</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem </p>
                                            <h4>Lorem ipsum</h4>
                                            <div className="badges mb-3">
                                                <a className="badge is-pill" href="#">
                                                    Lorem
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    Ipsum
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    Lorem
                                                </a>
                                            </div>
                                            <h4>Lorem ipsum</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                                            <h4>Lorem ipsum</h4>
                                            <div className="badges mb-3">
                                                <a className="badge is-pill" href="#">
                                                    Isum
                                                </a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                                            <h4>Lorem ipsum</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem </p>
                                            <h4>Lorem ipsum</h4>
                                            <div className="badges mb-3">
                                                <a className="badge is-pill" href="#">
                                                    Lorem
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    Ipsum
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    Lorem
                                                </a>
                                            </div>
                                            <h4>Lorem ipsum</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                                            <h4>Lorem ipsum</h4>
                                            <div className="badges mb-3">
                                                <a className="badge is-pill" href="#">
                                                    Isum
                                                </a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                                            <h4>Lorem ipsum</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem </p>
                                            <h4>Lorem ipsum</h4>
                                            <div className="badges mb-3">
                                                <a className="badge is-pill" href="#">
                                                    Lorem
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    Ipsum
                                                </a>
                                                <a className="badge is-pill" href="#">
                                                    Lorem
                                                </a>
                                            </div>
                                            <h4>Lorem ipsum</h4>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                                            <h4>Lorem ipsum</h4>
                                            <div className="badges mb-3">
                                                <a className="badge is-pill" href="#">
                                                    Isum
                                                </a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elem entum felis diam eget massa.</p>
                                        </div>
                                    </div>
                                    <div className="card ">
                                        <div className="card-header" data-toggle="collapse" data-target="#Note" aria-expanded="false">
                                            <div className="d-flex align-items-center">
                                                <div className="mr-3 d-none">
                                                    <svg className="progress-circle-container is-small flex-shrink-0" viewBox="0 0 32 32" data-percent={100} style={{ ["--percent" as any]: 100 }}>
                                                        <circle className="progress-circle progress-circle-bg" />
                                                        <circle className="progress-circle progress-circle-percent" />
                                                        <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                                    </svg>
                                                </div>
                                                <strong>Note</strong>
                                                <span className="icon icon-chevron-right ml-auto" />
                                            </div>
                                        </div>
                                        <div className="card-body collapse" id="Note">
                                            <div id="challenge-blogposts-container">
                                                <a className="message mb-5 startMessageButton" href="/program/75/manage/updates/new-update">
                                                    <span className="thumbnail is-oval is-lg" data-toggle="tooltip" title="" data-original-title="John Doe">
                                                        <div className="thumbnail is-oval">
                                                            <span className="icon icon-account" />
                                                        </div>
                                                    </span>
                                                    <div className="message-body">
                                                        <div className="message-list">
                                                            <div className="message-row">
                                                                <input type="text" className="form-control message-content bg-white cursorLink" readOnly placeholder="Start a new note..." />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </a>
                                                <div className="blogPostsWall" data-url="/program/75/workspace/updates/wall?preview=3">
                                                    <div className="card m-none p-5 wallLoader d-none">
                                                        <div className="pb-0 pt-3 pt-sm-5">
                                                            <div className="item is-wide is-static">
                                                                <h4 className="text-center w-100 mb-3">Loading...</h4>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="cardsContainer">
                                                        <div className="card blogPostCard">
                                                            <div className="card-body pb-0 pt-3 pt-sm-5">
                                                                <div className="item is-wide is-static">
                                                                    <div className="item-row">
                                                                        <a href="#" className=" userProfileModale userProfileModale-1161" data-url="/user/7ab381cb/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                                            <div className="thumbnail is-oval is-lg">
                                                                                <img src="https://inject-prod.s3.amazonaws.com/images/0ee71840-6d78-4784-acff-6f8d2722dbb7/sq150.jpeg" />
                                                                            </div>
                                                                        </a>
                                                                        <div className="item-content ml-3 py-1">
                                                                            <a href="#" className="item-title h4 mb-none userProfileModale userProfileModale-1161" data-url="/user/7ab381cb/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                                                {" "}
                                                                                Sarah Lamoureux{" "}
                                                                            </a>
                                                                            <ul className="item-caption metas is-list text-muted small">
                                                                                <li>
                                                                                    <a href="#" className="text-decoration-none userProfileModale userProfileModale-1161" data-url="/user/7ab381cb/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                                                        {" "}
                                                                                        Community Builder, Schoolab{" "}
                                                                                    </a>
                                                                                </li>
                                                                                <li>
                                                                                    <a href="#" className="text-decoration-none userProfileModale userProfileModale-1161" data-url="/user/7ab381cb/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                                                        {" "}
                                                                                        06/20/2023 10:02{" "}
                                                                                    </a>
                                                                                </li>
                                                                            </ul>
                                                                        </div>
                                                                        <div className="item-options dropdown">
                                                                            <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                                <span className="icon icon-options" />
                                                                            </a>
                                                                            <div className="dropdown-menu dropdown-menu-right">
                                                                                <a className="dropdown-item" href="/program/192/manage/updates">
                                                                                    Manage posts
                                                                                </a>
                                                                                <div className="dropdown-divider" />
                                                                                <a className="dropdown-item" href="/program/192/manage/updates/540">
                                                                                    Edit
                                                                                </a>
                                                                                <a className="dropdown-item is-danger deleteAction" href="#" data-url="/program/192/manage/updates/540/delete" data-confirm-modal="deleteBlogPostConfirmModal">
                                                                                    {" "}
                                                                                    Delete{" "}
                                                                                </a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div className="item-row">
                                                                        <div className="item-content">
                                                                            <p>Bonjour à tous·tes,</p>
                                                                            <p>Voici ma note !</p>
                                                                            <p className="text-left">
                                                                                <a className="text-primary" href="/program/b2bf50cf/updates/540">
                                                                                    See more →
                                                                                </a>
                                                                            </p>
                                                                        </div>
                                                                    </div>
                                                                    <div id="resourceList" className="resourcesWallWrapper">
                                                                        <div className="resourcesWrapper ">
                                                                            <section className="resourcesList">
                                                                                <div className="item is-bordered resource mb-3">
                                                                                    <div className="item-row">
                                                                                        <div className="item-row cursorLink triggerResource">
                                                                                            <div className="item-icon icon icon-file-outline" />
                                                                                            <div className="item-content ml-3">
                                                                                                <a className="item-title h4 mb-none stretched-link text-truncate" href="https://schoolab.skedda.com/register?i=277598&k=0tUkWBHX4UlHvcRlvn6Cx60VhMZD7EZl" target="_blank">
                                                                                                    Activer mon compte réservation d'espace
                                                                                                </a>
                                                                                                <ul className="item-caption metas small is-list">
                                                                                                    <li>
                                                                                                        <span className="icon icon-time">&nbsp;06/20/2023 10:03</span>
                                                                                                    </li>
                                                                                                </ul>
                                                                                            </div>
                                                                                        </div>
                                                                                        <div className="item-options">
                                                                                            <a className="btn btn-lg btn-transparent btn-icon z-1" href="#" target="_blank">
                                                                                                <span className="icon icon-new-tab" />
                                                                                            </a>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </section>
                                                                            <div className="resourceEmptyState d-none">
                                                                                <div className="d-flex flex-column align-items-center py-5">
                                                                                    <span className="text-muted icon icon-file-outline is-lg" />
                                                                                    <p className="text-muted text-center mt-4">
                                                                                        <span>No document</span>
                                                                                    </p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="card-footer">
                                                                <ul className="metas is-list small">
                                                                    <li className="likeCounter" data-ref="blogPost788">
                                                                        {" "}
                                                                        1 like{" "}
                                                                    </li>
                                                                    <li>
                                                                        <i className="icon icon-comment mr-2" />
                                                                        <a className="text-muted" href="/program/b2bf50cf/updates/540#comments">
                                                                            {" "}
                                                                            No comments{" "}
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <div className="item-actions mt-3 pb-0">
                                                                    <span className="btn btn-lg btn-block btn-default likeButton" data-url="/rest/program/192/posts/540/like" data-ref="blogPost788">
                                                                        <i className="icon icon-thumb-up-outline" />
                                                                        <span>Like</span>
                                                                    </span>
                                                                    <a className="btn btn-lg btn-block btn-default commentButton" href="/program/b2bf50cf/updates/540#comments">
                                                                        <i className="icon icon-comment-outline" />
                                                                        <span>Comment</span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="pagerContainer mt-5 d-none">
                                                        <button className="btn btn-lg btn-block btn-default pagerLoadMoreButton">
                                                            Load more
                                                            <span className="icon icon-loading icon-spin ml-1 d-none buttonLoader" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <a id="challenge-blogposts-page-btn" className="btn btn-lg btn-block btn-default mt-3 d-none" href="/program/75/updates">
                                                Show more
                                            </a>
                                        </div>
                                    </div>
                                    <div className="aside-buttons-bottom d-flex flex-column flex-lg-row d-block d-lg-none">
                                        <button className="btn btn-lg btn-default mb-3 active">
                                            <span className="icon icon-star-outline mr-2" /> Evaluations
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="aside-buttons no-subnav d-block d-lg-none">
                        <button className="btn btn-lg btn-default mb-3 active" data-toggle="tooltip" data-original-title="Evaluations">
                            <span className="icon icon-star-outline" />
                        </button>
                    </div>
                </div>
              
            </AppContent>
            <AsideJury />
        </Layout>
    );
};
