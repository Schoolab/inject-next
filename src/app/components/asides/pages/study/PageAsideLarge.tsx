import React, { useState, useEffect } from "react";
import { Aside } from "@/app/components/asides/Aside";
import { AsideHeader } from "@/app/components/asides/AsideHeader";
import { PaginationProps } from "@/app/components/pagination/Pagination";
import { AsideBody } from "@/app/components/asides/AsideBody";

interface PageAsideLargeProps {
    initialTab?: string;
    pagination?: PaginationProps;
}

export const PageAsideLarge: React.FC<PageAsideLargeProps> = ({ 
    initialTab,
    pagination = {
        currentPage: 1,
        totalPages: 6,
        prevLink: "#",
        nextLink: "#",
        onPageChange: () => {}
    }
}) => {
    const [activeTab, setActiveTab] = useState(initialTab || 'info');

    useEffect(() => {
        setActiveTab(initialTab || 'info');
    }, [initialTab]);

    const handleTabClick = (tabId: string) => {
        setActiveTab(tabId);
    };

    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <Aside size="large">
                    <AsideHeader
                        title="Title"
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
                                label: "Responses",
                                href: "#",
                                isActive: false,
                                id: "responses-tab",
                                dataToggle: "tab",
                                dataTarget: "#responses",
                                role: "tab",
                                ariaControls: "responses",
                                ariaSelected: false
                            },
                            {
                                label: "Limited",
                                href: "#",
                                isActive: false,
                                icon: "visibility-off",
                                tooltip: "Accessible only to admins",
                                id: "limited-tab",
                                dataToggle: "tab",
                                dataTarget: "#limited",
                                role: "tab",
                                ariaControls: "limited",
                                ariaSelected: false
                            },
                        ]}
                        pagination={pagination}
                    />
                    <div className="tab-content h-100 overflow-auto" id="largeTabsContent">
                        <div 
                            id="info" 
                            role="tabpanel" 
                            aria-labelledby="info-tab" 
                            className={`tab-pane h-100 fade ${activeTab === 'info' ? 'active show' : ''}`}
                        >
                            <AsideBody addClass="d-flex flex-column gap-md">
                                <p>Info here…</p>
                            </AsideBody>
                        </div>
                        <div 
                            id="responses" 
                            role="tabpanel" 
                            aria-labelledby="responses-tab" 
                            className={`tab-pane h-100 fade ${activeTab === 'responses' ? 'active show' : ''}`}
                        >
                            <AsideBody addClass="d-flex flex-column gap-md">
                                <p>Responses here…</p>
                            </AsideBody>
                        </div>
                        <div 
                            id="limited" 
                            role="tabpanel" 
                            aria-labelledby="limited-tab" 
                            className={`tab-pane h-100 fade ${activeTab === 'limited' ? 'active show' : ''}`}
                        >
                            <AsideBody addClass="d-flex flex-column gap-md">
                                <p>Limited here…</p>
                            </AsideBody>
                        </div>
                    </div>
                </Aside>
            </div>
        </div>
    );
};