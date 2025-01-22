import React, { CSSProperties } from "react";
import { Avatar } from "../avatars/Avatar";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { DropdownItem } from "../dropdown/DropdownItem";
import { Notif } from "../badges/notifs/Notif";

type AvatarType = {
    image?: string;
    isOval?: boolean;
    addClass?: string;
};

export interface ItemListProps {
    type?: "user" | "project" | "program";
    label?: string; 
    caption?: string;
    notifs?: number;
    datetime?: string;
    avatars?: AvatarType[];

    addClass?: string;
    style?: CSSProperties;
}

export const ItemList = ({
    type = "user",
    label = "Usernames",
    caption = "Caption",
    notifs,
    datetime,
    avatars,
    addClass,
    style,
    ...props
}: ItemListProps) => {
    let classTab = ["item is-small mx-sm rounded gap-0px"];
    addClass && classTab.push(addClass);

    let listAvatars = avatars && avatars.length > 0 ? avatars.slice(0, 2).map((avatar, index) => (
        <Avatar key={index} image={avatar.image} addClass={index === 1 ? "is-top" : ""} size={index === 1 ? "sm" : "lg"} isOval={avatar.isOval} />
    )) : <Avatar />;

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            <div className="item-row align-items-center gap-xs py-sm">
                <div className="thumbnail-relation">
                    {type === "user" && listAvatars}
                    {type === "project" && <span className="icon icon--letter is-lg"><span>{label.charAt(0)}</span></span>}
                    {type === "program" && <span className="icon icon--program is-lg"><span>{label.split(' ').map(word => word.charAt(0)).join('')}</span></span>}
                </div>

                <div className="item-content d-flex flex-column align-items-start justify-content-center overflow-hidden">
                    <a href="#" className="item-title stretched-link line-clamp-1">
                        {label}
                    </a>
                    <ul className="small item-caption metas is-list is-truncated flex-nowrap w-100">
                        <li>{caption}</li>
                        {datetime && <li className="text-untruncate text-nowrap">{datetime}</li>}
                    </ul>
                </div>

                {notifs && <Notif label={notifs} status="accent" />}

                <div className="d-flex align-items-center gap-xs dropdown">
                    <Dropdown>
                        <a className="btn btn-muted btn-icon z-1" data-toggle="dropdown" aria-expanded="false" data-boundary="window" href="#">
                            <span className="icon icon-options" data-toggle="tooltip" data-placement="bottom" data-original-title="Drag to move. Click for options." data-boundary="window" />
                        </a>
                        <DropdownMenu direction="right">
                            <DropdownItem label="Mark as read" iconName="check-circle" />
                            <DropdownItem label="Mute" iconName="notifications-off" />
                            <DropdownItem type="danger" label="Delete" iconName="delete" />
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </div>
        </div>
    );
};
