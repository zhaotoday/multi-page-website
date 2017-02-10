require('styles/app/home/index.scss')
require('../$/plugins/nav')
require('../$/plugins/slider')

$('#nav').find('li:first-child').addClass('active').end().onePageNav({
  currentClass: 'active',
  scrollThreshold: 0.5,
  scrollSpeed: 300
})

$('#home-slider').slider({
  contentCls: 'slider-images',
  navCls: 'slider-indexes',
  auto: true,
  delay: 2500,
  duration: 700,
  keyboardAble: true,
  inEndEffect: 'cycle',
  easing: 'easeOut'
})

$('#commodity').slider({
  contentCls: 'slider-images',
  prevBtnCls: 'slider-left',
  nextBtnCls: 'slider-right',
  disableBtnCls: 'disabled',
  triggerType: 'click',
  easing: 'easeOut',
  inEndEffect: 'none',
  steps: 3,
  delay: 2500,
  duration: 700
})

var scrollTimer
var init = false

$(window).scroll(function () {
  clearTimeout(scrollTimer)

  scrollTimer = setTimeout(function () {
    if (init) {
      if ($(this).scrollTop() === 0) {
        $('.logo, .nav li, .nav a, .header').removeClass('scaled-down').addClass('scaled-up')
      } else {
        $('.logo, .nav li, .nav a, .header').removeClass('scaled-up').addClass('scaled-down')
      }
    }

    init = true
  }, 100)
})