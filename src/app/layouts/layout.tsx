import React from "react";
import { ReactNode } from "react";
import { useEffect } from "react";
import { Navbar } from "../components/NavBar";
import { NavbarHub } from "../components/NavBarHub";
import { ShortcutBar } from "../components/Shortcutbar/ShortcutBar";
import { SidebarManage } from "../components/sidebar/SidebarManage";
import { SidebarAdmin } from "../components/sidebar/SidebarAdmin";
// import { select } from "../../../public/utils/select";

interface LayoutProps {
    children?: ReactNode;
    showNavbar?: boolean;
    shortcutBarExpanded?: boolean;
    hub?: boolean;
    sideBar?: "Admin" | "Manage";
    theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";

    showShortcutbar?: boolean;

}
export const Layout = (
    { 
        children,
        theme,
        
        showNavbar = true,
        hub = false,

        showShortcutbar = true,
        shortcutBarExpanded,

        sideBar,
    }: LayoutProps
) => {
    // useEffect(() => {
    //     select();
    // }, []);
    let appContainerClass = "application-container";
    sideBar === "Admin" && (appContainerClass = "application-container pb-0");
    return (
        <div className="application-ui">
            { showNavbar && <Navbar theme={theme && theme} isHub={hub} /> }
           
            <div className={appContainerClass}>
                {showShortcutbar && <ShortcutBar isExpanded={shortcutBarExpanded} />}
                {sideBar && sideBar === "Manage" && <SidebarManage />}
                {sideBar && sideBar === "Admin" && <SidebarAdmin />}
                {children}
            </div>

        </div>
    );
};
