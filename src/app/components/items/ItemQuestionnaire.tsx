import React from "react";
import { Icon } from "../Icon";
import { Placeholder } from "../Placeholder";
import { Dropdown } from "../dropdown/Dropdown";
import { Button } from "../Button";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { DropdownItem } from "../dropdown/DropdownItem";
import { DropdownHeader } from "../dropdown/DropdownHeader";
import { DropdownDivider } from "../dropdown/DropdownDivider";

interface QuestionTypeProps {
    type: "text" | "textarea" | "select" | "radio" | "checkbox" | "checklist" | "attachment" | "link" | "rating" | "votes";
    addClass?: string;
    style?: React.CSSProperties;
}

export interface ItemQuestionnaireProps {
    id?: string;
    type: "text" | "textarea" | "select" | "radio" | "checkbox" | "checklist" | "attachment" | "link" | "rating" | "votes";
    label: string;
    caption?: string;
    required?: boolean;
    isPrivate?: boolean;
    locked?: boolean;
    collapsable?: boolean;
    link?: string;
    options?: boolean;
    addClass?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}

export const QuestionType = ({ type = "text", addClass, style, ...props }: QuestionTypeProps) => {
    let icon = "form-textbox";
    let title = "Short text";
    type === "text" && (icon = "form-textbox", title = "Short text");
    type === "textarea" && (icon = "form-textarea", title = "Long text");
    type === "select" && (icon = "form-select", title = "Unique choice (select)");
    type === "radio" && (icon = "form-radiobox-marked", title = "Unique choice (radio)");
    type === "checkbox" && (icon = "form-checkbox-marked", title = "Multiple choices");
    type === "checklist" && (icon = "form-checklist", title = "Checklist");
    type === "attachment" && (icon = "attachment", title = "Resources");
    type === "link" && (icon = "link", title = "Link");
    type === "rating" && (icon = "rating", title = "Rating");
    type === "votes" && (icon = "votes", title = "Votes");
    
    return (
        <Icon name={icon} size="2sm" addClass="p-3xs text-muted" dataToggle="tooltip" dataPlacement="top" dataOriginalTitle={title} dataBoundary="window" />
    );
};

export const ItemQuestionnaire = ({
    id = "question1",
    type = "text",
    label,
    caption,
    required,
    isPrivate,
    locked,
    collapsable,
    link = "#",
    options = true,
    addClass,
    style,
    children,
    ...props
}: ItemQuestionnaireProps) => {
    let tabClass = ["item", "is-small", "is-bordered", "gap-0px"];
    addClass && tabClass.push(addClass);

    return (
        <div className={tabClass.join(" ")} style={style} {...props}>
            <div className="item-row gap-2xs pb-8px" data-toggle={collapsable ? "collapse" : undefined} data-target={collapsable ? `#${id}` : undefined} aria-expanded={collapsable ? "false" : undefined} data-boundary="window">
                {collapsable && <a className="btn btn-xs btn-transparent btn-icon" data-toggle="collapse" data-target={`#${id}`} aria-expanded="false" href="#">
                    <span className="icon icon-chevron-right" data-toggle="tooltip" data-placement="top" data-original-title="Click to toggle." data-boundary="window" />
                </a>}
                <div className="d-flex flex-fill gap-xs">
                    <QuestionType type={type} />
                    <div className="item-content d-flex flex-column align-items-start justify-content-center">
                        {collapsable ? 
                            <h4 className=" h4 item-title">
                                {label}
                                {required && <span className="text-danger" data-toggle="tooltip" data-placement="top" data-original-title="Required question" data-boundary="window">
                                    *
                                </span>}
                            </h4>
                        : 
                            <a href={link} className=" h4 item-title stretched-link">
                                {label}
                                {required && <span className="text-danger" data-toggle="tooltip" data-placement="top" data-original-title="Required question" data-boundary="window">
                                    *
                                </span>}
                            </a>
                        }
                        {caption && <span className="small text-muted">{caption}</span>}
                    </div>
                </div>
                <div className="d-flex align-items-center gap-xs dropdown z-2">
                    {isPrivate && <Icon name="visibility-off" size="2sm" addClass="text-muted" dataToggle="tooltip" dataPlacement="top" dataOriginalTitle="Private response" dataBoundary="window" />}
                    {locked && <Icon name="lock" size="2sm" addClass="text-muted" dataToggle="tooltip" dataPlacement="top" dataOriginalTitle="Locked. Can't be moved or deleted." dataBoundary="window" />}
                    {options && <Dropdown addClass="dropdown-container">
                        <Button type="muted" addClass="btn-icon" iconStartName="options" dataToggle="dropdown" aria-expanded="false" data-boundary="window" />
                        <DropdownMenu direction="right">
                            <DropdownHeader label="Position" />
                            <DropdownItem label="Send to top" iconName="arrow-top" />
                            <DropdownItem label="Move up" iconName="arrow-up" />
                            <DropdownItem label="Move down" iconName="arrow-down" />
                            <DropdownItem label="Send to bottom" iconName="arrow-bottom" />
                            <DropdownDivider />
                            <DropdownItem label="Edit" iconName="pencil" data-toggle="collapse" data-target={`#${id}`} />
                            <DropdownItem label="Delete" type="danger" iconName="delete" />
                        </DropdownMenu>
                    </Dropdown>}
                </div>
            </div>
            {collapsable && <div className="collapse" id={id}>
                {children ? children : <Placeholder addClass="rounded-sm mb-2xs" style={{ height: "16rem" }} />}
            </div>}
        </div>
    );
};
