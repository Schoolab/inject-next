import React, { CSSProperties } from "react";

interface PlaceholderProps {
  width?: string;
  height?: string;
  style?: CSSProperties;
}

export const Placeholder = ({ width = "100%", height = "40px", style }: PlaceholderProps) => {
  return (
    <div className="placeholder-container" style={{width: width, height: height, ...style}}>
        <div className="placeholder"></div>
    </div>
  );
};