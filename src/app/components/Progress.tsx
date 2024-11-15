import React from "react";

export interface ProgressProps {
    percentage?: number;
    text?: string;
    subtext?: string;
  /**
   * How large should the progress icon be?
   */
  size?: "sm" | "lg" | "xl" | "2xl";
  /**
   * Custom class
   */
  addClass?: string;
}

export const Progress = ({ percentage = 0, text = "0/8", subtext = "completed", size="sm", addClass, ...props }: ProgressProps) => {
  let classTab = ["progress-circle-container flex-shrink-0"];
  size && classTab.push(`is-${size}`);
  addClass && classTab.push(addClass);

  return (
    <svg className={classTab.join(" ")} {...props} viewBox="0 0 32 32" data-percent={percentage} style={{ ["--percent" as any] : percentage }}>
        <circle className="progress-circle progress-circle-bg" />
        <circle className="progress-circle progress-circle-percent" />
        {percentage === 100 && <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />}
        {text && (size === "lg") && (
            <text className="progress-circle-text" x={16} y={20}>
                {text}
            </text>
        )}

        {text && (size === "xl") && (
            <text className="progress-circle-text" x={16} y={15}>
                {text}
            </text>
        )}

        {text && (size === "2xl") && (
            <text className="progress-circle-text" x={16} y={16}>
                {text}
            </text>
        )}

        {subtext && ((size === "xl") || (size === "2xl")) && (
            <>
                <text className="progress-circle-subtext" x={16} y={20}>
                    {subtext}
                </text>
            </>
        )}
    </svg>
  );
};


