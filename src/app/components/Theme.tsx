export interface ThemeProps {
    /**
     * Root css theme
     */
    themeName?: "Schoolab" | "Moho" | "Raiselab";
}

export const Theme = ({ themeName }: ThemeProps) => {
    return (
        <>
            {themeName === "Moho" && (
                <style>{`
                    :root {
                        --bg-brand-hero: #1B197A;
                        --bg-brand-on-hero-highlight: rgba(255, 255, 255,.15);
                        --bg-brand-on-hero-active: #FFF;
                        --fg-brand-hero: #FFFFFF;
                        --bg-interactive: #ED6B5D;
                        --bg-interactive-hover: #E84230;
                        --fg-interactive: #FFFFFF;
                        --fg-card-interactive: #ED6B5D;
                        --fg-card-interactive-hover: #E84230;
                    }
            `}</style>
            )}
            {themeName === "Schoolab" && (
                <style>{`
                   :root {
                        --bg-brand-hero: #181B56;
                        --bg-brand-on-hero-highlight: rgba(255,255,255,.1);
                        --bg-brand-on-hero-active: #FFF;
                        --fg-brand-hero: #FFF;
                        --bg-interactive: #4462E2;
                        --bg-interactive-hover: #2143D4;
                        --fg-interactive: #FFFFFF;
                        --fg-card-interactive: #4462E2;
                        --fg-card-interactive-hover: #2143D4;
                    }
            `}</style>
            )}
            {themeName === "Raiselab" && (
                <style>{`
                    :root {
                        --bg-brand-hero: #B0C9C7;
                        --bg-brand-on-hero-highlight: rgba(0,0,0,.1);
                        --bg-brand-on-hero-active: #FFF;
                        --fg-brand-hero: #120B07;
                        --bg-interactive: #70462D;
                        --bg-interactive-hover: #4C301F;
                        --fg-interactive: #FFFFFF;
                        --fg-card-interactive: #70462D;
                        --fg-card-interactive-hover: #4C301F;
                    }
            `}</style>
            )}
        </>
    );
};
