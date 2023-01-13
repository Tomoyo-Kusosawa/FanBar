// app.js
const defaultTime = {
  defaultWorkTime: 25,
  defaultRestTime: 5
}

App({
  globalData:{
    NOTE_LIST:"NOTE_LIST"
  },
  globalData: {
    userInfo: null,
  },
  require : function($uri){return require($uri)},
  onPullDownRefresh:function(){
    this.onRefresh();
  },
onRefresh:function(){
    //导航条加载动画
    wx.showNavigationBarLoading();
    setTimeout(function () {
      wx.hideNavigationBarLoading();
      //停止下拉刷新
      wx.stopPullDownRefresh();
    }, 2000);
  },
  //app.vue
 

  onLaunch:function(){
    //
    let workTime = wx.getStorageSync('workTime')
    let restTime = wx.getStorageSync('restTime')
    if (!workTime) {
      wx.setStorage({
        key: 'workTime',
        data: defaultTime.defaultWorkTime
      })
    }
    if (!restTime) {
      wx.setStorage({
        key: 'restTime',
        data: defaultTime.defaultRestTime
      })
    }
      // 展示本地存储能力
      const logs = wx.getStorageSync('logs') || []
      logs.unshift(Date.now())
      wx.setStorageSync('logs', logs)
      wx.cloud.init({
        traceUser: true,
    })
      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      })
      wx.getSystemInfo({
        success: e => {
          this.globalData.StatusBar = e.statusBarHeight;
          let capsule = wx.getMenuButtonBoundingClientRect();
      if (capsule) {
         this.globalData.Custom = capsule;
        this.globalData.CustomBar = capsule.bottom + capsule.top - e.statusBarHeight;
      } else {
        this.globalData.CustomBar = e.statusBarHeight + 50;
      }
        }
      })
      
    // #ifdef MP-WEIXIN
          //使用更新对象之前判断是否可用
          if (wx.canIUse('getUpdateManager')) {
            const updateManager = wx.getUpdateManager()
     
            // 监听向微信后台请求检查更新结果事件。微信在小程序冷启动时自动检查更新，不需由开发者主动触发。
            updateManager.onCheckForUpdate(function(res) {
              // 请求完新版本信息的回调
              console.log("请求完新版本信息的回调" + JSON.stringify(res.hasUpdate))
              //是否有新版本
              if (res.hasUpdate) {
                //监听小程序有版本更新事件。客户端主动触发下载（无需开发者触发），下载成功后回调
                updateManager.onUpdateReady(function() {
                  wx.showModal({
                    title: '更新提示',
                    content: '新版本已经准备好，是否重启应用？',
                    success(res) {
                      if (res.confirm) {
                        // 新的版本已经下载好，调用 applyUpdate 应用新版本并重启
                        console.log("新的版本已经下载好，调用 applyUpdate 应用新版本并重启");
                        updateManager.applyUpdate()
                      }
                    }
                  })
                })
     
                // 监听小程序更新失败事件。小程序有新版本，客户端主动触发下载（无需开发者触发），
                // 下载失败（可能是网络原因等）后回调
                updateManager.onUpdateFailed(function() {
                  console.log("新版本下载失败");
                  wx.showModal({
                    title: '已经有新版本了哟~',
                    content: '新版本已经上线啦~，由于下载失败，请您删除当前小程序，重新搜索打开哟~'
                  })
                })
              }
            })
     
          } else {
            //如果小程序需要在最新的微信版本体验，如下提示
            wx.showModal({
              title: '更新提示',
              content: '当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。'
            })
          }
          // #endif

    }

})
