import { CSSProperties } from "react";
import { Placeholder } from "@/app/content/Placeholder";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";

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
            {children ? 
                children
            :
                <>
                    <ItemsGroupHeader label="Items Group" number={3} />
                    <div className="d-flex flex-column gap-2xs">
                        <Placeholder style={{ border: "var(--stroke-thin) solid var(--border-default)", borderRadius: "var(--radius-minimal)" }} />
                        <Placeholder style={{ border: "var(--stroke-thin) solid var(--border-default)", borderRadius: "var(--radius-minimal)" }} />
                        <Placeholder style={{ border: "var(--stroke-thin) solid var(--border-default)", borderRadius: "var(--radius-minimal)" }} />
                    </div>
                </>
            }
        </div>
    );
};
