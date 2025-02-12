
import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export interface SectionsTransparentProps {}

export const SectionsTransparent = ({}: SectionsTransparentProps) => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent sections="transparent">

              <div className="application-section is-highlighted">
                    <h3>Title here</h3>
                    <p className="m-0">Content here</p>
                </div>

                <div className="application-section">
                    <h3>Title here</h3>
                    <p className="m-0">Content here</p>
                </div>

                <div className="application-section">
                    <h3>Title here</h3>
                    <p className="m-0">Content here</p>
                </div>

            </AppContent>
        </Layout>
    );
};