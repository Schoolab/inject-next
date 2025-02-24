import React, { CSSProperties } from "react";
import { Placeholder } from "@/app/content/placeholders/Placeholder";

export interface ButtonsGroupProps {
    /**
     * In order for assistive technologies (such as screen readers) to convey that a series of buttons is grouped, an appropriate role attribute needs to be provided. For button groups, this would be `role="group"`, while toolbars should have a `role="toolbar"`.
     */
    role?: "group" | "toolbar";
    /**
     * In addition, groups and toolbars should be given an explicit label, as most assistive technologies will otherwise not announce them, despite the presence of the correct role attribute. In the examples provided here, we use `aria-label`, but alternatives such as `aria-labelledby` can also be used.
     */
    ariaLabel?: string;
    addClass?: string;
    style?: CSSProperties;
    children?: React.ReactNode;
}

export const ButtonsGroup = ({
    role = "group",
    ariaLabel,
    addClass,
    style,
    children,
    ...props
}: ButtonsGroupProps) => {
    let classTab = ["btn-group"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")} role={role} aria-label={ariaLabel} style={{ ...style }} {...props}>
            { children ? children : <Placeholder /> }
        </div>
    );
};
