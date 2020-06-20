import React from "react";
import styledNormalize from "styled-normalize";
import { createGlobalStyle } from "styled-components";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";
import {
  faCabinetFiling,
  faFolder,
  faFolders,
} from "@fortawesome/pro-solid-svg-icons";
import { faPlusCircle } from "@fortawesome/pro-light-svg-icons";
library.add(fas, faCabinetFiling, faFolder, faFolders, faPlusCircle);

export const GlobalStyle = createGlobalStyle`
  ${styledNormalize}
  
  html {
    box-sizing: border-box;
  }
  
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body,
  html {
    overflow: hidden; // prevent rubber-banding effect
  }

  body {
    margin: 0;
    background: #F4F4F6;
    color: #505763;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: "Inter", sans-serif;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

  a {
    color: #007bff;
  }

  a:hover {
    text-decoration: underline;
  }

  a:visited {
    color: #007bff;
  }
`;

export const size = {
  sm: "400px",
  md: "600px",
  lg: "800px",
  xl: "1000px",
};

export const color = {
  brand_orange: "#FF5C00",
  brand_blue: "#28629B",
  text: "#505763",
  link: "#505763",
  link_hover: "#505763",
  shade_100: "#FFFFFF",
  shade_200: "#F8FAFC",
  shade_300: "#F1F5F8",
  shade_400: "#DAE1E7",
  shade_500: "#B8C2CC",
  shade_600: "#8795A1",
  shade_700: "#606F7B",
  shade_800: "#3D4852",
  shade_900: "#22292F",
};

export const shadow = {
  low: "0px 1px 2px rgba(0,0,0,0.06), 0px 1px 3px rgba(0,0,0,0.1);",
};

// Icon Set via FontAwesome https://fontawesome.com/icons?d=gallery
export const icon = {
  cabinet: <FontAwesomeIcon icon={"cabinet-filing"} />,
  profile: <FontAwesomeIcon icon={"user"} />,
  add: <FontAwesomeIcon icon={"plus"} />,
  key: <FontAwesomeIcon icon={"key"} />,
  file: <FontAwesomeIcon icon={"file"} />,
  files: <FontAwesomeIcon icon={"copy"} />,
  folder: <FontAwesomeIcon icon={"folder"} />,
  folders: <FontAwesomeIcon icon={"folders"} />,
  chevron_left: <FontAwesomeIcon icon={"chevron-left"} />,
  caret_down: <FontAwesomeIcon icon={"caret-down"} />,
  check: <FontAwesomeIcon icon={"check"} />,
  times: <FontAwesomeIcon icon={"times"} />,
};
