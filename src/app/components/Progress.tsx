import React from "react";

export interface ProgressProps {
    percentage?: number;
  /**
   * How large should the progress icon be?
   */
  size?: "default" | "lg";
  /**
   * Custom class
   */
  addClass?: string;
}

/**
 * Icons are easily recognizable visual elements that convey meaning and cues to the user in a compact and efficient way.
 */
export const Progress = ({ percentage = 0, size="default", addClass, ...props }: ProgressProps) => {
  let classTab = ["progress-circle-container is-small flex-shrink-0"];
  addClass && classTab.push(addClass);

  return (
    <svg className={classTab.join(" ")} {...props} viewBox="0 0 32 32" data-percent={percentage} style={{ ["--percent" as any] : percentage }}>
        <circle className="progress-circle progress-circle-bg" />
        <circle className="progress-circle progress-circle-percent" />
        { percentage === 100 && <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />}
    </svg>
  );
};


