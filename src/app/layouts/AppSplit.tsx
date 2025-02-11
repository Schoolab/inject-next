import React, { CSSProperties } from "react";
import { Theme } from "../components/Theme";

export interface AppSplitProps {
  theme: "default" | "Inject" | "Schoolab" | "Moho" | "Raiselab";
  showEmail?: boolean;
  showPlatforms?: boolean;
  showSso?: boolean;
  positionX?: "none" | "left" | "center" | "right";
  positionY?: "none" | "top" | "middle" | "bottom";
  boxed?: boolean;
  shadow?: boolean;
  rounded?: boolean;
  cover?: string;
  video?: string;
  children: React.ReactNode;
  addClass?: string;
  style?: CSSProperties;
}

export const AppSplit = ({ children, cover, video, theme, positionX, positionY, boxed, shadow, rounded, addClass, style, ...props }: AppSplitProps) => {
  let appContentClass = ["application-content p-0"];
  addClass && appContentClass.push(addClass);

  let splitedContainerClass = ["splited-container"];

  let splitedContentClass = ["splited-content splited-content-large gap-3xl"];
  positionX && splitedContentClass.push(`is-${positionX}`);
  positionY && splitedContentClass.push(`is-${positionY}`);
  boxed && splitedContentClass.push("is-boxed");
  shadow && splitedContentClass.push("is-shadowed");
  rounded && splitedContentClass.push("is-rounded");

  return (
    <main className={appContentClass.join(" ")} style={style} {...props}>
      {theme && theme !== "default" && <Theme themeName={theme} />}
      <div className={splitedContainerClass.join(" ")}>

        <div className={splitedContentClass.join(" ")}>
          {children}
        </div>

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

