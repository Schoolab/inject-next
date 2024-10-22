export const showMore = () => {
    $(function () {
        var modelshowMore = {
          btn: $(".showMoreBtn"),
          elements : $(".showMoreBtn").parent().find(".showMoreCtn").children(),
        };

        var presentershowMore = {
            init: function () {
                viewshowMore.onLoad();
                this.onClick();
            },
            onClick: function () {
                modelshowMore.btn.on("click", function () {
              
                });
            },
         
        };

        var viewshowMore = {
            onLoad: function () {
                console.log(modelshowMore.elements);
            },
            
        };

        presentershowMore.init();
    });
};