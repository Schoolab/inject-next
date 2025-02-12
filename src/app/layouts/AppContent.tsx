import React from "react";
import { ReactNode } from "react";
import { Breadcrumb } from "../components/page-header/Breadcrumb";
import { Title } from "../components/page-header/Title";
import { SubNav } from "../components/page-header/SubNav";
import { Stepper } from "../components/page-header/Stepper";
import { Footer } from "../components/Footer";
import { PaginationProps } from "../components/Pagination";
import { Placeholder } from "../components/Placeholder";
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

    pagination?: PaginationProps;

    buttons?: ButtonType[];

    showSubnav?: boolean;
    subnav?: SubnavType[];

    showStepper?: boolean;

    showFooter?: boolean;

    addClass?: string;
}
export const AppContent = (
    {
        children,
        layout = "centered",
        sections = "cards",
        
        isAsside,
        isIAchat,

        showBreadcrumb = true,
        breadcrumbIcon,
        breadcrumbHome = "#",
        breadcrumb,

        backLink,

        showTitle = true,
        title = "Page title",

        pagination,

        buttons,

        showSubnav = true,
        subnav,

        showStepper= false,

        showFooter = true,
        
        addClass,
    }: AppContentProps
) => {

    let appMainContainerClass = ["application-main-content container-lg container-lg-fluid p-sm p-md-md p-lg-xl"];
    isAsside && (appMainContainerClass = ["application-main-content container-fluid p-sm p-md-md p-lg-xl"]);
    isIAchat && (appMainContainerClass = ["application-main-content h-100 overflow-auto"]);

    layout === "fluid" && (appMainContainerClass = ["application-main-content container-fluid p-sm p-md-md p-lg-xl"]);
    layout === "narrow" && (appMainContainerClass = ["application-main-content container-md p-sm p-md-md p-lg-xl"]);
    layout === "full" && (appMainContainerClass = ["application-landing"]);

    let appContentClass = ["application-content card-sections"];
    sections === "bordered" && appContentClass.push("bordered-sections");
    sections === "transparent" && appContentClass.push("transparent-sections");
    sections === "separated" && appContentClass.push("separated-sections");

    addClass && appMainContainerClass.push(addClass);

    let titleClass = [""];
    (!subnav || !showSubnav) && titleClass.push("border-bottom");

    return (
        <main className={appContentClass.join(" ")}>
            { showBreadcrumb &&
                <Breadcrumb
                    homeIcon={breadcrumbIcon}
                    homeLink={breadcrumbHome}
                    items={breadcrumb}
                />
            }
            { ( showTitle || showSubnav || showStepper) &&
                <div className="application-header">
                    { showTitle && 
                        <Title 
                            backLink={backLink} 
                            title={title}
                            pagination={pagination}
                            buttons={buttons} 
                            addClass={titleClass.join(" ")}
                        />
                    }
                    
                    { subnav &&
                        <SubNav items={subnav} />
                    }

                    { showStepper && <Stepper /> }
                </div>
            }
       
            <div id="appMainContainer" className={appMainContainerClass.join(" ")}>
                {
                    children ?
                        children
                    :
                        <div className="d-flex flex-column gap-xl">
                            <Placeholder height="320px" />
                            <Placeholder height="256px" />
                            <Placeholder height="128px" />
                        </div>
                }
            </div>
            { showFooter && <Footer addClass={addClass} /> }
        </main>
    );
};
