import React from "react";

import { Dropdown } from "./Dropdown";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownItem";
import { DropdownDivider } from "./DropdownDivider";

interface DropdownDefaultProps {}

export const DropdownDefault = ({}: DropdownDefaultProps) => {
    return (
        <Dropdown>
            <DropdownMenu direction="left" show={true}>
                <DropdownItem type="interactive" label="Impersonate this user" iconName="account" />
                <DropdownDivider />
                <DropdownItem label="Open Data" />
                <DropdownItem label="Open Manage" caption="test" outbound={true} />
                <DropdownItem label="Open Workspace" />
                <DropdownDivider />
                <DropdownItem label="Edit" iconName="pencil" />
                <DropdownItem label="Duplicate" iconName="copy" />
                <DropdownItem type="danger" label="Delete" iconName="delete" />
            </DropdownMenu>
        </Dropdown>
    );
};
