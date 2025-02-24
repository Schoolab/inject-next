import React from "react";
import { AsideCapsules } from "../examples/AsideCapsules";

interface PageAsideCapsulesProps {}

export const PageAsideCapsules = ({}: PageAsideCapsulesProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>
                
                <AsideCapsules />
            </div>
        </div>
    );
};
