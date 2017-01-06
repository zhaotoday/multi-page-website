require('styles/app/commodity/index.scss')
require('../$/plugins/slider')

// 第一张图片加载完成后执行
$('#commodity-images img').eq(0).load(function () {
  $('#commodity-images').slider({
    contentCls: 'slider-images',
    prevBtnCls: 'slider-left',
    nextBtnCls: 'slider-right',
    disableBtnCls: 'disabled',
    triggerType: 'click',
    easing: 'easeOut',
    inEndEffect: 'none',
    delay: 2500,
    duration: 700
  })
})