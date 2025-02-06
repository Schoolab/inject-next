import React from "react";
import { AsideData } from "../AsideData";

interface PageAsideDataProps {}

export const PageAsideData = ({}: PageAsideDataProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <AsideData />
            </div>
        </div>
    );
};
