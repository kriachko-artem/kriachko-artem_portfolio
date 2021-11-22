// change info
$(function () {
  $('#my-skills').click(function () {
    $('#my-skills').addClass('active');
    $('.something').hide(0);
    $('.my-skills').fadeIn(500);
    $('#something').removeClass('active');
  })
  $('#something').click(function () {
    $('#something').addClass('active');
    $('.my-skills').hide(0);
    $('.something').fadeIn(500);
    $('#my-skills').removeClass('active');
    
  })
});
// first view slider

// $(document).ready(function(){
//   $('.header-bg').slick({
//   dots: false,
//   infinite: true,
//   speed: 500,
//   fade: true,
//   autoplay: true,
//   autoplaySpeed: 2000,
//   cssEase: 'linear',
//   arrows: false,
// });
// });