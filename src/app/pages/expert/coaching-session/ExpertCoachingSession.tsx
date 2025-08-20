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
                sections="transparent"
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
                                            <DataListItem label="Project description">
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
                                <div className="application-section">
                                    <h3 className="application-section--title">Pinned notes</h3>
                                    <div id="challenge-blogposts-container">
                                        <div className="blogPostsWall" data-url="/program/75/workspace/updates/wall?preview=3">
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
                                <div className="application-section">               
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
                                                <ul className="text-muted small metas is-list mb-none">
                                                    <li className="list-inline-item" data-toggle="tooltip" data-placement="bottom" data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li>" data-html="true" data-boundary="window">
                                                        <a href="/program/71/project/2903/users">
                                                            <small className="text-muted">1 member</small>
                                                        </a>
                                                    </li>
                                                    <li
                                                        className="list-inline-item"
                                                        data-toggle="tooltip"
                                                        data-placement="bottom"
                                                        data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li>"
                                                        data-html="true"
                                                        data-boundary="window"
                                                    >
                                                        <a href="/program/71/project/2903/mentors">
                                                            <small className="text-muted">2 experts</small>
                                                        </a>
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
                                        <div className="d-flex align-items-center flex-fill text-muted p-md" data-toggle="collapse" data-target="#Aboutprogram" aria-expanded="true">
                                            <div className="d-flex align-items-center gap-xs flex-grow-1">
                                                <Icon name="information" size="sm" />
                                                <span className="font-weight-bold">About the project</span>
                                            </div>
                                            <Icon name="chevron-right" size="sm" />
                                        </div>
                                        <div className="collapse show px-md pb-md" id="Aboutprogram">
                                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                            <p>Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est.</p>
                                        </div>
                                    </div>
                                </div>   
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
                                                            avatar="https://inject-prod.s3.amazonaws.com/images/0ee71840-6d78-4784-acff-6f8d2722dbb7/sq150.jpeg"
                                                            author="Sarah Lamoureux"
                                                            metas={[{ label: "Community Builder, Schoolab" }]}
                                                            content={`
                                                                <p>Bonjour à tous·tes,</p>
                                                                <p>Nous sommes heureux de vous accueillir au sein de Schoolab Saint-Lazare !</p>
                                                                <p>Le système de réservation de salles de réunion est maintenant disponible, <a href="https://schoolab.skedda.com/register?i=277598&k=0tUkWBHX4UlHvcRlvn6Cx60VhMZD7EZl">cliquez sur ce lien pour activer vos accès</a>.</p>
                                                                <p>Ensuite, pour y accéder il vous suffira de cliquer sur le petit 🏢 dans la barre de navigation de gauche, vous retrouverez le p...</p>
                                                            `}
                                                            readMore={false}
                                                            liked={true}
                                                            likes={9}
                                                            comments={4}
                                                            copyLink={false}
                                                        >
                                                            <ItemResource
                                                                isSmall={false}
                                                                action="download"
                                                                icon={{
                                                                    addClass: "text-danger",
                                                                    name: "file-pdf-box",
                                                                }}
                                                                resource={{
                                                                    details: "120 KB",
                                                                    name: "stakeholdermap-model.pdf",
                                                                    type: "PDF File",
                                                                }}
                                                            />
                                                        </CardFeed>
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
                                <div className="application-section">
                                   
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
                                </div>
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
