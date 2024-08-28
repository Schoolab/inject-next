import type { Preview } from "@storybook/react";
import "../public/styles/styles.css";

const preview: Preview = {
  parameters: {
    
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
