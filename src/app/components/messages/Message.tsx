import React, { CSSProperties, useEffect } from "react";
import { MessageBubble, MessageBubbleProps } from "./MessageBubble";
import { Avatar } from "../avatars/Avatar";
import { Role } from "../badges/roles/Role";
import { tooltips } from "../../../../public/utils/tooltips";

type MetasType = {
  label: string;
  dataToggle?: string;
  dataPlacement?: string;
  dataOriginalTitle?: string;
  dataBoundary?: string;
}

export interface MessageProps {
  messages: MessageBubbleProps[];
  seen?: boolean;
  showAvatar?: boolean;
  avatar?: string;
  name: string;
  link?: string;
  role?: "admin" | "manager" | "expert" | "jury" | "participant" | "visitor";
  metas?: MetasType[];
  position?: "left" | "right";
  align?: "top" | "bottom";
  hover?: boolean;
  addClass?: string;
  style?: CSSProperties;
}

export const Message = ({ messages, showAvatar, avatar, name, link = "#", role, metas, seen = false, position = "left", align = "bottom", hover = true, addClass, style, ...props }: MessageProps) => {
  let classTab = ["message"];
  position && classTab.push(`is-${position}`);
  align && classTab.push(`is-${align}`);
  hover && classTab.push(`is-hover`);
  
  useEffect(() => {
    tooltips();
  }, []);

  return (
    <div className={classTab.join(" ")} style={style} {...props}>

      {showAvatar && <Avatar size="md" iconName="account" image={avatar} dataToggle="tooltip" dataPlacement="top" dataOriginalTitle={name} dataBoundary="window" />}

      <div className="message-body">
          <div className="message-row">
            <ul className="metas is-list small">
              <li>
                <a href={link} className="text-muted d-flex align-items-center gap-2xs">
                    <span>{name}</span>
                    {role &&<Role status={role} dataToggle="tooltip" dataPlacement="top" dataOriginalTitle={role} dataBoundary="window" />}
                </a>
              </li>
              {metas && metas.map((meta, index) => (
                <li
                  key={index}
                  data-toggle={meta.dataToggle}
                  data-placement={meta.dataPlacement}
                  data-original-title={meta.dataOriginalTitle}
                  data-boundary={meta.dataBoundary}
                >
                  {meta.label}
                </li>
              ))}
            </ul>
          </div>
          <div className="message-list">
              {messages.map((message, index) => (
                  <MessageBubble key={index} {...message} />
              ))}
          </div>
          {seen && 
            <div className="message-row">
              <span className="small text-muted">Seen</span>
            </div>
          }
      </div>
  </div>
  );
};