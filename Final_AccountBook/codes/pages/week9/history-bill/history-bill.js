// pages/week9/history-bill/history-bill.js
//index.js
var util = require('../utils/utils.js')
var app = getApp()
Page({
  data: {
    todayExpend: "0",
    monthExpend: "0",
    yearExpend: "0",
    allRecords: [],

  },

  //删除按钮
  deleteBill: function(index){
    let trueIndex = index.currentTarget.dataset.index
    var arr = this.data.allRecords
    arr.splice(trueIndex, 1)
    wx.setStorageSync('Bill', arr)
    this.getBill()
  },
  //获取信息
  getBill: function(){
    let bill;
    try {
      bill = wx.getStorageSync('Bill');
    } catch (e) {
    }
    if (bill != "") {
      this.setData({
        allRecords: bill
      })
    };
  },
  //事件处理函数
  onLoad: function () {

  },
  onShow: function () {
    this.getBill();
  },

  onShareAppMessage: function () {
    return {
      title: '账单',
      path: 'pages/index/index',
      success: function (res) {
        // 分享成功
      },
      fail: function (res) {
        // 分享失败
      }
    }
  },

})
