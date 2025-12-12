export const groupCheckbox = () => {
    $(function () { 
        // Fonction pour mettre à jour le compteur et l'état intermédiaire
        function updateGroup(group) {
            const mainCheckbox = group.querySelector(".checkbox-main");
            const childCheckboxes = group.querySelectorAll(".checkbox-child");
            const countDisplay = group.querySelector(".checkbox-count");

            const checkedCount = [...childCheckboxes].filter(c => c.checked).length;

            // Mise à jour du compteur
            countDisplay.textContent = checkedCount;

            // Gestion de l'état de la checkbox principale
            if (checkedCount === 0) {
                mainCheckbox.checked = false;
                mainCheckbox.indeterminate = false;
            } else if (checkedCount === childCheckboxes.length) {
                mainCheckbox.checked = true;
                mainCheckbox.indeterminate = false;
            } else {
                mainCheckbox.checked = false;
                mainCheckbox.indeterminate = true;
            }
        }

        // Pour chaque groupe indépendant
        document.querySelectorAll(".checkbox-group").forEach(group => {

            const mainCheckbox = group.querySelector(".checkbox-main");
            const childCheckboxes = group.querySelectorAll(".checkbox-child");

            // Clic sur la checkbox principale
            mainCheckbox.addEventListener("change", () => {
                childCheckboxes.forEach(cb => cb.checked = mainCheckbox.checked);
                updateGroup(group);
            });

            // Clic sur une checkbox enfant
            childCheckboxes.forEach(cb => {
                cb.addEventListener("change", () => updateGroup(group));
            });

            // Initialisation
            updateGroup(group);
        });
    })
};




