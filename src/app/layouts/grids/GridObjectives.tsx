import React from "react";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";
import { ItemObjective } from "@/app/components/items/ItemObjective";
import { Button } from "@/app/components/buttons/Button";

type ObjectiveType = {
    icon?: string;
    emoji?: string;
    name: string;
    link?: string;
    tasks?: number;
    date?: string;
    dueDate?: string;
    locked?: boolean;
}

type MilestoneType = {
    label?: string; 
    number?: number; 
    date?: string;
    dueDate?: string;
    locked?: boolean;
    objectives?: ObjectiveType[];
}

export interface GridObjectivesProps {
    milestones?: MilestoneType[];
}

export const GridObjectives = ({
    milestones,
}: GridObjectivesProps) => {
    let listMilestones = milestones?.map((milestone) => <ItemsGroup>
        <ItemsGroupHeader label={milestone.label} date={milestone.date} dueDate={milestone.dueDate} locked={milestone.locked} number={milestone.number} />
        { milestone.objectives && <div className="d-flex flex-column gap-2xs">
        {milestone.objectives?.map((objective) => <ItemObjective icon={objective.icon} emoji={objective.emoji} name={objective.name} tasks={objective.tasks} date={objective.date} dueDate={objective.dueDate} locked={objective.locked} />)}
        </div> }
        <Button label="Add objective" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
    </ItemsGroup>);

    return (
        <div className="grid-container overflow-x-scroll overflow-y-visible w-100">
            <div className="grid-cards gap-md">
                {listMilestones}
                <Button label="Add milestone" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
            </div>
        </div>
    );
};
