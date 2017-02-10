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