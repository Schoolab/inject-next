export const dropdownNotSaved = () => {
    $(function () {
        // Prevent dropdown to close if not saved
        $('[data-save-to-close="true"]').on("hide.bs.dropdown", function (e) {
            if (e.clickEvent) {
                e.preventDefault();

                var dropdownMenu = $(this).find(".dropdown-menu form");

                dropdownMenu.addClass("shaking");

                setTimeout(function () {
                    dropdownMenu.removeClass("shaking");
                }, 1000);

                $("#modalHidePrevented").toast("show");
            }
        });
    });
};
