import React from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export const ProjectLandingPage = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent>
                <section className="section">
                    <div className="container-xl">
                        <div className="row">
                            <div className="col-12 col-lg-6 col-xl-4">
                                <div className="application-section">
                                    <div
                                        className="cover-container rounded mb-5"
                                        style={{
                                            backgroundImage: 'url("img/hero-3.png")',
                                            backgroundRepeat: "no-repeat",
                                            backgroundPosition: "center",
                                            backgroundSize: "cover",
                                        }}
                                    />
                                    <h1 className="mb-2">Green energy</h1>
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
                                            <a className="btn btn-primary" href="/program/esg-awards/project/635/apply">
                                                Join
                                            </a>
                                        </li>
                                        <li className="list-inline-item">
                                            <a className="btn btn-default" href="#" data-toggle="modal" data-target="#modalOpenThread" data-application-id={635}>
                                                Chat &amp; Video
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div className="application-section">
                                    <h3 className="application-section--title">Project members</h3>
                                    <div className="item is-bordered">
                                        <div className="item-row">
                                            <div className="item-row">
                                                <a href="/user/u/0d3e2b04">
                                                    <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/c5268f41-f646-4fe1-b783-315029757ad2/sq150.png" />
                                                    </div>
                                                </a>
                                                <div className="item-content ml-4 py-1">
                                                    <a href="/user/u/0d3e2b04" className="item-title h4 font-weight-normal mb-none stretched-link">
                                                        Marine Martinez
                                                    </a>
                                                    <ul className="metas is-list ">
                                                        <li> Startup Manager Schoolab </li>
                                                        <li> Paris, FR </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="item-options dropdown">
                                                <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="/user/u/0d3e2b04">
                                                        Show profile
                                                    </a>
                                                    <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={320} href="#">
                                                        Send a message
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item is-bordered">
                                        <div className="item-row">
                                            <div className="item-row">
                                                <a href="/user/u/158c2ec5">
                                                    <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg" />
                                                    </div>
                                                </a>
                                                <div className="item-content ml-4 py-1">
                                                    <a href="/user/u/158c2ec5" className="item-title h4 font-weight-normal mb-none stretched-link">
                                                        Pierre Forestier
                                                    </a>
                                                    <ul className="metas is-list ">
                                                        <li> Startup Manager Schoolab </li>
                                                        <li> Paris, FR </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="item-options dropdown">
                                                <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="/user/u/158c2ec5">
                                                        Show profile
                                                    </a>
                                                    <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={1782} href="#">
                                                        Send a message
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item is-bordered">
                                        <div className="item-row">
                                            <div className="item-row">
                                                <a href="/user/u/53825949">
                                                    <div className="thumbnail is-oval " title="" data-toggle="tooltip" data-original-title="La piscine 2022 overview">
                                                        <img src="https://inject-prod.s3.amazonaws.com/images/731305ed-0603-4910-9e93-65dd89ef302a/sq150.jpeg" />
                                                    </div>
                                                </a>
                                                <div className="item-content ml-4 py-1">
                                                    <a href="/user/u/53825949" className="item-title h4 font-weight-normal mb-none stretched-link">
                                                        Sarah Mecheneau
                                                    </a>
                                                    <ul className="metas is-list ">
                                                        <li> Business Developer / Program Manager - Programmes étudiants internationaux Schoolab </li>
                                                        <li> FR </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="item-options dropdown">
                                                <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                    <span className="icon icon-options" />
                                                </a>
                                                <div className="dropdown-menu dropdown-menu-right">
                                                    <a className="dropdown-item" href="/user/u/53825949">
                                                        Show profile
                                                    </a>
                                                    <a className="dropdown-item" data-toggle="modal" data-target="#modalOpenThread" data-user-id={2286} href="#">
                                                        Send a message
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>{" "}
                                    <a className="btn btn-lg btn-block btn-default" href="/program/75/managers">
                                        {" "}
                                        Show more{" "}
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 col-lg-6 col-xl-8">
                                <div className="application-section">
                                    <h3 className="application-section--title">About the project</h3>
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
                                <div className="application-section">
                                    <div className="comment-thread-container">
                                        <h3>
                                            <span className="comment-title" data-singular="Comment" data-plural="Comments">
                                                {" "}
                                                Comment{" "}
                                            </span>{" "}
                                            (<span className="comment-count">1</span>)
                                        </h3>
                                        <div className="comment-list messages" id="comments">
                                            <div className="message comment-list-item" data-id={1565}>
                                                <a href="/user/u/ba594ced">
                                                    <div className="thumbnail is-oval is-md">
                                                        <span className="icon icon-account" />
                                                    </div>
                                                </a>
                                                <div className="message-body ml-3">
                                                    <div className="message-row">
                                                        <div className="message-content">
                                                            <a className="font-weight-bold text-decoration-none" href="/user/u/ba594ced">
                                                                Pedro Miguel
                                                            </a>
                                                            <p className="mb-none">This is a beautiful test comment. Also it's very polite. Thank you for reading.</p>
                                                        </div>
                                                        <div className="message-options dropdown">
                                                            <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                                <span className="icon icon-options" />
                                                            </a>
                                                            <div className="dropdown-menu">
                                                                <a href="#" className="dropdown-item is-danger reject-comment" data-url="/api/comment/1565/reject">
                                                                    {" "}
                                                                    Reject{" "}
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="message-row">
                                                        <ul className="metas is-list small">
                                                            <li>03/23/2023 05:35</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="message commentFormContainer">
                                            <div className="thumbnail is-oval">
                                                <span className="icon icon-account" />
                                            </div>
                                            <div className="message-body">
                                                <form name="comment" method="post" action="/api/challenge/53/application/635/comment/create" className="form-inline w-100 align-items-start">
                                                    <div className="form-group mb-none flex-grow-1 mr-3">
                                                        <label className="sr-only checkbox-custom font-weight-bold required" htmlFor="comment_content">
                                                            Add a comment...
                                                        </label>
                                                        <textarea
                                                            id="comment_content"
                                                            name="comment[content]"
                                                            required
                                                            maxLength={500}
                                                            placeholder="Say something here..."
                                                            className="form-control flex-grow-1 form-control"
                                                            rows={4}
                                                            style={{
                                                                overflow: "hidden",
                                                                overflowWrap: "break-word",
                                                                resize: "none",
                                                                height: 102,
                                                            }}
                                                            defaultValue={""}
                                                        />
                                                    </div>
                                                    <button type="submit" className="btn btn-lg btn-primary">
                                                        {" "}
                                                        Add{" "}
                                                    </button>
                                                    <input type="hidden" id="comment__token" name="comment[_token]" defaultValue="OJgz4cP2oserjZTV6yxO0cbKKh-hSTLTRuXHerxBtOo" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </AppContent>
        </Layout>
    );
};
