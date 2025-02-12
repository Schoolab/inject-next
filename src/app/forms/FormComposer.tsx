import React, { CSSProperties } from "react";
import { Button } from "@/app/components/Button";

interface FormComposerProps {
  defaultValue?: string;
  placeholder?: string;
  required?: boolean;
  disabled?: boolean;
  autofocus?: boolean;
  rows?: number;
  fieldSizing?: boolean;
  disabledButton?: boolean;
  addClass?: string;
  style?: CSSProperties;
  children?: React.ReactNode;
}

export const FormComposer = ({ defaultValue, placeholder = "Write a message…", required, disabled, autofocus, rows, fieldSizing = true, disabledButton, children, addClass, style, ...props }: FormComposerProps) => {
  let classTab = ["w-100 message-composer is-sticky mt-auto"];
  addClass && classTab.push(addClass);

  let classInput = ["message-composer-input form-control"];
  fieldSizing && classInput.push("field-sizing")

    return (
      <div className={classTab.join(" ")} style={style} {...props}>
        <div className="w-100 message-composer-row">

          {children}

          <textarea 
            defaultValue={defaultValue}
            className="message-composer-input form-control"
            id="message_light_body"
            name="message_light[body]"
            required={required}
            disabled={disabled}
            placeholder={placeholder}
            autoFocus={autofocus}
            autoComplete="off"
            rows={rows}
          />

          <Button addClass="btn-icon message-composer-action" type="transparent" iconStartName="send" disabled={disabledButton} />

        </div>
    </div>
    );
}