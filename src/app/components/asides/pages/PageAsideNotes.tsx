import React from "react";
import { AsideNotes } from "../examples/AsideNotes";

interface PageAsideNotesProps {}

export const PageAsideNotes = ({}: PageAsideNotesProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <AsideNotes />
            </div>
        </div>
    );
};
