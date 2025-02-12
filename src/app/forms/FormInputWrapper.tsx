import { ReactNode } from "react";
import { Placeholder } from "@/app/content/Placeholder";
import { Button } from "@/app/components/Button";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdown/DropdownDivider";
import { DropdownNested } from "@/app/components/dropdown/DropdownNested";

export interface FormInputWrapperProps {
    children?: ReactNode;
    addClass?: string;
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const FormInputWrapper = ({ 
    addClass, 
    children,
    ...props
}: FormInputWrapperProps) => {
    let classTab = ["form-input-wrapper"];
    addClass && classTab.push(addClass);

    return(
        <div className={classTab.join(" ")} {...props}>
            {children && children}
            {!children && (
                <>
                    <Placeholder />
                    <div className="input-floating-actions">
                        <Dropdown>
                            <Button iconStartName="ai" label="Ask AI" size="xs" type="transparent" addClass="dropdown-toggle text-ai" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                            <DropdownMenu direction="right">
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
                    </div>
                </>
            )}
            
        </div>
    );
};