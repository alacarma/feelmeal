
    var mySwiper = new Swiper ('.swiper-container', {
      loop: true,
      parallax: true,
      pagination: ".swiper-pagination"
    });

$(".tabvideo").on("click", function(event){
  event.preventDefault();
  $(".iphoneBack").prepend('<div class="video-modal"><div class="video"></div></div>');
  setTimeout(function(){
    $(".video").addClass("videoActive");
  },10);
});

$(".iphoneBack").on("click",".video", function(event){
  event.preventDefault();
  $(".video").removeClass("videoActive");
  setTimeout(function(){
    $(".video-modal").remove();
  },400);
})