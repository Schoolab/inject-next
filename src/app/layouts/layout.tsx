import React from "react";
import { ReactNode } from "react";
import { useEffect } from "react";
import { Navbar } from "@/app/components/navbar/NavBar";
import { ShortcutBar } from "../components/Shortcutbar/default/ShortcutBar";
import { SidebarManage } from "@/app/components/sidebar/SidebarManage";
import { SidebarAdmin } from "@/app/components/sidebar/SidebarAdmin";
import { AsidePrivateMessages } from "@/app/components/asides/examples/AsidePrivateMessages";
import { Placeholder } from "@/app/content/placeholders/Placeholder";
import { asideToggle } from "../../../public/utils/asideToggle";
import { ModalAITab } from "../components/modals/ModalAITab";
import { AdminShortcutBar } from "../components/Shortcutbar/admin/adminShortcutBar";
// import { select } from "../../../public/utils/select";

interface LayoutProps {
    children?: ReactNode;
    showNavbar?: boolean;
    shortcutBarExpanded?: boolean;
    hub?: boolean;
    sideBar?: "None" | "Admin" | "Manage";
    theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
    showShortcutbar?: boolean;
    showShortcutbarAdmin?: boolean;
    showPrivateMessages?: boolean;
}

export const Layout = (
    { 
        children,
        theme,
        
        showNavbar = true,
        hub = false,

        showShortcutbar = true,
        showShortcutbarAdmin = false,
        shortcutBarExpanded,

        sideBar,
        showPrivateMessages = true,
    }: LayoutProps
) => {
    useEffect(() => {
        asideToggle();
        // select();
    }, []);
    let appContainerClass = "application-container";
    sideBar === "Admin" && (appContainerClass = "application-container pb-0");
    return (
        <>
            <div className="application-ui">

        
                { showNavbar && <Navbar theme={theme && theme} isHub={hub} /> }
            
                <div className={appContainerClass}>
                    {showShortcutbar && <ShortcutBar isExpanded={shortcutBarExpanded} />}
                    {showShortcutbarAdmin && <AdminShortcutBar isExpanded={shortcutBarExpanded} />}
                    {sideBar && sideBar === "Manage" && <SidebarManage />}
                    {sideBar && sideBar === "Admin" && <SidebarAdmin />}
                    {
                        children ?
                            children
                        :
                            <div className="d-flex flex-column gap-xl flex-fill p-xl">
                                <Placeholder height="320px" />
                                <Placeholder height="256px" />
                                <Placeholder height="128px" />
                            </div>
                    }
                    {showPrivateMessages && <AsidePrivateMessages show={false} />}
                </div>

            </div>
            <ModalAITab />
        </>

    );
};
