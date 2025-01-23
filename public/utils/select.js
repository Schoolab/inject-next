export const select = () => {
    $(function () {
        $(".form-group select:not(.custom-select-tags):not(.filterSelect)").selectpicker({
            width: false,
            noneSelectedText: "Nothing selected",
            styleBase: "btn btn-lg",
            style: "btn-default",
            iconBase: "icon",
            showTick: true,
            tickIcon: "icon-check",
        });

        $("select:not(.table-filter):not(.card-filter):not(.dropdown-card):not(.select-with-search):not(.filterSelect):not(.custom-select-tags)").selectpicker({
            width: "100%",
            noneSelectedText: "Nothing selected",
            styleBase: "btn btn-lg",
            style: "btn-default",
            iconBase: "icon",
            showTick: true,
            tickIcon: "icon-check",
        });

        $("select.table-filter").selectpicker({
            width: "fit",
            noneSelectedText: "Nothing selected",
            styleBase: "btn",
            style: "btn-transparent",
            iconBase: "icon",
            showTick: true,
            tickIcon: "icon-check",
        });

        $("select.card-filter").selectpicker({
            width: "fit",
            noneSelectedText: "Nothing selected",
            styleBase: "btn",
            style: "btn-link card-filter",
            iconBase: "icon",
            showTick: true,
            tickIcon: "icon-check",
        });

        $("select.dropdown-card").selectpicker({
            width: false,
            noneSelectedText: "Nothing selected",
            styleBase: "btn",
            style: "btn-card",
            iconBase: "icon",
            showTick: false,
        });

        $("select.select-with-search").selectpicker({
            width: false,
            noneSelectedText: "Nothing selected",
            styleBase: "btn btn-lg",
            style: "btn-default",
            iconBase: "icon",
            showTick: true,
            tickIcon: "icon-check",
            noneResultsText: "No results for “{0}”…",
            liveSearch: true,
            liveSearchPlaceholder: "Search…",
            liveSearchNormalize: true,
            virtualScroll: "400",
        });
        $("select.custom-select-tags").selectize({
            delimiter: ",",
            persist: false,
            maxItems: null,
            valueField: "id",
            labelField: "name",
            searchField: "name",
            // options: [
            //     { id: 1, name: "SaaS", url: "" },
            //     { id: 2, name: "Projects", url: "" },
            //     { id: 3, name: "Management", url: "" },
            // ],
            create: true,
            plugins: ["remove_button", "clear_button"],
            render: {
                item: function (item, escape) {
                    return '<div class="badge badge-pill"><span>' + escape(item.name) + "</span></div>";
                },
            },
            create: function (input) {
                return {
                    value: input,
                    text: input,
                };
            },
        });
    });
};
