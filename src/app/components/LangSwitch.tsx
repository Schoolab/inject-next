import React from "react";
import { Icon } from "@/app/components/Icon";
import { Button } from "@/app/components/Button";

export interface LangSwitchProps {
    /**
     * Label
     */
    label?: string;
}

export const LangSwitch = ({ label = "Edit for each language" }: LangSwitchProps) => {
    return (
        <div className="d-flex align-items-center gap-xs">
            <Icon name="translate" addClass="text-muted" />
            <span className="small text-muted">{label}</span>
            <div className="btn-group btn-group-toggle btn-filter-radios">
                <Button label="English" type="default" size="sm" isActive={true}></Button>
                <Button label="French – Français" type="default" size="sm"></Button>
            </div>
        </div>
    );
};
