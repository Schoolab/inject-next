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

export const CPAuthLogin = (
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
    }:CPAuthLoginProps
) => {
    return (
        <Layout
            showNavbar={false}
            showShortcutbar={false}
        >
            <AppSplit cover={cover} video={video} theme="default" positionX={positionX} positionY={positionY} boxed={boxed} shadow={shadow} rounded={rounded}>

                <div className="d-flex flex-column gap-xl">
                
                    <div className="d-flex flex-column gap-md">
                        <h2 className="display-3 mb-md">Access the consulting portal</h2>
                        <p>Enjoy a secure and personalized experience within <strong>Semmaris Holding – Impact Innovator</strong>.</p>
                       
                    </div>

                    <div className="d-flex flex-column gap-md">
                        
                       
                        
                        <form method="post" action="/signin" id="loginForm" className="d-flex flex-column">
               
                            <FormGroup addClass="mb-md" id="email" label="Email address" srOnly={true} required={true}>
                                <FormInput id="email" type="email" placeholder="Enter your Email address" />
                            </FormGroup>
                    
                            <Button type="primary" label="Continue" extended={true} />
                        </form>
                    </div>

                   

                    <p className="small text-muted mt-8 mb-8">
                        Have an account? <a href="#">Sign in</a>.
                    </p>
                    
                </div>
                
            </AppSplit>
        </Layout>
    );
};
