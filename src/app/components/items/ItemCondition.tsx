import React from "react";
import { Placeholder } from "@/app/content/Placeholder";

export interface ItemConditionProps {
  condition: string;
  value: string;
  addClass?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

export const ItemCondition = ({ condition = "If Participant's type is", value = "Student", addClass, style, children, ...props }: ItemConditionProps) => {
    let classTab = ["item--condition-wrapper"];
    addClass && classTab.push(addClass);

    return (
      <div className={classTab.join(" ")} style={style} {...props}>
        <div className="py-8px px-12px d-flex justify-content-between align-items-center text-muted small">
            <span>
                {condition} <span className="text-body">{value}</span>
            </span>
            <span>Condition</span>
        </div>
        {children ? children : <Placeholder style={{ border: "1px solid var(--border-default)" }} />}
      </div>
    );
};
