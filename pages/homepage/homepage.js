// miniprogram/pages/lunbo/lunbo.js
var util = require('../../utils/utils.js');
// 在页面中定义插屏广告
let interstitialAd = null
Page({
  data: {
    background: 
    [ {title:'饭吧',url:'/images/fanrow.jpg'}, 
    ],
    vertical: false,
    interval: 2000,
    duration: 500,
    bannerCurrent: 0,
    Hei:"" ,
    now_state:null ,
    contentList: ['饭吧新功能FanTime上线啦', '版本号：V1.2.2', '饭吧祝您生活愉快,身体健康，万事如意'],
        listI: -1,
        content: '欢迎进入小程序   饭吧'
  },
  //goto
  onTapDayWeather(){
    wx.showToast()
  },
  goTo1:function(){
    wx.navigateTo({
      url: '/pages/fastuse/fastuse',
    })
  },
  goTo3:function(){
    wx.navigateTo({
      url: '/pages/lntu/lntu',
    })
  },
  goTo4:function(){
    wx.navigateTo({
      url: '/pages/fantime/fantime',
    })
  },
  goTo5:function(){
    wx.navigateTo({
      url: '/pages/card/card',
    })
  },
//轮播current切换监听事件
bannerChange: function(e){
  console.log("监听轮播事件",e);
  this.setData({
    bannerCurrent: e.detail.current
  })
},


  imgH:function(e){
    var winWid = wx.getSystemInfoSync().windowWidth;         //获取当前屏幕的宽度
    var imgh=e.detail.height;　　　　　　　　　　　　　　　　//图片高度
    var imgw=e.detail.width;
    var swiperH=winWid*imgh/imgw + "px"　　　　　　　　　　//等比设置swiper的高度。  即 屏幕宽度 / swiper高度 = 图片宽度 / 图片高度    ==》swiper高度 = 屏幕宽度 * 图片高度 / 图片宽度
    this.setData({
        Hei:swiperH　　　　　　　　//设置高度
    })
},

  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },

  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },
  onLoad: function () {
    // 调用函数时，传入new Date()参数，返回值是日期和时间
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据
    this.setData({
      time: time
    });
    if(wx.createInterstitialAd){
      interstitialAd = wx.createInterstitialAd({ adUnitId: 'adunit-7337e3e69dea6fa4' })
      interstitialAd.onLoad(() => {
        console.log('onLoad event emit')
      })
      interstitialAd.onError((err) => {
        console.log('onError event emit', err)
      })
      interstitialAd.onClose((res) => {
        console.log('onClose event emit', res)
      })
    }
    if (interstitialAd) {
      interstitialAd.show().catch((err) => {
        console.error(err)
      })
    }
  },
  //

  //点击黑色背景触发的事件
//share
  onShareAppMessage: function () {
    return {
     
    }
  },
  onShareTimeline: function(res){
    return {
      
    }
  },
  onPageScroll:function(){

  },

  //

    onLoad: function(options) {
        setInterval(() => { this.update(this.getListInfo()) }, 3000)
    },

    update(content) {
        var that = this
        var animation = wx.createAnimation()
            // 旧消息向上平移
        animation.translateY(-30).step({
                duration: 1000,
                timingFunction: 'ease-in'
            })
            // 为了实现下一条新内容向上平移的效果，必须把内容很快平移到下方，并且不能被用户看见，这里其原理类似轮播图的思路。
            // 实现方法：动画时间设置为1ms，过渡效果设置为’动画第一帧就跳至结束状态直到结束‘
        animation.opacity(0).translateY(30).step({
                duration: 1,
                timingFunction: 'step-start'
            })
            // 新消息向上平移的同时恢复透明
        animation.opacity(1).translateY(0).step({
            duration: 1000,
            timingFunction: 'ease-out'
        })
        that.setData({
                animationData: animation.export()
            })
            // 更新内容的延时必须大于第一步动画时间
        setTimeout(() => {
            that.setData({
                content: content
            })
        }, 1000)
    },
    getListInfo() {
        if (this.data.listI >= this.data.contentList.length - 1) {
            this.data.listI = -1
            this.getListInfo()
        } else {
            this.data.listI++
        }
        return this.data.contentList[this.data.listI]
    }

})

  
//
