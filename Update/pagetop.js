function PageTopAnime() {
    var scroll = $(window).scrollTop();
    if (scroll >= 1200){
      $('#page-top').removeClass('RightMove');
      $('#page-top').addClass('LeftMove');
    }else{
      if($('#page-top').hasClass('LeftMove')) {
        $('#page-top').removeClass('LeftMove');
        $('#page-top').addClass('RightMove');
        }
    }
}

$(window).scroll(function () {
    PageTopAnime();
});

$(window).on('load', function () {
    PageTopAnime();
});

$('#page-top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 500);
    return false;
});
