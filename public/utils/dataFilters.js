export const dataFilters = () => {
    $(function () {
        var modelDataFilters = {
            // currentPathname : new URL(window.location.href).pathname,
            currentPathname: new URL(window.location.href).searchParams.get("id"),
            filters: $(".dataFilter"),
            control: $(".dataFitlersControl"),
            icon: $(".dataFitlersControl").find("a.btn span.icon"),
            controlSelect: $(".dataFitlersControl").find("select"),
            controlApply: $(".dataFitlersControlApply"),
            controlCancel: $(".dataFitlersControlCancel"),
            controlClean: $(".dataFitlersClean"),
            controlRemoveCtn: $(".dataFitlersControlRemove"),
            dataTable: [],
        };

        var presenterDataFilters = {
            init: function () {
                this.localStorageGetItem();
                this.localStorageSetItem();
                viewDataFilters.onLoad();
                viewDataFilters.selectDisplay();
                viewDataFilters.iconDisplay();
                this.onClick();
                this.onChange();
            },

            localStorageSetItem: function () {
                if (window.localStorage.getItem("@Inject/Filters/" + modelDataFilters.currentPathname) == null) {
                    
                    modelDataFilters.filters.each(function (index) {
                        if($(this).find("a:first").hasClass("active") == false){
                            modelDataFilters.dataTable.push(index);
                        }                        
                    });
                }
                window.localStorage.setItem("@Inject/Filters/" + modelDataFilters.currentPathname, JSON.stringify(modelDataFilters.dataTable));
            },

            localStorageGetItem: function () {
                if (window.localStorage.getItem("@Inject/Filters/" + modelDataFilters.currentPathname) !== null) {
                    var localstorageTab = JSON.parse(window.localStorage.getItem("@Inject/Filters/" + modelDataFilters.currentPathname));
                    modelDataFilters.filters.each(function (value) {
                        
                        if($(this).find("a:first").hasClass("active") &&  localstorageTab.indexOf(value) > -1){
                            localstorageTab = $.grep(localstorageTab, function (index) {
                                return index != value;
                            });                          
                        }                                      
                    });
                    modelDataFilters.dataTable = localstorageTab;
                    window.localStorage.setItem("@Inject/Filters/" + modelDataFilters.currentPathname, JSON.stringify(modelDataFilters.dataTable));
                }
                
            },
            onChange: function(){
                modelDataFilters.controlSelect.on("change", function () {
                    var value = this.value;
                    viewDataFilters.add(value);
                    modelDataFilters.controlSelect.val("");
                    $(this).closest(".dropdown-menu").prev().dropdown("toggle");
                });
            },

            onClick: function () {
                modelDataFilters.controlApply.on("click", function () {
                    var value = modelDataFilters.controlSelect.val();
                    viewDataFilters.add(value);
                    modelDataFilters.controlSelect.val("");
                });
                modelDataFilters.controlCancel.on("click", function () {
                    modelDataFilters.controlSelect.val("");
                });
                modelDataFilters.controlRemoveCtn.find("button").on("click", function () {
                    var value = $(this).attr("id").split("index-")[1];
                    viewDataFilters.remove(value);
                    viewDataFilters.clean(value);
                });
                modelDataFilters.controlClean.on("click", function () {
                    modelDataFilters.filters.each(function (index) {
                        viewDataFilters.remove(index);
                        viewDataFilters.clean(index);
                    });
                    modelDataFilters.dataTable = [];
                    modelDataFilters.filters.each(function (index) {                       
                        modelDataFilters.dataTable.push(Number(index)); 
                    });
                    presenterDataFilters.localStorageSetItem();
                });
            },
        };

        var viewDataFilters = {
            add: function (value) {
                modelDataFilters.filters.eq(value).removeClass("d-none");
                modelDataFilters.controlRemoveCtn.find("button").eq(value).removeClass("d-none");
                modelDataFilters.controlSelect.find("option[value='" + value + "']").remove();
                modelDataFilters.controlSelect.val("");
                if (modelDataFilters.dataTable.indexOf(value) == -1) {
                    modelDataFilters.dataTable = $.grep(modelDataFilters.dataTable, function (index) {
                        return index != value;
                    });
                }
                presenterDataFilters.localStorageSetItem();
                this.selectDisplay();
                this.iconDisplay();
            },
            remove: function (value) {
                modelDataFilters.filters.eq(value).addClass("d-none");
                modelDataFilters.controlRemoveCtn.find("button").eq(value).addClass("d-none");
                var text = modelDataFilters.controlRemoveCtn.find("button").eq(value).text();
                modelDataFilters.controlSelect.append(
                    $("<option>", {
                        value: value,
                        text: text,
                    })
                );
                modelDataFilters.dataTable.push(Number(value));
                presenterDataFilters.localStorageSetItem();
                this.sort();
                this.selectDisplay();
                this.iconDisplay();
            },
            sort: function () {
                var selectList = modelDataFilters.controlSelect.find("option");
                selectList.sort(function (a, b) {
                    a = a.value;
                    b = b.value;
                    return a - b;
                });
                modelDataFilters.controlSelect.html(selectList);
            },
            clean: function (value) {
                modelDataFilters.filters.eq(value).find(".searchControl").val("");
                modelDataFilters.filters.eq(value).find(".searchControl").trigger("change");
                modelDataFilters.filters.eq(value).find("[type=checkbox]").prop("checked", false);
                modelDataFilters.filters.eq(value).find("[type=radio]").eq(0).prop("checked", true);
                modelDataFilters.filters.eq(value).find("a:first").removeClass("active");
                
            },
            selectDisplay: function(){
                if (modelDataFilters.controlSelect.children('option').length > 1){
                    modelDataFilters.controlSelect.removeClass("d-none");
                } else {
                    modelDataFilters.controlSelect.addClass("d-none");
                }
            },
            iconDisplay: function(){
                if (modelDataFilters.controlSelect.children('option').length > 1){
                    modelDataFilters.icon.addClass("icon-plus-circle");
                    modelDataFilters.icon.removeClass("icon-delete");
                } else {
                    modelDataFilters.icon.removeClass("icon-plus-circle");
                    modelDataFilters.icon.addClass("icon-delete");
                }
            },
            onLoad: function () {
                modelDataFilters.filters.each(function (index) {
                    var optionName = $(this).find("a:first").text();

                    if (modelDataFilters.dataTable.indexOf(index) > -1) {
                        modelDataFilters.controlSelect.append(
                            $("<option>", {
                                value: index,
                                text: optionName,
                            })
                        );
                        modelDataFilters.controlRemoveCtn.append('<button id="index-' + index + '" class="btn btn-sm btn-transparent d-none"><span class="d-flex flex-nowrap flex-fill justify-content-between line-clamp-1"><span class="text-truncate">' + optionName + '</span><span class="icon icon-md icon-delete"></span></span> </button>');
                    } else {
                        modelDataFilters.filters.eq(index).removeClass("d-none");

                        modelDataFilters.controlRemoveCtn.append('<button id="index-' + index + '" class="btn btn-sm btn-transparent"><span class="d-flex flex-nowrap flex-fill justify-content-between line-clamp-1"><span class="text-truncate">' + optionName + '</span><span class="icon icon-md icon-delete"></span></span> </button>');
                    }
                });
            },
        };

        presenterDataFilters.init();
    });
};