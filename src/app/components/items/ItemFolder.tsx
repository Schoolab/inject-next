import React, { CSSProperties } from "react";

import { DropdownItem, DropdownItemProps } from "@/app/components/dropdowns/DropdownItem";
import { Icon } from "@/app/components/icons/Icon";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { Button } from "../buttons/Button";
import { DropdownMenu } from "../dropdowns/DropdownMenu";

export interface ItemFolderProps {
    label: string;
    caption?: string;
    icon?: string;
    options?: DropdownItemProps[];
    active?: boolean;
    addClass?: string;
    style?: CSSProperties;
}

export const ItemFolder = ({ label = "Folder", caption = "9 resources", icon = "folder", options, active, addClass, style, ...props }: ItemFolderProps) => {
    let classTab = ["item is-bordered"];
    addClass && classTab.push(addClass);
    active && classTab.push("active");

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            <div className="item-row gap-sm">
                <Icon name={icon} size="sm" addClass="text-muted" />
                <div className="item-content">
                    <a href="#" className="item-title h4 mb-none stretched-link text-truncate">
                        {label}
                    </a>
                    {caption && 
                        <ul className="item-caption metas small is-list">
                            <li className="text-truncate text-nowrap">{caption}</li>
                        </ul>
                    }
                </div>
                {options && 
                    <Dropdown addClass="z-3">
                        <Button type="transparent" iconStartName="options" data-toggle="dropdown" aria-expanded="false" data-boundary="window" link="#" />
                        <DropdownMenu direction="right">
                            {options.map((option, index) => (
                                <DropdownItem key={index} {...option} />
                            ))}
                        </DropdownMenu>
                    </Dropdown>
                }
            </div>
        </div>
    );
};
