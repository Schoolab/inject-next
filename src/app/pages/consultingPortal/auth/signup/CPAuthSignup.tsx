import React from "react";
import { Layout } from "@/app/layouts/layout";
import { Button } from "@/app/components/buttons/Button";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { Theme } from "@/app/components/Theme";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { Logo } from "@/app/components/Logo";
import { AppSplit, AppSplitProps } from "@/app/layouts/AppSplit";

interface CPAuthSignup extends AppSplitProps {
    showEmail?: boolean;
    showPlatforms?: boolean;
    showSso?: boolean;
}

export const CPAuthSignup = (
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
    }:CPAuthSignup
) => {
    return (
        <Layout
            showNavbar={false}
            showShortcutbar={false}
        >
            <AppSplit cover={cover} video={video} theme="default" positionX={positionX} positionY={positionY} boxed={boxed} shadow={shadow} rounded={rounded}>

                <div className="d-flex flex-column gap-xl">
                
                    <div className="d-flex flex-column gap-md">
                        <h2 className="display-3 mb-md">Create your account</h2>
                       
                    </div>

                    <div className="d-flex flex-column gap-md">
                        
                       
                        
                        <form method="post" action="/signin" id="loginForm" className="d-flex flex-column">
                            <div className="form-row">
                                <FormGroup addClass="col-6 mb-xs" id="first-name" required={true} label="First Name" srOnly={true}>
                                    <FormInput id="first-name" required={true} placeholder="First Name" autofocus={true} />
                                </FormGroup>

                                <FormGroup addClass="col-6 mb-xs" id="last-name" required={true} label="Last Name" srOnly={true}>
                                    <FormInput id="last-name" required={true} placeholder="Last Name" />
                                </FormGroup>
                            </div>
               
                            <FormGroup addClass="mb-xs" id="email" label="Email address" srOnly={true} required={true}>
                                <FormInput id="email" type="email" placeholder="Email address" />
                            </FormGroup>
                            <FormGroup addClass="mb-xs" id="password" label="Password" srOnly={true} required={true}>
                                <FormInput id="password" type="password" placeholder="Password" />
                            </FormGroup>
                            <Button type="primary" label="Continue" extended={true} />
                        </form>
                    </div>

                   

                    <p className="smaller text-muted mt-8 mb-8">
                        By clicking on "Join" above, you acknowledge that you have read and understood, and agree to <a href="/terms-and-conditions">Terms & Conditions</a> and <a href="/privacy-policy">Privacy Policy</a>.
                    </p>
                    <p className="small text-muted mt-8 mb-8">
                        <a href="#">← Back to login</a>.
                    </p>
                    
                    
                </div>
                
            </AppSplit>
        </Layout>
    );
};
