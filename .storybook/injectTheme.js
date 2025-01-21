import { create } from '@storybook/theming/create';
 
export default create({
    // base: 'light',

    // Typography
    // fontBase: '"Inter", sans-serif',
    // fontCode: '"IBM Plex Mono", monospace',

    // Brand
    brandTitle: 'Schoolab',
    brandUrl: 'https://www.theschoolab.com/',
    brandImage: 'https://www.theschoolab.com/wp-content/uploads/2022/03/logo-couleur.png',
    brandTarget: '_self',

    colorPrimary: 'hsla(214 95% 58% / 100%)',
    colorSecondary: 'hsla(155 100% 35% / 100%)',

    // UI
    appBg: '#ffffff',
    appContentBg: '#ffffff',
    appPreviewBg: '#ffffff',
    appBorderColor: '#585C6D',
    appBorderRadius: 4,
});