import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { Button } from "@/app/components/Button";

type ButtonType = {
    addClass?: string;
    type: "default" | "primary" | "secondary" | "transparent" | "muted" | "success" | "warning" | "danger" | "outline-danger" | "brand-primary" | "brand-secondary" | "brand-tertiary" ;
    label?: string | number; 
    iconStartName?: string;
    iconEndName?: string;
    link?: string;
    hasDropdown?: Boolean;
}

export interface ErrorProps {
    code?: string;
    title: string;
    description?: string;
    buttons?: ButtonType[];
}

export const Error = (
    {
        code,
        title,
        description,
        buttons = [
            {
                type: "default",
                label: "Back to home",
                iconStartName: "home",
            }
        ],
    }: ErrorProps
) => {
    let listButtons = buttons?.map((button) => (
        <Button label={button.label} type={button.type} link={button.link} iconStartName={button.iconStartName} iconEndName={button.iconEndName} />
    ));
    
    return (
        <Layout showShortcutbar={false}>
            <AppContent
                sections="transparent"
                layout="fluid"
                showTitle={false}
                breadcrumb = {[
                    {
                        label: title,
                    },
                ]}
                addClass="bg-hero fg-hero"
            >
                <div className="d-flex align-items-center justify-content-center flex-fill text-center">
                    
                    <div className="d-flex flex-column gap-3xl align-items-center w-100" style={{maxWidth: "42.5rem"}}>
                        <div className="d-flex flex-column gap-md w-100">
                            { code && <span className="h1" style={{fontSize: "8rem", lineHeight: "8rem"}}>{code}</span> }
                            <h1 className="display-1">{title}</h1>
                            { description && <p className="lead">{description}</p> }
                        </div>
                        {buttons && listButtons}
                    </div>

                </div>
            </AppContent>
        </Layout>
    );
};
