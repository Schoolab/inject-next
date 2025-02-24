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

type MetaType = {
    label: string;
};

interface CardFeedProps {
    from?: string;
    fromPrepend?: string;

    avatar?: string;
    author: string;
    role?: "admin" | "manager" | "expert" | "jury" | "participant";
    type?: null | "org" | "program";
    metas?: MetaType[];
    datetime?: string;

    title?: string;
    content?: string;
    readMore?: boolean;
    children?: React.ReactNode;

    commented?: boolean;
    comments?: number;
    liked?: boolean;
    likes?: number;
    copyLink?: boolean;

    addClass?: string;
    style?: CSSProperties;
}

export const CardFeed = (
    { 
        from,
        fromPrepend = "From program:",
        avatar,
        author = "Name",
        role,
        type,
        metas,
        datetime = "May 13 at 3:39 PM", 
        title,
        content = `
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus sollicitudin, eros scelerisque scelerisque pellentesque, nulla nisl ignissim est, at elementum felis diam eget massa.</p>
        `,
        readMore,
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
    }: CardFeedProps
) => {
    let classTab = [""];
    addClass && classTab.push(addClass);

    let listMetas = metas?.map((meta) => <li key={meta.label}>{meta.label}</li>); 

    let sanitizedContent = DOMPurify.sanitize(content);

    return (
        <Card addClass={classTab.join(" ")} style={style} {...props}>
            <CardInfos addClass="d-flex flex-column align-items-stretch gap-md p-24px">
                { from && <p className="text-muted small gap-2xs">
                    <span>{fromPrepend}</span> <a href="#" className="text-muted font-weight-bold">{from}</a>
                </p> }

                <div className="d-flex flex-grow-1 gap-sm">
                    <div className="thumbnail-relation m-auto">
                        { type === "org" && <Avatar size="lg" iconName="org" image={avatar} isOval={false} /> }
                        { type === "program" && <Avatar size="lg" iconName="program" image={avatar} isOval={false} /> }
                        { !type && <Avatar size="lg" image={avatar} /> }
                    </div>
                    <div className="card-title flex-grow-1">
                        <a href="#" className="h4 mb-none line-clamp-1 d-flex align-items-center gap-2xs">
                            <span>{author}</span>
                            { role && <Role status={role} /> }
                            { type === "org" && <Icon size="xs" name={type} addClass="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Organization" data-boundary="window" /> }
                            { type === "program" && <Icon size="xs" name={type} addClass="text-muted" data-toggle="tooltip" data-placement="top" data-original-title="Program" data-boundary="window" /> }
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
                            <DropdownItem label="Open post" />
                            <DropdownDivider />
                            <DropdownItem label="Open profile" outbound={true} />
                            <DropdownItem label="Open program" outbound={true} />
                            <DropdownDivider />
                            <DropdownItem label="Edit" iconName="pencil" />
                            <DropdownItem type="danger" label="Delete" iconName="delete" />
                        </DropdownMenu>
                    </Dropdown>
                </div>

                { title && <h3>{title}</h3> }

                { sanitizedContent && <div className="d-flex flex-column gap-md" dangerouslySetInnerHTML={{ __html: sanitizedContent }} /> }
                
                { readMore && <a href="#">Read more -&gt;</a> }
                
                {children}

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
        </Card>
    );
};
