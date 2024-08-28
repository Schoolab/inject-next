import React from "react";
export interface TableElementEmptyProps {}

export const TableElementEmpty = ({}: TableElementEmptyProps) => {
    return (
        <div className="bg-white border rounded px-40px py-80px d-flex flex-column align-items-center gap-0px text-center">
            <div className="d-flex pb-16px">
                <span className="icon icon-table is-24px" />
            </div>
            <div className="d-flex flex-column gap-2xs">
                <p className="font-weight-bold">No results found</p>
                <p className="small text-muted">Sorry, there are no matching results. Please check back later.</p>
            </div>
            <div className="d-flex pt-32px">
                <a href="#" className="btn btn-lg btn-primary">
                    <span className="icon icon-plus-circle" />
                    <span>
                        Add {"{{"}item{"}}"}
                    </span>
                </a>
            </div>
            <div className="d-flex py-16px">
                <a href="#" className="small">
                    Learn more about {"{{"}item{"}}"}
                </a>
            </div>
        </div>
    );
};
