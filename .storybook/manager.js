import { addons } from '@storybook/manager-api';
import injectTheme from './injectTheme';
 
addons.setConfig({
  theme: injectTheme,
});