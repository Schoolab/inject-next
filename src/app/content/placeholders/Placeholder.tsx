import React, { CSSProperties } from "react";

interface PlaceholderProps {
  width?: string;
  height?: string;
  addClass?: string;
  style?: CSSProperties;
}

export const Placeholder = ({ width = "100%", height = "40px", addClass, style }: PlaceholderProps) => {
  let classTab = ["placeholder-container"]; 
  addClass && classTab.push(addClass);
  
  return (
    <div className={classTab.join(" ")} style={{width: width, height: height, ...style}}>
        <div className="placeholder"></div>
    </div>
  );
};