import React, { CSSProperties } from "react";
import { Theme } from "@/app/components/Theme";
import { Placeholder } from "@/app/content/Placeholder";
import { Logo } from "@/app/components/Logo";

export interface AppSplitProps {
  theme?: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
  logo?: boolean;
  positionX?: "none" | "left" | "center" | "right";
  positionY?: "none" | "top" | "middle" | "bottom";
  boxed?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  cover?: string;
  video?: string;
  preview?: React.ReactNode;
  children?: React.ReactNode;
  addClass?: string;
  style?: CSSProperties;
}

export const AppSplit = ({ children, preview, cover, video, theme = "default", logo = true, positionX = "none", positionY = "none", boxed = false, shadow = false, rounded = false, addClass, style, ...props }: AppSplitProps) => {
  let appContentClass = ["application-content p-0"];

  let splitedContainerClass = ["splited-container"];

  let splitedContentClass = ["splited-content splited-content-large gap-3xl"];
  positionX && splitedContentClass.push(`is-${positionX}`);
  positionY && splitedContentClass.push(`is-${positionY}`);
  boxed && splitedContentClass.push("is-boxed");
  shadow && splitedContentClass.push("is-shadowed");
  rounded && splitedContentClass.push("is-rounded");
  addClass && splitedContentClass.push(addClass);

  let logoUrl = "img/inject-logo-dark.svg";
  let logoDarkUrl = "img/inject-logo-dark.svg";
  let logoLightUrl = "img/inject-logo-light.svg";

  switch (theme) {
      case "Schoolab":
          logoUrl = "img/schoolab-logo-dark.svg";
          logoDarkUrl = "img/schoolab-logo-dark.svg";
          logoLightUrl = "img/schoolab-logo-light.svg";
          break;
      case "Moho":
          logoUrl = "img/moho-logo-dark.svg";
          logoDarkUrl = "img/moho-logo-dark.svg";
          logoLightUrl = "img/moho-logo-light.svg";
          break;
      case "Raiselab":
          logoUrl = "img/raiselab-logo-dark.svg";
          logoDarkUrl = "img/raiselab-logo-dark.svg";
          logoLightUrl = "img/raiselab-logo-light.svg";
          break;
      case "Inject":
          logoUrl = "img/inject-logo-dark.svg";
          logoDarkUrl = "img/inject-logo-dark.svg";
          logoLightUrl = "img/inject-logo-light.svg";
          break;
      case "default":
          logoUrl = "img/inject-logo-dark.svg";
          logoDarkUrl = "img/inject-logo-dark.svg";
          logoLightUrl = "img/inject-logo-light.svg";
          break;
      default:
          logoUrl = "img/inject-logo-dark.svg";
          logoDarkUrl = "img/inject-logo-dark.svg";
          logoLightUrl = "img/inject-logo-light.svg";
          break;
  }

  return (
    <main className={appContentClass.join(" ")} style={style} {...props}>
      {theme && theme !== "default" && <Theme themeName={theme} />}
      <div className={splitedContainerClass.join(" ")}>

        <div className={splitedContentClass.join(" ")}>

            {logo && <nav className="navbar">
                <div className="container-fluid p-0">
                    <a className="m-0" href="#">
                        <Logo alt={theme} logoThemeDefault={logoUrl} logoThemeLight={logoDarkUrl} logoThemeDark={logoLightUrl} logoStyle={{ maxWidth: 150, maxHeight: 40 }} />
                    </a>
                </div>
            </nav>}

            {children ? 
              children : 
              <div className="d-flex flex-column gap-2xl">
                <div className="d-flex flex-column gap-md">
                <Placeholder width="75%" height="40px" />
                  <div className="d-flex flex-column gap-xs">
                    <Placeholder height="20px" />
                    <Placeholder width="50%" height="20px" />
                  </div>
                </div>
                <div className="d-flex flex-column gap-xs">
                  <Placeholder />
                  <Placeholder />
                </div>
                <Placeholder />
              </div>
            }

        </div>

        { preview && 
          <div className="splited-cover bg-highlight">
            {preview}
          </div>
        }

        { cover && 
          <div className="splited-cover">
            <img src={cover} />
          </div>
        }

        { video && 
          <div className="splited-cover">
            <video poster={cover} autoPlay playsInline muted loop style={{visibility: "inherit", opacity: "1"}}>
              <source src={video} type="video/mp4" />
            </video>
          </div>
        }

      </div>
    </main>
  );
};

