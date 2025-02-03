import React from "react";
import { Layout } from "@/app/layouts/layout";
import { Button } from "@/app/components/Button";
import { FormGroup } from "@/app/components/forms/FormGroup";
import { FormInput } from "@/app/components/forms/FormInput";
import { Theme } from "@/app/components/Theme";

interface UserAuthSigninProps {
    theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
    showEmail?: boolean;
    showPlatforms?: boolean;
    showSso?: boolean;
    positionX?: "none" | "left" | "center" | "right";
    positionY?: "none" | "top" | "middle" | "bottom";
    boxed?: boolean;
    shadow?: boolean;
    rounded?: boolean;
    cover?: string;
    video?: string;
}

export const UserAuthSignin = (
    {
        theme,
        showEmail = true,
        showPlatforms = true,
        showSso = false,
        positionX,
        positionY,
        boxed,
        shadow,
        rounded,
        cover,
        video,
    }:UserAuthSigninProps
) => {
    let logoUrl = "img/inject-logo-dark.svg";
    let logoDarkUrl = "img/inject-logo-dark.svg";
    let logoLightUrl = "img/inject-logo-light.svg";

    switch (theme) {
        case "Schoolab":
            logoUrl = "img/schoolab-logo-light.svg";
            break;
        case "Moho":
            logoUrl = "img/moho-logo-light.svg";
            break;
        case "Raiselab":
            logoUrl = "img/raiselab-logo-light.svg";
            break;
        case "Inject":
            logoDarkUrl = "img/inject-logo-dark.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
        case "default":
            logoDarkUrl = "img/inject-logo-dark.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
        default:
            logoDarkUrl = "img/inject-logo-dark.svg";
            logoLightUrl = "img/inject-logo-light.svg";
            break;
    }

    let splitedContainerClass = ["splited-container"];

    let splitedContentClass = ["splited-content splited-content-large gap-3xl"];
    positionX && splitedContentClass.push(`is-${positionX}`);
    positionY && splitedContentClass.push(`is-${positionY}`);
    boxed && splitedContentClass.push("is-boxed");
    shadow && splitedContentClass.push("is-shadowed");
    rounded && splitedContentClass.push("is-rounded");

    return (
        <Layout
            showNavbar={false}
            showShortcutbar={false}
        >
            {theme && theme !== "default" && <Theme themeName={theme} />}
            <main className="application-content p-0">
                <div className={splitedContainerClass.join(" ")}>
                    <div className={splitedContentClass.join(" ")}>
                        <nav className="navbar">
                            <div className="container-fluid p-0">
                                <a className="m-0" href="#">
                                    { theme && theme !== "default" ? 
                                        <picture className="img-fluid d-block">
                                            <img  src={logoUrl} height="40" />
                                        </picture>
                                    :
                                        <picture className="img-fluid d-block">
                                            <source srcSet={logoLightUrl} height="40" media="(prefers-color-scheme: dark)" />
                                            <img src={logoDarkUrl} height="40" />
                                        </picture>
                                    }
                                </a>
                            </div>
                        </nav>

                        <div className="d-flex flex-column gap-xl">
                        
                            <div className="d-flex flex-column gap-md">
                                <h2 className="display-2 mb-md">Welcome back, it’s nice to see you!</h2>
                                <p>Sign in to your account or <a href="/signup">sign up</a> to access your learning courses and objectives and participate to the community.</p>
                            </div>

                            <div className="d-flex flex-column gap-md">

                                { (showPlatforms || showSso) && <div className="d-flex flex-column gap-sm}">

                                    { showPlatforms && <Button type="primary" label="Sign in with Google" iconStartImage="img/platform-google.png" extended={true} addClass="btn-service" /> }

                                    { showSso && <Button type="sso" label="Sign in with Schoolab" iconStartName="service-sso" extended={true} addClass="btn-service" /> }
                                
                                </div>}

                                { ((showPlatforms || showSso) && showEmail) && <hr className="text-muted" data-content="or" /> }
                                
                                { showEmail && <form method="post" action="/signin" id="loginForm" className="d-flex flex-column gap-sm">
                                    <FormGroup id="email" label="Email address" srOnly={true} required={true}>
                                        <FormInput id="email" type="email" placeholder="Email address" autofocus={true} />
                                    </FormGroup>
                                    <FormGroup id="password" label="Password" srOnly={true} required={true}>
                                        <FormInput id="password" type="password" placeholder="Password" />
                                    </FormGroup>
                                    <p className="small text-muted mt-5 mb-0">
                                        <a href="#" className="text-muted" data-toggle="modal" data-target="#lostPasswordModal">Password lost?</a>
                                    </p>
                                    
                                    <Button type="primary" label="Sign in with email" extended={true} />
                                </form> }
                            </div>

                            { showEmail && <p className="small text-muted mt-5 mb-0">Not registered? <a href="/signup">Sign up with email</a></p> }

                            <p className="smaller text-muted mt-8 mb-8">
                                By clicking on "Sign in" above, you acknowledge that you have read and understood, and agree to <a href="/terms-and-conditions">Terms & Conditions</a> and <a href="/privacy-policy">Privacy Policy</a>.
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
                    </div>
                    { cover && <div className="splited-cover">
                        <img src={cover} />
                    </div> }
                    { video && <div className="splited-cover">
                        <video poster={cover} autoPlay playsInline muted loop style={{visibility: "inherit", opacity: "1"}}>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div> }
                </div>
            </main>
        </Layout>
    );
};
