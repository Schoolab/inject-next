import React from "react";
import { Icon } from "../Icon";
import { Avatar } from "../avatars/Avatar";
import { ItemList } from "../items/ItemList";

interface AsidePrivateMessagesProps {}

export const AsidePrivateMessages = ({}: AsidePrivateMessagesProps) => {
    return (
        <aside className="application-aside is-small">
            <div className="aside-content-container">
                <div className="aside-header">
                    <h3 className="aside-title line-clamp-1">
                        <span className="text-truncate">Messages</span>
                    </h3>
                    <div className="aside-actions gap-xs">
                        <button className="btn btn-default btn-sm text-ai" role="button">
                            <Icon name="plus-circle" />
                            <span>New chat</span>
                        </button>
                        <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                            <span className="icon icon-close is-24px" aria-hidden="true" />
                        </button>
                    </div>
                </div>
                <div className="px-xl pt-xl pb-none border-none">
                    <form className="w-100">
                        <div className="form-group mb-0 w-100">
                            <label className="sr-only" htmlFor="searchMessages">Search messages</label>
                            <input className="form-control w-100" id="searchMessages" type="text" placeholder="Search for messages or users…" />
                        </div>
                    </form>
                </div>
                <div className="aside-body px-none pt-sm pb-none">
                    <ItemList
                        type="project"
                        label="Healthify" 
                        caption="Pierre: Aenean eget libero"
                        datetime="1:28 PM"
                        notifs={9}
                    />
                    <ItemList
                        avatars={[
                            { image: "img/avatar-pierre.jpeg" },
                            { image: "img/avatar-terence.jpeg" },
                        ]}
                        label="Pierre, Terence, Alexandra"
                        caption="You: Donuts do have powers 🤣"
                        datetime="3:04 PM"
                    />
                    <ItemList
                        avatars={[
                            { image: "img/avatar-terence.jpeg" },
                            { image: "" },
                        ]}
                        label="Terence, John" 
                        caption="Terence: Aenean eget libero"
                        datetime="1:28 PM"
                    />
                    <ItemList
                        type="program"
                        label="Impact Innovators" 
                        caption="No messages…"
                    />
                    <ItemList
                        avatars={[
                            { image: "img/avatar-pierre.jpeg" },
                        ]}
                        label="Pierre Lemeteil" 
                        caption="No messages…"
                    />
                </div>
            </div>
        </aside>
    );
};
