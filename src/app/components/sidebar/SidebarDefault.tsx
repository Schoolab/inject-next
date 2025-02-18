import React, { CSSProperties } from "react";
import { SidebarItem, SidebarItemProps } from "./SidebarItem";

export type SidebarSectionType = {
    label?: string;
    items: SidebarItemProps[];
    addClass?: string;
}

export interface SidebarDefaultProps {
    id?: string;
    addClass?: string;
    sections: SidebarSectionType[];
    style?: CSSProperties;
    children?: React.ReactNode;
}

export const SidebarDefault = ({ id = "accordionManageNav", sections, addClass, style, children, ...props }: SidebarDefaultProps) => {
    let classTab = ["application-sidebar", "d-none", "d-lg-block", "sidebar", "overflow-auto"];
    addClass && classTab.push(addClass);

    return (
        <aside id="leftMainSidebar" className={classTab.join(" ")} style={style} {...props}>
            <div className="sidebar overflow-auto">
                <div id={id} className="d-flex flex-column flex-fill gap-xl px-24px pt-24px pb-32px accordion">

                    {sections.map((section, i) => (
                        <ul className={`nav nav-main flex-column ${section.addClass || ''}`}>
                            {section.label && <li key={i} className="nav-item ">
                                <span className="nav-title">{section.label}</span>
                            </li>}
                            {section.items.map((item, index) => (
                                <SidebarItem key={index} {...item} parent={id} />
                            ))}
                        </ul>
                    ))}
                    
                </div>
            </div>
        </aside>
    );
};
