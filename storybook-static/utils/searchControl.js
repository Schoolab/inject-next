export const searchControl = () => {
    $(function () {
        $(".searchControl").on("keyup change focus click search", function () {
            
            // $(this).parents(".dropdown-menu").find("[type=checkbox]").prop( "checked", false );

            let search, filter, elements;
            search = $(this);
            filter = search.val().toUpperCase();
            elements = $(this).parents(".dropdown-menu").find(".custom-control");

            elements.each(function (index) {
                if ($(this).find("label").text().toUpperCase().indexOf(filter) > -1) {
                    $(this).removeClass("d-none")
                } else {
                    $(this).addClass("d-none")
                }
            });
        });
        $(".checkControl").on("click", function () {
            $(this).parents(".dropdown-menu").find(".searchControl").trigger('change');
            $(this).parents(".dropdown-menu").find(".custom-control").not(".d-none").find("[type=checkbox]").prop( "checked", true );
        });
        $(".uncheckControl").on("click", function () {
            $(this).parents(".dropdown-menu").find(".searchControl").trigger('change');
            $(this).parents(".dropdown-menu").find(".custom-control").not(".d-none").find("[type=checkbox]").prop( "checked", false );
        });

    });
};
