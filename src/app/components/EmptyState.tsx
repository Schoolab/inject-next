import { Icon } from "./Icon";

export interface EmptyStateProps {
    title?: string; 
    text?: string; 
    iconTitle?: string;
    iconBtn?: string;
    labelBtn?: string;
    labelLink?: string;
}

export const EmptyState = ({ title="No category", text="Your category will be listed here", labelLink, iconTitle, iconBtn= "plus-circle", labelBtn  }: EmptyStateProps) => {


    return (
        <div className="bg-white border rounded px-40px py-40px d-flex flex-column align-items-center gap-0px text-center">
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
