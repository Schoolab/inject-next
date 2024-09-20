export const dateRange = () => {
    $(function () {
        //todo switch lang
        var langFr = {
            format: "DD/MM/YYYY",
            separator: " - ",
            applyLabel: "Appliquer",
            cancelLabel: "Annuler",
            fromLabel: "De",
            toLabel: "à",
            customRangeLabel: "Personnalisé",
            weekLabel: "S",
            daysOfWeek: ["Dim", "lun", "Mar", "Mer", "Jeu", "Ven", "Sam"],
            monthNames: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Decembre"],
            firstDay: 1,
        };
        var langEn = {
            format: "DD/MM/YYYY",
            separator: " - ",
            applyLabel: "Apply",
            cancelLabel: "Cancel",
            fromLabel: "From",
            toLabel: "To",
            customRangeLabel: "Custom",
            weekLabel: "W",
            daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            firstDay: 1,
        };

        var rangesEn = {
            "Overall" : [moment().startOf("day"), moment().endOf("day")],
            "This Year": [moment().startOf("year"), moment().endOf("year")],
            "Last 6 Month": [moment().subtract(6, "month").startOf("month"), moment().endOf("month")],
            "Last 3 Month": [moment().subtract(3, "month").startOf("month"), moment().endOf("month")],
            "This Month": [moment().startOf("month"), moment().endOf("month")],
        };
        var rangesFr = {
            "Global" : [moment().startOf("day"), moment().endOf("day")],
            "Année en cours": [moment().startOf("year"), moment().endOf("year")],
            "6 derniers mois": [moment().subtract(6, "month").startOf("month"), moment().endOf("month")],
            "3 derniers mois": [moment().subtract(3, "month").startOf("month"), moment().endOf("month")],
            "Mois en cours": [moment().startOf("month"), moment().endOf("month")],
        };

        $(".reportrange").daterangepicker({
            locale: langFr,
            buttonClasses: "btn",
            ranges: rangesFr,
            opens:'left',
        });

        $(".reportrange").on("apply.daterangepicker", function (ev, picker) {
            console.log(picker.chosenLabel );
            if (picker.chosenLabel == "Overall" || picker.chosenLabel == "Global") {
                $(".reportrange input").val("Overall");
            } else {
                $(".reportrange input[name='startDate']").val(picker.startDate.format(langFr.format));
                $(".reportrange input[name='endDate']").val(picker.endDate.format(langFr.format));
            }
            console.log($(".reportrange input").val());
        });
    });
};
