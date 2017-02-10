require('styles/app/common/index.scss')

var scrollTimer
var init = false

$(window).scroll(function () {
  clearTimeout(scrollTimer)

  scrollTimer = setTimeout(function () {
    if (init) {
      if ($(this).scrollTop() === 0) {
        $('.logo, .nav li, .nav a, .header, .locale').removeClass('scaled-down').addClass('scaled-up')
      } else {
        $('.logo, .nav li, .nav a, .header, .locale').removeClass('scaled-up').addClass('scaled-down')
      }
    }
  }, 100)

  init = true
})