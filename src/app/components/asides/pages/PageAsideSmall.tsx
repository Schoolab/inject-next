import React from "react";

interface PageAsideSmallProps {}

export const PageAsideSmall = ({}: PageAsideSmallProps) => {
    return (
        <div className="application-ui">
            <div className="application-container">
                <main className="application-content">
                    <div id="appMainContainer" className="container-fluid mb-lg-0 py-7"></div>
                </main>

                <aside className="application-aside is-small">
                    <div className="aside-content-container">
                        <div className="aside-header">
                            <h3 className="aside-title line-clamp-1">
                                <span className="text-truncate">Title</span>
                            </h3>
                            <div className="aside-actions">
                                {/* <a class="btn btn-transparent border-0 p-2xs text-muted" data-toggle="tooltip" data-original-title="Open in new tab" href="#">
              <span class="icon icon-arrow-top-right is-24px"></span>
          </a> */}
                                <button className="btn btn-transparent border-0 p-2xs text-muted close-aside" type="button" data-dismiss="aside" aria-label="Close">
                                    <span className="icon icon-close is-24px" aria-hidden="true" />
                                </button>
                            </div>
                        </div>
                        <div className="aside-body">
                            <p>Content here</p>
                        </div>
                        <div className="aside-footer">
                            <div className="d-flex gap-xs ml-auto">
                                <a className="btn btn-lg btn-default" href="#">
                                    Cancel
                                </a>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        </div>
    );
};
