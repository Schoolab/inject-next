import React from "react";
import { ReactNode } from "react";
import { Icon } from "../Icon";
import { Progress } from "../Progress";
import { Placeholder } from "../Placeholder";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";
import { Tag } from "../badges/tags/Tag";
import { Button } from "../Button";
import { ProgressBar } from "../ProgressBar";

interface CardObjectivesProps {
    name?: string;
    description?: string;
    emoji?: string;
    date?: string;
    dueDate?: string;
    tasksNb?: number;
    tasksLabel?: string;
    progress?: number;
    btnLabel?: string;
    btnUrl?: string;
    locked?: boolean;
    addClass?: string;
    style?: React.CSSProperties;
}

export const CardObjectives = ({ name = "Objective Name", description, emoji, date, dueDate, progress = 0, tasksNb = 1, tasksLabel = "tasks", btnLabel = "View tasks", btnUrl = "#", locked, addClass, style, ...props }: CardObjectivesProps) => {
    let classTab = ["card"];
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
                                status={locked ? "default" : "open"}
                                iconName={locked ? "status-bordered" : "status-filled"}
                                label={date}
                            />
                        }
                        { (date && dueDate) && 
                            <Tag
                                status={locked ? "default" : "progress"}
                                iconName={locked ? "status-bordered" : "status-filled"}
                                label={date + " -> " + dueDate}
                            />
                        }
                    </div>
                    <div className="d-flex flex-column gap-none">
                        <p className="text-navigation-bold line-clamp-1">{name}</p>
                        <ul className="metas is-list small">
                            <li>{tasksNb} {tasksLabel}</li>
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