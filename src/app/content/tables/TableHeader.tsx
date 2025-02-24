import React, { CSSProperties, useEffect } from "react";
import { tooltips } from "../../../../public/utils/tooltips";

import { Avatar } from "@/app/components/avatars/Avatar";
import { ProgramLetters } from "@/app/components/avatars/ProgramLetters";
import { ProjectLetter } from "@/app/components/avatars/ProjectLetter";
import { Button } from "@/app/components/buttons/Button";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { Icon } from "@/app/components/icons/Icon";
import { Role, RoleProps } from "@/app/components/badges/roles/Role";
import { ItemIcon } from "@/app/components/avatars/ItemIcon";
import { Date } from "@/app/components/avatars/Date";
import { Sdg } from "@/app/components/avatars/Sdg";
type MetaType = {
  label: string;
}

export interface TableHeaderProps {
    type?: "default" | "title" | "link" | "long" | "org" | "program" | "project" | "user" | "pdf" | "file" | "event" | "coachProject" | "projectCoach" | "sdg";
    title?: string;
    link?: string;
    role?: RoleProps["status"];

    meta?: MetaType[];
    day?: string;
    month?: string;
    project?: string;

    avatar?: string;
    icon?: string;
    emoji?: string;
    fileIcon?: string;
    sdg?: number;
    copy?: boolean;
    download?: boolean;
    options?: boolean;

    addClass?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
}

export const TableHeader = ({ type = "default", title = "–", link, meta, day, month, project, avatar, role, icon, emoji, fileIcon, sdg, copy, download, options = true, addClass, style, children, ...props }: TableHeaderProps) => {
    let classTableHeader = ["table-header"];
    addClass && classTableHeader.push(addClass);

    useEffect(() => {
      tooltips();
    }, []);

    return (
      <th className={classTableHeader.join(" ")} style={{...style}} {...props}>
        <div className="d-flex align-items-center flex-fill gap-0">

          {children ? children : (
            <div className="d-flex align-items-start flex-fill gap-xs">
              {emoji && <div className="text-muted">
                <div aria-hidden="true" className="icon is-24px">{emoji}</div>
              </div>}

              {icon && <div className="text-muted">
                <Icon size="sm" name={icon} />
              </div>}

              {type === "org" && <Avatar size="lg" image={avatar} iconName="org" isOval={false} />}
              {type === "program" && <ProgramLetters size="lg" name={title} />}
              {type === "project" && <ProjectLetter size="lg" name={title} />}
              {type === "user" && <Avatar size="lg" image={avatar} iconName="account" />}
              {type === "pdf" && <ItemIcon icon={fileIcon} addClass="text-danger" />}
              {type === "file" && <ItemIcon icon={fileIcon} />}
              {type === "event" && day && month && <Date month={month} day={day} />}
              {type === "coachProject" && project && (
                <div className="thumbnail-relation m-auto">
                  <Avatar size="lg" image={avatar} />
                  {project && <ProjectLetter size="sm" name={project} addClass="is-top" />}
                </div>
              )}
              {type === "projectCoach" && project && (
                <div className="thumbnail-relation m-auto">
                  {project && <ProjectLetter size="lg" name={project} />}
                  <Avatar size="sm" image={avatar} addClass="is-top" />
                </div>
              )}
              {type === "sdg" && sdg && <Sdg number={sdg} />}

              <div className="d-flex flex-column flex-fill gap-0">
                {(type === "default" && !link) && <p className="font-weight-normal d-flex align-items-center gap-3xs" aria-labelledby="large"><span>{title}</span>{role &&<Role status={role} />}</p>}
                {(type === "title" && !link) && <p className="font-weight-bold d-flex align-items-center gap-3xs" aria-labelledby="large"><span>{title}</span>{role &&<Role status={role} />}</p>}
                {(type === "link" || link) && <a href={link} className="is-primary font-weight-bold stretched-link d-flex align-items-center gap-3xs" aria-labelledby="large"><span>{title}</span>{role &&<Role status={role} />}</a>}
                {meta && <div className="text-muted small metas is-list mb-none">
                  <div className="metas is-list text-muted small mb-none">
                    {meta.map((item, index) => (
                      <p key={index}>{item.label}</p>
                    ))}
                  </div>
                </div>}
              </div>
            </div>)
          }

          {copy && <Button type="muted" addClass="show-on-hover z-3" iconStartName="copy" data-toggle="tooltip" data-placement="top" data-boundary="window" data-original-title="Copy to clipboard" />}
          {download && <Button type="muted" addClass="show-on-hover z-3" iconStartName="download" data-toggle="tooltip" data-placement="top" data-boundary="window" data-original-title="Download file" />}

          {options && <Dropdown addClass="dropdown-container z-3" data-toggle="tooltip" data-placement="top" data-boundary="window" data-original-title="Options">
            <Button type="muted" iconStartName="options" data-toggle="dropdown" aria-expanded="false" />
            <DropdownMenu direction="right">
              <DropdownItem label="Data" />
              <DropdownItem label="Manage" />
              <DropdownItem label="Workspace" />
              <DropdownDivider />
              <DropdownItem label="Edit" iconName="pencil" />
              <DropdownItem label="Duplicate" iconName="copy" />
              <DropdownItem label="Delete" iconName="delete" type="danger" />
            </DropdownMenu>
          </Dropdown>}
        </div>
      </th>
    );
};
