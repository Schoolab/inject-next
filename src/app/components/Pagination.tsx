import React, { useState } from "react";
import { Icon } from "@/app/components/Icon";

export type PaginationProps = {
    className?: string;
    currentPage: number;
    totalPages: number;
    prevLink?: string;
    nextLink?: string;
    onPageChange?: (page: number) => void;
}

export const Pagination: React.FC<PaginationProps> = (props) => {
    const [currentPage, setCurrentPage] = useState(props.currentPage || 1);

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= props.totalPages) {
            setCurrentPage(newPage);
            props.onPageChange?.(newPage);
        }
    };

    let classTab = ["d-flex align-items-center ml-auto gap-xs"];
    props.className && classTab.push(props.className);

    return (
        <div className={classTab.join(" ")}>
            <small className="pagination-label text-muted">
                {currentPage}&nbsp;of&nbsp;{props.totalPages}
            </small>
            <a 
                className={`btn btn-sm btn-default ${currentPage <= 1 ? 'disabled' : ''}`}
                data-toggle="tooltip" 
                data-original-title="Previous" 
                href={props.prevLink || '#'}
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage <= 1) return;
                    handlePageChange(currentPage - 1);
                }}
            >
                <Icon name="chevron-left" />
            </a>
            <a 
                className={`btn btn-sm btn-default ${currentPage >= props.totalPages ? 'disabled' : ''}`}
                data-toggle="tooltip" 
                data-original-title="Next" 
                href={props.nextLink || '#'}
                onClick={(e) => {
                    e.preventDefault();
                    if (currentPage >= props.totalPages) return;
                    handlePageChange(currentPage + 1);
                }}
            >
                <Icon name="chevron-right" />
            </a>
        </div>
    );
}; 