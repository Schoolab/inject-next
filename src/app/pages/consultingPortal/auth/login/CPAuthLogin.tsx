import React from "react";
import { Layout } from "@/app/layouts/layout";
import { Button } from "@/app/components/buttons/Button";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { Theme } from "@/app/components/Theme";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { Logo } from "@/app/components/Logo";
import { AppSplit, AppSplitProps } from "@/app/layouts/AppSplit";

interface CPAuthLoginProps extends AppSplitProps {
    showEmail?: boolean;
    showPlatforms?: boolean;
    showSso?: boolean;
}

export const CPAuthLogin = ({ showEmail = true, showPlatforms = true, showSso = false, cover, video, theme = "default", positionX, positionY, boxed, shadow, rounded }: CPAuthLoginProps) => {
    return (
        <Layout showNavbar={false} showShortcutbar={false}>
            <AppSplit cover={cover} video={video} theme="default" positionX={positionX} positionY={positionY} boxed={boxed} shadow={shadow} rounded={rounded}>
                <div className="d-flex flex-column gap-xl">
                    <div className="d-flex flex-column gap-md">
                        <h2 className="display-3 mb-md">Access the consulting portal</h2>
                        <p>
                            Enjoy a secure and personalized experience within <strong>Semmaris Holding – Impact Innovator</strong>.
                        </p>
                    </div>

                    <div className="d-flex flex-column gap-md">
                        <form method="post" action="/signin" id="loginForm" className="d-flex flex-column">
                            <FormGroup addClass="mb-md" id="email" label="Email address" srOnly={true} required={true}>
                                <FormInput id="email" type="email" placeholder="Enter your Email address" />
                            </FormGroup>

                            <Button type="primary" label="Continue" extended={true} />
                        </form>
                    </div>

                    <div className="d-flex align-items-center flex-fill text-muted collapsed" data-toggle="collapse" data-target="#signIn" aria-expanded="false">
                        <div className="d-flex align-items-center gap-xs flex-grow-1">
                            <span className="small text-muted ">
                                Have an account? <span className="text-primary">Sign in</span>
                            </span>
                        </div>
                        <span className="icon is-sm icon-chevron-right"></span>
                    </div>
                    <div className="collapse" id="signIn">
                        <div className="d-flex flex-column gap-md">
                            <div className="d-flex flex-column gap-sm}">
                                <Button type="primary" label="Sign in with Google" iconStartImage="img/platform-google.png" extended={true} addClass="btn-service" />
                            </div>

                            <hr className="text-muted" data-content="or" />

                            <form method="post" action="/signin" id="loginForm" className="d-flex flex-column gap-sm">
                                <FormGroup id="email" label="Email address" srOnly={true} required={true}>
                                    <FormInput id="email" type="email" placeholder="Email address" autofocus={true} />
                                </FormGroup>
                                <FormGroup id="password" label="Password" srOnly={true} required={true}>
                                    <FormInput id="password" type="password" placeholder="Password" />
                                </FormGroup>
                                <p className="small text-muted mt-5 mb-0">
                                    <a href="#" >
                                        Password lost? 
                                    </a>
                                </p>

                                <p className="small text-muted mt-5 mb-0">
                                    Not registered? <a href="/signup">Sign up with email</a>
                                </p>

                            </form>
                        </div>

                        <p className="smaller text-muted mt-8 mb-8">
                            By clicking on "Sign in" above, you acknowledge that you have read and understood, and agree to <a href="/terms-and-conditions">Terms & Conditions</a> and <a href="/privacy-policy">Privacy Policy</a>.
                        </p>

                        <ul className="metas is-list smaller mt-5">
                            <li>
                                <span>
                                    © 2025{" "}
                                    <a className="meta is-action" href="https://theschoolab.com" target="_blank" rel="nofollow noreferrer noopener">
                                        Schoolab
                                    </a>
                                </span>
                            </li>
                            <li>
                                <div className="dropdown" id="changeLanguage">
                                    <span className="dropdown-toggle cursorLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        English
                                    </span>
                                    <div className="dropdown-menu">
                                        <a className="dropdown-item" href="/signin?_locale=fr">
                                            Français – French
                                        </a>
                                        <a className="dropdown-item" href="/signin?_locale=en">
                                            English
                                        </a>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </AppSplit>
        </Layout>
    );
};
