import React, { CSSProperties } from "react";
import { ProgressBar } from "@/app/components/progress/bar/ProgressBar";
import { Icon } from "@/app/components/icons/Icon";

export interface StepType {
  title: string;
  description: string;
  status: "completed" | "in-progress" | "not-completed";
  current?: boolean;
  link?: string;
}

export interface StepperProps {
  steps: StepType[];
  addClass?: string;
  style?: CSSProperties;
}

export const Stepper = (
  {
    steps,
    addClass,
    style,
    ...props
  }: StepperProps) => {
  let classTab = ["stepper cq row-gap-md"];
  addClass && classTab.push(addClass);
  console.log(steps.length);
  let classStepper = ["stepper-item cq-xs-6"];
  let ratio = 12/(steps.length);
  classStepper.push(`cq-sm-${ratio}`);
  
  return (
    
    <div className={classTab.join(" ")} style={style} {...props}>
      {steps.map((step, index) => (
        <div className={classStepper.join(" ")} key={index}>

          <ProgressBar percentage={step.status === "completed" ? 100 : step.status === "in-progress" ? 50 : 0} addClass="mb-xs" />

          {step.current && (
            <div className="d-flex flex-column">
              <span className="d-flex align-items-center gap-2xs text-reset text-decoration-none font-weight-bold">
                <span>{step.title}</span>
              </span>
              <span className="small text-muted">
                  {step.status === "completed" ? "Completed" : step.status === "in-progress" ? "In progress" : "Not completed"}
              </span>
            </div>
          )}

          {!step.current && (
            <div className="d-flex flex-column">
              {step.link ? (
                <a href={step.link} className="d-flex align-items-center gap-2xs text-reset text-decoration-none">
                  {step.status === "completed" && <Icon size="xs" name="check-circle" addClass="text-primary" />}
                  <span>{step.title}</span>
                </a>
              ) : (
                <span className="d-flex align-items-center gap-2xs text-reset text-decoration-none">
                  {step.status === "completed" && <Icon size="xs" name="check-circle" addClass="text-primary" />}
                  <span>{step.title}</span>
                </span>
              )}
              <span className="small text-muted">
                  {step.status === "completed" ? "Completed" : step.status === "in-progress" ? "In progress" : "Not completed"}
              </span>
            </div>
          )}
          
        </div>
      ))}
    </div>
  );
};

