require('themes/app/commons/global/index.scss')
require('themes/app/commons/header/index.scss')
require('themes/app/commons/footer/index.scss')
require('../utils/zepto')

$('#collapse').on('tap', function () {
  $('#nav-overlay').show().removeClass('fadeOutRight').addClass('fadeInRight')
})

$('#nav-close').on('tap', function () {
  $('#nav-overlay').show().removeClass('fadeInRight').addClass('fadeOutRight')
})