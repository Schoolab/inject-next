import React from "react";

export interface ProgressBarProps {
    label?: string;
    percentage?: number;
    min?: number;
    max?: number;
    text?: string;
    inline?: boolean;
  /**
   * How large should the progress icon be?
   */
  size?: "sm" | "lg" | "xl" | "2xl";
  /**
   * Custom class
   */
  addClass?: string;
  style?: React.CSSProperties;
}

export const ProgressBar = ({ label, percentage = 0, min = 0, max = 100, text = "0%", size="sm", inline, addClass, style, ...props }: ProgressBarProps) => {
  let classTab = ["d-flex flex-column gap-2xs"];
  size && classTab.push(`is-${size}`);
  addClass && classTab.push(addClass);

  return (
    <div className={classTab.join(" ")} style={style} {...props}>
        { label && !inline && <div className="d-flex justify-content-between">
            <span className="small text-muted">{label}</span>
            <span className="small text-muted">{text}</span>
        </div> }
        <div className="d-flex gap-xs align-items-center">
            <div className="progress flex-fill mr-3" style={{ height: ".5rem" }}>
                <div 
                    className="progress-bar"
                    role="progressbar"
                    aria-valuenow={Math.round(percentage)}
                    aria-valuemin={min}
                    aria-valuemax={max}
                    style={{ width: percentage + '%' }}
                />
            </div>
            { inline && <span className="small text-muted">{text}</span> }
        </div>
    </div>
  );
};
