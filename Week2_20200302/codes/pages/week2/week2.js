// pages/week2/week2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //按钮组
    chapters: [
      { week: '1', theme: 'Albums', block: false, },
      { week: '2', theme: 'Buttons', block: false, },
      { week: '3', theme: 'Xxxxxx', block: true, },
      { week: '4', theme: 'Xxxxxx', block: true, },
      { week: '5', theme: 'Xxxxxx', block: true, },
      { week: '6', theme: 'Xxxxxx', block: true, },
      { week: '7', theme: 'Xxxxxx', block: true, },
      { week: '8', theme: 'Xxxxxx', block: true, },
      { week: '9', theme: 'Xxxxxx', block: true, },
      { week: '10', theme: 'Xxxxxx', block: true, },
    ],
  },

  //返回主页页面
  backToHome: function () {
    wx.navigateTo({
      url: '/pages/index/index',
    })
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