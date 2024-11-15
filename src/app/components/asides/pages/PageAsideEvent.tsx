import React from "react";
import { AsideEvent } from "../AsideEvent";

interface PageAsideEventProps {}

export const PageAsideEvent = ({}: PageAsideEventProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <AsideEvent />
            </div>
        </div>
    );
};
