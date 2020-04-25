// pages/week3/week3.js
let time = require('../../utils/untils.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tArray: [{
      "category": "all",
      "web_url": "",
      "flags": 0,
      "name": "热点",
      "tip_new": 0,
      "default_add": 1,
      "concern_id": "",
      "type": 4,
      "icon_url": ""
    }, {
      "category": "news_society",
      "web_url": "",
      "flags": 0,
      "name": "社会",
      "tip_new": 0,
      "default_add": 1,
      "concern_id": "6215497899397089794",
      "type": 4,
      "icon_url": ""
    }, {
      "category": "news_entertainment",
      "web_url": "",
      "flags": 0,
      "name": "娱乐",
      "tip_new": 0,
      "default_add": 1,
      "concern_id": "6215497896830175745",
      "type": 4,
      "icon_url": ""
    }, {
      "category": "news_tech",
      "web_url": "",
      "flags": 0,
      "name": "科技",
      "tip_new": 0,
      "default_add": 1,
      "concern_id": "6215497899594222081",
      "type": 4,
      "icon_url": ""
    }, {
      "category": "news_car",
      "web_url": "",
      "flags": 0,
      "name": "汽车",
      "tip_new": 0,
      "default_add": 1,
      "concern_id": "6215497898671475202",
      "type": 4,
      "icon_url": ""
    }, {
      "category": "news_finance",
      "web_url": "",
      "flags": 0,
      "name": "财经",
      "tip_new": 0,
      "default_add": 1,
      "concern_id": "6215497900357585410",
      "type": 4,
      "icon_url": ""
    },], //新闻类型数组
    // loading: true, //是否显示加载
    ishidden: true,
    curpage: 0, //新闻列表坐标
    listpage: 0, //列表当前页码
    category: "all", //当前分类
    viewHeight: 300, //scroll-view 高度
    //新闻列表
    detaildata: [],
    allnews: {
      "all": [
        {
          "title": "227大团结为何所生",
          "comment_count": 10542031,
          "publish_time": 1583820225000
        },
        {
          "title": "中国新冠病毒连续两天0",
          "comment_count": 32184462,
          "publish_time": 1583820225000
        },
        {
          "title": "英国或将实施群体免疫",
          "comment_count": 165573,
          "publish_time": 1583820225000
        },
        {
          "title": "黄景瑜跳舞",
          "comment_count": 24546,
          "publish_time": 1583820225000
        },
        {
          "title": "寻找塞班",
          "comment_count": 1546421,
          "publish_time": 1583820225000
        },
        {
          "title": "意大利宣布停飞国内大部分航班",
          "comment_count": 34642,
          "publish_time": 1583885723000
        },
        {
          "title": "看中国黑科技硬核战疫",
          "comment_count": 10542031,
          "publish_time": 1583820225000
        },
        {
          "title": "宝马大战奔驰",
          "comment_count": 1131,
          "publish_time": 1584022207000
        },
        {
          "title": "美股大跌",
          "comment_count": 546845120,
          "publish_time": 1584022207000
        }
      ],
      "news_society": [
        {
          "title": "意大利宣布停飞国内大部分航班",
          "comment_count": 34642,
          "publish_time": 1583885723000
        },
        {
          "title": "中国新冠病毒连续两天0",
          "comment_count": 32184462,
          "publish_time": 1583820225000
        },
        {
          "title": "英国或将实施群体免疫",
          "comment_count": 165573,
          "publish_time": 1583820225000
        }
      ],
      "news_entertainment": [
        {
          "title": "227大团结为何所生",
          "comment_count": 10542031,
          "publish_time": 1583820225000
        },
        {
          "title": "黄景瑜跳舞",
          "comment_count": 24546,
          "publish_time": 1583820225000
        },
        {
          "title": "寻找塞班",
          "comment_count": 1546421,
          "publish_time": 1583820225000
        }
      ],
      "news_tech": [
        {
          "title": "看中国黑科技硬核战疫",
          "comment_count": 10542031,
          "publish_time": 1583820225000
        }
      ],
      "news_car": [
        {
          "title": "宝马大战奔驰",
          "comment_count": 1131,
          "publish_time": 1584022207000
        }
      ],
      "news_finance": [
        {
          "title": "美股大跌",
          "comment_count": 546845120,
          "publish_time": 1584022207000
        }
      ]
    }
  },
  onReady: function() {
    //创建动画实例
    this.animation = wx.createAnimation({
      //动画持续时间
      duration: 2000,
      //linear 动画一直较为均匀
      //ease 从匀速到加速再到匀速
      //ease-in 缓慢到匀速
      //ease-in-out 从缓慢到匀速再到缓慢
      timingFunction: 'ease'
    })
    //读取屏幕高度
    var res = wx.getSystemInfoSync();
    var width = res.screenHeight - 40 - 50;
    //设置scroll-view高度
    this.setData({
      viewHeight: width
    });
  },

  //类型单击事件
  typeClick(e) {
    var idx = e.currentTarget.dataset.idx;
    var that = this;
    that.setData({
      curpage: e.target.id
    });
    //初始化页码从0开始
    this.setData({
      listpage: 0
    });
    //设置分类
    this.setData({
      category: idx
    });
    //获取新闻
    this.readList()
  },
  //加载更多scroll-view bindscrolltolower事件
  addMoreData(e) {
    //页码加1，继续获取新闻
    var that = this;
    var pageTemp = (this.data.listpage + 1)
    that.setData({
      listpage: pageTemp
    });
    //获取新闻
    this.readList()
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function() {
    //初始化页码从0开始
    this.setData({
      listpage: 0
    });
    //默认显示所以新闻
    this.readList("all")
  },

  //获取新闻列表
  readList() {
    //如果是第一页，坐标是0，数组先清空
    if (this.data.listpage == 0) {
      this.setData({
        detaildata: [],
      });
    }
    //解析数据
    var theme = this.data.category
    var dataArr = this.data.allnews[theme]; 

    //修改数组
    this.setData({
      detaildata: dataArr,
    });
  }
})