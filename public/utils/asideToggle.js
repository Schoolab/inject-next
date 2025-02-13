export const asideToggle = () => {
    const toggleButtons = document.querySelectorAll('[data-toggle="aside"]');
    const dismissButtons = document.querySelectorAll('[data-dismiss="aside"]');

    toggleButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = button.getAttribute("data-target");
            const tabId = button.getAttribute("data-tab");
            const asideElement = document.querySelector(targetId);

            if (asideElement) {
                const isAsideHidden = asideElement.classList.contains("d-none");

                // Si l'aside est caché ou si le bouton n'a pas de data-tab, on gère l'ouverture/fermeture
                if (isAsideHidden || !tabId) {
                    // Fermer les autres asides
                    const allAsides = document.querySelectorAll('.application-aside');
                    allAsides.forEach(aside => {
                        if (aside !== asideElement) {
                            aside.classList.add("d-none");
                            const relatedButtons = document.querySelectorAll(`[data-toggle="aside"][data-target="#${aside.id}"]`);
                            relatedButtons.forEach(btn => btn.classList.remove("active"));
                        }
                    });

                    // Ouvrir cet aside s'il était caché
                    if (isAsideHidden) {
                        asideElement.classList.remove("d-none");
                    }
                }

                // Gérer l'état actif des boutons et le changement de tab
                if (tabId) {
                    // Désactiver tous les boutons de tab pour cet aside
                    const allTabButtons = document.querySelectorAll(`[data-toggle="aside"][data-target="${targetId}"]`);
                    allTabButtons.forEach(btn => btn.classList.remove("active"));
                    
                    // Activer le bouton courant
                    button.classList.add("active");

                    // Mettre à jour les tabs dans le header de l'aside
                    const asideTabs = asideElement.querySelectorAll('.aside-header [role="tab"]');
                    asideTabs.forEach(tab => {
                        const isSelected = tab.getAttribute('data-tab') === tabId + '-tab';
                        tab.setAttribute('aria-selected', isSelected.toString());
                        tab.classList.toggle('active', isSelected);
                    });

                    // Émettre l'événement de changement de tab
                    const tabChangeEvent = new CustomEvent('aside-tab-change', {
                        detail: { tab: tabId }
                    });
                    window.dispatchEvent(tabChangeEvent);
                } else {
                    // Pour les boutons sans tab, basculer simplement la classe active
                    button.classList.toggle("active", !isAsideHidden);
                }
            }
        });
    });

    dismissButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const asideElement = button.closest('aside');
            if (asideElement) {
                asideElement.classList.add("d-none");

                // Désactiver tous les boutons associés à cet aside
                const toggleButtons = document.querySelectorAll(`[data-toggle="aside"][data-target="#${asideElement.id}"]`);
                toggleButtons.forEach(btn => btn.classList.remove("active"));
            }
        });
    });
};
