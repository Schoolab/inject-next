import React from "react";

import { Dropdown } from "./Dropdown";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownItem";
import { DropdownDivider } from "./DropdownDivider";

interface DropdownAIProps {}

export const DropdownAI = ({}: DropdownAIProps) => {
    return (
        <Dropdown>
            <DropdownMenu direction="left" show={true}>
                <DropdownItem type="ai" label="Write a course summary" caption="From all the content inside" iconName="summarize" />
                <DropdownItem type="ai" label="Translate to French" iconName="translate-generate" />
                <DropdownDivider />
                <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                <DropdownItem type="ai" label="Change tone..." iconName="tone" />
                <DropdownItem type="ai" label="Translate to..." iconName="translate" />
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
