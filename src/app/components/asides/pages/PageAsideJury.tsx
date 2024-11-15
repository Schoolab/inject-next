import React from "react";
import { AsideJury } from "../AsideJury";

interface PageAsideJuryProps {}

export const PageAsideJury = ({}: PageAsideJuryProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <AsideJury />
            </div>
        </div>
    );
};
