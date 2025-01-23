import { CSSProperties } from "react";

export interface ItemsGroupProps {
    children?: React.ReactNode;
    addClass?: string;
    style?: CSSProperties;
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const ItemsGroup = ({ children, addClass, style, ...props }: ItemsGroupProps) => {
    let classTab = ["item-group"];
    addClass && classTab.push(addClass);

    return (
        <div className={classTab.join(" ")} style={style} {...props}>
            {children && children}
        </div>
    );
};
