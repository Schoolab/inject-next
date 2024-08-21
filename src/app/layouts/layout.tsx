import React from "react";
import { ReactNode } from "react";
import { Navbar } from "../components/NavBar";
import { ShortcutBar } from "../components/ShortcutBar";
import { Breadcrumb } from "../components/page-header/Breadcrumb";
import { Title } from "../components/page-header/Title";
import { SubNav } from "../components/page-header/SubNav";
import { Footer } from "../components/Footer";

interface LayoutProps {
  children?: ReactNode;
}

export const Layout = ({children,}:LayoutProps) => {
    return (
        <div className="application-ui">
            <Navbar />
            <div className="application-container">
                <ShortcutBar />
                <main className="application-content">
                    <Breadcrumb />
                    <Title />
                    <SubNav />
                    <div id="appMainContainer" className="container-lg container-lg-fluid mb-lg-0 py-7">
                        {children}
                    </div>
                    <Footer />
                </main>
            </div>
        </div>
    );
};
