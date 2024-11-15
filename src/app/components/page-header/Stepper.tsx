import React from "react";
import { Button } from "../Button";

export interface StepperProps {}

export const Stepper = ({}: StepperProps) => {
    return (
        <div className="alert-warning position-sticky top-0 z-3 border-bottom">
            <div className="container-lg container-lg-fluid px-sm px-md-md px-lg-xl">
                <div className="item is-static resource">
                    <div className="alert-warning item-row align-items-center gap-xs">
                        <div className="mr-5 d-flex flex-fill">
                            <div className="item-icon is-darker icon icon-information alert-warning" />
                            <div className="item-content ml-3">
                                <h4  className="mb-none alert-warning">
                                    Complete the basic info
                                </h4>
                                <span className="small alert-warning">Review key details: program name, description, dates, visibility. <a className="alert-link" href="#">Support center.</a></span>
                            </div>
                        </div>
                        
                        
                            <button className="z-2 btn btn-lg  btn-sm btn-default " data-toggle="tooltip" data-original-title="Mark as completed">
                                <svg className="progress-circle-container is-small flex-shrink-0 " viewBox="0 0 32 32" data-percent={0} style={{ ["--percent" as any]: 0, height:"1rem", width:"1rem"  }}>
                                    <circle className=" bg-white" />
                                    <circle className="progress-circle progress-circle-bg " style={{stroke:"#6F6F6F"}} />
                                    <circle className="progress-circle progress-circle-percent" />
                                    <path className="progress-circle-icon is-checked" d="M21.128 9.5L13.948 16.724L10.872 13.624L8 16.52L13.948 22.5L24 12.386L21.128 9.5Z" />
                                </svg>
                            </button>
                            <Button type="default" iconStartName="chevron-left"  size="sm" data-toggle="tooltip" addClass="z-2 bg-none" data-original-title="Previous" />
                            <Button type="default" iconStartName="chevron-right" size="sm" data-toggle="tooltip" addClass="z-2" data-original-title="Next" />
                     
                    
                   

                    </div>
                </div>
            </div>
        </div>
    );
};
