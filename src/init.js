$(document).ready(function(){
  window.dancers = [];

  $(".addDancerButton").on("click", function(event){
    var dancerMakerFunctionName = $(this).data("dancer-maker-function-name");
    var dancerMakerFunction = window[dancerMakerFunctionName];
    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer.$node);
  });

  $(".lineUpButton").on("click", function(event) {
    $('.dancer').addClass('lineUp');
  });

  $("body").on("mousemove", ".mario-mushroom", function(event) {
    $(this).css({'left' : event.pageX, 'top' : event.pageY}).on('click', function(event) {
      $(this).hide( "explode", {pieces:64}, 1000);
    });
  });

  $("body").on("click", ".mario-mushroom2", function(event) {
    $(this).hide( "explode", {pieces:64}, 1000);
  });

  $("body").on("click", ".explodeButton", function(event) {
    $(this).hide( "explode", {pieces:64}, 1000);
  });

  $( "body" ).on("mouseover", ".mario-mushroom3", function(event) {
      $( ".mario-mushroom3" ).animate({
        border: "20px solid cyan",
        width: 20,
        height:20
      }, 0);
  });
});
