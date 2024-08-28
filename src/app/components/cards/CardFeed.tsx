import React from "react";
import { Card } from "./Card";
import { CardInfos } from "./CardInfos";
import { ItemRessource } from "../items/ItemRessource";
import { Icon } from "../Icon";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { DropdownItem } from "../dropdown/DropdownItem";
import { DropdownDivider } from "../dropdown/DropdownDivider";

interface CardFeedProps {
    /**
     * commented ?
     */
    commented?: boolean;
    /**
     * liked ?
     */
    liked?: boolean;
}

export const CardFeed = ({ commented, liked }: CardFeedProps) => {
    return (
        <Card>
            <CardInfos addClass="d-flex flex-column align-items-stretch gap-md p-24px">
                <div className="d-flex flex-grow-1 gap-sm">
                    <div className="thumbnail-relation m-auto">
                        <a href="#" className="thumbnail is-oval is-lg is-bordered">
                            <img src="https://inject-prod.s3.amazonaws.com/images/b95837ec-6dcf-4600-8567-dfb71f4e3c38/sq150.jpeg" />
                        </a>
                    </div>
                    <div className="card-title flex-grow-1">
                        <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                            <span>Nora Hechelef</span>
                        </a>
                        <ul className="text-muted small metas is-list mb-none">
                            <li>
                                <span>May 13</span>
                            </li>
                            <li>
                                <span>3:39 PM</span>
                            </li>
                        </ul>
                    </div>
                    <Dropdown addClass="z-2">
                        <a className="btn btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="icon is-20px icon-dots-vertical" />
                        </a>
                        <DropdownMenu direction="right">
                            <DropdownItem label="Open post" />
                            <DropdownDivider />
                            <DropdownItem label="Open profile" outbound={true} />
                            <DropdownItem label="Open program" outbound={true} />
                            <DropdownDivider />
                            <DropdownItem label="Edit" iconName="pencil" />
                            <DropdownItem type="danger" label="Delete" iconName="delete" />
                        </DropdownMenu>
                    </Dropdown>
                    
                </div>
                <div className="d-flex flex-column gap-md">
                    <p>Dans la gestion de projet, on entend souvent parler de "chemin critique". Mais qu'est-ce que cela signifie réellement ? Comment est-il déterminé et pourquoi est-il si crucial pour la réussite d'un projet ? Pourriez-vous donner un exemple concret pour illustrer son importance ?</p>
                    <a href="#">Read more -&gt;</a>
                </div>
                <ItemRessource
                    isSmall={false}
                    action="download"
                    icon={{
                        addClass: "text-danger",
                        name: "file-pdf-box",
                    }}
                    ressource={{
                        details: "120 KB",
                        name: "stakeholdermap-model.pdf",
                        type: "PDF File",
                    }}
                />

                <div className="d-flex justify-content-between flex-nowrap">
                    <div className="d-flex gap-xs flex-fill">
                        {liked ? (
                            <a href="#" className="btn btn-sm btn-secondary active">
                                <Icon name="thumb-up" />
                                <span>9</span>
                            </a>
                        ) : (
                            <a href="#" className="btn btn-sm btn-secondary">
                                <Icon name="thumb-up" />
                                <span>Like</span>
                            </a>
                        )}

                        {commented ? (
                            <a href="#" className="btn btn-sm btn-secondary">
                                <Icon name="comment" />
                                <span>4</span>
                            </a>
                        ) : (
                            <a href="#" className="btn btn-sm btn-secondary">
                                <Icon name="comment" />
                                <span>Comment</span>
                            </a>
                        )}
                    </div>
                    <a href="#" className="btn btn-sm btn-secondary" data-toggle="tooltip" data-placement="top" data-original-title="Click to copy link" data-boundary="window">
                        <Icon name="share" />
                        <span>Copy link</span>
                    </a>
                </div>
            </CardInfos>
        </Card>
    );
};
