export interface ThemeProps {
    /**
     * Root css theme
     */
    themeName?: "Inject" | "Schoolab" | "Moho" | "Raiselab";
}

export const Theme = ({ themeName }: ThemeProps) => {
    return (
        <>
            {themeName === "Inject" && (
                <style>{`
                    @import url('https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

                   :root {
                        --bg-brand-hero: #1D1301;
                        --bg-brand-on-hero-highlight: rgba(255,255,255,.1);
                        --bg-brand-on-hero-active: #FFF;
                        --fg-brand-hero: #FFF;
                    }
            `}</style>
            )}
            {themeName === "Moho" && (
                <style>{`
                    @import"https://fonts.googleapis.com/css?family=Roboto+Mono:400,400i,700";
                    @font-face {
                        font-family: "Noe Display";
                        src: url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Black.eot");
                        src: url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Black.eot?#iefix") format("embedded-opentype"),url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Black.woff2") format("woff2"),url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Black.woff") format("woff"),url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Black.svg#NoeDisplay-Black") format("svg");
                        font-weight: 900;
                        font-style: normal;
                        font-display: swap
                    }

                    @font-face {
                        font-family: "Noe Display";
                        src: url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Bold.eot");
                        src: url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Bold.eot?#iefix") format("embedded-opentype"),url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Bold.woff2") format("woff2"),url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Bold.woff") format("woff"),url("https://www.moho.co/wp-content/themes/moho/fonts/NoeDisplay-Bold.svg#NoeDisplay-Bold") format("svg");
                        font-weight: bold;
                        font-style: normal;
                        font-display: swap
                    }

                    :root {
                        --bg-brand-hero: #1B197A;
                        --bg-brand-on-hero-highlight: rgba(255, 255, 255,.15);
                        --bg-brand-on-hero-active: #FFF;
                        --fg-brand-hero: #FFFFFF;

                        --bg-brand-primary: #ED6B5D;
                        --bg-brand-primary-hover: #E84230;
                        --bg-brand-primary-light: #FCEAE8;
                        --fg-brand-primary: #FFF;

                        --bg-brand-secondary: #477E56;
                        --bg-brand-secondary-hover: #355F41;
                        --bg-brand-secondary-light: #EFF6F1;
                        --fg-brand-secondary: #FFF;

                        --bg-brand-tertiary: #F7EC79;
                        --bg-brand-tertiary-hover: #E4D968;
                        --bg-brand-tertiary-light: #FDFAD8;
                        --fg-brand-tertiary: #111;

                        --bg-interactive: #ED6B5D;
                        --bg-interactive-hover: #E84230;
                        --fg-interactive: #FFFFFF;

                        --fg-card-interactive: #ED6B5D;
                        --fg-card-interactive-hover: #E84230;

                        --display-font-family: "Noe Display";
                        --display-font-weight: "Bold";
                        --paragraph-font-family: "Roboto Mono";
                    }

                    .landing-section .media {
                        border-radius: var(--radius-none);
                    }

                    .landing-section .card {
                        border-radius: var(--radius-none);
                    }

                    .landing-section .thumbnail,
                    .landing-section .thumbnail:after {
                        border-radius: var(--radius-none);
                    }
            `}</style>
            )}
            {themeName === "Schoolab" && (
                <style>{`
                    @font-face {
                        font-family: "GT America";
                        src: url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Regular.eot);
                        src: url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Regular.eot?#iefix) format("embedded-opentype"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Regular.woff2) format("woff2"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Regular.woff) format("woff"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Regular.svg#GTAmerica-Regular) format("svg");
                        font-weight: normal;
                        font-style: normal;
                        font-display: swap
                    }

                    @font-face {
                        font-family: "GT America";
                        src: url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Light.eot);
                        src: url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Light.eot?#iefix) format("embedded-opentype"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Light.woff2) format("woff2"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Light.woff) format("woff"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Light.svg#GTAmerica-Light) format("svg");
                        font-weight: 300;
                        font-style: normal;
                        font-display: swap
                    }

                    @font-face {
                        font-family: "GT America";
                        src: url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Medium.eot);
                        src: url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Medium.eot?#iefix) format("embedded-opentype"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Medium.woff2) format("woff2"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Medium.woff) format("woff"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Medium.svg#GTAmerica-Medium) format("svg");
                        font-weight: 500;
                        font-style: normal;
                        font-display: swap
                    }

                    @font-face {
                        font-family: "GT America";
                        src: url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Bold.eot);
                        src: url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Bold.eot?#iefix) format("embedded-opentype"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Bold.woff2) format("woff2"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Bold.woff) format("woff"),url(https://www.theschoolab.com/wp-content/themes/theschoolab/fonts/GTAmerica-Bold.svg#GTAmerica-Bold) format("svg");
                        font-weight: 700;
                        font-style: normal;
                        font-display: swap
                    }

                   :root {
                        --bg-brand-hero: #181B56;
                        --bg-brand-on-hero-highlight: rgba(255,255,255,.1);
                        --bg-brand-on-hero-active: #FFF;
                        --fg-brand-hero: #FFF;

                        --bg-brand-primary: #293F9B;
                        --bg-brand-primary-hover: #1E2E71;
                        --bg-brand-primary-light: #EBEEFA;
                        --fg-brand-primary: #FFF;

                        --bg-brand-secondary: #016851;
                        --bg-brand-secondary-hover: #01382B;
                        --bg-brand-secondary-light: #E5FFF9;
                        --fg-brand-secondary: #FFF;

                        --bg-brand-tertiary: #EF9CC3;
                        --bg-brand-tertiary-hover: #D87AA6;
                        --bg-brand-tertiary-light: #FDF2F7;
                        --fg-brand-tertiary: #111;

                        --bg-interactive: #4462E2;
                        --bg-interactive-hover: #2143D4;
                        --fg-interactive: #FFFFFF;

                        --fg-card-interactive: #4462E2;
                        --fg-card-interactive-hover: #2143D4;
                        
                        --display-font-family: "GT America";
                        // --display-font-weight: "700";
                        --display-font-stretch: ultra-expanded;
                        --paragraph-font-family: "GT America";
                    }

                    .landing-section .illustration-item {
                        border-radius: var(--radius-full);
                    }

                    .landing-section .illustration-item img {
                        border-radius: var(--radius-full);
                    }

                    .landing-section .team-item .thumbnail {
                        aspect-ratio: 1 / 2;
                    }

                    .landing-section .quote-item {
                        border: none;
                    }
            `}</style>
            )}
            {themeName === "Raiselab" && (
                <style>{`
                    @font-face {
                        font-family: 'Canela';
                        src: url('https://cdn.prod.website-files.com/65b38407b9116a925100865b/65cba4d2dbc5f61f0feffea1_Canela-Regular-Web.woff2') format('woff2');
                        font-weight: 400;
                        font-style: normal;
                        font-display: swap;
                    }

                    @font-face {
                        font-family: 'DM Sans';
                        src: url('https://cdn.prod.website-files.com/65b38407b9116a925100865b/65c3534fb00e0c3ea6d3b4b2_DMSans-SemiBold.ttf') format('truetype');
                        font-weight: 600;
                        font-style: normal;
                        font-display: swap;
                    }

                    @font-face {
                        font-family: 'DM Sans';
                        src: url('https://cdn.prod.website-files.com/65b38407b9116a925100865b/65c35344a8763ac5f8f41460_DMSans-Medium.ttf') format('truetype');
                        font-weight: 500;
                        font-style: normal;
                        font-display: swap;
                    }

                    @font-face {
                        font-family: 'DM Sans';
                        src: url('https://cdn.prod.website-files.com/65b38407b9116a925100865b/65c35344a5be818da6065e9e_DMSans-Regular.ttf') format('truetype');
                        font-weight: 400;
                        font-style: normal;
                        font-display: swap;
                    }

                    :root {
                        --bg-brand-hero: #B0C9C7;
                        --bg-brand-on-hero-highlight: rgba(0,0,0,.1);
                        --bg-brand-on-hero-active: #FFF;
                        --fg-brand-hero: #120B07;

                        --bg-brand-primary: #E5A97D;
                        --bg-brand-primary-hover: #DC8C51;
                        --bg-brand-primary-light: #F9EBE1;
                        --fg-brand-primary: #120B07;

                        --bg-brand-secondary: #7DA5A0;
                        --bg-brand-secondary-hover: #628E88;
                        --bg-brand-secondary-light: #F0F5F4;
                        --fg-brand-secondary: #120B07;

                        --bg-brand-tertiary: #E4CDCE;
                        --bg-brand-tertiary-hover: #D2ACAE;
                        --bg-brand-tertiary-light: #FAF5F5;
                        --fg-brand-tertiary: #120B07;

                        --bg-interactive: #70462D;
                        --bg-interactive-hover: #4C301F;
                        --fg-interactive: #FFFFFF;

                        --fg-card-interactive: #70462D;
                        --fg-card-interactive-hover: #4C301F;

                        --display-font-family: "Canela";
                        --display-font-weight: "Regular";
                        --paragraph-font-family: "DM Sans";
                    }

                    .landing-section .media:not(.gallery-item) {
                        background-color: unset;
                        background-image: linear-gradient(#ffffff0d, #fff3);
                        border-radius: 1.5rem;
                        box-shadow: inset 1px 1px #ffffffb3;
                        padding: 1rem;
                        margin: 0 -1rem;
                        width: calc(100% + 2rem);
                        min-width: calc(100% + 2rem);
                        max-width: calc(100% + 2rem);
                    }

                    .landing-section .media img {
                        border-radius: .5rem;
                    }

                    .landing-section .team-item .thumbnail {
                        aspect-ratio: 1 / 2;
                    }

                    .landing-section .quote-item {
                        border: none;
                    }
            `}</style>
            )}
        </>
    );
};
