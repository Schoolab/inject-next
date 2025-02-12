import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

export interface SectionsBorderedProps {}

export const SectionsBordered = ({}: SectionsBorderedProps) => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent sections="bordered">

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