import React from "react";
import { Layout } from "@/app/layouts/layout";
import { useEffect } from "react";
import { Button } from "@/app/components/buttons/Button";
import { FormGroup } from "@/app/forms/group/FormGroup";
import { FormInput } from "@/app/forms/input/FormInput";
import { Theme } from "@/app/components/Theme";
import { FormSelect } from "@/app/forms/select/FormSelect";
import { Logo } from "@/app/components/Logo";
import { AppSplit, AppSplitProps } from "@/app/layouts/AppSplit";
import { otp } from "../../../../../../public/utils/otp";

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
        imgTextTitle,
        imgText,
        video,
        theme = "default",
        positionX,
        positionY,
        boxed,
        shadow,
        rounded,
    }:CPAuthCheckMail
) => {
        useEffect(() => {
            otp();
        }, []);


    return (
        <Layout
            showNavbar={false}
            showShortcutbar={false}
        >
            <AppSplit cover={cover} imgTextTitle={imgTextTitle}  imgText={imgText}  video={video} theme="default" positionX={positionX} positionY={positionY} boxed={boxed} shadow={shadow} rounded={rounded}>

                <div className="d-flex flex-column gap-xl">
                
                    <div className="d-flex flex-column gap-md">
                        <h2 className="display-3 mb-md">Check your email</h2>
                       <p><strong>We've send you a temporary login link</strong>. Please check your inbox at email@eamil.com. <a href="#">Send me a code again</a>.</p>
                    </div>

                    <div className="d-flex flex-column gap-md">
                      
                        <form  className="d-flex flex-column otp-form ">
                            <div className="form-row justify-content-center mb-md gap-xs">
                                <FormInput addClass="col-2 text-center otp-field" maxLength={1} id="" placeholder="-" autofocus={true} />
                                <FormInput addClass="col-2 text-center otp-field" maxLength={1} id="" placeholder="-" autofocus={true} />
                                <FormInput addClass="col-2 text-center otp-field" maxLength={1} id="" placeholder="-" autofocus={true} />
                                <FormInput addClass="col-2 text-center otp-field" maxLength={1} id="" placeholder="-" autofocus={true} />
                                <FormInput addClass="col-2 text-center otp-field" maxLength={1} id="" placeholder="-" autofocus={true} />
                             
                                <FormInput type="hidden" addClass="otp-value" id="" required={true} placeholder="-" />
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
