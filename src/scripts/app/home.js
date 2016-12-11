require('styles/app/home/index.scss')
require('../$/plugins/slider')
$('#ad').slider({
  contentCls: 'slider-images',
  navCls: 'slider-indexes',
  animate: true,
  triggerType: 'click',
  auto: true,
  delay: 2500,
  duration: 700,
  keyboardAble: true,
  inEndEffect: 'cycle',
  easing: 'easeOut'
});
