import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Theme } from "@/app/components/Theme";
import { Button } from "@/app/components/buttons/Button";

export const ErrorMaintenance = () => {
    return (
        <Layout 
            showShortcutbar={false}
            showNavbar={false}
        >
            <Theme themeName="Inject" />
            <AppContent
                showBreadcrumb={false}
                showTitle={false} 
                showSubnav={false}
                layout="fluid"
                addClass="bg-hero fg-hero"
            >
                <div className="d-flex align-items-center justify-content-center flex-fill text-center">
                        
                    <div className="d-flex flex-column gap-3xl align-items-center w-100" style={{maxWidth: "42.5rem"}}>
                        <div className="navbar-brand">
                            <a tabIndex={1} href="./?path=/story/pages-error--maintenance">
                                <img className="img-fluid d-block" src="img/inject-logo-light.svg" style={{ maxWidth: 150, width: "100%" }} />
                            </a>
                        </div>
                        <div className="d-flex flex-column gap-md w-100">
                            <h1 className="display-1">System is down for maintenance</h1>
                            <p className="lead">We promise, we’ll be back soon!</p>
                        </div>
                        <Button type="default" label="Learn more about Inject" iconStartName="link" link="https://inject-wip.webflow.io" target="_blank" />
                    </div>

                </div>
            </AppContent>
        </Layout>
    );
};
