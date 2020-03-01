// pages/week1/week1.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/images/week1/1.jpg',
      '/images/week1/2.jpg',
      '/images/week1/3.jpg',
      '/images/week1/4.jpg',
      '/images/week1/5.jpg',
      '/images/week1/6.jpg',
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