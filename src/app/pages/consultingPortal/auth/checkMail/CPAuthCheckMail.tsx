import React from "react";
import { Layout } from "@/app/layouts/layout";
import { Button } from "@/app/components/buttons/Button";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { Theme } from "@/app/components/Theme";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { Logo } from "@/app/components/Logo";
import { AppSplit, AppSplitProps } from "@/app/layouts/AppSplit";

interface CPAuthCheckMail extends AppSplitProps {
    showEmail?: boolean;
    showPlatforms?: boolean;
    showSso?: boolean;
}

export const CPAuthCheckMail = (
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
    }:CPAuthCheckMail
) => {
    return (
        <Layout
            showNavbar={false}
            showShortcutbar={false}
        >
            <AppSplit cover={cover} video={video} theme="Schoolab" positionX={positionX} positionY={positionY} boxed={boxed} shadow={shadow} rounded={rounded}>

                <div className="d-flex flex-column gap-xl">
                
                    <div className="d-flex flex-column gap-md">
                        <h2 className="display-3 mb-md">Check your email</h2>
                       <p><strong>We've send you a temporary login link</strong>. Please check your inbox at email@eamil.com. <a href="#">Send me a code again</a>.</p>
                    </div>

                    <div className="d-flex flex-column gap-md">
                        
                       
                        
                        <form method="post" action="/signin" id="loginForm" className="d-flex flex-column">
                            <div className="form-row justify-content-center mb-md">
                                <FormGroup addClass="col-2 mb-xs" id="" required={true} srOnly={true}>
                                    <FormInput addClass="text-center" id="" required={true} placeholder="-" autofocus={true} />
                                </FormGroup>
                                <FormGroup addClass="col-2 mb-xs" id="" required={true} srOnly={true}>
                                    <FormInput addClass="text-center" id="" required={true} placeholder="-" />
                                </FormGroup>
                                <FormGroup addClass="col-2 mb-xs" id="" required={true} srOnly={true}>
                                    <FormInput addClass="text-center" id="" required={true} placeholder="-" />
                                </FormGroup>
                                <FormGroup addClass="col-2 mb-xs" id="" required={true} srOnly={true}>
                                    <FormInput addClass="text-center" id="" required={true} placeholder="-" />
                                </FormGroup>
                                <FormGroup addClass="col-2 mb-xs" id="" required={true} srOnly={true}>
                                    <FormInput addClass="text-center" id="" required={true} placeholder="-" />
                                </FormGroup>
                            </div>
               
                            <Button disabled={true} type="primary" label="Continue" extended={true} />
                        </form>
                    </div>
            
                    <p className="small text-muted mt-8 mb-8">
                        <a href="#">← Back to login</a>.
                    </p>
                    
                    
                </div>
                
            </AppSplit>
        </Layout>
    );
};
