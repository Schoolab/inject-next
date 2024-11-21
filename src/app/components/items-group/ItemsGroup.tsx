export interface ItemsGroupProps {
    /**
     * Children Content
     */
    children: React.ReactNode;
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const ItemsGroup = ({ ...props }: ItemsGroupProps) => {
    let classTab = ["item-group"];

    return (
        <div className={classTab.join(" ")} {...props}>
            {props.children}
        </div>
    );
};
