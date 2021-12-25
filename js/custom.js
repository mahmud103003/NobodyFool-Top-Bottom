// seroll
$(window).scroll(
    function(){
        var serolling = $(this).scrollTop();

      if(serolling>500){
        $(".scroll-btn").fadeIn();
      } 
      else{
        $(".scroll-btn").fadeOut();
      }
    //   menu fix
      if(serolling>300){
          $(".menu-search").addClass("menu-fixed");
      }else{
        $(".menu-search").removeClass("menu-fixed");
      }
    }
);

// bottom to top
$(".scroll-btn").click(
    function(){
        $("html").animate({scrollTop:"0px"},1500);
    }
);


// preloader
$(document).ready(function(){
    $(".preloader").delay(2000).fadeOut();
});