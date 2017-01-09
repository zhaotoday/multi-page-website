require('themes/app/home/slider/index.scss')
require('assets/zepto/plugins/slider')

$('#home-slider').slider({
  contentCls: 'slider-images',
  inEndEffect: 'switch',
  fullScreen: false,
  easing: 'easeIn',
  navCls: 'slider-indexes'
})

