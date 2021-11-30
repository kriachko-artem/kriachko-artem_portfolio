// change info
$(function () {
  //
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
  });

 //Turn On/Off Night mode
  $('.night-mode').click(function () {
    $(this).toggleClass('on');
    $('.wrapper').toggleClass('night');
});

  // header background slider
  $('.header-bg').slick({
  dots: false,
  infinite: true,
  speed: 500,
  fade: true,
  autoplay: true,
  autoplaySpeed: 10000,
  cssEase: 'linear',
  arrows: false,
});

  // projects slider
  $('.projects-slider').slick({
    arrows: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 300,
    easing: 'ease',
    infinite: true,
    autoplay: false,
    autoplaySpeed: 1500,
    pauseOnDotsHover: true,
    touchThreshold: 30,
    waitForAnimate: false,
    centerMode: false,
    variableWidth: false,

    // responsive: [
    //   {
    //     breakpoint: 768,
    //     settings: {
    //       slidesToShow: 3,
    //       centerMode: true,       }
    //   }
    // ]
    // fade: true,
    // vertical: true,
    // verticalSwiping:true,
  });
  $('.wrapper').scroll(function() {
  if ($(this).scrollTop()>200) {
    $('#my-projects-title').slideDown(500);
  }
  else {
    $('#my-projects-title').slideUp(500);
  }
});

// scrollToAnchor
 $('a[href="#"]').click(function(){ // #1
let anchor = $(this).attr('href');  // #2
$('html, body').animate({           // #3
scrollTop:  $(anchor).offset().top  // #4
}, 600);                            // #5
});

 // turnOnProjectsTittle
$('.wrapper').scroll(function() {
  if ($(this).scrollTop()>200) {
    $('#my-projects-title').slideDown(500);
  }
  else {
    $('#my-projects-title').slideUp(500);
  }
});

// $('.description-block a').click(function(event) {
//   $(".description-window").fadeIn(500);
//   // $(".tab").hide();
//     var selectTab = $(this).find('a').attr("href");
//     $(selectTab).addClass('active');
// });


// $('.description-block').click(function(){
//   var thisClass = this.className.slice(0,2);
//   $(".description-window").hide();
//   $(".tab").hide();
//   $(".description-window").fadeIn(500);
//   $(".tab." + thisClass).fadeIn(500);
// });
// $('.wrapper').click(function(){
//   $(".description-window").fadeOut(500);
// });
// $(".description-window").hide()

// $('.wrapper').click(function(){
//   $(".description-window").fadeOut(500);
// });
// $(".description-window").hide();




});
// scrollToAnchor
 $('a[href="#"]').click(function(){ // #1
let anchor = $(this).attr('href');  // #2
$('html, body').animate({           // #3
scrollTop:  $(anchor).offset().top  // #4
}, 600);                            // #5
});

// showDescriptionWindow
$(function() {
  //homepage services tabs
  $('.description-block.t1').click(function(){
    $('.description-window.t1').fadeIn(500);
});
  //next function
});
$(function() {
  //homepage services tabs
  $('.description-block.t2').click(function(){
    $('.description-window.t2').fadeIn(500);
});
  //next function
});
$(function() {
  //homepage services tabs
  $('.description-block.t3').click(function(){
    $('.description-window.t3').fadeIn(500);
});
  //next function
});
$(function() {
  //homepage services tabs
  $('.close-button').click(function(){
    $('.description-window').fadeOut(500);
});
  //next function
});




//tabs #2 alt
// $('.description-block div').click(function(){
//   var thisClass = this.className.slice(0,2);
//   $(".description-window").hide();
//   $(".tab").hide();
//   $(".description-window").fadeIn(500);
//   $(".tab." + thisClass).fadeIn(500);
// });
// $('.wrapper').click(function(){
//   $(".description-window").fadeOut(500);
// });
// $(".description-window").hide()

// $('.wrapper').click(function(){
//   $(".description-window").fadeOut(500);
// });
// $(".description-window").hide();




























