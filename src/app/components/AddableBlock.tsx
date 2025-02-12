import React from "react";
import { Icon } from "@/app/components/Icon";

export const AddableBlock = ({...props}) => {
    return (
        <a href="#" className="addable-block">
            <Icon name="plus-circle" size="xs" />
        </a>
    );
};