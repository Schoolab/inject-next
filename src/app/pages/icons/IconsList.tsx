import React from "react";
import "./styles.css";
import data from'@schoolab/inject-icons/dist/inject-icons.json';


export const IconsList = () => {
    const icons = Object.keys(data);
    const listItems = icons.map((icon) => (
        <div className="preview" data-value={icon} key={icon}>
            <span className="inner">
                <span className={`icon icon-${icon}`}></span>
            </span>
            <span className="preview-label">{icon}</span>
        </div>
    ));

    return <div className="previews">{listItems}</div>;
};
