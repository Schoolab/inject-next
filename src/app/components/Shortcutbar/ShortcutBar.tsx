import React from "react";
import { Icon } from "@/app/components/Icon";

export interface ShortcutBarProps {
    /**
     * User is logged ?
     */
    isExpanded?: Boolean;
}

export const ShortcutBar = ({ isExpanded }: ShortcutBarProps) => {
    let classTab = ["application-shortcutbar"];
    isExpanded && classTab.push("shortcutbar-expanded");

    return (
        <div className={classTab.join(" ")}>
            <div className="shortcutbar-container flex-fill" aria-label="Shortcut Bar">
                {/* <div className="shortcutbar-option dropright mb-lg-5 mb-none" data-toggle="tooltip" data-placement="top" data-original-title="Switch program" data-boundary="window" style={{ zIndex: 2 }}>
                    <a href="#" className="shortcutbar-option--link" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false">
                        <span className="icon icon--program">
                            <span aria-hidden="true">SSL</span>
                        </span>
                        <div className="shortcutbar-option--label">Schoolab - Saint Lazare Schoolab - Saint Lazare</div>
                        <span className="icon icon-chevron-down shortcutbar-expanded-item-show" aria-hidden="true" />
                    </a>
                    <div className="dropdown-menu" style={{ maxWidth: 225 }}>
                        <h6 className="dropdown-header">Switch program</h6>
                        <a className="dropdown-item active" href="#">
                            <span className="text-truncate">Schoolab - Saint Lazare Schoolab - Saint Lazare</span>
                        </a>
                        <a className="dropdown-item" href="#">
                            <span>Starter S20</span>
                        </a>
                        <div className="dropdown-divider" />
                        <a className="dropdown-item" href="#">
                            <span>My programs (3)</span>
                            <span className="ml-3 icon icon-new-tab" aria-hidden="true" />
                        </a>
                    </div>
                    <div className="shortcutbar-option--label">Switch program</div>
                </div> */}
                <div className="d-flex flex-row flex-lg-column">
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link active" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Program dashboard" data-boundary="window">
                            <span className="icon icon-home" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Dashboard</div>
                        </a>
                        <div className="shortcutbar-option--label">Dashboard</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Learning course" data-boundary="window">
                            <span className="icon icon-learning" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Learning course</div>
                        </a>
                        <div className="shortcutbar-option--label">Learning course</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Healthify" data-boundary="window">
                            <span className="icon icon--letter" aria-hidden="true">
                                <span aria-hidden="true">H</span>
                            </span>
                            <div className="shortcutbar-option--label">Healthify</div>
                        </a>
                        <div className="shortcutbar-option--label">Healthify</div>
                    </div>
                    <div className="shortcutbar-option dropright" data-toggle="tooltip" data-placement="top" data-original-title="More projects" data-boundary="window" style={{ zIndex: 2 }}>
                        <a href="#" className="shortcutbar-option--link" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false">
                            <span className="icon icon-more" aria-hidden="true" />
                            <div className="shortcutbar-option--label">More projects</div>
                            <span className="icon icon-chevron-down shortcutbar-expanded-item-show" aria-hidden="true" />
                        </a>
                        <div className="dropdown-menu" style={{ maxWidth: 225 }}>
                            <h6 className="dropdown-header">More projects</h6>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">t</span>
                                </div>
                                <span className="text-truncate">Third project</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fourth project</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" aria-hidden="true">
                                    <span aria-hidden="true">f</span>
                                </div>
                                <span className="text-truncate">Fifth project with a long text</span>
                            </a>
                        </div>
                        <div className="shortcutbar-option--label">More projects</div>
                    </div>
                    <div className="shortcutbar-option ">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Custom shortcut" data-boundary="window">
                            <span className="icon icon--custom" aria-hidden="true">
                                👋
                            </span>
                            <div className="shortcutbar-option--label">Custom shortcut</div>
                        </a>
                        <div className="shortcutbar-option--label">Custom shortcut</div>
                    </div>
                    <div className="shortcutbar-option ">
                        <a className="shortcutbar-option--link " href="#" data-toggle="tooltip" data-placement="top" data-original-title="Custom shortcut" data-boundary="window">
                            <span className="icon icon--custom">
                                <span aria-hidden="true">C</span>
                            </span>
                            <div className="shortcutbar-option--label">Custom shortcut</div>
                        </a>
                        <div className="shortcutbar-option--label">Custom shortcut</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Public page" data-boundary="window">
                            <Icon name="public-page" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Public page</div>
                        </a>
                        <div className="shortcutbar-option--label">Public page</div>
                    </div>
                    <div className="shortcutbar-separator" />
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Expert space" data-boundary="window">
                            <span className="icon icon-coaching" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Expert space</div>
                        </a>
                        <div className="shortcutbar-option--label">Expert space</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Jury space" data-boundary="window">
                            <span className="icon icon-evaluation" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Jury space</div>
                        </a>
                        <div className="shortcutbar-option--label">Jury space</div>
                    </div>
                    <div className="shortcutbar-separator" />
                    <div className="shortcutbar-option dropright" data-toggle="tooltip" data-placement="top" data-original-title="Previews" data-boundary="window" style={{ zIndex: 2 }}>
                        <a href="#" className="shortcutbar-option--link" data-toggle="dropdown" data-boundary="window" aria-haspopup="true" aria-expanded="false">
                            <span className="icon icon-preview" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Previews</div>
                            <span className="icon icon-chevron-down shortcutbar-expanded-item-show" aria-hidden="true" />
                        </a>
                        <div className="dropdown-menu" style={{ maxWidth: 225 }}>
                            <h6 className="dropdown-header">Previews</h6>
                            <a className="dropdown-item align-items-center" href="#">
                                <span className="flex-shrink-0 icon icon-learning is-sm" />
                                <span className="text-truncate">Learning course</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" data-original-title="" title="">
                                    <span className="">f</span>
                                </div>
                                <span className="text-truncate">First project</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" data-original-title="" title="">
                                    <span className="">s</span>
                                </div>
                                <span className="text-truncate">Second project</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" data-original-title="" title="">
                                    <span className="">t</span>
                                </div>
                                <span className="text-truncate">Third project with a long texte</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" data-original-title="" title="">
                                    <span className="">f</span>
                                </div>
                                <span className="text-truncate">Fourth project</span>
                            </a>
                            <a className="dropdown-item align-items-center" href="#">
                                <div className="flex-shrink-0 icon icon--letter is-sm mr-2" data-original-title="" title="">
                                    <span className="">f</span>
                                </div>
                                <span className="text-truncate">Fifth project</span>
                            </a>
                        </div>
                        <div className="shortcutbar-option--label">Previews</div>
                    </div>
                    <div className="shortcutbar-option">
                        <a className="shortcutbar-option--link" href="#" data-toggle="tooltip" data-placement="top" data-original-title="Manage program" data-boundary="window">
                            <span className="icon icon-settings" aria-hidden="true" />
                            <div className="shortcutbar-option--label">Manage program</div>
                        </a>
                        <div className="shortcutbar-option--label">Manage program</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
