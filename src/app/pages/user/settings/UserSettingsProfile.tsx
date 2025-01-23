import React from "react";

// Layouts
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";

// Components
import { Section } from "@/app/components/Section";
import { FormGroup } from "@/app/components/forms/FormGroup";
import { FormInput } from "@/app/components/forms/FormInput";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { Button } from "@/app/components/Button";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { FormInputWrapper } from "@/app/components/forms/FormInputWrapper";
import { FormTextarea } from "@/app/components/forms/FormTextarea";
import { DropdownDivider } from "@/app/components/dropdown/DropdownDivider";
import { FormSelect } from "@/app/components/forms/FormSelect";
import { FormSelectMultiple } from "@/app/components/forms/FormSelectMultiple";

export const UserSettingsProfile = () => {
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
                        href: "/?path=/story/pages-user-settings--profile"
                    },
                    {
                        label: "Profile",
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
                    },
                    {
                        type: "primary",
                        label: "Save changes",
                        size: "sm",
                    },
                ]}
                subnav={[
                    {
                        label: "Profile",
                        href: "/?path=/story/pages-user-settings--profile",
                        isActive: true,
                    },
                    {
                        label: "Account",
                        href: "/?path=/story/pages-user-settings--account",
                    },
                    {
                        label: "Notifications",
                        href: "/?path=/story/pages-user-settings--notifications",
                    },
                    {
                        label: "Notes",
                        href: "/?path=/story/pages-user-settings--notes",
                        icon: "visibility-off",
                        tooltip: "Only visible to managers",
                        badge: "3",
                    },
                    {
                        label: "Data",
                        href: "/?path=/story/pages-user-settings--data",
                        icon: "visibility-off",
                        tooltip: "Only visible to managers",
                    },
                ]}
                sections="cards"
            >
                <div className="cq">
                    <div className="cq-12 cq-md-6">
                        
                        <Section title="Basic information" collapsable={true} collapsableId="basic">
                            <div className="cq">
                                <FormGroup addClass="cq-12" id="cover" label="Cover image" hint="PNG,JPG,JPEG, at least 1800x1200 px.">
                                    <ItemResource icon={{ name: "image" }} img="img/avatar-john.jpeg" cover={false} resource={{ name: "avatar.jpeg", type: "JPEG Image" }} action="delete" />
                                    <Dropdown>
                                        <Button iconStartName="plus-circle" label="Add image" type="default" extended={true} addClass="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <DropdownMenu>
                                            <DropdownItem label="Import image..." iconName="attachment" />
                                            <DropdownItem label="Add image link..." iconName="link" />
                                            <div className="dropdown-content text-center">
                                                <span>AInject can make mistakes. Check important info.</span>
                                            </div>
                                        </DropdownMenu>
                                    </Dropdown>
                                </FormGroup>

                                <FormGroup addClass="cq-12 cq-xs-6" id="first-name" required={true} label="First Name">
                                    <FormInput id="first-name" required={true} defaultValue="John" />
                                </FormGroup>

                                <FormGroup addClass="cq-12 cq-xs-6" id="last-name" required={true} label="Last Name">
                                    <FormInput id="last-name" required={true} defaultValue="Doe" />
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="gender" required={true} label="Gender">
                                    <FormSelect
                                        id="gender"
                                        options={[
                                            { label: "Choose an option...", value: "", disabled: true },
                                            { label: "Man", value: "man" },
                                            { label: "Woman", value: "woman" },
                                            { label: "Non binary", value: "nb", selected: true },
                                            { label: "Prefer not to say", value: "no-say" },
                                        ]}
                                    />
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="description" label="Short description" hint="A short description about you, your occupation, your expertises and your interests.">
                                    <FormInputWrapper>
                                        <FormTextarea
                                            id="description"
                                            rows={4}
                                            defaultValue={""}
                                            placeholder="Your content here..."
                                        />
                                        <div className="input-floating-actions">
                                            <Dropdown data-toggle="dropdown">
                                                <Button iconStartName="ai" size="xs" type="transparent" addClass="dropdown-toggle text-ai" data-toggle="dropdown" aria-expanded="false" />
                                                <DropdownMenu direction="right">
                                                    <DropdownItem type="ai" label="Write a bio" caption="From all the info in your settings" iconName="summarize" />
                                                    <DropdownDivider />
                                                    <DropdownItem type="ai" label="Improve writing" iconName="improve-writing" />
                                                    <DropdownItem type="ai" label="Make shorter" iconName="shorter-text" />
                                                    <DropdownItem type="ai" label="Change tone..." iconName="tone" />
                                                    <DropdownItem type="ai" label="Translate to..." iconName="translate" />
                                                    <DropdownDivider />
                                                    <DropdownItem label="Restore to saved value" iconName="restore" />
                                                    <div className="dropdown-content text-center">
                                                        <span>AInject can make mistakes. Check important info.</span>
                                                    </div>
                                                </DropdownMenu>
                                            </Dropdown>
                                        </div>
                                    </FormInputWrapper>
                                </FormGroup>
                            </div>
                        </Section>

                        <Section title="Social" collapsable={true} collapsableId="social">
                            <div className="cq">
                                <FormGroup addClass="cq-12" id="public-agenda" required={false} label="Public agenda" hint="This will appear on your profile page for members to book an appointment with you.">
                                    <FormInput id="public-agenda" required={true} defaultValue="" placeholder="e.g. calendar.google.com" />
                                </FormGroup>

                                <FormGroup addClass="cq-12" id="links" label="External links" hint="Add links to your profile, it can be link to your social media profiles or sites.">
                                    <ItemResource icon={{ name: "link" }} resource={{ name: "LinkedIn", type: "linkedin.com" }} action="delete" />
                                    <Button iconStartName="plus-circle" label="Add link" type="default" extended={true} />
                                </FormGroup>
                            </div>
                        </Section>

                    </div>

                    <div className="cq-12 cq-md-6">

                        <Section title="Professional information" collapsable={true} collapsableId="pro-info">
                            <div className="cq">
                                <FormGroup addClass="cq-12" id="position" required={false} label="Current job position">
                                    <FormInput id="position" required={true} defaultValue="Product designer" placeholder="" />
                                </FormGroup>
                                
                                <FormGroup addClass="cq-12 cq-xs-6" id="structure" required={false} label="Structure">
                                    <FormSelect
                                        id="structure"
                                        options={[
                                            { label: "Choose an option...", value: "", disabled: true },
                                            { label: "MoHo", value: "moho" },
                                            { label: "RaiseLab", value: "raiselab" },
                                            { label: "Schoolab", value: "schoolab", selected: true },
                                            { label: "Other", value: "other" },
                                        ]}
                                    />
                                </FormGroup>

                                <FormGroup addClass="cq-12 cq-xs-6" id="departement" required={false} label="Departement">
                                    <FormSelect
                                        id="departement"
                                        options={[
                                            { label: "Choose an option...", value: "", disabled: true },
                                            { label: "Digital", value: "digital", selected: true },
                                            { label: "Sales", value: "sales" },
                                            { label: "HR", value: "hr" },
                                            { label: "Startups", value: "starups" },
                                        ]}
                                    />
                                </FormGroup>
                            </div>
                        </Section>

                        <Section title="Expertises & Interests" collapsable={true} collapsableId="expertises">
                            <div className="cq">
                                <FormGroup addClass="cq-12" id="expertises" required={false} label="Expertises">
                                    <FormSelectMultiple
                                        id="expertises"
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

                                <FormGroup addClass="cq-12" id="interests" required={false} label="Interests">
                                    <FormSelectMultiple
                                        id="interests"
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

                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};