import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideEvent } from "@/app/components/asides/examples/AsideEvent";
import { AsideNoteManager } from "@/app/components/asides/examples/AsideNoteManager";
import { aside } from "../../../../../public/utils/aside";
import { Alert } from "@/app/components/alerts/Alert";
import { CardFeed } from "@/app/components/cards/CardFeed";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Section } from "@/app/components/sections/Section";
import { DataList } from "@/app/content/data/DataList";
import { DataListItem } from "@/app/content/data/DataListItem";
import { Button } from "@/app/components/buttons/Button";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Avatar } from "@/app/components/avatars/Avatar";
import { Icon } from "@/app/components/icons/Icon";
import { Stack } from "@/app/components/avatars/Stack";
import { Badges } from "@/app/components/badges/Badges";

export const ExpertCoachingSession = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout>
            <AppContent
                sections="separated"
                showSubnav={false}
                isAsside={true}
                backLink="Back"
                breadcrumb={[
                    {
                        label: "Program",
                        href: "",
                    },
                    {
                        label: "Expert space",
                        href: "",
                    },
                    {
                        label: "Expert meeting name",
                    },
                ]}
                title="Expert meeting name"
                buttons={[
                    {
                        type: "default",
                        label: "Manage",
                        link: "",
                    },
                ]}
            >
                <div className="d-flex align-items-start">
                    <div className="container-lg container-fluid">
                        <div className="row justify-content-center flex-grow-1">
                            <div className="col-12 col-xl-10">
                                <div className="application-section">
                                    <h3 className="application-section--title">
                                        <div className="d-flex flex-column gap-none w-100">
                                            <span className="application-section--title-content">Summary</span>
                                            <div className="d-flex gap-2xs align-items-center text-navigation text-muted">
                                                <span>All you need to know about this expert meeting</span>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-2xs">
                                            <Button label="Add to calendar" iconStartName="calendar" size="sm" type="default" />
                                            <Button label="Meeting link" iconStartName="copy" size="sm" type="default" />
                                        </div>
                                    </h3>
                                    <div className="bg-highlight p-md rounded">
                                        <DataList>
                                            <DataListItem label="Name">
                                                <dd>
                                                    <span>Expert meeting name</span>
                                                </dd>
                                            </DataListItem>
                                            <DataListItem label="Timeline">
                                                <dd>
                                                    <span>Feb 12, 2025 at 9:35</span>
                                                </dd>
                                            </DataListItem>
                                            <DataListItem label="Location">
                                                <dd>
                                                    <Badges>
                                                        <Tag label="Online" />
                                                    </Badges>
                                                </dd>
                                            </DataListItem>
                                            <DataListItem label="Project">
                                                <dd className="d-flex flex-row gap-2xs">
                                                    <Button type="muted" addClass="btn-link" size="xs">
                                                        <div className="icon icon--letter is-xs">
                                                            <span aria-hidden="true">P</span>
                                                        </div>

                                                        <span>Project name</span>
                                                    </Button>
                                                </dd>
                                            </DataListItem>
                                            <DataListItem label="Project members">
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
                                            <DataListItem label="About the project">
                                                <dd>
                                                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl ignissim est, at elementum felis diam eget massa.</span>
                                                </dd>
                                            </DataListItem>
                                            <DataListItem label="Expert">
                                                <dd>
                                                    <Button type="muted" addClass="btn-link" size="xs">
                                                        <Avatar size="xs" image="img/avatar-terence.jpeg" />
                                                        <span>Terence Irving</span>
                                                    </Button>
                                                </dd>
                                            </DataListItem>
                                        </DataList>
                                    </div>
                                </div>

                                {/* <div className="application-section">
                                    <h3 className="application-section--title">Project</h3>
                                    <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row align-items-center flex-wrap flex-xl-nowrap gap-md">
                                        <div className="card-image-container">
                                            <div
                                                className="card-image"
                                                style={{
                                                    backgroundImage: 'url("img/hero-3.png")',
                                                    backgroundRepeat: "no-repeat",
                                                    backgroundPosition: "center",
                                                    backgroundSize: "cover",
                                                }}
                                            ></div>
                                        </div>
                                        <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-xs flex-fill">
                                            <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-0">
                                                <div className="d-flex align-items-center gap-2xs">
                                                    <div className="h4 text-center text-xl-left d-flex align-items-center gap-2xs">
                                                        <span>Project Name</span>
                                                    </div>
                                                </div>
                                                <ul className="list-inline list-dotted">
                                                    <li
                                                        className="list-inline-item"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        data-original-title='&lt;ul class="list-unstyled d-flex flex-column gap-4px m-0"&gt;&lt;li class="d-flex gap-4px align-items-center"&gt;&lt;div class="thumbnail is-xs is-oval bg-random-5" title="IB"&gt;&lt;span class="icon icon-account c-random-5"&gt;&lt;/span&gt;&lt;/div&gt;&lt;span&gt;Ibrahim Baldé&lt;/span&gt;&lt;/li&gt;&lt;li class="d-flex gap-4px align-items-center"&gt;&lt;div class="thumbnail is-xs is-oval bg-random-3" title="KC"&gt;&lt;span class="icon icon-account c-random-3"&gt;&lt;/span&gt;&lt;/div&gt;&lt;span&gt;Kelly Chou&lt;/span&gt;&lt;/li&gt;&lt;li class="d-flex gap-4px align-items-center"&gt;&lt;div class="thumbnail is-xs is-oval bg-random-1" title="ES"&gt;&lt;span class="icon icon-account c-random-1"&gt;&lt;/span&gt;&lt;/div&gt;&lt;span&gt;Emma Salvarelli&lt;/span&gt;&lt;/li&gt;&lt;li&gt;&lt;span&gt;+ 2 more&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;'
                                                        data-html="true"
                                                        data-boundary="window"
                                                    >
                                                        <ul className="metas is-list">
                                                            <li>
                                                                <div className="thumbnail-stack mr-2">
                                                                    <div className="thumbnail is-xs is-oval bg-random-5" title="IB">
                                                                        <span className="icon icon-account c-random-5"></span>
                                                                    </div>
                                                                    <div className="thumbnail is-xs is-oval bg-random-3" title="KC">
                                                                        <span className="icon icon-account c-random-3"></span>
                                                                    </div>
                                                                    <div className="thumbnail is-xs is-oval bg-random-1" title="ES">
                                                                        <span className="icon icon-account c-random-1"></span>
                                                                    </div>
                                                                </div>
                                                                <a href="/program/frrezpo/project/w/154bed30/users">
                                                                    <small className="text-muted">5 members</small>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li
                                                        className="list-inline-item"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        data-original-title='&lt;ul class="list-unstyled d-flex flex-column gap-4px m-0"&gt;&lt;li class="d-flex gap-4px align-items-center"&gt;&lt;div class="thumbnail is-oval is-xs" title="TI"&gt;&lt;img src="img/avatar-terence.jpeg" width="150" height="150" class=" is-xs rounded-circle"&gt;&lt;/div&gt;&lt;span&gt;Terence Irving&lt;/span&gt;&lt;/li&gt;&lt;/ul&gt;'
                                                        data-html="true"
                                                        data-boundary="window"
                                                    >
                                                        <ul className="metas is-list">
                                                            <li>
                                                                <div className="thumbnail-stack mr-2">
                                                                    <div className="thumbnail is-oval is-xs" title="TI">
                                                                        <img src="img/avatar-terence.jpeg" width="150" height="150" className=" is-xs rounded-circle" />
                                                                    </div>
                                                                </div>
                                                                <a href="/program/frrezpo/project/w/154bed30/mentors">
                                                                    <small className="text-muted">1 expert</small>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li className="list-inline-item">
                                                        <ul className="metas is-list">
                                                            <li>
                                                                <a href="/program/147/project/w/2872/followers">
                                                                    <small className="text-muted">1 follower</small>
                                                                </a>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="d-flex gap-xs">
                                            <div className="dropdown">
                                                <a className="btn btn-default btn-lg dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span>Contact</span>
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">
                                                        <span className="icon icon-comment-text-multiple-outline" />
                                                        <span className="dropdown-item--label">Team Chat</span>
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <span className="icon icon-video" />
                                                        <span className="dropdown-item--label">Team video</span>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="dropdown">
                                                <a className="btn btn-transparent btn-lg btn-icon position-relative z-1" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon is-20px icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="#">
                                                        <span>Setting 1</span>
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <span>Setting 2</span>
                                                    </a>
                                                    <a className="dropdown-item" href="#">
                                                        <span>Setting 3</span>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="d-block bg-highlight rounded">
                                        <div className="d-flex align-items-center flex-fill text-muted p-md" data-toggle="collapse" data-target="#Aboutprogram" aria-expanded="false">
                                            <div className="d-flex align-items-center gap-xs flex-grow-1">
                                                <Icon name="information" size="sm" />
                                                <span className="font-weight-bold">About the project</span>
                                            </div>
                                            <Icon name="chevron-right" size="sm" />
                                        </div>
                                        <div className="collapse px-md pb-md" id="Aboutprogram">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                            <p>Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est.</p>
                                        </div>
                                    </div>
                                </div> */}
                                <div className="application-section">
                                    <h3 className="application-section--title"> Notes</h3>
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
                                                        <input type="text" className="form-control message-content bg-white cursorLink" placeholder="Start a new note..." />
                                                    </div>
                                                </div>
                                            </div>
                                        </a>
                                        <div className="blogPostsWall" data-url="/program/75/workspace/updates/wall?preview=3">
                                            <div className="card m-none p-5 wallLoader d-none">
                                                <div className="pb-0 pt-3 pt-sm-5">
                                                    <div className="item is-wide is-static">
                                                        <h3 className="text-center w-100 mb-3">Loading...</h3>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="cardsContainer">
                                                <div className="cardsContainer">
                                                    <CardFeed
                                                        author="{user.name}"
                                                        metas={[{ label: "Community Builder, Schoolab" }]}
                                                        content={`
                                                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl ignissim est, at elementum felis diam eget massa.</p>
                                                            `}
                                                        readMore={false}
                                                        liked={true}
                                                        likes={9}
                                                        comments={4}
                                                        copyLink={false}
                                                    ></CardFeed>
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
                                {/* <div className="application-section">
                                    <h3 className="application-section--title">Attendance sheet responsibles</h3>
                                    <div className="item is-bordered">
                                        <div className="item-row">
                                            <div className="item-row">
                                                <a href="#" className="userProfileModale userProfileModale-301" data-url="/user/600a4bc4/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                    <div className="thumbnail-relation">
                                                        <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="Tradeshow">
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/674bedeb-2b63-4956-a012-08ab39477915/sq150.jpeg" />
                                                        </div>
                                                        <span className="flag-icon flag-icon-fr" />
                                                    </div>
                                                </a>
                                                <div className="item-content ml-4 py-1">
                                                    <a href="#" className="item-title h3 font-weight-normal mb-none userProfileModale userProfileModale-301" data-url="/user/600a4bc4/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                        {" "}
                                                        Guillaume Larieu{" "}
                                                        <ul className="metas is-list ">
                                                            <li> Head of Students programs Schoolab </li>
                                                            <li> FR </li>
                                                        </ul>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="item-options dropdown">
                                                <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="/user/u/600a4bc4">
                                                        Show profile
                                                    </a>
                                                    <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id="600a4bc4" href="#">
                                                        Send a message
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item is-bordered">
                                        <div className="item-row">
                                            <div className="item-row">
                                                <a href="#" className="userProfileModale userProfileModale-673" data-url="/user/ae5b9801/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                    <div className="thumbnail-relation">
                                                        <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="Tradeshow">
                                                            <img src="https://inject-prod.s3.amazonaws.com/images/f02c3ef7-941c-4420-b515-c7a752313d4a/sq150.jpeg" />
                                                        </div>
                                                        <span className="flag-icon flag-icon-fr" />
                                                    </div>
                                                </a>
                                                <div className="item-content ml-4 py-1">
                                                    <a href="#" className="item-title h3 font-weight-normal mb-none userProfileModale userProfileModale-673" data-url="/user/ae5b9801/profile-modal" data-toggle="modal" data-target="#loadingContentModal">
                                                        {" "}
                                                        Louis Boutet{" "}
                                                        <ul className="metas is-list ">
                                                            <li> Program Manager Schoolab </li>
                                                            <li> Paris, FR </li>
                                                        </ul>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="item-options dropdown">
                                                <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="/user/u/ae5b9801">
                                                        Show profile
                                                    </a>
                                                    <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id="ae5b9801" href="#">
                                                        Send a message
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="aside-buttons-bottom d-flex flex-column flex-lg-row mt-5">
                                        <button id="btn-comment" className="btn btn-default btn-lg dropdown mr-lg-3 mb-3 mr-0">
                                            <span className="icon icon-note-text-outline mr-2" />
                                            Expert’s notes
                                        </button>
                                        <button id="btn-quiz" className="btn btn-default btn-lg dropdown mr-lg-3 mb-3 mr-0">
                                            <span className="icon icon-cloud-download mr-2" />
                                            Ressources
                                        </button>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="aside-buttons no-subnav">
                        <button className="btn btn-lg btn-default mb-3 active" data-toggle="tooltip" data-original-title="Expert’s notes">
                            <span className="icon icon-note-text-outline" />
                        </button>

                        <button className="btn  btn-lg btn-default mb-3" data-toggle="tooltip" data-original-title="Resources">
                            <span className="icon icon-cloud-download" />
                        </button>
                    </div>
                </div>
            </AppContent>
            <AsideNoteManager />
        </Layout>
    );
};
