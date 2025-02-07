import { Icon } from "./Icon";

export interface ButtonProps {
    /**
     * Children Content
     */
    children?: React.ReactNode;
    /**
     * Button contents
     */
    label?: string | number; 
    /**
     * Is the button disabled?
     */
    disabled?: Boolean;
    /**
     * Is Active?
     */
    isActive?: Boolean;
    isLoading?: boolean;
    /**
     * Show Active Icon?
     */
    showActive?: Boolean;
    /**
     * Has Dropdown?
     */
    hasDropdown?: Boolean;
    /**
     * Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list
     */
    iconStartName?: string;
    /**
     * Icon name, names refer to the <a href="https://schoolab.github.io/inject-next/storybook-static./?path=/story/components-icons-list--list" target="_blank">Inject Icons</a> list
     */
    iconEndName?: string;
    iconStartImage?: string;
    /**
     * Custom class
     */
    addClass?: string;
    /**
     * Is this the principal call to action on the page?
     */
    type?: "default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "sso" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;
    /**
     * How large should the button be?
     */
    size?: "default" | "sm" | "xs";
    /**
     * Does the button have a btn-block class ?
     */
    extended?: Boolean;
    /**
     * Does the button have a btn-block class ?
     */
    outlined?: Boolean;

    link?: string;
    target?: string;
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

/**
 * Buttons drive actions in forms, dialogs, etc. and should be used to guide the user to their next best action. Button component has support for multiple sizes, type and can have a start or an end icon.
 */
export const Button = ({
    size = "default",
    type,
    disabled,
    isActive = false,
    isLoading = false,
    showActive = true,
    hasDropdown = false,
    label, link = "#",
    target,
    addClass,
    extended,
    outlined,
    iconStartName,
    iconEndName,
    iconStartImage,
    dataToggle,
    dataPlacement,
    dataOriginalTitle,
    dataBoundary,
    ...props
}: ButtonProps) => {
    let classTab = ["btn"];
    type && outlined && classTab.push(`btn-outline-${type}`);
    type && !outlined && classTab.push(`btn-${type}`);
    size !== "default" && classTab.push(`btn-${size}`);
    isActive && classTab.push("active");
    isLoading && classTab.push("disabled");
    hasDropdown && classTab.push("dropdown-toggle");
    extended && classTab.push("btn-block");
    disabled && classTab.push("disabled");
    addClass && classTab.push(addClass);

    return (
        <a
            href={link}
            className={classTab.join(" ")}
            role="button"
            target={target}
            data-toggle={dataToggle}
            data-placement={dataPlacement}
            data-original-title={dataOriginalTitle}
            data-boundary={dataBoundary}
            {...props}
        >
            {isLoading ? (
                <>
                    <Icon name="loading" addClass="icon-spin" />
                    <span>{label}</span>
                </>
            ) : (
                <>
                    {isActive && showActive && <Icon name="check" />}
                    {iconStartName && <Icon name={iconStartName} />}
                    {iconStartImage && <img className="img" src={iconStartImage} />}
                    {label && <span>{label}</span>}
                    {props.children && props.children}
                    {iconEndName && <Icon name={iconEndName} />}
                </>
            )}
        </a>
    );
};
