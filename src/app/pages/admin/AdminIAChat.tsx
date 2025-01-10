import React from "react";
import { useEffect } from "react";
import { Layout } from "../../layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideIAChat } from "@/app/components/asides/AsideIAChat";
import { aside } from "../../../../public/utils/aside";

export const AdminIAChat = () => {
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
                                        <p>Design patterns are standardized solutions to common problems in software design. They provide a template for how to solve a problem that can be used in many different situations. Design patterns can help to speed up the development process by providing tested, proven development paradigms. Here&rsquo;s a bit more detail on the concept:</p>

                                        <p>Purpose of Design Patterns: They promote reusability, which leads to more robust, reliable, and maintainable code. Additionally, they facilitate communication among designers and developers by providing a common language.</p>

                                        <p>Types of Design Patterns:</p>

                                        <p>Creational Patterns: Deal with object creation mechanisms, trying to create objects in a manner suitable to the situation. Examples include Singleton, Factory, and Builder patterns. Structural Patterns: Concerned with object composition or the structure of classes. They help ensure that if one part of a system changes, the entire system doesn't need to do the same. Examples are Adapter, Decorator, and Composite patterns. Behavioral Patterns: Focus on communication between objects, making the interaction between objects easy and flexible. Observer, Strategy, and Command patterns are key examples. Benefits:</p>

                                        <p>Problem-Solving: By using a pattern, developers can ensure that they are crafting an architecture that is proven and efficient. Scalability: Proper use of patterns can help systems scale with fewer issues in terms of maintainability and complexity. Code Readability: Patterns can make code easier to understand and navigate, especially for new team members who are familiar with common patterns. Implementation: Implementing design patterns often involves understanding both the specific needs of the application and the nuances of the pattern being used. This can require a balance between adhering to the pattern and adapting it to the local context.</p>

                                        <p>Design patterns are essential tools for both novice and experienced software developers, aiding in the creation of easy-to-manage and scalable software architectures.</p>
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
            <AsideIAChat />
        </Layout>
    );
};
