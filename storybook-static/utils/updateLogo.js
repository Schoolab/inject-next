export const updateLogo = () => {
    function updateLogo() {
        console.log('updateLogo');
        const html = document.documentElement;
        const body = document.body;
        const imgElement = document.querySelector('.logo img');
    
        let isDarkMode;
    
        if (html.classList.contains('theme-dark')) {
            isDarkMode = true;
        } else if (html.classList.contains('theme-light')) {
            isDarkMode = false;
        } else if (body.classList.contains('theme-dark')) {
            isDarkMode = true;
        } else if (body.classList.contains('theme-light')) {
            isDarkMode = false;
        } else {
            isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        }
  
        const newSrc = isDarkMode ? imgElement.dataset.themeDark : imgElement.dataset.themeLight;
  
        if (newSrc) { // Check if data attributes are defined
            imgElement.src = newSrc;
        }
  
        // body.classList.toggle('theme-dark', isDarkMode);
        // body.classList.toggle('theme-light', !isDarkMode);
    
    }
    
    updateLogo();

    const observer = new MutationObserver(updateLogo);
    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    const htmlObserver = new MutationObserver(updateLogo);
    htmlObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
};