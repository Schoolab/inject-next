import React, { CSSProperties, useEffect } from "react";
import { updateLogo } from "../../../public/utils/updateLogo";

export interface LogoProps {
    alt: string;
    logoThemeDefault: string;
    logoThemeLight: string;
    logoThemeDark: string;
    logoStyle?: CSSProperties;
    addClass?: string;
    style?: CSSProperties;
}

export const Logo = ({ alt, logoThemeDefault, logoThemeLight, logoThemeDark, logoStyle, addClass, style, ...props }: LogoProps) => {
  let classTab = ["logo"];
  addClass && classTab.push(addClass);

  useEffect(() => {
    updateLogo();
}, []);

  return (
    <picture className={classTab.join(" ")} {...props}>
        <img src={logoThemeDefault} style={logoStyle} alt={alt} data-theme-dark={logoThemeDark} data-theme-light={logoThemeLight} />
    </picture>
  );
};
