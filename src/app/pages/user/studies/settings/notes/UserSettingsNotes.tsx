import React from "react";

// Layouts
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

// Components
import { Section } from "@/app/components/sections/Section";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { Button } from "@/app/components/buttons/Button";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { FormInputWrapper } from "@/app/forms/input-wrapper/FormInputWrapper";
import { FormTextarea } from "@/app/forms/textarea/FormTextarea";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { FormSelectMultiple } from "@/app/forms/select-multiple/FormSelectMultiple";
import { FormFieldSet } from "@/app/forms/fieldset/FormFieldSet";
import { FormOption } from "@/app/forms/option/FormOption";
import { Alert } from "@/app/components/alerts/Alert";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { Icon } from "@/app/components/icons/Icon";
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