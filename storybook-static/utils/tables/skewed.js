export const skewed = () => {
    $(function () {
        //tables
        var table = new DataTable("#doc-table-data-skewed", {
            fixedColumns: {
                left: 2,
            },
            responsive: {
                fixedColumns: false,
            },
            paging: false,
            info: false,
            searching: false,
            scrollCollapse: true,
            scrollX: true,
            // scrollY: "75vh",
            columnDefs: [
                { targets: 0, type: "string", orthogonal: "data-content", orderable: true },
                { targets: "_all", orderable: false }, // other columns non orderable
            ],
            order: [[0, "desc"]],
            ordering: false,
        });
        jQuery(window).on("resize", function () {
            var win = jQuery(this); //this = window
            if (win.width() >= 1200) {
                table.fixedColumns().left("1");
            } else {
                table.fixedColumns().left("0");
            }
        });
        table.on("draw", function () {
            console.log("Redraw occurred at: " + new Date().getTime());
        });

        $(".table").on("show.bs.dropdown", (event) => {
            let thisTable = event.target.closest("table");
            thisTable.classList.add("dropdowns-opened");
            $(thisTable).find("tr").addClass("non-dropdown");
            event.target.closest("tr").classList.remove("non-dropdown");
        });

        $(".table").on("hidden.bs.dropdown", (event) => {
            let thisTable = event.target.closest("table");
            thisTable.classList.remove("dropdowns-opened");
            $(thisTable).find("tr").removeClass("non-dropdown");
        });
    });

  
};
