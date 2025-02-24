import React from "react";
import { ReactNode } from "react";
import { Icon } from "@/app/components/Icon";
import { Progress } from "@/app/components/Progress";
import { Placeholder } from "@/app/content/Placeholder";
import { Card } from "@/app/components/cards/Card";
import { CardInfos } from "@/app/components/cards/CardInfos";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Button } from "@/app/components/Button";
import { ProgressBar } from "@/app/components/ProgressBar";
import { Completed } from "@/app/components/Progress.stories";

interface CardObjectiveProps {
    name?: string;
    description?: string;
    emoji?: string;
    date?: string;
    dueDate?: string;
    tasksNb?: number;
    tasksLabel?: string;
    tasksLabelPlural?: string;
    progress?: number;
    btnLabel?: string;
    btnUrl?: string;
    locked?: boolean;
    addClass?: string;
    style?: React.CSSProperties;
}

export const CardObjective = ({ name = "Objective Name", description, emoji, date, dueDate, progress = 0, tasksNb = 1, tasksLabel = "task", tasksLabelPlural = "tasks", btnLabel = "Show tasks", btnUrl = "#", locked, addClass, style, ...props }: CardObjectiveProps) => {
    let classTab = [""];
    addClass && classTab.push(addClass);

    return (
        <Card addClass={classTab.join(" ")} style={{ ...style }} { ...props }>
            <CardInfos addClass="d-flex flex-column align-items-stretch gap-md">
                <div className="d-flex flex-column gap-sm">
                    <div className="d-flex justify-content-between">
                        { emoji 
                            ? <div className="emoji is-20px">{emoji}</div> 
                            : <Icon name="objective" size="2sm"/>
                        }
                        { (date && !dueDate) && 
                            <Tag
                                status={locked ? "draft" : "open"}
                                iconName={locked ? "status-bordered" : "status-filled"}
                                label={date}
                            />
                        }
                        { (date && dueDate) && 
                            <Tag
                                status={locked ? "draft" : "progress"}
                                iconName={locked ? "status-bordered" : "status-dashed"}
                                label={date + " -> " + dueDate}
                            />
                        }
                    </div>
                    <div className="d-flex flex-column gap-none">
                        <p className="h4 line-clamp-1">{name}</p>
                        <ul className="metas is-list small">
                            <li>{tasksNb} {tasksNb > 1 ? tasksLabelPlural : tasksLabel }</li>
                        </ul>
                    </div>
                    { description && <p className="text-navigation">{description}</p> }
                </div>
                <ProgressBar max={tasksNb} percentage={ (progress / tasksNb) * 100 } text={ progress + "/" + tasksNb } />
                { btnUrl && <Button type="default" extended={true} label={btnLabel} link={btnUrl} addClass="stretched-link " /> }
            </CardInfos>
            { locked && <div className="overlay d-flex flex-column justify-content-center align-items-center gap-md text-center p-sm">
                <Icon size="sm" name="lock" />
                <div className="d-flex flex-column gap-2xs">
                    <p className="h4">Locked objective</p>
                    { date 
                        ? <p className="text-muted small">Available from {date}</p>
                        : <p className="text-muted small">Available soon, come back later</p>
                    }
                </div>
            </div> }
        </Card>
    );
};