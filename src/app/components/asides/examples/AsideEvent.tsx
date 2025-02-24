import React from "react";
import { ItemResource } from "@/app/components/items/ItemResource";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { MessageChat } from "@/app/components/messages/MessageChat";
import { AsideHeader } from "@/app/components/asides/AsideHeader";
import { Message } from "@/app/components/messages/Message";
import { FormComposer } from "@/app/forms/composer/FormComposer";

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

                <AsideHeader title="Chat" />

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
                                <div className="messages-module-content p-none">
                                    <div className="threads-empty mt-5 d-none">No messages...</div>
                                    <div className="justify-content-center align-items-center text-muted py-3 standaloneChatLoader d-none">
                                        <div className="spinner-border spinner-border-sm mr-3 text-primary" role="status">
                                            <span className="sr-only">Loading…</span>
                                        </div>
                                        Loading…
                                    </div>
                                    <div className="message-container p-none">
                                        <Message 
                                            showAvatar={true}
                                            name="Pierre Lemeteil"
                                            role="admin"
                                            messages= {[
                                                {
                                                  message: "Hey there! ✋",
                                                  options: [
                                                    { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
                                                    { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
                                                  ]
                                                },
                                                {
                                                  message: "I was gonna be productive… Laundry, cleaning, but...",
                                                  options: [
                                                    { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
                                                    { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
                                                  ]
                                                },
                                                {
                                                  message: "I’m getting powered donuts",
                                                  options: [
                                                    { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
                                                    { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
                                                  ]
                                                },
                                                {
                                                  message: "powdered*",
                                                  options: [
                                                    { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
                                                    { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
                                                  ]
                                                }
                                              ]}
                                              avatar= "img/avatar-pierre.jpeg"
                                        />
                                        <Message
                                            messages= {[
                                                {
                                                  you: true,
                                                  message: "Donuts do have powers 🤣",
                                                  options: [
                                                    { label: "Edit", href: "#", icon: "pencil", disabled: false, onClick: () => {} },
                                                    { label: "Delete", href: "#", icon: "delete", type: "danger", disabled: false, onClick: () => {} },
                                                  ]
                                                }
                                            ]}
                                            showAvatar={false}
                                            avatar="img/avatar-alexandra.jpeg"
                                            name="Alexandra Jolly"
                                            role={undefined}
                                            position="right"
                                        />
                                    </div>
                                </div>
                                <form className="w-100 standaloneThreadForm" name="message_light" method="post" action="">
                                    <FormComposer />
                                </form>
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
