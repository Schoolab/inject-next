import React from "react";
import { ReactNode } from "react";
import { useEffect } from "react";
import { Navbar } from "../components/NavBar";
import { ShortcutBar } from "../components/ShortcutBar";
import { SidebarManage } from "../components/sidebar/SidebarManage";
import { SidebarAdmin } from "../components/sidebar/SidebarAdmin";
// import { select } from "../../../public/utils/select";

interface LayoutProps {
    children?: ReactNode;
    shortcutBarExpanded?: boolean;
    sideBar?: "Admin" | "Manage";
    theme?: "default" | "Schoolab" | "Moho" | "Raiselab";

    showShortcutbar?: boolean;

}
export const Layout = ({ children, sideBar, theme, shortcutBarExpanded, showShortcutbar = true,  }: LayoutProps) => {
    // useEffect(() => {
    //     select();
    // }, []);

    return (
        <div className="application-ui">
            {theme ? <Navbar theme={theme} /> : <Navbar />}
            <div className="application-container">
                {showShortcutbar && (shortcutBarExpanded ? <ShortcutBar isExpanded={true} /> : <ShortcutBar />)}
                {sideBar && sideBar === "Manage" && <SidebarManage />}
                {sideBar && sideBar === "Admin" && <SidebarAdmin />}
                {children}
            </div>

        </div>
    );
};
