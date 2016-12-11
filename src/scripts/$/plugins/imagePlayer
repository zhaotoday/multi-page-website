/**
 * 图片滑动插件
 * @param element {object} 选择器
 * @param options {object} 选项
 */
$.Slider = function (element, options) {
  this._init(element, options)
}

// 定时器
var timer = null

// 默认参数
$.Slider.defaults = {
  active: 'active',
  interval: 2500,
  selectors: {
    images: '.slider-images',
    indexes: '.slider-indexes',
    prev: '.slider-prev',
    next: '.slider-next'
  }
}

// 方法
$.Slider.prototype = {
  /**
   * 初始化
   * @param element {object} 选择器
   * @param options {object} 选项
   */
  _init: function (element, options) {
    this.$el = $(element)
    this.options = $.extend($.Slider.defaults, options)

    this._config()._bindEvents().autoPlay()
  },

  /**
   * 配置
   */
  _config: function () {
    var selectors = this.options.selectors

    this.activeIndex = 0
    this.$images = $(selectors.images, this.$el)
    this.$indexes = $(selectors.indexes, this.$el)
    this.$prev = $(selectors.prev, this.$el)
    this.$next = $(selectors.next, this.$el)

    return this
  },

  /**
   * 绑定事件
   */
  _bindEvents: function () {
    var self = this

    // 点击索引按钮
    self.$indexes.find('li').each(function (index) {
      $(this).bind('click', function () {
        self.activeIndex = index
        self.playTo(index).autoPlay()
      })
    })

    // 点击上一张
    self.$prev.bind('click', function () {
      if (self.activeIndex-- === 0) {
        self.activeIndex = self.$images.find('li').length - 1
      }

      self.playTo(self.activeIndex).autoPlay()
    })

    // 点击下一张
    self.$next.bind('click', function () {
      if (self.activeIndex++ === self.$images.find('li').length - 1) {
        self.activeIndex = 0
      }

      self.playTo(self.activeIndex).autoPlay()
    })

    return this
  },

  /*
   * 播放到指定帧
   * @param index {int} 索引
   */
  playTo: function (index) {
    this.$images.find('li').eq(index).fadeIn().siblings().fadeOut()
    this.$indexes.find('li').eq(index).addClass(this.options.active).siblings().removeClass(this.options.active)

    return this
  },

  /*
   * 自动播放
   */
  autoPlay: function () {
    var self = this

    clearInterval(timer)

    timer = setInterval(function () {
      if (self.activeIndex++ === self.$images.find('li').length - 1) {
        self.activeIndex = 0
      }

      self.playTo(self.activeIndex)
    }, self.options.interval)

    return this
  }
}
