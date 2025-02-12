import React from "react";
import { ReactNode } from "react";
import { Icon } from "@/app/components/Icon";

interface EditableBlockProps {
    children?: ReactNode;
    /**
     * Custom class
     */
    addClass?: string;
}

export const EditableBlock = ({ children, addClass }: EditableBlockProps) => {
    let classTab = ["editable-block"];
    addClass && classTab.push(addClass);
    return (
        <div className={classTab.join(" ")}>
            
            <div className="editable-block-actions btn-group btn-group-xs">
                <a href="#" className="btn btn-xs btn-primary">
                    <Icon name="arrow-up" />
                </a>
                <a href="#" className="btn btn-xs btn-primary">
                    <Icon name="arrow-down" />
                </a>
                <a href="#" className="btn btn-xs btn-primary">
                    <Icon name="pencil" />
                    <span>Edit section</span>
                </a>
                <a href="#" className="btn btn-xs btn-primary btn-danger-on-hover">
                    <Icon name="delete" />
                </a>
            </div>

            {children}
        </div>
    );
};