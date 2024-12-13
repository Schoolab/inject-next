export const tableheader = () => {
    $(function () { 
        var appHeaderHeight = $('.application-header')[0].offsetHeight;
        $(".dataTables_scrollHead").css("top", appHeaderHeight);
        $( window ).on( "resize", function() {
            $(".dataTables_scrollHead").css("top", appHeaderHeight);
        } );
    });
};
