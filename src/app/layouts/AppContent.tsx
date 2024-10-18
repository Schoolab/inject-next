import React from "react";
import { ReactNode } from "react";
import { Breadcrumb } from "../components/page-header/Breadcrumb";
import { Title } from "../components/page-header/Title";
import { SubNav } from "../components/page-header/SubNav";
import { Footer } from "../components/Footer";


interface AppContentProps {
    children?: ReactNode;
    showSubnav?: boolean;
    isAsside?: boolean;
    showBreadcrumb?: boolean;
    showTitle?: boolean;
    layout?: "centered" | "fluid" | "narrow";
    sections?: "cards" | "bordered" | "transparent" | "separated";
}
export const AppContent = ({ children,   showSubnav = true,  isAsside, layout = "centered", sections = "cards", showBreadcrumb = true, showTitle = true }: AppContentProps) => {

    let appMainContainerClass = "application-main-content container-lg container-lg-fluid p-xl";
    isAsside && (appMainContainerClass = "application-main-content container-fluid p-xl");
    layout === "fluid" && (appMainContainerClass = "application-main-content container-fluid p-xl");
    layout === "narrow" && (appMainContainerClass = "application-main-content container-md p-xl");

    let appContentClass = "application-content card-sections"
    sections === "bordered" && (appContentClass = "application-content bordered-sections")
    sections === "transparent" && (appContentClass = "application-content transparent-sections")
    sections === "separated" && (appContentClass = "application-content separated-sections")

    return (
        <main className={appContentClass} >
            {showBreadcrumb && <Breadcrumb />}
            {showTitle && 
                (!showSubnav ? <Title addClass="border-bottom" /> : <Title />)
            }
            
            {showSubnav && <SubNav />}
            <div id="appMainContainer" className={appMainContainerClass}>
                {children}
            </div>
            <Footer />
        </main>
    );
};
