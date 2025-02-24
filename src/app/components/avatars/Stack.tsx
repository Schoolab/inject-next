import React, { CSSProperties } from "react";
import { Placeholder } from "@/app/content/placeholders/Placeholder";

interface StackProps {
    /**
     * Children Content
     */
    children?: any;

    /**
     * Custom class
     */
    addClass?: string;
    style?: CSSProperties;
}

export const Stack = ({ children, addClass, style, ...props }: StackProps) => {
    let classTab = ["thumbnail-stack"];
    addClass && classTab.push(addClass);

    return (
        <span className={classTab.join(" ")} style={style} {...props}>
            {children ?
                children
            :
                <>
                    <Placeholder width="24px" height="24px" style={{ borderRadius: "50%" }} addClass="thumbnail is-sm is-oval" />
                    <Placeholder width="24px" height="24px" style={{ borderRadius: "50%" }} addClass="thumbnail is-sm is-oval" />
                    <Placeholder width="24px" height="24px" style={{ borderRadius: "50%" }} addClass="thumbnail is-sm is-oval" />
                </>
            }
        </span> 
    );
};
