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

export const UserSettingsAccount = () => {
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
                        label: "Account",
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
                        link: "./?path=/story/pages-user-settings--account",
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
                        isActive: true,
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
                <div className="cq">
                    <div className="cq-12 cq-md-6">

                        <Section title="Contact" collapsable={true} collapsableId="contact">
                            <div className="cq">
                                <FormGroup addClass="cq-12" id="email" required={true} label="Email address">
                                    <FormInput id="email" type="email" required={true} defaultValue="john.doe@theschoolab.com" />
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="phone" required={true} label="Phone number">
                                    <FormInput id="phone" type="tel" required={true} defaultValue="+33 1 23 45 67 89" />
                                </FormGroup>
                            </div>
                        </Section>

                        <Section title="Localization" collapsable={true} collapsableId="localization">
                            <div className="cq">
                                <FormGroup addClass="cq-12" id="language" required={true} label="Language">
                                    <FormSelect
                                        id="language"
                                        options={[
                                            { label: "Choose an option...", value: "", disabled: true },
                                            { label: "English (US)", value: "en-us", selected: true },
                                            { label: "French (FR)", value: "fr-fr" },
                                        ]}
                                    />
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="time-zone" required={true} label="Timezone">
                                    <FormSelect
                                        id="time-zone"
                                        options={[
                                            { label: "Choose an option...", value: "", disabled: true },
                                            { label: "(GMT +01:00) Central European Time / Paris", value: "gmt-plus1", selected: true },
                                            { label: "(GMT+04:00) Réunion Time", value: "gmt-plus4" },
                                        ]}
                                    />
                                </FormGroup>
                            </div>
                        </Section>

                        <Section title="Appearance" collapsable={true} collapsableId="appearance">
                            <div className="cq">
                                <FormGroup addClass="cq-12" id="theme" required={true} label="Theme">
                                    <FormSelect
                                        id="theme"
                                        options={[
                                            { label: "Use device theme", value: "device", selected: true},
                                            { label: "Light", value: "theme-light" },
                                            { label: "Dark", value: "theme-dark" },
                                        ]}
                                    />
                                </FormGroup>
                            </div>
                        </Section>

                    </div>

                    <div className="cq-12 cq-md-6">

                        <Section title="Privacy" collapsable={true} collapsableId="privacy">
                            <div className="cq">
                                <FormFieldSet id="hide-profile" addClass="cq-12">
                                    <FormOption
                                        name="hide-profile"
                                        id="hide-profile"
                                        value="hide-profile"
                                        type="checkbox"
                                        label="Hide my profile from the Community section of the platform."
                                        caption="Enabling this setting will hide your profile from the general directory of the platform. You will remain visible in the program spaces you participate in."
                                    />
                                </FormFieldSet>
                            </div>
                        </Section>

                        <Section title="Security" collapsable={true} collapsableId="security">
                            <div className="cq">
                                <FormFieldSet legend="Password" addClass="cq-12">
                                    <Button type="primary" label="Change password" />
                                </FormFieldSet>
                            </div>
                        </Section>

                        <Section title="Delete this account" collapsable={true} collapsableId="delete-account">
                            <p>You can delete this account and all its datas.</p>
                            <Alert type="warning" icon="alert" text="Beware, deleting this account is irreversible. Every account informations, documents and activities will be deleted." />
                            <div className="d-flex flex-wrap gap-sm align-items-center">
                                <Button type="danger" outlined={true} label="Delete this account" />
                                <span className="text-muted small">You will be asked to confirm this action.</span>
                            </div>
                        </Section>

                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};