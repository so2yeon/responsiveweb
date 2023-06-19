$(document).ready(function(){

  $(".trigger").click(function(){
    $(this).toggleClass("active");
    $(".gnb").slideToggle();
  });

  $(window).resize(function(){
    let w =$(window).width();

    if(w>768){
      $(".gnb").removeAttr("style");
    }
  });

});
