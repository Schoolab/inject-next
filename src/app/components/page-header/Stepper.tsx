import React from "react";
import { Button } from "@/app/components/buttons/Button";
import { Progress } from "@/app/components/progress/Progress";

export interface StepperProps {}

export const Stepper = ({}: StepperProps) => {
    return (
        <div className="application-post-it">
            <div className="container-lg container-lg-fluid px-sm px-md-md px-lg-xl">
                <div className="item is-static resource">
                    <div className="item-row  gap-xs">
                        <div className="mr-5 d-flex flex-fill">
                            <div className="item-icon is-darker icon icon-information " />
                            <div className="item-content ml-3">
                                <h4 className="mb-none ">Complete the basic info</h4>
                                <span className="small text-body line-clamp-2">
                                    Review key details: program name, description, dates, visibility.{" "}
                                    <a className="text-body font-weight-bold" href="#">
                                        Support center.
                                    </a>
                                </span>
                            </div>
                        </div>

                        <Button type="default" size="sm" addClass="z-2" >
                            <Progress percentage={0} size="sm" style={{width:"1rem", height: "1rem"}} />
                            <span className="d-none d-lg-inline">Mark as completed</span>
                        </Button>
                        <Button type="default" iconStartName="chevron-left" size="sm" data-toggle="tooltip" addClass="z-2 bg-none" data-original-title="Previous" />
                        <Button type="default" iconStartName="chevron-right" size="sm" data-toggle="tooltip" addClass="z-2" data-original-title="Next" />
                    </div>
                </div>
            </div>
        </div>
    );
};
