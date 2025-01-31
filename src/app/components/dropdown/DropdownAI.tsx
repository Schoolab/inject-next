import React from "react";

import { Dropdown } from "./Dropdown";
import { DropdownMenu } from "./DropdownMenu";
import { DropdownItem } from "./DropdownItem";
import { DropdownDivider } from "./DropdownDivider";
import { DropdownNested } from "./DropdownNested";

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
                <DropdownNested>
                    <DropdownItem
                        type="ai"
                        label="Change tone..."
                        iconName="tone"
                        toggle={true}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    />
                    <DropdownMenu>
                        <DropdownItem label="Professional" />
                        <DropdownItem label="Casual" />
                        <DropdownItem label="Straightforward" />
                        <DropdownItem label="Confident" />
                        <DropdownItem label="Friendly" />
                    </DropdownMenu>
                </DropdownNested>
                <DropdownNested>
                    <DropdownItem
                        type="ai"
                        label="Translate to..."
                        iconName="translate"
                        toggle={true}
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    />
                    <DropdownMenu>
                        <DropdownItem label="English" />
                        <DropdownItem label="Korean" />
                        <DropdownItem label="Chinese, Simplified" />
                        <DropdownItem label="Chinese, Traditional" />
                        <DropdownItem label="Japanese" />
                        <DropdownItem label="Spanish" />
                        <DropdownItem label="Russian" />
                        <DropdownItem label="French" />
                        <DropdownItem label="Portuguese" />
                        <DropdownItem label="German" />
                        <DropdownItem label="Italian" />
                        <DropdownItem label="Dutch" />
                        <DropdownItem label="Indonesian" />
                        <DropdownItem label="Filipino" />
                        <DropdownItem label="Vietnamese" />
                    </DropdownMenu>
                </DropdownNested>
                <DropdownDivider />
                <DropdownItem label="Copy from English" iconName="copy" />
                <DropdownItem label="Restore to saved value" iconName="restore" />
                <div className="dropdown-content text-center">
                    <span>Ask AI can make mistakes. Check important info.</span>
                </div>
            </DropdownMenu>
        </Dropdown>
    );
};
