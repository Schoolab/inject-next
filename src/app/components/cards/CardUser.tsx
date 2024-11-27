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

interface CardUserProps {}

export const CardUser = ({}: CardUserProps) => {
    return (
        <>
            <Card>
                <CardInfos addClass="is-linked d-flex align-items-start gap-sm">
                    <Avatar image="https://inject-prod.s3.amazonaws.com/images/731305ed-0603-4910-9e93-65dd89ef302a/sq150.jpeg" />
                    <div className="card-title flex-grow-1">
                        <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                            <span>Sarah Mecheneau</span>
                            <Role status="manager" />
                        </a>
                        <ul className="metas is-list small">
                            <li>Program Manager at Schoolab</li>
                            <li>Paris, FR</li>
                        </ul>
                    </div>
                    <Dropdown addClass="z-2">
                        <Button type="muted" iconStartName="options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <DropdownMenu direction="right">
                            <DropdownItem label="Show profile" />
                            <DropdownItem label="Send a message" />
                        </DropdownMenu>
                    </Dropdown>
                </CardInfos>
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
            </Card>
        </>
    );
};
