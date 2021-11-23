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


// $(document).ready(function(){
// $('.projects-slider').slick({
//   centerMode: false,
//   infinite: false,
//   centerPadding: '100px',
//   slidesToShow: 2,
//   swipe: true,
//   responsive: [
//     {
//       breakpoint: 768,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 3
//       }
//     },
//     {
//       breakpoint: 480,
//       settings: {
//         arrows: false,
//         centerMode: true,
//         centerPadding: '40px',
//         slidesToShow: 1
//       }
//     }
//   ]
// });
// });

// elementInView
// function elementInView(elem){
//   return $(window).scrollTop() < $(elem).offset().top + $(elem).height() ;
// };

// $(window).scroll(function(){
//   if (elementInView($('#my-projects-title')))
//   //fire at will!
//     console.log('there it is, wooooohooooo!');
// });


// turnOnProjects
$('.wrapper').scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('#my-projects-title').slideDown(500);
  }
  // иначе скрыть кнопку scrollup
  else {
    // то сделать кнопку scrollup видимой
    $('#my-projects-title').slideUp(500);
  }
});


