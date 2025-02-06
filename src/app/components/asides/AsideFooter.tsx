import React, { CSSProperties } from "react";
import { Button } from "@/app/components/Button";
import { Dropdown } from "../dropdown/Dropdown";
import { DropdownMenu } from "../dropdown/DropdownMenu";
import { DropdownItem } from "../dropdown/DropdownItem";
import { DropdownDivider } from "../dropdown/DropdownDivider";

type OptionType = {
  label?: string;
  link?: string;
  iconName?: string;
  newTab?: boolean;
  separator?: boolean;
  type?: "interactive" | "danger" | "ai";
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
}

interface AsideFooterProps {
    options?: OptionType[];
    addClass?: string;
    style?: CSSProperties;
}

export const AsideFooter = ({
    options = [],
    addClass,
    style,
    ...props
}: AsideFooterProps) => {
    let classTab = ["aside-footer"];
    addClass && classTab.push(addClass);

    return (
        <footer className={classTab.join(" ")} style={style} {...props}>
          { options && options.length > 1 && (
            <Dropdown>
              <Button type="default" hasDropdown={true} label="Options" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" />
              <DropdownMenu>
                {options?.map((option, index) => 
                  option.separator ? (
                    <DropdownDivider key={index} />
                  ) : (
                    <DropdownItem 
                      key={index}
                      label={option.label || "No label"} 
                      newTab={option.newTab} 
                      iconName={option.iconName}
                      onClick={option.onClick} 
                      type={option.type}
                    />
                  )
                )}
              </DropdownMenu>
            </Dropdown>
          )}
          { options && options.length === 1 && (
            <Button
              type="default"
              label={options[0].label || "No label"}
              link={options[0].link}
              iconEndName={options[0].newTab ? "new-tab" : undefined}
              iconStartName={options[0].iconName}
            />
          ) }
          <div className="d-flex gap-xs ml-auto">
            <Button
              label="Discard changes"
              type="default"
            />
            <Button
              label="Save"
              type="primary"
            />
          </div>
        </footer>
    );
};