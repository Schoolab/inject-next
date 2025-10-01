import React, { CSSProperties } from "react";
import { Icon } from "@/app/components/icons/Icon";
import { Progress } from "@/app/components/progress/Progress";
import { Button } from "@/app/components/buttons/Button";

export interface ItemSetupTaskProps {
    title?: string;
    link?: string;
    caption?: string;
    icon?: string;
    progress?: number;
    tasks?: number;

    addClass?: string;
    style?: CSSProperties;
}

export const ItemSetupTask = ({
    title = "Task title",
    link = "#",
    caption = "Task description",
    icon = "information",
    progress = 0,
    tasks = 0,
    addClass,
    style,
    ...props
}: ItemSetupTaskProps) => {
    let classTab = ["item is-linked is-bordered"];
    addClass && classTab.push(addClass);

    ((progress / tasks) * 100) === 100 && classTab.push("is-completed")

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            <div className="item-row">
                <div className="item-row">
                    <Icon name={icon} addClass="item-icon is-darker" />
                    <div className="item-content">
                        <a href={link} className="item-title stretched-link">{title}</a>
                        { caption && <span className="small text-muted">{caption}</span> }
                    </div>
                </div>
                <div className="item-options">
                    <Button addClass="z-2" type="transparent" data-toggle="tooltip" data-original-title="Mark as uncompleted">
                        <Progress percentage={ (progress / tasks) * 100 } size="sm" />
                    </Button>
                </div>
            </div>
        </div>
    );
};

