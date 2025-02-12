import React from "react";

// Layouts
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

// Components
import { Section } from "@/app/components/Section";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInput } from "@/app/forms/FormInput";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { Button } from "@/app/components/Button";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { FormInputWrapper } from "@/app/forms/FormInputWrapper";
import { FormTextarea } from "@/app/forms/FormTextarea";
import { DropdownDivider } from "@/app/components/dropdown/DropdownDivider";
import { FormSelect } from "@/app/forms/FormSelect";
import { FormSelectMultiple } from "@/app/forms/FormSelectMultiple";
import { FormFieldSet } from "@/app/forms/FormFieldSet";
import { FormOption } from "@/app/forms/FormOption";
import { Alert } from "@/app/components/Alert";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { Icon } from "@/app/components/Icon";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";

export const UserSettingsNotes = () => {
    return (
        <Layout showShortcutbar={false} >
            <AppContent 
                breadcrumbIcon="home"
                breadcrumb = {[
                    {
                        label: "John Doe",
                        href: "#"
                    },
                    {
                        label: "Settings",
                        href: "./?path=/story/pages-user-settings--profile"
                    },
                    {
                        label: "Notifications",
                    },
                ]}
                title="Settings"
                buttons = {[
                    {
                        type: "default",
                        label: "Open profile",
                        iconStartName: "preview",
                        iconEndName: "new-tab",
                        size: "sm",
                        link: "./?path=/story/pages-user-profile--about",
                    },
                    {
                        type: "primary",
                        label: "Save changes",
                        size: "sm",
                        link: "./?path=/story/pages-user-settings--notes",
                    },
                ]}
                subnav={[
                    {
                        label: "Profile",
                        href: "./?path=/story/pages-user-settings--profile",
                    },
                    {
                        label: "Account",
                        href: "./?path=/story/pages-user-settings--account",
                    },
                    {
                        label: "Notifications",
                        href: "./?path=/story/pages-user-settings--notifications",
                    },
                    {
                        label: "Notes",
                        href: "./?path=/story/pages-user-settings--notes",
                        icon: "visibility-off",
                        tooltip: "Only visible to managers",
                        badge: "3",
                        isActive: true,
                    },
                    {
                        label: "Data",
                        href: "./?path=/story/pages-user-settings--data",
                        icon: "visibility-off",
                        tooltip: "Only visible to managers",
                    },
                ]}
                sections="cards"
            >
                <p>Table here...</p>
            </AppContent>
        </Layout>
    );
};