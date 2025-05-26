import { Icon } from "@/app/components/icons/Icon";
import { Notif } from "../badges/notifs/Notif";

export interface ButtonProps {

    children?: React.ReactNode;
    label?: string | number; 
    disabled?: Boolean;
    isActive?: Boolean;
    isLoading?: boolean;
    showActive?: Boolean;
    hasDropdown?: Boolean;
    hasNumber?: string;
    iconStartName?: string;
    iconEndName?: string;
    iconStartImage?: string;
    addClass?: string;
    type?: "default" | "primary" | "secondary" | "transparent" | "muted" | "accent" | "assistant" | "sso" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;
    size?: "default" | "sm" | "xs";
    extended?: Boolean;
    outlined?: Boolean;
    link?: string;
    target?: string;
    dataToggle?: string;
    dataPlacement?: string;
    dataOriginalTitle?: string;
    dataBoundary?: string;
}

export const Button = ({
    size = "default",
    type,
    disabled,
    isActive = false,
    isLoading = false,
    showActive = true,
    hasDropdown = false,
    hasNumber,
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
                    {hasNumber && <Notif status="accent" label={hasNumber} addClass="is-pill"/>}
                    {iconEndName && <Icon name={iconEndName} />}
                </>
            )}
        </a>
    );
};
