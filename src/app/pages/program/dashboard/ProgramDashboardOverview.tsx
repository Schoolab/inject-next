import React from "react";
import { Layout } from "@/app/layouts/layout";
import { AppContent } from "@/app/layouts/AppContent";
import { CardEvent } from "@/app/components/cards/CardEvent";
import { Button } from "@/app/components/Button";
import { CardFeed } from "@/app/components/cards/CardFeed";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Icon } from "@/app/components/Icon";
import { Dropdown } from "@/app/components/dropdown/Dropdown";
import { DropdownMenu } from "@/app/components/dropdown/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdown/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdown/DropdownDivider";
import { Section } from "@/app/components/Section";
import { CardParticipant } from "@/app/components/cards/CardParticipant";
import { ItemSetupTask } from "@/app/components/items/ItemSetupTask";

export const ProgramDashboardOverview = () => {
    return (
        <Layout shortcutBarExpanded={true}>
            <AppContent
                sections="transparent"
                breadcrumb={[
                    {
                        label: "Impact Innovators",
                        href: "/?path=/story/pages-program-dashboard--overview",
                    },
                    {
                        label: "Dashboard",
                        href: "/?path=/story/pages-program-dashboard--overview"
                    },
                    {
                        label: "Overview"
                    }
                ]}
                title="Dashboard"
                buttons={[
                    {
                        type: "default",
                        label: "Public page",
                        link: "/?path=/story/pages-program-landing--inject",
                        iconStartName: "public-page",
                    },
                    {
                        type: "default",
                        label: "Manage",
                        link: "/?path=/story/pages-manage-dashboard--dashboard",
                        iconStartName: "settings",
                    },
                ]}
                subnav={[
                    {
                        label: "Overview",
                        href: "/?path=/story/pages-program-dashboard--overview",
                        isActive: true,
                    },
                    {
                        label: "Events",
                        href: "/?path=/story/pages-program-dashboard--events",
                    },
                    {
                        label: "Library",
                        href: "/?path=/story/pages-program-dashboard--library",
                    },
                    {
                        label: "Projects",
                        href: "/?path=/story/pages-program-dashboard--projects",
                    },
                    {
                        label: "Participants",
                        href: "/?path=/story/pages-program-dashboard--participants",
                    },
                    {
                        label: "Experts",
                        href: "/?path=/story/pages-program-dashboard--experts",
                    },
                    {
                        label: "Surveys",
                        href: "/?path=/story/pages-program-dashboard--surveys",
                    },
                    {
                        label: "F.A.Q.",
                        href: "/?path=/story/pages-program-dashboard--faq",
                    },
                ]}
            >
                <div className="cq">
                    <div className="cq-12 cq-lg-6 cq-xl-8">

                        <Section addClass="gap-md">
                            <div className="d-flex flex-column flex-md-row flex-lg-column flex-xl-row align-items-center flex-wrap flex-xl-nowrap gap-md">
                                <div className="card-image-container">
                                    <div className="card-image" style={{backgroundImage: 'url("img/program-innovators.png")', backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover" }}></div>
                                </div>
                                <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-xs flex-fill">
                                    <div className="d-flex flex-column align-items-center align-items-md-start align-items-lg-center align-items-xl-start gap-0">
                                        <div className="d-flex align-items-center gap-2xs">
                                            <div className="h2  text-center text-xl-left d-flex align-items-center gap-2xs">
                                                <span>Impact Innovators</span>
                                            </div>
                                        </div>

                                        <ul className="text-muted small metas is-list mb-none">
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/47fed806-ad38-46a0-9fd5-feec0e62189e/sq150.jpeg'></div><span>Terence Irving</span></li><li><span>+ 4 more</span></li></ul>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
                                                <a href="/program/71/project/2903/users">
                                                    <small className="text-muted">8 members</small>
                                                </a>
                                            </li>
                                            <li
                                                className="list-inline-item"
                                                data-toggle="tooltip"
                                                data-placement="bottom"
                                                data-original-title="<ul class='list-unstyled d-flex flex-column gap-2xs m-none'><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/2216e7ab-c701-4503-83a2-ae7b91afb15d/sq150.jpeg'></div><span>Alexandra Jolly</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/3155b942-7535-4b0b-8ded-97eb42a92e1b/sq150.jpeg'></div><span>Emma Salvarelli</span></li><li class='d-flex gap-2xs align-items-center'><div class='thumbnail is-xs is-oval'><img alt='Avatar' src='https://inject-prod.s3.amazonaws.com/images/41c42fb1-35bd-4a31-bf08-3b2267df4b95/sq150.jpeg'></div><span>Pierre Lemeteil</span></li></ul>"
                                                data-html="true"
                                                data-boundary="window"
                                            >
                                                <a href="/program/71/project/2903/mentors">
                                                    <small className="text-muted">3 managers</small>
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="d-flex gap-xs">
                                    <Dropdown>
                                        <Button type="default" hasDropdown={true} label="More" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <DropdownMenu direction="right">
                                            <DropdownItem label="Custom shortcut" />
                                            <DropdownItem label="Custom shortcut" />
                                            <DropdownItem label="Custom shortcut" />
                                        </DropdownMenu>
                                    </Dropdown>
                                    <Dropdown addClass="z-2">
                                        <Button type="muted" iconStartName="options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                                        <DropdownMenu direction="right">
                                            <DropdownItem label="Invite participants" iconName="account-plus" />
                                            <DropdownItem label="Edit details" iconName="pencil" />
                                            <DropdownItem label="Manage program" iconName="settings" />
                                            <DropdownDivider />
                                            <DropdownItem label="Public page" iconName="public-page" />
                                            <DropdownItem label="Show my submission" iconName="form-checklist" />
                                            <DropdownItem iconName="signout" label="Leave the program" caption="You will be asked to confirm this action." type="danger" />
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </div>


                            <div className="d-block bg-highlight rounded">
                                <div className="d-flex align-items-center flex-fill text-muted p-md" data-toggle="collapse" data-target="#Aboutprogram" aria-expanded="false">
                                    <div className="d-flex align-items-center gap-xs flex-grow-1">
                                        <Icon name="information" size="sm" />
                                        <span className="font-weight-bold">About the program</span>
                                    </div>
                                    <Icon name="chevron-right" size="sm" />
                                </div>
                                <div className="collapse px-md pb-md" id="Aboutprogram">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est, at elementum felis diam eget massa.</p>
                                    <p>Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl dignissim est.</p>
                                </div>
                            </div>
                        </Section>

                        <Section addClass="is-highlighted">
                            <div className="cq justify-content-center">
                                <div className="cq-12">
                                    <h3 className="d-flex gap-xs align-items-center">
                                        <Icon size="sm" name="format-list-checks" />
                                        <span>A survey is waiting your response!</span>
                                    </h3>
                                    <p>We need you to help us improve the Impact Innovators program by responding to a survey. It will only take you a couple minutes.</p>
                                    <div className="d-flex mt-md gap-sm">
                                        <Button type="primary" label="Respond to survey" addClass="flex-fill" />
                                        <Button type="default" label="See all surveys" addClass="flex-fill" />
                                    </div>
                                </div>
                            </div>
                        </Section>

                        <Section title="Newsfeed" subtitle="Only visible to participants" subtitleIcon="community" buttons={[{type: "default", label: "New post", iconStartName: "plus-circle"}]}>
                            <div id="blogPostsWall" className="d-flex flex-column gap-xs">
                                <CardFeed
                                    avatar="https://inject-prod.s3.amazonaws.com/images/0ee71840-6d78-4784-acff-6f8d2722dbb7/sq150.jpeg"
                                    author="Sarah Lamoureux"
                                    role="manager"
                                    metas={[
                                        { label: "Community Builder, Schoolab" },
                                    ]}
                                    content={`
                                        <p>Bonjour à tous·tes,</p>
                                        <p>Nous sommes heureux de vous accueillir au sein de Schoolab Saint-Lazare !</p>
                                        <p>Le système de réservation de salles de réunion est maintenant disponible, <a href="https://schoolab.skedda.com/register?i=277598&k=0tUkWBHX4UlHvcRlvn6Cx60VhMZD7EZl">cliquez sur ce lien pour activer vos accès</a>.</p>
                                        <p>Ensuite, pour y accéder il vous suffira de cliquer sur le petit 🏢 dans la barre de navigation de gauche, vous retrouverez le p...</p>
                                    `}
                                    readMore={true}
                                    liked={true}
                                    likes={9}
                                    comments={4}
                                    copyLink={true}
                                >
                                    <ItemResource
                                        isSmall={false}
                                        action="download"
                                        icon={{
                                            addClass: "text-danger",
                                            name: "file-pdf-box",
                                        }}
                                        resource={{
                                            details: "120 KB",
                                            name: "stakeholdermap-model.pdf",
                                            type: "PDF File",
                                        }}
                                    />
                                </CardFeed>
                                <CardFeed 
                                    avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg"
                                    author="Pierre Forestier"
                                    role="manager"
                                    metas={[
                                        { label: "Program Manager, Schoolab" },
                                    ]}
                                    content={`
                                        <p>Hello,</p>
                                        <p>Un petit message pour vous souhaiter la bienvenue parmi le programme d'incubation "La Piscine". Je serais ton interlocuteur privilégié pour ce programme, n'hésitez surtout pas à me solliciter sur slack ou par mail : pierre.forestier@theschoolab.com.&nbsp;</p>
                                        <p>Et pour rappel, ce programme va te permettre de te lancer rapidement, valide...</p>
                                    `}
                                    readMore={true}
                                    liked={true}
                                    likes={9}
                                    comments={4}
                                    copyLink={true}
                                >
                                    <div className="gallery">
                                        <div className="gallery-photo embed-responsive embed-responsive-16by9">
                                            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/6cheowg6Rmk?si=Zi-3gDOnCZoEyk9m" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen />
                                        </div>
                                    </div>
                                </CardFeed>
                                <Button type="default" extended={true} label="Load more" />
                            </div>
                        </Section>

                    </div>
                    <div className="cq-12 cq-lg-6 cq-xl-4">

                        <Section title="Progression">
                            <div className="d-flex flex-column gap-xs">
                                <ItemSetupTask icon="learning" title="Learning Courses" caption="1/4 lessons" progress={1} tasks={4} />
                                <ItemSetupTask icon="objective" title="Objectives" caption="6/6 tasks, until July 12, 2024" progress={6} tasks={6} />
                            </div>
                        </Section>

                        <Section title="Upcoming events">
                            <div className="d-flex flex-column gap-xs">
                                <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                                <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                                <CardEvent title="event.name" start={{ day: "8", month: "June", startTime: "10am", endTime: "11am" }} location="InPerson" />
                                <Button extended={true} type="default" label="Show more" />
                            </div>
                        </Section>

                        <Section title="Your program managers" subtitle="Program Managers are here to guide you during the program.">
                            <div className="d-flex flex-column gap-xs">
                                <CardParticipant name="Marine Martinez" metas={[{ label: "Program Manager, Schoolab" }]} avatar="img/avatar-marine.jpeg" />
                                <CardParticipant name="Pierre Forestier" metas={[{ label: "Program Manager, Schoolab" }]} avatar="https://inject-prod.s3.amazonaws.com/images/71446890-6864-4521-9548-8f5973075b3a/sq150.jpeg" />
                                <CardParticipant name="Sarah Lamoureux" metas={[{ label: "Community Builder, Schoolab" }]} avatar="https://inject-prod.s3.amazonaws.com/images/0ee71840-6d78-4784-acff-6f8d2722dbb7/sq150.jpeg" />
                            </div>
                            <Button type="default" extended={true} label="Show more" />
                        </Section>

                        <Section title="Resources">
                            <div className="d-flex flex-column gap-xs">
                                <ItemResource isSmall={false} action="download" icon={{ addClass: "text-danger", name: "file-pdf-box" }} resource={{ details: "120 KB", name: "stakeholdermap-model.pdf", type: "PDF File" }} />
                                <ItemResource isSmall={false} action="download" icon={{ addClass: "text-danger", name: "file-pdf-box" }} resource={{ details: "120 KB", name: "stakeholdermap-model.pdf", type: "PDF File" }} />
                                <ItemResource isSmall={false} action="download" icon={{ addClass: "text-danger", name: "file-pdf-box" }} resource={{ details: "120 KB", name: "stakeholdermap-model.pdf", type: "PDF File" }} />
                            </div>
                            <Button type="default" extended={true} label="View all 5 shared files" />
                        </Section>
                        
                    </div>
                </div>
            </AppContent>
        </Layout>
    );
};
