

$(window).scroll(function(){
    $(".top1").css("opacity", 1 - $(window).scrollTop() / 250);
  });

  $(window).scroll(function(){
      $(".top2").css("opacity", 1 - $(window).scrollTop() / 750);
    });


    $(window).scroll(function(){
        $(".top3").css("opacity", 1 - $(window).scrollTop() / 950);
      });


      $(window).scroll(function(){
          $(".top4").css("opacity", 1 - $(window).scrollTop() /1150);
        });
/*win.scroll(function(){
  scrollPosition = win.scrollTop();
  scrollRatio = 1 - scrollPosition / 300;
  $(".top").css("opacity", scrollRatio);
*/





/*$(window).scroll(function(){
    var scrollVar = $(window).scrollTop();
    $('.top').css("opacity", 1 - scrollVar/300);
})*/
