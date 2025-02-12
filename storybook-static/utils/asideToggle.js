export const asideToggle = () => {
    const toggleButtons = document.querySelectorAll('[data-toggle="aside"]');
    const dismissButtons = document.querySelectorAll('[data-dismiss="aside"]');

    toggleButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const targetId = button.getAttribute("data-target");
            const asideElement = document.querySelector(targetId);

            if (asideElement) {
                const allAsides = document.querySelectorAll('.application-aside');
                allAsides.forEach(aside => {
                    if (aside !== asideElement) {
                        aside.classList.add("d-none");
                        const toggleButton = document.querySelector(`[data-toggle="aside"][data-target="#${aside.id}"]`);
                        if (toggleButton) {
                            toggleButton.classList.remove("active");
                        }
                    }
                });

                asideElement.classList.toggle("d-none");
                button.classList.toggle("active", !asideElement.classList.contains("d-none"));
            }
        });
    });

    dismissButtons.forEach(button => {
        button.addEventListener("click", (event) => {
            event.preventDefault();
            const asideElement = button.closest('aside');
            if (asideElement) {
                asideElement.classList.add("d-none");

                const toggleButton = document.querySelector(`[data-toggle="aside"][data-target="#${asideElement.id}"]`);
                if (toggleButton) {
                    toggleButton.classList.remove("active");
                }
            }
        });
    });
};
