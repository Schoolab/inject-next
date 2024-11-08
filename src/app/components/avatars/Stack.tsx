import React from "react";

interface StackProps {
    /**
     * Children Content
     */
    children: any;

    /**
     * Custom class
     */
    addClass?: string;  
}

export const Stack = ({ addClass, ...props }: StackProps) => {
    let classTab = ["thumbnail-stack"];
    addClass && classTab.push(addClass);

    return (
        <span className={classTab.join(" ")} {...props}>
            {props.children}
        </span> 
    );
};
