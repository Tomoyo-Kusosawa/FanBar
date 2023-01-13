Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [{
      id:1,
      title: "功能卡片（一）",
      up_name: "功能描述",
      up_img: "/images/github-fill.png",
      time: "2023/01/14",
      down_num: "V0.0.0",
      bg_color: "45deg, #9EFBD3 0%, #57E9F2 48%, #45D4FB 17%",
      url:"../about/about"
    }, {
      id:2,
      title: "功能卡片（二）",
      up_name: "功能描述",
      up_img: "/images/github-fill.png",
      time: "2023/01/14",
      down_num: "V0.0.0",
      bg_color: "118deg,#fdcb6e 7%,#FF6B95 67%,#45D4FB 30%",
      url:"../about/about"
    }, {
      id:3,
      title: "功能卡片（三）",
      up_name: "功能描述",
      up_img: "/images/github-fill.png",
      time: "2023/01/14",
      down_num: "V0.0.0",
      bg_color: "259deg,#FFC796 9%,#FF6B95 67%,#6c5ce7 5%",
      url:"../about/about"
    }]
  },

  geturl: function (e){
    console.log('测试',e)

    wx.showToast({
      title: '该功能开发中，请等待后续版本', //提示的内容
      duration: 2000, //持续的时间
      icon: 'loading', //图标有success、error、loading、none四种
      mask: true //显示透明蒙层 防止触摸穿透
    })
    /*
    wx.navigateTo({
      url:e.currentTarget.dataset.url
    })
    */
   
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})