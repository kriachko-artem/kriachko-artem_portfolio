// при прокрутке окна (window)
$(window).scroll(function() {
  // если пользователь прокрутил страницу более чем на 200px
  if ($(this).scrollTop()>200) {
    // то сделать кнопку scrollup видимой
    $('.navbar').fadeOut();
  }
  // иначе скрыть кнопку scrollup
  else {
    // то сделать кнопку scrollup видимой
    $('.navbar').fadeIn();
  }
});