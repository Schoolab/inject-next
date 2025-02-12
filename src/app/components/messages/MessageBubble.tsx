import React, { CSSProperties } from "react";
import { Button } from "@/app/components/Button";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";

type MessageBubbleOptions = {
  label: string;
  caption?: string;
  href?: string;
  target?: "_blank" | "_self";
  icon?: string;
  type?: "danger" | "interactive" | "ai";
  disabled?: boolean;
  onClick?: () => void;
}

export interface MessageBubbleProps {
  message: string;
  options?: MessageBubbleOptions[];
  you?: boolean;
  addClass?: string;
  style?: CSSProperties;
}

export const MessageBubble = ({ message = "Hey there! ✋", options, you = false, addClass, style, ...props }: MessageBubbleProps) => {
  let tabClass = ["message-row"];
  addClass && tabClass.push(addClass);

  let contentClass = ["message-content"];
  you && contentClass.push("bg-primary text-white");

  return (
    <div className={tabClass.join(" ")} style={style} {...props}>

      <div className={contentClass.join(" ")} title="Mar 31, 2020 @ 20:11">
        <p className="mb-0">{message}</p>
      </div>

      {options && (
        <Dropdown addClass="message-options">
          <Button size="sm" type="transparent" iconStartName="options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
          <DropdownMenu>
            {options.map((option) => (
              <DropdownItem
                key={option.label}
                type={option.type}
                iconName={option.icon}
                label={option.label}
                caption={option.caption}
                href={option.href}
                target={option.target}
                disabled={option.disabled}
                onClick={option.onClick}
              />
            ))}
          </DropdownMenu>
        </Dropdown>
      )}
    </div>
  );
}