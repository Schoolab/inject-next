export const phasesToggle = () => {
    let togglePhase = $('.custom-control-input[name="phase"]');

    function phaseCompleted(id){
        togglePhase.eq(id).parent().find(".form-text").text("Completed");
        togglePhase.eq(id).parent().find(".progress-bar").attr("aria-valuenow","100");
        togglePhase.eq(id).parent().find(".progress-bar").css("width", "100%");
        togglePhase.eq(id).parent().find(".h4").removeClass("text-primary");
    }
    function phaseInProgress(id){
        togglePhase.eq(id).parent().find(".form-text").text("In progress");
        togglePhase.eq(id).parent().find(".progress-bar").attr("aria-valuenow","50");
        togglePhase.eq(id).parent().find(".progress-bar").css("width", "50%");
        togglePhase.eq(id).parent().find(".h4").addClass("text-primary");
    }
    function phaseNotCompleted(id){
        togglePhase.eq(id).parent().find(".form-text").text("Not completed");
        togglePhase.eq(id).parent().find(".progress-bar").attr("aria-valuenow","0");
        togglePhase.eq(id).parent().find(".progress-bar").css("width", "0%");
        togglePhase.eq(id).parent().find(".h4").removeClass("text-primary");
    }

     togglePhase.eq(0).on("click", function () {
        phaseInProgress(0);
        phaseNotCompleted(1);
        phaseNotCompleted(2);
        phaseNotCompleted(3);
     })
     togglePhase.eq(1).on("click", function () {
        phaseCompleted(0);
        phaseInProgress(1);
        phaseNotCompleted(2);
        phaseNotCompleted(3);
     })
     togglePhase.eq(2).on("click", function () {
        phaseCompleted(0);
        phaseCompleted(1);
        phaseInProgress(2);
        phaseNotCompleted(3);
     })
     togglePhase.eq(3).on("click", function () {
        phaseCompleted(0);
        phaseCompleted(1);
        phaseCompleted(2);
        phaseInProgress(3);
     })
          
  
};
