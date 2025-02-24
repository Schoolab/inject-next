import React from "react";

import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";

interface DropdownDefaultProps {}

export const DropdownDefault = ({}: DropdownDefaultProps) => {
    return (
        <Dropdown>
            <DropdownMenu direction="left" show={true}>
                <DropdownItem type="interactive" label="Impersonate this user" iconName="admin" />
                <DropdownDivider />
                <DropdownItem label="Open Data" />
                <DropdownItem label="Open Manage" outbound={true} />
                <DropdownItem label="Open Workspace" />
                <DropdownDivider />
                <DropdownItem label="Edit" iconName="pencil" />
                <DropdownItem label="Duplicate" iconName="copy" />
                <DropdownItem type="danger" label="Delete" iconName="delete" />
            </DropdownMenu>
        </Dropdown>
    );
};
