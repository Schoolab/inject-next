import React, { useEffect } from "react";

import { Dropdown } from "./Dropdown";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownItem";
import { DropdownDivider } from "./DropdownDivider";

import { nestedDropdown } from "../../../../public/utils/nestedDropdown";
import { Avatar } from "../avatars/Avatar";
import { Role } from "../badges/roles/Role";
import { DropdownNested } from "./DropdownNested";
import { DropdownHeader } from "./DropdownHeader";

interface DropdownUserProps {}

export const DropdownUser = ({}: DropdownUserProps) => {
    useEffect(() => {
        nestedDropdown();
    }, []);

    return (
        <Dropdown>
            <DropdownMenu addClass="dropright" show={true}>
                <DropdownItem label="Profile" addClass="gap-xs">
                    <Avatar image="img/avatar-pierre.jpeg" />
                    <div className="d-flex flex-column justify-content-center w-100">
                        <span className="d-flex align-items-center gap-2xs">Pierre Lemeteil <Role status="admin" /></span>
                        <span className="small text-muted mb-none">CTO of Schoolab</span>
                    </div>
                </DropdownItem>
                <DropdownDivider />
                <DropdownItem label="Profile" />
                <DropdownItem label="Followings" />
                <DropdownItem label="Events" />
                <DropdownItem label="Surveys" />
                <DropdownDivider />
                <DropdownItem label="Settings" iconName="settings" />
                <DropdownNested>
                    <DropdownItem 
                        label="Theme: Device"
                        iconName="theme-dark"
                        toggle={true}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false" />
                    <DropdownMenu>
                        <DropdownItem label="Device theme" active={true} />
                        <DropdownItem label="Light theme" active={false} />
                        <DropdownItem label="Dark theme" active={false} />
                    </DropdownMenu>
                </DropdownNested>
                <DropdownItem label="Help center" iconName="help-center" target="_blank" rel="nofollow" href="https://www.notion.so/Help-Center-INSIDE-7e56175d45bc47e8947e7584f2e3837d" />
                <DropdownDivider />
                <DropdownItem label="Sign out" iconName="signout" type="danger" />
            </DropdownMenu>
        </Dropdown>
    );
};