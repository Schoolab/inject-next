import React from "react";
import { ItemResource } from "../items/ItemResource";
import { CardEvent } from "../cards/CardEvent";

interface AsideEventProps {}

export const AsideEvent = ({}: AsideEventProps) => {
    return (
        <aside className="application-aside">
           
            <div className="aside-content-container d-none">
                <div className="aside-header">
                    <h3 className="aside-title line-clamp-1">
                        <span className="text-truncate">Resources</span>
                        <ul className="list-inline list-dotted text-muted mb-none">
                            <li className="list-inline-item small">3 resources</li>
                        </ul>
                    </h3>
                    <div className="aside-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="aside-body">
                    <div className="d-flex flex-column gap-xs">
                        <ItemResource
                            isSmall={false}
                            action="download"
                            icon={{
                                name: "file-pdf-box",
                                addClass: "text-danger",
                            }}
                            resource={{
                                details: "120 KB",
                                name: "stakeholdermap-model.pdf",
                                type: "PDF File",
                            }}
                            options={false}
                        />
                        <ItemResource
                            isSmall={false}
                            action="download"
                            icon={{
                                name: "file-pdf-box",
                                addClass: "text-danger",
                            }}
                            resource={{
                                details: "120 KB",
                                name: "stakeholdermap-model.pdf",
                                type: "PDF File",
                            }}
                            options={false}
                        />
                        <ItemResource
                            isSmall={false}
                            action="download"
                            icon={{
                                name: "file-pdf-box",
                                addClass: "text-danger",
                            }}
                            resource={{
                                details: "120 KB",
                                name: "stakeholdermap-model.pdf",
                                type: "PDF File",
                            }}
                            options={false}
                        />
                    </div>
                </div>
                <div className="aside-footer">
                    <div className="d-flex gap-xs ml-auto">
                        <button className="btn btn-lg btn-default close-aside">Cancel</button>
                    </div>
                </div>
            </div>
            <div className="aside-content-container d-none">
                <div className="aside-header">
                    <h3 className="aside-title line-clamp-1">
                        <span className="text-truncate">Upcoming events</span>
                        <ul className="list-inline list-dotted text-muted mb-none">
                            <li className="list-inline-item small">3 events</li>
                        </ul>
                    </h3>
                    <div className="aside-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="aside-body">
                    <div className="d-flex flex-column gap-xs">
                        <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} img="https://inject-prod.s3.amazonaws.com/images/efe8674b-e830-4988-b424-4bf588547b93/co1140x380.jpeg" location="InPerson" />
                        <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                        <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                    </div>
                </div>
                <div className="aside-footer">
                    <div className="d-flex gap-xs ml-auto">
                        <button className="btn btn-lg btn-default close-aside">Cancel</button>
                    </div>
                </div>
            </div>

            <div className="aside-content-container">
                <div className="aside-header">
                    <h3 className="aside-title line-clamp-1 text-left">
                        <span className="text-truncate">Chat</span>
                        <ul className="list-inline list-dotted text-muted mb-none">
                            <li className="list-inline-item small">Active</li>
                        </ul>
                    </h3>
                    <div className="aside-actions">
                        <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="tab-content overflow-auto h-100" id="TabsContent">
                    <div id="chat" role="tabpanel" aria-labelledby="content-tab" className="tab-pane h-100 fade active show">
                        <div className="aside-body p-0">
                            <div className="messages-module-container standaloneMainThreadContainer">
                                <div className="message-separator-label is-splited is-unread is-primary load-more-messages-standalone d-none" data-current={0} data-readonly={1} data-with-email={0} data-url="/load-messages/conversation/60" data-total={0}>
                                    <a href="#" data-toggle="tooltip" title="" data-original-title="">
                                        &nbsp;
                                        <i className="icon icon-arrow-up" data-class="icon icon-arrow-up" />
                                        &nbsp;Voir plus
                                    </a>
                                </div>
                                <div className="messages-module-content standaloneThreadContainer" data-current-user={2363}>
                                    <div className="threads-empty mt-5"> Pas de messages...</div>
                                    <div className="justify-content-center align-items-center text-muted py-3 standaloneChatLoader d-none">
                                        <div className="spinner-border spinner-border-sm mr-3 text-primary" role="status">
                                            <span className="sr-only">Loading…</span>
                                        </div>
                                        Loading…
                                    </div>
                                    <div className="message-container standaloneChatContainer" data-current={0} data-url=""></div>
                                </div>
                                <div className="w-100 standaloneThreadForm" data-mark-as-read-url="/mark-as-read/60">
                                    <form className="w-100 message-composer is-sticky mt-auto" name="message_light" method="post" action="/messages/conversation/60" data-disable-on-submit={1}>
                                        <div className="w-100 message-composer-row">
                                            <textarea className="message-composer-input form-control" id="message_light_body" name="message_light[body]" required placeholder="Write a message…" autoComplete="off" />
                                            <input type="hidden" id="message_light_sentAsAdmin" name="message_light[sentAsAdmin]" className="messageContext" defaultValue={0} />
                                            <button className="btn btn-transparent btn-icon message-composer-action is-disabled">
                                                <span className="icon icon-send" />
                                            </button>
                                        </div>
                                        <input type="hidden" id="message_light__token" name="message_light[_token]" />
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div class="aside-footer">
                        <div class="d-flex gap-xs ml-auto">
                            <button class="btn btn-lg btn-default close-aside">Cancel</button>             
                        </div>
                    </div> */}
                </div>
                
            </div>
        </aside>
    );
};
