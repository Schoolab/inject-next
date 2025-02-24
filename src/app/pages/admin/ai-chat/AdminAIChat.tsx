import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideAIChat } from "@/app/components/asides/examples/AsideAIChat";
import { aside } from "../../../../../public/utils/aside";

export const AdminAIChat = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout sideBar="Admin" showShortcutbar={false}>
            <AppContent sections="transparent" isIAchat={true} showSubnav={false}>
                <div className="messages-module-container standaloneMainThreadContainer">
                    <div className="messages-module-content">
                        <div className="message align-items-end">
                            <a href="#" className="thumbnail is-oval is-md">
                                <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                            </a>
                            <div className="message-body">
                                <div className="message-row">
                                    <ul className="metas is-list small">
                                        <li>
                                            <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                <span>Pierre Lemeteil</span>
                                                {/* <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" /> */}
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
                                        <p>What is a design system ?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message align-items-end">
                            <a href="#" className="thumbnail is-oval is-md">
                                <img src="img/thumbnails/mistral.png" />
                            </a>
                            <div className="message-body">
                                <div className="message-row">
                                    <ul className="metas is-list small">
                                        <li>
                                            <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                <span>Mistral IA_</span>
                                                {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                            </a>
                                        </li>
                                        <li>
                                            <span>June 18, 2024</span>
                                        </li>
                                        <li>
                                            <span>3:41 PM</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="message-row align-items-end">
                                    <div className="message-content gap-md">
                                        <p>A design system is a set of interconnected standards used to manage design on a large scale. Here are some key components</p>
                                        <ul>
                                            <li>Design Guidelines: Rules and principles that guide the creation of consistent and high-quality products.</li>
                                            <li>Reusable Components: Standardized and reusable user interface elements (like buttons, forms, etc.) that streamline development.</li>
                                            <li>Design Patterns: Proven solutions to common design problems.</li>
                                            <li>Documentation: Instructions and standards for using the components and design principles.</li>
                                        </ul>
                                        <p>The goal is to ensure visual and functional consistency across all products and experiences of a brand, while optimizing development time and simplifying maintenance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message align-items-end">
                            <a href="#" className="thumbnail is-oval is-md">
                                <img src="https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg" />
                            </a>
                            <div className="message-body">
                                <div className="message-row">
                                    <ul className="metas is-list small">
                                        <li>
                                            <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                <span>Pierre Lemeteil</span>
                                                {/* <span className="badge badge-role is-admin z-2" data-toggle="tooltip" data-placement="top" data-original-title="Admin" data-boundary="window" /> */}
                                            </a>
                                        </li>
                                        <li>
                                            <span>June 18, 2024</span>
                                        </li>
                                        <li>
                                            <span>3:45 PM</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="message-row align-items-end">
                                    <div className="message-content gap-md">
                                        <p>Could you develop what are Design patterns ?</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="message align-items-end">
                            <a href="#" className="thumbnail is-oval is-md">
                                <img src="img/thumbnails/mistral.png" />
                            </a>
                            <div className="message-body">
                                <div className="message-row">
                                    <ul className="metas is-list small">
                                        <li>
                                            <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                                <span>Mistral IA_</span>
                                                {/* <span className="badge badge-role is-expert z-2" data-toggle="tooltip" data-placement="top" data-original-title="Expert" data-boundary="window" /> */}
                                            </a>
                                        </li>
                                        <li>
                                            <span>June 18, 2024</span>
                                        </li>
                                        <li>
                                            <span>3:46 PM</span>
                                        </li>
                                    </ul>
                                </div>
                                <div className="message-row align-items-end">
                                    <div className="message-content gap-md">
                                    <div className="loading-bubble">
                                        <div className="spinner">
                                            <div className="bounce1"></div>
                                            <div className="bounce2"></div>
                                            <div className="bounce3"></div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-100 standaloneThreadForm" data-mark-as-read-url="/mark-as-read/60">
                    <form className="w-100 message-composer is-sticky mt-auto border-bottom" name="message_light" method="post" action="/messages/conversation/60" data-disable-on-submit={1}>
                        <div className="w-100 message-composer-row">
                            <textarea className="message-composer-input form-control" required placeholder="Type your question here..." autoComplete="off" defaultValue={""} />
                            <button className="btn btn-transparent btn-icon message-composer-action">
                                <span className="icon icon-send" />
                            </button>
                        </div>
                    </form>
                </div>
                <div className="aside-buttons-h100-container">
                    <div className="aside-buttons">
                        <button className="btn btn-lg btn-default mb-3" data-toggle="tooltip" data-original-title="Capsules">
                            <span className="icon icon-format-list-bulleted" />
                        </button>
                    </div>
                </div>
         
            </AppContent>
            <AsideAIChat />
        </Layout>
    );
};
