import React from "react";

export interface SubNavProps {}

export const SubNav = ({}: SubNavProps) => {
    return (
        <div className="application-subnav border-bottom">
            <nav className="nav nav-tabs w-100">
                <a href="#" className=" nav-link nav-item active">
                    Item
                </a>
                <a href="#" className=" nav-link nav-item">
                    Item
                </a>
                <a href="#" className=" nav-link nav-item">
                    Item
                </a>
                <a href="#" className="nav-link nav-item ">
                    Item
                </a>
                <div className="nav-item dropdown ">
                    <button type="button" className="nav-link dropdown-toggle" data-toggle="dropdown" data-boundary="window" aria-expanded="false" aria-haspopup="true">                        
                        dropdown 1
                    </button>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
                            sub item 1
                        </a>
                        <a href="#" className="dropdown-item">
                            sub item 1
                        </a>
                    </div>
                </div>
                <div className="nav-item dropdown ">
                    <button type="button" className="nav-link dropdown-toggle" data-toggle="dropdown" data-boundary="window" aria-expanded="false" aria-haspopup="true">                      
                        dropdown 2
                    </button>
                    <div className="dropdown-menu">
                        <a href="#" className="dropdown-item">
                            sub item 2
                        </a>
                        <a href="#" className="dropdown-item">
                            sub item 2
                        </a>
                    </div>
                </div>
                <a href="#" className=" nav-link nav-item">
                    Item
                </a>
                <a href="#" className=" nav-link nav-item">
                    Item
                </a>
                <a href="#" className=" nav-link nav-item">
                    Item
                </a>
                <a href="#" className=" nav-link nav-item">
                    Item
                </a>
                <a href="#" className=" nav-link nav-item">
                    Item
                </a>
            </nav>
        </div>
    );
};
