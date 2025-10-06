import React from "react";
import { ReactNode } from "react";
import { Icon } from "@/app/components/icons/Icon";
import { Progress } from "@/app/components/progress/Progress";
import { Placeholder } from "@/app/content/placeholders/Placeholder";
import { Card } from "@/app/components/cards/Card";

type MetaType = {
    label: string;
};

interface CardAskAIProps {}

export const CardAskAI = ({}: CardAskAIProps) => {
    return (
        <div className="card">
            {/* <div className="d-flex gap-sm align-items-center px-md pt-md" id="headercontent" data-toggle="collapse" data-target="#AskAI" aria-expanded="false" aria-controls="AskAI"> */}
            <div className="d-flex gap-sm align-items-center px-md pt-md"> 
                 
                <div className="d-flex flex-column w-100 gap-none">
                    <div className="d-flex gap-2xs align-items-center">
                        <Icon name="ai" size="2sm" addClass="text-assistant"></Icon>
                        <p className="h3">InjectAI</p>
                    </div>
                    
                    <ul className="metas is-list small">
                        <li>An AI assistant to guide you through your initiatives.</li>
                    </ul>
                </div>
               

                {/* <span className="icon icon-chevron-right"></span> */}
            </div>
            {/* <div className="collapse" id="AskAI" aria-labelledby="headercontent">
                <div className="px-md pt-md">
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
                </div>
            </div> */}
            <div className="d-flex flex-column gap-xs p-md">
                {/* <div id="tags" className="badges flex-nowrap" role="button" aria-labelledby="multiple" data-toggle="tooltip" data-placement="top" data-html="true" data-boundary="window">
                    <div className="badge is-pill">
                        <span className="icon icon-ai text-assistant" />
                        <span>Summarize in a Briefing doc</span>
                    </div>
                    <div className="badge is-pill">
                        <span className="icon icon-faq text-assistant" />
                        <span>F.A.Q.</span>
                    </div>
                    <div className="badge is-pill">
                        <span className="icon icon-information text-assistant" />
                        <span>How did the mission evolve ?</span>
                    </div>
                </div> */}
                <div className="w-100 message-composer-row">
                    <textarea className="message-composer-input form-control" id="message_light_body" name="message_light[body]" placeholder="Write a message…"></textarea>
                    <a href="#" className="btn btn-transparent btn-icon message-composer-action" role="button">
                        <span className="icon icon-send"></span>
                    </a>
                </div>
            </div>
        </div>
    );
};
