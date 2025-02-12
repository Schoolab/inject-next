import React from "react";
import { useEffect } from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { AsideEditPage } from "@/app/components/asides/AsideEditPage";
import { aside } from "../../../../../public/utils/aside";
import { EmptyState } from "@/app/content/EmptyState";

export const ManagePagesEditEmpty = () => {
    useEffect(() => {
        aside();
    }, []);
    return (
        <Layout shortcutBarExpanded={false}>
            <AppContent showSubnav={false} layout="full" sections="transparent" isAsside={true}>
            <div className="d-flex align-items-start">
                <div className="container-fluid">
                <EmptyState title="No sections" text="Your page’s sections will be listed here." iconTitle="section" labelBtn="Add section" labelLink="Learn more about sections" bordered={false} spacious={true} />
                <div className="aside-buttons-bottom d-flex flex-column flex-lg-row d-block d-lg-none">
                    <button className="btn btn-lg btn-default mb-3 active">
                        <span className="icon icon-pencil mr-2" /> Edit
                    </button>
                </div>
                </div>
              
                <div className="aside-buttons d-block d-lg-none mt-5 no-subnav right-5">
                    <button className="btn btn-lg btn-default mb-3 active" data-toggle="tooltip" data-original-title="Edit">
                        <span className="icon icon-pencil" />
                    </button>
                </div>
            </div>
            </AppContent>
               <AsideEditPage />
        </Layout>
    );
};
