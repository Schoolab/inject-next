import React, { useState, useEffect } from "react";
import { Aside } from "@/app/components/asides/Aside";
import { AsideHeader } from "@/app/components/asides/AsideHeader";
import { PaginationProps } from "@/app/components/Pagination";
import { AsideBody } from "@/app/components/asides/AsideBody";

interface AsideDemoProps {
    show?: boolean;
    initialTab?: string;
    pagination?: PaginationProps;
}

export const AsideDemo: React.FC<AsideDemoProps> = ({
    show = false,
    initialTab = 'info',
    pagination = {
        currentPage: 1,
        totalPages: 9,
        prevLink: "#",
        nextLink: "#",
        onPageChange: () => {}
    }
}) => {
    let tabClass = [];   
    !show && tabClass.push("d-none");
    const [activeTab, setActiveTab] = useState(initialTab || 'info');

    useEffect(() => {
        // Écouter les événements de changement de tab
        const handleTabChange = (event: CustomEvent) => {
            const tabId = event.detail.tab;
            setActiveTab(tabId);
        };

        window.addEventListener('aside-tab-change', handleTabChange as EventListener);
        return () => {
            window.removeEventListener('aside-tab-change', handleTabChange as EventListener);
        };
    }, []);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <Aside id="aside-demo">
            <AsideHeader
                tabs={[
                    { 
                        label: "Info",
                        href: "#",
                        isActive: true,
                        id: "info-tab",
                        dataToggle: "tab",
                        dataTarget: "#info",
                        role: "tab",
                        ariaControls: "info",
                        ariaSelected: true
                    },
                    {
                        label: "Resources",
                        href: "#",
                        isActive: false,
                        badge: "6",
                        id: "resources-tab",
                        dataToggle: "tab",
                        dataTarget: "#resources",
                        role: "tab",
                        ariaControls: "resources",
                        ariaSelected: false
                    },
                ]}
                pagination={pagination}
            />
            <div className="tab-content h-100 overflow-auto" id="dataTabsContent">
                <div 
                    id="info" 
                    role="tabpanel" 
                    aria-labelledby="info-tab" 
                    className={`tab-pane h-100 fade ${activeTab === 'info' ? 'active show' : ''}`}
                >
                    <AsideBody addClass="d-flex flex-column gap-md">
                        <p>Info here...</p>
                    </AsideBody>
                </div>
                <div 
                    id="resources" 
                    role="tabpanel" 
                    aria-labelledby="resources-tab" 
                    className={`tab-pane h-100 fade ${activeTab === 'resources' ? 'active show' : ''}`}
                >
                    <AsideBody>
                        <p>Resources here...</p>
                    </AsideBody>
                </div>
            </div>
        </Aside>
    );
};