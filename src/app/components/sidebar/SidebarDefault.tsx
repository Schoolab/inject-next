import React from "react";

export interface SidebarDefaultProps {}

export const SidebarDefault = ({}: SidebarDefaultProps) => {
    return (
        <aside className="application-sidebar d-none d-lg-block" id="leftMainSidebar">
            <div className="sidebar overflow-auto">
                <div className="px-24px pb-32px">
                    <div className="mt-7">
                        <ul className="nav nav-main flex-column">
                            {/* <li class="nav-item mb-5">
                  <a href="#" class="nav-link">
                      <span class="nav-link--label text-dark">← Back to Item</span>
                  </a>
              </li> */}
                            <li className="nav-item ">
                                <span className="nav-title"> ITEM TITLE </span>
                            </li>
                            <li className="nav-item">
                                <a href="#" className="nav-link">
                                    <span className="nav-link--column">
                                        <span className="nav-link--label">Item</span>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className=" nav-link active">
                                    <span className="nav-link--column">
                                        <span className="nav-link--label">Item</span>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className=" nav-link">
                                    <span className="nav-link--column">
                                        <span className="nav-link--label">Item</span>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className=" nav-link">
                                    <span className="nav-link--column">
                                        <span className="nav-link--label">Item</span>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className=" nav-link">
                                    <span className="nav-link--column">
                                        <span className="nav-link--label">Item</span>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className=" nav-link">
                                    <span className="nav-link--column">
                                        <span className="nav-link--label">Item</span>
                                    </span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="#" className=" nav-link">
                                    <span className="nav-link--column">
                                        <span className="nav-link--label">Item</span>
                                    </span>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </aside>
    );
};
