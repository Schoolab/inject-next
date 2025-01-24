import React from "react";

export interface FooterProps {
    addClass?: string;
}

export const Footer = ({addClass}: FooterProps) => {
    let classTab = ["application-footer"];
    addClass && classTab.push(addClass);

    return (
        <footer className={classTab.join(" ")}>
            <div className="container-fluid" style={{ maxWidth: 760 }}>
                <div className="d-flex justify-content-center">
                    <ul className="metas is-list smaller justify-content-center">
                        <li>
                            <span>
                                © 2024
                                <a className="meta is-action" href="#" target="_blank" rel="nofollow noreferrer noopener">
                                    Schoolab
                                </a>
                            </span>
                        </li>
                        <li>
                            <a className="meta is-action" href="/terms-and-conditions" target="_blank" rel="nofollow noreferrer noopener">
                                Terms of service
                            </a>
                        </li>
                        <li>
                            <a className="meta is-action" href="/privacy-policy" target="_blank" rel="nofollow noreferrer noopener">
                                Privacy policy
                            </a>
                        </li>
                        <li>
                            <a className="meta is-action" href="#" target="_blank" rel="nofollow noreferrer noopener">
                                Help center
                            </a>
                        </li>
                        <li>
                            <div className="dropdown" id="changeLanguage">
                                <span className="dropdown-toggle cursorLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    English
                                </span>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="#">
                                        English
                                    </a>
                                    <a className="dropdown-item" href="#">
                                        French
                                    </a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};
