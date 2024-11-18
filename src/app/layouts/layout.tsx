import React from "react";
import { ReactNode } from "react";
import { useEffect } from "react";
import { Navbar } from "../components/NavBar";
import { NavbarHub } from "../components/NavBarHub";
import { ShortcutBar } from "../components/ShortcutBar";
import { SidebarManage } from "../components/sidebar/SidebarManage";
import { SidebarAdmin } from "../components/sidebar/SidebarAdmin";
// import { select } from "../../../public/utils/select";

interface LayoutProps {
    children?: ReactNode;
    shortcutBarExpanded?: boolean;
    hub?: boolean;
    sideBar?: "Admin" | "Manage";
    theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";

    showShortcutbar?: boolean;

}
export const Layout = ({ children, sideBar, theme, shortcutBarExpanded, showShortcutbar = true, hub = false  }: LayoutProps) => {
    // useEffect(() => {
    //     select();
    // }, []);

    return (
        <div className="application-ui">
            {hub ?
                (theme ? <NavbarHub theme={theme} /> : <NavbarHub />) : (theme ? <Navbar theme={theme} /> : <Navbar />) 
            }
           
            <div className="application-container">
                {showShortcutbar && (shortcutBarExpanded ? <ShortcutBar isExpanded={true} /> : <ShortcutBar />)}
                {sideBar && sideBar === "Manage" && <SidebarManage />}
                {sideBar && sideBar === "Admin" && <SidebarAdmin />}
                {children}
            </div>

        </div>
    );
};
