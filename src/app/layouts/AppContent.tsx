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
}
export const AppContent = ({ children,   showSubnav = true,  isAsside }: AppContentProps) => {
    let appMainContainerClass = "container-lg container-lg-fluid mb-lg-0 py-7";
    isAsside && (appMainContainerClass = "container-fluid mb-lg-0 py-7");

    return (
        <main className="application-content">
            <Breadcrumb />
            {!showSubnav ? <Title addClass="border-bottom" /> : <Title />}
            {showSubnav && <SubNav />}
            <div id="appMainContainer" className={appMainContainerClass}>
                {children}
            </div>
            <Footer />
        </main>
    );
};
