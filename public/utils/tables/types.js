export const types = () => {
    $(function () {    

        //tables       
        var table = new DataTable('#doc-table-data-types ', {
            fixedColumns: {
                left: 1,
                left: 2,
            },
            responsive: {
                fixedColumns: false
            },
            paging: false,
            info: false,
            searching: false,
            scrollCollapse: true,
            scrollX: true,
            // scrollY: "75vh",
            ordering: false
        }); 
        jQuery(window).on('resize', function () {
            var win = jQuery(this); //this = window
            if (win.width() >= 1200) {
                table.fixedColumns().left('1');
                table.fixedColumns().left('2');
            }
            else {
                table.fixedColumns().left('0');                           
            }
        });
        var tablebis = new DataTable('#doc-table-data-types-bis ', {
            fixedColumns: {
                left: 1,
                left: 2,
            },
            responsive: {
                fixedColumns: false
            },
            paging: false,
            info: false,
            searching: false,
            scrollCollapse: true,
            scrollX: true,
            // scrollY: "75vh",
            ordering: false
        }); 
        jQuery(window).on('resize', function () {
            var win = jQuery(this); //this = window
            if (win.width() >= 1200) {
                tablebis.fixedColumns().left('1');
                tablebis.fixedColumns().left('2');
            }
            else {
                tablebis.fixedColumns().left('0');                           
            }
        });
        table.on( 'draw', function () {
            console.log( 'Redraw occurred at: '+new Date().getTime() );
        } );
        tablebis.on( 'draw', function () {
            console.log( 'Redraw occurred at: '+new Date().getTime() );
        } );
    

        $('.table.types').on('show.bs.dropdown', (event) => {           
            let thisTable = event.target.closest('table');         
            thisTable.classList.add('dropdowns-opened'); 
            $(thisTable).find('tr').addClass('non-dropdown');  
            event.target.closest('tr').classList.remove('non-dropdown');
        });
        
        $('.table.types').on('hidden.bs.dropdown', (event) => {
            let thisTable = event.target.closest('table');
            thisTable.classList.remove('dropdowns-opened');
            $(thisTable).find('tr').removeClass('non-dropdown');
        });        
    })

};




