import React from "react";
import { Icon } from "@/app/components/icons/Icon";
import { Avatar } from "@/app/components/avatars/Avatar";
import { ItemList } from "@/app/components/items/ItemList";
import { Aside } from "@/app/components/asides/Aside";
import { AsideHeader } from "@/app/components/asides/AsideHeader";
import { AsideBody } from "@/app/components/asides/AsideBody";

interface AsidePrivateMessagesProps {
    show?: boolean;
}

export const AsidePrivateMessages = ({
    show = false,
}: AsidePrivateMessagesProps) => {
    let tabClass = [];   
    !show && tabClass.push("d-none");

    return (
        <Aside id="aside-private-messages" size="small" addClass={tabClass.join(" ")}>
            <div className="aside-content-container">
                <AsideHeader
                    title="Messages"
                    showClose={false}
                    buttons={[
                        {
                            label: "New chat",
                            iconStartName: "plus-circle",
                            type: "default",
                            size: "sm",
                        },
                    ]}
                />

                <AsideBody addClass="p-none">
                    <form className="px-xl pt-xl pb-xs w-100">
                        <div className="form-group mb-0 w-100">
                            <label className="sr-only" htmlFor="searchMessages">Search messages</label>
                            <input className="form-control w-100" id="searchMessages" type="text" placeholder="Search for messages or users…" />
                        </div>
                    </form>

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
                </AsideBody>
            </div>
        </Aside>
    );
};
