import React from "react";
import { Layout } from "@/app/layouts/layout";
import { Button } from "@/app/components/Button";
import { FormGroup } from "@/app/forms/FormGroup";
import { FormInput } from "@/app/forms/FormInput";
import { Theme } from "@/app/components/Theme";
import { FormSelect } from "@/app/forms/FormSelect";
import { Logo } from "@/app/components/Logo";
import { AppSplit, AppSplitProps } from "@/app/layouts/AppSplit";

interface UserAuthSignupProps extends AppSplitProps {
    showEmail?: boolean;
    showPlatforms?: boolean;
    showSso?: boolean;
}

export const UserAuthSignup = (
    {
        showEmail = true,
        showPlatforms = true,
        showSso = false,
        cover,
        video,
        theme = "default",
        positionX,
        positionY,
        boxed,
        shadow,
        rounded,
    }:UserAuthSignupProps
) => {
    let logoUrl = "img/inject-logo-dark.svg";
    let logoDarkUrl = "img/inject-logo-dark.svg";
    let logoLightUrl = "img/inject-logo-light.svg";

    switch (theme) {
        case "Schoolab":
            logoUrl = "img/schoolab-logo-dark.svg";
            logoDarkUrl = "img/schoolab-logo-dark.svg";
            logoLightUrl = "img/schoolab-logo-light.svg";
            break;
        case "Moho":
            logoUrl = "img/moho-logo-dark.svg";
            logoDarkUrl = "img/moho-logo-dark.svg";
            logoLightUrl = "img/moho-logo-light.svg";
            break;
        case "Raiselab":
            logoUrl = "img/raiselab-logo-dark.svg";
            logoDarkUrl = "img/raiselab-logo-dark.svg";
            logoLightUrl = "img/raiselab-logo-light.svg";
            break;
        case "Inject":
            logoUrl = "img/inject-logo-dark.svg";
            logoDarkUrl = "img/inject-logo-dark.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
        case "default":
            logoUrl = "img/inject-logo-dark.svg";
            logoDarkUrl = "img/inject-logo-dark.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
        default:
            logoUrl = "img/inject-logo-dark.svg";
            logoDarkUrl = "img/inject-logo-dark.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
    }

    return (
        <Layout
            showNavbar={false}
            showShortcutbar={false}
        >
            <AppSplit cover={cover} video={video} theme={theme} positionX={positionX} positionY={positionY} boxed={boxed} shadow={shadow} rounded={rounded}>
                <nav className="navbar">
                    <div className="container-fluid p-0">
                        <a className="m-0" href="#">
                            <Logo alt={theme} logoThemeDefault={logoUrl} logoThemeLight={logoDarkUrl} logoThemeDark={logoLightUrl} logoStyle={{ maxWidth: 150, maxHeight: 40 }} />
                        </a>
                    </div>
                </nav>

                <div className="d-flex flex-column gap-xl">
                
                    <div className="d-flex flex-column gap-md">
                        <h2 className="display-2 mb-md">Nice to meet you,<br /> join us today!</h2>
                        <p>Sign up or <a href="/signin">sign in</a> to the digital platform to simplify your learning journey and participate to the community.</p>
                    </div>

                    <div className="d-flex flex-column gap-md">
                        
                        { (showPlatforms || showSso) && <div className="d-flex flex-column gap-sm}">

                            { showPlatforms && <Button type="primary" label="Join with Google" iconStartImage="img/platform-google.png" extended={true} addClass="btn-service" /> }

                            { showSso && <Button type="sso" label="Join with Schoolab" iconStartName="service-sso" extended={true} addClass="btn-service" /> }

                        </div>}

                        { (showPlatforms || showSso) && <hr className="text-muted" data-content="or" /> }
                        
                        <form method="post" action="/signin" id="loginForm" className="d-flex flex-column">
                            <div className="form-row">
                                <FormGroup addClass="col-6 mb-xs" id="first-name" required={true} label="First Name" srOnly={true}>
                                    <FormInput id="first-name" required={true} placeholder="First Name" autofocus={true} />
                                </FormGroup>

                                <FormGroup addClass="col-6 mb-xs" id="last-name" required={true} label="Last Name" srOnly={true}>
                                    <FormInput id="last-name" required={true} placeholder="Last Name" />
                                </FormGroup>
                            </div>
                            <FormGroup addClass="mb-xs" id="gender" required={true} label="Gender" srOnly={true}>
                                <FormSelect
                                    id="gender"
                                    options={[
                                        { label: "Choose your gender…", value: "", disabled: true, selected: true },
                                        { label: "Man", value: "man" },
                                        { label: "Woman", value: "woman" },
                                        { label: "Non binary", value: "nb" },
                                        { label: "Prefer not to say", value: "no-say" },
                                    ]}
                                />
                            </FormGroup>
                            <FormGroup addClass="mb-xs" id="email" label="Email address" srOnly={true} required={true}>
                                <FormInput id="email" type="email" placeholder="Email address" />
                            </FormGroup>
                            <FormGroup addClass="mb-xs" id="password" label="Password" srOnly={true} required={true}>
                                <FormInput id="password" type="password" placeholder="Password" />
                            </FormGroup>
                            <Button type="primary" label="Join with email" extended={true} />
                        </form>
                    </div>

                    <p className="small text-muted mt-5 mb-0">Already registered? <a href="/signup">Sign in with email</a></p>

                    <p className="smaller text-muted mt-8 mb-8">
                        By clicking on "Join" above, you acknowledge that you have read and understood, and agree to <a href="/terms-and-conditions">Terms & Conditions</a> and <a href="/privacy-policy">Privacy Policy</a>.
                    </p>
                    
                    <ul className="metas is-list smaller mt-5">
                        <li>
                            <span>© 2025 <a className="meta is-action" href="https://theschoolab.com" target="_blank" rel="nofollow noreferrer noopener">Schoolab</a></span>
                        </li>
                        <li>
                            <div className="dropdown" id="changeLanguage">
                                <span className="dropdown-toggle cursorLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">English</span>
                                <div className="dropdown-menu">
                                    <a className="dropdown-item" href="/signin?_locale=fr">Français – French</a>
                                    <a className="dropdown-item" href="/signin?_locale=en">English</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </AppSplit>
        </Layout>
    );
};
