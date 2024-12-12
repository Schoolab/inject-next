import React from "react";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";
import { Avatar } from "../avatars/Avatar";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { DropdownItem } from "../dropdown/DropdownItem";
import { Button } from "../Button";
import { Dropdown } from "../dropdown/Dropdown";
import { Role } from "../badges/roles/Role";
import { Placeholder } from "../Placeholder";
import { CardParticipant } from "./CardParticipant";

interface CardApplicationProps {}

export const CardApplication = ({}: CardApplicationProps) => {
    return (
        <CardParticipant name="Sarah Mecheneau" role="manager" metas={[{label: "Program Manager"}, {label: "Paris, FR"}]} avatar="https://inject-prod.s3.amazonaws.com/images/731305ed-0603-4910-9e93-65dd89ef302a/sq150.jpeg">
            <div className="card-targets">
                <div className="card-target-wrapper">
                    <div className="card-target to-collapse is-collapsed d-block" data-toggle="collapse" data-target="#collapseContent" aria-expanded="false">
                        <div className="d-flex align-items-center flex-fill">
                            <div className="d-flex align-items-center gap-2xs flex-grow-1">
                                <span className="icon icon-clipboard-text is-sm" />
                                <span>Application</span>
                            </div>
                            <span className="icon icon-chevron-right is-sm" />
                        </div>
                    </div>
                    <div className="collapse px-md pb-md" id="collapseContent">
                        <div className="bg-highlight rounded p-md">
                            <Placeholder />
                        </div>
                    </div>
                </div>
            </div>
        </CardParticipant>
    );
};
