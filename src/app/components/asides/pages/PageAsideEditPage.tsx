import React from "react";
import { AsideEditPage } from "../examples/AsideEditPage";

interface PageAsideEditPageProps {}

export const PageAsideEditPage = ({}: PageAsideEditPageProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <AsideEditPage />
            </div>
        </div>
    );
};
