import { Icon } from "@/app/components/icons/Icon";

export interface EmptyStateProps {
    title?: string; 
    text?: string; 
    iconTitle?: string;
    iconBtn?: string;
    labelBtn?: string;
    labelLink?: string;
    bordered?: Boolean;
    spacious?:  Boolean;
}

export const EmptyState = ({ title="No category", text="Your category will be listed here", labelLink, iconTitle, iconBtn= "plus-circle", labelBtn, bordered = true, spacious = false, ...props  }: EmptyStateProps) => {
    let classTab = ["bg-white d-flex flex-column align-items-center gap-0px text-center"];
    bordered && classTab.push("border rounded");
    !spacious && classTab.push("px-2xl py-2xl");
    spacious && classTab.push("px-3xl py-80px");

    return (
        <div className={classTab.join(" ")} {...props}>
            {iconTitle && 
                <div className="d-flex pb-16px">
                <Icon size="sm" name={iconTitle} />
                </div>
            }         
            <div className="d-flex flex-column gap-2xs">
                <p className="font-weight-bold">{title}</p>
                <p className="small text-muted">{text}</p>
            </div>
            {labelBtn && (
                <div className="d-flex pt-32px">
                    <a href="#" className="btn btn-lg btn-primary">
                        {iconBtn && <Icon name={iconBtn} />}
                        <span>
                           {labelBtn}
                        </span>
                    </a>
                </div>
            )}
            {labelLink && (
            <div className="d-flex py-16px">
                <a href="#" className="small">
                    {labelLink}
                </a>
            </div>
            )}
        </div>
    );
};
