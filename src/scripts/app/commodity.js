require('styles/app/commodity/index.scss')
require('../$/plugins/slider')

$('#commodity-images').slider({
  contentCls: 'slider-images',
  prevBtnCls: 'slider-left',
  nextBtnCls: 'slider-right',
  disableBtnCls: 'disabled',
  triggerType: 'click',
  easing: 'easeOut',
  inEndEffect: 'none',
  auto: true
})
