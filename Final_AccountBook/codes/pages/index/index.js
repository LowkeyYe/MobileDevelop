//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World!',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    //按钮组
    chapters: [
      { week: 'Week9', theme: '记账本', block: false, },
      { week: 'Week1', theme: 'Albums', block: false, },
      { week: 'Week2', theme: 'Buttons', block: false, },
      { week: 'Week3', theme: 'News', block: false, },
      { week: 'Week4', theme: 'Xxxxxx', block: true, },
      { week: 'Week5', theme: 'Xxxxxx', block: true, },
      { week: 'Week6', theme: 'Xxxxxx', block: true, },
      { week: 'Week7', theme: 'Xxxxxx', block: true, },
      { week: 'Week8', theme: 'Xxxxxx', block: true, },
    ],
  },


  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  //通往Week1页面
  gotoWeek1: function() {
    wx.navigateTo({
      url: '/pages/week1/week1',
    })
  },
  //通往Week2页面
  gotoWeek2: function () {
    wx.navigateTo({
      url: '/pages/week2/week2',
    })
  },
  //通往Week3页面
  gotoWeek3: function () {
    wx.navigateTo({
      url: '/pages/week3/week3',
    })
  }, 
  //通往Week9页面
  gotoWeek9: function () {
    wx.navigateTo({
      url: '/pages/week9/index/index',
    })
  }, 

  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true,
        motto:"Welcome to Lowkey's practice project!",
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
          motto: "Welcome to Lowkey's practice project!",
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true,
            motto: "Welcome to Lowkey's practice project!",
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true,
      motto: "Welcome to Lowkey's practice project!",
    })
  }
})
