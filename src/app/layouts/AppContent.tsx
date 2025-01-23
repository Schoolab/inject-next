import React from "react";
import { ReactNode } from "react";
import { Breadcrumb } from "../components/page-header/Breadcrumb";
import { Title } from "../components/page-header/Title";
import { SubNav } from "../components/page-header/SubNav";
import { Stepper } from "../components/page-header/Stepper";
import { Footer } from "../components/Footer";

type BreadcrumbType = {
    label: string;
    href?: string;
}

type SubnavType = {
    label: string;
    href: string;
    badge?: string;
    isActive?: boolean;
    hasDropdown?: boolean;
    dropdownItems?: SubnavType[];
    icon?: string;
    tooltip?: string;
}

type ButtonType = {
    label?: string;
    disabled?: Boolean;
    isActive?: Boolean;
    showActive?: Boolean;
    hasDropdown?: Boolean;
    iconStartName?: string;
    iconEndName?: string;
    addClass?: string;
    type?: "default" | "primary"; // only authorized types
    size?: "sm"; // only authorized size in header
    link?: string;
};

interface AppContentProps {
    children?: ReactNode;

    layout?: "centered" | "fluid" | "narrow" | "full";
    sections?: "cards" | "bordered" | "transparent" | "separated";

    isAsside?: boolean;
    isIAchat?: boolean;

    showBreadcrumb?: boolean;
    breadcrumbIcon?: string;
    breadcrumbHome?: string;
    breadcrumb?: BreadcrumbType[];

    backLink?: string;

    showTitle?: boolean;
    title?: string;

    prevLink?: string;
    nextLink?: string;

    buttons?: ButtonType[];

    showSubnav?: boolean;
    subnav?: SubnavType[];

    showStepper?: boolean;
}
export const AppContent = (
    {
        children,
        layout = "centered",
        sections = "cards",
        
        isAsside,
        isIAchat,

        showBreadcrumb = true,
        breadcrumbIcon = "program",
        breadcrumbHome = "#",
        breadcrumb,

        backLink,

        showTitle = true,
        title = "Page title",

        prevLink,
        nextLink,

        buttons,

        showSubnav = true,
        subnav,

        showStepper= false,
    }: AppContentProps
) => {

    let appMainContainerClass = "application-main-content container-lg container-lg-fluid p-sm p-md-md p-lg-xl";
    isAsside && (appMainContainerClass = "application-main-content container-fluid p-sm p-md-md p-lg-xl");
    isIAchat && (appMainContainerClass = "application-main-content h-100 overflow-auto");
    layout === "fluid" && (appMainContainerClass = "application-main-content container-fluid p-sm p-md-md p-lg-xl");
    layout === "narrow" && (appMainContainerClass = "application-main-content container-md p-sm p-md-md p-lg-xl");
    layout === "full" && (appMainContainerClass = "application-landing");

    let appContentClass = "application-content card-sections"
    sections === "bordered" && (appContentClass = "application-content bordered-sections")
    sections === "transparent" && (appContentClass = "application-content transparent-sections")
    sections === "separated" && (appContentClass = "application-content separated-sections")

    let titleClass = [""];
    (!subnav || !showSubnav) && titleClass.push("border-bottom");

    return (
        <main className={appContentClass} >
            { showBreadcrumb &&
                <Breadcrumb
                    homeIcon={breadcrumbIcon}
                    homeLink={breadcrumbHome}
                    items={breadcrumb}
                />
            }
            <div className="application-header">
                { showTitle && 
                    <Title 
                        backLink={backLink} 
                        title={title}
                        prevLink={prevLink}
                        nextLink={nextLink}
                        buttons={buttons} 
                        addClass={titleClass.join(" ")}
                    />
                }
                
                { subnav &&
                    <SubNav items={subnav} />
                }

                { showStepper && <Stepper /> }
            </div>
       
            <div id="appMainContainer" className={appMainContainerClass}>
                {children}
            </div>
            <Footer />
        </main>
    );
};
