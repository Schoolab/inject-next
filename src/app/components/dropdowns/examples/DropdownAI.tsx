import React from "react";

import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { DropdownNested } from "@/app/components/dropdowns/DropdownNested";

interface DropdownAIProps {}

export const DropdownAI = ({}: DropdownAIProps) => {
    return (
        <Dropdown>
            <DropdownMenu direction="left" show={true}>
                <DropdownItem type="ai" label="Write content" iconName="pencil" />
                <DropdownDivider />
                <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                <DropdownItem type="ai" label="Make longer" iconName="longer-text" />
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
                <DropdownItem type="ai" label="Transcribe voice" iconName="micro" />
         
                <div className="dropdown-content text-center">
                    <span>Ask AI can make mistakes. Check important info.</span>
                </div>
            </DropdownMenu>
        </Dropdown>
    );
};
