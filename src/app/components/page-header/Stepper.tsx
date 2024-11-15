import React from "react";
import { Button } from "../Button";

export interface StepperProps {}

export const Stepper = ({}: StepperProps) => {
    return (
        <div className="position-sticky top-0 border-bottom z-3 bg-white">
            <div className="container-lg container-lg-fluid px-sm px-md-md px-lg-xl">
                <div className="item is-static resource">
                    <div className="item-row align-items-center">
                        <div className="mr-5 d-flex flex-fill">
                            <div className="item-icon is-darker icon icon-information" />
                            <div className="item-content ml-3">
                                <div  className="mb-none item-title stretched-link">
                                    Complete the basic info
                                </div>
                                <span className="small text-muted">Review key details: program name, description, dates, visibility</span>
                            </div>
                        </div>
                        
                    
                        <Button type="default" label="Done"  size="sm" data-toggle="tooltip" addClass="z-2"/>
                        <Button type="default" iconStartName="lifebuoy"  size="sm" data-toggle="tooltip" addClass="z-2" data-original-title="Help Center" />
                        <Button type="default" iconStartName="chevron-left"  size="sm" data-toggle="tooltip" addClass="z-2" data-original-title="Previous" />
                        <Button type="default" iconStartName="chevron-right" size="sm" data-toggle="tooltip" addClass="z-2" data-original-title="Next" />

                    </div>
                </div>
            </div>
        </div>
    );
};
