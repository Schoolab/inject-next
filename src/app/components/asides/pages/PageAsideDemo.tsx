import React from "react";
import { AsideDemo } from "@/app/components/asides/examples/AsideDemo";
import { Button } from "@/app/components/buttons/Button";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

interface PageAsideDemoProps {}

export const PageAsideDemo = ({}: PageAsideDemoProps) => {
    return (
        <Layout>
            <AppContent>
                <div className="aside-buttons no-subnav gap-xs">
                    <span data-toggle="tooltip" data-original-title="Info">
                      <Button type="default" iconStartName="information" data-toggle="aside" data-target="#aside-demo" data-tab="info" />
                    </span>
                    <span data-toggle="tooltip" data-original-title="Resouces">
                      <Button type="default" iconStartName="folder" data-toggle="aside" data-target="#aside-demo" data-tab="resources" />
                    </span>
                </div>
            </AppContent>
            <AsideDemo />
        </Layout>
    );
};
