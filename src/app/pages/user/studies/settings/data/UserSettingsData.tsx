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
import { DropdownNested } from "@/app/components/dropdowns/DropdownNested";

export const UserSettingsData = () => {
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
                        link: "./?path=/story/pages-user-settings--data",
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
                    },
                    {
                        label: "Data",
                        href: "./?path=/story/pages-user-settings--data",
                        icon: "visibility-off",
                        tooltip: "Only visible to managers",
                        isActive: true,
                    },
                ]}
                sections="cards"
            >
                <div className="cq">
                    <div className="cq-12 cq-md-6">

                    <Section title="Account rights" collapsable={true} collapsableId="account-right">
                            <div className="cq">
                                
                                <FormFieldSet id="platform-access" addClass="cq-12" legend="Platform access">
                                    <FormOption
                                        name="platform-access"
                                        id="active"
                                        value="active"
                                        type="radio"
                                        card={true}
                                        label="Active (default)"
                                        caption="This user can sign in to the platform and make any modification."
                                        defaultChecked={true}
                                    />
                                    <FormOption
                                        name="platform-access"
                                        id="read-only"
                                        value="read-only"
                                        type="radio"
                                        card={true}
                                        label="Read only (all organizations)"
                                        caption="This user can sign in to the platform, but can’t make any modification apart from the command to delete the account."
                                    />
                                    <FormOption
                                        name="platform-access"
                                        id="inactive"
                                        value="inactive"
                                        type="radio"
                                        card={true}
                                        label="Inactive"
                                        caption="This user can no longer sign in to the platform. The user messages and files will still be accessible."
                                    />
                                </FormFieldSet>

                            </div>
                        </Section>

                        <Section title="Schoolab organization rights" collapsable={true} collapsableId="org-rights">
                            <div className="cq">

                                <FormGroup addClass="cq-12" id="role" required={true} label="Role in the organization">
                                    <FormSelect
                                        id="role"
                                        options={[
                                            { label: "Admin", value: "admin" },
                                            { label: "User", value: "User", selected: true },
                                        ]}
                                    />
                                </FormGroup>

                                <FormFieldSet id="org-access" addClass="cq-12" legend="Organization access">
                                    <FormOption
                                        name="org-access"
                                        id="write"
                                        value="write"
                                        type="radio"
                                        card={true}
                                        label="Write and read (default)"
                                        caption="This user can sign in to the organization and make any modification."
                                        defaultChecked={true}
                                    />
                                    <FormOption
                                        name="org-access"
                                        id="read"
                                        value="read"
                                        type="radio"
                                        card={true}
                                        label="Read only"
                                        caption="This user can sign in to the organization, but can’t make any modification apart from the command to delete the account."
                                    />
                                </FormFieldSet>

                                <FormFieldSet id="autorizations" addClass="cq-12" legend="Autorizations">
                                    <FormOption
                                        name="autorizations"
                                        id="categories"
                                        value="categories"
                                        type="checkbox"
                                        card={true}
                                        label="Categories"
                                        caption="This user can manage categories of this organization’s programs"
                                    />
                                    <FormOption
                                        name="autorizations"
                                        id="data"
                                        value="data"
                                        type="checkbox"
                                        card={true}
                                        label="Data"
                                        caption="This user can manage data of this organization’s programs"
                                    />
                                    <FormOption
                                        name="autorizations"
                                        id="plans"
                                        value="plans"
                                        type="checkbox"
                                        card={true}
                                        label="Plans"
                                        caption="This user can manage plans of this organization’s programs"
                                    />
                                    <FormOption
                                        name="autorizations"
                                        id="impersonate"
                                        value="impersonate"
                                        type="checkbox"
                                        card={true}
                                        label="Impersonate participants (login as)"
                                        caption="This user can access to participants accounts, for trusted users only."
                                    />
                                </FormFieldSet>

                            </div>
                        </Section>

                    </div>

                    <div className="cq-12 cq-md-6">

                        <Section title="Data" collapsable={true} collapsableId="data">
                            <div className="cq">

                                <FormGroup addClass="cq-12" id="public-tags" required={false} label="Public Tags">
                                    <FormSelectMultiple
                                        id="public-tags"
                                        options={[
                                            { label: "Choose an option...", value: "", disabled: true },
                                            { label: "SaaS", value: "saas" },
                                            { label: "Project", value: "projects" },
                                            { label: "Management", value: "management" },
                                            { label: "Design", value: "design", selected: true },
                                            { label: "UX design", value: "ux-design" },
                                            { label: "Figma", value: "figma", selected: true },
                                            { label: "Product", value: "product", selected: true },
                                        ]}
                                    />
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="private-tags" required={false} label="Private Tags">
                                    <FormSelectMultiple
                                        id="private-tags"
                                        options={[
                                            { label: "Choose an option...", value: "", disabled: true },
                                            { label: "Climbing", value: "climbing" },
                                            { label: "Cosplay", value: "cosplay", selected: true },
                                            { label: "Cycling", value: "cycling", selected: true },
                                        ]}
                                    />
                                </FormGroup>

                            </div>
                        </Section>

                        <Section title="Custom fields" collapsable={true} collapsableId="custom-fields">
                            <div className="cq">

                                <FormGroup addClass="cq-12" id="custom1" label="Label">
                                    <FormInput id="custom1" placeholder="Your content here..." />
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="custom2" label="Label">
                                    <FormSelect
                                        id="custom2"
                                        options={[
                                            { label: "Choose an option...", value: "", disabled: true },
                                        ]}
                                    />
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="custom3" label="Label">
                                    <FormInputWrapper>
                                        <FormTextarea
                                            id="custom3"
                                            rows={4}
                                            defaultValue={""}
                                            placeholder="Your content here..."
                                        />
                                        <div className="input-floating-actions">
                                            <Dropdown>
                                                <Button iconStartName="ai" size="xs" type="transparent" addClass="text-ai" data-toggle="dropdown" aria-expanded="false" />
                                                <DropdownMenu direction="right" addClass="dropright">
                                                    <DropdownItem type="ai" label="Write a bio" caption="From all the info in your settings" iconName="summarize" />
                                                    <DropdownDivider />
                                                    <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                                    <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                                    <DropdownNested>
                                                        <DropdownItem
                                                            type="ai"
                                                            label="Change tone..."
                                                            iconName="tone"
                                                            toggle={true}
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        />
                                                        <DropdownMenu>
                                                            <DropdownItem label="Professional" />
                                                            <DropdownItem label="Casual" />
                                                            <DropdownItem label="Straightforward" />
                                                            <DropdownItem label="Confident" />
                                                            <DropdownItem label="Friendly" />
                                                        </DropdownMenu>
                                                    </DropdownNested>
                                                    <DropdownNested>
                                                        <DropdownItem
                                                            type="ai"
                                                            label="Translate to..."
                                                            iconName="translate"
                                                            toggle={true}
                                                            data-toggle="dropdown"
                                                            aria-haspopup="true"
                                                            aria-expanded="false"
                                                        />
                                                        <DropdownMenu>
                                                            <DropdownItem label="English" />
                                                            <DropdownItem label="Korean" />
                                                            <DropdownItem label="Chinese, Simplified" />
                                                            <DropdownItem label="Chinese, Traditional" />
                                                            <DropdownItem label="Japanese" />
                                                            <DropdownItem label="Spanish" />
                                                            <DropdownItem label="Russian" />
                                                            <DropdownItem label="French" />
                                                            <DropdownItem label="Portuguese" />
                                                            <DropdownItem label="German" />
                                                            <DropdownItem label="Italian" />
                                                            <DropdownItem label="Dutch" />
                                                            <DropdownItem label="Indonesian" />
                                                            <DropdownItem label="Filipino" />
                                                            <DropdownItem label="Vietnamese" />
                                                        </DropdownMenu>
                                                    </DropdownNested>
                                                    <DropdownDivider />
                                                    <DropdownItem label="Restore to saved value" iconName="restore" />
                                                    <div className="dropdown-content text-center">
                                                        <span>Ask AI can make mistakes. Check important info.</span>
                                                    </div>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </FormInputWrapper>
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="custom4" label="Label">
                                    <FormInput id="custom4" type="date" />
                                </FormGroup>

                            </div>
                        </Section>

                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};