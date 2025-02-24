import React from "react";
import { AsidePrivateMessages } from "../examples/AsidePrivateMessages";

interface PageAsidePrivateMessagesProps {}

export const PageAsidePrivateMessages = ({}: PageAsidePrivateMessagesProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <AsidePrivateMessages />
            </div>
        </div>
    );
};
