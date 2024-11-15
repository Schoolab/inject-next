import React from "react";
import { ReactNode } from "react";
import { Breadcrumb } from "../components/page-header/Breadcrumb";
import { Title } from "../components/page-header/Title";
import { SubNav } from "../components/page-header/SubNav";
import { Stepper } from "../components/page-header/Stepper";
import { Footer } from "../components/Footer";


interface AppContentProps {
    children?: ReactNode;
    showSubnav?: boolean;
    showStepper?: boolean;
    isAsside?: boolean;
    showBreadcrumb?: boolean;
    showTitle?: boolean;
    layout?: "centered" | "fluid" | "narrow" | "full";
    sections?: "cards" | "bordered" | "transparent" | "separated";
}
export const AppContent = ({ children,   showSubnav = true,  showStepper= false, isAsside, layout = "centered", sections = "cards", showBreadcrumb = true, showTitle = true }: AppContentProps) => {

    let appMainContainerClass = "application-main-content container-lg container-lg-fluid p-sm p-md-md p-lg-xl";
    isAsside && (appMainContainerClass = "application-main-content container-fluid p-sm p-md-md p-lg-xl");
    layout === "fluid" && (appMainContainerClass = "application-main-content container-fluid p-sm p-md-md p-lg-xl");
    layout === "narrow" && (appMainContainerClass = "application-main-content container-md p-sm p-md-md p-lg-xl");
    layout === "full" && (appMainContainerClass = "application-landing");

    let appContentClass = "application-content card-sections"
    sections === "bordered" && (appContentClass = "application-content bordered-sections")
    sections === "transparent" && (appContentClass = "application-content transparent-sections")
    sections === "separated" && (appContentClass = "application-content separated-sections")

    let titleClass = [""];
    !showSubnav && titleClass.push("border-bottom");

    return (
        <main className={appContentClass} >
            {showBreadcrumb && <Breadcrumb />}
            {showTitle && <Title 
                backLink="#" 
                nextLink="#" 
                buttons={[
                    {
                        type: "default",
                        label: "Preview",
                        iconStartName: "preview",
                        iconEndName: "new-tab",
                        size: "sm",
                    },
                    {
                        type: "primary",
                        label: "Save changes",
                        size: "sm",
                    },
                ]} 
                addClass={titleClass.join(" ")}
            />}
            
            {showSubnav && <SubNav />}
            {showStepper && <Stepper />}
            <div id="appMainContainer" className={appMainContainerClass}>
                {children}
            </div>
            <Footer />
        </main>
    );
};
