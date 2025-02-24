import React, { CSSProperties } from "react";
import { Card } from "@/app/components/cards/Card";
import { CardInfos } from "@/app/components/cards/CardInfos";
import { ItemResource } from "@/app/components/items/ItemResource";
import { Icon } from "@/app/components/icons/Icon";
import { Dropdown } from "@/app/components/dropdowns/Dropdown";
import { DropdownMenu } from "@/app/components/dropdowns/DropdownMenu";
import { DropdownItem } from "@/app/components/dropdowns/DropdownItem";
import { DropdownDivider } from "@/app/components/dropdowns/DropdownDivider";
import DOMPurify from 'dompurify';
import { Avatar } from "@/app/components/avatars/Avatar";
import { Role } from "@/app/components/badges/roles/Role";
import { Button } from "@/app/components/buttons/Button";
import { Tag } from "@/app/components/badges/tags/Tag";
import { Notif } from "@/app/components/badges/notifs/Notif";

type TagType = {
    label: string;
}

type ResponseType = {
    avatar?: string;
    author: string;
    role?: "admin" | "manager" | "expert" | "jury" | "participant";
    datetime: string;
    content: string;
}

type LinkType = {
    icon?: string;
    label?: string;
    link?: string;
    responses?: number;
}

type MetaType = {
    label: string;
};

interface CardQuestionProps {
    from?: string;
    fromPrepend?: string;

    avatar?: string;
    author: string;
    role?: "admin" | "manager" | "expert" | "jury" | "participant";
    metas?: MetaType[];
    datetime?: string;

    content?: string;
    children?: React.ReactNode;

    tags?: TagType[];
    status: "draft" | "pending" | "resolved" | "closed";

    responses?: ResponseType[];
    showDetails?: boolean;

    commented?: boolean;
    comments?: number;
    liked?: boolean;
    likes?: number;
    copyLink?: boolean;

    links?: LinkType[];

    addClass?: string;
    style?: CSSProperties;
}

export const CardQuestion = (
    { 
        from,
        fromPrepend = "From program:",
        avatar,
        author = "Name",
        role,
        metas,
        datetime = "May 13 at 3:39 PM", 
        content = `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl ignissim est, at elementum felis diam eget massa.</p>
        `,
        tags,
        status = "pending",
        responses,
        showDetails,
        commented, 
        comments = 0,
        liked,
        likes = 0,
        copyLink = false,
        /**
         * Insert code inside the card to add a resource, an image, a video or more.
         */
        children, 
        addClass,
        style,
        ...props 
    }: CardQuestionProps
) => {
    let listMetas = metas?.map((meta) => <li key={meta.label}>{meta.label}</li>); 
    
    let listTags = tags?.map((tag) => <Tag label={tag.label} />);

    let listResponses = responses?.map((response) => (
        <div className="message p-0 align-items-end">
            <Avatar size="md" image={response.avatar} />
            <div className="message-body">
                <div className="message-row">
                    <ul className="metas is-list small">
                        <li>
                            <a href="#" className="text-muted d-flex align-items-center gap-2xs">
                                <span>{response.author}</span>
                                { response.role && <Role status={response.role} /> }
                            </a>
                        </li>
                        <li>
                            <span>{response.datetime}</span>
                        </li>
                    </ul>
                </div>
                <div className="message-row align-items-end">
                    <div className="message-content gap-md" dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(response.content) }} />
                    <div className="message-options dropdown">
                        <a className="btn btn-lg btn-transparent btn-icon" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <span className="icon icon-options" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <a href="#" className="dropdown-item update-comment" data-url="/rest/comment/924/edit-modal">
                                Edit
                            </a>
                            <a href="#" className="dropdown-item is-danger delete-comment" data-url="/rest/comment/924/delete">
                                Delete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ));

    let sanitizedContent = DOMPurify.sanitize(content);

    return (
        <Card addClass={addClass} style={style} {...props}>
            <CardInfos addClass="d-flex flex-column align-items-stretch gap-md p-24px">
                { from && <p className="text-muted small gap-2xs">
                    <span>{fromPrepend}</span> <a href="#" className="text-muted font-weight-bold">{from}</a>
                </p> }

                <div className="d-flex flex-grow-1 gap-sm">
                    <div className="thumbnail-relation m-auto">
                        <Avatar size="lg" image={avatar} />
                    </div>
                    <div className="card-title flex-grow-1">
                        <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                            <span>{author}</span>
                            { role && <Role status={role} /> }
                        </a>
                        <ul className="text-muted small metas is-list mb-none">
                            {metas && listMetas}
                            <li>
                                <span>{datetime}</span>
                            </li>
                        </ul>
                    </div>
                    <Dropdown addClass="z-2">
                        <Button type="muted" iconStartName="options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
                        <DropdownMenu direction="right">
                            <DropdownItem label="Open profile" outbound={true} />
                            <DropdownItem label="Open program" outbound={true} />
                            <DropdownDivider />
                            <DropdownItem label="Add response" caption="Open details &amp; responses" iconName="plus-circle" />
                            <DropdownItem label="Mark resolved" iconName="check-circle" />
                            <DropdownDivider />
                            <DropdownItem label="Edit" iconName="pencil" />
                            <DropdownItem type="danger" label="Delete" iconName="delete" />
                        </DropdownMenu>
                    </Dropdown>
                </div>

                { sanitizedContent && <div className="d-flex flex-column gap-md" dangerouslySetInnerHTML={{ __html: sanitizedContent }} /> }
                
                {children}

                { ( tags || status ) && <div className="d-flex justify-content-between flex-nowrap gap-0">
                    <div className="badges flex-nowrap">
                       {listTags}
                    </div>
                    { status === "draft" && (<Tag status="draft" iconName="status-bordered" label="Draft" />) }
                    { status === "pending" && (<Tag status="progress" iconName="status-dashed" label="Pending" />) }
                    { status === "resolved" && (<Tag status="open" iconName="status-filled" label="Resolved" />) }
                    { status === "closed" && (<Tag status="closed" iconName="status-stop" label="Closed" />) }
                </div> }

                { responses && <hr /> }
                { responses && <div className="d-flex flex-column gap-md">
                    { listResponses }
                </div> }

                <div className="d-flex justify-content-between flex-nowrap">
                    <div className="d-flex gap-xs flex-fill">
                        { liked ? (
                            <Button size="sm" type="secondary" label={likes} iconStartName="thumb-up" isActive={true} showActive={false} />
                        ) : (
                            <Button size="sm" type="secondary" label={likes > 0 ? likes : "Like"} iconStartName="thumb-up" showActive={false} />
                        ) }

                        { commented ? (
                            <Button size="sm" type="secondary" label={comments} iconStartName="comment" />
                        ) : (
                            <Button size="sm" type="secondary" label={comments > 0 ? comments : "Comment"} iconStartName="comment" />
                        ) }
                    </div>
                    { copyLink && <Button size="sm" type="secondary" label="Copy link" iconStartName="share" /> }
                </div>
            </CardInfos>
            { showDetails && <div className="card-targets">
                <div className="card-target">
                    <a href="#" className="stretched-link d-flex align-items-center">
                        <Icon name="faq" size="sm" />
                        <span>Details &amp; responses</span>
                    </a>
                    <Notif label={responses ? responses.length : 0} status="highlight" />
                    <Icon name="chevron-right" size="sm" />
                </div>
            </div> }
        </Card>
    );
};
