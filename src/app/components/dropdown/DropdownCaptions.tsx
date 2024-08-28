import React from "react";

import { Dropdown } from "./Dropdown";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownItem";
import { DropdownDivider } from "./DropdownDivider";

interface DropdownCaptionsProps {}

export const DropdownCaptions = ({}: DropdownCaptionsProps) => {
    return (
        <Dropdown>
            <DropdownMenu direction="left" show={true}>
                <DropdownItem label="Write a course summary" caption="From all the content inside" iconName="summarize" />
                <DropdownItem label="Translate to French" iconName="translate-generate" />
                <DropdownDivider />
                <DropdownItem label="Improve writing" iconName="improve-writing" />
                <DropdownItem label="Make shorter" iconName="shorter-text" />
                <DropdownItem label="Change tone..." iconName="tone" />
                <DropdownItem label="Translate to..." iconName="translate" />
                <DropdownDivider />
                <DropdownItem label="Copy from English" iconName="copy" />
                <DropdownItem label="Restore to saved value" iconName="restore" />
                <div className="dropdown-content text-center">
                    <span>AInject can make mistakes. Check important info.</span>
                </div>
            </DropdownMenu>
        </Dropdown>
    );
};
