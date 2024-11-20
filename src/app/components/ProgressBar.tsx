import React from "react";

export interface ProgressBarProps {
    label?: string;
    percentage?: number;
    min?: number;
    max?: number;
    text?: string;
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

export const ProgressBar = ({ label = "Progression", percentage = 0, min = 0, max = 100, text = "0%", size="sm", addClass, style, ...props }: ProgressBarProps) => {
  let classTab = ["progress-circle-container flex-shrink-0"];
  size && classTab.push(`is-${size}`);
  addClass && classTab.push(addClass);

  return (
    <div className="d-flex flex-column gap-2xs">
        <div className="d-flex justify-content-between">
            <span className="small text-muted">{label}</span>
            <span className="small text-muted">{text}</span>
        </div>
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
    </div>
  );
};
