import React from "react";
import { Card } from "@/app/components/cards/Card";
import { CardInfos } from "@/app/components/cards/CardInfos";
import { Avatar } from "@/app/components/avatars/Avatar";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { Button } from "@/app/components/buttons/Button";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { Role } from "@/app/components/badges/roles/Role";
import { Placeholder } from "@/app/content/Placeholder";
import { CardParticipant } from "@/app/components/cards/CardParticipant";

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
