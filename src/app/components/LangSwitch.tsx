import React from "react";
import { Icon } from "@/app/components/Icon";
import { Button } from "@/app/components/Button";

export interface LangSwitchProps {}

export const LangSwitch = ({}: LangSwitchProps) => {
    return (
        <div className="d-flex align-items-center gap-xs">
            <Icon name="translate" addClass="text-muted" />
            <span className="small text-muted">Edit for each language</span>
            <div className="btn-group btn-group-toggle btn-filter-radios">
                <Button label="English" type="default" size="sm" isActive={true}></Button>
                <Button label="French – Français" type="default" size="sm"></Button>
            </div>
        </div>
    );
};
