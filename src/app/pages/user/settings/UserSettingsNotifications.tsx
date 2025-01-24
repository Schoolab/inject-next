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
import { FormFieldSet } from "@/app/components/forms/FormFieldSet";
import { FormOption } from "@/app/components/forms/FormOption";
import { Alert } from "@/app/components/Alert";
import { ItemsGroup } from "@/app/components/items-group/ItemsGroup";
import { Icon } from "@/app/components/Icon";
import { ItemsGroupHeader } from "@/app/components/items-group/ItemsGroupHeader";

export const UserSettingsNotifications = () => {
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
                        link: "/?path=/story/pages-user-profile--about",
                    },
                    {
                        type: "primary",
                        label: "Save changes",
                        size: "sm",
                        link: "/?path=/story/pages-user-settings--notifications",
                    },
                ]}
                subnav={[
                    {
                        label: "Profile",
                        href: "/?path=/story/pages-user-settings--profile",
                    },
                    {
                        label: "Account",
                        href: "/?path=/story/pages-user-settings--account",
                    },
                    {
                        label: "Notifications",
                        href: "/?path=/story/pages-user-settings--notifications",
                        isActive: true,
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

                        <Section title="Programs" collapsable={true} collapsableId="programs">
                            <div className="cq">
                                <FormFieldSet id="daily-digest" addClass="cq-12">
                                    <FormOption
                                        name="daily-digest"
                                        id="daily-digest"
                                        value="daily-digest"
                                        type="switch"
                                        label="Receive a daily digest every morning"
                                        caption="Receive an email on the morning about the last 24 jours top activities"
                                        defaultChecked={true}
                                    />
                                </FormFieldSet>

                                <FormFieldSet addClass="cq-12" id="info" legend="Important information and announcements sent by program managers">
                                    <FormOption
                                        name="info"
                                        id="info-digest"
                                        value="info-digest"
                                        type="checkbox"
                                        label="Daily digest"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="info"
                                        id="info-push"
                                        value="info-push"
                                        type="checkbox"
                                        label="Push notifications"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="info"
                                        id="info-email"
                                        value="info-email"
                                        type="checkbox"
                                        label="Email"
                                    />
                                </FormFieldSet>

                                <FormFieldSet addClass="cq-12" id="activity" legend="New activities in your program timeline">
                                    <FormOption
                                        name="activity"
                                        id="activity-digest"
                                        value="activity-digest"
                                        type="checkbox"
                                        label="Daily digest"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="activity"
                                        id="activity-push"
                                        value="activity-push"
                                        type="checkbox"
                                        label="Push notifications"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="activity"
                                        id="activity-email"
                                        value="activity-email"
                                        type="checkbox"
                                        label="Email"
                                    />
                                </FormFieldSet>

                                <FormFieldSet addClass="cq-12" id="learning" legend="New activities in your learning course">
                                    <FormOption
                                        name="learning"
                                        id="activity-learning-digest"
                                        value="activity-learning-digest"
                                        type="checkbox"
                                        label="Daily digest"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="learning"
                                        id="activity-learning-push"
                                        value="activity-learning-push"
                                        type="checkbox"
                                        label="Push notifications"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="learning"
                                        id="activity-learning-email"
                                        value="activity-learning-email"
                                        type="checkbox"
                                        label="Email"
                                    />
                                </FormFieldSet>
                            </div>
                        </Section>

                        <Section title="Experts" subtitle="Only visible to experts" subtitleIcon="coaching" collapsable={true} collapsableId="experts">
                            <div className="cq">
                                <FormFieldSet addClass="cq-12" id="faq" legend="New question is posted in your programs F.A.Q.">
                                    <FormOption
                                        name="faq"
                                        id="faq-question-digest"
                                        value="faq-question-digest"
                                        type="checkbox"
                                        label="Daily digest"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="faq"
                                        id="faq-question-push"
                                        value="faq-question-push"
                                        type="checkbox"
                                        label="Push notifications"
                                        defaultChecked={true}
                                        disabled={true}
                                    />
                                    <FormOption
                                        name="faq"
                                        id="faq-question-email"
                                        value="faq-question-email"
                                        type="checkbox"
                                        label="Email"
                                        defaultChecked={true}
                                    />
                                </FormFieldSet>
                            </div>
                        </Section>

                    </div>

                    <div className="cq-12 cq-md-6">

                        <Section title="Communication" collapsable={true} collapsableId="communication">
                            <div className="cq">
                                <FormFieldSet addClass="cq-12" id="pm" legend="New private message">
                                    <FormOption
                                        name="pm"
                                        id="pm-digest"
                                        value="pm-digest"
                                        type="checkbox"
                                        label="Daily digest"
                                        defaultChecked={true}
                                    />
                                    <FormOption
                                        name="pm"
                                        id="pm-push"
                                        value="pm-push"
                                        type="checkbox"
                                        label="Push notifications"
                                        defaultChecked={true}
                                    />
                                    <FormOption
                                        name="pm"
                                        id="pm-email"
                                        value="pm-email"
                                        type="checkbox"
                                        label="Email"
                                    />
                                </FormFieldSet>

                                <FormFieldSet addClass="cq-12" id="comments" legend="New comment on your posts">
                                    <FormOption
                                        name="comments"
                                        id="comments-digest"
                                        value="comments-digest"
                                        type="checkbox"
                                        label="Daily digest"
                                        defaultChecked={true}
                                    />
                                    <FormOption
                                        name="comments"
                                        id="comments-push"
                                        value="comments-push"
                                        type="checkbox"
                                        label="Push notifications"
                                        defaultChecked={true}
                                    />
                                    <FormOption
                                        name="comments"
                                        id="comments-email"
                                        value="comments-email"
                                        type="checkbox"
                                        label="Email"
                                    />
                                </FormFieldSet>
                            </div>
                        </Section>

                        <Section title="Subscriptions" subtitle="Only visible to managers" subtitleIcon="role-manager" collapsable={true} collapsableId="subscriptions">
                            <div className="cq gap-md">

                                <ItemsGroup addClass="cq-12 p-md">
                                    <ItemsGroupHeader label="Send me a notification" />
                                    <p className="d-flex flex-wrap gap-2xs small m-none">
                                        <span>When</span> <mark className="font-weight-normal font-monospace">1 item added</mark> <span className="font-weight-normal">or</span> <mark className="font-weight-normal font-monospace">10 items updated</mark> <span className="font-weight-normal">in</span> <mark className="font-weight-normal"><Icon name="table" size="xs" /> <a href="">Participants/All participants</a></mark>
                                    </p>
                                    <FormFieldSet id="sub1">
                                        <FormOption
                                            name="sub1"
                                            id="sub1-digest"
                                            value="sub1-digest"
                                            type="checkbox"
                                            label="Daily digest"
                                            defaultChecked={true}
                                        />
                                        <FormOption
                                            name="sub1"
                                            id="sub1-push"
                                            value="sub1-push"
                                            type="checkbox"
                                            label="Push notifications"
                                            defaultChecked={true}
                                        />
                                        <FormOption
                                            name="sub1"
                                            id="sub1-email"
                                            value="sub1-email"
                                            type="checkbox"
                                            label="Email"
                                        />
                                    </FormFieldSet>
                                </ItemsGroup>

                                <ItemsGroup addClass="cq-12 p-md">
                                    <ItemsGroupHeader label="Send me a notification" />
                                    <p className="d-flex flex-wrap gap-2xs small m-none">
                                        <span>When</span> <mark className="font-weight-normal font-monospace">1 item added</mark> <span className="font-weight-normal">or</span> <mark className="font-weight-normal font-monospace">10 items updated</mark> <span className="font-weight-normal">in</span> <mark className="font-weight-normal"><Icon name="table" size="xs" /> <a href="">Participants/All participants</a></mark>
                                    </p>
                                    <FormFieldSet id="sub2">
                                        <FormOption
                                            name="sub2"
                                            id="sub2-digest"
                                            value="sub2-digest"
                                            type="checkbox"
                                            label="Daily digest"
                                            defaultChecked={true}
                                        />
                                        <FormOption
                                            name="sub2"
                                            id="sub2-push"
                                            value="sub2-push"
                                            type="checkbox"
                                            label="Push notifications"
                                            defaultChecked={true}
                                        />
                                        <FormOption
                                            name="sub2"
                                            id="sub2-email"
                                            value="sub2-email"
                                            type="checkbox"
                                            label="Email"
                                        />
                                    </FormFieldSet>
                                </ItemsGroup>
                            </div>
                        </Section>

                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};