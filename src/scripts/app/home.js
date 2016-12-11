require('styles/app/home/index.scss')
require('../$/plugins/slider')

$('#ad').slider({
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
  steps: 3
})
