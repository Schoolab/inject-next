import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

import "../public/styles/styles.css";
import './docs.css'; 

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#171717', appPreviewBg: "#0D0D0D" },
      light: { ...themes.normal, appBg: '#FFFFFF', appPreviewBg: "#FFFFFF" },
      darkClass: 'theme-dark',
      lightClass: 'theme-light',
      current: 'light',
      stylePreview: true,
      classTarget: 'html',
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    }, 
    html: {
      prettier: {
        tabWidth: 4,
        printWidth: 250,
        useTabs: false,
        singleAttributePerLine: false,
        htmlWhitespaceSensitivity: "ignore",
      },
    },
    
  },
};

export default preview;
