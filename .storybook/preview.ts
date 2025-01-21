import type { Preview } from "@storybook/react";
import { themes } from '@storybook/theming';

import "../public/utils/nestedDropdown.js";

import "../public/styles/styles.css";
import './docs.css'; 

// Fonction pour détecter le thème du système
function detectSystemTheme() {
  if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('theme-dark');
  } else {
    document.documentElement.classList.add('theme-light');
  }
}

// Appliquer le thème au chargement de la page
detectSystemTheme(); 

// Écouter les changements de thème du système
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (event) => {
  if (event.matches) {
    document.documentElement.classList.remove('theme-light');
    document.documentElement.classList.add('theme-dark');
  } else {
    document.documentElement.classList.remove('theme-dark');
    document.documentElement.classList.add('theme-light');
  }
});

const preview: Preview = {
  parameters: {
    darkMode: {
      dark: { ...themes.dark, appBg: '#171717', appPreviewBg: "#0D0D0D" },
      light: { ...themes.normal, appBg: '#FFFFFF', appPreviewBg: "#FFFFFF" },
      darkClass: 'theme-dark',
      lightClass: 'theme-light',
      current: 'auto',
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
