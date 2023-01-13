// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    list:[
      {
        icon: "/images/about.png",
        title: "关于",
        click: "about"
      }, {
        icon: "/images/notes.png",
        title: "更新日志",
        click: "journal"
      }, {
        icon: "/images/setting.png",
        title: "设置",
        click: "setting"
      }
    ],
    list_top:[
      {
        icon: "/images/github-fill.png",
        title: "GitHub",
        littleTitle: "开源项目地址",
        click: "git"
      },{
        icon: "/images/feedback.png",
        title: "反馈与提交中心",
        littleTitle: "",
        click: "feedback"
      }
    ]
  },
  onLoad() {
    
  },
  
  git(e){
    console.log(e);
    wx.setClipboardData({
      data: '需要复制的内容',
      success: function (res) {
        wx.getClipboardData({
          // 这个api是把拿到的数据放到电脑系统中的
          success: function(res) {
            console.log(res.data) // data
          }
        })
      }
    })
  },
  feedback(e){
    console.log(e);
    wx.navigateTo({
      url: '/pages/addmeals/addmeals',
    })
  },
  about(e){
    console.log(e)
    console.log("关于")
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  journal(e){
    console.log(e)
    console.log("更新日志")
    wx.navigateTo({
      url: '/pages/news_list/news_list',
    })
  },
  setting(e){
    wx.navigateTo({
      url: '/pages/fansetting/fansetting',
    })
  }
 })