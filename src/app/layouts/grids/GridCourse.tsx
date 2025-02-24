import React from "react";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";
import { ItemCapsule } from "@/app/components/items/ItemCapsule";
import { Button } from "@/app/components/buttons/Button";

type CapsuleType = {
    icon?: string;
    emoji?: string;
    name: string;
    link?: string;
    questions?: number;
    date?: string;
    dueDate?: string;
    locked?: boolean;
}

type ModuleType = {
    label?: string; 
    number?: number; 
    date?: string;
    dueDate?: string;
    locked?: boolean;
    capsules?: CapsuleType[];
}

export interface GridCourseProps {
    modules?: ModuleType[];
}

export const GridCourse = ({
    modules,
}: GridCourseProps) => {
    let listModules = modules?.map((module) => <ItemsGroup>
        <ItemsGroupHeader label={module.label} date={module.date} dueDate={module.dueDate} locked={module.locked} number={module.number} />
        { module.capsules && <div className="d-flex flex-column gap-2xs">
        {module.capsules?.map((capsule) => <ItemCapsule icon={capsule.icon} emoji={capsule.emoji} name={capsule.name} questions={capsule.questions} date={capsule.date} dueDate={capsule.dueDate} locked={capsule.locked} />)}
        </div> }
        <Button label="Add capsule" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
    </ItemsGroup>);

    return (
        <div className="grid-container overflow-x-scroll overflow-y-visible w-100">
            <div className="grid-cards gap-md">
                {listModules}
                <Button label="Add module" iconStartName="plus-circle" size="sm" type="muted" addClass="align-self-start" />
            </div>
        </div>
    );
};
