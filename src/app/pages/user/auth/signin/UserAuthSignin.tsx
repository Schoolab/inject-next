import React from "react";
import { Layout } from "@/app/layouts/layout";
import { Button } from "@/app/components/buttons/Button";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { Logo } from "@/app/components/Logo";
import { AppSplit, AppSplitProps } from "@/app/layouts/AppSplit";
import { CardProgram } from "@/app/components/cards/CardProgram";

interface UserAuthSigninProps extends AppSplitProps {
    showEmail?: boolean;
    showPlatforms?: boolean;
    showSso?: boolean;
}

const Preview = () => {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center w-100 h-100">
        <CardProgram
          name="Impact Innovators"
          actions= {[
            { 
                title: "Join the program",
                metas: [
                    { label: "Applicants" },
                    { iconName: "account", label: "143", addClass: "font-weight-bold" },
                ],
                buttons: [
                    { label: "Join", type: "primary", link: "#" },
                    { label: "Learn more", type: "default", link: "#" },
                ],
            }
          ]}
          style={{ width: "100%", maxWidth: "32rem", }}
          cover="img/program-innovators.png"
        />
    </div>
  );
};

export const UserAuthSignin = (
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
    }:UserAuthSigninProps
) => {
    return (
        <Layout
            showNavbar={false}
            showShortcutbar={false}
        >
            <AppSplit cover={cover} video={video} theme={theme} positionX={positionX} positionY={positionY} boxed={boxed} shadow={shadow} rounded={rounded} preview={<Preview />}>

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
                
            </AppSplit>
        </Layout>
    );
};
